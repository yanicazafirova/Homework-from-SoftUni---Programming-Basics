function familyTrip(input){

    let budget = Number(input[0]);
    let nightCount = Number(input[1]); 
    let priceForNight = Number(input[2]); 
    let percentForAddCost = Number(input[3]); 
    let sum = nightCount * priceForNight;
    let addCost = budget * (percentForAddCost / 100);
    let allSum = sum + addCost;

    if(nightCount > 7){
        sum = sum * 0.95;
        addCost = budget * (percentForAddCost/ 100);
        allSum = sum + addCost;
    }else{
        sum = nightCount * priceForNight;
        addCost = budget * (percentForAddCost/ 100);
        allSum = sum + addCost;
    }
        if(budget >= allSum){
            console.log(`Ivanovi will be left with ${(budget - allSum).toFixed(2)} leva after vacation.`);
        }else if(allSum > budget){
            console.log(`${(allSum - budget).toFixed(2)} leva needed.`);
        }
}
familyTrip(["500", "7", "66", "15"]);
