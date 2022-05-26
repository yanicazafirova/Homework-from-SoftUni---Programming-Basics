function theMostPowerfulWord(input){

let index = 0;
let command = input[index];
index++;
let maxSum = 0;
let maxWord = false;

while(command !== "End of words"){
    let name = command;
    let sum = 0;
    let fistLetter = command.charAt(0);
    for(let i = 0; i < command.length; i++){
        let numOfText = command.charCodeAt(i);
        sum += numOfText;
    }
    if(fistLetter === "a" || fistLetter === "A"){
        sum *= command.length;
    }else if(fistLetter === "e" || fistLetter === "E"){
        sum *= command.length;
    }else if(fistLetter === "i" || fistLetter === "I"){
        sum *= command.length;
    }else if(fistLetter === "o" || fistLetter === "O"){
        sum *= command.length;
    }else if(fistLetter === "u" || fistLetter === "U"){
        sum *= command.length;
    }else if(fistLetter === "y" || fistLetter === "Y"){
        sum *= command.length;
    }else{
        sum /= command.length;
    }
    if(sum >= maxSum){
        maxSum = sum;
        maxWord = true;
        maxWord = name;
    }
    command = input[index];
    index++;
   
}
console.log(`The most powerful word is ${maxWord} - ${maxSum}`);
}
theMostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"]);







    //let index = 0;
    //let command = input[index];
    //index++;
    //let a = command.charAt(input);
    //console.log(a);
    
    //while(command !== "End of words"){
      //  let word = command;
        //for(let i = 0; i < command.length; i++){
          //  let asci = word.charCodeAt(input);
            
        //}
       

        //command = input[index];
        //index++;
        
    //}

