import React, {useState} from 'react';
import axios from 'axios';

function DeleteButton (props) {
    const { setData, deleteData } = props;
    /*let [deleteData, setDeleteData] = useState();*/

    /*const onClickDelete = function (ev) {
        const id = ev.currentTarget.id;
        setDeleteData(id);
      }*/
    
      function onClickDelete (event) {
        event.preventDefault();
    
        axios.delete(`http://localhost:3000/posts/${deleteData}`)
         .then(function () {
          return axios.get('http://localhost:3000/posts')
        })
        .then(function (response) {
          const post = response.data;
          setData(post);
          console.log(post);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
    
    return(
        
            <button type="submit" 
                    id={deleteData}
                    onClick={onClickDelete}
                    >
                    DELETE
            </button>
        
    )
}

export default DeleteButton;