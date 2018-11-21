import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebookF,  faGithub } from "@fortawesome/free-brands-svg-icons";

import Page from "./PageLayout/Page.jsx";
import Menu from "./PageLayout/Menu.jsx";
import Header from "./PageLayout/Header.jsx";
import Main from "./PageLayout/Main.jsx";
import Footer from "./PageLayout/Footer.jsx";
import Modal from "./PageLayout/Modal/Modal.jsx";

import "../index.sass";

library.add(fab, faTwitter, faFacebookF,  faGithub);

class App extends Component {
    state = {
        showModal: true,
        timer: 5
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
        clearInterval(this.interval);
    }

    interval = null;

    componentDidMount(){
        this.interval = setInterval (() => {
            if (this.state.timer == 1) {
                this.closeModal();
            }
            this.setState({
                timer: --this.state.timer
            })
        }, 1000)
    }

    render() {
        return (
            <Page>
                <Menu/>
                <Header title={"My Blog"} description={"Powered by React 16"}/>
                <Main/>
                <Footer/>
                {this.state.showModal &&<Modal closeModal={this.closeModal} timer={this.state.timer} />}
            </Page>
        )
    }
}

export default App;