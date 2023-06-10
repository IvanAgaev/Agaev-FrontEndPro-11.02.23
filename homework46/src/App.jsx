import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UsersList } from './components/UsersList'
import axios from 'axios';

export const fetchUrl = 'https://jsonplaceholder.typicode.com';

export const getUsersData = (direction, setter) => {
  axios
    .get(fetchUrl + direction)
    .then((response) => {
      setter([...response.data])
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

};



function App() {

  const [users, setData] = useState([]);

  useEffect(() => {
    getUsersData('/users', setData);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/*' element={<UsersList users={users} />} />
      </Routes>
    </>
  )
}

export default App
