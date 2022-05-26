function movieDestination(input){

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price = 0;
    let sum = 0;

    switch(destination){
        case `Dubai`:
            switch(season){
                case `Winter`:
                    price = 45000;
                    sum = price * days * 0.70;
                break;
                case `Summer`:
                    price = 40000;
                    sum = price * days * 0.70;
                break;
            }
        break;
        case `Sofia`:
            switch(season){
                case `Winter`:
                    price = 17000;
                    sum = price * days * 1.25;
                break;
                case `Summer`:
                    price = 12500;
                    sum = price * days * 1.25;
                break;
            }
        break;
        case `London`:
            switch(season){
                case `Winter`:
                    price = 24000;
                    sum = price * days;
                break;
                case `Summer`:
                    price = 20250;
                    sum = price * days;
                break;
            }
        break;
    }
    if(budget >= sum){
        console.log(`The budget for the movie is enough! We have ${(budget - sum).toFixed(2)} leva left!`);
    }else{
        console.log(`The director needs ${(sum - budget).toFixed(2)} leva more!`);
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);