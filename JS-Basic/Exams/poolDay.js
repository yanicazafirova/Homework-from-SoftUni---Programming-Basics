function poolDay(input){

    let peopleCount = Number(input[0]);
    let entrancePay = Number(input[1]);
    let payForBed = Number(input[2]);
    let payForUmbrella = Number(input[3]);

    let ticket = peopleCount * entrancePay;
    let peopleForBed = Math. ceil (0.75 * peopleCount);
    let sumForBed = (peopleForBed * payForBed);
    let peopleForUmbrela = Math.ceil (0.50 * peopleCount);
    let sumForUmbrella = peopleForUmbrela * payForUmbrella;
    let finalPrice = (ticket + sumForBed + sumForUmbrella).toFixed(2);
    console.log(`${finalPrice} lv.`);

}
poolDay([21, 5.50, 4.40, 6.20]);
