function godzillaVsKong(input) {

    let budgetForMovie = Number(input[0]);
    let peopleCount = Number(input[1]);
    let priceForOutfit = Number(input[2]);

    let decorForMovie = budgetForMovie * 0.10;
    let priceForAllOutfit = peopleCount * priceForOutfit;

    if (peopleCount > 150) {
        priceForAllOutfit *= 0.9;
    }
    let allPriceForMovie = decorForMovie + priceForAllOutfit;
    if (allPriceForMovie > budgetForMovie) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(allPriceForMovie - budgetForMovie).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budgetForMovie - allPriceForMovie).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
    "222",
    "55.68"]);