import React from "react";

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName)
  
    let parsedItem;
  
    // Esto solamente aplica para cuando el usuario ingresa por primera vez
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify([]));
      parsedItem = [];
    } else {
    // Esto aplica cuando 
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem]  = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem];
  
  }

export { useLocalStorage }