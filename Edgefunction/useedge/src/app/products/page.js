export default async function ProductsPage() {
    // Fetch products from fake store API
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache', // Ensure Turbopack caches the API response
    });
    const products = await res.json();
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              {product.title} - CURRENCY_PLACEHOLDER {product.price}
              {/* Changed {{CURRENCY}} to CURRENCY_PLACEHOLDER to avoid ReferenceError */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  