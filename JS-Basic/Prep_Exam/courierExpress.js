function courierExpress(input){

    let packetWeight = Number(input[0]);
    let typeOfService = input[1];
    let distanceInKilometers = Number(input[2]);
    let sum = 0;

    switch(typeOfService){

        case `standard`:
            if(packetWeight < 1){
                sum = (3 * distanceInKilometers) / 100;
            }else if(packetWeight >= 1 && packetWeight < 10){
                sum = (5 * distanceInKilometers) / 100;
            }else if(packetWeight >= 10 && packetWeight < 40){
                sum = (10 * distanceInKilometers) / 100;
            }else if(packetWeight >= 40 && packetWeight < 90){
                sum = (15 * distanceInKilometers) / 100;
            }else if(packetWeight >= 90 && packetWeight < 150){
                sum = (20 * distanceInKilometers) / 100;
            }
        break;
        case `express`:
            if(packetWeight < 1){
                sumDiscount = (0.03 * 1.80 * distanceInKilometers);
                sum = sumDiscount + (distanceInKilometers * 0.03);
            }else if(packetWeight >= 1 && packetWeight < 10){
                sumDiscount = 0.05 * 0.40 * packetWeight * distanceInKilometers;
                sum = sumDiscount + (distanceInKilometers * 0.05);
            }else if(packetWeight >= 10 && packetWeight < 40){
                sumDiscount = (0.10 * 0.05 * packetWeight * distanceInKilometers);
                sum = sumDiscount + (distanceInKilometers * 0.10);
            }else if(packetWeight >= 40 && packetWeight < 90){
                sumDiscount = (0.15 * 0.02 * packetWeight * distanceInKilometers);
                sum = sumDiscount + (distanceInKilometers * 0.15);
            }else if(packetWeight >= 90 && packetWeight < 150){
                sumDiscount = (0.20 * 0.01 * packetWeight * distanceInKilometers);
                sum = sumDiscount + (distanceInKilometers * 0.20);
            }
        break;
    }
console.log(`The delivery of your shipment with weight of ${packetWeight.toFixed(3)} kg. would cost ${sum.toFixed(2)} lv.`);

}
courierExpress(["87",
"express",
"130"]);