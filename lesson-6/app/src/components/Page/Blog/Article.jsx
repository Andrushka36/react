import React, {Component} from "react";
import Parser from "html-react-parser";
import {NavLink} from "react-router-dom";

import Comment from "./../Comments/Comment.jsx";

import "./Article.sass";
import "./../Comments/Comments.sass"

const articles = require("./../../../../data/articles.json");
const users = require("./../../../../data/users.json");
const comments = require("./../../../../data/comments.json");

class ModalArticle extends Component {
    getUserById = (id) => {
        return users.find((item) => {
            return item.id == id;
        })
    };

    getArticleById = (id) => {
        return articles.find((item) => {
            return item.id == id;
        })
    }

    render() {
        const articleId = this.props.match.params.articleId;

        const article = this.getArticleById(articleId);

        const {id, title, preview, authorId, date, time, detail} = article;

        const articleComments = comments.filter((item) => {
            return item.articleId == id;
        });

        const author = this.getUserById(authorId);

        function compareNumeric(a, b) {
            return a.id - b.id;
        }

        articleComments.sort(compareNumeric);

        return (
            <div className="popup">
                <div className="popup__inner">
                    <section className="popup__full-article">
                        <h2 className="popup__title">{title}</h2>
                        <h3 className="popup__author">By {author.name}</h3>
                        <address className="popup__address">Posted on <time>{date} at {time}</time></address>
                        <p className="popup__preview">{preview}</p>
                        <div className="popup__detail-text">{Parser(detail)}</div>
                        <div className="popup__close">
                            <NavLink to={`/blog`}>
                                Close
                            </NavLink>
                        </div>
                    </section>
                    <section className="comments">
                        <h3 className="comments__title">Comments</h3>
                        {(() => {
                            if (articleComments.length) {
                                return comments.map((item)=>{
                                    return <Comment attr={item} key={`comment--${item.id}`}/>
                                })
                            } else {
                                return <p>This article has no comments yet.</p>
                            }
                        })()}
                    </section>
                </div>
            </div>
        )
    }
}

export default ModalArticle;