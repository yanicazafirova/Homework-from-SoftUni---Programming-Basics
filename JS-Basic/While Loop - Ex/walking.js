function walking(input){

    let target = 10000;
    let index = 0;
    let command = input[index];
    sum = 0;
    
    while(command !== "Going home"){
        let steps = Number(command);
        sum += steps;
        
        if(sum >= target){
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - target} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
    if(command === `Going home`){
        let stepToHome = Number(input[index + 1]);
        sum += stepToHome;

        if(sum >= target){
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - target} steps over the goal!`);
        }else{
            console.log(`${target - sum} more steps to reach goal.`);
        }
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);
