function inventory(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        let hero = new Hero(name, level, items);

        heroes.push(hero);
    }

    heroes.sort((a, b) => {
        return a.level - b.level;
    })

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);