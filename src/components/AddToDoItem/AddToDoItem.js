import React, { useState, useRef, useEffect } from 'react';

import './AddToDoItem.css'
import Api from '../../engine/api';

import { TextField, Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

function AddToDoItem (props) {
    
    const theme = createMuiTheme ({   
        palette: {
            primary: red,
            secondary: green,
        }
    });

    const { setData } = props;
    let [postData, setPostData] = useState('');
    const status = false;
    const inputRef = useRef();
    
    useEffect(()=>{
      inputRef.current.focus();
    })
    
    const handleChange = function (ev) {
        const post = ev.target.value;
        setPostData(post);
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        if(postData.replace(/\s/g,"") !== "" ) {
          Api.postRequest( postData, status)
         .then(function () {
          return Api.getRequest();
        })
        .then(function (response) {
          setData(response.data);
        })
        
        setPostData('');
        inputRef.current.focus();
        }
      }

    return(
        <>
          <MuiThemeProvider theme={theme}>
          <form onSubmit={handleSubmit} className="addToDoItem">
                <TextField  id="outlined-basic" 
                            variant="outlined" 
                            onChange = {handleChange}
                            type="text"
                            placeholder="What shall I do today?"
                            value={postData}
                            inputRef={inputRef}
                />
                <Button  variant="contained" color="secondary" onClick={handleSubmit}>ADD</Button>
            </form>
          </MuiThemeProvider> 
        </>
    );
}

export default AddToDoItem;