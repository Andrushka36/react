import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import "./Menu.sass";

class Menu extends Component {
    items = [{
        id: 1,
        title: "Home",
        to: "/"
    }, {
        id: 2,
        title: "Blog",
        to: "/blog"
    }, {
        id: 3,
        title: "Comments",
        to: "/comments"
    }, {
        id: 4,
        title: "Users",
        to: "/users"
    }];
    render() {
        return (
            <div className="header-menu" id="menu">
                <div className="container">
                    <nav className="main-menu">
                        {this.items.map((item) =>{
                            const {id, title, to} = item;
                            return (
                                <div className="main-menu__item" key={`main-menu__item--${id}`}>
                                    <NavLink key={`main-menu__link--${id}`} to={to}>
                                        {title}
                                    </NavLink>
                                </div>
                            )
                        })}
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;