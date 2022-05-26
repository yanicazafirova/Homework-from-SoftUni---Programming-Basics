function yardGreening(input){
    let sqareMetre = 7.61;
    let area = Number(input[0]);
    let price = sqareMetre * area;
    let discount = (18 / 100) * price;
    let finalPrice = price - discount;
    let res = `The final price is: ${finalPrice} lv.`;
    let res1 = `The discount is: ${discount} lv.`;
    console.log(res);
    console.log(res1);
}
yardGreening(["150"]);