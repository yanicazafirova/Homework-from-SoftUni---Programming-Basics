function easterGuests(input){

    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let easterCakePrice = 4;
    let oneEggPrice = 0.45;

    let easterCakeCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;

    let sum = easterCakePrice * easterCakeCount + oneEggPrice * eggsCount;
    
    if(budget >= sum){
        console.log(`Lyubo bought ${easterCakeCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`);
    }else{
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(sum - budget).toFixed(2)} lv. more.`);
    }
}
easterGuests(["10",
"35"]);