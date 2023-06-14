import { ToDoItem} from "./ToDoItem"
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index';
import { clsx } from 'clsx';

export function ToDoList() {
    const todos = useSelector(state => state.todos)
    const isLoaded = useSelector(state => state.isLoaded)

    return (
        <ul className={clsx('list', isLoaded && 'active')}>
            {todos.length === 0 && "No Todos"}
            {todos.map(((todo) => <ToDoItem id={todo.id} key={todo.id} todo={todo} />))}
        </ul>
    )
}