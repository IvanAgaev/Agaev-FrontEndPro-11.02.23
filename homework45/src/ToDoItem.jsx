import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index.js';

export function ToDoItem({id , todo}) {

    const dispatch = useDispatch();
    const deleteToDo = () => {
        dispatch(actions.deleteToDo(todo.id))
    };

    const toggleToDo = () => {
        dispatch(actions.toggleToDo(todo.id))
    };
    
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed}
                    onChange={toggleToDo}
                />
                {todo.title}
            </label>
            <button
                onClick={deleteToDo}
                className="btn btn-danger ">Delete</button>
        </li>
    )
}