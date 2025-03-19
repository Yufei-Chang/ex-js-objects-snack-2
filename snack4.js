const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

/*
Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Possiamo usare solo la shallow copy con lo spread operator visto che è l'unico metodo che consente la copia delle funzioni, seppur solo come riferimento.

Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

Il metodo migliore è structuredClone() perché permette di clonare anche i dati complessi, in questo caso Date.
*/