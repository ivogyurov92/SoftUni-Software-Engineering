function minerTask(array) {
    let material = {};

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let qty = array[i + 1];

        if (resource in material) {
            material[resource] += Number(qty);
        } else {
            material[resource] = Number(qty);
        }
    }

    let entries = Object.entries(material);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}

minerTask(['Gold',
'155',
'Silver',
'10',
'Copper',
'17']);