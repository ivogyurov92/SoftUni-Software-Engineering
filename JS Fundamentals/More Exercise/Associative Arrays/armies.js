function armies(input) {
    let armies = {};
    let armyLeaders = [];

    for (let element of input) {
        if (element.includes('arrives')) {
            let indexOfArrives = element.indexOf('arrives');
            let leader = element.slice(0, indexOfArrives).trim();

            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    totalArmyCount: 0
                };
            }

            armyLeaders.push(leader);
        } else if (element.includes('defeated')) {
            let indexOfDefeated = element.indexOf('defeated');
            let leader = element.slice(0, indexOfDefeated).trim();
            let indexOfLeader = armyLeaders.indexOf(leader);

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armyLeaders.splice(indexOfLeader, 1);
            }
        } else if (element.includes(':')) {
            let [leader, army] = element.split(': ');
            let [armyName, armyCount] = army.split(', ');

            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].totalArmyCount += Number(armyCount);
                }
            }
        } else if (element.includes('+')) {
            let [armyName, armyCount] = element.split(' + ');

            armyLeaders.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(armyCount);
                        armies[leader].totalArmyCount += Number(armyCount);
                    }
                }
            });
        }
    }

    Object.entries(armies)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].totalArmyCount}`);
            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`)
                });
        });
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',
    'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340',
    'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);