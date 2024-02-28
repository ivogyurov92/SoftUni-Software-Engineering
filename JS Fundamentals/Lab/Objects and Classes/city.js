function city(city) {
    let cityObj = {
        name: city.name,
        area: city.area,
        population: city.population,
        country: city.country,
        postCode: city.postCode
    }

    for (const key in cityObj) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });