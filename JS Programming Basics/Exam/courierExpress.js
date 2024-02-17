function courierExpress(input) {
    let weight = Number(input[0]);
    let service = input[1];
    let distance = Number(input[2]);
    let price = 0;

    if (weight < 1) {
        price = distance * 0.03;
    } else if (weight >= 1 && weight < 10) {
        price = distance * 0.05;
    } else if (weight >= 10 && weight < 40) {
        price = distance * 0.1;
    } else if (weight >= 40 && weight < 90) {
        price = distance * 0.15;
    } else if (weight >= 90 && weight < 150) {
        price = distance * 0.2;
    }

    if (service == 'express') {
        if (weight < 1) {
            let additionalPrice = 0.8 * 0.03;
            let additonalPricePerKilometer = weight * additionalPrice;
            let totalAdditionalPrice = additonalPricePerKilometer * distance;
            price += totalAdditionalPrice;
        } else if (weight >= 1 && weight < 10) {
            let additionalPrice = 0.4 * 0.05;
            let additonalPricePerKilometer = weight * additionalPrice;
            let totalAdditionalPrice = additonalPricePerKilometer * distance;
            price += totalAdditionalPrice;
        } else if (weight >= 10 && weight < 40) {
            let additionalPrice = 0.05 * 0.1;
            let additonalPricePerKilometer = weight * additionalPrice;
            let totalAdditionalPrice = additonalPricePerKilometer * distance;
            price += totalAdditionalPrice;
        } else if (weight >= 40 && weight < 90) {
            let additionalPrice = 0.02 * 0.15;
            let additonalPricePerKilometer = weight * additionalPrice;
            let totalAdditionalPrice = additonalPricePerKilometer * distance;
            price += totalAdditionalPrice;
        } else if (weight >= 90 && weight < 150) {
            let additionalPrice = 0.01 * 0.2;
            let additonalPricePerKilometer = weight * additionalPrice;
            let totalAdditionalPrice = additonalPricePerKilometer * distance;
            price += totalAdditionalPrice;
        }
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

courierExpress(["87", "express", "130"]);