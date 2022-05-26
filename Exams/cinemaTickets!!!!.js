function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let kidTicketCounter = 0;
    let totalTicketCounter = 0;

    while (command !== "Finish") {
        let name = command;
        index++;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {
                case `student`: studentTicketCounter++; break;
                case `standard`: standardTicketCounter++; break;
                case `kid`: kidTicketCounter++; break;
            }
            if(ticketCounter >= freeSpace){
                break;
            }
            ticketType = input[++index];
        }
        totalTicketCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / freeSpace * 100;

        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
        command = input[index];
    }
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${(studentTicketCounter / totalTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCounter / totalTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketCounter / totalTicketCounter * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])