let currentQ = 0;
let score = 0;
let quizData = [];

// 1. Initial Load
window.onload = () => {
    updateTimer();
    setInterval(updateTimer, 60000);
    if(window.MathJax) MathJax.typesetPromise();
};

// 2. Timer Logic
function updateTimer() {
    const target = new Date("May 3, 2026 10:00:00").getTime();
    const diff = target - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const timer = document.getElementById('countdown');
    if(timer) timer.innerText = days > 0 ? `${days} Days to NEET 2026` : "Exam Day!";
}

// 3. Tab Switching
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// 4. Smart Google Search (AI Professor Replacement)
function solveDoubt() {
    const query = document.getElementById('ai-input').value.trim();
    if(!query) {
        alert("Pehle apna sawal likhein!");
        return;
    }
    // Bitiya ko direct best educational results milenge
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + " NEET NCERT solution video")}`;
    window.open(searchUrl, '_blank');
}

// 5. Mock Test Logic
async function startTest() {
    try {
        const res = await fetch('questions.json');
        quizData = await res.json();
        document.getElementById('start-btn').style.display = 'none';
        showQuestion();
    } catch (e) {
        alert("questions.json file nahi mili! Check GitHub.");
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
            container.innerHTML += `<button class="option-btn" onclick="checkAns(${i})">${opt}</button>`;
        });
        if(window.MathJax) MathJax.typesetPromise();
    } else {
        qText.innerText = "Final Score: " + score;
        container.innerHTML = '<button class="primary-btn" onclick="location.reload()">Restart Test</button>';
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
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

// 6. Formula Swipe Cards
let fIdx = 0;
const formulas = [
    {v: "$$V = IR$$ (Ohm's Law)"},
    {v: "$$F = ma$$ (Newton's 2nd Law)"},
    {v: "$$E = h\\nu$$ (Planck's Equation)"},
    {v: "$$pH = -\\log[H^+]$$"}
];
function nextCard() {
    fIdx = (fIdx + 1) % formulas.length;
    document.getElementById('card-content').innerHTML = formulas[fIdx].v;
    if(window.MathJax) MathJax.typesetPromise();
}

