const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

I maker.name sono Chef Hyur mentre i restaurant.name sono Hyur's II

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati 5 nuovi oggetti in memoria: 1) hamburger, 2) maker, 3) restaurant, 4) newRestaurant, 5) secondBurger.

*/