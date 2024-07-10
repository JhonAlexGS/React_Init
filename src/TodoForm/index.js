import React from "react"
import './TodoForm.css'

function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder='Cortar Cebolla para el almuerzo'z/>


            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button
                    TodoForm-button--cancel">
                        Cancelar
                    </button>
                <button 
                    className="TodoForm-button
                    TodoForm-button--add">
                    Añadir
                    </button>
                
            </div>
            
            
        </form>
    );
}

export {TodoForm}