import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomarel crso e Intro a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Usar estados derivados 2', completed: true },
  { text: 'ALALALLALA', completed: false },
  { text: 'Usar estados derivados', completed: true }
]

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  // Si cada uno de los elemenos tiene la propiedad como true trae los elementos
  const completedTodos = todos.filter(todos => !!todos.completed).length
  
  const totalTodos = todos.length;

  console.log("Los usuaros buscan todos de " + searchValue);

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
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex =  newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>

      {/* Completaste tanto de tantos componentes */}
      <TodoCounter completed={completedTodos} total={totalTodos} />

      {/* Campo qu  e nos deja filtrar Todos */}
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />    

      {/* Lista de Todos */} 
      <TodoList>
          c
        {/* {defaultTodos} */}
        {searchTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = { () => deleteTodo(todo.text)     }
          />
        ))}

      </TodoList>

      {/* Boton que permite crear la funconalidad de crear Todos */}
      <CreateTodoButton />

    </React.Fragment>
  );
}



export default App;
