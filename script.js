import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- 1. FIREBASE CONFIG (Admin Panel wala hi use karein) ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// --- 2. VARIABLES ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();
let allQuestions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;

// --- 3. COUNTDOWN TIMER ---
function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${days} Din Baaki`;
}
setInterval(updateTimer, 60000);
updateTimer();

// --- 4. FETCH DATA FROM FIREBASE ---
const questionsRef = ref(db, 'rbse_questions');
onValue(questionsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Firebase object ko array mein convert karna
        allQuestions = Object.keys(data).map(key => data[key]);
        
        // Progress load karna
        const savedSub = localStorage.getItem('rbse_last_sub') || 'All';
        filterQuestions(savedSub, document.querySelector(`button[onclick*="'${savedSub}'"]`));
    } else {
        document.getElementById("question-text").innerText = "Database mein koi sawal nahi mila!";
    }
});

// --- 5. FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    if (subject === 'All') {
        filteredQuestions = allQuestions;
        document.getElementById("subject-label").innerText = "All Subjects";
    } else {
        filteredQuestions = allQuestions.filter(q => q.subject === subject);
        document.getElementById("subject-label").innerText = subject;
    }

    currentQuestionIndex = 0;
    localStorage.setItem('rbse_last_sub', subject);
    displayQuestion();
};

// --- 6. DISPLAY QUESTION ---
function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const qCounter = document.getElementById("q-counter");

    if (filteredQuestions.length === 0) {
        questionText.innerText = "Sawal load ho rahe hain...";
        return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    questionText.innerText = q.question;
    qCounter.innerText = `Q: ${currentQuestionIndex + 1} / ${filteredQuestions.length}`;
    
    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(btn, opt, q.answer);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("prev-btn").disabled = (currentQuestionIndex === 0);
    document.getElementById("next-btn").disabled = (currentQuestionIndex === filteredQuestions.length - 1);
}

// --- 7. ANSWER CHECK ---
function checkAnswer(btn, selected, correct) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = "none");

    if (selected === correct) {
        btn.style.background = "#2ed573";
        btn.style.color = "white";
    } else {
        btn.style.background = "#ff4757";
        btn.style.color = "white";
        allBtns.forEach(b => {
            if(b.innerText === correct) b.style.border = "2px solid #2ed573";
        });
    }
}

// --- 8. NAVIGATION ---
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
};

