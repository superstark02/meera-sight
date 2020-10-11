import React from 'react';
import '../App.css'
import logo from '../Images/Home/logo.png'
import '../CSS/AppBar/AppBar.css'

const buttons = [
  {
    name: "Home",
    link: "/home"
  },
  {
    name: "About Us",
    link: "/about-us"
  },
  {
    name: "Services",
    link: "/services"
  },
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Events",
    link: "/events"
  },
  {
    name: "Contact Us",
    link: "/contact-us"
  }
]

function AppBar() {
  return (
    <React.Fragment>
      <div style={{margin:"10px 0px"}} className="wrap" >
        <img alt="logo" width="170px" src={logo} />
      </div>
      <div className="app-bar" >
        {
          buttons.map(item=>{
            if(item.name !== "Home" && item.name !== "Contact Us"){
              return(
                <a href={item.link} >
                  <button>
                    {item.name}
                  </button>
                </a>
              )
            }
            if(item.name==="Contact Us"){
              return(
                <a href={item.link} >
                  <button className="special-button-right" >
                    {item.name}
                  </button>
                </a>
              )
            }
            else{
              return(
                <a href={item.link} >
                  <button className="special-button-left" >
                    {item.name}
                  </button>
                </a>
              )
            }
          })
        }
      </div>
    </React.Fragment>
  );
}

export default AppBar;
