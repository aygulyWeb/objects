

// ДЗ на тему Объекты (Часть 1): Придумать 10 литеральный и 5 объектов (Функция конструктор).
//  В каждый объект должен имеет минимум 5 свойств и 4 собственных методов. и вложенных объектов. 
//  Например school., car, person, building итд

function Univercity(name, adress, faculty, proffessors, students) {
	this.name = name;
	this.adress = adress;
	this.faculty = faculty;
	this.proffessors = proffessors;
	this.students = students;

	this.showName = function () {
		console.log(`Название ВУЗа: ${this.name}`);
	};


	this.showAdd = function () {
		console.log(`Где находится ВУЗ: ${this.adress}`);
	};

	this.getCount = function () {
		return this.proffessors + this.students;

	}

};

let vuz1 = new Univercity("КМУ", "Досназаров", "Русский", 250, 2500);
let vuz2 = new Univercity("ТАТУ", "Досназаров", "ИБ", 75, 1058);

vuz1.showName();
vuz2.showAdd();
console.log(vuz1.getCount());






