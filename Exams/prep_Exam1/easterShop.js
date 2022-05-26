function easterShop(input) {

    let index = 0;
    let eggsCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let boughtEggs = 0;

    while (command !== "Close") {
        let buyingEggs = command;
        let buyingCount = Number(input[index]);
        index++;

        switch (buyingEggs) {

            case `Buy`:
            eggsCount -= buyingCount;
            boughtEggs += buyingCount 
            break;
            case `Fill`:
            eggsCount += buyingCount;
            break;
        }
        command = input[index];
        index++;
        if(boughtEggs >= eggsCount){
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${buyingCount}.`);
        }
        break;
    }
    
    if(command === "Close"){
        console.log(`Store is closed!`);
        console.log(`${boughtEggs} eggs sold.`);
    }
}
easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"]);