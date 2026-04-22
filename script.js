const appData = {
    notes: {
        'Physics': [
            {t: 'Electrostatics', c: 'Coulomb Force: F = kq1q2/r². Electric field is vector.'},
            {t: 'Optics', c: 'Mirror Formula: 1/f = 1/v + 1/u.'}
        ],
        'Chemistry': [
            {t: 'Solutions', c: 'Molarity = n/V. Raoult Law: P = P0 * X.'}
        ]
    },
    mcqs: [
        {s: "Physics", q: "Unit of Electric Flux?", o: ["V-m", "N/C", "W", "T"], a: "V-m"},
        {s: "Chemistry", q: "Hybridization in Methane?", o: ["sp3", "sp2", "sp", "dsp2"], a: "sp3"}
    ]
};

console.log("Vault Engine Ready!");

function openPage(id) {
    const p = document.getElementById(id);
    if(p) {
        document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
        p.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Stop scrolling background
    }
}

function closePage(id) {
    const p = document.getElementById(id);
    if(p) {
        p.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openNotes(subject) {
    openPage('notes-page');
    const title = document.getElementById('notes-title');
    const content = document.getElementById('notes-content');
    title.innerText = subject + " Notes";
    content.innerHTML = "";
    
    let data = (subject === 'All') ? [...appData.notes.Physics, ...appData.notes.Chemistry] : (appData.notes[subject] || []);
    
    if(data.length === 0) content.innerHTML = "<p>Data jald hi update hoga Bitiya!</p>";

    data.forEach(n => {
        content.innerHTML += `
            <div class="note-item">
                <h4 style="margin:0 0 5px 0; color:#2575fc">${n.t}</h4>
                <p style="margin:0; font-size:14px; line-height:1.4;">${n.c}</p>
            </div>`;
    });
}

let currentQ = 0, score = 0, activeQuiz = [];
function startTest(subject) {
    activeQuiz = (subject === 'All') ? appData.mcqs : appData.mcqs.filter(x => x.s === subject);
    if(activeQuiz.length === 0) return alert("Tests are coming soon!");
    currentQ = 0; score = 0;
    openPage('quiz-page');
    showQuestion();
}

function showQuestion() {
    if(currentQ >= activeQuiz.length) {
        alert("Awesome! Score: " + score + "/" + activeQuiz.length);
        closePage('quiz-page');
        return;
    }
    const q = activeQuiz[currentQ];
    document.getElementById('q-text').innerText = q.q;
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.style = "width:100%; padding:16px; margin-bottom:12px; border-radius:16px; border:1.5px solid #eee; background:white; text-align:left; font-size:15px; font-family:inherit;";
        b.innerText = opt;
        b.onclick = () => { if(opt === q.a) score++; currentQ++; showQuestion(); };
        list.appendChild(b);
    });
}
























    

