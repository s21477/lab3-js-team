function startQuiz() {
  alert('Quiz startuje');
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-quiz-btn');
  if (startButton) {
    startButton.addEventListener('click', startQuiz);
  }
});