// 1. Countdown Timer Logic (Fix for 'Loading...')
function updateTimer() {
    const targetDate = new Date("May 3, 2026 10:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById('countdown').innerText = "Exam Day is Here!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Days to NEET 2026`;
}

// 2. Initial Setup (Fix for Progress Bars & Timer)
function initApp() {
    updateTimer();
    setInterval(updateTimer, 60000); // Har minute update hoga

    // Progress Bars update (Manual testing values)
    document.getElementById('bio-bar').style.width = "75%";
    document.getElementById('chem-bar').style.width = "60%";
    document.getElementById('phys-bar').style.width = "45%";
    
    // Streak update
    document.getElementById('streak').innerText = "1"; 

    // Initial MathJax call
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// Use 'DOMContentLoaded' instead of 'onload' for faster trigger
document.addEventListener('DOMContentLoaded', initApp);

// 3. Tab Switching
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// 4. Swipe Card Formulas List
const formulas = [
    {cat: "PHYSICS", val: "$$V = IR$$"},
    {cat: "CHEMISTRY", val: "$$pH = -\\log[H^+]$$"},
    {cat: "PHYSICS", val: "$$F = ma$$"},
    {cat: "BIOLOGY", val: "Cardiac Output = SV × HR"}
];

let fIdx = 0;
function nextCard() {
    fIdx = (fIdx + 1) % formulas.length;
    document.getElementById('card-cat').innerText = formulas[fIdx].cat;
    document.getElementById('card-content').innerHTML = formulas[fIdx].val;
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

