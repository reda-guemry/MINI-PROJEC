import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0)

  const [products , setProducts] = useState([]) ;
  
  const [status , setStatus] = useState(true) ; 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
      .then(reponse => reponse.json()) 
      .then(data => console.log(data))
      .catch(error => console.error(error))
  } , []) ; 

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      <main className="p-8">
        <h2 className="text-xl text-center mt-10 text-gray-600">
        </h2>
      </main>
    </div>
    </>
  )
}

export default App
