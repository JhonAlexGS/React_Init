import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {  EmptyTodos } from "../EmptyTodos"
import {  TodosError } from "../TodosError"
import {  TodosLoading } from "../TodosLoading"
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';



function AppUI(){

  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,    
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);


    return (
        <React.Fragment>
    
          {/* Completaste tanto de tantos componentes */}
          <TodoCounter />
      
          {/* Campo qu  e nos deja filtrar Todos */}
          <TodoSearch />    
          
          <TodoList>
            
          {loading && (
              <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {(!loading && searchTodos.lenght === 0) && <EmptyTodos />}
            
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
          <CreateTodoButton setOpenModal = {setOpenModal}/>

          {
            openModal && (
              <Modal>
                La funcionalidad de agregar ToDo
              </Modal>
            )
          }
    
        </React.Fragment>
      );
      
}

export { AppUI };