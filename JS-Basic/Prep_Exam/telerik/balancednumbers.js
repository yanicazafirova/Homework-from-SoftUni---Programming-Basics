function balancedNumbers(input){


  let index = 0;
  let number = input[index];
  index++;

  let sum = 0;

  while(true){
      let first = Number(number.charAt(0));
      let second = Number(number.charAt(1));
      let trird = Number(number.charAt(2));

      if(first + trird === second){
        sum += Number(number);
      }else{
          break;
      }
    number = input[index];
    index++;
  }
    console.log(sum);
}
balancedNumbers(['275', '693', '110', '742'])
  
