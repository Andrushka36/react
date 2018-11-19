import React, { Component } from "react";

import "./Aside.sass";

class Aside extends Component {
    constructor(){
        super();

        this.topNews = [{
            title: "Will Arsenal be busy in January?",
            link: "#"
        }, {
            title: "Whyte: AJ's 'whupping' will come",
            link: "#"
        }, {
            title: "England vs Japan talking points",
            link: "#"
        }, {
            title: "Arsenal won't break from PL",
            link: "#"
        }, {
            title: "Analysis: How Croatia beat England",
            link: "#"
        }]
    }
    render() {
        return (
            <aside className="aside">
                <h2 className="aside__title">Trending</h2>
                <ol className="aside__list">
                { this.topNews.map((item, index) => {
                    let { title, link } = item;
                    return <li className="aside__item" key={`asite__item--${index}`}><a href={link} className="aside__link">{title}</a></li>
                }) }
                </ol>
            </aside>
        )
    }
}

export default Aside;