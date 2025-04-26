// API route for cron job
export async function GET(request) {
    const authHeader = request.headers.get('authorization');
    const secretKey = process.env.CRON_SECRET || 'my-secret-key'; // Store in .env for production
  
    if (authHeader !== `Bearer ${secretKey}`) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    const executionTime = new Date().toISOString();
    // Simulate cron job logic (e.g., update database, send email)
    console.log(`Cron job executed at: ${executionTime}`);
  
    // For demo: Store execution time in a JSON file (use a database in production)
    const fs = require('fs').promises;
    const path = require('path');
    const logFile = path.join(process.cwd(), 'cron-log.json');
    let logs = [];
    try {
      const data = await fs.readFile(logFile, 'utf8');
      logs = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet
    }
    logs.push({ timestamp: executionTime });
    await fs.writeFile(logFile, JSON.stringify(logs, null, 2));
  
    return new Response(JSON.stringify({ message: 'Cron job executed', timestamp: executionTime }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
