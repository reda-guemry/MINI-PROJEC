import { useEffect, useState , useContext} from "react";
import { data, Link, useParams } from "react-router-dom";
import { CardContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

//   console.log(id);
  

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(true);

  const { addTocart , cart  } = useContext( CardContext ) ; 

  console.log(cart);
  
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((reponse) => reponse.json())
      .then((data) => {
        setProduct(data) ; 
        setStatus(false) ; 
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      {status ? (
        <p className="text-center text-xl text-blue-600 font-semibold">
          Loading products...
        </p>
      ) : (
        <div className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 flex justify-center border p-5 rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-500 mb-2 uppercase tracking-wide">
              {product.category}
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="text-4xl text-blue-600 font-bold mb-8">
              ${product.price}
            </div>

            <div className="flex gap-4">
              <button onClick={() => addTocart(product)} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 w-full md:w-auto">
                Add to Cart
              </button>

              <Link
                to="/"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-300 w-full md:w-auto text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails ; 