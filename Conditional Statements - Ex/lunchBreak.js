function lunchBreak(input) {

    let nameOfSerial = input[0];
    let timeOfSerial = Number(input[1]);
    let timeForRest = Number(input[2]);

    let timeForLunch = (1 / 8) * timeForRest;
    let timeForFreeTime = (1 / 4) * timeForRest;
    let timeAfretAll = timeForRest - timeForLunch - timeForFreeTime;

    if (timeAfretAll >= timeOfSerial) {
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(timeAfretAll - timeOfSerial)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(timeOfSerial - timeAfretAll)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf","48","60"]);

