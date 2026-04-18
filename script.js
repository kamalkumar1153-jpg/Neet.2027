import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQ9CNumMZQNq5ED-5oGbga6SzpZFK9il4",
  authDomain: "neet-2027-9792f.firebaseapp.com",
  databaseURL: "https://neet-2027-9792f-default-rtdb.firebaseio.com",
  projectId: "neet-2027-9792f",
  storageBucket: "neet-2027-9792f.firebasestorage.app",
  messagingSenderId: "946709283656",
  appId: "1:946709283656:web:51a13d83e8f0a546b5697d",
  measurementId: "G-YNHK9L90SQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const targetDate = new Date("April 15, 2027 00:00:00").getTime();
let allQuestions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;

// --- TIMER ---
function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const countdownEl = document.getElementById("countdown");
    if(countdownEl) countdownEl.innerText = `${days} Din Baaki`;
}
setInterval(updateTimer, 60000);
updateTimer();

// --- FETCH DATA ---
const questionsRef = ref(db, 'rbse_questions');
onValue(questionsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        allQuestions = Object.values(data);
        window.filterQuestions('All'); 
    } else {
        document.getElementById("questionText").innerText = "Database khali hai!";
    }
});

// --- FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(!btnElement) btnElement = document.querySelector(`button[onclick*="'${subject}'"]`);
    if(btnElement) btnElement.classList.add('active');

    filteredQuestions = (subject === 'All') ? allQuestions : allQuestions.filter(q => q.subject === subject);
    document.getElementById("subject-label").innerText = subject === 'All' ? "All Subjects" : subject;

    currentQuestionIndex = 0;
    displayQuestion();
};

// --- DISPLAY LOGIC (FIXED) ---
function displayQuestion() {
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const qCounter = document.getElementById('q-counter');
    const aiResult = document.getElementById('ai-result');

    if (filteredQuestions.length > 0) {
        const q = filteredQuestions[currentQuestionIndex];
        questionText.innerText = q.question;
        qCounter.innerText = `Q: ${currentQuestionIndex + 1} / ${filteredQuestions.length}`;
        aiResult.style.display = 'none'; // Naya sawal aane par AI box chhupa do

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
}

// --- ANSWER CHECK ---
function checkAnswer(btn, selected, correct) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = "none");
    if (selected === correct) {
        btn.style.background = "#2ed573";
        btn.style.color = "white";
    } else {
        btn.style.background = "#ff4757";
        btn.style.color = "white";
        allBtns.forEach(b => { if(b.innerText === correct) b.style.border = "2px solid #2ed573"; });
    }
}

// --- AI DOUBT SOLVER (GEMINI) ---
window.askAI = async function() {
    const apiKey = "PASTE_YOUR_GEMINI_KEY_HERE"; // <-- Yahan apni Key dalein
    const aiResult = document.getElementById('ai-result');
    const q = filteredQuestions[currentQuestionIndex];

    aiResult.style.display = 'block';
    aiResult.innerHTML = "<em>Thinking... 🤔</em>";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Explain this NEET science question in simple English and Hindi: ${q.question}. The correct answer is ${q.answer}. Explain why?` }] }]
            })
        });

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        aiResult.innerHTML = `<strong>AI Explanation:</strong><br>${text.replace(/\n/g, '<br>')}`;
    } catch (e) {
        aiResult.innerText = "Error: AI not responding. Check API Key.";
    }
};

// --- NAVIGATION ---
document.getElementById("next-btn").onclick = () => { if (currentQuestionIndex < filteredQuestions.length - 1) { currentQuestionIndex++; displayQuestion(); } };
document.getElementById("prev-btn").onclick = () => { if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(); } };



