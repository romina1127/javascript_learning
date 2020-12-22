/* do numbers 1 - 100.  For every number divisble by 3 return 'fizz'.  For every
number divisible by 5 return 'buzz'.  For numbers both divisble by 3 and 5 return 'fizzbuzz' */

function fizzBuzz() {
    for(x = 0; x < 101; x++) {
        let remainderForThree = x % 3;
        let remainderForFive = x % 5;
    
        if (remainderForThree == 0 && remainderForFive == 0) {  // if 
            console.log('fizzbuzz - ' + x)
        } else if (remainderForThree == 0) {
            console.log('fizz - ' + x)
        } else if (remainderForFive == 0) {
            console.log('buzz - ' + x) 
        } else {
            console.log('Not divisble by 3 nor 5 - ' + x)
        }
    }
}

console.log(fizzBuzz())

/* for(x = 1; x < 101; x++) {
    let remainderForThree = x % 3;
    let remainderForFive = x % 5;

    if (remainderForThree == 0 && remainderForFive == 0) {
        console.log('fizzbuzz')
    } else if (remainderForThree == 0) {
        console.log('fizz')
    } else if (remainderForFive == 0) {
        console.log('buzz')
    } else {
        console.log('Not divisble by 3 nor 5')
    }
} */

let age = document.getElementsByName("inputValue").value;
if (age < 21) {
    document.querySelector("p").innerHTML = "You are too young"
} else {
    document.querySelector("p").innerHTML - "Go ahead"
}