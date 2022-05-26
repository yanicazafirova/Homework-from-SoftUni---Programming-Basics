function examPreparation(input){

    let badGradeCounter = Number(input[0]);
    index = 1;
    let command = input[index];
    index++;
    let badGrade = 0;
    let goodGrade = 0;
    let sumOfGrade = badGrade + goodGrade;
    let nameOfLastExam = "";

    while(badGrade < badGradeCounter){
        let grade = input[index];
        index++;

        if(grade <= 4){
            badGrade++;
            console.log(`You need a break, ${badGrade} poor grades.`); 
            break;
        }
        if(){

        }

    }
    

    
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);