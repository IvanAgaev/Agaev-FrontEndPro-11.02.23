import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index.js';
import { deleteUsers, updateUsers } from './asyncfunc.jsx';

export function ToDoItem({id , todo}) {

    const dispatch = useDispatch();
    const deleteToDo = () => {
        dispatch(deleteUsers(todo.id))
    };

    const toggleToDo = () => {
        dispatch(updateUsers(String(todo.id), todo))
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