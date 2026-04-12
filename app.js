// Countdown Logic
function updateTimer() {
    const examDate = new Date("May 3, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = examDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Days to NEET`;
}
setInterval(updateTimer, 1000);

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// AI Solver (Using prompt for Key Security)
async function askAI() {
    const doubt = document.getElementById('ai-input').value;
    const output = document.getElementById('ai-output');
    output.innerText = "Processing High-Level Solution...";
    
    // Yahan aap apna OpenAI Fetch call daal sakte hain
    setTimeout(() => { output.innerText = "AI Response: [Chapter: Genetics] Mendelian ratios explain this cross..."; }, 2000);
}

// Simple Quiz Initializer
function startQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    const qText = document.getElementById('q-text');
    qText.innerText = "Q1. What is the role of Leydig cells?";
    const options = ["Synthesize Androgens", "Produce Insulin", "Produce Mucus", "None"];
    const container = document.getElementById('options-container');
    options.forEach(opt => {
        container.innerHTML += `<button class="option-btn" onclick="alert('Checking...')">${opt}</button>`;
    });
}
