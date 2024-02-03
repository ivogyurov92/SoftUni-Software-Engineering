function dungeonestDark(array) {
    let token = array[0].split('|');
    let health = 100;
    let totalCoins = 0;
    let roomsCount = 0;

    for (let i = 0; i < token.length; i++) {
        let currentRoom = token[i].split(' ');
        let command = currentRoom[0];
        let number = Number(currentRoom[1]);
        roomsCount++;

        if (command === 'potion') {
            if (health + number > 100) {
                number = 100 - health;
                health = 100;
            } else {
                health += number;
            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            totalCoins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCount}`);

                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);