/* GAME FUNCTION
- Player must guess a number between a min and a max value
- Player gets a certain number of amont of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let the player choose to play again
*/

// Create Gane Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// Get UI Elements
const game = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const message = document.querySelector(".message");

// Assign min and max numbers in UI
console.log(minNum);
console.log(maxNum);
minNum.textContent = min;
maxNum.textContent = max;

// Listen for the guess
guessBtn.addEventListener("click", checkGuess);

// Check the 
function checkGuess(e) {
  // the value is a string - must parse to an Int
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate - number in right range and is a number
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`ERROR: Please enter a number between ${min} and ${max}`, "red");
  }
  else if (guess === winningNum) {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`You guessed ${guess} and this is right! The winning number is ${winningNum}`, "Green");
  }
  else {
    setMessage(`You guessed ${guess} and it is wrong! Please guess again. You have ${guessesLeft} guesses remaining!`, "Blue");
  }
}

// Set the message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Clear the message
function clearMessage() {
  message.textContent = '';
}
// generateRandomNum(min, max);
function generateRandomNum(min, max) {
  // This will generate a ramdon number between the min and max

  let lowest = min


}