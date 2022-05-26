function footballKit(input){

    let tshirtPrice = Number(input[0]);
    let limitSumForPrice = Number(input[1]);

    let priceForPants = tshirtPrice * 0.75;
    let sockPrice = priceForPants * 0.20;
    let bootsPrice = (tshirtPrice + priceForPants) * 2;
    let allSum = tshirtPrice + priceForPants + sockPrice + bootsPrice;
    let sumAfterDiscount = allSum * 0.85;

    if(sumAfterDiscount >= limitSumForPrice){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${sumAfterDiscount.toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(limitSumForPrice - sumAfterDiscount).toFixed(2)} lv. more.`);
    }
}
footballKit(["25",
"100"]);