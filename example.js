// var price = 5;
// let price = 7;
var name = "Romina";
var ex = 4*60;
const constExample = 500;  // const variable example
var exVariable = ex + constExample;
var exAssignment = 5;
exAssignment += 5;  // += operator example on how to change/manipulate variables

let goodExample = 50;  // Examples on how to label variables properly.  you can start with letters
let $dollarExample = 40;  // You can start with $
let _underscoreExample = 2;  // You can start with _
let number5757example = 100;  // Numbers can be in variable names, but you cannot start with them

var carPrice = 2000;  
var tirePrice = 500;
var detailPrice = 700;
var totalPackagePrice = carPrice + tirePrice + detailPrice - 100;

var array = [5, 6, 7, 8, "Romina", true];  // array example
console.log(array[4] + " array example")

var object = {prop: 4, prop2: 5, prop: 76};

var isGrassGreen = true;  // Boolean example

{
    let name = "Steve"  // Example for how let works compared to var
}

function letExample() {
    let name = "Steve";
    return name;
}

console.log("example of goodExample times $dollarExample " + goodExample*$dollarExample)
console.log("example of number5757example plus $dollarExample " + number5757example+$dollarExample)
console.log("example of goodExample divided by _underscoreExample " + goodExample/_underscoreExample)
console.log("example of 50 reminder from being divided by 40 " + goodExample%$dollarExample)

// document.getElementById("demo").innerHTML = name + " is my name.";
// document.getElementById("demo-second").innerHTML = constExample + " is a constant variable";