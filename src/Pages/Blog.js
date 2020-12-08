import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Pages/Blog.css"
import {blogs} from "../Database/Blogs"


export class Blog extends Component {
    render() {
        return (
            <div>
                {
                    blogs.map(item => {
                        return (
                            <Link to={"/blog"+item.link} >
                                <div className="blog-item" >
                                    <div style={{width:"100%"}} >
                                        <img alt="blog-img" width="100%" src={item.img} />
                                    </div>
                                    <div style={{ padding: "20px" }} >
                                        <div className="blog-heading" >
                                            {item.title}
                                        </div>
                                        <div style={{margin:"20px 0px"}} >
                                            {item.des}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default Blog
