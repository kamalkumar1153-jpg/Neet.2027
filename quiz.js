let currentQuestions = [];
let currentIndex = 0;
let score = 0; // सही जवाबों की गिनती

// 1. डेटा लोड करना
function loadSubjectData(sub) {
    score = 0; // स्कोर रिसेट करें
    db.ref("questions/" + sub).once("value", snap => {
        let data = snap.val();
        if (!data) {
            document.getElementById("question-box").innerHTML = "❌ No questions yet!";
            return;
        }
        // रैंडम सवाल सेट करना
        currentQuestions = Object.values(data).sort(() => Math.random() - 0.5);
        currentIndex = 0;
        showQuestion();
    });
}

// 2. सवाल दिखाना
function showQuestion() {
    let q = currentQuestions[currentIndex];
    let levelColor = q.level === "Easy" ? "#2ecc71" : q.level === "Medium" ? "#f39c12" : "#e74c3c";
    
    let html = `
        <div style="background:${levelColor}; color:white; display:inline-block; padding:2px 10px; border-radius:5px; font-size:12px; margin-bottom:10px;">${q.level}</div>
        <p class="q-text"><b>Q${currentIndex + 1}:</b> ${q.q}</p>
        ${q.img ? `<img src="${q.img}" style="width:100%; border-radius:15px; margin-bottom:15px;">` : ""}
        <div id="options">
            ${q.options.map((opt, i) => `
                <button class="opt-btn" onclick="checkAnswer(${i + 1}, ${q.answer}, this)">
                    ${opt}
                </button>
            `).join('')}
        </div>
    `;
    document.getElementById("question-box").innerHTML = html;
}

// 3. जवाब चेक करना
function checkAnswer(selected, correct, btn) {
    let buttons = document.querySelectorAll(".opt-btn");
    buttons.forEach(b => b.disabled = true); // दोबारा क्लिक न हो

    if (selected === correct) {
        btn.style.background = "#d4edda";
        btn.style.borderColor = "#28a745";
        score++; // स्कोर बढ़ाएं
    } else {
        btn.style.background = "#f8d7da";
        btn.style.borderColor = "#dc3545";
        // सही जवाब को ग्रीन हाईलाइट करें
        buttons[correct - 1].style.background = "#d4edda";
        buttons[correct - 1].style.borderColor = "#28a745";
    }
}

// 4. अगला सवाल या रिजल्ट
function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

// 5. रिजल्ट दिखाना
function showResult() {
    let total = currentQuestions.length;
    let percentage = (score / total) * 100;
    let message = percentage >= 80 ? "शानदार तैयारी! 🎉" : percentage >= 50 ? "अच्छा प्रयास! 👍" : "और मेहनत की ज़रूरत है। ✍️";

    let resultHtml = `
        <div style="text-align:center; padding:20px;">
            <h1 style="font-size:3rem;">${score}/${total}</h1>
            <h3>${message}</h3>
            <p style="margin-top:10px;">आपका स्कोर: ${percentage.toFixed(1)}%</p>
            <button onclick="location.reload()" style="margin-top:20px; padding:15px 30px; background:#2c3e50; color:white; border:none; border-radius:10px; font-weight:bold;">Menu पर वापस जाएं</button>
        </div>
    `;
    document.getElementById("quiz-area").innerHTML = resultHtml;
}


