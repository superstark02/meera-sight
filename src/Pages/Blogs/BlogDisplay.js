import React, { Component } from 'react'
import { blogs } from "../../Database/Blogs"
import "./Blog.css"

export class BlogDisplay extends Component {
    render() {
        return (
            <div className="wrap" >
                <div className="dibba" >
                    <div>
                        <h3>
                            {blogs[this.props.match.params.id].title}
                        </h3>
                        <div style={{marginBottom:"30px"}} >
                            Updated: May 15
                        </div>

                        <div className="wrap" >
                            <div>
                                {blogs[this.props.match.params.id].content}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default BlogDisplay
