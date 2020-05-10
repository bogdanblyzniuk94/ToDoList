import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton.js';
import EditButton from '../EditButton/EditButton.js';
import CheckboxButton from '../CheckboxButton/CheckboxButton';
import './TodoListItem.css';


function TodoListItem (props) {
    
    const { setData, post } = props;
    let textDecoration = 'green';

    if (post.isDone === true) {
        textDecoration = 'line-through'
    }
    else {
        textDecoration = 'none'
    }
    
    return(
        <>
            <div className="toDoListItem">
                <div className="toDoItemText"
                     style={{textDecoration: textDecoration, fontFamily: "Poppins"}}
                     id={post.id}
                     title={post.title}>
                     {post.title}
                </div>
                <div className="buttons">
                    <div className="checkboxButton">
                        <CheckboxButton  patchDataId={post.id} setData={setData} title={post.title} isDone={post.isDone}/> 
                    </div>
                    <div className="deleteButton">
                        <DeleteButton  deleteData={post.id} setData={setData}/> 
                    </div>
                    
                    <div className="editButton">
                        <EditButton  patchDataId={post.id} setData={setData} title={post.title} isDone={post.isDone}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoListItem;