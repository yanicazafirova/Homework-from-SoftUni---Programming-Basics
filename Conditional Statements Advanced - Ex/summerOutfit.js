function summerOutfit(input){

    let degrees = Number(input[0]);
    let periodOfDay = input[1];

    if(degrees >= 10 && degrees <= 18){
        switch(periodOfDay){
            case `Morning`:console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);break;
            case `Afternoon`:console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);break;
            case `Evening`:console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);break;
            default:console.log(``);break;
        }
    }else if(degrees > 18 && degrees <= 24){
        switch(periodOfDay){
            case `Morning`:console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);break;
            case `Afternoon`:console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);break;
            case `Evening`:console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);break;
            default:console.log(``);break;
}
}else if(degrees >= 25){
    switch(periodOfDay){
        case `Morning`:console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);break;
        case `Afternoon`:console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);break;
        case `Evening`:console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);break;
        default:console.log(``);break;
    }
    }else{
        console.log(``);
    }
}
summerOutfit(["28","Evening"]);