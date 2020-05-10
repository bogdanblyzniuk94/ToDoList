import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import './TodoList.css';

function TodoList (props) {
    const { data, setData } = props;

    return(data.map((post) => 
        <div key={post.id} className="TodoList">
            <TodoListItem post={post} data={data} setData={setData} />
        </div>
        )
    );
}

export default TodoList;