// Singly or Doubly Invoked Function

function getTotal(){

  var args = Array.prototype.slice.call(arguments);

  if(args.length === 2) {
        return args[0] + args[1];
  } 
  else if(args.length === 1) {
    
    // currying of function
    return function(num1) {
        return args[0] + num1;
    }
  }

  // console.log(arguments);
}

console.log(getTotal(10,20));

console.log(getTotal(20,20));

console.log(getTotal(10)(120));