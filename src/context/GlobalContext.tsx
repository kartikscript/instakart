import { Product } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of your context state
type CartItem = Product & { quantity: number };

interface GlobalState {
  data:Product[] 
  cartItems:CartItem[] 
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

//1 Create the context with a default value
const GlobalContext = createContext<GlobalState | undefined>(undefined);

//2 Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define your global state and functions
  const [data, setData] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  const fetchData = async () => {
    try {
      let cacheData:string | null = null
      let cacheCartItems:string | null = null
      if(typeof window !== 'undefined'){
         cacheData = window.localStorage.getItem('allProducts')
         cacheCartItems = window.localStorage.getItem('cartItems')
      }
      if(cacheData){
        setData(JSON.parse(cacheData))
        setCartItems(JSON.parse(cacheCartItems || '[]'))
      }else{
        const res = await fetch('https://dummyjson.com/products?limit=50')
        const json = await res.json()
        const data = json.products
        setData(data);
        localStorage?.setItem('allProducts',JSON.stringify(data))
      } 
      
    } catch (error) {
      console.log('Something went wrong in fetching data',error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    localStorage?.setItem('cartItems',JSON.stringify(cartItems || []))
  }, [cartItems])
  
  // Provide the state and functions to children components
  return (
    <GlobalContext.Provider value={{ data, cartItems,setCartItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

//3 Custom hook for using the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};