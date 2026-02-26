export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ error: 'Event is required' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{
          role: 'user',
          content: `You are a world-class excuse architect. Your alibis are witty, dry, and hyper-specific to the event described. Never be generic — every excuse must feel tailored. Escalate from lazy to airtight.

Event to skip: ${event.trim()}

Respond in exactly this format (use the exact level names below):

LEVEL 1 — Barely Trying
[A lazy, low-effort excuse. Barely plausible. The kind of thing you'd text 5 minutes before.]

LEVEL 2 — Plausible If Nobody Thinks About It
[Sounds okay at first glance but falls apart under any follow-up question.]

LEVEL 3 — Actually Decent
[A solid, believable excuse with enough detail to hold up in casual conversation.]

LEVEL 4 — Committed to the Bit
[Requires some setup or props but is genuinely convincing. You'd need to maintain the story.]

LEVEL 5 — Nuclear Option
[An airtight, multi-layered alibi. Unimpeachable. Possibly involves fake evidence or emotional manipulation. Ethically questionable but bulletproof.]`
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    const text = data.content?.map(b => b.text || '').join('') || '';
    return res.status(200).json({ text });

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
