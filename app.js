// Data for Revision Cards
const revisionCards = [
    {cat: "PHYSICS", formula: "$$\\lambda = \\frac{h}{p}$$", desc: "de-Broglie Wavelength"},
    {cat: "CHEMISTRY", formula: "$$pH = -\\log[H^+]$$", desc: "pH Value"},
    {cat: "BIOLOGY", formula: "120/80 mmHg", desc: "Normal Blood Pressure"},
    {cat: "PHYSICS", formula: "$$V = IR$$", desc: "Ohm's Law"}
];

let currentCard = 0;
function nextCard() {
    currentCard = (currentCard + 1) % revisionCards.length;
    document.getElementById('card-cat').innerText = revisionCards[currentCard].cat;
    document.getElementById('card-content').innerHTML = revisionCards[currentCard].formula;
    document.getElementById('card-desc').innerText = revisionCards[currentCard].desc;
    MathJax.typesetPromise();
}

// Tab Switching
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Timer for NEET 2026
function updateTimer() {
    const target = new Date("May 3, 2026 10:00:00").getTime();
    const diff = target - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} Days to NEET 2026`;
}
setInterval(updateTimer, 1000);

// Initialize Bars on load
window.onload = () => {
    document.getElementById('bio-bar').style.width = "75%"; // Example static value
    document.getElementById('chem-bar').style.width = "60%";
    document.getElementById('phys-bar').style.width = "45%";
    updateTimer();
};

// AI Solver Dummy Function (Connect your API here)
function solveDoubt() {
    const output = document.getElementById('ai-output');
    output.innerText = "Professor is thinking... Solving using NCERT Reference.";
    setTimeout(() => {
        confetti();
        output.innerText = "Solution: Based on NCERT Page 45, the reaction is SN2 because of the primary halide...";
    }, 2000);
}
