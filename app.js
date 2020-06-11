/* GAME FUNCTION
- Player must guess a number between a min and a max value
- Player gets a certain number of amont of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let the player choose to play again
*/

// Create Gane Values
let min = 10,
  max = 20,
  winningNum = getRandomNum(min, max),
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

// Listen for Play Again event
game.addEventListener("mousedown", playAgain);

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
    gameOver(true, `YOU WIN! You guessed ${guess}. The winning number is ${winningNum}!`);
  }
  else {
    guessesLeft -= 1;
    // game over - answer wrong and no guesses left
    if (guessesLeft === 0) {
      gameOver(false, `GAME OVER. You guessed ${guess} and have ${guessesLeft} guesses left. The winning number was ${winningNum}`);
    }
    // gane continues - answer wrong, guesses left
    else {
      setMessage(`You guessed ${guess} and it is wrong! Please guess again. You have ${guessesLeft} guesses remaining!`, "red");
      guessInput.style.borderColor = "red";
      // clear the input for next guess
      guessInput.value = '';
    }
  }
}

// Gane over behaviour for win and lose
function gameOver(won, msg) {
  let color;
  won === true ? color = "green" : color = "red";
  guessInput.style.borderColor = color;
  setMessage(msg, color);
  guessInput.disabled = true;
  // Setup play again fucntionality
  guessBtn.value = "Play Again";
  guessBtn.className += " play-again";
}

// Set the message text and color
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Play again
function playAgain(e) {
  console.log(e.target);
  // check if the target has the class of play-again then reload the window
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
}

// Clear the message
function clearMessage() {
  message.textContent = '';
}

// Generate the winning number
function getRandomNum(min, max) {
  // gerenate a random decimal 
  let x = Math.random();
  console.log(x);
  // find the amount of nummber options between min and max - need to add 1
  let y = max - min + 1;
  console.log(y);
  // multiply and add the minimum
  let z = x * y + min;
  console.log(z);
  // round down to a whole number
  let a = Math.floor(z);
  console.log(a)
  // return the random number
  return a;
}