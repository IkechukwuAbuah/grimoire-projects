const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game settings...
// Paddles...
// Draw functions...

// Handle keyboard input for user paddle
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w': userPaddle.y -= 20; break;
        case 's': userPaddle.y += 20; break;
    }
});

// Update ball position and handle collisions...
function updateBall() { /* ... */ }
function collision(b, p) { /* ... */ }

// AI Logic
function aiMovement() { /* ... */ }

// Function to predict ball's future position
function predictBallPosition() { /* ... */ }

// Improved AI Movement
function advancedAiMovement() { /* ... */ }

// Existing variables and functions...

// Display Score
function drawScore(x, y, score) {
    ctx.fillStyle = '#fff';
    ctx.font = '35px Arial';
    ctx.fillText(score, x, y);
}

// Reset Ball
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 7;
}

// Update Ball Position
function updateBall() {
    // Existing collision logic...

    // Score Update
    if(ball.x - ball.radius < 0) {
        aiPaddle.score++;
        resetBall();
    } else if(ball.x + ball.radius > canvas.width) {
        userPaddle.score++;
        resetBall();
    }
}

// Existing variables and functions...

const winningScore = 5; // Set the winning score
let gameOver = false;

// Check for Winner
function checkForWinner() {
    if(userPaddle.score >= winningScore || aiPaddle.score >= winningScore) {
        gameOver = true;
        // Display winning message
        let winner = userPaddle.score >= winningScore ? 'Player' : 'AI';
        ctx.fillStyle = '#fff';
        ctx.font = '40px Arial';
        ctx.fillText(winner + ' Wins!', canvas.width / 4, canvas.height / 2);

        // Restart option
        ctx.font = '20px Arial';
        ctx.fillText('Press R to Restart', canvas.width / 4, canvas.height / 2 + 30);
    }
}

// Restart Game
function restartGame() {
    userPaddle.score = 0;
    aiPaddle.score = 0;
    gameOver = false;
    resetBall();
}

// Event listener for restart
document.addEventListener('keydown', (event) => {
    if(event.key === 'r' && gameOver) {
        restartGame();
    }
});

// Game Loop
// Game Loop
function gameLoop() {
    // Existing drawing and update logic...
    // Draw Scores
    drawScore(canvas.width / 4, canvas.height / 6, userPaddle.score);
    drawScore(3 * canvas.width / 4, canvas.height / 6, aiPaddle.score);

    if(!gameOver) {
        updateBall();
        aiMovement();
        advancedAiMovement();
    } else {
        checkForWinner();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
