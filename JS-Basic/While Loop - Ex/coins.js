function coins(input){

    
    let command = Number(input[0]);
    let coins = Math.floor(command * 100);
    let sum = 0;
    
    while(coins > 0 ){ 
        
        if(coins >= 200){
            sum++;
            coins-=200;
        }else if(coins >= 100){
            sum++;
            coins -= 100;
        }else if(coins >= 50){
            sum++;
            coins -= 50;
        }else if(coins >= 20){
            sum++;
            coins -= 20;
        }else if(coins >= 10){
            sum++;
            coins -= 10;
        }else if(coins >= 5){
            sum++;
            coins -= 5
        }else if(coins >= 2){
            sum++;
            coins -= 2;
        }else if(coins >= 1){
            sum++;
            coins -= 1;
        }
        
    }
    console.log(sum);
}
coins(["0.56"]);