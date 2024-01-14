function walking(input) {
    let command = input[0];
    let totalSteps = 0;
    let index = 0;

    while (command !== 'Going home') {
        command = Number(input[index]);
        totalSteps += command;
        
        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;

            console.log('Goal reached! Good job!');
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === 'Going home') {
        totalSteps += Number(input[index + 1]);

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;

            console.log('Goal reached! Good job!');
            console.log(`${stepsMore} steps over the goal!`);
        } else {
            let stepsLess = 10000 - totalSteps;

            console.log(`${stepsLess} more steps to reach goal.`);
        }
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);