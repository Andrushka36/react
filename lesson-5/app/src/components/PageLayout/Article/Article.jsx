import React, {Component} from "react";

import ModalArticle from "../Modal/ModalArticle.jsx";

import "./Article.sass";

class Article extends Component {
    state = {
        showDetail: false
    };

    toggleDetail = () => {
        let state = this.state.showDetail;

        this.setState({
            showDetail: !state
        })
    };

    getUserById = (id) => {
        return this.props.users.find((item) => {
            return item.id == id;
        })
    };

    render() {
        const {id, title, preview, authorId, date} = this.props.attr;

        const author = this.getUserById(authorId);

        return (
            <article className={`article article--${id}`}>
                <div className="article__link" onClick={this.toggleDetail}>
                    <h2 className="article__title">{title}</h2>
                    <h3 className="article__preview">{preview}</h3>
                </div>
                <address className="article__detail">
                    Posted by {author.name} on <time>{date}</time>
                </address>
                {this.state.showDetail &&
                    <ModalArticle attr={this.props.attr} closeFunc={this.toggleDetail} articles={this.props.articles} comments={this.props.comments} users={this.props.users} addComment={this.props.addComment}/>
                }
            </article>
        )
    }
}

export default Article;