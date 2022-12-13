import React from 'react';
import './CreateTodoButton.css';

function TodoButton(props) {

    const onClickButton = () => {

      props.setOpenModal(!props.openModal);

    }

    return (
        <button className='CreateTodoButton' onClick={onClickButton}>+</button>
    );
}


export { TodoButton };