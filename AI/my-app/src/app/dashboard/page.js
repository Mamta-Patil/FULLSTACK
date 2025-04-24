// import InventoryList from './components/InventoryList';
// import PredictionCard from './components/PredictionCard';
// import AddItemModal from './components/AddItemModal';

// export default async function Dashboard() {
//   let inventory = [];
//   try {
//     const res = await fetch('http://localhost:3000/api/inventory', { cache: 'no-store' });
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     const data = await res.json();
//     if (!Array.isArray(data)) {
//       throw new Error('Inventory data is not an array');
//     }
//     inventory = data;
//   } catch (error) {
//     console.error('Error fetching inventory:', error);
//     inventory = [];
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-gray-800">Inventory Dashboard</h2>
//         <AddItemModal />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <InventoryList inventory={inventory} />
//         <PredictionCard inventory={inventory} />
//       </div>
//     </div>
//   );
// }
import InventoryList from './components/InventoryList';
import PredictionCard from './components/PredictionCard';
import AddItemModal from './components/AddItemModal';

export default async function Dashboard() {
  let inventory = [];
  try {
    const res = await fetch('http://localhost:3000/api/inventory', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    if (!Array.isArray(data)) {
      throw new Error('Inventory data is not an array');
    }
    inventory = data;
    console.log('Dashboard fetched inventory:', inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    inventory = [];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight animate-fade-in">
            Inventory Dashboard
          </h1>
          <AddItemModal />
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-slide-up">
            <InventoryList inventory={inventory} />
          </div>
          <div className="animate-slide-up animation-delay-200">
            <PredictionCard inventory={inventory} />
          </div>
        </div>
      </main>
    </div>
  );
}