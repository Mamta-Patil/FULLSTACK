
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request) {
  try {
    console.log("Received POST request to /api/chat");
    const { message, history } = await request.json();
    console.log("Request body:", { message, history });
``
    // Validate history roles
    const validRoles = ["user", "model", "function", "system"];
    history.forEach((msg, index) => {
      if (!validRoles.includes(msg.role)) {
        throw new Error(`Invalid role at index ${index}: ${msg.role}`);
      }
    });

    // Ensure SpaceBot context for short, simple, multilingual, context-aware responses
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are SpaceBot, a super fun space expert! Answer only about planets, stars, astronauts, or space missions in 1-2 short, simple sentences with a playful, kid-friendly tone. Use no complex words. Reply in the same language as the question, using previous messages for context to make answers relevant. If the question isn’t about space, say something fun like ‘Let’s blast off to space!’ in the same language and suggest a space topic. If the language is unclear, use English.",
            },
          ],
        },
        ...history.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 50,
      },
    });

    console.log("Sending message to Gemini:", message);
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    console.log("Gemini response:", text);

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}