import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../lib/nextauth';
import connectMongoDB from '../../../lib/mongodb';
import Purchase from '@/model/Purchase';
// import Purchase from '../../../models/Purchase';

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { message } = await request.json();
    await connectMongoDB();
    const purchases = await Purchase.find({ userId: session.user.id });
    const purchaseSummary = purchases.length
      ? `The user has made ${purchases.length} purchases: ${purchases
          .map((p) => `${p.item} for $${p.price}`)
          .join(', ')}.`
      : 'The user has no purchase history.';

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const prompt = `
      You are a friendly chatbot. Personalize your response based on the user's purchase history: ${purchaseSummary}
      Respond to the user's message: "${message}"
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}