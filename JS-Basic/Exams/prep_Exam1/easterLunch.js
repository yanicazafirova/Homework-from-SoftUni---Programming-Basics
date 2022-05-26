function easterLunch(input){

    let easterCake = Number(input[0]);
    let eggsCount = Number(input[1]);
    let cookiesCount = Number(input[2]);
    let paintForEggs = eggsCount * 12 * 0.15;

    let sum = easterCake * 3.20 + eggsCount * 4.35 + cookiesCount * 5.40 + paintForEggs;
    console.log(sum.toFixed(2));
}
easterLunch(["3",
"2",
"3"]);