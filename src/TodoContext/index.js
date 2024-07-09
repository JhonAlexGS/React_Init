import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( { children } ){

    // Aquí encapsulamos toda la logica que queramos compartir entre todos los componentes
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
        }}>
            { children }
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };