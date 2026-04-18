import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- 1. AAPKA ASLI FIREBASE CONFIG ---
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

// Initialize Firebase
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
    console.log("Data loaded from Firebase:", data); // Check karne ke liye
    if (data) {
        allQuestions = Object.values(data);
        
        // Sabse zaroori line: 'All' filter ko refresh karein
        window.filterQuestions('All'); 
    } else {
        document.getElementById("question-text").innerText = "Database khali hai!";
    }
}, (error) => {
    console.error("Firebase error:", error);
});


// --- 5. FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    if(!btnElement) {
        btnElement = document.querySelector(`button[onclick*="'${subject}'"]`);
    }
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

function displayQuestion(index) {
    const questionData = allQuestions[index]; // Firebase se aaya data
    if (questionData) {
        // 'question' ki jagah check karein ki data sahi key se call ho raha hai
        document.getElementById('questionText').innerText = questionData.question; 
        
        // Options dikhane ke liye loop
        const optionsHtml = questionData.options.map((opt, i) => 
            `<button class="option-btn">${opt}</button>`
        ).join('');
        
        document.getElementById('optionsContainer').innerHTML = optionsHtml;
    } else {
        document.getElementById('questionText').innerText = "Loading Questions...";
    }
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



