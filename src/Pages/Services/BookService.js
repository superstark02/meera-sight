import React, { Component } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const morning = [
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
]

const evening = [
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm"
]

const afternoon = [
    "12:00 pm",
    "12:30 pm",
    "1:00 pm"
]

export class BookService extends Component {

    state = {
        date: null
    }

    render() {
        return (
            <div>
                <div>
                    <h3 style={{ margin: "40px 0px" }} >
                        Schedule Online
                    </h3>
                </div>
                <div className="wrap" style={{justifyContent:"space-evenly"}} >
                    <div>
                        <Calendar
                            onChange={(e) => { this.setState({ date: e }) }}
                            value={this.state.date}
                        />
                    </div>
                    
                    <div style={{ border: "#894B86 1px solid", padding: "20px", margin: "10px", position:"sticky", top:"50%" }} >
                        <h3>
                            Refractive Services
                        </h3>
                        <div>
                            30 min | As per diagnosis
                        </div>
                        <hr></hr>
                        <div>
                            {
                                this.state.date ? (
                                    <div>
                                        {monthNames[this.state.date.getMonth()]} {this.state.date.getDate()}, {this.state.date.getFullYear()}
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }
                        </div>
                        <div>
                            C5C-14A, Janakpuri, New Delhi,
                        </div>
                        <div>
                            Delhi 110058, India
                        </div>
                        <div style={{padding:"10px", 
                        backgroundColor:"#894B86", 
                        color:"white", 
                        margin:"20px 0px",
                        textAlign:"center",
                        width:"100%",
                        }} > 
                            Next
                        </div>
                    </div>
                </div>
                {
                        this.state.date ? (
                            <div className="wrap" style={{ justifyContent: "space-evenly", alignItems:"start", margin:"20px 0px", color:"#894B86" }} >
                                <div>
                                    <div style={{margin:"20px 0px"}} >
                                        Morning
                                    </div>
                                    <div>
                                        {
                                            morning.map(item => {
                                                return (
                                                    <div className="wrap" style={{padding:"10px", border:"1px solid", margin:"10px"}} >
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div style={{margin:"20px 0px"}} >
                                        Afternnon
                                    </div>
                                    <div>
                                        {
                                            afternoon.map(item => {
                                                if (this.state.date.getDay() !== 0) {
                                                    return (
                                                        <div className="wrap" style={{padding:"10px", border:"1px solid", margin:"10px"}} >
                                                            {item}
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div style={{margin:"20px 0px"}} >
                                        Evening
                                    </div>
                                    <div>
                                        {
                                            evening.map(item => {
                                                if (this.state.date.getDay() !== 0) {
                                                    return (
                                                        <div className="wrap" style={{padding:"10px", border:"1px solid", margin:"10px", cursor:"pointer"}} >
                                                            {item}
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
            </div>
        )
    }
}

export default BookService
