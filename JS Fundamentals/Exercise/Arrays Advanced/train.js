function train(input) {
    let array = input[0].split(' ').map(Number);
    let capacity = Number(input[1]);
    let tokens = input.slice(2);

    for (let token of tokens) {
        let command = token.split(' ')[0];
        let number = Number(token.split(' ')[1]);

        switch (command) {
            case 'Add':
                array.push(number)
                break;
            default:
                command = Number(command);

                for (let i = 0; i < array.length; i++) {
                    if (array[i] + command <= capacity) {
                        array[i] += command;

                        break;
                    }
                }

                break;
        }
    }

    console.log(array.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);