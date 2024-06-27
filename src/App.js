import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import logo from './platzi.webp';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomarel crso e Intro a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'ALALALLALA', completed: false },
  { text: 'ALALALLALA', completed: false }
]

function App() {
  return (
    <React.Fragment>

      {/* Completaste tanto de tantos componentes */}
      <TodoCounter completed={16} total={25} />
      <TodoCounter completed={8} total={12} />
      <TodoCounter completed={3} total={5} />

      {/* Campo qu  e nos deja filtrar Todos */}
      <TodoSearch />

      {/* Lista de Todos */}
      <TodoList>

        {/* {defaultTodos} */}
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}

      </TodoList>

      {/* Boton que permite crear la funconalidad de crear Todos */}
      <CreateTodoButton />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos con React
        </a>
      </header> */}
    </React.Fragment>
  );
}



export default App;
