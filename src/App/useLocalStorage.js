import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem]  = React.useState(initialValue);
    const [loading, setLoading]  = React.useState(true);
    const [error, setError]  = React.useState(false);

    // Esta parte será asincrona 
    React.useEffect(() =>{
      
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
  
          // Esto solamente aplica para cuando el usuario ingresa por primera vez
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = [];
          } else {
          // Esto aplica cuando 
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
        }catch(error){
            setError(true);
            setLoading(false);
        }
  
        setLoading(false);
      }, 2000);

    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {
      item, 
      saveItem, 
      loading, 
      error
    };
  
  }

export { useLocalStorage }