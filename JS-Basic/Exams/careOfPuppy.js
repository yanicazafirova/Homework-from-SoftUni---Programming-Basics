function careOfPuppy(input){

    let index = 0;
    let boughtFoodInKilos = Number(input[index]);
    index++;
    let boughtFoodInGrams = boughtFoodInKilos * 1000;
    let command = input[index];
    index++;
    let sumOfFood = 0;
    let totalSum = 0;
    
    while(command !== "Adopted"){
        let grams = Number(command);
        sumOfFood += grams; 
        totalSum = sumOfFood
        command = input[index];
        index++;
    }
    if(totalSum > boughtFoodInGrams){
        console.log(`Food is not enough. You need ${totalSum - boughtFoodInGrams} grams more.`);
    }else if(totalSum <= boughtFoodInGrams){
        console.log(`Food is enough! Leftovers: ${boughtFoodInGrams - totalSum} grams.`);
    }
}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);