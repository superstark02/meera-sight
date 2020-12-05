import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

const data = [
    "https://static.wixstatic.com/media/0f32fb_f6108d31fab64d52af0d2db2032a27ec~mv2.jpg/v1/fill/w_599,h_354,al_c,lg_1,q_80/0f32fb_f6108d31fab64d52af0d2db2032a27ec~mv2.webp",
    "https://static.wixstatic.com/media/0f32fb_1e28aa9ac42b43ad862454135ed6cd08~mv2.jpg/v1/fill/w_448,h_265,al_c,lg_1,q_80/0f32fb_1e28aa9ac42b43ad862454135ed6cd08~mv2.webp",
    "https://static.wixstatic.com/media/0f32fb_a25566228dfe4baba5c34afcff3ca696~mv2.jpg/v1/fill/w_599,h_354,al_c,lg_1,q_80/0f32fb_a25566228dfe4baba5c34afcff3ca696~mv2.webp",
    "https://static.wixstatic.com/media/0f32fb_5921350212cc4349bee05ea9085b78f0~mv2.jpg/v1/fill/w_599,h_354,al_c,lg_1,q_80/0f32fb_5921350212cc4349bee05ea9085b78f0~mv2.webp",
    "https://static.wixstatic.com/media/0f32fb_4a488a5cb7be47ec9494b9bc5caad911~mv2.jpg/v1/fill/w_584,h_345,al_c,lg_1,q_80/0f32fb_4a488a5cb7be47ec9494b9bc5caad911~mv2.webp",
    "https://static.wixstatic.com/media/327529f44c1041079ea512b5d69ba7e5.jpg/v1/fill/w_599,h_354,al_c,q_80,usm_0.66_1.00_0.01/327529f44c1041079ea512b5d69ba7e5.webp"
]

export default class Carousel extends Component {
    render() {
        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div style={{width:"100%"}} >
                <span></span>
                <Slider {...settings}>
                    {
                        data.map(item=>{
                            return(
                                <div style={{width:"100%"}} >
                                    <img width="100%" src={item} alt="i" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}