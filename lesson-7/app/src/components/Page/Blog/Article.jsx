import React, {Component} from "react";
import Parser from "html-react-parser";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import Comment from "./../Comments/Comment.jsx";

import "./Article.sass";
import "./../Comments/Comments.sass";

import {
    getCommentsList,
    getCommentsLoading,
    fetchComments,
    addComment
} from "../../../redux/modules/comments.js";

const articles = require("./../../../../data/articles.json");
const users = require("./../../../../data/users.json");

class Article extends Component {
    state = {
        inputNameValue: "",
        inputTextValue: ""
    };

    componentDidMount() {
        this.props.fetchComments();
    };

    updateInputNameValue = event => {
        let updatedInput = "";
        if (event) {
            updatedInput = event.target.value;
        }

        this.setState({
            inputNameValue: updatedInput
        });
    };

    updateInputTextValue = event => {
        let updatedInput = "";
        if (event) {
            updatedInput = event.target.value;
        }

        this.setState({
            inputTextValue: updatedInput
        });
    };

    getUserById = (id) => {
        return users.find((item) => {
            return item.id == id;
        })
    };

    getArticleById = (id) => {
        return articles.find((item) => {
            return item.id == id;
        })
    };

    submitForm = event => {
        event.preventDefault();
        const name = event.target[0].value;
        const text = event.target[1].value;
        const currentArticle = this.props.match.params.articleId;

        const commentData = {
            name,
            text,
            articleId: currentArticle
        };

        this.props.addComment(commentData).then(() => {
            this.setState({
                inputNameValue: "",
                inputTextValue: ""
            })
        });

    };

    render() {
        const articleId = this.props.match.params.articleId;

        const article = this.getArticleById(articleId);

        const {id, title, preview, authorId, date, time, detail} = article;

        const {comments, loading} = this.props;

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
                        <section className="add-comments">
                            <form onSubmit={this.submitForm}>
                                <h4 className="add-comments__title">Leave a comment:</h4>
                                <input
                                    type="text"
                                    className="add-comments__input"
                                    id="name"
                                    name="name"
                                    onChange={this.updateInputNameValue}
                                    value={this.state.inputNameValue}
                                />
                                <textarea
                                    className="add-comments__textarea"
                                    id="message"
                                    name="message"
                                    onChange={this.updateInputTextValue}
                                    value={this.state.inputTextValue}
                                />
                                <input
                                    type="submit"
                                    id="submit"
                                    value="Submit"
                                    className="add-comments__submit"
                                />
                            </form>
                        </section>
                        {(() => {
                            if (articleComments.length) {
                                return articleComments.map((item, index)=>{
                                    return <Comment attr={item} key={`comment--${index}`} index={index}/>
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

const mapStateToProps = (state, ownProps) => {
    return {
        comments: getCommentsList(state),
        loading: getCommentsLoading(state)
    }
};

const mapDispatchToProps = {
    fetchComments,
    addComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);