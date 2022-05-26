function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wins = 0;
    let finalPoints = startingPoints;

    for (let index = 2; index <= input.length; index++) {
        let mach = input[index]

        switch (mach) {

            case `W`:
                finalPoints += 2000;
                wins++;
                break;
            case `F`:
                finalPoints += 1200;
                break;
            case `SF`:
                finalPoints += 720;
                break;
        }
    }
    let avgPoints = (finalPoints - startingPoints) / tournaments;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);