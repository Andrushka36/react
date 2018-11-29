import React, {Component} from "react";

import "./Comment.sass"
import ModalArticle from "../Modal/ModalArticle.jsx";

class Comment extends Component {
    getUserById = (id) => {
        return this.props.users.find((item) => {
            return item.id == id;
        })
    };

    getArticleById = (id) => {
        return this.props.articles.find((item) => {
            return item.id == id;
        })
    };

    state = {
        showDetail: false
    };

    toggleDetail = () => {
        let state = this.state.showDetail;

        this.setState({
            showDetail: !state
        })
    };

    render() {
        const {id, userId, articleId, text} = this.props.attr;

        const user = this.getUserById(userId);

        const article = this.getArticleById(articleId);

        return (
            <article className={`comment comment--${id}`}>
                <p><b>{user.name}</b> sayd{this.props.addModal && <span onClick={this.toggleDetail} className="comment__show-article"> about this post</span>}:</p>
                <p>- {text}</p>
                {this.props.addModal && this.state.showDetail &&
                    <ModalArticle attr={article} closeFunc={this.toggleDetail} articles={this.props.articles} comments={this.props.comments} users={this.props.users} addComment={this.props.addComment}/>
                }
            </article>


        )
    }
}

export default Comment;