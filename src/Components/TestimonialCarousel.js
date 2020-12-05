import React, { Component } from 'react'
import Slider from 'infinite-react-carousel';

const data = [
    {
        img: "https://static.wixstatic.com/media/0f32fb_c2e4b5ae06b942f7a4a4262aa9aba4b8~mv2.jpeg/v1/crop/x_40,y_0,w_879,h_1280/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/Vaibhavi%20Sathi%20Image%202020-04-02%20at%202_37_.webp",
        name: "Ms. Vaibhavi Sathi",
        text: "I got my treatment of Accute dryness & itching in my eyes by Dr Sonia Sharma. I found her to be extremely patient & humble which helped me massively in the treatment process. Would highly recommend her for any eye treatment."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_e702d6f1282242a1b4bd2fa207e99240~mv2.jpeg/v1/crop/x_145,y_0,w_879,h_1280/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/SunilBhalla.webp",
        name: "Mr. Sunil Bhalla",
        text: "I got my both eyes operated for Cataract and my daughter's cosmetic surgery from Dr. Sonia Sharma. She answered all my queries and eased my anxiety during surgery and made me comfortable. I am very satisfied the way she does her job and would recommend to others as well."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_3b2edc3aa3744b1dba60eade77d45cfc~mv2.jpg/v1/crop/x_51,y_0,w_187,h_273/fill/w_230,h_335,al_c,lg_1,q_80/MalePatient_JPG.webp",
        name: "Mr. Trinabh Singh",
        text: "Underwent treatment of Ocular hypertension. Dr Sonia Sharma's clinic is very well equipped, very clean and she cleared all my queries"
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_4a12621d481e4f6c943d2a044f1041e2~mv2.jpg/v1/crop/x_40,y_0,w_879,h_1280/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/LadyPatient.webp",
        name: "Mrs. Nirmal",
        text: "I got my Glucoma treatment done by Dr Sonia Sharma and am highly satisfied from her treatment methodologies"
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_4618929152874ed1970065a7c74eaf6c~mv2.jpeg/v1/crop/x_0,y_174,w_640,h_932/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%20Jitendra%20Malik.webp",
        name: "Mr. Jitendra Malik",
        text: "I  had a commendable experience. It was nice meeting Dr Sonia Sharma. I am highly satisfied with treatment offered."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_c2c1a590a38f49babe36caf961d9ad8b~mv2.jpeg/v1/crop/x_103,y_0,w_879,h_1280/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/RajKumar-Image-2.webp",
        name: "Mr. Raj Kumar",
        text: "I got my treatment done by Dr Sonia Sharma. She gave me proper treatment & guidance to resolve my problems. She is highly softspoken & gives very good guidance."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_58297a1e15d44db9a082c71681bdc52a~mv2.jpeg/v1/crop/x_1,y_0,w_581,h_846/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/Pradeep%20Mathur-Image.webp",
        name: "Mr. Pradeep Mathur",
        text: "I got my Eye-Irritation treatment done by Dr Sonia Sharma. The diagnosis done was perfect & treatment has worked wonders. I would like to recommend my friends and relatives to refer her for any eye treatment."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_f8cae3a0afb54be4a32348e11699d3a2~mv2.jpeg/v1/crop/x_20,y_0,w_157,h_229/fill/w_220,h_320,al_c,lg_1,q_80/RajKumarSharma-Image-3.webp",
        name: "Mr. Raj Kumar Sharma",
        text: "I got my Eye treatment & operation done by Dr Sonia Sharma. She performed my surgery successfully & also gave me proper treatment. I would highly recommend her for any Eye treatment."
    },
    {
        img: "https://static.wixstatic.com/media/0f32fb_c80bd56335ae45249abaadfc96fff6ea~mv2.jpg/v1/crop/x_7,y_0,w_277,h_404/fill/w_230,h_335,al_c,q_80,usm_0.66_1.00_0.01/VanshikaYadav.webp",
        name: "Ms. Vanshika Yadav",
        text: "I was facing problems in vision in Classroom. Dr. Sonia Sharma treated me successfully. She is very soft spoken and treated me politely."
    }
]

export class TestimonialCarousel extends Component {
    render() {
        const settings = {
            arrowsBlock: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        };
        return (
            <div style={{ width: "100%" }} >
                <span></span>
                <Slider {...settings}>
                    {
                        data.map(item => {
                            return (
                                <div className="wrap">
                                    <div style={{ display: "flex", width: "1000px", padding: "20px" }} >
                                        <div style={{ width: "200px" }} >
                                            <img src={item.img} alt="i" style={{ width: "200px", borderRadius: "50%", boxShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} />
                                        </div>
                                        <div className="wrap" >
                                            <div style={{ padding: "70px", color:"#62205F" }} >
                                                <div className="wrap"   >
                                                    <h3 style={{textShadow: "0px 10px 10px rgba(0,0,0,0.5)"}} >
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <div className="wrap" style={{ textAlign: "center", fontSize: "20px", textShadow: "0px 10px 10px rgba(0,0,0,0.5)" }} >
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default TestimonialCarousel
