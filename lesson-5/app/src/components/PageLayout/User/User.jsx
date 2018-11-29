import React, {Component} from "react";

import UserDetail from "./UserDetail.jsx";
import Article from "./../Article/Article.jsx";
import Comment from "./../Comments/Comment.jsx";

import "./User.sass";

class User extends Component {
    state = {
        showPosts: false,
        showComments: false
    };

    togglePosts = () => {
        let state = this.state.showPosts;

        this.setState({
            showPosts: !state
        })
    };

    toggleComments = () => {
        let state = this.state.showComments;

        this.setState({
            showComments: !state
        })
    };

    render() {
        const {id, name, articles, comments} = this.props.attr;

        const userArticle = this.props.articles.filter((item) => {
            return item.authorId == id;
        });

        const userComments = this.props.comments.filter((item) => {
            return item.userId == id;
        });


        const articleClass = <Article/>;
        const commentClass = <Comment/>;

        return (
            <article className={`user user--${id}`}>
                <h2 className="user__title">{name}</h2>
                {(userArticle.length != 0) && <p>Posts: {userArticle.length} (<span onClick={this.togglePosts} className="user__toggle">show</span>)</p>}
                {(userComments.length != 0) && <p>Comments: {userComments.length} (<span onClick={this.toggleComments} className="user__toggle">show</span>)</p>}
                {this.state.showPosts && <UserDetail
                    list={userArticle}
                    Child={articleClass}
                    defaultCount="2"
                    sectionClassName="article"
                    title="Articles"
                    articles={this.props.articles}
                    comments={this.props.comments}
                    users={this.props.users}
                    closeFunc={this.togglePosts}
                />}
                {this.state.showComments && <UserDetail
                    list={userComments}
                    Child={commentClass}
                    defaultCount="2"
                    sectionClassName="comments"
                    title="Comments"
                    articles={this.props.articles}
                    comments={this.props.comments}
                    users={this.props.users}
                    closeFunc={this.togglePosts}
                    addModal
                />}
            </article>
        )
    }
}

export default User;