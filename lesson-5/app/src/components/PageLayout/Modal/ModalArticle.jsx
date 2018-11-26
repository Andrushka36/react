import React, {Component} from "react";
import Parser from "html-react-parser";

import Comments from "./../Comments/Comments.jsx";

import "./Modal.sass";

class ModalArticle extends Component {
    getUserById = (id) => {
        return this.props.users.find((item) => {
            return item.id == id;
        })
    };

    render() {
        const {id, title, preview, authorId, date, time, detail} = this.props.attr;
        const comments = this.props.comments;

        const articleComments = comments.filter((item) => {
            return item.articleId == id;
        })

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
                        <div className="popup__close" onClick={this.props.closeFunc}>Close</div>
                    </section>
                    <Comments currentArticle={id} comments={articleComments} users={this.props.users} articles={this.props.articles} addComment={this.props.addComment}/>
                </div>
            </div>
        )
    }
}

export default ModalArticle;