import React from 'react';
import { AppUI } from './AppUI';
import { TareaProvider } from '../TodoContext';

// const defaultTodo = [
//   { text: 'Leer un libro', completed: true },
//   { text: 'Bañarme v:', completed: false },
//   { text: 'Hacer algo', completed: false },

// ]

/**
 * creando Rect Huck
**/

function App() {


  return (
    <TareaProvider>
       <AppUI/>
    </TareaProvider>
  );
}


export default App;
