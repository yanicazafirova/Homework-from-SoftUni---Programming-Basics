function easterEggsBattle(input) {

    let index = 0;
    let eggsCountFirstPerson = Number(input[index]);
    index++;
    let eggsCountSecondPerson = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "End") {
        switch (command) {
            case `one`:
            eggsCountSecondPerson--;
            break;
            case `two`:
            eggsCountFirstPerson--;
            break;
        }
        command = input[index];
        index++;
        
        if(eggsCountFirstPerson <= 0){
            console.log(`Player one is out of eggs. Player two has ${eggsCountSecondPerson} eggs left.`);
            break;
        }else if(eggsCountSecondPerson <= 0){
            console.log(`Player two is out of eggs. Player one has ${eggsCountFirstPerson} eggs left.`);
            break;
        }
        if(command === "End"){
            console.log(`Player one has ${eggsCountFirstPerson} eggs left.`);
            console.log(`Player two has ${eggsCountSecondPerson} eggs left.`);
        }
    }

}
easterEggsBattle(["2", "6", "one", "two", "two"]);