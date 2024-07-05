import './TodoCounter.css'

// const estilos = {
//     backgroundColor: 'red',
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48px'
// }

function TodoCounter({total, completed}){

    let mensagge = "";

    if (total == 0) {
        mensagge = "Agrega un ToDo"
    }else if (completed == total){
        mensagge = "Todos los  ToDos se completaron exitosamente 😜😜"
    }else{
        mensagge = `Se completaron ${completed} de ${total} ToDos`;
    }
    
    return (
        <h1 className='TodoCounter'>
            {mensagge}
        </h1>
    );       
        
  };

export {TodoCounter}