function arenaTier(input) {
    let gladiator = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        let element = line.split(' ');

        if (element[1] === '->') {
            let [name, technique, skillAmount] = line.split(' -> ');

            if (!gladiator.hasOwnProperty(name)) {
                gladiator[name] = {};
            }

            if (!gladiator[name].hasOwnProperty(technique) ||
                gladiator[name][technique] < skillAmount) {
                gladiator[name][technique] = skillAmount;
            }

        } else {
            let [firstGladiator, secondGladiator] = line.split(' vs ');

            if (gladiator.hasOwnProperty(firstGladiator) &&
                gladiator.hasOwnProperty(secondGladiator)) {
                let firstGladiatorTechnique = (gladiator[firstGladiator]);
                let secondGladiatorTechnique = (gladiator[secondGladiator]);

                for (let technique in firstGladiatorTechnique) {
                    if (secondGladiatorTechnique.hasOwnProperty(technique)) {
                        if (firstGladiatorTechnique[technique] > secondGladiatorTechnique[technique]) {
                            delete gladiator[secondGladiator];
                        } else if (firstGladiatorTechnique[technique] < secondGladiatorTechnique[technique]) {
                            delete gladiator[firstGladiator];
                        }
                    }
                }
            }
        }
    }

    for (let key in gladiator) {
        let sum = 0;
        let gladiatorObject = gladiator[key];

        for (let insideKey in gladiatorObject) {
            sum += Number(gladiatorObject[insideKey]);
        }

        gladiatorObject.sum = sum;
    }

    Object.entries(gladiator)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
        });
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);