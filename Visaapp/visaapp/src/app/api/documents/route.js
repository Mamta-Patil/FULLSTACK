export async function POST(request) {
    const { visaType, country } = await request.json();
    // Mock document checklist
    const documents = [
      'Passport',
      'Visa Application Form',
      'Proof of Funds',
      'Travel Itinerary',
    ];
    return new Response(JSON.stringify({ documents }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }