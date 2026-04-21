const bank = [
    // PHYSICS
    {s:"Physics", c:"Electrostatics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", c:"Optics", q:"Speed of light is minimum in?", o:["Air","Glass","Water","Diamond"], a:"Diamond"},
    {s:"Physics", c:"Semiconductors", q:"Width of depletion layer in reverse bias?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    {s:"Physics", c:"Logic Gates", q:"Which is a Universal Gate?", o:["AND","OR","NOR","XOR"], a:"NOR"},
    // CHEMISTRY
    {s:"Chemistry", c:"Solid State", q:"Atoms in simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", c:"Solutions", q:"pH of human blood is approx?", o:["7.4","6.0","8.0","7.0"], a:"7.4"},
    {s:"Chemistry", c:"Biomolecules", q:"Vitamin containing Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    // BIOLOGY
    {s:"Biology", c:"Genetics", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", c:"Cell Biology", q:"Powerhouse of the cell?", o:["Mitochondria","Nucleus","Golgi","Ribosome"], a:"Mitochondria"}
    // ... Aap baaki questions yahan add kar sakte hain
];

let testSet = [], idx = 0, score = 0, userAnswers = [];

function liveSearch() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const btn = document.getElementById('start-btn');
    
    const matches = bank.filter(x => 
        x.q.toLowerCase().includes(input) || 
        x.c.toLowerCase().includes(input)
    );

    if(input.length > 0) {
        btn.innerText = `🔍 Practice ${matches.length} Questions Found`;
    } else {
        btn.innerText = `🚀 Start Full Test (${bank.length} Qs)`;
    }
}

function start(mode) {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Step 1: Filter by Subject
    let filtered = (mode === 'All') ? bank : bank.filter(x => x.s === mode);
    
    // Step 2: Filter by Search
    if (searchTerm) {
        filtered = filtered.filter(x => 
            x.q.toLowerCase().includes(searchTerm) || 
            x.c.toLowerCase().includes(searchTerm)
        );
    }

    if (filtered.length === 0) {
        alert("Betiya, is topic par koi sawal nahi mila!");
        return;
    }

    // Reset and Start
    testSet = filtered.sort(() => 0.5 - Math.random());
    idx = 0; score = 0; userAnswers = [];
    
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    showQ();
}

function showQ() {
    if(idx >= testSet.length) { showFinal(); return; }
    
    const q = testSet[idx];
    document.getElementById('sub-tag').innerText = q.s.toUpperCase() + " | " + q.c;
    document.getElementById('counter').innerText = (idx + 1) + " / " + testSet.length;
    document.getElementById('live-score').innerText = score.toFixed(2);
    document.getElementById('question').innerText = q.q;
    document.getElementById('progress-bar').style.width = ((idx / testSet.length) * 100) + "%";
    
    const box = document.getElementById('options-box');
    box.innerHTML = "";
    
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.className = "opt";
        b.style.display = "block";
        b.style.width = "100%";
        b.style.margin = "10px 0";
        b.style.padding = "12px";
        b.innerText = opt;
        b.onclick = () => {
            userAnswers.push({ q: q.q, sel: opt, ans: q.a, ok: (opt === q.a), chapter: q.c, subject: q.s });
            if(opt === q.a) score += 1; else score -= 0.25;
            idx++; 
            showQ();
        };
        box.appendChild(b);
    });
}

function showFinal() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = score.toFixed(2);
    
    let reportHTML = "<h3>📊 Analysis:</h3>";
    let mistakes = userAnswers.filter(ans => !ans.ok);
    
    let chapterStats = {};
    mistakes.forEach(m => {
        let key = `${m.subject}: ${m.chapter}`;
        chapterStats[key] = (chapterStats[key] || 0) + 1;
    });

    for (let ch in chapterStats) {
        reportHTML += `<div style="background:#fff3cd; padding:10px; margin:5px 0; border-left:5px solid #ffc107; text-align:left;">
            ⚠️ <b>${ch}</b>: ${chapterStats[ch]} galtiyan.
        </div>`;
    }

    if(mistakes.length === 0) reportHTML += "<p style='color:green;'>Perfect Score! 🎉</p>";
    
    document.getElementById('review-box').innerHTML = reportHTML;
}





















    

