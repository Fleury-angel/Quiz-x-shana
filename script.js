const questions = [
  {
    question: "Quel est le plat préféré de Shana ?",
    answers: ["Pizza", "Sushi", "Tacos", "Salade"],
    correct: 1
  },
  {
    question: "Quelle est la couleur préférée de shana ?",
    answers: ["Bleu", "Rouge", "Vert", "Rose"],
    correct: 4
  },
  {
    question: "Quel animal shana préfère ?",
    answers: ["Chat", "Chien", "Lapin", "Oiseau"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";
const scores = [];

function startQuiz() {
  playerName = document.getElementById("playerName").value.trim();
  if (!playerName) {
    alert("Veuillez entrer votre nom");
    return;
  }
  document.querySelector(".username").textContent = "Lala";
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("scoreboard").classList.add("hidden");
  document.getElementById("playerName").classList.add("hidden");
  document.querySelector("button").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  scores.push({ name: playerName, points: score });
  scores.sort((a, b) => b.points - a.points);
  updateScoreboard();
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("scoreboard").classList.remove("hidden");
  // Reset for another round
  currentQuestion = 0;
  score = 0;
}

function updateScoreboard() {
  const table = document.getElementById("scoreTable");
  table.innerHTML = "";
  scores.forEach(s => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${s.name}</td><td>${s.points}</td>`;
    table.appendChild(row);
  });
}

