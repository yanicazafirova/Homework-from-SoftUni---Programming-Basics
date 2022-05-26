function christmasPreparation(input){

    let paperCount = Number(input[0]);
    let roll = Number(input[1]);
    let liters = Number(input[2]);
    let percentDiscount = Number(input[3]);
    let percent = 1 - (percentDiscount / 100);

    let paperPrice = paperCount * 5.80;
    let rollPrice = roll * 7.20;
    let literPrice = liters * 1.20;

    let allSum = (paperPrice + rollPrice + literPrice) * percent;
    console.log(allSum.toFixed(3));

}
christmasPreparation(["2",
"3",
"2.5",
"25"]);