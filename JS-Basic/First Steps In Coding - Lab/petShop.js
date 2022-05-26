function petShop(input){
    let dogFood = 2.50;
    let catFood = 4;
    let a = Number(input[0]);
    let b = Number(input[1]);
    let res = dogFood * a + catFood * b;
    console.log(res)
}
petShop(["13", "9"]);