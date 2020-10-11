import React, { Component } from 'react'
import c1 from '../Images/Home/c-1.webp'
import '../CSS/Pages/Home.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0px" }} >
                    <div>
                        <img alt="carousel" src={c1} width="500px" />
                    </div>
                    <div className="wrap" style={{ textAlign: "center" }} >
                        <div>
                            <div className="page-title" >
                                Welcome To <br></br>
                                MEERASIGHT
                            </div>
                            <div className="page-sub-title" >
                                Expert Eye Care Solutions
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-head" >
                    Services
                </div>
                <div className="services-div" >
                    <div style={{fontSize:"25px"}} >
                        Opening Hours
                    </div>
                    
                    <div style={{fontSize:"20px"}} >
                        Come Visit
                    </div>

                    Weekdays : 9:00am - 1:30pm <br />

                    6:00pm - 8:00pm <br />
                    Sunday : 9:00am - 12:00noon <br />
                </div>

                <div className="services-head" >
                    Testimonials
                </div>
            </div>
        )
    }
}

export default Home
