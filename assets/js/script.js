let score = 0;
let countdown;
let timeLeft;

// Access game html elements
let fly = document.getElementById('fly');
let scoreBoard = document.getElementById('score-board')
let gameContainer = document.getElementById('game-container')
const timer = document.getElementById('timer');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const finalScore = document.getElementById('final-score');
const timeSelect = document.getElementById('time-select');

// calculates a random position for fly.
function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameContainer.clientWidth - fly.clientWidth));
    const y = Math.floor(Math.random() * (gameContainer.clientHeight - fly.clientHeight));
    return { x, y };
}

// Position fly at random location
function moveFly() {
    const { x, y } = getRandomPosition();
    fly.style.left = `${x}px`;
    fly.style.top = `${y}px`;
}

// Start game by set score to 0, start timer, and displaying the game container.
function startGame() {
    score = 0;
    scoreBoard.textContent = `Score: ${score}`;
    timeLeft = parseInt(timeSelect.value);
    timer.textContent = `Time: ${timeLeft}s`;

    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    endScreen.style.display = 'none';

    moveFly();
    countdown = setInterval(() => {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

fly.addEventListener('click', swatFly);

// Stops the game when the timer runs out and displays the end screen.
function endGame() {
    clearInterval(countdown);
    gameContainer.style.display = 'none';
    endScreen.style.display = 'flex';
    finalScore.textContent = `Your final score is ${score}`;
}