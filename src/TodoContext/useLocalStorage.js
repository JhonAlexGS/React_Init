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

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomarel crso e Intro a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Usar estados derivados 2', completed: true },
//   { text: 'ALALALLALA', completed: false },
//   { text: 'Usar estados derivados', completed: true }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

export { useLocalStorage }