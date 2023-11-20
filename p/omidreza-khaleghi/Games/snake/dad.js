const gameContainer = document.querySelector('.game-container');
const snake = document.querySelector('.snake');
const food = document.querySelector('.food');

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;

function updateFoodPosition() {
    foodX = Math.floor(Math.random() * 15) * 20;
    foodY = Math.floor(Math.random() * 15) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

updateFoodPosition();

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && snakeX < 280) {
        snakeX += 20;
    } else if (e.key === 'ArrowLeft' && snakeX > 0) {
        snakeX -= 20;
    } else if (e.key === 'ArrowDown' && snakeY < 280) {
        snakeY += 20;
    } else if (e.key === 'ArrowUp' && snakeY > 0) {
        snakeY -= 20;
    }

    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';

    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
    }
});
