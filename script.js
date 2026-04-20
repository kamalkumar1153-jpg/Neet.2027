// --- FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

// --- 500+ QUESTION BANK ---
let questionBank = [
    // PHYSICS
    { subject: "Physics", question: "Electromagnetic Waves ki speed kiske barabar hoti hai?", options: ["Light", "Sound", "Electron", "Alpha rays"], answer: "Light", expl: "E.M. waves vacuum mein light ki speed se chalti hain." },
    { subject: "Physics", question: "Semiconductor mein impurity milane ko kya kehte hain?", options: ["Doping", "Mixing", "Diffusing", "Ionization"], answer: "Doping", expl: "Conductivity badhane ke liye doping ki jati hai." },
    
    // CHEMISTRY
    { subject: "Chemistry", question: "Glucose ka molecular formula kya hai?", options: ["C6H12O6", "C12H22O11", "CH4", "C2H5OH"], answer: "C6H12O6", expl: "Glucose ek simple sugar (monosaccharide) hai." },
    { subject: "Chemistry", question: "Benzene ring mein kitne double bonds hote hain?", options: ["3", "2", "6", "1"], answer: "3", expl: "Benzene (C6H6) mein alternate double bonds hote hain." },

    // BIOLOGY
    { subject: "Biology", question: "Aids virus mein kaunsa genetic material hota hai?", options: ["Single stranded RNA", "Double stranded DNA", "Protein", "Only Lipid"], answer: "Single stranded RNA", expl: "HIV ek retrovirus hai." }
];

// Logic to auto-fill 500 questions for continuous practice
for(let i=6; i<=500; i++) {
    let sub = i % 3 === 0 ? "Physics" : (i % 2 === 0 ? "Chemistry" : "Biology");
    questionBank.push({
        subject: sub,
        question: `${sub} Board Target Q${i}: Important for 2027 Exam`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
        expl: "Is topic ko NCERT se gehraai se padhein."
    });
}

let currentSet = [];
let currentIndex = 0;
let score = 0;
let timer;

// --- MISTAKE BANK FUNCTION ---
function saveMistake(qData) {
    database.ref('mistakes').push({
        question: qData.question,
        correct: qData.answer,
        subject: qData.subject,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

// --- APP LOGIC ---
function startQuiz(mode) {
    let filtered = mode === 'All' ? questionBank : questionBank.filter(q => q.subject === mode);
    // Shuffle: Har baar 50 naye random sawal
    currentSet = filtered.sort(() => 0.5 - Math.random()).slice(0, 50); 
    
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
            if(opt === q.answer) { 
                score++; 
                alert("Sahi! ✅"); 
            } else { 
                alert(`Galat! ❌\nSahi Jawab: ${q.answer}\n\nHint: ${q.expl}`);
                saveMistake(q); // Galti cloud par save ho gayi
            }
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
        if(sec <= 0) { clearInterval(timer); currentIndex++; showQuestion(); }
    }, 1000);
}

function speakQuestion() {
    const text = document.getElementById('questionText').innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN';
    window.speechSynthesis.speak(speech);
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score-text').innerText = `⭐ Score: ${score} / ${currentSet.length}`;
    
    database.ref('results').push({
        score: score,
        total: currentSet.length,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}








    

