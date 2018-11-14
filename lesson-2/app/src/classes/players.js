import Player from "./player.js";

class Players {
	constructor(array) {
		this.items = [];
		
		for (let i = 0; i < array.length; i++) {
			const {name, team, image} = array[i];
			this.items.push(new Player(name, team, image));
		}
	}
	render() {
		const wrap = document.createElement("div");
		
		wrap.classList.add("players");
		
		for (let i = 0; i < this.items.length; i++) {
			wrap.appendChild(this.items[i].render());
		}
		
		document.body.appendChild(wrap);
	}
}

export default Players;