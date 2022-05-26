function bestPlayer(input){

   index = 0;
   let command = input[index];
   index++;
   let countGoals = Number(input[index]);
   index++;
   let nameOfLastPlayer = "";
   let goalsCounter = 0;
   let maxGoals = Number.MIN_SAFE_INTEGER;

   while(command !== "End"){
        let name = command;
        index++;
        let goals = Number(input[index]);
        index++;
        
        if(goals > maxGoals){
            maxGoals = goals;
            nameOfLastPlayer = input[index - 2];
            console.log(nameOfLastPlayer);
        }
   }
   command = input[index];
   index++
   
   }

bestPlayer(["Neymar",
 "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);