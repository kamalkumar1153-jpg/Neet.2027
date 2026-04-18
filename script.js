// --- CONFIGURATION ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();
let allQuestions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;

// --- DOM ELEMENTS ---
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const qCounter = document.getElementById("q-counter");
const subjectLabel = document.getElementById("subject-label");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const countdownEl = document.getElementById("countdown");

// --- 1. COUNTDOWN TIMER ---
function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.innerText = "Exam Day!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    countdownEl.innerText = `${days}d ${hours}h ${mins}m Baaki`;
}
setInterval(updateTimer, 60000);
updateTimer();

// --- 2. LOAD DATA ---
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        allQuestions = data;
        // Puraani progress load karna
        const savedIndex = localStorage.getItem('rbse_last_idx');
        const savedSub = localStorage.getItem('rbse_last_sub') || 'All';
        
        // Filter apply karna
        filterQuestions(savedSub, document.querySelector(`button[onclick*="'${savedSub}'"]`));
        
        if(savedIndex && savedIndex < filteredQuestions.length) {
            currentQuestionIndex = parseInt(savedIndex);
        }
        displayQuestion();
    })
    .catch(err => {
        questionText.innerText = "Error: questions.json file nahi mili!";
        console.error(err);
    });

// --- 3. FILTER LOGIC ---
window.filterQuestions = function(subject, btnElement) {
    // UI Update: Active button color
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    // Data Filter
    if (subject === 'All') {
        filteredQuestions = allQuestions;
        subjectLabel.innerText = "All Subjects";
    } else {
        filteredQuestions = allQuestions.filter(q => q.subject === subject);
        subjectLabel.innerText = subject;
    }

    currentQuestionIndex = 0;
    localStorage.setItem('rbse_last_sub', subject);
    displayQuestion();
};

// --- 4. DISPLAY QUESTION ---
function displayQuestion() {
    if (filteredQuestions.length === 0) {
        questionText.innerText = "Is subject mein koi sawal nahi mila.";
        optionsContainer.innerHTML = "";
        qCounter.innerText = "Q: 0 / 0";
        return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    questionText.innerText = q.question;
    qCounter.innerText = `Q: ${currentQuestionIndex + 1} / ${filteredQuestions.length}`;
    
    // Save progress
    localStorage.setItem('rbse_last_idx', currentQuestionIndex);

    // Options create karna
    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(btn, opt, q.answer);
        optionsContainer.appendChild(btn);
    });

    // Button states
    prevBtn.disabled = (currentQuestionIndex === 0);
    nextBtn.disabled = (currentQuestionIndex === filteredQuestions.length - 1);
}

// --- 5. ANSWER CHECKING ---
function checkAnswer(btn, selected, correct) {
    // Disable all options after clicking
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = "none");

    if (selected === correct) {
        btn.style.background = "#2ed573";
        btn.style.color = "white";
        btn.style.borderColor = "#2ed573";
    } else {
        btn.style.background = "#ff4757";
        btn.style.color = "white";
        btn.style.borderColor = "#ff4757";
        
        // Sahi jawab highlight karna
        allBtns.forEach(b => {
            if(b.innerText === correct) {
                b.style.background = "#2ed57355";
                b.style.borderColor = "#2ed573";
            }
        });
    }
}

// --- 6. NAVIGATION ---
nextBtn.onclick = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
};

prevBtn.onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
};
