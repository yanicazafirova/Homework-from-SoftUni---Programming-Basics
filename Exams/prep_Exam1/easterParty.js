function easterParty(input){

    let guestsCount = Number(input[0]);
    let couvertForPerson = Number(input[1]);
    let budget = Number(input[2]);
    let cakePrice = budget * 0.10;

    let priceForAllGuests = guestsCount * couvertForPerson;

    if(guestsCount >= 10 && guestsCount <= 15){
        priceForAllGuests = guestsCount * (couvertForPerson * 0.85);
    }else if(guestsCount > 15 && guestsCount <= 20){
        priceForAllGuests = guestsCount * (couvertForPerson * 0.80);
    }else if(guestsCount > 20){
        priceForAllGuests = guestsCount * (couvertForPerson * 0.75);
    }
    let sum = priceForAllGuests + cakePrice;

    if(budget >= sum){
        console.log(`It is party time! ${(budget - sum).toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${(sum - budget).toFixed(2)} leva needed.`);
    }
}
easterParty(["18",
"30",
"450"]);