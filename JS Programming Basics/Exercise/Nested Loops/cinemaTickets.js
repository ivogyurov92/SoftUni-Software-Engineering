function ticketsPercentage(input) {
    let index = 0;
    let command = input[index];
    let totalTickets = 0;
    let totalStudentTicketCount = 0;
    let totalStandardTicketCount = 0;
    let totalKidTicketCount = 0;

    while (command !== 'Finish') {
        let movie = command;
        index++;
        let totalSeats = Number(input[index]);
        index++;
        let ticketType = input[index];

        let studentTicketCount = 0;
        let standardTicketCount = 0;
        let kidTicketCount = 0;
        let seatsTaken = 0;

        while(ticketType !== 'End') {
            if(ticketType === 'student') {
                studentTicketCount++;
                totalStudentTicketCount++;
            } else if (ticketType === 'standard') {
                standardTicketCount++;
                totalStandardTicketCount++;
            } else {
                kidTicketCount++
                totalKidTicketCount++
            }

            totalTickets++;
            seatsTaken++;

            if(seatsTaken === totalSeats) {
                break;
            }

            index++;
            ticketType = input[index];
        }

        let percentageSeatsTaken = (seatsTaken / totalSeats) * 100;
        console.log(`${movie} - ${percentageSeatsTaken.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }

    let percentageStudentTickets = (totalStudentTicketCount / totalTickets) * 100;
    let percentageStandardTickets = (totalStandardTicketCount / totalTickets) * 100;
    let percentageKidTickets = (totalKidTicketCount / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTickets.toFixed(2)}% kids tickets.`);
}

ticketsPercentage(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);