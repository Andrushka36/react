import React, { Component } from "react";

import Article from "./Article/Article.jsx";

import "./Main.sass";

const articles = require("../../../data/articles.json");

class Main extends Component {
    state = {
        count: 4
    }

    appendArticles = () => {
        this.setState({
            count: this.state.count + 4
        })
    }

    render() {
        return (
            <main className="main">
                <div className="content">
                    {articles.map((article, i) => {
                        let {id, title, preview, author, authorProfile, date, link} = article;
                        if (i < this.state.count) return<Article
                                id={id}
                                title={title}
                                preview={preview}
                                author={author}
                                authorProfile={authorProfile}
                                date={date}
                                link={link}
                                key={`article-${i}`}/>
                    })}
                    <div className="append-articles" onClick={this.appendArticles}>Older Posts →</div>
                </div>
            </main>
        )
    }
}

export default Main;


/*{articles.map((article, i) => {
    let {id, title, preview, author, authorProfile, date, link} = article;
    <Article id={id} />
    if (i < this.state.count) return (<article key={`div-${i}`} className={`article article--${id}`}>
        <h2 className="article__title">{title}</h2>
        <p className="article__preview">{preview}</p>
        <address>Posted by <a href={authorProfile}>{author}</a> on <time>{date}</time></address>
    </article>);
})}*/