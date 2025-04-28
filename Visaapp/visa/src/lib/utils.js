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
                  text: `You are a visa application assistant. Provide accurate and concise responses for visa-related queries in ${language}. Handle requests for:
                  - Visa eligibility (e.g., based on nationality, purpose, duration)
                  - Document checklists (e.g., for specific visa types or countries)
                  - Visa fee calculations
                  - Appointment booking guidance
                  - Application status tracking
                  - Interview preparation tips
                  User message: "${message}"`,
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
  