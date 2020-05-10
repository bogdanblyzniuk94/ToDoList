import React, {useState, useRef} from 'react';

import Modal from 'react-modal';
import './EditButton.css'
import Api from '../../engine/api';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import { Button, Box,  TextField } from '@material-ui/core';

function EditButton (props) {
    
    const theme = createMuiTheme ({
      
      palette: {
        primary: red,
        secondary: green,
      }
    });

    const { title, setData, patchDataId } = props;
    const [patchData, setPatchData] = useState(title);
    const inputRef = useRef();
    
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('#root');
    
    const handleChangePatch = function (ev) {
        const patch = ev.target.value;
        setPatchData(patch);
    }

    
    
    function onClickEdit (event) {
        event.preventDefault();
        if(patchData.replace(/\s/g,"") !== "" ) {
          Api.patchRequest( patchDataId, patchData)
          .then(function () {
            return Api.getRequest();
          })
        .then(function (response) {
          setData(response.data);
        })
        
        setIsOpen(false);
        }
    }
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
      
    function openModal(ev) {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
      
    return (
        <>
          <MuiThemeProvider theme={theme}>
            <Button variant="contained"
                    color="primary" 
                    id={patchData}
                    onClick={openModal}>
                    EDIT
            </Button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                autoFocus={false}>
                
                
                <form onSubmit={onClickEdit}>
                  <Box  m={2} display="flex" justifyContent="center">
                    <Box  m={2} display="flex" justifyContent="center">
                      <TextField  id="outlined-basic" 
                                  variant="outlined"
                                  className="inputEdit"
                                  onChange = {handleChangePatch}
                                  type="text"
                                  placeholder="What shall I do today?"
                                  value={patchData}
                                  ref={inputRef}
                                  autoFocus={true} />
                    </Box>
                    
   
                  </Box>
                  <Box  m={2} display="flex" justifyContent="center">
                    <Box  m={2} display="flex" justifyContent="center">
                      <Button className="applyButton" variant="contained" color="secondary" onClick={onClickEdit}>APPLY</Button>
                    </Box> 
                    <Box  m={2} display="flex" justifyContent="center">
                      <Button className="closeButton" variant="contained" color="primary" onClick={closeModal}>CLOSE</Button>
                    </Box> 
                  </Box> 
                </form>
                
            </Modal>
          </MuiThemeProvider>
        </>
    )
}

export default EditButton;