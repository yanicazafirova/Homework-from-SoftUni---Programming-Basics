function coffeeMachine(input) {

    let drinkType = input[0];
    let textWithOptions = input[1];
    let drinkCount = Number(input[2]);

    let price = 0;
    let sum = 0;

    switch (drinkType) {

        case `Espresso`:
            if (textWithOptions === `Without`) {
                price = 0.90;
                sum = (price * drinkCount) * 0.65;
                if (drinkType === `Espresso` && drinkCount >= 5) {
                    sum = sum * 0.75;
                    if (sum > 15) {
                        sum = sum * 0.80;
                    }
                }
            } else if (textWithOptions === `Normal`) {
                price = 1;
                sum = price * drinkCount;
                if (drinkType === `Espresso` && drinkCount >= 5) {
                    sum = sum * 0.75;
                    if (sum > 15) {
                        sum = sum * 0.80;
                    }
                } else if (textWithOptions === `Extra`) {
                    price = 1.20;
                    sum = price * drinkCount;
                    if (drinkType === `Espresso` && drinkCount >= 5) {
                        sum = sum * 0.75;
                        if (sum > 15) {
                            sum = sum * 0.80;
                        }
                    }
                }
            }
            break;
        case `Cappuccino`:
            if (textWithOptions === `Without`) {
                price = 1;
                sum = (price * drinkCount) * 0.65;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            } else if (textWithOptions === `Normal`) {
                price = 1.20;
                sum = price * drinkCount;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            } else if (textWithOptions === `Extra`) {
                price = 1.60;
                sum = price * drinkCount;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            }
            break;
        case `Tea`:
            if (textWithOptions === `Without`) {
                price = 0.50;
                sum = (price * drinkCount) * 0.65;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            } else if (textWithOptions === `Normal`) {
                price = 0.60;
                sum = price * drinkCount;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            } else if (textWithOptions === `Extra`) {
                price = 0.70;
                sum = price * drinkCount;
                if (sum > 15) {
                    sum = sum * 0.80;
                }
            }
            break;
            default:break;
    }
    
    console.log(`You bought ${drinkCount} cups of ${drinkType} for ${sum.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "500"]);