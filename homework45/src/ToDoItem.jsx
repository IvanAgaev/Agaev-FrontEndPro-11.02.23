import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index.js';

export function ToDoItem({id}) {
    const todo = useSelector(state => state.todos.find(obj => obj.id === id));

    const dispatch = useDispatch();
    const deleteToDo = (id) => {
        dispatch(actions.deleteToDo(id))
    };

    const toggleToDo = (id) => {
        dispatch(actions.toggleToDo(id))
    };
    
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed}
                    onChange={e => toggleToDo(todo.id)}
                />
                {todo.title}
            </label>
            <button
                onClick={(e) => { e.preventDefault(); deleteToDo(todo.id) } }
                className="btn btn-danger ">Delete</button>
        </li>
    )
}