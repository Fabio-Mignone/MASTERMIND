let secretCode = [];
let userAttempts = 0;
const maxAttempts = 10;
let correctDigits = 0;
let correctPositions = 0;

$(document).ready(function () {
    generateSecretCode();
    document.getElementById("numtent").innerHTML = "Current attempts: " + userAttempts;
});

function generateSecretCode() {
    secretCode = [];
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 10);
        secretCode.push(random);
    }
}

function checkUserAttempt() {
    let userGuessString = document.getElementById("userValue").value;
    let userGuess = userGuessString.split('').map(Number);

    if (isNaN(userGuessString) || userGuessString.length !== 4 || containsDuplicates(userGuess)) {
        alert("Please enter a valid 4-digit number with non-repeating digits.");
        return;
    }

    userAttempts++;
    document.getElementById("numtent").innerHTML = "Current attempts: " + userAttempts;

    checkNumber(userGuess);

    let tentativiDiv = document.getElementById("tentativi");
    let p = document.createElement('p');
    p.innerHTML = 'Your guess: ' + userGuess.join('') + ' Correct digits: ' + correctDigits + ' Correct positions: ' + correctPositions;
    tentativiDiv.appendChild(p);

    if (correctPositions === 4) {
        document.getElementById("status").innerHTML = "Congratulations! You've cracked the code!";
        document.getElementById("ver").disabled = true;
    } else if (userAttempts === maxAttempts) {
        document.getElementById("status").innerHTML = "Game Over. The secret code was: " + secretCode.join('');
        document.getElementById("ver").disabled = true;
    }

    document.getElementById("userValue").value = "";
}

function containsDuplicates(array) {
    return array.length !== new Set(array).size;
}

function checkNumber(userGuess) {
    correctDigits = 0;
    correctPositions = 0;

    for (let i = 0; i < secretCode.length; i++) {
        if (userGuess.includes(secretCode[i])) {
            correctDigits++;
            if (userGuess[i] === secretCode[i]) {
                correctPositions++;
            }
        }
    }
}

function resetGame() {
    const confirmRestart = window.confirm("Are you sure you want to restart the game? Your progress will be lost.");

    if (confirmRestart) {
        generateSecretCode();
        userAttempts = 0;
        correctDigits = 0;
        correctPositions = 0;
        document.getElementById("tentativi").innerHTML = "";
        document.getElementById("numtent").innerHTML = "Current attempts: " + userAttempts;
        document.getElementById("status").innerHTML = "";
        document.getElementById("ver").disabled = false;
        document.getElementById("userValue").value = "";
    }
}
