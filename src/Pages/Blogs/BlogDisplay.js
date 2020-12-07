import React, { Component } from 'react'
import { blogs } from "../../Database/Blogs"

export class BlogDisplay extends Component {
    render() {
        return (
            <div className="wrap" >
                <div style={{ border: "1px grey solid", padding: "90px", margin: "80px 0px", maxWidth:"900px" }} >
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
