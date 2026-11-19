function startQuiz() {
  let score = 0;

  for (const question of questions) {
    const answer = prompt(question.pytanie, '');

    if (answer !== null && answer.trim() !== '' && Number(answer) === question.odpowiedz) {
      alert('Prawidłowa odpowiedź!');
      score++;
    } else {
      alert(`Błąd. Prawidłowa odpowiedź to ${question.odpowiedz}`);
    }
  }

  const wynikElement = document.getElementById('wynik');
  wynikElement.textContent = `Wynik: ${score} / ${questions.length}`;
}



document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-quiz-btn');
  if (startButton) {
    startButton.addEventListener('click', startQuiz);
  }
});

const questions = [
 { pytanie: 'Jaka jest liczba papieżowa?', odpowiedz: 2137 },
 { pytanie: 'Ile żyć mają koty według powiedzeń?', odpowiedz: 7 },
 { pytanie: 'Ile bitów ma jeden bajt?', odpowiedz: 8 },
 { pytanie: 'Ile warstw ma model OSI?', odpowiedz: 7 },
];