function phoneBook(array) {
    let person = {};

    for (let element of array) {
        let [name, number] = element.split(' ');

        person[name] = number;
    }

    let entries = Object.entries(person);

    for (let [name, number] of entries) {
        console.log(`${name} -> ${number}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);