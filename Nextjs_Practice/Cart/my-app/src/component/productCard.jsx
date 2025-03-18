const ProductCard = ({ product }) => {
  const discountPercentage = 10; 
  const discountAmount = (product.price * discountPercentage) / 100; // Calculate discount
  const actualPrice = (product.price - discountAmount).toFixed(2); // Final price after discount

    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-red-500">
          <p> {product.price} </p>
          <p>Discount: {discountPercentage}% (₹{discountAmount.toFixed(2)})</p>
          <p> Actual Price : {actualPrice}  </p>
        </p>
      </div>
    );
  };
  
  export default ProductCard;
  