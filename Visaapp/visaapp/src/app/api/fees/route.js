export async function POST(request) {
    const { visaType, country } = await request.json();
    // Mock fee calculation
    const fee = visaType === 'tourist' ? 100 : 150;
    return new Response(JSON.stringify({ fee, currency: 'USD' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }