// Array indexOf

// in javascript both array n object points to diffeerent references

myArray = [5];

console.log([1,2,3,4].indexOf(4));

console.log([{name:'nitesh'},{name:'kumar'}].indexOf({name:'kumar'}));

console.log('hello world'.indexOf('o'));

console.log([[1],[2],[3],[4]].indexOf([2]));


console.log([[1],[2],[3],[4],myArray].indexOf(myArray));