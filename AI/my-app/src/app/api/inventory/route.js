import { MongoClient, ObjectId } from 'mongodb';

// Initialize MongoDB client once
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('MONGODB_URI is not defined in .env.local');
}
const client = new MongoClient(uri);
let clientPromise;

if (!clientPromise) {
  clientPromise = client.connect().catch((error) => {
    console.error('MongoDB initial connection error:', error);
    throw error;
  });
}

// Helper function to get the database
async function getDb() {
  try {
    await clientPromise; // Ensure client is connected
    const db = client.db('inventory');
    console.log('Connected to MongoDB database: inventory');
    return db;
  } catch (error) {
    console.error('Error accessing database:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const inventory = await db.collection('items').find().toArray();
    console.log('Fetched inventory:', inventory);
    return new Response(JSON.stringify(inventory), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.name || !data.stock || !data.reorderPoint) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }
    const db = await getDb();
    const result = await db.collection('items').insertOne({
      name: data.name,
      stock: parseInt(data.stock),
      reorderPoint: parseInt(data.reorderPoint),
    });
    const newItem = { _id: result.insertedId, ...data };
    console.log('Inserted item:', newItem);
    return new Response(JSON.stringify(newItem), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding item:', error);
    return new Response(JSON.stringify({ error: `Failed to add item: ${error.message}` }), {
      status: 500,
    });
  }
}

export async function PUT(request) {
  try {
    const { id, name, stock, reorderPoint } = await request.json();
    if (!id || !name || !stock || !reorderPoint) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }
    const db = await getDb();
    const result = await db.collection('items').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, stock: parseInt(stock), reorderPoint: parseInt(reorderPoint) } }
    );
    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 });
    }
    console.log('Updated item:', { id, name, stock, reorderPoint });
    return new Response(JSON.stringify({ message: 'Item updated' }), { status: 200 });
  } catch (error) {
    console.error('Error updating item:', error);
    return new Response(JSON.stringify({ error: `Failed to update item: ${error.message}` }), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = Object.fromEntries(new URLSearchParams(request.url.split('?')[1]));
    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
    }
    const db = await getDb();
    const result = await db.collection('items').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 });
    }
    console.log('Deleted item:', { id });
    return new Response(JSON.stringify({ message: 'Item deleted' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting item:', error);
    return new Response(JSON.stringify({ error: `Failed to delete item: ${error.message}` }), {
      status: 500,
    });
  }
}