let currentQ = 0;
let quizData = [];
let score = 0;

// 1. Timer Logic
function updateTimer() {
    const target = new Date("May 3, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Days to NEET 2026`;
}
setInterval(updateTimer, 1000);

// 2. Tab Switching
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// 3. Swipe Card Formulas
const formulas = [
    {cat: "PHYSICS", val: "$$V = IR$$"},
    {cat: "CHEMISTRY", val: "$$pH = -\\log[H^+]$$"},
    {cat: "PHYSICS", val: "$$\\lambda = \\frac{h}{p}$$"},
    {cat: "BIOLOGY", val: "120/80 mmHg"}
];
let fIdx = 0;
function nextCard() {
    fIdx = (fIdx + 1) % formulas.length;
    document.getElementById('card-cat').innerText = formulas[fIdx].cat;
    document.getElementById('card-content').innerHTML = formulas[fIdx].val;
    MathJax.typesetPromise();
}

// 4. Mock Test Engine
async function startTest() {
    try {
        const res = await fetch('questions.json');
        quizData = await res.json();
        document.getElementById('start-btn').style.display = 'none';
        showQuestion();
    } catch (e) { alert("questions.json file nahi mili!"); }
}

function showQuestion() {
    if (currentQ < quizData.length) {
        const q = quizData[currentQ];
        document.getElementById('q-text').innerText = q.q;
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        q.options.forEach((opt, i) => {
            container.innerHTML += `<button class="option-btn" onclick="checkAns(${i})">${opt}</button>`;
        });
        MathJax.typesetPromise();
    } else {
        finishTest();
    }
}

function checkAns(idx) {
    if (idx === quizData[currentQ].correct) {
        score += 4;
        confetti({particleCount: 50, spread: 60});
    } else {
        score -= 1;
    }
    document.getElementById('live-score').innerText = score;
    currentQ++;
    showQuestion();
}

function finishTest() {
    document.getElementById('q-text').innerText = "Test Finished! Score: " + score;
    document.getElementById('options-container').innerHTML = `<button class="primary-btn" onclick="location.reload()">Try Again</button>`;
}

// Initialize Bars
window.onload = () => {
    updateTimer();
    document.getElementById('bio-bar').style.width = "85%";
    document.getElementById('chem-bar').style.width = "65%";
    document.getElementById('phys-bar').style.width = "40%";
};


