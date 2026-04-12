let currentQ = 0;
let quizData = [];

// 1. Sawal load karne ka function
async function startTest() {
    try {
        const res = await fetch('questions.json');
        quizData = await res.json();
        
        // UI badalne ke liye
        document.getElementById('q-text').style.textAlign = "left";
        showQuestion();
    } catch (e) {
        alert("Sawal load nahi ho paye! Check questions.json file.");
    }
}

// 2. Sawal dikhane ka function
function showQuestion() {
    const container = document.getElementById('options-container');
    const questionText = document.getElementById('q-text');
    const startBtn = document.querySelector('.primary-btn');

    if (currentQ < quizData.length) {
        startBtn.style.display = "none"; // Start button chhupao
        questionText.innerText = `Q${currentQ + 1}: ${quizData[currentQ].q}`;
        
        container.innerHTML = ""; // Purane options hatao
        quizData[currentQ].options.forEach((opt, index) => {
            container.innerHTML += `<button class="option-btn" onclick="checkAnswer(${index})">${opt}</button>`;
        });
    } else {
        questionText.innerText = "Test Complete! 🎉";
        container.innerHTML = `<button class="primary-btn" onclick="location.reload()">Restart Test</button>`;
        confetti(); // Jeetne ki khushi mein!
    }
}

// 3. Answer check karne ka function
function checkAnswer(idx) {
    if (idx === quizData[currentQ].correct) {
        alert("Sahi Jawab! +4");
    } else {
        alert("Galat! -1");
    }
    currentQ++;
    showQuestion();
}


