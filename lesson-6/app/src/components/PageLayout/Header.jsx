import React, {Component} from "react";

import "./Header.sass";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">My site</h1>
                <p className="header__description">Powered by React 16</p>
            </header>
        )
    }
}

export default Header;