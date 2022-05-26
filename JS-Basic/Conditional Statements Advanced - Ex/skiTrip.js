function skiTrip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let evaluation = input[2];

    let nights = days - 1;
    let sum = 0;
    switch (roomType) {

        case `room for one person`:
            roomForOnePerson = 18;
            sum = nights * roomForOnePerson;
            break;
        case `apartment`:
            apartment = 25;
            if (days < 10) {
                sum = nights * apartment * 0.70;
            } else if (days >= 10 && days <= 15) {
                sum = nights * apartment * 0.65;
            } else if (days > 15) {
                sum = nights * apartment * 0.50;
            }
            break;
        case `president apartment`:
            presidentApartment = 35;
            if (days < 10) {
                sum = nights * presidentApartment * 0.90;
            } else if (days >= 10 && days <= 15) {
                sum = nights * presidentApartment * 0.85;
            } else if (days > 15) {
                sum = nights * presidentApartment * 0.80;
            }
            break;

    }
    if (evaluation === `positive`) {
        sum = sum * 1.25;
        console.log(sum.toFixed(2));
    } else if (evaluation === `negative`) {
        sum = sum * 0.90;
        console.log(sum.toFixed(2));
    }
}
skiTrip(["2",
    "apartment",
    "positive"])


