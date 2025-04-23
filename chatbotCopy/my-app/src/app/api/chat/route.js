// // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // // export async function POST(request) {
// // //   try {
// // //     console.log("Received POST request to /api/chat");
// // //     const { message, history } = await request.json();
// // //     console.log("Request body:", { message, history });

// // //     // Validate history roles
// // //     const validRoles = ["user", "model", "function", "system"];
// // //     history.forEach((msg, index) => {
// // //       if (!validRoles.includes(msg.role)) {
// // //         throw new Error(`Invalid role at index ${index}: ${msg.role}`);
// // //       }
// // //     });

// // //     const chat = model.startChat({
// // //       history: history.map((msg) => ({
// // //         role: msg.role,
// // //         parts: [{ text: msg.content }],
// // //       })),
// // //     });

// // //     console.log("Sending message to Gemini:", message);
// // //     const result = await chat.sendMessage(message);
// // //     const response = await result.response;
// // //     const text = response.text();
// // //     console.log("Gemini response:", text);

// // //     return new Response(JSON.stringify({ reply: text }), {
// // //       status: 200,
// // //       headers: { "Content-Type": "application/json" },
// // //     });
// // //   }

// // //    catch (error) {
// // //     console.error("Error in chat API:", error);
// // //     return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
// // //       status: 500,
// // //       headers: { "Content-Type": "application/json" },
// // //     });
// // //   }

// // // }
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // export async function POST(request) {
// //   try {
// //     console.log("Received POST request to /api/chat");
// //     const { message, history } = await request.json();
// //     console.log("Request body:", { message, history });

// //     // Validate history roles
// //     const validRoles = ["user", "model", "function", "system"];
// //     history.forEach((msg, index) => {
// //       if (!validRoles.includes(msg.role)) {
// //         throw new Error(`Invalid role at index ${index}: ${msg.role}`);
// //       }
// //     });

// //     // Ensure DinoBot context for dinosaur-only responses
// //     const chat = model.startChat({
// //       history: [
// //         {
// //           role: "user",
// //           parts: [{ text: "You are DinoBot, an expert on dinosaurs and prehistoric life. Only answer questions related to dinosaurs and prehistoric topics. Respond concisely, engagingly, and accurately. If the question is unrelated, politely redirect to dinosaurs." }],
// //         },
// //         ...history.map((msg) => ({
// //           role: msg.role,
// //           parts: [{ text: msg.content }],
// //         })),
// //       ],
// //     });

// //     console.log("Sending message to Gemini:", message);
// //     const result = await chat.sendMessage(message);
// //     const response = await result.response;
// //     const text = response.text();
// //     console.log("Gemini response:", text);

// //     return new Response(JSON.stringify({ reply: text }), {
// //       status: 200,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   } catch (error) {
// //     console.error("Error in chat API:", error);
// //     return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
// //       status: 500,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   }
// // }
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export async function POST(request) {
//   try {
//     console.log("Received POST request to /api/chat");
//     const { message, history } = await request.json();
//     console.log("Request body:", { message, history });

//     // Validate history roles
//     const validRoles = ["user", "model", "function", "system"];
//     history.forEach((msg, index) => {
//       if (!validRoles.includes(msg.role)) {
//         throw new Error(`Invalid role at index ${index}: ${msg.role}`);
//       }
//     });

//     // Ensure DinoBot context for user-friendly, dinosaur-only responses
//     const chat = model.startChat({
//       history: [
//         {
//           role: "user",
//           parts: [
//             {
//               text: "You are DinoBot, a fun and friendly expert on dinosaurs and prehistoric life. Answer only questions about dinosaurs, pterosaurs, and other prehistoric creatures in an enthusiastic, conversational tone that’s easy to understand, like talking to a curious friend. Use vivid descriptions and fun facts to make answers engaging. Avoid overly technical terms unless asked. If the question is unrelated, respond with a playful redirection to dinosaurs, like suggesting a cool dinosaur topic. Keep responses concise, under 150 words.",
//             },
//           ],
//         },
//         ...history.map((msg) => ({
//           role: msg.role,
//           parts: [{ text: msg.content }],
//         })),
//       ],
//       generationConfig: {
//         temperature: 0.9, // Increase creativity for engaging responses
//         maxOutputTokens: 150, // Keep responses concise
//       },
//     });

//     console.log("Sending message to Gemini:", message);
//     const result = await chat.sendMessage(message);
//     const response = await result.response;
//     const text = response.text();
//     console.log("Gemini response:", text);

//     return new Response(JSON.stringify({ reply: text }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error in chat API:", error);
//     return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
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

    // Ensure DinoBot context for short, simple, dinosaur-only responses
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are DinoBot, a super fun dinosaur expert! Answer only about dinosaurs or prehistoric creatures in 1-2 short, simple sentences with a playful, kid-friendly tone. Use no complex words. If the question isn’t about dinosaurs, say something fun like ‘Let’s talk dinos!’ and suggest a dino topic.",
            },
          ],
        },
        ...history.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7, // Slightly less creative for simpler responses
        maxOutputTokens: 50, // Enforce very short answers (~30-50 words)
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