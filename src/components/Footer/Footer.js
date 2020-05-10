import React from 'react';
import './footer.css';
import { Typography } from '@material-ui/core';

function Footer(){
    return(
      <div className="footer">
        <Typography variant="h5" style={{ fontFamily: "Gloria Hallelujah" }} className="text">Made by Bogdan Blyzniuk @ 2020</Typography>
      </div>
    );
  };

export default Footer;