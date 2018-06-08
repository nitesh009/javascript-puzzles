// Comparing Two Objects

var user1 = {
  age:25,
  name: "Nitesh"
}


var user2 = {
  age:25,
  name: "Nitesh"
}

// as javascript supports call by reference,
console.log(user1 == user2);

console.log(user1 === user2);

// in order to work, please use stringified version

console.log(JSON.stringify(user1) === JSON.stringify(user2));

