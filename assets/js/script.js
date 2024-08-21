let score = 0;
let countdown;
let timeLeft;

// Select and store references to DOM elements that will be manipulated
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

// Function to calculate a random position within the game container for the fly
function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameContainer.clientWidth - fly.clientWidth));
    const y = Math.floor(Math.random() * (gameContainer.clientHeight - fly.clientHeight));
    return { x, y };
}

// Function to move the fly to a new random position
function moveFly() {
    const { x, y } = getRandomPosition();
    fly.style.left = `${x}px`;
    fly.style.top = `${y}px`;
}

// Function to handle the fly being swatted by the player
function swatFly() {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    moveFly();
}

// Attach the swatFly function to the click event on the fly element
fly.addEventListener('click', swatFly);

// Function to start the game
function startGame() {
    score = 0; // Reset the score to 0 at the start of the game
    scoreBoard.textContent = `Score: ${score}`; // Reset the scoreboard
    timeLeft = parseInt(timeSelect.value);
    timer.textContent = `Time: ${timeLeft}s`;

    // Hide the start screen and show the game container
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    endScreen.style.display = 'none';

    moveFly();

    // Start the countdown timer, decreasing the timeLeft by 1 every second
    countdown = setInterval(() => {
        timeLeft--; // Decrease the remaining time by 1 second
        timer.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) { // Check if the time has run out
            endGame(); // End the game if the time is up
        }
    }, 1000); // Run the interval every 1000ms (1 second)
}

// Function to end the game
function endGame() {
    clearInterval(countdown);
    gameContainer.style.display = 'none';
    endScreen.style.display = 'flex';
    finalScore.textContent = `Your final score is ${score}`;
}

startButton.addEventListener('click', startGame);

// Attach the startGame function to the click event on the start button
restartButton.addEventListener('click', () => {
    startScreen.style.display = 'flex';
    endScreen.style.display = 'none';
    gameContainer.style.display = 'none';
});