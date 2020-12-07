import React, { Component } from 'react'
import {blogs} from "../../Database/Blogs"

export class BlogDisplay extends Component {
    render() {
        return (
            <div>
                <div style={{border:"1px grey solid", padding:"40px", margin:"80px 0px"}} >
                    <div>
                        <h3>
                            {blogs[this.props.match.params.id].title}
                        </h3>
                        <div>
                            Updated: May 15
                        </div>
                        <div>
                            {blogs[this.props.match.params.id].content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogDisplay
