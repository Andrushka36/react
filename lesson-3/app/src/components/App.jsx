import React, { Component } from "react";

import Page from "./PageLayout/Page.jsx";
import Header from "./PageLayout/Header.jsx";
import Main from "./PageLayout/Main.jsx";
import Aside from "./PageLayout/Aside.jsx";
import Footer from "./PageLayout/Footer.jsx";

class App extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <div className="container">
                    <Main/>
                    <Aside/>
                </div>
                <Footer/>
            </Page>
        )
    }
}

export default App;
