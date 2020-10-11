import React, { Component } from 'react'
import clinic from "../Images/About/clinic.webp"

const buttons = [
    {
        name: "Overview",
        link: "/about-us/overview"
    },
    {
        name: "Our Mission, Vision and Values",
        link: "/about-us/overview"
    },
    {
        name: "Know Your Doctor",
        link: "/about-us/overview"
    },
    {
        name: "Our Team",
        link: "/about-us/overview"
    },
    {
        name: "From Founder's Desk",
        link: "/about-us/overview"
    },
]

export class About extends Component {
    render() {
        return (
            <div>
                <div className="wrap" >
                    <img alt="cover" src={clinic} />
                </div>
                <div className="wrap" style={{margin:"20px 0px",justifyContent:"space-evenly"}} >
                    {
                        buttons.map(item => {
                            return (
                                <a href={item.link} >
                                    <button className="secondary-button" >
                                        {item.name}
                                    </button>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default About
