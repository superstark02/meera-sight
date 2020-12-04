import React, { Component } from 'react'
import drsonia from "../../Images/About/drsonia.webp"
import ag from "../../Images/About/ag.webp"
import as from "../../Images/About/as.webp"

export class Team extends Component {
    render() {
        return (
            <div style={{ width: "1000px" }} >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px", textShadow: "0px 5px 5px grey" }} >
                    <u>
                        Our Team
                    </u>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color:"#6C2379" }} >
                    <div className="wrap" style={{ width: "300px", backgroundColor: "#D7C5DD", textAlign: "center", padding: "20px 0px", fontSize: "20px" }} >
                        <div>
                            <div>
                                <img alt="i" src={as} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div style={{ fontSize: "25px", textShadow: "0px 5px 5px rgba(0,0,0,0.5)" }} >
                                Capt Amit Sharma
                            </div>
                            <div>
                                Founder - MeeraSight
                            </div>
                            <div>
                                Managing Director
                            </div>
                            <div>
                                BSc. Nautical Science,
                            </div>
                            <div>
                                PGDBA (HRD)
                            </div>
                        </div>
                    </div>
                    <div className="wrap" style={{ width: "300px", backgroundColor: "#D7C5DD", textAlign: "center", padding: "20px 0px", fontSize: "20px" }} >
                        <div>
                            <div>
                                <img alt="i" src={drsonia} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div style={{ fontSize: "25px", textShadow: "0px 5px 5px rgba(0,0,0,0.5)" }} >
                                Dr. Sonia Sharma
                            </div>
                            <div>
                                Co-Founder - MeeraSight
                            </div>
                            <div>
                                Medical Director
                            </div>
                            <div>
                                MBBS, MS ( Ophthal.)
                            </div>
                            <div>
                                FSCEH
                            </div>
                        </div>
                    </div>
                    <div className="wrap" style={{ width: "300px", backgroundColor: "#D7C5DD", textAlign: "center", padding: "20px 0px", fontSize: "20px" }} >
                        <div>
                            <div>
                                <img alt="i" src={ag} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div style={{ fontSize: "25px", textShadow: "0px 5px 5px rgba(0,0,0,0.5)" }} >
                                Dr. Anshuman Gahlot
                            </div>
                            <div>
                                VitroRetina Specialist
                            </div>
                            <div>
                                MBBS, MS (Ophthal.) FVRS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team
