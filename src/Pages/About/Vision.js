import React, { Component } from 'react'

export class Vision extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Vision
                    </u>
                </div>
                <div style={{textAlign:"center"}} >
                    <p class="font_9">Serve humanity with "A difference" to be remembered forever.</p>
                    <p class="font_9">To provide Quality eye care with utmost importance to "Patient Safety" and Global recognition in eye care industry.</p>
                </div>

                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Mission
                    </u>
                </div>

                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Core Values
                    </u>
                </div>
            </div>
        )
    }
}

export default Vision
