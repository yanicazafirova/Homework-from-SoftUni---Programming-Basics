function balls(input) {

    let index = 0;
    let numberOfBalls = Number(input[index]);
    index++;
    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let otherCouner = 0;
    let blackCounter = 0;

    let allPoints = 0;

    for (let i = 0; i < numberOfBalls; i++) {
        let typeOfBalls = input[index];
        index++;
    
        switch (typeOfBalls) {

            case `red`:
                redCounter++;
                break;
            case `orange`:
                orangeCounter++;
                break;
            case `yellow`:
                yellowCounter++;
                break;
            case `white`:
                whiteCounter++;
                break;
            case `black`: 
                blackCounter++;
                break;
            default: 
            otherCouner++;
                continue;
        }
       
             let pointsOfRed = redCounter * 5;
             let pointsOfOrange = orangeCounter * 10;
             let pointsOfYellow = yellowCounter * 15;
             let pointsOfWhite = whiteCounter * 20;
             if(typeOfBalls !== "black"){
                allPoints = pointsOfRed + pointsOfOrange + pointsOfYellow + pointsOfWhite;
             }else{
                 allPoints = Math.floor((pointsOfRed + pointsOfOrange + pointsOfYellow + pointsOfWhite) / (2 * blackCounter));
             }
             
             
     }  
   
    console.log(`Total points: ${allPoints}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherCouner}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}
balls(["3",
"white",
"black",
"pink"])
