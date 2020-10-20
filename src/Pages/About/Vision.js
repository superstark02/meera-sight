import React, { Component } from 'react'

export class Vision extends Component {
    render() {
        return (
            <div style={{fontSize:"17px", color:"#6c2368", width:"1000px"}} >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Vision
                    </u>
                </div>
                <div style={{ textAlign: "center" }} >
                    <p class="font_9">Serve humanity with "A difference" to be remembered forever.</p>
                    <p class="font_9">To provide Quality eye care with utmost importance to "Patient Safety" and Global recognition in eye care industry.</p>
                </div>

                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Mission
                    </u>
                </div>

                <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap",margin:"10px 0px"}} >
                    <div style={{width:"30%"}} >
                        <b><u><i>1. Be Ethical :&nbsp;</i></u></b>
                        <p>To provide services in most ethical manner with professional attitude in order to prosper and grow.</p>
                    </div>
                    <div style={{width:"30%"}} >
                        <b><u><i>2. Be Helpful :&nbsp;</i></u></b>
                        <p>To achieve maximum client satisfaction by providing eye care services in courteous and exceptionally helpful manner to ensure strong long term relationship.</p>
                    </div>
                    <div style={{width:"30%"}} >
                        <b><u><i>3. Promote Quality :&nbsp;</i></u></b>
                        <p>To meet challenges and increasing demands in field of ophthalmology through implementation of high quality standards and innovative technology</p>
                    </div>
                </div>

                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Core Values
                    </u>
                </div>
                <div>
                    <div id="comp-k7x3thhs" class="txtNew" data-packed="true" data-vertical-text="false">
                        <div id="comp-k7x20mln" class="txtNew" data-packed="true" data-vertical-text="false">
                            <ul class="font_9">
                                <li>
                                    <p class="font_9">Trust and mutual respect&nbsp;</p>
                                </li>
                                <li>
                                    <p class="font_9">Equality&nbsp;</p>
                                </li>
                            </ul>
                        </div>
                        <div id="comp-k7x454mp" class="txtNew" data-packed="true" data-vertical-text="false">
                            <ul class="font_9">
                                <li>
                                    <p class="font_9">Accountability&nbsp;</p>
                                </li>
                                <li>
                                    <p class="font_9">Making difference with complete transparency.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vision
