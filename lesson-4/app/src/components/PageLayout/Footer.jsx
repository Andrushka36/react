import React, { Component } from "react";

import Social from "./Social/Social.jsx";

import "./Footer.sass";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    <Social/>
                    <div className="footer__copy">
                        Copyright © Homework № 4
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;