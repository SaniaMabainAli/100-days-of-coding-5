//Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
//Explain & TIP: .substring() can be used to get a specific part of a string, 
// by specifying the start and end positions.
function subString(sentence) {
    return sentence.substring(0, 13);
}
console.log(subString("I am learning javascript by javascript masters."));
