export async function POST(request) {
    const { nationality, purpose, duration } = await request.json();
    // Mock eligibility check logic
    const eligible = nationality && purpose && duration > 0;
    return new Response(JSON.stringify({ eligible, message: eligible ? 'You are eligible!' : 'Ineligible. Please check requirements.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }