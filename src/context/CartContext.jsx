import { useState , createContext } from "react";

export const CardContext = createContext() ;  


function CartProvider( {children } ) 
{

    const [cart , setCart] = useState([]) ; 

    const addTocart = (product) => {
        setCart([...cart , product]) ;
    }

    return (
        <CardContext.Provider value={{cart , addTocart}} >
            {children}
        </CardContext.Provider >
    )

} 

export {CartProvider} ; 


