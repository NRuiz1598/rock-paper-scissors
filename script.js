const body  = document.querySelector('body');

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.classList.add("option");
body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.classList.add("option")
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.classList.add("option")
body.appendChild(scissors);

function getComputerChoice() {
    random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        random = "Rock"
    }else if (random === 2) {
        random = "Paper";
    } else if (random === 3) {
        random = "Scissors";
    }
    return random
}

getComputerChoice()

let humanScore = 0; 
let computerScore = 0;
let round = 0

function playRound() {

}


playRound();

function result() {
    if (humanScore > computerScore) {
        console.log('You are the winner, congratulations!')
    }else if (humanScore <  computerScore) {
        console.log('You lost try again :c') 
    }else {
        console.log('Its a Draw nice try!')
    }
}

result()

