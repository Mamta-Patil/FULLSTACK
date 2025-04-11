import { getDb } from "../../../lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const { itemName } = await request.json();
    if (!itemName) {
      return new Response(JSON.stringify({ error: "Item name is required" }), {
        status: 400,
      });
    }

    const db = await getDb();
    await db.collection("purchases").insertOne({
      userId: session.user.id,
      itemName,
      purchaseDate: new Date(),
    });

    return new Response(JSON.stringify({ message: "Purchase added" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding purchase:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}