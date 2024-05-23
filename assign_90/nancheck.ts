//Checking if a value is NaN: Demostrate how to check if a variable's value is NaN (not a number)
//and return a boolean result.
// isNaN() helps you figure out if something that's suppose to be a number didn't
// turn out to be a number.

function checkIsValueNaN (value : any) : boolean{
    return isNaN(value)
}

console.log(checkIsValueNaN(3.456))
console.log(checkIsValueNaN("Typescript"))
