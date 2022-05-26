function renovation(input){

    let index = 0;
    let h = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let percentWithoutPaint = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = h * w * 4;
    let sumWithDiscount = sum * (1 - percentWithoutPaint / 100);


    while(command !== "Tired!"){
        let litresPaint = Number(command);
        sumWithDiscount -= litresPaint;

        command = input[index];
        index++;

        if(command === "Tired!"){
            console.log(`${Math.floor(sumWithDiscount)} quadratic m left.`);
        }
        if(sumWithDiscount <= 0){
            console.log(`All walls are painted and you have ${Math.abs(sumWithDiscount)} l
            paint left!`);
        }
        if(litresPaint <= 0){
            console.log(`All walls are painted! Great job, Pesho!`);
        }
    }
   
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])
