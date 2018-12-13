import React, {Component} from "React";

import {NavLink} from "react-router-dom";

import "./Blog.sass";

const articles = require("./../../../../data/articles.json");
const users = require("./../../../../data/users.json");

class Blog extends Component {
    state = {
        count: 2
    };
    appendItems = () => {
        this.setState({
            count: this.state.count + 2
        })
    };
    getUserById = (id) => {
        return users.find((item) => {
            return item.id == id;
        })
    };
    render() {
        return (
            <div className="container">
                {articles.map((item, i) => {
                    if (i < this.state.count) {
                        const {id, title, preview, authorId, date} = item;

                        const author = this.getUserById(authorId);

                        return (
                            <article className={`article article--${id}`} key={`article--${id}`}>
                                <div className="article__link">
                                    <NavLink key={`article-link--${id}`} to={`blog/${id}`}>
                                        <h2 className="article__title">{title}</h2>
                                        <h3 className="article__preview">{preview}</h3>
                                    </NavLink>
                                </div>
                                <address className="article__detail">
                                    Posted by {author.name} on <time>{date}</time>
                                </address>
                            </article>
                        )
                    }
                })}
                <div className="append-items" onClick={this.appendItems}>Older Posts →</div>
            </div>
        )
    }
}

export default Blog;