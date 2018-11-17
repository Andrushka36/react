import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import "./Header.sass";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { modal: false};

        this.toggle = this.toggle.bind(this);

        this.menu = [{
            name: "Football",
            link: "#"
        }, {
            name: "F1",
            link: "#"
        }, {
            name: "Cricket",
            link: "#",
        }, {
            name: "Rugby Union",
            link: "#",
        }, {
            name: "Rugby League",
            link: "#",
        }, {
            name: "Golf",
            link: "#",
        }, {
            name: "Boxing",
            link: "#",
        }]
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <header className="header">
                <div className="container">
                    <menu className="main-menu">
                    { this.menu.map((menuItem, index) => {
                        let { name, link } = menuItem;
                        return <li className="main-menu__item" key={`main-menu__item--${index}`}><a href={link} key={`main-menu__link--${index}`} className="main-menu__link">{name}</a></li>
                    }) }
                    </menu>
                    <div className="sign-in" onClick={this.toggle}>Sign in</div>
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Sing in to Homework № 3 App</ModalHeader>
                    <ModalBody>
                        <div className="login">
                            <div className="login__row">
                                <label htmlFor="name" className="login__label">Username or email address</label>
                                <input type="text" className="login__input" id="name"/>
                            </div>
                            <div className="login__row">
                                <label htmlFor="password" className="login__label">Password</label>
                                <a href="#" className="login__forgot-password">Forgot password?</a>
                                <input type="password" className="login__input" id="password"/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </header>
        )
    }
}

export default Header;