import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ContextoTareas = React.createContext();

function TareaProvider(props) {
    // const [patito, savePatito] = useLocalStorage('PATITOS', 'Fernando');
    const {

        item: todo,
        saveItem: saveTodos,
        loading,
        error

    } = useLocalStorage('TODO_V1', []);

    const [openModal, setOpenModal] = React.useState(false);

    const [searchValue, setSearchValue] = React.useState('');

    const tareasCompletadas = todo.filter(todo => !!todo.completed).length;
    const totalTodos = todo.length;

    let buscarTodasTareas = [];

    if (!searchValue.length >= 1) {
        buscarTodasTareas = todo
    } else {

        buscarTodasTareas = todo.filter(todoss => {

            const textTareas = todoss.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return textTareas.includes(searchText);

        })


    }

    const añadirTarea = (text) => {

        const newTarea = [...todo];

        newTarea.push({
            completed:false,
            text
        })
        
        saveTodos(newTarea);

    };

    const tareasCompletas = (text) => {

        const todoIndex = todo.findIndex(todo => todo.text === text);
        const newTarea = [...todo];

        newTarea[todoIndex].completed = true;
        saveTodos(newTarea);
    };

    const tareasBorradas = (text) => {

        const todoIndex = todo.findIndex(todo => todo.text === text);
        const newTarea = [...todo];

        newTarea.splice(todoIndex, 1);
        saveTodos(newTarea);

    };

    console.log('render after useEfect');

    React.useEffect(() => {
        console.log('use effect');
    }, [totalTodos]);

    console.log('render before useEfect');


    return (

        <ContextoTareas.Provider value={{
        
            loading,
            error,
            totalTodos,
            tareasCompletadas,
            añadirTarea,
            searchValue,
            setSearchValue,
            tareasCompletas,
            tareasBorradas,
            buscarTodasTareas,
            setOpenModal,
            openModal

        }}>
            {props.children}
        </ContextoTareas.Provider>

    );
}

export {TareaProvider, ContextoTareas};