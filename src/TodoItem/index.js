import React, { useState } from 'react';
import './TodoItems.css';

function TodoItem(props){  
    
      
    return(
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onCompleted}    
            > <i>✔</i> </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className='Icon Icon-delete'
            onClick={props.onDeleted}
            >X</span>
        </li>
    );
}

export {TodoItem};

