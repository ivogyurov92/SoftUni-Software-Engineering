function travelTime(array) {
    let destination = {};

    for (let element of array) {
        let [country, town, price] = element.split(' > ');

        if (!destination.hasOwnProperty(country)) {
            destination[country] = {}
        }

        if (!destination[country].hasOwnProperty(town)) {
            destination[country][town] = price;
        }

        let oldPrice = destination[country][town];

        if (oldPrice > price) {
            destination[country][town] = price;
        }
    }

    let entries = Object.entries(destination).sort((a, b) => a[0].localeCompare(b[0]) || a[1].price - b[1].price);

    entries.forEach(([country, towns]) => {
        let finalString = `${country} -> `;
        let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        
        sortedTowns.forEach(([town, price]) => {
            finalString += `${town} -> ${price} `;
        });

        console.log(finalString.trim());
    });
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);