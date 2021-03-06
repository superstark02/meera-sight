import React, { Component } from 'react'
import '../CSS/Pages/Home.css'
import InstagramEmbed from 'react-instagram-embed';
import Carousel from '../Components/Carousel';
import ServicesCarousel from '../Components/ServicesCarousel';
import TestimonialCarousel from '../Components/TestimonialCarousel';

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0px" }} >
                    <div style={{width:"100%"}} >
                        <Carousel/>
                    </div>
                    <div className="wrap desktop" style={{ textAlign: "center" }} >
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
                <ServicesCarousel />
                <div className="services-div" >
                    <div style={{ fontSize: "25px" }} >
                        Opening Hours
                    </div>

                    <div style={{ fontSize: "20px" }} >
                        Come Visit
                    </div>

                    Weekdays : 9:00am - 1:30pm <br />

                    6:00pm - 8:00pm <br />
                    Sunday : 9:00am - 12:00noon <br />
                </div>

                <div className="services-head" >
                    Testimonials
                </div>
                <TestimonialCarousel />
                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    maxWidth={320}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                />
            </div>
        )
    }
}

export default Home
