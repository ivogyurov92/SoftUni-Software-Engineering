function shopping(input) {
    let movie = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let timeForLunch = breakLength / 8;
    let timeForBreak = breakLength / 4;
    let breakTimeLeft = breakLength - timeForBreak - timeForLunch;

    if(breakTimeLeft >= episodeLength) {
        let timeLeft = breakTimeLeft - episodeLength;

        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = episodeLength - breakTimeLeft;

        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

shopping(["Teen Wolf", "48", "60"]);