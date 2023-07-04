import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import {ToDoList} from './ToDoList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, addUser } from './asyncfunc';
import { useEffect } from 'react';

export default function App() {
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchUsers())

  }, [])

  const dispatch = useDispatch();
  console.log(useSelector(state => state.isLoaded))

  function addTodo(title) {
    dispatch(addUser(title))
    dispatch(fetchUsers())
    
    
  }

  return (
    <>
     <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ToDoList/>
    </>)
}