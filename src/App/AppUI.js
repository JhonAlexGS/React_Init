import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
}){
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
              
            {/* {defaultTodos} */}
            {searchTodos.map(todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text) }
                onDelete = { () => deleteTodo(todo.text) }
              />
            ))}
    
          </TodoList>
    
          {/* Boton que permite crear la funconalidad de crear Todos */}
          <CreateTodoButton />
    
        </React.Fragment>
      );
      
}

export { AppUI };