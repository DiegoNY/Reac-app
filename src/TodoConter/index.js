import React from "react";
import { ContextoTareas } from "../TodoContext";
import './TodoCounter.css';


function TodoCounter () {

    const {totalTodos,tareasCompletadas} = React.useContext(ContextoTareas);

    return  (
        <h2 className="TodoCounter" >Has echo {tareasCompletadas} tareas de {totalTodos}</h2>
    );

}

export {TodoCounter} ;