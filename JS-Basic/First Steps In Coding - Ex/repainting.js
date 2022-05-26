function repainting(input){
    let nayl = 1.50;
    let paint = 14.50;
    let razr = 5.00;
    let bags = 0.40;
    let nayl1 = Number(input[0]);
    let paitnt1 = Number(input[1]);
    let razr1 = Number(input[2]);
    let sum = nayl * nayl1 + paint * paitnt1 + razr * razr1 + bags;
    let dNayl = 2 * nayl;
    let dPaint = (10 / 100 * paitnt1) * paint;
    let sum1 = sum + dNayl + dPaint;
    let work = Number(input[3]);
    let workHour = (30 / 100) * sum1;
    let work1 = workHour * work;
    let finalPrice = sum1 + work1;
    console.log(finalPrice);
}
repainting(["10", "11", "4", "8"]);