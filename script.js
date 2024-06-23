let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const resultMessage_p = document.getElementById('result-message');
const resetScoreButton = document.getElementById('reset-score');

userScore_span.textContent = userScore;
computerScore_span.textContent = computerScore;

const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choices button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        determineWinner(userChoice, computerChoice);
    });
});

resetScoreButton.addEventListener('click', resetScores);

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultMessage_p.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        resultMessage_p.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage_p.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
    updateScores();
}

function updateScores() {
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
    updateScores();
    resultMessage_p.textContent = "Scores have been reset!";
}

// Initial update of total moves
updateScores();
