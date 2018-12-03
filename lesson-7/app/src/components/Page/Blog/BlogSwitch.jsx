import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Blog from "./Blog.jsx";
import Article from "./Article.jsx";

export default () => (
    <Switch>
        <Route exact path={"/blog"} component={Blog}/>
        <Route path={"/blog/:articleId"} component={Article}/>
    </Switch>
)

