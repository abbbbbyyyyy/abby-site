export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, responses } = req.body;

  if (!action) {
    return res.status(400).json({ error: 'Action is required' });
  }

  try {
    if (action === 'generate') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [{
            role: 'user',
            content: `Generate 10 rapid-fire scenarios for a psychological assessment game called "Gut Check." Each scenario is ONE short punchy sentence — think barstool dilemma, not philosophy textbook. Options are 3-8 words max each, labeled A-D.

VIBE: funny, weird, slightly unhinged, but psychologically revealing. Like "would you rather" meets a personality test written by someone who's had two drinks.

The scenarios should sneakily probe:
- Risk tolerance and loss aversion
- Social conformity vs independence
- Moral flexibility
- Intuition vs deliberation
- Short-term vs long-term thinking
- Cooperation vs competition

Examples of the RIGHT tone:
- "Your friend's band is terrible but they just invited you to their show."
- "You find $20 in a jacket you're about to return to a store."
- "A coworker takes credit for your idea in a meeting."

Examples of the WRONG tone (too heavy, too long):
- "You discover that a large corporation has been secretly dumping waste..."
- "A colleague confides that they've been falsifying quarterly reports..."

Return ONLY a JSON array, no other text. Each element:
{"scenario": "...", "options": {"A": "...", "B": "...", "C": "...", "D": "..."}}`
          }]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({ error: data.error?.message || 'API error' });
      }

      const text = data.content?.map(b => b.text || '').join('') || '';

      // Extract JSON array from response
      const match = text.match(/\[[\s\S]*\]/);
      if (!match) {
        return res.status(500).json({ error: 'Failed to parse scenarios' });
      }

      const scenarios = JSON.parse(match[0]);
      return res.status(200).json({ scenarios });

    } else if (action === 'analyze') {
      if (!responses || !Array.isArray(responses)) {
        return res.status(400).json({ error: 'Responses array is required' });
      }

      const formatted = responses.map((r, i) => {
        const status = r.timedOut ? '[TIMED OUT]' : `chose ${r.chosenOption}: "${r.chosenLabel}" (${r.timeLeft.toFixed(1)}s remaining)`;
        return `${i + 1}. ${r.scenario}\n   → ${status}`;
      }).join('\n');

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
            content: `You are a sharp behavioral psychologist analyzing rapid-fire gut reactions from a timed personality game. The player had 12 seconds per scenario — their choices reveal instinct, not deliberation.

Here are their responses:
${formatted}

Analyze using real frameworks — prospect theory, dual process theory, social identity theory, Big Five correlates, regulatory focus theory. Be specific and witty, not generic. Reference their actual choices.

Respond in EXACTLY this format:
PROFILE: [1-2 word label, e.g. "Calculated Rebel" or "Cautious Optimizer"]
SUMMARY: [2-3 sentences — the sharp read on who this person is under pressure]
PATTERNS:
- [specific pattern with framework reference]
- [specific pattern with framework reference]
- [specific pattern with framework reference]
- [specific pattern with framework reference]
BLIND SPOT: [1-2 sentences — what they probably don't see about themselves]`
          }]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({ error: data.error?.message || 'API error' });
      }

      const text = data.content?.map(b => b.text || '').join('') || '';
      return res.status(200).json({ text });

    } else {
      return res.status(400).json({ error: 'Invalid action. Use "generate" or "analyze".' });
    }

  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
