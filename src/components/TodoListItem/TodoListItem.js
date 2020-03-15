import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton.js';

function TodoListItem (props) {
    const { data } = props;

    return(
        data.map((post) => 
            <>
            <p id={post.id}
                title={post.title}>
                {post.title}
            </p>
            <button>+</button>
            <DeleteButton deleteData={post.id}/>
            </>
        )
    )
}

export default TodoListItem;