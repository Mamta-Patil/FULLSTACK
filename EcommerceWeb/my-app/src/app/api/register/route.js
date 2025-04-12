import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import User from '@/model/User';
import connectMongoDB from '@/lib/mongodb';


export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    await connectMongoDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}