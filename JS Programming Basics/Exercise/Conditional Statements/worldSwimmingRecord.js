function worldRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let time = timePerMeter * distanceInMeters;
    let additionalTimeAdded = (Math.floor(distanceInMeters / 15)) * 12.5;
    let totalTime = time + additionalTimeAdded

    if(totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = totalTime - recordInSeconds;

        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}

worldRecord(["55555.67", "3017", "5.03"]);