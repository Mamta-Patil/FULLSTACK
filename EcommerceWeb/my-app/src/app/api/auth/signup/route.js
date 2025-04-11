import { getDb } from "../../../../lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400 }
      );
    }

    const db = await getDb();
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "User created" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}