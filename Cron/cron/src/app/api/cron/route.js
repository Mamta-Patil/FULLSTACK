export async function GET(req) {
    // Secure the endpoint with a secret token 
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    // Your cron job logic here (e.g., fetch data, send email, update database)
    console.log('Cron job executed at:', new Date().toISOString());
  
    return new Response(JSON.stringify({ message: 'Cron job executed successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
