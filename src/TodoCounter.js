import './TodoCounter.css'

// const estilos = {
//     backgroundColor: 'red',
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48px'
// }

function TodoCounter({total, completed}){
    return (
        <h1 className='TodoCounter'>
            Has completado {completed} de {total} TODOS
        </h1>
    );
  };

export {TodoCounter}