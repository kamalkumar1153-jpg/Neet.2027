// --- CONFIG & FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

const allQuestions = [
    { subject: "Physics", question: "Optics: Concave lens ka use kisme hota hai?", options: ["Myopia", "Hypermetropia", "Astigmatism", "Presbyopia"], answer: "Myopia", explanation: "Concave lens light ko diverge karta hai, jo Myopia ko thik karta hai." },
    { subject: "Chemistry", question: "Ideal Gas Equation kya hai?", options: ["PV=nRT", "P=VRT", "V=nRT", "PV=kT"], answer: "PV=nRT", explanation: "PV=nRT is the equation of state of a hypothetical ideal gas." },
    // Yahan aur sawal jodein...
];

let currentSet = [];
let currentIndex = 0;
let score = 0;
let wrongQs = [];
let timer;

// --- STREAK LOGIC ---
function handleStreak() {
    let streak = localStorage.getItem('studyStreak') || 0;
    let lastDate = localStorage.getItem('lastDate');
    let today = new Date().toDateString();

    if (lastDate !== today) {
        streak = (lastDate === new Date(Date.now() - 86400000).toDateString()) ? parseInt(streak) + 1 : 1;
        localStorage.setItem('studyStreak', streak);
        localStorage.setItem('lastDate', today);
    }
    document.getElementById('streak-badge').innerText = `🔥 Streak: ${streak} Din`;
}

// --- VOICE ASSISTANT ---
function speakQuestion() {
    const text = document.getElementById('questionText').innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN'; // Hindi-English Mixed Accent
    window.speechSynthesis.speak(speech);
}

// --- QUIZ LOGIC ---
function startQuiz(mode) {
    currentSet = (mode === 'All') ? allQuestions : allQuestions.filter(q => q.subject === mode);
    if(currentSet.length === 0) { alert("Sawal jald hi jode jayenge!"); return; }
    
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    currentIndex = 0; score = 0; wrongQs = [];
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= currentSet.length) { finishQuiz(); return; }
    
    const q = currentSet[currentIndex];
    document.getElementById('questionText').innerText = q.question;
    document.getElementById('subject-label').innerText = q.subject;
    
    // Progress update
    document.getElementById('myBar').style.width = ((currentIndex / currentSet.length) * 100) + "%";

    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAns(opt, q.answer, q.explanation);
        cont.appendChild(btn);
    });
    startTimer();
}

function checkAns(sel, corr, expl) {
    clearInterval(timer);
    if (sel === corr) {
        score++;
        alert("Sahi! ✅");
    } else {
        wrongQs.push({q: currentSet[currentIndex].question, c: corr, u: sel});
        alert(`Galat! ❌\nSahi Jawab: ${corr}\nLogic: ${expl}`);
    }
    currentIndex++;
    showQuestion();
}

function startTimer() {
    let sec = 30;
    document.getElementById('timer').innerText = sec;
    clearInterval(timer);
    timer = setInterval(() => {
        sec--;
        document.getElementById('timer').innerText = sec;
        if(sec <= 0) { clearInterval(timer); currentIndex++; showQuestion(); }
    }, 1000);
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score-text').innerText = `⭐ Result: ${score} / ${currentSet.length}`;
    
    // Save to Firebase
    database.ref('results').push({
        score: score,
        total: currentSet.length,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

// Countdown for Board Exams
setInterval(() => {
    const diff = new Date("April 15, 2027").getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Din Baaki (Board Exam 2027)`;
}, 1000);

window.onload = handleStreak;






    

