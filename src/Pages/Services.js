import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {services} from "../Database/Services"

export class Services extends Component {
    render() {
        return (
            <div style={{ width: "1000px" }} >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px" }} >
                    <u>
                        Our Services
                    </u>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }} >
                    {
                        services.map(item => {
                            return (
                                <Link to={"/services"+item.link} >
                                    <div style={{ margin: "10px" }} >
                                        <div>
                                            <a href={item.link} >
                                                <img alt="services" width="300px" src={item.img} ></img>
                                            </a>
                                        </div>
                                        <div className="wrap" style={{ padding: "10px" }} >
                                            <button className="secondary-button" >Book Service</button>
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
