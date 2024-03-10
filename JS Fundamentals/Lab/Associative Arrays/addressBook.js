function addressBook(array) {
    let person = {};

    for (let element of array) {
        let [name, address] = element.split(':');

        person[name] = address;
    }

    let entries = Object.entries(person).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);