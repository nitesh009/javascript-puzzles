// X & Y - Hoisitng

var x = 10;

// hoisting is in this order function and then variables
var y = function () {
    // due to function hoisting x function will come at top
    //   function x() {
   //    } and then varible x is modified so it become local variable
    x = 100; // this will treat as a global variable
    return;
    function x() {
    }
}

y();

console.log(x);