import React, { Component } from 'react'
import {services} from "../../Database/Services"

export class ServicesDetails extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{margin:"5px 0px"}} >
                    <img width="400px" alt="service" src={services[this.props.match.params.id].img} />
                </div>
                <div style={{width:"1000px", color:"#824780", fontSize:"17px"}} >
                    {
                        services[this.props.match.params.id].content
                    }
                </div>
            </div>
        )
    }
}

export default ServicesDetails
