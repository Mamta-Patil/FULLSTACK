// import { generateBotResponse } from '../../../lib/utils';

// export async function POST(request) {
//   const { message, language } = await request.json();
//   const response = await generateBotResponse(message, language);
//   return new Response(JSON.stringify({ response }), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// import { generateBotResponse } from '../../../../lib/utils';

// export async function POST(request) {
//   const { message, language } = await request.json();
//   const response = await generateBotResponse(message, language);
//   return new Response(JSON.stringify({ response }), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// import { generateBotResponse } from '../../lib/utils';
// import { generateBotResponse } from '../../../../../visaapp/lib/utils';
import { generateBotResponse } from '../../../lib/utils';



export async function POST(request) {
  const { message, language } = await request.json();
  const response = await generateBotResponse(message, language);
  return new Response(JSON.stringify({ response }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}