function sumNumbers(input){

    let index = 0;
    let nums = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < nums){
        let nums = Number(input[index]);
        index++;
        sum += nums;
    }
    console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"]);