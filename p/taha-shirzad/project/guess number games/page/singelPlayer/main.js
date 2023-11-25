window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader--hidden');

  loader('.loader').addEventListener('transitionend', () => {
    document.body.removeChild(loader('.loader'));
  });
});

const divA = document.getElementById('games');
const divB = document.getElementById('winer');
const divC = document.getElementById('over');
const errorPage = document.getElementById('ErrorPage');
const scoreDisplay = document.getElementById('score');
const hintDisplay = document.getElementById('hint');
const winMusic = new Audio('./music/winnerMusic.mp3');
const loserMusic = new Audio('./music/loserMusic.mp3');

divB.style.display = 'none';
divC.style.display = 'none';

const fertNumbr = Math.floor(Math.random() * 100) + 1;
console.log(fertNumbr);
let score = 10;

function inputNumber() {
  const guessInput = document.getElementById('guessNumber');
  const errorPage = document.getElementById('ErrorPage');
  const inputValue = guessInput.value;

  if (inputValue.length > 3 || inputValue > 100 || inputValue < 1) {
    errorPage.textContent = 'Please enter a number between 1 and 100.';
    guessInput.value = '';
  } else {
    errorPage.textContent = '';
  }
}

function enterNumber() {
  const guessInput = document.getElementById('guessNumber');
  const guessValue = parseInt(guessInput.value);

  if (guessValue === fertNumbr) {
    divA.style.display = 'none';
    divB.style.display = 'flex';
    winMusic.play();
  } else {
    score--;
    scoreDisplay.textContent = `Score: ${score}`;

    if (score === 0) {
      divA.style.display = 'none';
      divC.style.display = 'flex';
      loserMusic.play();
    } else {
      const difference = Math.abs(fertNumbr - guessValue);
      if (difference > 20) {
        hintDisplay.textContent = 'More than 20 digits away!';
      } else if (difference > 10) {
        hintDisplay.textContent = 'More than 10 digits away!';
      } else if (difference > 5) {
        hintDisplay.textContent = 'You are very close and you are more than 5 digits away!';
      } else {
        hintDisplay.textContent = 'You are very close and you are less than 5 digits away!';
      }
    }
  }
}

function backToPage() {
  window.open('../../index.html', '_self');
}
