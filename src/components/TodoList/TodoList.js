import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';

function TodoList (props) {
    const { data, setData } = props;

    return(
        <div>
            <TodoListItem data={data} setData={setData} />
        </div>
    );
}

export default TodoList;