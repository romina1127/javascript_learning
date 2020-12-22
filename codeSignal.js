// function checkPalindrome(inputString) {
//     let testString = inputString.split(" ");
//     let reverseString = [];
//     console.log("testString value is " + testString)
//     for (var i = inputString.length - 1; i >= 0; i--) {
//         reverseString.push(inputString[i]);
//     }
//     finalString = reverseString.join("");
//     if (finalString == inputString) {
//         console.log("inputString value is " + inputString)
//         console.log("finalString value is " + finalString + " True")
//         return true;
//     } else {
//         console.log("inputString value is " + inputString)
//         console.log("finalString value is " + finalString + " False")
//         return false;
//     }
// }

// checkPalindrome("abba");
// checkPalindrome("really");

function adjacentElementsProduct(inputArray) {
    for (i = 0; i < inputArray.length; i++) {
        let newArray = inputArray.splice(i, 1);
        console.log("The new array is " + newArray)
        let product = inputArray.map(multiply);

        function multiply(value, index, newArray) {
            innerProduct = value * inputArray[i];
            console.log("The inner product is " + innerProduct)
        }
    }
}

adjacentElementsProduct([3, 4, -1, 7, 8]) // Output should be 56