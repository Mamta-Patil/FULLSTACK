// app/api/documents/route.js
import { visaData } from '../../lib/visaData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const visaType = searchParams.get('visa');

  if (!visaType || !visaData[visaType]) {
    return new Response(JSON.stringify({ error: 'Invalid visa type' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ documents: visaData[visaType] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}