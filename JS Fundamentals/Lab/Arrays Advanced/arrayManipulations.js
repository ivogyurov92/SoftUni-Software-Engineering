function arrayManipulations(input) {
    let array = input[0].split(' ');
    let tokens = input.slice(1);

    for (let token of tokens) {
        let command = token.split(' ')[0];
        let number = Number(token.split(' ')[1]);

        switch (command) {
            case 'Add':
                array.push(number)
                break;
            case 'Remove':
                array = array.filter(x => x != number);
                break;
            case 'RemoveAt':
                array.splice(number, 1)
                break;
            case 'Insert':
                let index = Number(token.split(' ')[2]);
                array.splice(index, 0, number)
                break;
        }
    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);