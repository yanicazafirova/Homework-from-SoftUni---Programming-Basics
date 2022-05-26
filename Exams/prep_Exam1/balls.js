function balls(input) {


    let ballsCount = Number(input[0]);
    let points = 0;
    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blackcounter = 0;
    let otherCount = 0;

    for (let i = 1; i <= ballsCount; i++) {
        let color = input[i];
        switch (color) {
            case `red`:
                redCounter++;
            points += 5;
            break;
            case `orange`:
                orangeCounter++;
            points += 10;
            break;
            case `yellow`:
                yellowCounter++;
            points += 15;
            break;
            case `white`:
                whiteCounter++;
            points += 20;
            break;
            case `black`:
                blackcounter++;
            points /= 2;
            break;
            default:
                otherCount++;
            continue;
        }

    }
console.log(`Total points: ${Math.floor(points)}`);
console.log(`Red balls: ${redCounter}`);
console.log(`Orange balls: ${orangeCounter}`);
console.log(`Yellow balls: ${yellowCounter}`);
console.log(`White balls: ${whiteCounter}`);
console.log(`Other colors picked: ${otherCount}`);
console.log(`Divides from black balls: ${blackcounter}`);
}
balls(["3",
    "white",
    "black",
    "pink"]);