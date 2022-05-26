function sumOfNumbers(input){

    let numText = String(input[0]); // превръщаме число в текст
    let sum = 0;

    for(let i = 0; i < numText.length; i++){
        let n = Number(numText[i]); // превръщаме текста в число
        sum += n;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);