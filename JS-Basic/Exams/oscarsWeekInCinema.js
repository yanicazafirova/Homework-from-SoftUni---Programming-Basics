function oscarsWeekInCinema(input) {

    let name = input[0];
    let typeOfPlace = input[1];
    let boughtTicketsCount = Number(input[2]);

    let priceOfTicket = 0;
    let sum = 0;

    switch (name) {

        case `A Star Is Born`:
                switch(typeOfPlace){

                    case `normal`:
                        priceOfTicket = 7.50;
                        sum = priceOfTicket * boughtTicketsCount;
                    break;
                    case `luxury`:
                        priceOfTicket = 10.50;
                        sum = priceOfTicket * boughtTicketsCount;
                    break;
                    case `ultra luxury`:
                        priceOfTicket = 13.50;
                        sum = priceOfTicket * boughtTicketsCount;
                    break;
                }
        break;
        case `Bohemian Rhapsody`:
            switch(typeOfPlace){

                case `normal`:
                    priceOfTicket = 7.35;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `luxury`:
                    priceOfTicket = 9.45;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `ultra luxury`:
                    priceOfTicket = 12.75;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
            }
        break;
        case `Green Book`:
            switch(typeOfPlace){

                case `normal`:
                    priceOfTicket = 8.15;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `luxury`:
                    priceOfTicket = 10.25;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `ultra luxury`:
                    priceOfTicket = 13.25;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
            }
        break;
        case `The Favourite`:
            switch(typeOfPlace){

                case `normal`:
                    priceOfTicket = 8.75;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `luxury`:
                    priceOfTicket = 11.55;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
                case `ultra luxury`:
                    priceOfTicket = 13.95;
                    sum = priceOfTicket * boughtTicketsCount;
                break;
            }
        break;
    }
        
    console.log(`${name} -> ${sum.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"]);