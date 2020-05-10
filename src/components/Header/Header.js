import React from 'react';
import './header.css';
import { Typography } from '@material-ui/core';

function Header(){
    return(
      <div className="header">
        <Typography variant="h1" style={{ fontFamily: "Monoton" }}>
           ToDo List
        </Typography>
      </div>
    );
  };

export default Header;
