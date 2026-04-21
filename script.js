const bank = [
    // PHYSICS
    {s:"Physics", c:"Electrostatics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", c:"Electrostatics", q:"Two charges +1μC and +5μC are separated. Ratio of forces is?", o:["1:1","1:5","5:1","1:25"], a:"1:1"},
    {s:"Physics", c:"Capacitance", q:"If distance between plates is doubled, capacitance?", o:["Doubles","Becomes half","Remains same","Quintuples"], a:"Becomes half"},
    {s:"Physics", c:"Current Electricity", q:"The resistivity of a wire depends on its?", o:["Length","Area","Material","Shape"], a:"Material"},
    {s:"Physics", c:"Current Electricity", q:"A wire of resistance R is stretched to 2L. New resistance is?", o:["2R","4R","R/2","R/4"], a:"4R"},
    {s:"Physics", c:"Magnetism", q:"Magnetic field at the center of circular loop is?", o:["μ₀I/2r","μ₀I/r","2μ₀I/r","Zero"], a:"μ₀I/2r"},
    {s:"Physics", c:"EM Waves", q:"Which has the shortest wavelength?", o:["Gamma rays","X-rays","UV rays","Microwaves"], a:"Gamma rays"},
    {s:"Physics", c:"AC Circuits", q:"Phase difference between I and V in pure inductor is?", o:["0°","90°","180°","45°"], a:"90°"},
    {s:"Physics", c:"EMI", q:"Working of transformer is based on?", o:["Self Induction","Mutual Induction","Eddy Currents","None"], a:"Mutual Induction"},
    {s:"Physics", c:"Ray Optics", q:"A lens has power +2.0 D. Its focal length is?", o:["50 cm","20 cm","100 cm","25 cm"], a:"50 cm"},
    {s:"Physics", c:"Ray Optics", q:"Speed of light is minimum in?", o:["Air","Glass","Water","Diamond"], a:"Diamond"},
    {s:"Physics", c:"Wave Optics", q:"Sky appears blue due to?", o:["Refraction","Scattering","Interference","Diffraction"], a:"Scattering"},
    {s:"Physics", c:"Wave Optics", q:"According to Huygens, light is a?", o:["Wave","Particle","Ray","None"], a:"Wave"},
    {s:"Physics", c:"Dual Nature", q:"Photoelectric effect proves?", o:["Wave nature","Particle nature","Both","None"], a:"Particle nature"},
    {s:"Physics", c:"Atoms", q:"Energy of electron in nth orbit is proportional to?", o:["n","n²","1/n²","1/n"], a:"1/n²"},
    {s:"Physics", c:"Nuclei", q:"Mass-Energy equivalence relation is?", o:["E=mc²","E=mc","E=m²c","E=hν"], a:"E=mc²"},
    {s:"Physics", c:"Semiconductors", q:"In P-type, majority carriers are?", o:["Electrons","Holes","Neutrons","Protons"], a:"Holes"},
    {s:"Physics", c:"Semiconductors", q:"Width of depletion layer in reverse bias?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    {s:"Physics", c:"Logic Gates", q:"Gate that gives 1 only when both inputs are 1?", o:["AND","OR","NOT","NAND"], a:"AND"},
    {s:"Physics", c:"Logic Gates", q:"Which is a Universal Gate?", o:["AND","OR","NOR","XOR"], a:"NOR"},

    // CHEMISTRY
    {s:"Chemistry", c:"Solid State", q:"Atoms in simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", c:"Solid State", q:"Defect that decreases crystal density?", o:["Schottky","Frenkel","Metal excess","None"], a:"Schottky"},
    {s:"Chemistry", c:"Kinetics", q:"Unit of rate constant for 1st order?", o:["s⁻¹","mol L⁻¹ s⁻¹","L mol⁻¹ s⁻¹","None"], a:"s⁻¹"},
    {s:"Chemistry", c:"Solutions", q:"Colligative properties depend on?", o:["Nature","Number of particles","Solvent","None"], a:"Number of particles"},
    {s:"Chemistry", c:"Solutions", q:"Molarity of pure water is?", o:["55.5","18","100","1"], a:"55.5"},
    {s:"Chemistry", c:"Electrochemistry", q:"Standard reduction potential of H2 is?", o:["0.0 V","1.0 V","-1.0 V","0.5 V"], a:"0.0 V"},
    {s:"Chemistry", c:"Metallurgy", q:"Which catalyst used in Haber's process?", o:["Iron","Nickel","Platinum","Copper"], a:"Iron"},
    {s:"Chemistry", c:"p-Block", q:"Strongest acid among following is?", o:["HClO4","HClO3","HClO2","HClO"], a:"HClO4"},
    {s:"Chemistry", c:"Biomolecules", q:"Vitamin containing Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    {s:"Chemistry", c:"Polymers", q:"Natural rubber is a polymer of?", o:["Isoprene","Ethylene","Styrene","Neoprene"], a:"Isoprene"},

    // BIOLOGY
    {s:"Biology", c:"Cell Biology", q:"Powerhouse of the cell?", o:["Mitochondria","Nucleus","Golgi","Ribosome"], a:"Mitochondria"},
    {s:"Biology", c:"Genetics", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", c:"Human Physiology", q:"Insulin is secreted by?", o:["Pancreas","Liver","Kidney","Heart"], a:"Pancreas"},
    {s:"Biology", c:"Genetics", q:"DNA Double Helix model by?", o:["Watson & Crick","Mendel","Darwin","None"], a:"Watson & Crick"},
    {s:"Biology", c:"Plant Physiology", q:"Tissue transporting water in plants?", o:["Xylem","Phloem","Cortex","None"], a:"Xylem"}
    // (Aap isi format mein baaki 120 Qs bhi chapter wise add kar sakte hain)
];

let testSet = [], idx = 0, score = 0, useNeg = false;
let userAnswers = [];

function start(mode) {
    useNeg = document.getElementById('neg-toggle').checked;
    testSet = mode === 'All' ? bank : bank.filter(x => x.s === mode);
    testSet = testSet.sort(() => 0.5 - Math.random());
    idx = 0; score = 0; userAnswers = [];
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    showQ();
}

function showQ() {
    if(idx >= testSet.length) { showFinal(); return; }
    const q = testSet[idx];
    document.getElementById('sub-tag').innerText = q.s.toUpperCase();
    document.getElementById('counter').innerText = (idx + 1) + " / " + testSet.length;
    document.getElementById('live-score').innerText = score.toFixed(2);
    document.getElementById('question').innerText = q.q;
    document.getElementById('progress-bar').style.width = ((idx / testSet.length) * 100) + "%";
    
    const box = document.getElementById('options-box');
    box.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.className = "opt";
        b.innerText = opt;
        b.onclick = () => {
            userAnswers.push({ q: q.q, sel: opt, ans: q.a, ok: (opt === q.a), chapter: q.c, subject: q.s });
            if(opt === q.a) score += 1;
            else if(useNeg) score -= 0.25;
            idx++; showQ();
        };
        box.appendChild(b);
    });
}

function showFinal() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = score.toFixed(2);
    
    let reportHTML = "<h3>📊 Weak Chapters (Analysis):</h3>";
    let mistakes = userAnswers.filter(ans => !ans.ok);
    
    // logic to count mistakes per chapter
    let chapterStats = {};
    mistakes.forEach(m => {
        let key = `${m.subject}: ${m.chapter}`;
        chapterStats[key] = (chapterStats[key] || 0) + 1;
    });

    if (Object.keys(chapterStats).length > 0) {
        for (let ch in chapterStats) {
            reportHTML += `<div style="background:#fff3cd; padding:10px; border-radius:10px; margin-bottom:8px; border-left:5px solid #ffc107;">
                📍 <b>${ch}</b>: ${chapterStats[ch]} galtiyan. Is par focus karein!
            </div>`;
        }
    } else {
        reportHTML += "<p style='color:green; font-weight:bold;'>Sabaash! Sab chapters perfect hain. ✅</p>";
    }

    reportHTML += "<hr><h3>❌ Detailed Review:</h3>";
    mistakes.forEach(m => {
        reportHTML += `<div class="mistake-card">
            <b>[${m.chapter}]</b><br>
            <b>Q:</b> ${m.q}<br>
            <span style="color:red">❌ Yours: ${m.sel}</span> | <span style="color:green">✅ Correct: ${m.ans}</span>
        </div>`;
    });
    document.getElementById('review-box').innerHTML = reportHTML;
}

















    

