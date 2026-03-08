import { Link } from "react-router-dom";

function ProductCard({ product }) {
  //   console.log(product);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center cursor-pointer" >
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mb-4"
        />

        <h3 className="font-bold text-lg w-full truncate" title={product.title}>
          {product.title}
        </h3>
      </Link>

      <p className="text-gray-500 text-sm w-full truncate mb-2">
        {product.category}
      </p>

      <div className="w-full flex justify-between items-center mt-auto">
        <p className="text-blue-600 font-bold text-xl">${product.price}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
