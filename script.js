const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

// --- REAL QUESTION BANK (Ab isme asli sawal hain) ---
let questionBank = [
    { subject: "Physics", question: "Coulomb ke niyam mein sthirank (k) ka maan kitna hota hai?", options: ["9 × 10⁹", "1.6 × 10⁻¹⁹", "8.85 × 10⁻¹²", "9.8"], answer: "9 × 10⁹", expl: "k = 1/4πε₀ = 9 × 10⁹ N m²/C² hota hai." },
    { subject: "Physics", question: "Prism se guzarne par kis rang ka vichlan (deviation) sabse kam hota hai?", options: ["Laal (Red)", "Baingani (Violet)", "Peela", "Hara"], answer: "Laal (Red)", expl: "Laal rang ki wavelength zyada hoti hai, isliye vichlan kam hota hai." },
    { subject: "Chemistry", question: "Ideal Gas Equation PV = nRT mein 'R' ka naam kya hai?", options: ["Gas Niyatank", "Rate Constant", "Radius", "Resistance"], answer: "Gas Niyatank", expl: "Ise Universal Gas Constant kehte hain." },
    { subject: "Chemistry", question: "Shuddh jal ka pH maan kitna hota hai?", options: ["7", "1", "14", "0"], answer: "7", expl: "Pure water neutral hota hai, isliye pH 7 hai." },
    { subject: "Biology", question: "Manushya ki koshika mein kitne jode chromosomes hote hain?", options: ["23 Jode", "46 Jode", "22 Jode", "44 Jode"], answer: "23 Jode", expl: "Kul 46 hote hain, par 23 jode (pairs) hote hain." }
];

// Fill up to 500 questions with descriptive placeholders for now
for(let i=6; i<=500; i++) {
    let sub = i % 3 === 0 ? "Physics" : (i % 2 === 0 ? "Chemistry" : "Biology");
    questionBank.push({
        subject: sub,
        question: `${sub} Board Target Q${i}: Mahatvapurn numerical aur siddhant jo board exam 2027 ke liye zaruri hai.`,
        options: ["Sahi Jawab", "Galat Option 1", "Galat Option 2", "Galat Option 3"],
        answer: "Sahi Jawab",
        expl: "Ise NCERT ki pustak se dhyanpurvak padhein."
    });
}

let currentSet = [];
let currentIndex = 0;
let score = 0;
let timer;

// --- STREAK & TIMER ---
function updateUI() {
    let streak = localStorage.getItem('studyStreak') || 0;
    document.getElementById('streak-badge').innerText = `🔥 Streak: ${streak} Din`;
    
    // Fix Countdown
    const target = new Date("April 15, 2027 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} Din Baaki (Exam 2027)`;
    }, 1000);
}

// --- MISTAKE BANK ---
function saveMistake(qData) {
    database.ref('mistakes').push({
        question: qData.question,
        correct: qData.answer,
        subject: qData.subject,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

function startMistakeMode() {
    database.ref('mistakes').limitToLast(10).once('value', (snapshot) => {
        if(!snapshot.exists()) { alert("Abhi koi galti nahi hai! Bahut badiya bitiya."); return; }
        currentSet = [];
        snapshot.forEach(child => {
            let d = child.val();
            currentSet.push({
                subject: d.subject, question: d.question, 
                options: [d.correct, "Galat 1", "Galat 2", "Galat 3"].sort(()=>0.5-Math.random()), 
                answer: d.correct, expl: "Ye aapne pehle galat kiya tha."
            });
        });
        launchQuiz();
    });
}

// --- QUIZ LOGIC ---
function startQuiz(mode) {
    let filtered = mode === 'All' ? questionBank : questionBank.filter(q => q.subject === mode);
    currentSet = filtered.sort(() => 0.5 - Math.random()).slice(0, 30); // Har baar 30 random sawal
    launchQuiz();
}

function launchQuiz() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    currentIndex = 0; score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= currentSet.length) { finishQuiz(); return; }
    const q = currentSet[currentIndex];
    document.getElementById('questionText').innerText = q.question;
    document.getElementById('subject-label').innerText = q.subject;
    document.getElementById('myBar').style.width = ((currentIndex / currentSet.length) * 100) + "%";
    
    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => {
            clearInterval(timer);
            if(opt === q.answer) { score++; alert("Sahi! ✅"); }
            else { 
                alert(`Galat! ❌\nSahi Jawab: ${q.answer}\n\nLogic: ${q.expl}`);
                saveMistake(q);
            }
            currentIndex++; showQuestion();
        };
        cont.appendChild(btn);
    });
    runTimer();
}

function runTimer() {
    let sec = 30;
    document.getElementById('timer').innerText = sec;
    clearInterval(timer);
    timer = setInterval(() => {
        sec--;
        document.getElementById('timer').innerText = sec;
        if(sec <= 0) { clearInterval(timer); currentIndex++; showQuestion(); }
    }, 1000);
}

function speakQuestion() {
    const text = document.getElementById('questionText').innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN';
    window.speechSynthesis.speak(speech);
}

function showWeeklyReport() {
    const statsBox = document.getElementById('weekly-stats');
    statsBox.style.display = "block";
    database.ref('results').limitToLast(20).once('value', (s) => {
        let t = 0, c = 0;
        s.forEach(child => { t += child.val().score; c++; });
        statsBox.innerHTML = c === 0 ? "Pehla test dein!" : `<b>Report:</b><br>Tests: ${c}<br>Avg Score: ${Math.round(t/c)}`;
    });
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score-text').innerText = `Score: ${score} / ${currentSet.length}`;
    database.ref('results').push({ score: score, total: currentSet.length, timestamp: firebase.database.ServerValue.TIMESTAMP });
}

window.onload = updateUI;









    

