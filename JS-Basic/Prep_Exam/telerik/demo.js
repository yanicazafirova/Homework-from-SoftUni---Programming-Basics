// sample input
// each line should consist of single string and a comma right after
let input = [
    'Peter',
    '55',
    '64'
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  // read the first line of the input, no need to convert it to a string, it already is
  let input1 = input[0];
  
  // read the second line and convert it to a number
  let input2 = Number(input[1]);
  let input3 = Number(input[2]);
  
  let age = input2;
  let secondAge = input3;
  let ageIn5Years = age + 5 + secondAge;
  
  // string concatenation
  print(input1 + ' is ' + age + ' years old.');
  
  // string interpolation. You could use this as it is way more readable
  print(`${input1} is ${secondAge} years old.`);
  