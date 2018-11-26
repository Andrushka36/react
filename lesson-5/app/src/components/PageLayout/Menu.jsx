import React, {Component} from "react";

import "./Menu.sass";

class Menu extends Component {
    items = [{
        id: 1,
        title: "Main"
    }, {
        id: 2,
        title: "Blog"
    }, {
        id: 3,
        title: "Comments"
    }, {
        id: 4,
        title: "Users"
    }];
    render() {
        return (
            <div className="header-menu" id="menu">
                <div className="container">
                        <nav className="main-menu">
                        {this.items.map((item) =>{
                            let {id, title} = item;
                            return (
                                <div className={"main-menu__item"} key={`main-menu__item--${id}`} data-menu-item={title} onClick={this.props.clickFunc} >{title}</div>
                            )
                        })}
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;