import React from 'react';
import logo from '../Images/logo.png';

function AppBar() {
  return (
    <React.Fragment>
      <div className="appBar" >
        <div>
          <img alt="logo" src={logo} height="70px" />
        </div>
        <div>
          <a href="/" ><button>Home</button></a>
          <a href="/" ><button>About Us</button></a>
          <a href="/" ><button>Services</button></a>
          <a href="/" ><button>Blog</button></a>
          <a href="/" ><button>Events</button></a>
          <a href="/" ><button>Contact Us</button></a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppBar;
