export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, context } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
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
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `You are a sharp, honest decision analyst. No hedging. Be specific.

Decision: ${question.trim()}${context?.trim() ? `\nContext: ${context.trim()}` : ''}

Respond in exactly this format:

PROS:
- [specific pro]
- [specific pro]
- [specific pro]
- [specific pro]

CONS:
- [specific con]
- [specific con]
- [specific con]
- [specific con]

INSIGHT:
[2-3 sentences. Name the real tension. Be direct.]`
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
