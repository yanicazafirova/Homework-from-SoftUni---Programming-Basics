function foodDelivery(input){
    let chiken = 10.35;
    let fish = 12.40;
    let vegie = 8.15;
    let chiken1 = Number(input[0]);
    let fish1 = Number(input[1]);
    let vegie1 = Number(input[2]);
    let sum = chiken * chiken1 + fish * fish1 + vegie * vegie1;
    let dessert = (20 / 100) * sum;
    let delivery = 2.50;
    let finalPrice = sum + dessert + delivery;
    console.log(finalPrice);
}
foodDelivery(["2", "4", "3"]);