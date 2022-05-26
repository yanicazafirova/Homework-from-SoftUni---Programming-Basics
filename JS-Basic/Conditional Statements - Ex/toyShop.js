function toyShop(input) {

    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let moneyFromPuzzle = puzzle * 2.60;
    let moneyFromDoll = doll * 3;
    let moneyFrombear = bear * 4.10;
    let moneyFromMinion = minion * 8.20;
    let moneyFromTruck = truck * 2;
    let allToysPrice = moneyFromPuzzle + moneyFromDoll + moneyFrombear + moneyFromMinion + moneyFromTruck;
    let allToysCount = puzzle + doll + bear + minion + truck;

    if (allToysCount >= 50) {
        allToysPrice = allToysPrice * 0.75;
    }
    let moneyAfterRent = allToysPrice * 0.90;
    if (moneyAfterRent >= vacationPrice) {
        console.log(`Yes! ${(moneyAfterRent - vacationPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationPrice - moneyAfterRent).toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
