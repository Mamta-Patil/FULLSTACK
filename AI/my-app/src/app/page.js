import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to AI Inventory Management</h2>
      <p className="text-lg text-gray-600 mb-8">Manage your inventory with AI-driven insights and seamless CRUD operations.</p>
      <Link href="/dashboard">
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
