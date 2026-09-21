const questions = [
  {
    question: "Apa lambang Sila Pertama dalam Pancasila?",
    options: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng"],
    answer: 0
  },
  {
    question: "Ibu kota negara Indonesia saat ini adalah...",
    options: ["Bandung", "Surabaya", "Jakarta", "Nusantara"],
    answer: 2
  },
  {
    question: "Planet terdekat dari Matahari adalah...",
    options: ["Venus", "Merkurius", "Mars", "Bumi"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQ.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index, btn);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedIndex, selectedBtn) {
  const currentQ = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQ.answer) {
    selectedBtn.classList.add("correct");
    score += 10;
  } else {
    selectedBtn.classList.add("wrong");
    buttons[currentQ.answer].classList.add("correct");
  }

  document.getElementById("score-box").innerText = `Skor: ${score}`;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `<h2>Kuis Selesai!</h2><p>Skor Akhir Anda: ${score}</p>`;
    document.getElementById("next-btn").style.display = "none";
  }
}

// Jalankan game pertama kali
loadQuestion();
