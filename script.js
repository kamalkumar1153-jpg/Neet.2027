// --- 1. SAWALON KA DATA (Ab seedha yahan hai) ---
const allQuestions = [
    { "subject": "Biology", "question": "Who proposed the Five-Kingdom Classification?", "options": ["Linnaeus", "Whittaker", "Aristotle", "Mendel"], "answer": "Whittaker" },
    { "subject": "Physics", "question": "Light year is a unit of which physical quantity?", "options": ["Time", "Distance", "Velocity", "Intensity"], "answer": "Distance" },
    { "subject": "Chemistry", "question": "Which is the most electronegative element?", "options": ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], "answer": "Fluorine" },
    { "subject": "Biology", "question": "Which organelle is known as the Power House of the cell?", "options": ["Ribosome", "Mitochondria", "Lysosome", "Golgi Body"], "answer": "Mitochondria" },
    { "subject": "Physics", "question": "What is the dimension of Surface Tension?", "options": ["M1 L1 T-2", "M1 L0 T-2", "M1 L2 T-1", "M0 L1 T-2"], "answer": "M1 L0 T-2" }
];

let filteredQuestions = allQuestions;
let currentQuestionIndex = 0;

// --- 2. FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    if (subject === 'All') {
        filteredQuestions = allQuestions;
        document.getElementById("subject-label").innerText = "All Subjects";
    } else {
        filteredQuestions = allQuestions.filter(q => q.subject === subject);
        document.getElementById("subject-label").innerText = subject;
    }

    currentQuestionIndex = 0;
    displayQuestion();
};

// --- 3. DISPLAY LOGIC ---
function displayQuestion() {
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const qCounter = document.getElementById('q-counter');

    if (filteredQuestions.length > 0) {
        const q = filteredQuestions[currentQuestionIndex];
        questionText.innerText = q.question;
        qCounter.innerText = `Q: ${currentQuestionIndex + 1} / ${filteredQuestions.length}`;

        optionsContainer.innerHTML = "";
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.classList.add("option-btn");
            btn.onclick = () => checkAnswer(btn, opt, q.answer);
            optionsContainer.appendChild(btn);
        });

        document.getElementById("prev-btn").disabled = (currentQuestionIndex === 0);
        document.getElementById("next-btn").disabled = (currentQuestionIndex === filteredQuestions.length - 1);
    }
}

// --- 4. ANSWER CHECK ---
function checkAnswer(btn, selected, correct) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = "none");

    if (selected === correct) {
        btn.style.background = "#2ed573";
        btn.style.color = "white";
    } else {
        btn.style.background = "#ff4757";
        btn.style.color = "white";
        allBtns.forEach(b => {
            if(b.innerText === correct) b.style.border = "2px solid #2ed573";
        });
    }
}

// --- 5. NAVIGATION ---
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
};

// App start hote hi pehla sawal dikhao
displayQuestion();








