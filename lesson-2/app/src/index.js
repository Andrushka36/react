import "./style.css";
import Players from "./classes/players.js";

const items = require("../data/players.json");

const players = new Players(items);

players.render();