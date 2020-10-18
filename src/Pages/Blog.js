import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Pages/Blog.css"
import blog1 from '../Images/Blog/blog1.jpg'

const blogs = [
    {
        title: "Refractive Services",
        img: blog1,
        link: "/"
    }
]

export class Blog extends Component {
    render() {
        return (
            <div>
                {
                    blogs.map(item => {
                        return (
                            <Link>
                                <div className="blog-item" >
                                    <div>
                                        <img alt="blog-img" src={item.img} />
                                    </div>
                                    <div style={{ padding: "20px" }} >
                                        <div className="blog-heading" >
                                            {item.title}
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
