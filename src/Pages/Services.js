import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { services } from "../Database/Services"
import "./Services.css"

export class Services extends Component {
    render() {
        return (
            <div className="outer-div" >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px" }} >
                    <u>
                        Our Services
                    </u>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }} className="wrap" >
                    {
                        services.map((item,index) => {
                            return (
                                <Link to={"/services/" + index} >
                                    <div style={{ margin: "10px" }} >
                                        <div>
                                            <a href={item.link} >
                                                <img alt="services" width="300px" src={item.img} ></img>
                                            </a>
                                        </div>
                                        <div className="wrap" style={{ padding: "10px" }} >
                                            <Link to="/book-service" >
                                                <button className="secondary-button" >Book Service</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Services
