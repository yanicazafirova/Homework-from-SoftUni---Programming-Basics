function travelAgency(input){

    let nameOfCity = input[0];
    let kindOfPaket = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;

    if(days > 7){
        days--;
    }

    if(days < 1){
        console.log(`Days must be positive number!`);
    }else if(nameOfCity === "Bansko" || nameOfCity === "Borovets"){
        if(kindOfPaket === "withEquipment" && vip === "yes"){
            price = days * 100 * 0.90;
        }else if(kindOfPaket === "withEquipment" && vip === "no"){
            price = days * 100;
        }else if(kindOfPaket === "noEquipment" && vip === "yes"){
            price = days * 80 * 0.95;
        }else if(kindOfPaket === "noEquipment" && vip === "no"){
            price = days * 80;
        }
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }else if(nameOfCity === "Varna" || nameOfCity === "Burgas"){
        if(kindOfPaket === "withBreakfast" && vip === "yes"){
            price = days * 130 * 0.88;
        }else if(kindOfPaket === "withBreakfast" && vip === "no"){
            price = days * 130;
        }else if(kindOfPaket === "noBreakfast" && vip === "yes"){
            price = days * 100 * 0.93;
        }else if(kindOfPaket === "noBreakfast" && vip === "no"){
            price = days * 100;
        }
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`); 
    }else if(nameOfCity !== "Bansko" || nameOfCity !== "Borovets" || kindOfPaket !== "withEquipment" || kindOfPaket !== "noEquipment"){
        console.log(`Invalid input!`);
    }else if(nameOfCity !== "Varna" || nameOfCity !== "Burgas" || kindOfPaket !== "withBreakfast" || kindOfPaket !== "noBreakfast"){
        console.log(`Invalid input!`);
    }
   
}
travelAgency(["Burgas",
"noBreakfast",
"no",
"4"]);