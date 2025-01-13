let score = 0;
const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const title = document.querySelector('h1');

const updateTitle = () => {
  if (score >= 5000) {
    title.textContent = 'Mistrz Klikania! 🎉';
  } else if (score >= 500) {
    title.textContent = 'Ekspert Klikania! 💪';
  } else if (score >= 100) {
    title.textContent = 'Nowicjusz Klikania! 🌟';
  } else {
    title.textContent = 'Cookie Clicker';
  }
};

cookie.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Kliknięcia: ${score}`;
  updateTitle();
});
