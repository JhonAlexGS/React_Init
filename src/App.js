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
  { text: 'ALALALLALA', completed: false }
]

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log("Los usuaros buscan todos de " + searchValue);

  return (
    <React.Fragment>

      {/* Completaste tanto de tantos componentes */}
      <TodoCounter completed={16} total={25} />

      {/* Campo qu  e nos deja filtrar Todos */}
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />

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

    </React.Fragment>
  );
}



export default App;
