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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

/*
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

L'oggetto iniziale contiene un oggetto che contiene n'altro oggetto, e siamo a 3. Abbiamo poi 2 cloni che clonano i 3 oggetti quindi abbiamo 6 nuovi oggetti. 3 iniziali + 6 clonati, abbiamo un totale di 9 oggetti.
*/