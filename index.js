function takeANumber(currentCustomer, newCustomer){
  currentCustomer.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentCustomer.length} in line.`;
}

function nowServing(currentCustomer){
  if(currentCustomer.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return currentCustomer.shift();
  }
}