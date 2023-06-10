import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import {ToDoList} from './ToDoList'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index';

export default function App() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function addTodo(title) {
    dispatch(actions.addToDo(title))
  }

  return (
    <>
     <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ToDoList/>
    </>)
}