function houseParty(input) {
    let array = [];

    for (let i = 0; i < input.length; i++) {
        let name = input[i].split(' ')[0];

        if (input[i].includes('not')) {
            if (array.indexOf(name) != -1) {
                array.splice(array.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }           
        } else {
            if (array.indexOf(name) != -1) {
                console.log(`${name} is already in the list!`);
            } else {
                array.push(name);
            }
        }
    }

    console.log(array.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);