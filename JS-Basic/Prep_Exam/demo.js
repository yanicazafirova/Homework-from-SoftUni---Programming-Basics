let input = [
    '550',
    '100',
    '10',
    '40',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let finalBudget = +gets();
  let standardLine = +gets();
  let discount = +gets();
  let priceThreshold = +gets();

  for(let i = 0; i <= finalBudget; i++){
    
  }