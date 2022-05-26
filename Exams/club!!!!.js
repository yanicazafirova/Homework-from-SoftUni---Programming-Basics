function club(input){

   let index = 0;
   let limitBudget = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   
   let sum = 0;

   while(command !== "Party"){
    let name = command;
    let price = input[index].length;
    let count = Number(input[index]);
    index++;
    sum += count * price;

    if(sum % 2 !== 0){
        sum *= 0.75;
    }
    command = input[index];
    index++;
   }
console.log(sum);
}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"]);
