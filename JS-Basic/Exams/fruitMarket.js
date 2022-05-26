function fruitMarket(input){

    let strawberryPrice = Number(input[0]);
    let bananasKilo = Number(input[1]);
    let orangesKilo = Number(input[2]);
    let raspberryKilo = Number(input[3]);
    let strawberryKilo = Number(input[4]);
    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice * 0.60;
    let bananasPrice = raspberryPrice * 0.20;

    let sum = raspberryPrice * raspberryKilo + orangesPrice * orangesKilo + bananasPrice * bananasKilo + strawberryPrice * strawberryKilo;
    console.log(sum.toFixed(2));
}
fruitMarket(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"]);