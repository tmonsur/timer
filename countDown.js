// Function to count down from a given number to 0
function countDown(a) {
    while (a > -1) {
        if (a === 0) {
            console.log("Done!");
        } else {
            console.log(a);
        }
        a--;
    }
}

// Prompt the user for input
var userInput = prompt("Enter a number:");

// Parse the input as an integer
var numericInput = parseInt(userInput, 10);

// Set a timeout to start the countDown function after a delay of 1000 milliseconds (1 second)
setTimeout(function () {
    countDown(numericInput);
}, 1000);
