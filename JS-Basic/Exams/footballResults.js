function footballResults(input){

    let resultOfFisrtMach = input[0];
    let resultOfSecondMach = input[1];
    let resultOfThirdMach = input[2];

    let win = 0;
    let lose = 0;
    let equality = 0;

    let firstTeam1 = Number(resultOfFisrtMach.charAt(0));
    let secondTeam1 = Number(resultOfFisrtMach.charAt(2));

    let firstTeam2 = Number(resultOfSecondMach.charAt(0));
    let secondTeam2 = Number(resultOfSecondMach.charAt(2));
    

    let firstTeam3 = Number(resultOfThirdMach.charAt(0));
    let secondTeam3 = Number(resultOfThirdMach.charAt(2));

    if(firstTeam1 > secondTeam1){
        win++;
    }else if(firstTeam1 < secondTeam1){
        lose++;
    }else if(firstTeam1 === secondTeam1){
        equality++;
    }
    if(firstTeam2 > secondTeam2){
        win++;
    }else if(firstTeam2 < secondTeam2){
        lose++;
    }else if(firstTeam2 === secondTeam2){
        equality++;
    }
    if(firstTeam3 > secondTeam3){
        win++;
    }else if(firstTeam3 < secondTeam3){
        lose++;
    }else if(firstTeam3 === secondTeam3){
        equality++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${equality}`);
}
footballResults(["4:2",
"0:3",
"1:0"]);