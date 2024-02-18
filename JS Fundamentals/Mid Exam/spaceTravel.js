function spaceTravel(input) {
    let array = input.shift().split('||');
    let fuel = Number(input.shift());
    let ammunitions = Number(input.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ')[0];
        let number = Number(array[i].split(' ')[1]);

        switch (command) {
            case 'Travel':
                fuel -= number;

                if (fuel >= 0) {
                    console.log(`The spaceship travelled ${number} light-years.`);
                } else {
                    console.log(`Mission failed.`);

                    return;
                }

                break;
            case 'Enemy':
                if (ammunitions >= number) {
                    ammunitions -= number;

                    console.log(`An enemy with ${number} armour is defeated.`);
                } else {
                    fuel -= number * 2;

                    if (fuel >= 0) {
                        console.log(`An enemy with ${number} armour is outmaneuvered.`);
                    } else {
                        console.log(`Mission failed.`);

                        return;
                    }
                }

                break;
            case 'Repair':
                fuel += number;
                ammunitions += number * 2;
                
                console.log(`Ammunitions added: ${number * 2}.`);
                console.log(`Fuel added: ${number}.`);

                break;
            case 'Titan':
                console.log(`You have reached Titan, all passengers are safe.`);

                return;
        }
    }
}

spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100']);