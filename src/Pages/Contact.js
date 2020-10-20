import React, { Component } from 'react'
import "../CSS/Pages/Contact.css"

export class Contact extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f4f5f6", padding: "10px", display: "flex" }} >
                <div style={{ width: "50%", textAlign: "center" }} >
                    <div className="wrap" style={{ color: "#6c2368", fontSize: "40px", textAlign: "center", textShadow: "0px 5px 5px grey" }} >
                        <u>
                            Contact Us
                        </u>
                    </div>
                    <div className="details" >
                        C5C-14A, Janak Puri,
                        <br />
                        New Delhi - 11 00 58
                    </div>
                    <div className="details" >
                        meerasight@gmail.com
                    </div>
                    <div className="details" >
                        +91-7428728458
                    </div>
                    <div className="details" >
                        Locate Us
                    </div>
                </div>
                <div>
                    <form>
                        <div>
                            <input className="input" placeholder="Name" />
                            <input className="input" placeholder="Email" />
                        </div>
                        <div>
                            <input className="input" placeholder="Phone" />
                            <input className="input" placeholder="Address" />
                        </div>
                        <div>
                            <input style={{width:"100%"}} className="input" placeholder="Subject" />
                        </div>
                        <div>
                            <input style={{width:"100%",height:"100px"}} className="input" placeholder="Type your message here..." />
                        </div>
                        <div className="wrap" style={{margin:"20px 0px"}} >
                            <input style={{width:"100%",padding:"10px 0px"}} className="secondary-button" value="SUBMIT" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
