// --- 1. FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    authDomain: "neet-study-vault-e9732.firebaseapp.com",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732",
    storageBucket: "neet-study-vault-e9732.firebasestorage.app",
    messagingSenderId: "313605620817",
    appId: "1:313605620817:web:6aad55179b39c5710ea470",
};

// Initialize Firebase
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

// --- 2. DATA ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();
const allQuestions = [
    { "subject": "Biology", "question": "Emergency Hormone kise kehte hain?", "options": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"], "answer": "Adrenaline" },
    { "subject": "Physics", "question": "Luminous Intensity ki unit kya hai?", "options": ["Mole", "Ampere", "Candela", "Kelvin"], "answer": "Candela" },
    { "subject": "Chemistry", "question": "Gubbaron mein kaunsi gas bhari jati hai?", "options": ["Hydrogen", "Helium", "Nitrogen", "Argon"], "answer": "Helium" },
    { "subject": "Biology", "question": "Phalon ke adhyayan (study) ko kya kehte hain?", "options": ["Pomology", "Mycology", "Phycology", "Anthology"], "answer": "Pomology" },
    { "subject": "Physics", "question": "Myopia ko thik karne ke liye kaunsa lens chahiye?", "options": ["Convex", "Concave", "Cylindrical", "Bifocal"], "answer": "Concave" },
    { "subject": "Chemistry", "question": "Vitamin C ka chemical naam kya hai?", "options": ["Citric Acid", "Ascorbic Acid", "Oxalic Acid", "Nitric Acid"], "answer": "Ascorbic Acid" },
    { "subject": "Biology", "question": "Manushya mein kitne chromosomes hote hain?", "options": ["23", "44", "46", "48"], "answer": "46" },
    { "subject": "Physics", "question": "Aakash neela kyun dikhta hai?", "options": ["Reflection", "Refraction", "Scattering", "Dispersion"], "answer": "Scattering" },
    { "subject": "Chemistry", "question": "Loha (Iron) ka sabse shuddh roop kaunsa hai?", "options": ["Cast Iron", "Pig Iron", "Wrought Iron", "Steel"], "answer": "Wrought Iron" },
    { "subject": "Biology", "question": "Plants mein Xylem kya le jata hai?", "options": ["Food", "Water", "Oxygen", "Amino acids"], "answer": "Water" },
    // ... baaki sawal loop mein load honge
];

// Sawalon ko 100 tak pura karne ke liye (Dummy sample as space is limited, but logic remains)
while(allQuestions.length < 100) {
    allQuestions.push({ "subject": "Revision", "question": "Sample Revision Q " + allQuestions.length, "options": ["A","B","C","D"], "answer": "A" });
}

// --- 3. APP LOGIC ---
let currentIndex = 0;
let score = 0;
let wrongQuestions = [];
let timeLeft = 30;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) { handleTimeout(); }
    }, 1000);
}

function handleTimeout() {
    const q = allQuestions[currentIndex];
    wrongQuestions.push({ q: q.question, correct: q.answer, user: "Time Out ⏰" });
    moveToNext();
}

function displayQuestion() {
    if (currentIndex >= allQuestions.length) { showResults(); return; }

    const q = allQuestions[currentIndex];
    document.getElementById('questionText').innerText = q.question;
    document.getElementById('q-counter').innerText = `Q: ${currentIndex + 1} / ${allQuestions.length}`;
    document.getElementById('subject-label').innerText = q.subject;
    
    // Progress Bar
    let progress = ((currentIndex) / allQuestions.length) * 100;
    document.getElementById("myBar").style.width = progress + "%";

    const optCont = document.getElementById('optionsContainer');
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

function checkAnswer(selected, correct, qText) {
    clearInterval(timerInterval);
    if (selected === correct) { score++; } 
    else { wrongQuestions.push({ q: qText, correct: correct, user: selected }); }
    moveToNext();
}

function moveToNext() {
    currentIndex++;
    displayQuestion();
}

function saveScoreToCloud(name, s, t) {
    const resultRef = database.ref('results').push();
    resultRef.set({
        studentName: name,
        score: s,
        total: t,
        percentage: Math.round((s/t)*100) + "%",
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('quiz-box').style.display = "none";
    document.getElementById('review-section').style.display = "block";
    document.getElementById('score-card').innerText = `⭐ Final Score: ${score} / ${allQuestions.length}`;
    
    saveScoreToCloud("Kamal Bitiya", score, allQuestions.length);

    const listCont = document.getElementById('wrong-questions-list');
    wrongQuestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `<b>Q:</b> ${item.q}<br><span style="color:red">Aapka: ${item.user}</span> | <span style="color:green">Sahi: ${item.correct}</span>`;
        listCont.appendChild(div);
    });
}

// Countdown update
setInterval(() => {
    const diff = targetDate - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${days} Din Baaki`;
}, 1000);

window.onload = displayQuestion;





    

