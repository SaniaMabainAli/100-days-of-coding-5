// Rounding to the nearest integer: Write a function that takes a decimal number as input and returns
// the number rounded to the nearest integer.
//Math.round() is function perfect for rounding decimals.
function roundoff(deci_num) {
    var roundedNum = Math.round(deci_num);
    return roundedNum;
}
console.log(roundoff(34.859448));
console.log(roundoff(34.123421));
