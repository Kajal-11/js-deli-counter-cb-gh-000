function takeANumber(currentCustomer, newCustomer){
  var array = [];
  for(let i=0 ; i < newCustomer.length; i++){
  array.push(`Welcome, ${newCustomer[i]}. You are number ${currentCustomer.length + 1} in line.`);
  currentCustomer.push(newCustomer[i]); 
  }
  return array;
}
