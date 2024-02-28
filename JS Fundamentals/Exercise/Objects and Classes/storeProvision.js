function storeProvision(products, orderedProducts) {
    let productsArray = [];

    for (let i = 0; i < products.length; i += 2) {
        let product = products[i];
        let qty = Number(products[i + 1]);

        let productObj = {
            name: product,
            quantity: qty
        };

        productsArray.push(productObj);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        let productFound = productsArray.find(p => p.name == product);

        if (productFound) {
            productFound.quantity += qty;
        } else {
            let productObj = {
                name: product,
                quantity: qty
            };

            productsArray.push(productObj);
        }
    } 

    productsArray.map(p => console.log(`${p.name} -> ${p.quantity}`))
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'], 
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);