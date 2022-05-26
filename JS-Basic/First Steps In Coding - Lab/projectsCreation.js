function projectsCreation(input){
    let name = input[0];
    let hours = 3;
    let project = input[1];
    let sum = hours * project;
    let res = `The architect ${name} will need ${sum} hours to complete ${project} project/s.`
    console.log(res);
}
projectsCreation(["George", "4"]);