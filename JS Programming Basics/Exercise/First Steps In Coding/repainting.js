function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = (paint + paint * 0.1) * 14.5;
    let thinnerPrice = thinner * 5;
    let bagsPrice = 0.4;

    let materialsPrice = nylonPrice + paintPrice + thinnerPrice + bagsPrice;
    let masterPrice = (materialsPrice * 0.3) * hoursNeeded;

    let totalPrice = materialsPrice + masterPrice;

    console.log(totalPrice);
}

repainting(["10", "11", "4", "8"]);