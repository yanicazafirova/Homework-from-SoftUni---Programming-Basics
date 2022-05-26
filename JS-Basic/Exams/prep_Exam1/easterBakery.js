function easterBakery(input){

    let flourPriceForKillo = Number(input[0]);
    let flourKillos = Number(input[1]);
    let sugarKilos = Number(input[2]);
    let eggsCount = Number(input[3]);
    let yeast = Number(input[4]);

    let sugarPrice = flourPriceForKillo * 0.75;
    let eggsPrice = flourPriceForKillo * 1.10;
    let yeastPrice = sugarPrice * 0.20;

    let sum = flourPriceForKillo * flourKillos + sugarKilos * sugarPrice + eggsCount * eggsPrice + yeast * yeastPrice;
    console.log(sum.toFixed(2));
}
easterBakery(["50",
"10",
"3.5",
"6",
"1"]);