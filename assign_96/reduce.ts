// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element 
// in the array (from left to right) to reduce it to a single value.

function sum (...numbers : number[]) : number {
   let totalOfNum = numbers.reduce((number, sum) => number + sum, 0)
   return totalOfNum
}

console.log(sum(2,5,4,3,7,8))

