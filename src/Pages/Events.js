import React, { Component } from 'react'
import blog1 from '../Images/Blog/blog1.jpg'

const events = [
    {
        title: "Dr Sonia on CNBC",
        desc: "Dr Sonia Sharma shall be talking on CNBC about how to take care of our Eyes during these days of Pandemic on the Famous News Channel CNBC on 9th Oct 2020 5:30 pm",
        img: blog1,
        date: "09 Oct 2020"
    }
]

export class Events extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px" }} >
                    <u>
                        Events
                    </u>
                </div>
                {
                    events.map(item => {
                        return (
                            <div className="blog-item" >
                                <div>
                                    <img alt="blog-img" src={item.img} />
                                </div>
                                <div style={{ padding: "20px", color: "#6c2368" }} >
                                    <div style={{ marginBottom: "20px" }} >
                                        {item.date}
                                    </div>
                                    <div className="blog-heading" style={{ color: "#6c2368" }} >
                                        <u><i>{item.title}</i></u>
                                    </div>
                                    <div >
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Events
