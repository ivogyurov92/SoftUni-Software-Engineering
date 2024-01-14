function tradeCommissions(input) {
    let town = input[0];
    let salesCount = Number(input[1]);
    let price = 0;

    switch (town) {
        case 'Sofia':
            if (salesCount >= 0 && salesCount <= 500) {
                price = salesCount * 0.05;
            } else if (salesCount >= 500 && salesCount <= 1000) {
                price = salesCount * 0.07;
            } else if (salesCount >= 1000 && salesCount <= 10000) {
                price = salesCount * 0.08;
            } else if (salesCount > 1000) {
                price = salesCount * 0.12;
            } else {
                console.log('error');
                return;
            }

            break;
        case 'Varna':
            if (salesCount >= 0 && salesCount <= 500) {
                price = salesCount * 0.045;
            } else if (salesCount >= 500 && salesCount <= 1000) {
                price = salesCount * 0.075;
            } else if (salesCount >= 1000 && salesCount <= 10000) {
                price = salesCount * 0.1;
            } else if (salesCount > 1000) {
                price = salesCount * 0.13;
            } else {
                console.log('error');
                return;
            }

            break;
        case 'Plovdiv':
            if (salesCount >= 0 && salesCount <= 500) {
                price = salesCount * 0.055;
            } else if (salesCount >= 500 && salesCount <= 1000) {
                price = salesCount * 0.08;
            } else if (salesCount >= 1000 && salesCount <= 10000) {
                price = salesCount * 0.12;
            } else if (salesCount > 1000) {
                price = salesCount * 0.145;
            } else {
                console.log('error');
                return;
            }

            break;
        default:
            console.log('error');
            return;
    }

    console.log(price.toFixed(2));
}

tradeCommissions(["Sofia", "1500"]);