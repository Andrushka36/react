class Player {
	constructor(name, team, image) {
		this.name = name;
		this.team = team;
		this.image = image;
	}
	createDiv(className) {
		const div = document.createElement("div");
		
		div.classList.add(`player-item__${className}`);
		
		return div;
	}
	createImage(src, alt) {
		const img = document.createElement("img");
		
		img.src = src;
		img.setAttribute("alt", alt);
		
		const wrap = this.createDiv("image");
		
		wrap.appendChild(img);
		
		return wrap;
	}
	createTextNode(prop, text) {
		const textNode = document.createElement("p");
		
		textNode.innerHTML = text;
		
		const wrap = this.createDiv(prop);
		
		wrap.appendChild(textNode);
		
		return wrap;
	}
	render() {
		const wrap = document.createElement("div");
		const {name, team, image} = this;
		
		wrap.classList.add("player-item");
		
		wrap.appendChild(this.createImage(image, name));
		wrap.appendChild(this.createTextNode("name", name));
		wrap.appendChild(this.createTextNode("team", team));
		
		return wrap;
	}
}

export default Player;