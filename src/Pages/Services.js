import React, { Component } from 'react'
import s1 from '../Images/Services/service1.jpg'
import s2 from '../Images/Services/service2.jpg'
import s3 from '../Images/Services/service3.jpg'
import s4 from '../Images/Services/service4.jpg'
import s5 from '../Images/Services/service5.jpg'

const services = [
    {
        img: s1,
        link: "",
    },
    {
        img: s2,
        link: "",
    },
    {
        img: s3,
        link: "",
    },
    {
        img: s4,
        link: "",
    },
    {
        img: s5,
        link: "",
    },
]

export class Services extends Component {
    render() {
        return (
            <div style={{width:"1024px"}} >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px" }} >
                    <u>
                        Our Services
                    </u>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }} >
                    {
                        services.map(item => {
                            return (
                                <div style={{margin:"10px"}} >
                                    <div>
                                        <a href={item.link} >
                                            <img alt="services" width="300px" src={item.img} ></img>
                                        </a>
                                    </div>
                                    <div className="wrap" style={{ padding: "10px" }} >
                                        <button className="secondary-button" >Book Service</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Services
