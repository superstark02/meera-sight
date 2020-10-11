import React, { Component } from 'react'
import wa from '../Images/Footer/wa.jpg'
import fb from '../Images/Footer/fb.jpg'
import ig from '../Images/Footer/ig.jpg'
import tw from '../Images/Footer/tw.jpg'
import in1 from '../Images/Footer/in.jpg'
import yt from '../Images/Footer/yt.jpg'

const images = [
    {
        img:wa,
        link:"https://wa.me/917428728458"
    },
    {
        img:fb,
        link:"https://www.facebook.com/MeeraSighteyeclinic/"
    },
    {
        img:ig,
        link:"https://www.instagram.com/meera_sight/"
    },
    {
        img:tw,
        link:"https://twitter.com/MeeraSight"
    },
    {
        img:in1,
        link:"https://www.linkedin.com/in/meerasight/"
    },
    {
        img:yt,
        link:"https://www.youtube.com/channel/UCoEM8sMaNUdwedYXpOQDY_A"
    }
]

export class Footer extends Component {
    render() {
        return (
            <div  style={{margin:"20px 0px", marginTop:"40px"}} >
                <div className="wrap">
                    {
                        images.map(item=>{
                            return(
                                <a href={item.link} >
                                    <img style={{margin:"5px"}} width="50px" alt="footer" src={item.img} />
                                </a>
                            )
                        })
                    }
                </div>
                <div className="wrap" style={{color:"#90468c", textShadow:"1px 3px 3px rgba(0, 0, 0, 0.3)"}} >
                    ©2020 by MeeraSight. All Right Reserved.
                </div>
            </div>
        )
    }
}

export default Footer
