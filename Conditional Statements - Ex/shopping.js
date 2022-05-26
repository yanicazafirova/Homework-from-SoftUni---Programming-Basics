function shopping(input){

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let procesorCount = Number(input[2]);
    let ramCount = Number(input[3]);
    
    let videoCardsSum = videoCardsCount * 250;
    let procesorSum = (videoCardsSum * 0.35) * procesorCount;
    let ramSum = (videoCardsSum * 0.10) * ramCount;

    if(videoCardsCount > procesorCount){
        allSum = (videoCardsSum + procesorSum + ramSum) * 0.85;
    }else{
        allSum = videoCardsSum + procesorSum + ramSum;
    }
    if(budget >= allSum){
        console.log(`You have ${(budget - allSum).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(allSum - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45","3","1","1"]);