export async function POST(request) {
    const { applicationId } = await request.json();
    // Mock status check
    const status = applicationId ? 'In Progress' : 'Invalid ID';
    return new Response(JSON.stringify({ status }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }