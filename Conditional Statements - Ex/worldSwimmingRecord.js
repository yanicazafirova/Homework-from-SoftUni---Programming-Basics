function worldSwimmingRecord(input){

    let recorForSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let metersForSwimming = meters * timeForOneMeter;
    let delay = Math.floor(meters / 15) * 12.5;
    let finalTime = metersForSwimming + delay;
    
    if(finalTime < recorForSeconds){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(finalTime - recorForSeconds).toFixed(2)} seconds slower.`);
    }
    
}
worldSwimmingRecord (["55555.67",
"3017",
"5.03"]);

