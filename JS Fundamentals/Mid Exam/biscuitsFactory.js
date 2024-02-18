function biscuitsFactory(input) {
    let biscuitsCountPerDay = Number(input.shift());
    let workersCount = Number(input.shift());
    let totalBiscuitsCountPerMonth = Number(input.shift());
    let biscuitsPerMonth = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            biscuitsPerMonth += Math.floor((biscuitsCountPerDay * workersCount) * 0.75);
        } else {
            biscuitsPerMonth += biscuitsCountPerDay * workersCount;
        }
    }

    let difference = totalBiscuitsCountPerMonth > biscuitsPerMonth ? 
    totalBiscuitsCountPerMonth - biscuitsPerMonth : biscuitsPerMonth - totalBiscuitsCountPerMonth;
    let percentageDifference = parseFloat(difference / totalBiscuitsCountPerMonth * 100);

    console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`);
    console.log(`You produce ${percentageDifference.toFixed(2)} percent ${ totalBiscuitsCountPerMonth > biscuitsPerMonth ? 'less' : 'more' } biscuits.`);
}

biscuitsFactory(["163",
"16",
"67020"]);