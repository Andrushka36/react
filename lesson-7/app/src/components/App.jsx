import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faTwitter, faFacebookF,  faGithub} from "@fortawesome/free-brands-svg-icons";

import Page from "./PageLayout/Page.jsx";
import Menu from "./PageLayout/Menu.jsx";
import Header from "./PageLayout/Header.jsx";
import Footer from "./PageLayout/Footer.jsx";

import Home from "./Page/Home.jsx";
import BlogSwitch from "./Page/Blog/BlogSwitch.jsx";
import Comments from "./Page/Comments/Comments.jsx";
import Users from "./Page/Users/Users.jsx";

import "../index.sass";

library.add(fab, faTwitter, faFacebookF,  faGithub);

class App extends Component {
    render() {
        return (
            <Page>
                <Menu/>
                <Header/>
                    <main className="main">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/blog"} component={BlogSwitch}/>
                            <Route path={"/comments"} component={Comments}/>
                            <Route path={"/users"} component={Users}/>
                        </Switch>
                    </main>
                <Footer/>
            </Page>
        )
    }
}

export default App;