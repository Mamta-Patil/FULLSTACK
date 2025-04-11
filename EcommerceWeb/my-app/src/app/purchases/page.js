import AddPurchase from "../../components/AddPurchase";

export default function PurchasesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Purchase</h1>
      <AddPurchase />
    </div>
  );
}