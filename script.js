const bank = [
    // PHYSICS
    {s:"Physics", c:"Electrostatics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", c:"Optics", q:"The sky appears blue due to?", o:["Refraction","Scattering","Interference","Diffraction"], a:"Scattering"},
    {s:"Physics", c:"Semiconductors", q:"Width of depletion layer in reverse bias?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    // CHEMISTRY
    {s:"Chemistry", c:"Solids", q:"Number of atoms in a simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", c:"Biomolecules", q:"Vitamin containing Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    // BIOLOGY
    {s:"Biology", c:"Genetics", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"}
    // (Aap apne baaki 120 sawal isi tarah add kar sakte hain)
];

let testSet = [], idx = 0, score = 0, userAnswers = [];

function liveSearch() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let matches = bank.filter(x => x.q.toLowerCase().includes(input) || x.c.toLowerCase().includes(input));
    let btn = document.getElementById('start-btn');
    if(input.length > 0) {
        btn.innerHTML = `🔍 Practice ${matches.length} Questions Found<br><small>Click to start</small>`;
    } else {
        btn.innerHTML = `🚀 Start Full Test (120 Qs)<br><small>Improve your rank</small>`;
    }
}

function start(mode) {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    let filtered = mode === 'All' ? bank : bank.filter(x => x.s === mode);
    
    if (searchTerm) {
        filtered = filtered.filter(x => x.q.toLowerCase().includes(searchTerm) || x.c.toLowerCase().includes(searchTerm));
    }

    if (filtered.length === 0) {
        alert("Oops! Is topic par koi sawal nahi mila.");
        return;
    }

    testSet = filtered.sort(() => 0.5 - Math.random());
    idx = 0; score = 0; userAnswers = [];
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    showQ();
}

function showQ() {
    if(idx >= testSet.length) { showFinal(); return; }
    const q = testSet[idx];
    document.getElementById('sub-tag').innerText = q.s.toUpperCase() + " | " + q.c;
    document.getElementById('counter').innerText = (idx + 1) + " / " + testSet.length;
    document.getElementById('question').innerText = q.q;
    
    const box = document.getElementById('options-box');
    box.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.className = "opt";
        b.innerText = opt;
        b.onclick = () => {
            userAnswers.push({ q: q.q, sel: opt, ans: q.a, ok: (opt === q.a), chapter: q.c });
            if(opt === q.a) score += 1; else score -= 0.25;
            idx++; showQ();
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
    
    // Chapter analysis
    let chapters = {};
    mistakes.forEach(m => { chapters[m.chapter] = (chapters[m.chapter] || 0) + 1; });

    for (let ch in chapters) {
        reportHTML += `<div style="background:#fff3cd; padding:10px; margin:5px 0; border-radius:10px; text-align:left;">
            ⚠️ <b>${ch}</b>: ${chapters[ch]} galtiyan. Isse phir se padhein!
        </div>`;
    }

    if(mistakes.length > 0) {
        reportHTML += "<h4>❌ Mistakes:</h4>";
        mistakes.forEach(m => {
            reportHTML += `<div class="mistake-card"><b>Q:</b> ${m.q}<br><span style="color:red">Your: ${m.sel}</span> | <span style="color:green">Right: ${m.ans}</span></div>`;
        });
    } else {
        reportHTML += "<p style='color:green;'>Shaabaash! Ek bhi galti nahi ki. ✅</p>";
    }

    document.getElementById('review-box').innerHTML = reportHTML;
}






















    

