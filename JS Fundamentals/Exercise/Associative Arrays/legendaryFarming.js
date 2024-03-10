function legendaryFarming(input) {
    input = input.toLowerCase().split(' ');   
    let legendary = { fragments: 0, shards: 0, motes: 0 };
    let junk = {};
    let legendaryCrafted = false;
    
    while (!legendaryCrafted && input.length > 0) {
        let quantity = +input.shift();
        let material = input.shift();
        
        switch (material) {
            case 'shards':
                legendary[material] += quantity;

                if (legendary[material] >= 250) {
                    console.log(`Shadowmourne obtained!`);

                    legendary[material] -= 250;
                    legendaryCrafted = true;
                }

                break;
            case 'fragments':
                legendary[material] += quantity;

                if (legendary[material] >= 250) {
                    console.log(`Valanyr obtained!`);

                    legendary[material] -= 250;
                    legendaryCrafted = true;
                }

                break;
            case 'motes':
                legendary[material] += quantity;

                if (legendary[material] >= 250) {
                    console.log(`Dragonwrath obtained!`);

                    legendary[material] -= 250;
                    legendaryCrafted = true;
                }

                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }

                junk[material] += quantity;

                break;
        }
    }
    
    let legendItems = Object.entries(legendary)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
 
    let junkItems = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');