import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request) {
  try {
    console.log("Received POST request to /api/chat");
    const { message, history } = await request.json();
    console.log("Request body:", { message, history });

    // Validate history roles
    const validRoles = ["user", "model", "function", "system"];
    history.forEach((msg, index) => {
      if (!validRoles.includes(msg.role)) {
        throw new Error(`Invalid role at index ${index}: ${msg.role}`);
      }
    });

    const chat = model.startChat({
      history: history.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
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
  }

   catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

}
