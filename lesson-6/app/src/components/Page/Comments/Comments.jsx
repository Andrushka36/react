import React, {Component} from "react";

import Comment from "./Comment.jsx";

const comments = require("./../../../../data/comments.json");

class Comments extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="page-title">Comments</h3>
                {comments.map((item)=>{
                    return <Comment attr={item} key={`comment--${item.id}`}/>
                })}
            </div>
        )
    }
}

export default Comments;