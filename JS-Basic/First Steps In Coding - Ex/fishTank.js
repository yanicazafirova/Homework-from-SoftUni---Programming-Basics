function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = length * width * high;
    let capacityLitres = capacity / 1000;
    let bArea = 0.17;
    let neededLiters = capacityLitres * (1 - bArea);

    console.log(neededLiters);
}
fishTank(["85", "75", "47", "17"]);