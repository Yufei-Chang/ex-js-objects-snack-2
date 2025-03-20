const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}
/*
Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Tra i metodi che conosciamo, il migliore da usare è lo spread operator, perché ci permette di clonare anche le funzioni presenti all'interno dell'oggetto, e bisogna fare degli spread dentro spread per copiare anche gli oggetti annidatamente annidati.

const chefCopy = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    }
}
*/