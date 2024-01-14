function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let peoplePerGroup = 0;
    let totalPeople = 0;
    let firstMountain = 0;
    let secondMountain = 0;
    let thirdMountain = 0;
    let fourthMountain = 0;
    let fifthMountain = 0;

    for (let index = 1; index <= groupsCount; index++) {
        peoplePerGroup = Number(input[index]);
        totalPeople += peoplePerGroup;

        if (peoplePerGroup < 6) {
            firstMountain += peoplePerGroup;
        } else if (peoplePerGroup >= 6 && peoplePerGroup <= 12) {
            secondMountain += peoplePerGroup;
        } else if (peoplePerGroup >= 13 && peoplePerGroup <= 25) {
            thirdMountain += peoplePerGroup;
        } else if (peoplePerGroup >= 20 && peoplePerGroup <= 40) {
            fourthMountain += peoplePerGroup;
        } else {
            fifthMountain += peoplePerGroup;
        }
    }

    let percentFirstMountain = (firstMountain / totalPeople) * 100;
    let percentSecondMountain = (secondMountain / totalPeople) * 100;
    let percentThirdMountain = (thirdMountain / totalPeople) * 100;
    let percentFourthMountain = (fourthMountain / totalPeople) * 100;
    let percentFifthMountain = (fifthMountain / totalPeople) * 100;

    console.log(percentFirstMountain.toFixed(2) + '%');
    console.log(percentSecondMountain.toFixed(2) + '%');
    console.log(percentThirdMountain.toFixed(2) + '%');
    console.log(percentFourthMountain.toFixed(2) + '%');
    console.log(percentFifthMountain.toFixed(2) + '%');
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);