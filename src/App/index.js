import React from 'react';
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI';

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



function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState('');

  // Si cada uno de los elemenos tiene la propiedad como true trae los elementos
  const completedTodos = todos.filter(todos => !!todos.completed).length
  
  const totalTodos = todos.length;

  console.log("Los usuaros buscan todos de " + searchValue);

  console.log("Log 1");
  
  // React.useEffect(() =>{
  //   console.log("Loooooooooooog 2");
  // }
  // );

  // React.useEffect(() =>{
  //   console.log("Loooooooooooog 2");
  // }, []
  // );

  React.useEffect(() =>{
    console.log("Loooooooooooog 2");
  }, [totalTodos]
  );

  console.log("Log 3");

  const searchTodos = todos.filter(
    (todos) => {
      const todoText = todos.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
  
}



export default App;
