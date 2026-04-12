let currentQ = 0;
let score = 0;
let quizData = []; // Khali array, jo file se bharega

// 1. App Load Setup
window.onload = () => {
    updateTimer();
    setInterval(updateTimer, 60000);
    // Progress bars set karein
    document.getElementById('bio-bar').style.width = "85%";
    document.getElementById('chem-bar').style.width = "65%";
    document.getElementById('phys-bar').style.width = "40%";
};

// 2. Timer
function updateTimer() {
    const target = new Date("May 3, 2026").getTime();
    const diff = target - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const timer = document.getElementById('countdown');
    if(timer) timer.innerText = `${days} Days to NEET 2026`;
}

// 3. Mock Test Logic (Fix: Loading from File)
async function startTest() {
    const startBtn = document.getElementById('start-btn');
    const qText = document.getElementById('q-text');
    
    qText.innerText = "Loading Questions...";
    
    try {
        // Aapki GitHub file ko fetch karega
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error("File not found");
        
        quizData = await response.json();
        
        if (quizData.length > 0) {
            startBtn.style.display = 'none';
            showQuestion();
        } else {
            qText.innerText = "questions.json khali hai!";
        }
    } catch (error) {
        console.error(error);
        qText.innerText = "Error: questions.json file nahi mili!";
        alert("Check karein ki questions.json file GitHub par hai ya nahi.");
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
        qText.innerText = "Final Score: " + score;
        container.innerHTML = `<button class="primary-btn" onclick="location.reload()">Restart Test</button>`;
        confetti({ particleCount: 150, spread: 70 });
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

// 4. Smart Google Search
function solveDoubt() {
    const query = document.getElementById('ai-input').value.trim();
    if(!query) return alert("Sawal likhein!");
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query + " NEET solution")}`, '_blank');
}

// 5. Tabs & Swipe
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

let fIdx = 0;
const formulas = [{v:"$$V=IR$$"}, {v:"$$F=ma$$"}, {v:"$$E=mc^2$$"}];
function nextCard() {
    fIdx = (fIdx + 1) % formulas.length;
    document.getElementById('card-content').innerHTML = formulas[fIdx].v;
    if(window.MathJax) MathJax.typesetPromise();
}

