function oscarsCeremony(input){

    let rent = Number(input[0]);

    let oscars = rent * 0.70;
    let food = oscars * 0.85;
    let sound = food / 2;

    let allSum = rent + oscars + food + sound;
    console.log(allSum.toFixed(2));

}
oscarsCeremony(["3500"]);