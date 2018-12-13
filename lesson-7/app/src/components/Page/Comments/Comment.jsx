import React, {Component} from "react";

import "./Comments.sass";

class Comment extends Component {
    render() {
        const {name, text} = this.props.attr;

        return (
            <article className={`comment comment--${this.props.index}`}>
                <p><b>{name}</b> sayd:</p>
                <p>- {text}</p>
            </article>
        )
    }
}

export default Comment;