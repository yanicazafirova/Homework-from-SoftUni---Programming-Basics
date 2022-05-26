function cake(input){

    let l = Number(input[0]);
    let w = Number(input[1]);
    let allCake = l * w;
    let pieceOFCake = 1 * 1;
    let index = 2;
    let countOFPiece = input[index];
    
    while(countOFPiece !== "STOP"){
        let numberOfPieces = Number(countOFPiece);
        allCake -= (numberOfPieces * pieceOFCake);

        if(allCake <= 0){
            console.log(`No more cake left! You need ${Math.abs(allCake)} pieces more.`);
            break;
        }
        index++;
        countOFPiece = input[index];
    }
    if(allCake > 0){
        console.log(`${allCake} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);