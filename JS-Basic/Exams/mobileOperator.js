function mobileOperator(input) {

    let limitForContract = input[0];
    let typeOfContract = input[1];
    let addMobileInternet = input[2];
    let monthCount = Number(input[3]);
    let priceForYear = 0;
    let finalPrice = 0;

    switch (typeOfContract) {

        case `Small`:
            	if(limitForContract === "one"){
                    if(addMobileInternet === "yes"){
                        priceForYear = 9.98 + 5.50;
                        finalPrice = monthCount * priceForYear;
                    }else if(addMobileInternet === 'no'){
                        priceForYear = 9.98;
                        finalPrice = monthCount * priceForYear;
                    }
                }else if(limitForContract === "two"){
                            if(addMobileInternet === "yes"){
                                priceForYear = 9.98 + 5.50;
                                finalPrice = monthCount * priceForYear * 0.9625;
                            }else if(addMobileInternet === "no"){
                                priceForYear = 8.58;
                                finalPrice = monthCount * priceForYear * 0.9625;
                            }
                            break;
                        } 
        case `Middle`:
            if(limitForContract === "one"){
                priceForYear = 18.99;
                finalPrice = monthCount * priceForYear;
                if(addMobileInternet === "yes"){
                    priceForYear += 4.35;
                    finalPrice = monthCount * priceForYear;
                }else if(addMobileInternet === 'no'){
                    priceForYear = 18.99;
                    finalPrice = monthCount * priceForYear;
                }
            }else if(limitForContract === "two"){
                        priceForYear = 17.09;
                        finalPrice = monthCount * priceForYear;
                        if(addMobileInternet === "yes"){
                            priceForYear += 4.35;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }else if(addMobileInternet === "no"){
                            priceForYear = 17.09;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }
                        break;
                    }    
        case `Large`:
            if(limitForContract === "one"){
                priceForYear = 25.98;
                finalPrice = monthCount * priceForYear;
                if(addMobileInternet === "yes"){
                    priceForYear += 4.35;
                    finalPrice = monthCount * priceForYear;
                }else if(addMobileInternet === 'no'){
                    priceForYear = 25.98;
                    finalPrice = monthCount * priceForYear;
                }
            }else if(limitForContract === "two"){
                        priceForYear = 23.59;
                        finalPrice = monthCount * priceForYear;
                        if(addMobileInternet === "yes"){
                            priceForYear = 23.90 + 4.35;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }else if(addMobileInternet === "no"){
                            priceForYear = 23.59;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }
                        break;
                    }    
        case `ExtraLarge`:
            if(limitForContract === "one"){
                priceForYear = 35.99;
                finalPrice = monthCount * priceForYear;
                if(addMobileInternet === "yes"){
                    priceForYear += 3.85;
                    finalPrice = monthCount * priceForYear;
                }else if(addMobileInternet === 'no'){
                    priceForYear = 35.99;
                    finalPrice = monthCount * priceForYear;
                }
            }else if(limitForContract === "two"){
                        priceForYear = 31.79;
                        finalPrice = monthCount * priceForYear;
                        if(addMobileInternet === "yes"){
                            priceForYear += 3.85;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }else if(addMobileInternet === "no"){
                            priceForYear = 31.79;
                            finalPrice = monthCount * priceForYear * 0.9625;
                        }
                    }    
            }
    console.log(`${finalPrice.toFixed(2)} lv.`);
}
mobileOperator(["two",
"Small",
"yes",
"20"])





