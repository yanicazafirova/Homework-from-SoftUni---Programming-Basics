function easterLunch(input){

    let kCount = Number(input[0]);
    let eggsCount = Number(input[1]);
    let biscuitCount = Number(input[2]);

    let priceK = kCount * 3.20;
    let priceEgg = eggsCount * 4.35;
    let priceBiscuit = biscuitCount * 5.40;
    let paintForEggs = eggsCount * 12 * 0.15;

    let allSum = priceK + priceEgg + priceBiscuit + paintForEggs;
    console.log(allSum.toFixed(2));

}
easterLunch(["3",
"2",
"3"]);