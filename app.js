let currentQ = 0;
let score = 0;
let quizData = [];

// 1. Initial Load
window.onload = () => {
    updateTimer();
    setInterval(updateTimer, 60000);
    // Bars initialization
    document.getElementById('bio-bar').style.width = "85%";
    document.getElementById('chem-bar').style.width = "65%";
    document.getElementById('phys-bar').style.width = "45%";
};

// 2. Timer
function updateTimer() {
    const target = new Date("May 3, 2026").getTime();
    const diff = target - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const timer = document.getElementById('countdown');
    if(timer) timer.innerText = days > 0 ? `${days} Days to NEET 2026` : "Exam Today!";
}

// 3. Mock Test (Force Fetch Logic)
async function startTest() {
    const qText = document.getElementById('q-text');
    const startBtn = document.getElementById('start-btn');
    
    qText.innerText = "Loading questions...";

    try {
        // 'v=' ke sath random number dalne se browser hamesha fresh file lega
        const response = await fetch('./questions.json?v=' + Math.random());
        
        if (!response.ok) throw new Error("File not found");

        quizData = await response.json();
        
        if (quizData.length > 0) {
            startBtn.style.display = 'none';
            showQuestion();
        }
    } catch (error) {
        qText.innerText = "Error loading questions.json";
        alert("Galti: GitHub par file ka naam 'questions.json' check karein.");
    }
}

function showQuestion() {
    const container = document.getElementById('options-container');
    const qText = document.getElementById('q-text');

    if (currentQ < quizData.length) {
        const q = quizData[currentQ];
        qText.innerText = `Q${currentQ + 1}: ${q.q}`;
        container.innerHTML = '';
        
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => checkAns(i);
            container.appendChild(btn);
        });

        if (window.MathJax) MathJax.typesetPromise();
    } else {
        qText.innerText = "Complete! Score: " + score;
        container.innerHTML = `<button class="primary-btn" onclick="location.reload()">Restart</button>`;
        confetti({ particleCount: 150, spread: 70 });
    }
}

function checkAns(idx) {
    if (idx === quizData[currentQ].correct) { score += 4; } else { score -= 1; }
    document.getElementById('live-score').innerText = score;
    currentQ++;
    showQuestion();
}

// 4. Search & Tabs
function solveDoubt() {
    const query = document.getElementById('ai-input').value.trim();
    if(!query) return alert("Sawal likhein!");
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query + " NEET solution")}`, '_blank');
}

function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}



