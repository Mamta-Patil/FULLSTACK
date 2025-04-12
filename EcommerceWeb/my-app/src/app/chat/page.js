// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { personalizeResponse } from "../../../../lib/chatbotLogic";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export async function POST(request) {
//   try {
//     console.log("Received POST request to /api/chat");
//     const { message, history, userId } = await request.json(); // Added userId
//     console.log("Request body:", { message, history, userId });

//     // Validate history roles
//     const validRoles = ["user", "model", "function", "system"];
//     history.forEach((msg, index) => {
//       if (!validRoles.includes(msg.role)) {
//         throw new Error(`Invalid role at index ${index}: ${msg.role}`);
//       }
//     });

//     const chat = model.startChat({
//       history: history.map((msg) => ({
//         role: msg.role,
//         parts: [{ text: msg.content }],
//       })),
//     });

//     console.log("Sending message to Gemini:", message);
//     const result = await chat.sendMessage(message);
//     const response = await result.response;
//     const geminiText = response.text();
//     console.log("Gemini response:", geminiText);

//     // Personalize response if user is logged in
//     const finalResponse = await personalizeResponse(message, userId, geminiText);

//     return new Response(JSON.stringify({ reply: finalResponse }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error in chat API:", error);
//     return new Response(
//       JSON.stringify({ error: error.message || "Something went wrong" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/nextauth';
// import ChatWindow from '../../components/ChatWindow';
import { redirect } from 'next/navigation';
import ChatWindow from '@/component/ChatWindow';

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }
  return <ChatWindow />;
}