const body  = document.querySelector('body');

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.classList.add("option");
rock.value = "Rock"
body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.classList.add("option")
paper.value = "Paper"
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.classList.add("option");
scissors.value = "Scissors";
body.appendChild(scissors);

const container = document.createElement('div');
const ScoreCont = document.createElement('div');
const resultCont = document.createElement('div');

container.appendChild(ScoreCont);
container.appendChild(resultCont);
body.appendChild(container);

const choice = document.querySelectorAll('.option');

choice.forEach(choices => {
    choices.addEventListener('click', () =>{
        if (!gameOver) playRound(choices.value);
    })
})

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
let gameOver = false;

function playRound(userSelection) {
    if(gameOver) {
        return;
    }

    const computerSelection = getComputerChoice();

    if (userSelection === "Rock" && computerSelection === "Scissors") {
        humanScore++;
    }else if (userSelection === "Rock" && computerSelection === "Papper") {
        computerScore++;
    }

    if (userSelection === "Paper" && computerSelection === "Rock") {
        humanScore++;
    }else if (userSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
    }

    if (userSelection === "Scissors" && computerSelection === "Paper") {
        humanScore++;
    }

    if (userSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++
    }

    round++;

    ScoreCont.textContent = `Round ${round}: You: ${humanScore} Cpu: ${computerScore}`;

    if (round === 5) {
        gameOver = true;
        result()
    }

}



function result() {
    if (humanScore > computerScore) {
        console.log('You are the winner, congratulations!')
    }else if (humanScore <  computerScore) {
        console.log('You lost try again :c') 
    }else {
        console.log('Its a Draw nice try!')
    }
}



