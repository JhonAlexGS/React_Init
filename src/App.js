import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import logo from './platzi.webp';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">

      {/* Completaste tanto de tantos componentes */}
      <TodoCounter completed={16} total={25} />

      {/* Campo qu  e nos deja filtrar Todos */}
      <TodoSearch />

      {/* Lista de Todos */}
      <TodoList>

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

      </TodoList>

      {/* Boton que permite crear la funconalidad de crear Todos */}
      <CreateTodoButton />

      <header className="App-header">
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
      </header>
    </div>
  );
}



export default App;
