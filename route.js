import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
apiKey: process.env.ANTHROPIC_API_KEY
});

export async function POST(request) {
try {
    const body = await request.json();
    const { mentor, userProfile, messages, userMessage } = body;

    const systemPrompt = `You are ${mentor.name}, a ${mentor.title}. ${mentor.bio}

Your coaching style: ${mentor.style}

You have this user's complete profile:
- Name: ${userProfile.name}
- Main Goal: ${userProfile.goal}
- Timeline: ${userProfile.timeline}
- Current Routine: ${userProfile.routine}
- Biggest Challenge: ${userProfile.challenges}
- What They Lack: ${userProfile.lacking}
- What They're Doing Now: ${userProfile.current}
- Their Deep Why: ${userProfile.why}

Your job:
1. Be their relentless personal mentor
2. Give specific actionable guidance for TODAY
3. Hold them accountable
4. Always push them toward their goal
5. Keep responses focused and personal
6. Never be generic`;

    const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    system: systemPrompt,
    messages: [
        ...messages,
        { role: "user", content: userMessage }
    ],
    });

    return Response.json({
    reply: response.content[0].text
    });

} catch (error) {
    return Response.json(
    { error: "Something went wrong" },
    { status: 500 }
    );
}
}