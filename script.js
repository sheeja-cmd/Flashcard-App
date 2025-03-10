let flashcards = [];
let current = 0;
let score = 0;

function addFlashcard() {
  let q = document.getElementById("question").value;
  let a = document.getElementById("answer").value;
  flashcards.push({ question: q, answer: a });
  alert("Flashcard added!");
}

function startQuiz() {
  if (flashcards.length === 0) {
    alert("Please add flashcards first!");
    return;
  }
  current = 0;
  score = 0;
  document.getElementById("quizArea").style.display = "block";
  showQuestion();
}

function showQuestion() {
  document.getElementById("quizQuestion").textContent = flashcards[current].question;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  let userAns = document.getElementById("userAnswer").value.trim().toLowerCase();
  let correctAns = flashcards[current].answer.trim().toLowerCase();

  if (userAns === correctAns) {
    score++;
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    document.getElementById("feedback").textContent = "Wrong! Answer: " + flashcards[current].answer;
  }

  current++;
  if (current < flashcards.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(() => {
      document.getElementById("quizArea").style.display = "none";
      document.getElementById("score").textContent = "Quiz Over! Your Score: " + score;
    }, 1000);
  }
}