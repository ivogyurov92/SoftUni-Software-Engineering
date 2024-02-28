function catalogue(input) {
    let products = [];

    for (let item of input) {
        let [name, price] = item.split(' :');

        let product = {
            name: name,
            price: price.trim()
        }

        products.push(product);
    }

    products.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })

    for (let i = 0; i < products.length;) {
        let productName = products[i].name;
        let firstChar = productName[0];
        let currentProducts = products.filter(x => x.name.startsWith(firstChar));
        
        console.log(firstChar);

        for (let j = 0; j < currentProducts.length; j++) {
            console.log(`  ${currentProducts[j].name}: ${currentProducts[j].price}`);
            products.shift();
        }
    }
}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59']);