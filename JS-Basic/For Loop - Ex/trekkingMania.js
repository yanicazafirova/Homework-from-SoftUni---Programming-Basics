function trekkingMania(input) {
    let groups = Number(input[0]);
    let people = 0;
    let musala = 0, monblan = 0, kilimandjaro = 0, k2 = 0, everest = 0;


    for (let index = 1; index <= groups; index++) {
        let group = Number(input[index]);
        people += group;

        if (group <= 5) {
            musala += group;
        } else if (group <= 12) {
            monblan += group;
        } else if (group <= 25) {
            kilimandjaro += group;
        } else if (group <= 40) {
            k2 += group;
        } else if (group > 40) {
            everest += group;
        }
    }

    console.log(`${(musala / people * 100).toFixed(2)}%`);
    console.log(`${(monblan / people * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / people * 100).toFixed(2)}%`);
    console.log(`${(k2 / people * 100).toFixed(2)}%`);
    console.log(`${(everest / people * 100).toFixed(2)}%`);
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]); 
