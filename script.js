// --- 1. DATA (Offline Questions) ---
const allQuestions = [
    { "subject": "Physics", "question": "Light year is a unit of which physical quantity?", "options": ["Time", "Distance", "Velocity", "Intensity"], "answer": "Distance" },
    { "subject": "Biology", "question": "Who proposed the Five-Kingdom Classification?", "options": ["Linnaeus", "Whittaker", "Aristotle", "Mendel"], "answer": "Whittaker" },
    { "subject": "Chemistry", "question": "Which is the most electronegative element?", "options": ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], "answer": "Fluorine" },
    { "subject": "Physics", "question": "What is the unit of Capacitance?", "options": ["Farad", "Coulomb", "Volt", "Ohm"], "answer": "Farad" },
    { "subject": "Biology", "question": "Which organelle is known as the Power House of the cell?", "options": ["Ribosome", "Mitochondria", "Lysosome", "Golgi Body"], "answer": "Mitochondria" }
    // Yahan aap apne baki 100 sawal isi format mein jod sakte hain
];

let filteredQuestions = allQuestions;
let currentIndex = 0;

// --- 2. DISPLAY FUNCTION ---
function displayQuestion() {
    const qText = document.getElementById('questionText');
    const optCont = document.getElementById('optionsContainer');
    const qCount = document.getElementById('q-counter');

    if (filteredQuestions.length > 0) {
        const q = filteredQuestions[currentIndex];
        qText.innerText = q.question;
        qCount.innerText = `Q: ${currentIndex + 1} / ${filteredQuestions.length}`;

        optCont.innerHTML = "";
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.className = "option-btn";
            btn.onclick = () => {
                if(opt === q.answer) btn.style.background = "#2ed573";
                else btn.style.background = "#ff4757";
                btn.style.color = "white";
            };
            optCont.appendChild(btn);
        });
    }
}

// --- 3. FILTER & NAVIGATION ---
window.filterQuestions = function(subject) {
    if (subject === 'All') filteredQuestions = allQuestions;
    else filteredQuestions = allQuestions.filter(q => q.subject === subject);
    currentIndex = 0;
    displayQuestion();
};

document.getElementById("next-btn").onclick = () => {
    if (currentIndex < filteredQuestions.length - 1) {
        currentIndex++;
        displayQuestion();
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuestion();
    }
};

// Start
displayQuestion();











