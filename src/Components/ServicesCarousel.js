import React, { Component } from 'react'

import Slider from 'infinite-react-carousel';

const data = [
    "https://static.wixstatic.com/media/0f32fb_fb8b670b349b4476989b60185686be7d~mv2.jpg/v1/fill/w_504,h_356,al_c,lg_1,q_80/33154db7-5920-4bdb-946c-5ec1474fd12d.webp",
    "https://static.wixstatic.com/media/0f32fb_eb0296187f524fb7a2d3b65fd997cd5e~mv2.jpg/v1/fill/w_494,h_348,al_c,lg_1,q_80/fe849a9e-2233-4952-af62-44f1db65bd56.webp",
    "https://static.wixstatic.com/media/0f32fb_369f52df526949c4a64644a2ad5c06e0~mv2.jpg/v1/fill/w_510,h_355,al_c,lg_1,q_80/8da4c39e-92c8-4427-b3f0-128d4b15c158.webp",
    "https://static.wixstatic.com/media/0f32fb_0e8aa54555a84feda606c912cdc4863a~mv2.jpg/v1/fill/w_454,h_315,al_c,lg_1,q_80/4641add2-98ee-4cc0-ba9e-bc9ad62a92e4.webp",
    "https://static.wixstatic.com/media/0f32fb_e0a17ecba26e440ca7890ec94e741828~mv2.jpg/v1/fill/w_489,h_348,al_c,lg_1,q_80/0fc03178-75c4-4932-8db1-19e171bf591d.webp",
    "https://static.wixstatic.com/media/0f32fb_a693d0d516f240f7a3f868e899a4acc8~mv2.jpg/v1/fill/w_554,h_393,al_c,lg_1,q_80/93ee97bf-6c06-40bf-8196-73f8f46f6303.webp",
    "https://static.wixstatic.com/media/0f32fb_7143102769624d5f80cd20e73206a5d8~mv2.jpg/v1/fill/w_519,h_366,al_c,lg_1,q_80/efe874e0-6229-42e6-8b76-9f79e7be694a.webp",
    "https://static.wixstatic.com/media/0f32fb_d173238a264748f9a278e99b627457cb~mv2.jpg/v1/fill/w_529,h_373,al_c,lg_1,q_80/3c9050e3-7baa-427d-9f49-b93c9be32c45.webp",
    "https://static.wixstatic.com/media/0f32fb_80756288566b40a19d40699db4751fa9~mv2.jpg/v1/fill/w_518,h_368,al_c,lg_1,q_80/9fd27105-a129-4a29-8484-3922c556fa50.webp",
]

export class ServicesCarousel extends Component {
    render() {
        const settings = {
            arrowsBlock: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesPerRow: 3
        };

        const settingsm = {
            arrowsBlock: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesPerRow: 1
        };
        return (
            <div style={{ width: "100%" }} >
                <span></span>
                <div className="desktop" >
                    <Slider {...settings}>
                        {
                            data.map(item => {
                                return (
                                    <div className="wrap" style={{ width: "100%", margin: "0px 5px" }} >
                                        <img width="90%" src={item} alt="i" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className="mobile" >
                    <Slider {...settingsm}>
                        {
                            data.map(item => {
                                return (
                                    <div className="wrap" style={{ width: "100%", margin: "0px 5px" }} >
                                        <img width="90%" src={item} alt="i" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ServicesCarousel
