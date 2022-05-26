function godzillaVsKong(input){

    let budget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let singlePriceForDrescod = Number(input[2]);
    let decor = budget * 0.10;
    let sumForDrescod = peopleCount * singlePriceForDrescod;

    if(peopleCount > 150){
        sumForDrescod *= 0.90;
        sumForFilm = sumForDrescod + decor;
    }else{
        sumForDrescod = peopleCount * singlePriceForDrescod;
        sumForFilm = sumForDrescod + decor;
    }
    if(sumForFilm > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sumForFilm - budget).toFixed(2)} leva more.`);
    }else if(budget >= sumForFilm){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - sumForFilm).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])

