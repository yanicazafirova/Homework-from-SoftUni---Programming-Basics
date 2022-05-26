function excursionSale(input){

    let sea = 680;
    let mountain = 499;
    
    let tripForSea = Number(input[0]);
    let tripForMountain = Number(input[1]);

    let totalSum = 0;

    for(let i = 2; i < input.length; i++){

        let command = input[i];
        if(command === "Stop"){
            break;
        }else if(command === "sea" && tripForSea > 0){
            totalSum += sea;
            tripForSea--;
        }else if(command === "mountain" && tripForMountain > 0){
            totalSum += mountain;
            tripForMountain--;
        }
    }
        if(tripForSea === 0 && tripForMountain === 0){
            console.log(`Good job! Everything is sold.`);
            console.log(`Profit: ${totalSum} leva.`);
        }else{
            console.log(`Profit: ${totalSum} leva.`);
        }

}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);