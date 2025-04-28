// export async function generateBotResponse(message, language) {
//     // Mock bot response logic
//     return `Received your message: "${message}" in ${language}. How can I assist you further?`;
//   }
export async function generateBotResponse(message, language) {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a visa application assistant. Respond to the following user message in ${language}: "${message}"`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return 'Sorry, I could not process your request. Please try again.';
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'An error occurred while processing your request.';
  }
}