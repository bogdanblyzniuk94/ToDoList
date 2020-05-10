import React, { useState, useEffect} from 'react';

import AddToDoItem from '../AddToDoItem/AddToDoItem.js';
import TodoList from '../TodoList/TodoList.js';
import './main.css';

import Api from '../../engine/api';

function Main () {

  let [data, setData] = useState([]);

  useEffect(() => {
    Api.getRequest()
    .then(function (response) {
        setData(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}, []);

  return(
    <>
      <div className="main">
        <AddToDoItem data={data} setData={setData} />
        <TodoList data={data} setData={setData} />
      </div>
    </>
  );
}

export default Main;