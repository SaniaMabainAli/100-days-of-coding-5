// Find the index of Banana in array of fruits and replace in with Mango.
var fruits = ["Apple", "Strawberry", "Banana", "Grapes", "Cherry"];
console.log(fruits);
function findReplace(fruits) {
    var index = fruits.indexOf("Banana");
    if (index != -1) {
        fruits[index] = "Mango";
    }
}
findReplace(fruits);
console.log(fruits);
