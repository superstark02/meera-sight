import React from 'react';
import '../App.css'
import logo from '../Images/Home/logo.png'

function AppBar() {
  return (
    <React.Fragment>
      <div style={{marginTop:"10px"}} >
        <img alt="logo" width="200px" src={logo} />
      </div>
    </React.Fragment>
  );
}

export default AppBar;
