function meetings(array) {
    let meeting = {};

    for (let element of array) {
        let [weekday, name] = element.split(' ');

        if (weekday in meeting) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meeting[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    let entries = Object.entries(meeting);

    for (let [weekday, name] of entries) {
        console.log(`${weekday} -> ${name}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);