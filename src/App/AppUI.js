import React from 'react';
import { ContextoTareas } from '../TodoContext';
import { TodoCounter } from '../TodoConter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

    const {

        error,
        loading,
        buscarTodasTareas,
        tareasBorradas,
        tareasCompletas,
        openModal,
        setOpenModal

    } = React.useContext(ContextoTareas);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />


            <TodoList>
                {error && <p>Desesperate hubo un error</p>}
                {loading && <p>Estamos cargando Espera...</p>}
                {(!loading && !buscarTodasTareas.length) && <p>Crea un Todo!!</p>}

                {buscarTodasTareas.map(data => (

                    <TodoItem
                        completed={data.completed}
                        key={data.text}
                        text={data.text}
                        onCompleted={() => tareasCompletas(data.text)}
                        onDeleted={() => tareasBorradas(data.text)}
                    />

                ))}
                <TodoItem />

            </TodoList>

                {!!openModal && (
                     <Modal>

                     {!!openModal && (
                        
                        <TodoForm/>
                        
                     )}
     
                 </Modal>
                )}
           
            <TodoButton 
            setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };