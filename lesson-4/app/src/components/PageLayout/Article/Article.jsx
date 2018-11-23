import React, { Component } from "react";

import "./Article.sass";

class Article extends Component {
    render() {
        let { id, title, preview, author, authorProfile, date, link } = this.props;

        return (<article key={`div-${id}`} className={`article article--${id}`}>
                <a href={link} className="article__link">
                    <h2 className="article__title">{title}</h2>
                    <h3 className="article__preview">{preview}</h3>
                </a>
                <address className="article__detail">
                    Posted by <a href={authorProfile} className="article__author">{author}</a> on <time>{date}</time>
                </address>
            </article>
        )
    }
}

export default Article;