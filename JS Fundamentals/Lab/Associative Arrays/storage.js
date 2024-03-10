function storage(array) {
    let product = new Map();

    for (let element of array) {
        let [item, qty] = element.split(' ');

        if (product.has(item)) {
            product.set(item, product.get(item) + Number(qty));           
        } else {
            product.set(item, Number(qty));
        }
    }

    for (let [item, qty] of [...product]) {
        console.log(`${item} -> ${qty}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);