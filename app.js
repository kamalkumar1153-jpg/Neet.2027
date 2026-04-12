function solveDoubt() {
    const inputField = document.getElementById('ai-input');
    const output = document.getElementById('ai-output');
    const query = inputField.value.trim();

    if (query === "") {
        output.innerHTML = "<span style='color: #ef4444;'>Pehle apna sawal yahan likhein!</span>";
        return;
    }

    // AI Thinking Effect
    output.innerHTML = "<b>AI Professor:</b> Analyzing your doubt...";
    output.style.color = "#38bdf8";

    setTimeout(() => {
        // 1. Pehle app ke andar ek expert tip dikhayega
        let tip = "NCERT Focus Tip: ";
        if (query.toLowerCase().includes("physics")) {
            tip += "Numericals mein hamesha units convert karein (m/s, Kg, etc).";
        } else if (query.toLowerCase().includes("chem")) {
            tip += "Organic reactions mein reagents aur catalysts par dhyan dein.";
        } else {
            tip += "Biology mein diagrams ki labeling hamesha dhyan se dekhein.";
        }

        output.innerHTML = `<b>AI Professor:</b> ${tip}<br><br>
        <button class="primary-btn" style="background:#22c55e; color:white;" 
        onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(query + ' NEET NCERT solution')}', '_blank')">
        🔍 View Video & Text Solution
        </button>`;
        
        // Celebration effect
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    }, 1200);
}


