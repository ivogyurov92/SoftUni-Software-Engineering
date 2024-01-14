function bitcoinMining(input) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let day = 0;
    let firstDay = 0;
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let bitcoinsSum = 0;
    let totalSum = 0;
 
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        day++;

        if (day % 3 == 0) {
            element = element * 0.7;
        }

        let earningPerDay = element * gold;
        totalSum += earningPerDay;
 
        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * boughtBitcoin);
            bitcoinsSum += boughtBitcoin;
        }

        if (countBitcoin == 1) {
            firstDay = day;
        }
    }
 
    console.log(`Bought bitcoins: ${bitcoinsSum}`);

    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);