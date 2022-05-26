function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let totalSum = 0;

    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);
        switch(season){

            case `summer`: totalSum = budget * 0.30;
            console.log(`Camp - ${(totalSum).toFixed(2)}`);
            break;
            case `winter`: totalSum = budget * 0.70;
            console.log(`Hotel - ${(totalSum).toFixed(2)}`);
            break;
        }
    }else if(budget <= 1000) {
        console.log(`Somewhere in Balkans`);
        switch(season){

            case `summer`: totalSum = budget * 0.40;
            console.log(`Camp - ${(totalSum).toFixed(2)}`);
            break;
            case `winter`: totalSum = budget * 0.80;
            console.log(`Hotel - ${(totalSum).toFixed(2)}`);
            break;
        }
    }else if(budget > 1000) {
        console.log(`Somewhere in Europe`);
        totalSum = budget * 0.90;
        console.log(`Hotel - ${(totalSum).toFixed(2)}`);
        }
}
journey(["1500", "summer"]);