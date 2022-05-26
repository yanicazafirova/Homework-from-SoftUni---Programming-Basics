let input = (["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"]);

let print = this.print || console.log;

    let index = 0;
    let studentsCount = Number(input[index]);
    index++;
    let failGradeCount = 0;
    let between4And5Count = 0;
    let betwen3And4Count = 0
    let topStudentsCount = 0
    let allGrade = 0;

    for(let i = 0; i < studentsCount; i++){
        let grade = Number(input[index]);
        allGrade += grade;
        index ++;

        if(grade >= 2 && grade <= 2.99){
            failGradeCount++;
        }else if(grade >= 3 && grade <= 3.99){
            betwen3And4Count++;
        }else if(grade >= 4 && grade <= 4.99){
            between4And5Count++;
        }else if(grade >= 5 && grade <= 6){
            topStudentsCount++;
        }
        
    }
    let failGradeCountP = failGradeCount / studentsCount * 100;
    let between4And5CountP = between4And5Count / studentsCount * 100;
    let betwen3And4CountP = betwen3And4Count / studentsCount * 100;
    let topStudentsCountP = topStudentsCount / studentsCount * 100;
    let avgGrade = allGrade / studentsCount
    

    print(`Top students: ${topStudentsCountP.toFixed(2)}%`);
    print(`Between 4.00 and 4.99: ${between4And5CountP.toFixed(2)}%`);
    print(`Between 3.00 and 3.99: ${betwen3And4CountP.toFixed(2)}%`);
    print(`Fail: ${failGradeCountP.toFixed(2)}%`);
    print(`Average: ${avgGrade.toFixed(2)}`);

