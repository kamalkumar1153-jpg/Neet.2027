// Global Variables
let currentQ = 0;
let quizData = [];
let score = 0;

// 1. App Initialize Function
function initApp() {
    console.log("App Initializing...");
    updateTimer();
    setInterval(updateTimer, 60000);

    // Progress Bars Setup
    const bioBar = document.getElementById('bio-bar');
    const chemBar = document.getElementById('chem-bar');
    const physBar = document.getElementById('phys-bar');

    if(bioBar) bioBar.style.width = "85%";
    if(chemBar) chemBar.style.width = "65%";
    if(physBar) physBar.style.width = "40%";

    // Initial MathJax Render
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// 2. Timer Logic (Fix for 'Loading...')
function updateTimer() {
    const target = new Date("May 3, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    const timerElement = document.getElementById('countdown');
    if (!timerElement) return;

    if (diff <= 0) {
        timerElement.innerText = "Exam Today!";
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        timerElement.innerText = `${days} Days to NEET 2026`;
    }
}

// 3. Tab Management
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(id);
    if(activeTab) activeTab.classList.add('active');
}

// 4. Mock Test Engine (Fix for Button)
async function startTest() {
    console.log("Starting Test...");
    try {
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error("File not found");
        quizData = await response.json();
        
        document.getElementById('start-btn').style.display = 'none';
        showQuestion();
    } catch (error) {
        console.error(error);
        alert("Error: questions.json file check karein ya path sahi karein.");
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
        qText.innerText = `Test Over! Score: ${score}`;
        container.innerHTML = '<button class="primary-btn" onclick="location.reload()">Restart</button>';
        confetti();
    }
}

function checkAns(idx) {
    if (idx === quizData[currentQ].correct) {
        score += 4;
    } else {
        score -= 1;
    }
    document.getElementById('live-score').innerText = score;
    currentQ++;
    showQuestion();
}

// AI Solver Logic
function solveDoubt() {
    const query = document.getElementById('ai-input').value;
    const output = document.getElementById('ai-output');
    if (!query) return alert("Sawal likhein!");

    output.innerHTML = "Professor is thinking...";
    setTimeout(() => {
        output.innerHTML = `<button class="primary-btn" style="background:#22c55e" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(query + " NEET solution")}')">🔍 View Solution</button>`;
    }, 1000);
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', initApp);

