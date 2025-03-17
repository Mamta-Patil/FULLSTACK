const ProductCard = ({ product }) => {
    const exchangeRate = 83; // 1 USD = ₹83
    const priceInINR = product.price * exchangeRate;
  
    const discount = priceInINR > 8300 ? 0.1 : 0.05; // 10% discount for ₹8300+
    const discountedPrice = (priceInINR * (1 - discount)).toFixed(2);
  
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-red-500">
          <span className="line-through text-gray-400">₹{priceInINR.toFixed(2)}</span> → ₹{discountedPrice}
        </p>
      </div>
    );
  };
  
  export default ProductCard;
  