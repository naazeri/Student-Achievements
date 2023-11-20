const ball = document.querySelector('.ball');
const goalkeeper = document.querySelector('.goalkeeper');
const shootButton = document.getElementById('shoot-button');

shootButton.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * 200) - 100; // Random horizontal direction
    const randomY = Math.floor(Math.random() * 50); // Random vertical direction

    // Animate the ball to simulate a shot
    ball.style.transform = `translateX(${randomX}px) translateY(-${randomY}px)`;
    ball.style.transition = 'transform 0.5s';

    // After a delay, check if the goalkeeper saves the penalty
    setTimeout(() => {
        const ballPosition = ball.getBoundingClientRect();
        const goalkeeperPosition = goalkeeper.getBoundingClientRect();

        if (
            ballPosition.left + ballPosition.width >= goalkeeperPosition.left &&
            ballPosition.left <= goalkeeperPosition.left + goalkeeperPosition.width
        ) {
            alert('گل نشد! دروازه‌بان جلوی ضربه را نجات داد.');
        } else {
            alert('گل زدید! تبریک!');
        }

        // Reset the ball position
        ball.style.transform = 'translateX(-50%) translateY(-10px)';
        ball.style.transition = 'none';
    }, 500);
});
