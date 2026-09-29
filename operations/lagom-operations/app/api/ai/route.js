export async function POST(req) {
  try {
    const { messages, systemPrompt } = await req.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: 'ANTHROPIC_API_KEY is not set in environment variables. Add it to your .env.local file or Vercel environment settings.' },
        { status: 500 }
      );
    }

    // Ensure messages array starts with a user turn (Anthropic API requirement)
    const filtered = (messages || []).filter(m => m.role === 'user' || m.role === 'assistant');
    const startIdx = filtered.findIndex(m => m.role === 'user');
    const apiMessages = startIdx >= 0 ? filtered.slice(startIdx) : [];

    if (!apiMessages.length) {
      return Response.json({ content: 'Please send a message.' });
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        system: systemPrompt || 'You are Lagom AI, a helpful CRM assistant for Lagom Naturals.',
        messages: apiMessages,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return Response.json({ error: errText }, { status: res.status });
    }

    const data = await res.json();
    const content = data?.content?.[0]?.text || 'No response received.';
    return Response.json({ content });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
