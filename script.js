const appData = {
    notes: {
        'Physics': [{t: 'Electrostatics', c: 'Electric field inside a conductor is zero.'}],
        'Chemistry': [{t: 'Solutions', c: 'Molarity = Moles of solute / Volume of solution (L).'}]
    },
    mcqs: [
        {s: "Physics", q: "What is the unit of resistance?", o: ["Ohm", "Volt", "Ampere", "Watt"], a: "Ohm"},
        {s: "Chemistry", q: "Symbol for Silver?", o: ["Ag", "Au", "Si", "Fe"], a: "Ag"}
    ]
};

console.log("Script loaded and ready!");

function openPage(id) {
    const page = document.getElementById(id);
    if(page) {
        document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
        page.style.display = 'block';
    }
}

function closePage(id) {
    const page = document.getElementById(id);
    if(page) page.style.display = 'none';
}

function openNotes(subject) {
    openPage('notes-page');
    const title = document.getElementById('notes-title');
    const content = document.getElementById('notes-content');
    title.innerText = subject + " Notes";
    content.innerHTML = "";
    
    let data = (subject === 'All') ? [...appData.notes.Physics, ...appData.notes.Chemistry] : (appData.notes[subject] || []);
    data.forEach(n => {
        content.innerHTML += `
            <div style="background:#f0f7ff; padding:15px; border-radius:15px; margin-bottom:10px; border-left: 5px solid #2575fc;">
                <b>${n.t}</b><br><small>${n.c}</small>
            </div>`;
    });
}

let currentQ = 0, score = 0, activeQuiz = [];
function startTest(subject) {
    activeQuiz = (subject === 'All') ? appData.mcqs : appData.mcqs.filter(x => x.s === subject);
    if(activeQuiz.length === 0) return alert("Coming soon!");
    currentQ = 0; score = 0;
    openPage('quiz-page');
    showQuestion();
}

function showQuestion() {
    if(currentQ >= activeQuiz.length) {
        alert("Test Complete! Score: " + score + "/" + activeQuiz.length);
        closePage('quiz-page');
        return;
    }
    const q = activeQuiz[currentQ];
    document.getElementById('q-text').innerText = q.q;
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.style = "width:100%; padding:15px; margin-bottom:10px; border-radius:12px; border:1px solid #ddd; background:white; text-align:left;";
        b.innerText = opt;
        b.onclick = () => { if(opt === q.a) score++; currentQ++; showQuestion(); };
        list.appendChild(b);
    });
}























    

