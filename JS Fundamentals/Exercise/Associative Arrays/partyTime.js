function partyTime(array) {
    let vipList = [];
    let regularList = [];
    let index = 0;
    command = array[index];

    while (command != 'PARTY') {
        let guest = command;

        if (command.match(/^\d/)) {
            vipList.push(guest);
        } else {
            regularList.push(guest);
        }

        array.shift();
        command = array[index];
    }

    array.shift();

    let guestsList = [...vipList, ...regularList];

    for (let guest of array) {
        guestsList.splice(guestsList.indexOf(guest), 1);
    }

    console.log(guestsList.length);

    for (let guest of guestsList) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p',
    'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);