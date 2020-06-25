import React from 'react';
import logo from '../Images/logo.png';
import '../App.css'

function AppBar() {
  return (
    <React.Fragment>
      <div className="desktop" >
        <div className="appBar" >
          <div>
            <img alt="logo" src={logo} height="70px" />
          </div>
          <div style={{boxShadow:"0px 0px 5px grey",borderRadius:'10px'}} >
            <a href="/" ><button style={{borderRadius:"10px 0px 0px 10px"}} className="buttonSelected" >Home</button></a>
            <a href="/" ><button>About Us</button></a>
            <a href="/" ><button>Services</button></a>
            <a href="/" ><button>Blog</button></a>
            <a href="/" ><button>Events</button></a>
            <a href="/"><button style={{borderRadius:"0px 10px 10px 0px",borderRight:'solid 1px #6c2368'}}  >Contact Us</button></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppBar;
