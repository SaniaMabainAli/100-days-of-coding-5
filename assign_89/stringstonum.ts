//Converting strings to numbers: Create a function that takes a string representing a number
//  (like "123") and converts it into a an actual number type.

function strTOnum (str : string) : number {
    return parseFloat(str)     // parseInt() or parseFloat() will convert string to numbers. 
    //return Number(str)
}

console.log(strTOnum("4.657"))
console.log(strTOnum("34"))
