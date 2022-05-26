function cleverLily(input){

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singlePrice = Number(input[2]);

    let secondBirthday = 10;
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;

     for(let i = 1; i <= lilysAge; i++){
        if(i % 2 === 0){
            savedMoney += secondBirthday;
            stolenMoney++;
            secondBirthday += 10;
        }else{
            toysCounter++;
        }
     }
     let totalSumFromToys = toysCounter * singlePrice;
     let totalSavedMoney = (savedMoney + totalSumFromToys) - stolenMoney;

     if(totalSavedMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
     }else{
         console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
     }
}
cleverLily(["10","170.00","6"]);