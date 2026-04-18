import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- 1. FIREBASE CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSy...", // Apni asli API Key yahan dalein
  authDomain: "neet-2027-9792f.firebaseapp.com",
  databaseURL: "https://neet-2027-9792f-default-rtdb.firebaseio.com",
  projectId: "neet-2027-9792f",
  storageBucket: "neet-2027-9792f.appspot.com",
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
    const countdownEl = document.getElementById("countdown");
    if(countdownEl) countdownEl.innerText = `${days} Din Baaki`;
}
setInterval(updateTimer, 60000);
updateTimer();

// --- 4. FETCH DATA FROM FIREBASE ---
const questionsRef = ref(db, 'rbse_questions');
onValue(questionsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Object ko Array mein sahi tarike se badalna
        allQuestions = Object.values(data);
        const savedSub = localStorage.getItem('rbse_last_sub') || 'All';
        window.filterQuestions(savedSub); 
    } else {
        const qText = document.getElementById("question-text");
        if(qText) qText.innerText = "Database khali hai! Admin panel se sawal dalein.";
    }
}, (error) => {
    console.error("Firebase Error:", error);
});

// --- 5. FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    // UI Update
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Agar btnElement manually nahi pass kiya, toh button dhoondein
    if(!btnElement) {
        btnElement = document.querySelector(`button[onclick*="'${subject}'"]`);
    }
    if(btnElement) btnElement.classList.add('active');

    // Filtering
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

    if (!filteredQuestions || filteredQuestions.length === 0) {
        if(questionText) questionText.innerText = "Is subject mein sawal nahi hain.";
        if(optionsContainer) optionsContainer.innerHTML = "";
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
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

if(nextBtn) {
    nextBtn.onclick = () => {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    };
}

if(prevBtn) {
    prevBtn.onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    };
}


