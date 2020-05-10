import React from 'react';

import './CheckboxButton.css'
import Api from '../../engine/api';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import {  Box, Checkbox,  FormControlLabel} from '@material-ui/core';

function CheckboxButton (props) {

    const { setData, patchDataId, isDone} = props;

    const theme = createMuiTheme ({
      
        palette: {
          primary: red,
          secondary: green,
        }
      });

    const handleChangeIsDone = function (ev) {
        const status = ev.target.checked;
        
        Api.patchIsDoneRequest( patchDataId, status)
        .then(function () {
          return Api.getRequest();
        })
        .then(function (response) {
          setData(response.data);
        })
        
        
    }
    return(
        <>
            <MuiThemeProvider theme={theme}>
                <Box display="flex" justifyContent="center">
                    <FormControlLabel className="inputCheckbox"
                        control={ 
                            <Checkbox   label="Done"
                                        type="checkbox"
                                        color="secondary"
                                        onChange = {handleChangeIsDone}
                                        checked = {isDone} />}
                        label="Done"
                    />
                </Box>
            </MuiThemeProvider>
        </>
    )
}

export default CheckboxButton;

