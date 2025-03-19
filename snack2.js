const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

In console viene stampato Salad ad entrambi gli hamburger, perché siamo andati a modificare il dato di un oggetto annidato dentro l'oggetto principale, e con lo spread si modificano i dati originali.

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati 3 oggetti: 1) hamburger, 2) ingredients, 3) secondBurger.
lo spread operator ha copiato solo il primo livello dell'oggetto hamburger per cui l'oggetto annidato ingredients non viene proprio copiato ma preso solo come riferimento.
*/