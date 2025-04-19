import axios from 'axios';
import Link from 'next/link';
import CheckoutForm from '../../../components/CheckoutForm';

async function getProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="text-center text-red-600">Product not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain mb-6"
      />
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="productId" value={product.id} />
        <input type="hidden" name="price" value={product.price} />
        <input type="hidden" name="title" value={product.title} />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Buy Now
        </button>
      </form>
      <CheckoutForm productId={product.id} price={product.price} title={product.title} />
      <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Back to Products
      </Link>
    </div>
  );
}   