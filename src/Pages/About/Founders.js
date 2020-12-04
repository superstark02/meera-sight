import React, { Component } from 'react'
import drsonia from "../../Images/About/drsonia.webp"
import asm from "../../Images/About/asm.webp"
import as from "../../Images/About/as.webp"

export class Founders extends Component {
    render() {
        return (
            <div style={{ width: "1000px" }} >
                <div className="wrap" style={{ color: "#6c2368", fontSize: "45px", textAlign: "center" }} >
                    <u>
                        From Founder's Desk <br />
                        Our Inspiration
                    </u>
                </div>


                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <div>
                        <div className="wrap" >
                            <img alt="i" src={as} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                        </div>
                        <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey" }}  >
                            Capt. Amit Sharma
                        </div>
                        <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px" }}  >
                            Founder - MeeraSight
                        </div>
                        <div className="wrap" style={{ color: "#6c2368", fontSize: "15px" }}  >
                            Managing Director
                        </div>
                    </div>
                    <div style={{ display: "flex" }} >
                        <div style={{ margin: "0px 15px" }} >
                            <div className="wrap" >
                                <img alt="i" src={asm} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey", textAlign: "center" }}  >
                                Mother<br />
                                Lt. Smt. Meera Sharma
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px" }}  >
                                (Home Maker)
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px" }}  >
                                From: 05-02-1945 to 16-01-2016
                            </div>
                        </div>

                        <div>
                            <div className="wrap" >
                                <img alt="i" src={as} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey", textAlign: "center" }}  >
                                Father<br />
                                Lt. Shri H. C. Sharma
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px" }}  >
                                (Asst. Dir. Min. of Chem. & Fert.)
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px" }}  >
                                From: 21-08-1940 to 07-02-2010
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ color: "#6c2368", fontWeight: "400", fontSize: "17px" }} >
                    <p class="font_8">The blessings of our parents (Lt. Smt. Meera Sharma and Lt. Sh. H.C. Sharma) and their loving memory inspired us to lay the foundation of MeeraSight Clinic.</p>
                    <p class="font_8">&nbsp;</p>
                    <p class="font_8">Having been elected as President of C5C Block, Janak Puri, Mr. H.C. Sharma did outstanding work that shall remain praiseworthy in hearts of residents of our block. He was the favorite among the members of welfare association and residents for his modesty and problem solving attitude.</p>
                    <p class="font_8"><span class="wixGuard"></span></p>
                    <p class="font_8">His wife Mrs. Meera Sharma has always been his back bone and shared equal credits for the respect he earned throughout his life. Being a home maker she took care of kids (Amit &amp; Priya) and has given her strength to push through difficult times while he was away for social work.</p>
                    <p class="font_8"><span class="wixGuard"></span></p>
                    <p class="font_8">They have inspired us to pursue the objective of community service through treatment of people with utmost care. MeeraSight is an effort to inculcate same in generations to follow.</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <div>
                        <div className="wrap" >
                            <img alt="i" src={drsonia} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                        </div>
                        <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey" }}  >
                            Dr. Sonia Sharma
                        </div>
                        <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px" }}  >
                            Co-Founder - MeeraSight
                        </div>
                    </div>
                    <div style={{ display: "flex" }} >
                        <div style={{ margin: "0px 15px" }} >
                            <div className="wrap" >
                                <img alt="i" src={as} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey", textAlign: "center" }}  >
                                Mother<br />
                                Mrs. Sharda Gahlot
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px" }}  >
                                (MA Sanskrit, MEd, Teacher)
                            </div>
                        </div>

                        <div>
                            <div className="wrap" >
                                <img alt="i" src={as} style={{ width: "60%", margin: "20px", border: "2px solid #6C2368", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "25px", textShadow: "0px 5px 5px grey", textAlign: "center" }}  >
                                Father<br />
                                Shri V. P. Gahlot
                            </div>
                            <div className="wrap" style={{ color: "#6c2368", fontSize: "15px", marginTop: "10px", textAlign: "center" }}  >
                                (Superintending Geologist, Deptt. of<br /> Mines and Geology, Rajasthan)
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ color: "#6c2368", fontWeight: "400", fontSize: "17px" }} >
                    <p class="font_8">The constant motivation of our parents Mr. Ved Prakash Gahlot and Mrs. Sharda Gahlot was instrumental in inception of MeeraSight in its present form.</p>
                    <p class="font_8">&nbsp;</p>
                    <p class="font_8">Being a Scientist and an Educator they always motivated their children (Sonia and Anshuman) to aspire for excellence and attain maximum qualification in their profession. Also guided to keep up with latest innovations in our field. It is their hard work and inspiration which has made us join medical profession and be the best in their fields.</p>
                    <p class="font_8"><span class="wixGuard"></span></p>
                    <p class="font_8">Their joint efforts have shown us the way we can serve the community we live in, by providing the best eye care which is affordable and easily approachable next door.</p>
                </div>
            </div>
        )
    }
}

export default Founders
