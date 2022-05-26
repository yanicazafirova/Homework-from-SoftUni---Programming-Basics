function pCGameShop(input){

  let index = 0;
  let countSaleGames = Number(input[index]);
  let countH = 0;
  let countF = 0;
  let countO = 0;
  let countOther = 0;

  for(let i = 1; i <= countSaleGames; i++){

    let name = input[i];
        switch(name){
            case `Hearthstone`:
            countH++;
            break;

            case `Fornite`:
            countF++;
            break;

            case `Overwatch`:
            countO++;
            break;

            default:
            countOther++;
            break;
        }

  }
    console.log(`Hearthstone - ${((countH / countSaleGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((countF / countSaleGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((countO / countSaleGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((countOther / countSaleGames) * 100).toFixed(2)}%`);
}
pCGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"]);