import React, {Component} from "react";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faTwitter, faFacebookF,  faGithub} from "@fortawesome/free-brands-svg-icons";

import Page from "./PageLayout/Page.jsx";
import Menu from "./PageLayout/Menu.jsx";
import Header from "./PageLayout/Header.jsx";
import List from "./PageLayout/List.jsx";
import Article from "./PageLayout/Article/Article.jsx";
import Comment from "./PageLayout/Comments/Comment.jsx";
import User from "./PageLayout/User/User.jsx";
import Main from "./PageLayout/Main.jsx";
import Footer from "./PageLayout/Footer.jsx";

import "../index.sass";

library.add(fab, faTwitter, faFacebookF,  faGithub);

const articles = require("./../../data/articles.json");

const users = [{
    id: 2,
    name: "John",
    articles: [2, 3, 4, 6, 7, 8, 10],
    comments: [2]
}, {
    id: 1,
    name: "Steven",
    articles: [1, 5, 9],
    comments: [1]
}];

class App extends Component {
    state = {
        page: "Main",
        comments: [{
            id: 2,
            userId: 2,
            articleId: 10,
            text: "Thx!"
        }, {
            id: 1,
            userId: 1,
            articleId: 10,
            text: "Good story, bro!"
        }]
    };

    changeMenu = (event) => {
        let idName = event.target.getAttribute("data-menu-item");

        this.setState({
            page: idName
        })
    };

    getUserByName = (name) => {
        return users.find((item) => {
            return item.name == name;
        })
    };

    addComment = (name, text, articleId) =>{
        let user = this.getUserByName(name);

        if (!user) {
            this.addUser(name, articleId);
            user = users[0];
        } else {
            user.comments.unshift(articleId);
        }

        let newComment = {};

        newComment.id = this.state.comments.length + 1;
        newComment.userId = user.id;
        newComment.articleId = articleId;
        newComment.text = text;

        let newComments = this.state.comments;

        newComments.unshift(newComment);

        this.setState({
            comments: newComments
        })
    };

    addUser = (name, articleId) => {
        let newUser = {};

        newUser.id = users.length + 1;
        newUser.name = name;
        newUser.comments = [articleId];
        newUser.articles = [];

        users.unshift(newUser);
    };

    render() {
        const content = {
            Blog: {
                list: articles,
                child: <Article/>,
                defaultCount: 4,
                sectionClassName: "article",
                title: "Articles"
            },
            Comments: {
                list: this.state.comments,
                child: <Comment/>,
                defaultCount: 2,
                sectionClassName: "comments",
                title: "Comments"
            },
            Users: {
                list: users,
                child: <User/>,
                defaultCount: 2,
                sectionClassName: "user",
                title: "Users"
            }
        }
        return (
            <Page>
                <Menu clickFunc={this.changeMenu}/>
                <Header title={(this.state.page == "Main") ? "My site" : this.state.page}/>
                <main className="main">
                    {
                        ((page) => {
                            if (page == "Main") {
                                return <Main/>
                            } else {
                                const {list, child, defaultCount, sectionClassName, title} = content[this.state.page];

                                return <List
                                    list={list}
                                    Child={child}
                                    defaultCount={defaultCount}
                                    sectionClassName={sectionClassName}
                                    title={title}
                                    articles = {articles}
                                    comments={this.state.comments}
                                    users={users}
                                    addComment={this.addComment}
                                />
                            }
                        })(this.state.page)
                    }
                </main>
                <Footer/>
            </Page>
        )
    }
}

export default App;