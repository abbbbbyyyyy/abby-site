import { useEffect, useRef } from "react";

const VERT = `#version 300 es
precision mediump float;
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision mediump float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_mouseInfluence;

const float PI = 3.14159265;

void main() {
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  // Thick vertical flutes — fewer, wider columns
  float stripeFreq = 18.0;
  float stripeX = uv.x * stripeFreq * aspect;

  // Mouse displacement: ripple near cursor
  vec2 dm = uv - u_mouse;
  dm.x *= aspect;
  float dist = length(dm);
  float mouseGlow = u_mouseInfluence * smoothstep(0.45, 0.0, dist);

  // Displacement from mouse — warps stripe phase
  float displacement = mouseGlow * 2.2 * sin(stripeX * 0.4 + u_time * 2.5);
  stripeX += displacement;

  // Smooth rounded glass profile — wide bright center, dark grooves
  float f = fract(stripeX);
  float profile = pow(sin(f * PI), 0.35); // flatter top = wider bright band

  // Specular highlight along ridge center (glass caustic)
  float specular = pow(sin(f * PI), 8.0) * 0.12;

  // Edge darkening in the groove between flutes
  float groove = smoothstep(0.0, 0.12, f) * smoothstep(1.0, 0.88, f);

  // Ambient shimmer — slow, glassy
  float shimmer = 0.012 * sin(stripeX * 0.5 + u_time * 0.6)
                + 0.008 * sin(uv.y * 20.0 + u_time * 0.4);

  // Vertical gradient (brighter in center)
  float vGrad = 1.0 - 0.25 * abs(uv.y - 0.5);
  // Horizontal gradient (dim edges)
  float hGrad = 1.0 - 0.15 * pow(abs(uv.x - 0.5) * 2.0, 2.0);

  // Base brightness — wider range for glass depth
  float base = mix(0.02, 0.13, profile * groove) * vGrad * hGrad + shimmer;
  base += specular * vGrad;

  // Subtle refraction tint — slightly different color on each side of ridge
  float refract = (f - 0.5) * 0.015 * profile;

  // Mouse glow — gold tint near cursor
  vec3 goldTint = vec3(0.545, 0.49, 0.235); // #8B7D3C
  float glowStrength = mouseGlow * 0.15 * (0.4 + 0.6 * profile);
  vec3 color = vec3(base + refract, base, base - refract) + goldTint * glowStrength;

  // Warm tint
  color *= vec3(1.0, 0.98, 0.94);

  fragColor = vec4(color, 1.0);
}`;

function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function createProgram(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(p));
    gl.deleteProgram(p);
    return null;
  }
  return p;
}

let reducedMotionQuery = null;
function getReducedMotionQuery() {
  if (!reducedMotionQuery) {
    reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  }
  return reducedMotionQuery;
}

export default function FlutedGlassBg({ style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const mq = getReducedMotionQuery();
    if (mq.matches) return; // reduced motion — render nothing, CSS fallback

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { alpha: false, antialias: false });
    if (!gl) return;

    // Compile shaders & program
    const vs = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = createProgram(gl, vs, fs);
    if (!prog) return;

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uMouseInf = gl.getUniformLocation(prog, "u_mouseInfluence");

    // State
    let mouseX = 0.5, mouseY = 0.5;
    let smoothX = 0.5, smoothY = 0.5;
    let mouseInfluence = 0;
    let lastMoveTime = 0;
    let animId = 0;
    let running = false;
    let contextLost = false;

    // Sizing
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    resize();

    // Mouse tracking on the about section
    const section = canvas.closest("#about") || canvas.parentElement;

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height; // flip Y for GL
      lastMoveTime = performance.now();
    }

    section.addEventListener("mousemove", onMouseMove);

    // Animation loop
    function frame(now) {
      if (!running || contextLost) return;
      animId = requestAnimationFrame(frame);

      const t = now * 0.001;

      // Lerp mouse
      smoothX += (mouseX - smoothX) * 0.08;
      smoothY += (mouseY - smoothY) * 0.08;

      // Mouse influence decay
      const elapsed = now - lastMoveTime;
      const target = elapsed < 100 ? 1.0 : 0.0;
      const decayRate = target > mouseInfluence ? 0.08 : 0.015;
      mouseInfluence += (target - mouseInfluence) * decayRate;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, smoothX, smoothY);
      gl.uniform1f(uMouseInf, mouseInfluence);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    function start() {
      if (running) return;
      running = true;
      animId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(animId);
    }

    // IntersectionObserver — only animate when visible
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { rootMargin: "100px" }
    );
    io.observe(canvas);

    // WebGL context loss
    function onLost(e) {
      e.preventDefault();
      contextLost = true;
      stop();
    }
    function onRestored() {
      contextLost = false;
      // Re-init would be needed here but context restore is rare;
      // simplest recovery is to re-mount
    }
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    // Reduced motion change listener
    function onMotionChange(e) {
      if (e.matches) stop();
      else start();
    }
    mq.addEventListener("change", onMotionChange);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      section.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      mq.removeEventListener("change", onMotionChange);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    />
  );
}
