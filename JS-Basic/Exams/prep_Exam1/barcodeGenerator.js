function barcodeGenerator(input) {

    let numOne = input[0];
    let numTwo = input[1];
    let num = " ";

    for (let i = numOne.charAt(0); i <= numTwo.charAt(0); i++) {
        for (let j = numOne.charAt(1); j <= numTwo.charAt(1); j++) {
            for (let k = numOne.charAt(2); k <= numTwo.charAt(2); k++) {
                for (let l = numOne.charAt(3); l <= numTwo.charAt(3); l++) {
                    
                    if(i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0){
                        num = `${i}` + `${j}` + `${k}` + `${l}` + " ";
                        console.log(num);
                    }
                }
            }
        }
    }
}
barcodeGenerator(["3256",
    "6579"]);