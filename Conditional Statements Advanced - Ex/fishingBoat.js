function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let totalSum = 0;

    switch (season) {

        case `Spring`: totalSum = 3000;break;
        case `Summer`: 
        case `Autumn`: totalSum = 4200;break;
        case `Winter`: totalSum = 2600;break;
    }
            if (fishermen <= 6) {
                totalSum = totalSum * 0.90;
            } else if (fishermen <= 11) {
                totalSum = totalSum * 0.85;
            } else if (fishermen >= 12) {
                totalSum = totalSum * 0.75;
            }
            if(fishermen % 2 === 0 && season !== `Autumn`){
                totalSum = totalSum * 0.95;
            }
            if (budget >= totalSum) {
                console.log(`Yes! You have ${(budget - totalSum).toFixed(2)} leva left.`)
            } else if (budget < totalSum) {
                console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva.`)
            }
    }
fishingBoat(["3600",
"Autumn",
"6"]);