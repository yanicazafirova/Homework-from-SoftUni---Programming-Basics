function accountBalance(input){

    let index = 0;
    let account = 0;
    let command = input[index];
    index++;
    
    while(command !== `NoMoreMoney`){
        let sum = Number(command);

        if(sum < 0){
            console.log(`Invalid operation!`);
            break;
        }
        account += sum;
        console.log(`Increase: ${sum.toFixed(2)}`);
        command = input[index];
        index++;
    }
    console.log(`Total: ${account.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);