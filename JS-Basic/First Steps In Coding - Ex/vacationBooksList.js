function vacationBooksList(input){
    let pages = Number(input[0]);
    let pagesHour = Number(input[1]);
    let days = Number(input[2]);
    let sum = pages / pagesHour;
    let res = sum / days;
    console.log(res);
}
vacationBooksList(["432", "15", "4"]);