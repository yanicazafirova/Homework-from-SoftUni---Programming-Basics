function basketballEquipment(input){

    let equipment = Number(input[0]);

    let sneakers = equipment - (40 / 100) * equipment;
    let outfit = sneakers - (20 / 100) * sneakers;
    let ball = (1 / 4) * outfit;
    let accessories = (1 / 5) * ball;

    let finalPrice = equipment + sneakers + outfit + ball + accessories;
    console.log(finalPrice);
    
}
basketballEquipment(["584"]);