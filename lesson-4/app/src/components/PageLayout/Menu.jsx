import React, { Component } from "react";

import "./Menu.sass";

class Menu extends Component {
    items = [{
        id: 1,
        title: "Home",
        link: "#"
    }, {
        id: 2,
        title: "About",
        link: "#"
    }, {
        id: 3,
        title: "Sample post",
        link: "#"
    }, {
        id: 4,
        title: "Contact",
        link: "#"
    }]
    render() {
        return (
            <div className="header-menu" id="menu">
                <div className="container">
                        <nav className="main-menu">
                        { this.items.map((item) =>{
                            let { id, title, link } = item;
                            return (
                                <a href={link}  className={`main-menu__item main-menu__link--${id}`} key={`main-menu__item--${id}`}>{title}</a>
                            )
                        })}
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;