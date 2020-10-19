import React, { Component } from 'react'
import img from '../../Images/About/clinic.webp'

export class Overview extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{ color: "#6c2368", fontSize: "50px" }} >
                    <u>
                        Overview
                    </u>
                </div>

                <div className="wrap" >
                    <img alt="bg" src={img} />
                </div>

                <div className="wrap" >
                    <div style={{ width: "900px",fontSize:"18px",color:"#6c2368" }} >
                        <p class="font_8">Our utmost emphasis is on Quality and patient safety while providing best treatment through the highest qualified team which came together as a part of this venture at&nbsp;<b>Meerasight</b>.</p>
                        <p class="font_8"><span class="wixGuard"></span></p>
                        <p class="font_8">Our new center has been designed keeping patient satisfaction and comfort in mind. We have the latest diagnostic equipments with cutting edge technology to provide class leading eye care. It has the most advanced modular Operation Theatre which has been designed as per guidelines and recommendations laid by NABH which is pushing the boundaries of highest standards in healthcare. Apart from patient satisfaction, for patient safety we have an operation theatre fitted with Laminar Air Flow which makes us class apart. The Air Handling Unit eliminates the danger of infection during surgery to a large extent by filtering out harmful germs from the air.</p>
                        <p class="font_8"><span class="wixGuard"></span></p>
                        <p class="font_8">MeeraSight is more than just an Eye Care Center &mdash; it&rsquo;s a growing community! Dedicated to treating patients since 2014, we involve patients in the decision making for their treatment by providing them with all the information they need about their condition and it's treatment.</p>
                        <p class="font_8"><span class="wixGuard"></span></p>
                        <p class="font_8">We engage our self with your daily life by providing a wide range of workshops, events, and healthcare tips. Check out what&rsquo;s going on this month at MeeraSight, and schedule an appointment today!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview
