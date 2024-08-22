let score = 0;
let countdown;
let timeLeft;
let highScore = localStorage.getItem('highScore') || 0;

// Select and store references to DOM elements that will be manipulated
const fly = document.getElementById('fly');
const scoreBoard = document.getElementById('score-board');
const highScoreBoard = document.createElement('div');
const gameContainer = document.getElementById('game-container');
const timer = document.getElementById('timer');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const finalScore = document.getElementById('final-score');
const timeSelect = document.getElementById('time-select');

// Display the high score on the screen
highScoreBoard.textContent = `High Score: ${highScore}`;
highScoreBoard.id = 'high-score-board';
startScreen.appendChild(highScoreBoard);

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

// Attach the swatFly function to both click and touchstart events on the fly element
fly.addEventListener('click', swatFly);
fly.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the default touch behavior
    swatFly();
});

// Function to start the game
function startGame() {
    score = 0; // Reset the score to 0 at the start of the game
    scoreBoard.textContent = `Score: ${score}`; // Reset the scoreboard
    highScoreBoard.textContent = `High Score: ${highScore}`; // Display current high score
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

    // Check if the current score is higher than the stored high score
    if (score > highScore) {
        highScore = score; // Update high score
        localStorage.setItem('highScore', highScore); // Save new high score in localStorage
        highScoreBoard.textContent = `High Score: ${highScore}`; // Update high score display
        finalScore.textContent += ` - New High Score!`; // Inform the player of their achievement
    }
}

// Attach the startGame function to both click and touchstart events on the start button
startButton.addEventListener('click', startGame);
startButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startGame();
});

// Attach the restartGame function to both click and touchstart events on the restart button
restartButton.addEventListener('click', () => {
    startScreen.style.display = 'flex';
    endScreen.style.display = 'none';
    gameContainer.style.display = 'none';
});

restartButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startScreen.style.display = 'flex';
    endScreen.style.display = 'none';
    gameContainer.style.display = 'none';
});

    // Navigation Buttons
    const homeButton = document.getElementById('home-button');
    const gamesButton = document.getElementById('games-button');
    const infoButton = document.getElementById('info-button');
    const infoPopup = document.getElementById('info-popup');
    const closePopup = document.getElementById('close-popup');

    // Navigation Button Event Listeners
    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace with actual home page link
    });

    gamesButton.addEventListener('click', () => {
        window.location.href = 'games.html'; // Replace with actual games page link
    });

    // Info Button Event Listeners
    infoButton.addEventListener('click', () => {
        infoPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        infoPopup.style.display = 'none';
    });

    // Close popup when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === infoPopup) {
            infoPopup.style.display = 'none';
        }
    });
