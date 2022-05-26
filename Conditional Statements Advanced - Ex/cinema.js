function cinema(input){

    let movie = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    switch(movie){

        case `Premiere`:console.log(`${(row * column * 12).toFixed(2)} leva`);break;
        case `Normal`:console.log(`${(row * column * 7.50).toFixed(2)} leva`);break;
        case `Discount`:console.log(`${(row * column * 5).toFixed(2)} leva`);break;
    }

    }
cinema(["Discount",
"12",
"30"])
