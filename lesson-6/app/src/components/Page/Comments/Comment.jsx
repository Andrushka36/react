import React, {Component} from "react";

import "./Comments.sass";

const users = require("./../../../../data/users.json");

class Comment extends Component {
    getUserById = (id) => {
        return users.find((item) => {
            return item.id == id;
        })
    };

    render() {
        const {id, userId, text} = this.props.attr;

        const user = this.getUserById(userId);

        return (
            <article className={`comment comment--${id}`}>
                <p><b>{user.name}</b> sayd:</p>
                <p>- {text}</p>
            </article>


        )
    }
}

export default Comment;