let subject = localStorage.getItem("subject");

let questions = [];
let index = 0;
let score = 0;
let time = 180;
let timer;

// ⏳ Timer start
function startTimer() {
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = "Time: " + time;

    if (time <= 0) {
      finish();
    }
  }, 1000);
}

// 📥 Firebase se questions load
function loadQuestions() {
  db.ref("questions/" + subject).once("value", snap => {
    let data = snap.val();

    if (!data) {
      document.getElementById("question").innerText = "No Questions Found!";
      return;
    }

    questions = Object.values(data);
    loadQuestion();
    startTimer();
  });
}

// 📄 Question show
function loadQuestion() {
  let q = questions[index];
  document.getElementById("question").innerText = q.q;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<button onclick="checkAnswer(${i})">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = html;
}

// ✅ Answer check
function checkAnswer(i) {
  if (i === questions[index].answer) {
    score += 4;
  } else {
    score -= 1; // ❌ negative marking
  }
}

// ⏭ Next question
function next() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    finish();
  }
}

// 🏁 Finish quiz
function finish() {
  clearInterval(timer);
  localStorage.setItem("score", score);
  window.location = "result.html";
}

// 🚀 Start
loadQuestions();
