import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {

  // console.log('jeijdedjijd')

  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home /> } />

          <Route path="/product/:id" element={< ProductDetails  />} />

          <Route path="/card" element={<Cart />} />

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
