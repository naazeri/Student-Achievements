let targetNumber;
let attempts = 0;
let numberGuessed = false;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("desired number:", targetNumber);
    alert("Player 1, the game has begun! Player 2, be prepared to guess.");
    attempts = 0;
    numberGuessed = false;
    document.getElementById("hint").innerText = "";
}

function makeGuess() {
    if (numberGuessed) {
        alert("The number has already been guessed. Start a new game.");
        return;
    }

    const guessedNumber = parseInt(document.getElementById("guessNumber").value);
    const inputNumber = parseInt(document.getElementById("inputNumber").value);

    if (attempts < 10) {
        attempts++;

        if (guessedNumber === inputNumber) {
            document.getElementById("hint").innerText = "congratulations! You guessed the correct number!";
            numberGuessed = true;
        } else {
            const difference = Math.abs(inputNumber - guessedNumber);
            let hint = "";

            if (difference <= 10) {
                hint = "You are so close!";
            } else {
                hint = "You are too far away. try again.";
            }

            document.getElementById("hint").innerText = hint;
        }
    } else {
        alert("The number of guesses has reached the maximum. Integer" + inputNumber + " have been.");
        numberGuessed = true;
    }
}

function revealNumber() {
    if (!numberGuessed) {
        alert("The number cannot be displayed until it has been guessed.");
    } else {
        alert("Integer" + targetNumber + " have been.");
    }
}
