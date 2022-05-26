function depositCalculator(input){
    let deposit = Number(input[0]);
    let month = Number(input[1]);
    let percent = Number(input[2]);
    let sum = deposit + month * ((deposit * percent/100)/12);
    console.log(sum);
}
depositCalculator(["2350", "6", "7"]);