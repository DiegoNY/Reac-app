import React from 'react'
import { ContextoTareas } from '../TodoContext';
import './TodoSearch.css'
function TodoSearch() {
    
    const {searchValue, setSearchValue} = React.useContext(ContextoTareas);

    const onSearchValueChange = (event) => {
        
        let tarea = event.target.value;
        console.log(tarea);
        setSearchValue(tarea);
        
    }
    
    return (

        <input 
        className='TodoSearch' 
        placeholder='Busca una de tus tareas' 
        value={searchValue}
        onChange={onSearchValueChange}
        />

    )

}

export { TodoSearch };