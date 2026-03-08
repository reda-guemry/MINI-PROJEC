import { useContext } from "react";
import { CardContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CardContext);

//   console.log('diejdiejd');
  
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);


  if (cart.length === 0) {
    return (
      <div className="text-center mt-32">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Your Card is empty  🛒
        </h2>
        <Link
          to="/"
          className="text-blue-600 font-semibold text-lg hover:underline"
        >
          Back to the main page to add to card
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4">Card :</h2>

      <div className="flex flex-col gap-6">
        {cart.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 object-contain"
              />
              <h3
                className="font-semibold text-lg w-64 truncate"
                title={product.title}
              >
                {product.title}
              </h3>
            </div>

            <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center bg-gray-50 p-6 rounded-lg border">
        <span className="text-2xl font-bold"> Total :</span>
        <span className="text-3xl font-bold text-blue-600">
          ${totalPrice.toFixed(2)}{" "}
        </span>
      </div>
    </div>
  );
}


export default Cart ; 