function cinemaTicket(input) {

    let dayOfWeek = input[0];


    switch (dayOfWeek) {

        case `Monday`: finalPrice = 12; break;
        case `Tuesday`: finalPrice = 12; break;
        case `Wednesday`: finalPrice = 14; break;
        case `Thursday`: finalPrice = 14; break;
        case `Friday`: finalPrice = 12; break;
        case `Saturday`: finalPrice = 16; break;
        case `Sunday`: finalPrice = 16; break;
    }
    console.log(finalPrice);

}
cinemaTicket(["Sunday"]);