function footballTournament(input) {

    
    let name = input[0];
    let countMatches = Number(input[1]);
    let sumPoints = 0;
    let countW = 0; 
    let countD = 0;
    let countL = 0;

    for (let i = 2; i < input.length; i++) {

        let typeOfResult = input[i];

        switch (typeOfResult) {

            case `W`:
                countW++;
            break;
            case `D`:
                countD++;
            break;
            case `L`:
                countL++;
            break;
        }
        sumPoints = countW * 3 + countD * 1;
    }
    if(countMatches >= 1){
        console.log(`${name} has won ${sumPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${((countW / countMatches) * 100).toFixed(2)}%`);
    }else{
        console.log(`${name} hasn't played any games during this season.`);
    }
}
footballTournament(["Chelsea",
"0"])

