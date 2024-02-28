function flightSchedule(params) {
    let flights = params[0];
    let newFlightsStatus = params[1];
    let flightStatus = params[2].toString();
    let newFlights = {};

    for (let flight of flights) {
        let flightStatus = 'Ready to fly';
        let [sector, destination] = flight.split(" ");

        newFlights[sector] = {
            Destination: destination,
            Status: flightStatus
        };
    }

    for (let newFlight of newFlightsStatus) {
        let [sector, status] = newFlight.split(" ");
        
        if (newFlights.hasOwnProperty(sector)) {
            newFlights[sector].Status = status;
        }
    }

    for (let flight in newFlights) {
        if (newFlights[flight].Status === flightStatus) {
            console.log(newFlights[flight]);
        }
    }
}

flightSchedule([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']])