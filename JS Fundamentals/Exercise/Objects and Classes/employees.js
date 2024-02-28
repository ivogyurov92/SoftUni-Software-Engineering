function employees(input) {
    for (let element of input) {
        let person = {
            name: element,
            personalNumber: element.length
        }

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);