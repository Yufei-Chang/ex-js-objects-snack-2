const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Verranno stampati in console solo i nomi dei due burger: Cheese Burger e Double Cheese Burger.

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
E' stato creato un solo oggetto in memoria al quale sono stati aggiornati i dati primitivi.
*/