import { useState, useEffect, useRef } from "react";

const PASSWORD = "letmein";

const POSTS = [
  {
    date: "2026-02-28",
    title: "Why I built this page",
    body: "I wanted a place to think out loud. Somewhere between a journal and a blog, but without the pressure of either. No audience optimization, no SEO, no engagement metrics. Just thoughts that needed a place to live. If you're reading this, you either guessed the password or I gave it to you. Either way, welcome.",
  },
];

const STYLES = `
  .blog-gate {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--dark-bg);
  }

  .blog-gate-title {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 32px;
  }

  .blog-gate-input {
    width: 280px;
    padding: 14px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.1em;
    color: var(--dark-text);
    background: rgba(232, 224, 208, 0.06);
    border: 1px solid rgba(232, 224, 208, 0.12);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .blog-gate-input::placeholder {
    color: var(--dark-text-faint);
  }

  .blog-gate-input:focus {
    border-color: var(--accent);
  }

  .blog-gate-hint {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--dark-text-faint);
    margin-top: 16px;
  }

  @keyframes blog-shake {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-8px); }
    30% { transform: translateX(8px); }
    45% { transform: translateX(-6px); }
    60% { transform: translateX(6px); }
    75% { transform: translateX(-3px); }
    90% { transform: translateX(3px); }
  }

  .blog-gate-input.shake {
    animation: blog-shake 0.5s ease;
    border-color: #c0392b;
  }

  .blog-container {
    min-height: 100vh;
    background: var(--dark-bg);
    padding: 120px 24px 80px;
  }

  .blog-inner {
    max-width: 640px;
    margin: 0 auto;
  }

  .blog-header {
    margin-bottom: 64px;
  }

  .blog-title {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 8px;
  }

  .blog-subtitle {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-faint);
  }

  .blog-post {
    padding: 32px 0;
    border-top: 1px solid rgba(232, 224, 208, 0.08);
  }

  .blog-post:last-child {
    border-bottom: 1px solid rgba(232, 224, 208, 0.08);
  }

  .blog-post-date {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--dark-text-faint);
    margin-bottom: 12px;
  }

  .blog-post-title {
    font-family: 'Instrument Serif', serif;
    font-size: 24px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .blog-post-body {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: var(--dark-text-dim);
  }

  @media (max-width: 768px) {
    .blog-container {
      padding: 100px 20px 60px;
    }

    .blog-gate-title,
    .blog-title {
      font-size: 36px;
    }

    .blog-header {
      margin-bottom: 48px;
    }

    .blog-post {
      padding: 24px 0;
    }

    .blog-post-title {
      font-size: 20px;
    }

    .blog-post-body {
      font-size: 14px;
    }
  }
`;

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("blog_auth") === "true"
  );
  const [value, setValue] = useState("");
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!authed && inputRef.current) {
      inputRef.current.focus();
    }
  }, [authed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem("blog_auth", "true");
      setAuthed(true);
    } else {
      setShaking(true);
      setValue("");
      setTimeout(() => setShaking(false), 500);
    }
  };

  if (!authed) {
    return (
      <>
        <style>{STYLES}</style>
        <div className="blog-gate">
          <div className="blog-gate-title">Stream</div>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="password"
              className={`blog-gate-input${shaking ? " shake" : ""}`}
              placeholder="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
            />
          </form>
          <div className="blog-gate-hint">this one's private</div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="blog-container">
        <div className="blog-inner">
          <div className="blog-header">
            <div className="blog-title">Stream</div>
            <div className="blog-subtitle">notes to self, shared selectively</div>
          </div>
          {POSTS.map((post, i) => (
            <div className="blog-post" key={i}>
              <div className="blog-post-date">{formatDate(post.date)}</div>
              {post.title && (
                <div className="blog-post-title">{post.title}</div>
              )}
              <div className="blog-post-body">{post.body}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
