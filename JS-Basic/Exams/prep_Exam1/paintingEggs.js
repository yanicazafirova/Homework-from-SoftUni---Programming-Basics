function paintingEggs(input) {

    let eggSize = input[0];
    let eggColor = input[1];
    let eggsCount = Number(input[2]);
    let priceForEggs = 0;
    let sum = 0;

    switch (eggSize) {
        case `Large`:
            switch (eggColor) {
                case `Red`:
                    priceForEggs = 16;
                    sum = eggsCount * priceForEggs;
                break;
                case `Green`:
                    priceForEggs = 12;
                    sum = eggsCount * priceForEggs;
                break;
                case `Yellow`:
                    priceForEggs = 9;
                    sum = eggsCount * priceForEggs;
                break;
            }
            break;
        case `Medium`:
            switch (eggColor) {
                case `Red`:
                    priceForEggs = 13;
                    sum = eggsCount * priceForEggs;
                break;
                case `Green`:
                    priceForEggs = 9;
                    sum = eggsCount * priceForEggs;
                break;
                case `Yellow`:
                    priceForEggs = 7;
                    sum = eggsCount * priceForEggs;
                break;
            }
            break;
        case `Small`:
            switch (eggColor) {
                case `Red`:
                    priceForEggs = 9;
                    sum = eggsCount * priceForEggs;
                break;
                case `Green`:
                    priceForEggs = 8;
                    sum = eggsCount * priceForEggs;
                break;
                case `Yellow`:
                    priceForEggs = 5;
                    sum = eggsCount * priceForEggs;
                break;
            }
            break;
    }
    let factoryDiscount = sum * 0.35;
    let allSum = sum - factoryDiscount;

    console.log(`${allSum.toFixed(2)} leva.`);
}
paintingEggs(["Medium",
    "Green",
    "5"]);