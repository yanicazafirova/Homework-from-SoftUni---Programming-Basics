function aluminumJoinery(input) {

    let countWindows = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;
    let sum = 0;

    switch (type) {
        case `90X130`:
            price = 110;
            sum = countWindows * price;
            if (countWindows > 30 && countWindows <= 60) {
                sum *= 0.95;
            } else if (countWindows > 60) {
                sum *= 0.92;
            }
            switch (delivery) {
                case `With delivery`:
                    sum += 60;
                    break;
                case `Without delivery`:
                    sum = sum;
                    break;
            }
            if (countWindows > 99) {
                sum *= 0.96;
            }
            break;
        case `100X150`:
            price = 140;
            sum = price * countWindows;
            if (countWindows > 40 && countWindows <= 80) {
                sum *= 0.94;
            } else if (countWindows > 80) {
                sum *= 0.90;
            }
            switch (delivery) {
                case `With delivery`:
                    sum += 60;
                    break;
                case `Without delivery`:
                    sum = sum;
                    break;
            }
            if (countWindows > 99) {
                sum *= 0.96;
            }
            break;
        case `130X180`:
            price = 190;
            sum = price * countWindows;
            if (countWindows > 20 && countWindows <= 50) {
                sum *= 0.93;
            } else if (countWindows > 50) {
                sum *= 0.88;
            }
            switch (delivery) {
                case `With delivery`:
                    sum += 60;
                    break;
                case `Without delivery`:
                    sum = sum;
                    break;
            }
            if (countWindows > 99) {
                sum *= 0.96;
            }
            break;
        case `200X300`:
            price = 250;
            sum = price * countWindows;
            if (countWindows > 25 && countWindows <= 50) {
                sum *= 0.91;
            } else if (countWindows > 50) {
                sum *= 0.86;
            }
            switch (delivery) {
                case `With delivery`:
                    sum += 60;
                    break;
                case `Without delivery`:
                    sum = sum;
                    break;
            }
            if (countWindows > 99) {
                sum *= 0.96;
            }
            break;
    }
    if (countWindows <= 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${sum.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["2",
    "130X180",
    "With delivery"]);