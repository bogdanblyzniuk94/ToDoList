import React, { useState } from 'react';
import axios from 'axios';
function AddToDoItem (props) {
    
    const { setData } = props;
    let [postData, setPostData] = useState('');
    
    const handleChange = function (ev) {
        const post = ev.target.value;
        setPostData(post);
      }
    
    function handleSubmit (event) {
        event.preventDefault();
    
        axios.post(`http://localhost:3000/posts`, { 
          title: postData,
          author: 'Bogdan'
         })
         .then(function () {
          return axios.get('http://localhost:3000/posts')
        })
        .then(function (response) {
          const post = response.data;
          setData(post);
          console.log(post);
        })
        .catch(function (error) {
          console.log(error);
        })
      }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                onChange = {handleChange}
                type="text"
                id="input" 
                placeholder="What shall I do today?"
                value={postData}
                />
                <button>+</button>
            </form>
            
        </>
    );
}

export default AddToDoItem;