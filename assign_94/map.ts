// Use the .map method to create a new array that contains the length of each word from an array of 
// words. Use .map() method.

// The .map() method transforms each item in an array according to a specific function and returns
//the new array with the transformed items.

//printing strings:
let words : string [] = ["Sania", "Sara", "Alishba", "Zoya", "AliceJoy"]
console.log(words)
// printing length of each string:
let lengthofwords = words.map(word => word.length)
console.log(lengthofwords)