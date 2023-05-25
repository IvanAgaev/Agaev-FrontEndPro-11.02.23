import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Table from './components/Table';
import FormCustom from './components/FormCustom';

function App() {
  const [data, setData] = useState([]);

  const fetchUrl = 'https://jsonplaceholder.typicode.com/users';

  const fetchUsers = () => {
    axios.get(fetchUrl)
      .then((response) => {
        console.log(response);
        setData([...data, ...response.data])
    
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <Table data={data} />
      <FormCustom data={data} setData={setData} />
    </>
  )
}

export default App;
