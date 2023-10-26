const ball = document.getElementById("ball");
const player = document.getElementById("player");

let ballX = 190;
let ballY = 90;
let ballSpeedX = 5;
let ballSpeedY = 5;
let playerY = 70;

function movePlayer(e) {
    playerY = e.clientY - player.offsetHeight / 2;
}

function gameLoop() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX <= 0 || ballX >= 400) {
        ballSpeedX *= -1;
    }

    if (ballY <= 0 || ballY >= 200) {
        ballSpeedY *= -1;
    }

    if (
        (ballX <= 10 && ballY >= playerY && ballY <= playerY + 60) ||
        (ballX >= 380)
    ) {
        ballSpeedX *= -1;
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
    player.style.top = playerY + "px";

    requestAnimationFrame(gameLoop);
}

document.addEventListener("mousemove", movePlayer);
gameLoop();
