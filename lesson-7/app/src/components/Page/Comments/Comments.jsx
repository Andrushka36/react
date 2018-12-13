import React, {Component} from "react";

import Comment from "./Comment.jsx";


import connect from "react-redux/es/connect/connect";

import {
    getCommentsList,
    getCommentsLoading,
    fetchComments
} from "../../../redux/modules/comments.js";

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="container">
                <h3 className="page-title">Comments</h3>
                {this.props.comments.map((item, index)=>{
                    return <Comment attr={item} key={`comment--${index}`} index={index}/>
                })}
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
    fetchComments
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);