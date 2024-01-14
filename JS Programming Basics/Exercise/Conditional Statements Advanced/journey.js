function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let type = '';
    let destination = '';

    switch (season) {
        case 'summer':
            type = 'Camp';

            if (budget <= 100) {
                price = budget * 0.3;
                destination = 'Bulgaria';

                break;
            } else if (budget <= 1000) {
                price = budget * 0.4;
                destination = 'Balkans';
                
                break;
            } else {
                price = budget * 0.9;
                destination = 'Europe';
                
                break;
            }

        case 'winter':
            type = 'Hotel';

            if (budget <= 100) {
                price = budget * 0.7;
                destination = 'Bulgaria';
                
                break;
            } else if (budget <= 1000) {
                price = budget * 0.8;
                destination = 'Balkans';
                
                break;
            } else {
                price = budget * 0.9;
                destination = 'Europe';
                
                break;
            }
    }

    if (destination === 'Europe') {
        type = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);