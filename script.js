const secretNumber = Math.floor(Math.random() * 10) + 1;
let numberOfAttempts = 1;
let selectedNumber = document.getElementsByClassName("numBox");
let secretNumberDisplay = document.getElementById("secretNumberDisplay");
let results = document.getElementById("results");
let playArea = document.getElementById("playArea");
let playAgainBtn = document.getElementById("playAgainContainer");
let instructions = document.getElementById("instructions");
let title = document.getElementById("title");

// event listeners

for (var i = 0; i < selectedNumber.length; i++) {
    selectedNumber[i].addEventListener('click', (e) => {
        console.log(e.target);
        attempt(e.target.innerText, e.target)
    });
}

// functions

function attempt(chosenNumber, element) {
    if (chosenNumber == secretNumber) {
        winner();
    } else {
        element.style.backgroundColor = "red";
        if(numberOfAttempts < 4){
            chooseAgain(chosenNumber);
        } else {
            loser();
        }
    }
}

function chooseAgain(chosenNumber){
    if (chosenNumber < secretNumber) {
        results.innerText = "Nope, choose a bigger number";
    } else if (chosenNumber > secretNumber) {
        results.innerText = "Nope, choose a smaller number";
    }
    numberOfAttempts += 1;
}

function loser(){
    instructions.style.display = "none";
    playAgainBtn.style.display = "flex";
    title.innerText = "Ahhh, didn't guess in time :(";
    title.style.color = "red";
    results.style.display = "none";
    secretNumberDisplay.innerText = "The secret number was, " + secretNumber;
}

function winner(){
    playArea.style.display = "none";
    instructions.style.display = "none";
    playAgainBtn.style.display = "flex";
    title.innerText = "You guessed it!";
    results.innerText = "We have a winner!";
    results.style.color = "green";
    secretNumberDisplay.innerText = secretNumber;
}

function playAgain() {
    location.reload();
}