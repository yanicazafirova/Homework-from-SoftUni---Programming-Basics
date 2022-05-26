function movieStars(input){

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while(command !== "ACTION"){
        let name = command;
        let salary = Number(input[index]);
        index++;
        budget -= salary;
        
        if(name.length > 15){
            console.log(`kfj`);
        }
        command = input[index];
        index++;
    }

}
movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);