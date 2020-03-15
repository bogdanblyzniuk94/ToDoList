import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AddToDoItem from '../AddToDoItem/AddToDoItem.js';
import TodoList from '../TodoList/TodoList.js';


function Main () {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(function (response) {
        const post = response.data;
        setData(post);
        console.log(post);
    })
    .catch(function (error) {
        console.log(error);
    })
}, []);

  return(
    <>
      <AddToDoItem data={data} setData={setData} />
      <TodoList data={data} setData={setData} />
    </>
  );
}

export default Main;