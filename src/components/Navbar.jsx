import { useContext } from "react";
import { CardContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const storename = "Fake Store Maroc";

  const { cart } = useContext(CardContext);

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          {storename}
        </Link>

        <Link to="/card" className="text-2xl font-bold tracking-wider">
          <div className="font-semibold cursor-pointer hover:text-blue-200 transition">
            🛒 store ({cart.length})
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
