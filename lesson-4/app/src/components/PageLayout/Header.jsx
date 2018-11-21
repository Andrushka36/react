import React, { Component } from "react";

import "./Header.sass";

class Header extends Component {
    render() {
        const { title, description } = this.props;

        return (
            <header className="header">
                <h1 className="header__title">{title}</h1>
                <p className="header__description">{description}</p>
            </header>
        )
    }
}

export default Header;