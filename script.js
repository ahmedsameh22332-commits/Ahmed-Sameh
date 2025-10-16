
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');
    attempts++;

    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number!";
    } else if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Number must be between 1 and 100.";
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it in ${attempts} tries.`;
        document.getElementById('reset-btn').style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('reset-btn').style.display = 'none';
}
