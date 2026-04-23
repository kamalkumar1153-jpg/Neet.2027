let currentQuestions = [];
let currentIndex = 0;

function loadSubjectData(sub) {
  db.ref("questions/" + sub).once("value", snap => {
    let data = snap.val();
    if (!data) {
        document.getElementById("question-box").innerHTML = "❌ No questions yet!";
        return;
    }
    currentQuestions = Object.values(data).sort(() => Math.random() - 0.5);
    currentIndex = 0;
    showQuestion();
  });
}



function showQuestion() {
    let q = currentQuestions[currentIndex];
    let levelEl = document.getElementById("level-indicator");
    let imgContainer = document.getElementById("image-container");

    // लेवल और उसका रंग सेट करना
    levelEl.innerText = q.level;
    levelEl.style.color = q.level === "Easy" ? "#2ecc71" : q.level === "Medium" ? "#f39c12" : "#e74c3c";

    // प्रश्न और इमेज दिखाना
    document.getElementById("q-text").innerText = q.q;
    
    if (q.img) {
        imgContainer.innerHTML = `<img src="${q.img}" class="quiz-img">`;
    } else {
        imgContainer.innerHTML = "";
    }

    // ऑप्शन्स दिखाना
    let optionsHtml = "";
    q.options.forEach((opt, i) => {
        optionsHtml += `<button class="opt-btn" onclick="checkAnswer(${i+1}, ${q.answer})">${opt}</button>`;
    });
    document.getElementById("options-list").innerHTML = optionsHtml;
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct! 🎉");
    } else {
        alert("Wrong! The correct answer was option " + correct);
    }
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        alert("Quiz Finished! Well done.");
    }
}

