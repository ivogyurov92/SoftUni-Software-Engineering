function hoursPerDayReading(pages, pagesPerHour, days) {
    let totalTime = pages / pagesPerHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
}

hoursPerDayReading(212, 20 , 2);