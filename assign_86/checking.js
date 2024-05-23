//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present 
// in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text,
//  returning a boolean (true or false).
function include(sentence) {
    var position = sentence.indexOf("javascript") != -1;
    return position;
}
console.log(include("I am learning javascript")); //true
console.log(include("I am learning typescript")); //false
