import React, {Component} from "react";

import "./Users.sass";

class User extends Component {
    render() {
        const {id, name, articles, comments} = this.props.attr;

        return (
            <article className={`user user--${id}`}>
                <h3 className="user__title">{name}</h3>
                {(articles.length != 0) && <p>Posts: {articles.length}</p>}
                {(comments.length != 0) && <p>Comments: {comments.length}</p>}
            </article>
        )
    }
}

export default User;