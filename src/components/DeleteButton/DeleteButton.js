import React from 'react';

import Modal from 'react-modal';

import Api from '../../engine/api';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import { Button, Box } from '@material-ui/core';

function DeleteButton (props) {
  
  const theme = createMuiTheme ({
    
    palette: {
      primary: red,
      secondary: green,
    }
  });
  
    const { setData, deleteData } = props;

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

    function onClickDelete (event) {
      event.preventDefault();
  
      Api.delRequest(deleteData)
        .then(function () {
        return Api.getRequest();
      })
      .then(function (response) {
        setData(response.data);
      })
      setIsOpen(false);
    }
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
      
    function openModal(ev) {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <>
          <MuiThemeProvider theme={theme}>
            <Button variant="contained"
                    color="primary"
                    id={deleteData}
                    onClick={openModal}
                    >
                    DELETE
            </Button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal">
                  <Box m={2} display="flex" justifyContent="center">
                    <div>Are you sure?</div>
                  </Box>
                  <Box m={2} display="flex" justifyContent="center">
                    <Box m={2} display="flex" justifyContent="center">
                      <Button variant="contained" color="secondary" onClick={onClickDelete}>DELETE</Button>
                    </Box>
                    <Box m={2} display="flex" justifyContent="center">
                      <Button variant="contained" color="primary" onClick={closeModal}>CLOSE</Button>
                    </Box>
                  </Box>
                
            </Modal>
          </MuiThemeProvider>
        </>
    )
}

export default DeleteButton;