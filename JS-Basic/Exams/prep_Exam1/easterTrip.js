function easterTrip(input) {

    let destination = input[0];
    let period = input[1];
    let nightsCount = Number(input[2]);
    let priceForOneNight = 0;
    let sum = 0;

    switch (destination) {
        case `France`:
            switch (period) {
                case `21-23`:
                priceForOneNight = 30;
                sum = priceForOneNight * nightsCount;
                break;
                case `24-27`:
                    priceForOneNight = 35;
                    sum = priceForOneNight * nightsCount;
                break;
                case `28-31`:
                    priceForOneNight = 40;
                    sum = priceForOneNight * nightsCount;
                break;
            }
            break;
        case `Italy`:
            switch (period) {
                case `21-23`:
                priceForOneNight = 28;
                sum = priceForOneNight * nightsCount;
                break;
                case `24-27`:
                    priceForOneNight = 32;
                    sum = priceForOneNight * nightsCount;
                break;
                case `28-31`:
                    priceForOneNight = 39;
                    sum = priceForOneNight * nightsCount;
                break;
            }
            break;
        case `Germany`:
            switch (period) {
                case `21-23`:
                priceForOneNight = 32;
                sum = priceForOneNight * nightsCount;
                break;
                case `24-27`:
                    priceForOneNight = 37;
                    sum = priceForOneNight * nightsCount;
                break;
                case `28-31`:
                    priceForOneNight = 43;
                    sum = priceForOneNight * nightsCount;
                break;
            }
            break;
    }
    console.log(`Easter trip to ${destination} : ${sum.toFixed(2)} leva.`);
}
easterTrip(["Germany",
    "24-27",
    "5"]);