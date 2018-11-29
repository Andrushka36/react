import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

import "./scripts";

var app = document.createElement("div");
app.setAttribute("id", "app");
document.body.appendChild(app);

ReactDOM.render(<App/>, document.getElementById("app"));