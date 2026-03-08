import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {

  const [products, setProducts] = useState([]);

  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((reponse) => reponse.json())
      .then((data) => {
        // console.log(data) ; 
        setProducts(data);
        setStatus(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Products
          </h2>

          {status ? (
            <p className="text-center text-xl text-blue-600 font-semibold">
            Loading products...
          </p>
          ) 
          : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
