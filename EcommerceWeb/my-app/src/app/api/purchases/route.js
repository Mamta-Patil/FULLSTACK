import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../lib/nextauth';
import connectMongoDB from '../../../lib/mongodb';
import Purchase from '@/model/Purchase';

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { item, price } = await request.json();
    await connectMongoDB();
    const purchase = new Purchase({
      userId: session.user.id,
      item,
      price,
    });
    
    await purchase.save();
    return NextResponse.json({ message: 'Purchase recorded' }, { status: 201 });
  } catch (error) {
    console.error('Purchase error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await connectMongoDB();
    const purchases = await Purchase.find({ userId: session.user.id });
    return NextResponse.json(purchases, { status: 200 });
  } catch (error) {
    console.error('Fetch purchases error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}