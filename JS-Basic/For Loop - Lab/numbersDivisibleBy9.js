function numbersDivisibleBy9(input){

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let sum = 0;
    let printNumber = ""; // правим променливата, за да съхраняваме всички числа като стринг.

    for(let i = firstNum; i <= secondNum; i++){
        if(i % 9 === 0){
        sum += i; // сумираме числата
        printNumber += `${i}\n`; // отпечатване на числата в променливата, която сме създали, 
        //а \n изпраща всяко число на нов ред!!!!!!
        }
    }
console.log(`The sum: ` + sum);
console.log(printNumber);
}
numbersDivisibleBy9(["100", "200"]);