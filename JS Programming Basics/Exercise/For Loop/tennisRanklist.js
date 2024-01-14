function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let currentPoints = Number(input[1]);
    let totalPoints = 0;
    let tournamentsWon = 0;

    for (let index = 2; index <= tournamentCount + 1; index++) {
        let phase = input[index];

        switch (phase) {
            case 'W':
                totalPoints += 2000;
                tournamentsWon++;

                break;
            case 'F':
                totalPoints += 1200;

                break;
            case 'SF':
                totalPoints += 720;

                break;

        }
    }

    let averagePoints = Math.floor(totalPoints / tournamentCount);
    let percentTournamentsWon = (tournamentsWon / tournamentCount) * 100;
    totalPoints += currentPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(percentTournamentsWon.toFixed(2) + '%');
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);