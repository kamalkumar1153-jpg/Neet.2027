const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

// --- QUESTION BANK ---
let allQuestions = [
    { subject: "Physics", question: "Coulomb's Law mein Force r ke sath kaise badalta hai?", options: ["F ∝ r", "F ∝ 1/r", "F ∝ 1/r²", "F ∝ r²"], answer: "F ∝ 1/r²", explanation: "Force distance ke square ke inversely proportional hota hai." },
    { subject: "Chemistry", question: "Molarity ki unit kya hoti hai?", options: ["mol/L", "mol/kg", "g/L", "mol"], answer: "mol/L", explanation: "Molarity = Moles of solute / Volume of solution (L)." },
    { subject: "Biology", question: "Powerhouse of the cell kise kehte hain?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], answer: "Mitochondria", explanation: "Mitochondria ATP produce karta hai." }
];

// Fill up to 200 questions logic
for(let i=4; i<=200; i++) {
    let sub = i % 3 === 0 ? "Physics" : (i % 2 === 0 ? "Chemistry" : "Biology");
    allQuestions.push({
        subject: sub,
        question: `${sub} Important Concept Q${i}: Board Exam Taiyari`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
        explanation: "Ise NCERT ki book se ek baar revise karein."
    });
}

let currentSet = [];
let currentIndex = 0;
let score = 0;
let timer;

// --- WEEKLY REPORT LOGIC ---
function showWeeklyReport() {
    const statsBox = document.getElementById('weekly-stats');
    statsBox.style.display = "block";
    statsBox.innerHTML = "🔄 Calculating data...";

    database.ref('results').limitToLast(50).once('value', (snapshot) => {
        let total = 0, count = 0, best = 0;
        snapshot.forEach(child => {
            let data = child.val();
            total += data.score;
            count++;
            if(data.score > best) best = data.score;
        });
        
        if(count === 0) {
            statsBox.innerHTML = "Abhi koi data nahi hai. Pehla test dein!";
        } else {
            statsBox.innerHTML = `
                <b>Hafte ka Report Card:</b><br>
                📝 Tests Diye: ${count}<br>
                🎯 Best Score: ${best}<br>
                📉 Average: ${Math.round(total/count)}<br>
                <small>Bitiya ki progress badhiya hai!</small>
            `;
        }
    });
}

// --- QUIZ FUNCTIONS ---
function startQuiz(mode) {
    currentSet = mode === 'All' ? allQuestions : allQuestions.filter(q => q.subject === mode);
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
            if(opt === q.answer) { score++; alert("Sahi! ✅"); }
            else { alert(`Galat! ❌\nSahi Jawab: ${q.answer}\n\nLogic: ${q.explanation}`); }
            currentIndex++; showQuestion();
        };
        cont.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    let sec = 30;
    clearInterval(timer);
    timer = setInterval(() => {
        sec--;
        document.getElementById('timer').innerText = sec;
        if(sec <= 0) { currentIndex++; showQuestion(); }
    }, 1000);
}

function speakQuestion() {
    const speech = new SpeechSynthesisUtterance(document.getElementById('questionText').innerText);
    speech.lang = 'hi-IN';
    window.speechSynthesis.speak(speech);
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score-text').innerText = `Score: ${score} / ${currentSet.length}`;
    
    database.ref('results').push({
        score: score,
        total: currentSet.length,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

// Countdown update
setInterval(() => {
    const diff = new Date("April 15, 2027").getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Din Baaki (Board Exam 2027)`;
}, 1000);







    

