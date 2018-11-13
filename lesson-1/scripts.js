// Задание № 1

function loop(times, callback) {
	times = times || null;
	callback = callback || null;
  
	if (callback) {
		for (let i = 1; i <= times; i++) {
			callback();
		}
	}
}

loop(5, function(){
	console.log("All right!")
});

// Задание № 2

/*let formulas = {
	square: function(a) {
		return a*a;
	},
	circle: function(a) {
		return Math.round(Math.PI*a*a);
	},
	rect: function(a, b) {
		return a*b;
	}
}

calculateArea = (figure, len) => {
	if (figure == "rect") {
		var [a, b] = len;
	}
	
	let area;
	
	switch (figure) {
		case "rect":
			area = formulas[figure](a, b);
			break;
		default:
			area = formulas[figure](len);
	}
	
	return {
		area,
		figure,
		inputs: {figure, len}
	}
}

console.log( calculateArea("rect", [3, 9]) );*/

// Задание № 3

/*class Human {
	constructor(name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
	static displayInfo(){
		console.log("name: string");
		console.log("age: number");
		console.log("dateOfBirth: string");
	}
}

class Employee extends Human {
	constructor (name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}
	static displayInfo(){
		super.displayInfo()
		console.log("salary: number");
		console.log("department: string");
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.manager = null;
	}
	setManager(manager) {		
		if (manager instanceof Manager && this.manager != manager) {
			if (this.manager) {
				this.manager.removeDeveloper(this);
			}
			
			this.manager = manager;
			
			manager.developersList.push(this);
		}
	}
	showManager(){
		console.log(this.manager);
	}
}

class Manager extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.developersList = [];
	}
	showDevelopers(){
		console.log(this.developersList);
	}
	setDeveloper(developer) {
		if (this.developersList.indexOf(developer) == -1) {
			this.developersList.push(developer);
			
			if (developer.manager) {
				developer.manager.removeDeveloper(developer);
			}
			
			developer.manager = this;
		}
	}
	removeDeveloper(developer) {
		let index = this.developersList.indexOf(developer);
		
		if (index != -1) {
			this.developersList.splice(index, 1);
		}
	}
}

let Alex = new Developer ("Alex", 26, "01.01.1992", 100, "Department 11");

let John = new Developer ("John", 27, "01.01.1991", 120, "Department 12");

let Dennis = new Manager ("Dennis", 25, "01.01.1993", 75, "Department 21");

let Steven = new Manager ("Steven", 24, "01.01.1994", 70, "Departments 22");;

Steven.setDeveloper(John);

Steven.setDeveloper(Alex);

Steven.showDevelopers();

Alex.showManager()

Alex.setManager(Dennis);

Steven.showDevelopers();

Alex.showManager();*/

// Задание № 4

/*function* generator() {
	yield prompt("Hi! What's your name?");
  
	yield prompt("How old are you?");
	
	yield prompt("Where are you from?");
}

function form() {
	let gen = generator();
	
	let person = {
		name: "",
		age: "",
		city: ""
	}
	
	for (let prop in person) {
		person[prop] = gen.next().value;
	}
	
	return person;
}

console.log(form());*/