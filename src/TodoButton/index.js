import React from 'react'
import './CreateTodoButton.css'
function TodoButton(){

    const onClickButton = (msg) => {
        console.log(msg);
    }

    return (
        <button className='CreateTodoButton' onClick={ () => onClickButton('Aca va ir el modal')}>+</button>
    );
}


export {TodoButton};