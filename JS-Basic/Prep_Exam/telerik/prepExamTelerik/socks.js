function socks(input){

    let finalBudget = Number(input[0]);
    let priceOfPair = Number(input[1]);
    let discount = Number(input[2]);
    let limitOfPrice = Number(input[3]);

    let secondPrair = priceOfPair * (1 - discount / 100); 
    let trirdPair = priceOfPair * (0.90 - discount / 100); 
    let fourthPair = priceOfPair * (0.80 - discount / 100); 
    let fifthPair = priceOfPair * (0.70 - discount / 100); 
    let sixthPair = priceOfPair * (0.60 - discount / 100); 
    let seventhPair = priceOfPair * (0.50 - discount / 100); 
    let eightPair = limitOfPrice;

    let sum = priceOfPair + secondPrair + trirdPair + fourthPair + fifthPair + sixthPair + seventhPair + eightPair;
    let change = finalBudget - sum;
    let count = finalBudget / limitOfPrice;
    
    
    
    
    console.log(`${count} , ${change}`);

}
socks(['63',
'10',
'1',
'4'])