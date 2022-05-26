function graduation(input){

    let index = 0;
    let name = input[index];
    index++;
    let classes = 1;
    let sum = 0;
    let badGrade = 0;
    let isExcluded = false;

    while(classes <= 12){
        let grade = Number(input[index]);
        index++;
        
        if(grade < 4){
            badGrade++;
            if(badGrade > 1){
                isExcluded = true;
                break;
            }
            continue;
        }
        sum += grade;
        classes++;
    }
    if(!isExcluded){
        let avgGrade = sum / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }else{
        console.log(`${name} has been excluded at ${classes} grade`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;