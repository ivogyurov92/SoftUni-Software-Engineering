function phoneShop(input) {
    let array = input.shift().split(', ');
    let command = input.shift();

    while (command != 'End') {
        let task = command.split(' - ')[0];
        let currentPhone = command.split(' - ')[1].split(':')[0];   

        switch (task) {
            case 'Add':
                if (!array.includes(currentPhone)) {
                    array.push(currentPhone);
                }

                break;
            case 'Remove':
                if (array.includes(currentPhone)) {
                    let index = array.indexOf(currentPhone);
                    array.splice(index, 1);
                }

                break;
            case 'Bonus phone':
                let newPhone = command.split(' - ')[1].split(':')[1];

                if (array.includes(currentPhone)) {
                    let index = array.indexOf(currentPhone);
                    array.splice(index + 1, 0, newPhone);
                }

                break;
            case 'Last':
                if (array.includes(currentPhone)) {
                    let index = array.indexOf(currentPhone);
                    array.splice(index, 1);
                    array.push(currentPhone);
                }

                break;
        }

        command = input.shift();
    }

    console.log(array.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]);