// --- 1. DATA & CONFIG ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();
// Yahan apne 100 sawal wali list (allQuestions) rakhein
let filteredQuestions = allQuestions; 
let currentIndex = 0;
let score = 0;
let wrongQuestions = [];
let timeLeft = 30;
let timerInterval;

// --- 2. TIMER SYSTEM ---
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const q = filteredQuestions[currentIndex];
    wrongQuestions.push({ q: q.question, correct: q.answer, user: "Time Out" });
    moveToNext();
}

// --- 3. LOGIC ---
function displayQuestion() {
    const qText = document.getElementById('questionText');
    const optCont = document.getElementById('optionsContainer');
    const qCount = document.getElementById('q-counter');

    if (currentIndex >= filteredQuestions.length) {
        showResults();
        return;
    }

    const q = filteredQuestions[currentIndex];
    qText.innerText = q.question;
    qCount.innerText = `Q: ${currentIndex + 1} / ${filteredQuestions.length}`;
    document.getElementById('subject-label').innerText = q.subject;

    optCont.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(opt, q.answer, q.question);
        optCont.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(selected, correct, questionText) {
    clearInterval(timerInterval);
    if (selected === correct) {
        score++;
    } else {
        wrongQuestions.push({ q: questionText, correct: correct, user: selected });
    }
    document.getElementById('score-card').innerText = `Score: ${score}`;
    moveToNext();
}

function moveToNext() {
    currentIndex++;
    if (currentIndex < filteredQuestions.length) {
        setTimeout(displayQuestion, 500);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-box').style.display = "none";
    document.getElementById('nav-btns').style.display = "none";
    document.getElementById('timer-box').style.display = "none";
    document.getElementById('review-section').style.display = "block";
    
    const listCont = document.getElementById('wrong-questions-list');
    listCont.innerHTML = "";
    wrongQuestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `<b>Q:</b> ${item.q}<br><span style="color:red">Aapka: ${item.user}</span> | <span style="color:green">Sahi: ${item.correct}</span>`;
        listCont.appendChild(div);
    });
}

// Search & Filter Logic
window.searchQuestions = function() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    filteredQuestions = allQuestions.filter(q => q.question.toLowerCase().includes(input));
    currentIndex = 0; displayQuestion();
};

window.filterQuestions = function(subject, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    filteredQuestions = (subject === 'All') ? allQuestions : allQuestions.filter(q => q.subject === subject);
    currentIndex = 0; displayQuestion();
};

displayQuestion();




