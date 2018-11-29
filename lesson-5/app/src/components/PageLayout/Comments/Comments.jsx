import React, {Component} from "react";

import Comment from "./Comment.jsx";

import "./Comments.sass";

class Comments extends Component {
    submitForm = () => {
        event.preventDefault();

        if (event.target[0] && event.target[1].value) {
            this.props.addComment(event.target[0].value, event.target[1].value, this.props.currentArticle);
        }
    };
    render() {
        return (
            <section className="comments">
                <h3 className="comments__title">Comments</h3>
                <section className="add-comments">
                    <form onSubmit={this.submitForm}>
                        <h4 className="add-comments__title">Leave a comment:</h4>
                        <input type="text" className="add-comments__input" id="name" name="name"/>
                        <textarea className="add-comments__textarea" id="message" name="message"/>
                        <input type="submit" id="submit" value="Submit" className="add-comments__submit"/>
                    </form>
                </section>
                {(() => {
                    if (this.props.comments.length) {
                        return this.props.comments.map((item)=>{
                            return <Comment attr={item} key={`comment--${item.id}`} users={this.props.users} articles={this.props.articles}/>
                        })
                    } else {
                        return <p>This article has no comments yet.</p>
                    }
                })()}
            </section>
        )
    }
}

export default Comments;