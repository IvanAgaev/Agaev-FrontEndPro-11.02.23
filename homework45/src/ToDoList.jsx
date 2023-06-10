import { ToDoItem} from "./ToDoItem"
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index';

export function ToDoList() {
    const todos = useSelector(state => state.todos)

    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(((todo) => {
                return (
                    <ToDoItem id={todo.id} key={todo.id}/>
                )
            }))}
        </ul>
    )
}