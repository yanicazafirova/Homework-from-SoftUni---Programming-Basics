
function onTimeForTheExam(input) {
    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let allExamToMin = hourOfExam * 60 + minuteOfExam;
    let allArrivalToMin = hourOfArrival * 60 + minuteOfArrival;

    if (hourOfArrival > hourOfExam) {
        console.log('Late');
    } else if (hourOfExam === hourOfArrival && minuteOfExam < minuteOfArrival) {
        console.log('Late');
    } else if ((allExamToMin - allArrivalToMin) <= 30) {
        console.log('On time');
    } else {
        console.log('Early');
    }

    if (allArrivalToMin < allExamToMin) {
        let minBefore = allExamToMin - allArrivalToMin;
        let hour = Math.floor(minBefore / 60);
        let min = minBefore % 60;
        if (minBefore < 60) {
            console.log(`${minBefore} minutes before the start`);
        } else if (minBefore >= 60 && min < 10) {
            console.log(`${hour}:0${min} hours before the start`);
        } else {
            console.log(`${hour}:${min} hours before the start`);
        }
    }
    if (allArrivalToMin > allExamToMin) {
        let minAfter = allArrivalToMin - allExamToMin;
        let hour = Math.floor(minAfter / 60);
        let min = minAfter % 60;
        if (minAfter < 60) {
            console.log(`${minAfter} minutes after the start`);
        } else if (minAfter >= 60 && min < 10) {
            console.log(`${hour}:0${min} hours after the start`);
        } else {
            console.log(`${hour}:${min} hours after the start`);
        }
    }
}

onTimeForTheExam(["12",
"15",
"11",
"40"])




















