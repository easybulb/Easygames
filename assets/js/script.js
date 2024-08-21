let score = 0;
let countdown;
let timeLeft;

const fly = document.getElementById('fly');
const scoreBoard = document.getElementById('score-board');
const gameContainer = document.getElementById('game-container');
const timer = document.getElementById('timer');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const finalScore = document.getElementById('final-score');
const timeSelect = document.getElementById('time-select');

function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameContainer.clientWidth - fly.clientWidth));
    const y = Math.floor(Math.random() * (gameContainer.clientHeight - fly.clientHeight));
    return { x, y };
}

function moveFly() {
    const { x, y } = getRandomPosition();
    fly.style.left = `${x}px`;
    fly.style.top = `${y}px`;
}

function swatFly() {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    moveFly();
}

fly.addEventListener('click', swatFly);

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

function endGame() {
    clearInterval(countdown);
    gameContainer.style.display = 'none';
    endScreen.style.display = 'flex';
    finalScore.textContent = `Your final score is ${score}`;
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => {
    startScreen.style.display = 'flex';
    endScreen.style.display = 'none';
    gameContainer.style.display = 'none';
});