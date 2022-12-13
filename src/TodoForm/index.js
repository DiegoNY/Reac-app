import React from 'react';
import { ContextoTareas } from '../TodoContext';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {

        añadirTarea,
        setOpenModal,

    } = React.useContext(ContextoTareas)

    const onChange = (event) => {

        setNewTodoValue(event.target.value);

    }

    const onCancel = () => {

        setOpenModal(false);

    }

    const onSubmit = (event) => {

        event.preventDefault();
        añadirTarea(newTodoValue);
        setOpenModal(false);

    }

    return (
        <form onSubmit={onSubmit}>

            <label>....</label>
            <textarea
                value={newTodoValue}
                placeholder='Leer un libro'
                onChange={onChange}
            />

            <div>
                <button
                    onClick={onCancel}
                    type='button'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export { TodoForm };