import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of your context state
interface GlobalState {
  data:any
}

//1 Create the context with a default value
const GlobalContext = createContext<GlobalState | undefined>(undefined);

//2 Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define your global state and functions
  const [data, setData] = useState(null)

  useEffect(() => {
    // Fetch data from an API
    const cacheData = localStorage.getItem('allProducts')
    if(cacheData){
      setData(JSON.parse(cacheData))
    }else{
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((json) =>{
          setData(json)
          localStorage.setItem('allProducts',JSON.stringify(json))
        });
    }
  }, []);
  // Provide the state and functions to children components
  return (
    <GlobalContext.Provider value={{ data}}>
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