import React, { Component } from 'react'
import {services} from "../../Database/Services"
import './Sevice.css'

export class ServicesDetails extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{margin:"5px 0px"}} >
                    <img className="service-img" alt="service" src={services[this.props.match.params.id].img} />
                </div>
                <div style={{fontSize:"17px"}} className="service-de" >
                    {
                        services[this.props.match.params.id].content
                    }
                </div>
            </div>
        )
    }
}

export default ServicesDetails
