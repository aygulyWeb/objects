
// ДЗ на тему Объекты (Часть 1): Придумать 10 литеральный и 5 объектов (Функция конструктор).
//  В каждый объект должен имеет минимум 5 свойств и 4 собственных методов. и вложенных объектов. 
//  Например school., car, person, building итд

let store = {
	brand: 'Prada',
	adress: 'Paris',
	branch: [
		{ name: ' Milan', language: 'Italian' },
		{ name: 'Moscow', language: 'Russian' },
		{ name: 'NewYork', language: 'English' },
		{ name: 'Chicago', language: 'English' }
	],
	staff: [
		{ designers: 52 },
		{ models: 150 },
		{ artists: 25 },
		{ photographers: 10 }
	],

	clothes: ['men', 'women', 'kids'],

	showInfoAboutClothes() {
		return this.clothes;
	},

	menClothes: [
		'Tshirts',
		'sneakers ',
		'suitTie'
	],
	womenClothes: [
		'dress ',
		'shoes',
		'blouse'
	]

}

console.log(store.brand);
console.log(store.branch[1]);
console.log(store.menClothes[2]);