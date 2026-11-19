function startQuiz() {
    let score = 0;
    const question = questions[0];
    const answer = prompt(question.pytanie, '');
    if (Number(answer) === question.odpowiedz) {
       alert('Prawidłowa odpowiedź!');
        score++;
    } else {
         alert(`Błąd. Prawidłowa odpowiedź to ${question.odpowiedz}`);
    }

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
 { pytanie: 'Ile księżyców ma Wenus?', odpowiedz: 0 }
];