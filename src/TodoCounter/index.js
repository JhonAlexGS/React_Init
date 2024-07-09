import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

// const estilos = {
//     backgroundColor: 'red',
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48px'
// }

function TodoCounter(){

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    let mensagge = "";

    if (totalTodos === 0) {
        mensagge = "Agrega un ToDo"
    }else if (completedTodos === totalTodos){
        mensagge = "Todos los  ToDos se completaron exitosamente 😜😜"
    }else{
        mensagge = `Se completaron ${completedTodos} de ${totalTodos} ToDos`;
    }
    
    return (
        <h1 className='TodoCounter'>
            {mensagge}
        </h1>
    );       
        
  };

export {TodoCounter}