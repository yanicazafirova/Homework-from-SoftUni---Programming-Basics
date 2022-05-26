function tradeCommissions(input) {

    let town = input[0];
    let sellers = Number(input[1]);

    if (sellers >= 0 && sellers <= 500) {
        switch (town) {
            case `Sofia`: console.log((sellers * (5 / 100)).toFixed(2)); break;
            case `Varna`: console.log((sellers * (4.5 / 100)).toFixed(2)); break;
            case `Plovdiv`: console.log((sellers * (5.5 / 100)).toFixed(2)); break;
            default: console.log(`error`); break;
        }
    }else if (sellers > 500 && sellers <= 1000) {
            switch (town) {
                case `Sofia`: console.log((sellers * (7 / 100)).toFixed(2)); break;
                case `Varna`: console.log((sellers * (7.5 / 100)).toFixed(2)); break;
                case `Plovdiv`: console.log((sellers * (8 / 100)).toFixed(2)); break;
                default: console.log(`error`); break;
            }
        }else if (sellers > 1000 && sellers <= 10000) {
                switch (town) {
                    case `Sofia`: console.log((sellers * (8 / 100)).toFixed(2)); break;
                    case `Varna`: console.log((sellers * (10 / 100)).toFixed(2)); break;
                    case `Plovdiv`: console.log((sellers * (12 / 100)).toFixed(2)); break;
                    default: console.log(`error`); break;
                }
            }else if (sellers > 10000) {
                    switch (town) {
                        case `Sofia`: console.log((sellers * (12 / 100)).toFixed(2)); break;
                        case `Varna`: console.log((sellers * (13 / 100)).toFixed(2)); break;
                        case `Plovdiv`: console.log((sellers * (14.5 / 100)).toFixed(2)); break;
                        default: console.log(`error`); break;
                    }
                }else{
                    console.log(`error`);
                }
}
tradeCommissions(["Kaspichan",
"-50"]);
