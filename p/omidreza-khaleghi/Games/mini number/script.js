const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

let score = 0;

gameContainer.addEventListener("click", handleItemClick);

function createRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function handleItemClick(event) {
    if (event.target.classList.contains("item")) {
        const randomNumber = createRandomNumber();
        event.target.textContent = randomNumber;
        score += randomNumber;
        scoreDisplay.textContent = `امتیاز: ${score}`;
        event.target.style.backgroundColor = "#27ae60";
        setTimeout(() => {
            event.target.textContent = "";
            event.target.style.backgroundColor = "#3498db";
        }, 1000);
    }
}

function createItems() {
    for (let i = 0; i < 9; i++) {
        const item = document.createElement("div");
        item.className = "item";
        gameContainer.appendChild(item);
    }
}

createItems();
