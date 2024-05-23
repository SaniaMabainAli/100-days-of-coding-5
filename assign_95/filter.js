// Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test
//  implemented by the provided function.
var numbers = [12, 10, 109, 20, 300, 456, 98];
console.log('All numbers: ', numbers);
var filterArr = numbers.filter(function (number) { return number > 100; });
console.log('filtered numbers: ', filterArr);
