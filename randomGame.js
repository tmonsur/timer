// Function to simulate a random number guessing game
function randomGame() {
    // Generate a random number between 0 and 1, rounded to 2 decimal places
    var guess = Math.random().toFixed(2);
    
    // Counter to keep track of the number of attempts
    var counter = 1; 

    // Keep generating random numbers until guess is greater than or equal to 0.75
    while (guess < 0.75) {
        // Log the current attempt number and the generated random number
        console.log("Try #" + counter + ": " + guess);
        
        // Generate a new random number for the next attempt
        guess = Math.random().toFixed(2);
        
        // Increment the attempt counter
        counter++;
    }

    // Log the final attempt number and the last generated random number
    console.log("Try #" + counter + ": " + guess + " // The random number is greater than 0.75");

    // Check the number of attempts and log the appropriate message
    if (counter < 2) {
        console.log("It took " + counter + " try to find a number greater than 0.75.");
    } else {
        console.log("It took " + counter + " tries to find a number greater than 0.75.");
    }

    // Stop the interval to prevent further executions
    clearInterval(intervalId);
}

// Set up the interval to run the randomGame function every 1000 milliseconds (1 second)
var intervalId = setInterval(randomGame, 1000);