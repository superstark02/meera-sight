import React, { Component } from 'react'
import clinic from "../Images/About/clinic.webp"
import "./About.css"

const buttons = [
    {
        name: "Overview",
        link: "/about-us/overview"
    },
    {
        name: "Our Mission, Vision and Values",
        link: "/about-us/vision"
    },
    {
        name: "Know Your Doctor",
        link: "/about-us/doctor"
    },
    {
        name: "Our Team",
        link: "/about-us/team"
    },
    {
        name: "From Founder's Desk",
        link: "/about-us/founders"
    },
]

export class About extends Component {
    render() {
        return (
            <div>
                <div className="wrap" >
                    <img alt="cover" className="cover" src={clinic} />
                </div>
                <div className="button-container" >
                    {
                        buttons.map(item => {
                            return (
                                <a href={item.link} style={{margin:"10px 0px"}} >
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
