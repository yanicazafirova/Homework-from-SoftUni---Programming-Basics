let input = [
    '25, 100',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


  let tickets = gets().split(',').map(Number);
  let priceForOneTicket = 25;
  let sum = 0;
  

  for(let i = 0; i < tickets.length; i++){
    let price = Number(tickets[i]);
   
  }
  

  
