function touristShop(input){

    let budget = Number(input[0]);
    index = 1;
    let command = input[index];
    let productCounter = 0;
    let finalPrice = 0;

    while(command !== "Stop"){
        let name = command;
        index++;
        productCounter++;
        finalPrice = 0;

        while(finalPrice < budget){
            let money = Number(input[index]);
            finalPrice += money;
            
        }
        }
        command = input[index]
        index++;

        if(productCounter === 3){
            finalPrice /= 2;
        }
        console.log(finalPrice);
    }
    
touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])
