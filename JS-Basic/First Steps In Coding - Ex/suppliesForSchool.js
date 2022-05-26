function suppliesForSchool(input){
    let pens = 5.80;
    let markers = 7.20;
    let prep = 1.20;
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percent = Number(input[3]);
    let sum = a * pens + b * markers + c * prep;
    let res = sum - (sum * percent / 100);
    console.log(res);
}
suppliesForSchool(["2", "3", "4", "25"]);