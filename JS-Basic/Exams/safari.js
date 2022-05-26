function safari(input){

    let budget = Number(input[0]);
    let litresGas = Number(input[1]);
    let dayOfWeek = input[2];

   let priceForGas = litresGas * 2.10;
   let allPriceWithGid = priceForGas + 100;

   if(dayOfWeek === "Sunday"){
       allPriceWithGid *= 0.80;
   }else if(dayOfWeek === "Saturday"){
        allPriceWithGid *= 0.90;
   }
   if(budget >= allPriceWithGid){
    console.log(`Safari time! Money left: ${(budget - allPriceWithGid).toFixed(2)} lv.`);
   }else{
       console.log(`Not enough money! Money needed: ${(allPriceWithGid - budget).toFixed(2)} lv.`);
   }
}
safari(["120", "30", "Saturday"]);