function nameGame(input){

        let index = 0;
        let command = input[index];
        index++;
        let maxSum = 0;
        let maxWord = false;
        
        while(command !== "Stop"){
            let name = command;
            
            let sum = 0;
            for(let i = 0; i < command.length; i++){
                let score = Number(input[index]);
                index++;
                let numOfText = command.charCodeAt(i);
                
                if(numOfText === score){
                    sum += 10;
                }else{
                    sum += 2;
                }
            }
            if(sum >= maxSum){
                maxSum = sum;
                maxWord = true;
                maxWord = name;
            }
            command = input[index];
            index++;
        }
        console.log(`The winner is ${maxWord} with ${maxSum} points!`);
        }
nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])