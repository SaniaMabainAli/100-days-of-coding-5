// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element 
// in the array (from left to right) to reduce it to a single value.
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var totalOfNum = numbers.reduce(function (number, sum) { return number + sum; }, 0);
    return totalOfNum;
}
console.log(sum(2, 5, 4, 3, 7, 8));
