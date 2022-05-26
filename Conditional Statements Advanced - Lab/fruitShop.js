function fruitShop(input) {

    let product = input[0];
    let dayOfWeek = input[1];
    let productCount = Number(input[2]);

    if(dayOfWeek === `Monday` || dayOfWeek === `Tuesday` || dayOfWeek === `Wednesday` || dayOfWeek === `Thursday` || dayOfWeek === `Friday`){

        switch(product){

            case `banana`: console.log((productCount * 2.50).toFixed(2));break;
            case `apple`: console.log((productCount * 1.20).toFixed(2));break;
            case `orange`: console.log((productCount * 0.85).toFixed(2));break;
            case `grapefruit`: console.log((productCount * 1.45).toFixed(2));break;
            case `kiwi`: console.log((productCount * 2.70).toFixed(2));break;
            case `pineapple`: console.log((productCount * 5.50).toFixed(2));break;
            case `grapes`: console.log((productCount * 3.85).toFixed(2));break;
            default:console.log(`error`);break;
        }
    }else if(dayOfWeek === `Saturday` || dayOfWeek === `Sunday`){
        switch(product){

            case `banana`: console.log((productCount * 2.70).toFixed(2));break;
            case `apple`: console.log((productCount * 1.25).toFixed(2));break;
            case `orange`: console.log((productCount * 0.90).toFixed(2));break;
            case `grapefruit`: console.log((productCount * 1.60).toFixed(2));break;
            case `kiwi`: console.log((productCount * 3).toFixed(2));break;
            case `pineapple`: console.log((productCount * 5.60).toFixed(2));break;
            case `grapes`: console.log((productCount * 4.20).toFixed(2));break;
            default:console.log(`error`);break;
    }
}else{
    console.log(`error`);
}
}
fruitShop(["tomato",
"Monday",
"0.5"]);
