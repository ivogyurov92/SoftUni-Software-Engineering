function sumSeconds(input) {
    let timeFirstCompetitor = Number(input[0]);
    let timeSecondCompetitor = Number(input[1]);
    let timeThirdCompetitor = Number(input[2]);

    let totalTime = timeFirstCompetitor + timeSecondCompetitor + timeThirdCompetitor;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);