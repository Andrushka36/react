import React, { Component } from "react";

import "./Main.sass";

class Main extends Component {
    constructor() {
        super();

        this.articles = [{
            id: 1,
            date: "17/11/18 9:30am",
            title: "Euro Papers: Messi wants Hazard, Salah",
            text: "All the latest transfer news from around Europe, with Lionel Messi reportedly wanting Barcelona to sign Eden Hazard or Mohamed Salah.",
            image: "/images/article-1.jpg",
            link: "#"
        }, {
            id: 2,
            date: "17/11/18 8:35am",
            title: "Koeman: We've taken enormous steps",
            text: "Ronald Koeman said Netherlands have taken \"enormous steps\" after they beat world champions France 2-0 in the UEFA Nations League.",
            image: "/images/article-2.jpg",
            link: "#"
        }, {
            id: 3,
            date: "17/11/18 8:27am",
            title: "O'Neill: 2018 has been disappointing",
            text: "Republic of Ireland manager Martin O'Neill admits 2018 has been a disappointing year for his team.",
            image: "/images/article-3.jpg",
            link: "#"
        }, {
            id: 4,
            date: "17/11/18 8:10am",
            title: "Sanchez's mixed night, Foyth impresses",
            text: "Alexis Sanchez missed a penalty and scored a goal as Chile were beaten 3-2 by Costa Rica in a friendly on Friday.",
            image: "/images/article-4.jpg",
            link: "#"
        }, {
            id: 5,
            date: "17/11/18 7:00am",
            title: "Will Arsenal be busy in January?",
            text: "The January transfer window is approaching - but what, if any, business will Arsenal do this winter? We take a look...",
            image: "/images/article-5.jpg",
            link: "#"
        }]
    }
    render() {
        return (
            <main className="main">
                <h1 className="page-title">Football News</h1>
                <section className="latest-news">
                    <h2 className="section-title">Latest</h2>
                    { this.articles.map((article) => {
                        let { id, date, title, text, image, link } = article;
                        return (
                            <article key={`latest-news-item--${id}`} className={`latest-news-item latest-news-item--${id}`}>
                                <div className="latest-news-item__photo">
                                    <img src={image} alt={title}/>
                                </div>
                                <time className="latest-news-item__data">{date}</time>
                                <h3 className="latest-news-item__title">
                                    <a href={link} className="latest-news-item__link">{title}</a>
                                </h3>
                                <p className="latest-news-item__preview-text">{text}</p>
                            </article>
                        )
                    }) }
                    <a className="show-more" href="#">Show More</a>
                </section>
            </main>
        )
    }
}

export default Main;