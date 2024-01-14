function pyramidConstruction(base, increment) {
    let currentFloor = 0;
    let totalStones = 0;
    let totalMarbles = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    while (base > 1) {
        let totalBlocks = Math.pow(base, 2) * increment;
        let innerBlocks = Math.pow((base - 2), 2) * increment;
        let outerBlocks = totalBlocks - innerBlocks;

        if (base - 2 === 0) {
            break;
        }

        currentFloor++;
        base -= 2;

        if (currentFloor % 5 === 0) {
            totalLapisLazuli += outerBlocks;
            totalStones += innerBlocks;
        } else {
            totalMarbles += outerBlocks;
            totalStones += innerBlocks;
        }

    }

    currentFloor++;
    height = currentFloor * increment;
    totalGold += Math.pow(base, 2) * increment;

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramidConstruction(12, 1);