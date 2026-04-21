const bank = [
    // --- PHYSICS (40 QUESTIONS) ---
    {s:"Physics", c:"Electrostatics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", c:"Electrostatics", q:"Two charges +1μC and +5μC are separated. Ratio of forces is?", o:["1:1","1:5","5:1","1:25"], a:"1:1"},
    {s:"Physics", c:"Electrostatics", q:"Unit of Electric Flux is?", o:["Weber","Volt-metre","Tesla","Newton"], a:"Volt-metre"},
    {s:"Physics", c:"Capacitance", q:"If distance between plates is doubled, capacitance?", o:["Doubles","Becomes half","Remains same","Quintuples"], a:"Becomes half"},
    {s:"Physics", c:"Capacitance", q:"Energy stored in a capacitor is given by?", o:["1/2 CV²","CV","1/2 C²V","QV"], a:"1/2 CV²"},
    {s:"Physics", c:"Current Electricity", q:"The resistivity of a wire depends on its?", o:["Length","Area","Material","Shape"], a:"Material"},
    {s:"Physics", c:"Current Electricity", q:"A wire of resistance R is stretched to 2L. New resistance is?", o:["2R","4R","R/2","R/4"], a:"4R"},
    {s:"Physics", c:"Current Electricity", q:"Ohm's law is valid for?", o:["Metals","Semiconductors","Vaccum tubes","Diodes"], a:"Metals"},
    {s:"Physics", c:"Current Electricity", q:"The drift velocity of electrons is of the order of?", o:["10⁻⁴ m/s","10² m/s","10⁸ m/s","Zero"], a:"10⁻⁴ m/s"},
    {s:"Physics", c:"Magnetism", q:"Magnetic field at the center of circular loop is?", o:["μ₀I/2r","μ₀I/r","2μ₀I/r","Zero"], a:"μ₀I/2r"},
    {s:"Physics", c:"Magnetism", q:"The unit of Magnetic Moment is?", o:["A/m²","Am²","Tesla-m","Weber/m"], a:"Am²"},
    {s:"Physics", c:"Magnetism", q:"Resistance of an ideal ammeter is?", o:["Zero","Infinite","100 Ohm","1 Ohm"], a:"Zero"},
    {s:"Physics", c:"Magnetism", q:"The Lorentz force formula is?", o:["F=q(E + v×B)","F=qvB","F=qE","None"], a:"F=q(E + v×B)"},
    {s:"Physics", c:"EMI", q:"Working of transformer is based on?", o:["Self Induction","Mutual Induction","Eddy Currents","None"], a:"Mutual Induction"},
    {s:"Physics", c:"EMI", q:"Self inductance of a coil is 2H. If current changes at 1A/s, EMF is?", o:["2V","1V","0.5V","4V"], a:"2V"},
    {s:"Physics", c:"EMI", q:"Lenz's law is a consequence of law of conservation of?", o:["Energy","Charge","Mass","Momentum"], a:"Energy"},
    {s:"Physics", c:"AC Circuits", q:"Phase difference between I and V in pure inductor is?", o:["0°","90°","180°","45°"], a:"90°"},
    {s:"Physics", c:"AC Circuits", q:"Standard frequency of AC in India is?", o:["50 Hz","60 Hz","100 Hz","220 Hz"], a:"50 Hz"},
    {s:"Physics", c:"AC Circuits", q:"The power factor of a pure resistive circuit is?", o:["1","0","0.5","None"], a:"1"},
    {s:"Physics", c:"EM Waves", q:"Which has the shortest wavelength?", o:["Gamma rays","X-rays","UV rays","Microwaves"], a:"Gamma rays"},
    {s:"Physics", c:"EM Waves", q:"Electromagnetic waves are produced by?", o:["Accelerated charge","Static charge","Moving charge","None"], a:"Accelerated charge"},
    {s:"Physics", c:"Ray Optics", q:"A lens has power +2.0 D. Its focal length is?", o:["50 cm","20 cm","100 cm","25 cm"], a:"50 cm"},
    {s:"Physics", c:"Ray Optics", q:"Speed of light is minimum in?", o:["Air","Glass","Water","Diamond"], a:"Diamond"},
    {s:"Physics", c:"Ray Optics", q:"Critical angle for total internal reflection depends on?", o:["Refractive index","Color of light","Both","None"], a:"Both"},
    {s:"Physics", c:"Ray Optics", q:"For a normal eye, the least distance of distinct vision is?", o:["25 cm","50 cm","Infinity","10 cm"], a:"25 cm"},
    {s:"Physics", c:"Wave Optics", q:"Sky appears blue due to?", o:["Refraction","Scattering","Interference","Diffraction"], a:"Scattering"},
    {s:"Physics", c:"Wave Optics", q:"According to Huygens, light is a?", o:["Wave","Particle","Ray","None"], a:"Wave"},
    {s:"Physics", c:"Wave Optics", q:"Which phenomenon shows light is transverse?", o:["Interference","Polarization","Reflection","Refraction"], a:"Polarization"},
    {s:"Physics", c:"Dual Nature", q:"Photoelectric effect proves?", o:["Wave nature","Particle nature","Both","None"], a:"Particle nature"},
    {s:"Physics", c:"Dual Nature", q:"Threshold frequency depends on?", o:["Intensity","Metal surface","Frequency","Voltage"], a:"Metal surface"},
    {s:"Physics", c:"Dual Nature", q:"De-Broglie wavelength formula?", o:["λ=h/p","λ=h/mv","Both","None"], a:"Both"},
    {s:"Physics", c:"Atoms", q:"Energy of electron in nth orbit is proportional to?", o:["n","n²","1/n²","1/n"], a:"1/n²"},
    {s:"Physics", c:"Atoms", q:"Rutherford's α-particle scattering experiment led to?", o:["Nucleus","Electron","Proton","Neutron"], a:"Nucleus"},
    {s:"Physics", c:"Nuclei", q:"Mass-Energy equivalence relation is?", o:["E=mc²","E=mc","E=m²c","E=hν"], a:"E=mc²"},
    {s:"Physics", c:"Nuclei", q:"Nuclear force is?", o:["Short range","Long range","Weak","Gravitational"], a:"Short range"},
    {s:"Physics", c:"Semiconductors", q:"In P-type, majority carriers are?", o:["Electrons","Holes","Neutrons","Protons"], a:"Holes"},
    {s:"Physics", c:"Semiconductors", q:"Width of depletion layer in reverse bias?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    {s:"Physics", c:"Semiconductors", q:"Device that converts AC to DC?", o:["Amplifier","Rectifier","Oscillator","None"], a:"Rectifier"},
    {s:"Physics", c:"Logic Gates", q:"Gate that gives 1 only when both inputs are 1?", o:["AND","OR","NOT","NAND"], a:"AND"},
    {s:"Physics", c:"Logic Gates", q:"Which is a Universal Gate?", o:["AND","OR","NOR","XOR"], a:"NOR"},

    // --- CHEMISTRY (40 QUESTIONS) ---
    {s:"Chemistry", c:"Solid State", q:"Atoms in simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", c:"Solid State", q:"Defect that decreases crystal density?", o:["Schottky","Frenkel","Metal excess","None"], a:"Schottky"},
    {s:"Chemistry", c:"Solid State", q:"Hybridization of Carbon in Diamond is?", o:["sp³","sp²","sp","dsp²"], a:"sp³"},
    {s:"Chemistry", c:"Solutions", q:"Colligative properties depend on?", o:["Nature","Number of particles","Solvent","None"], a:"Number of particles"},
    {s:"Chemistry", c:"Solutions", q:"Molarity of pure water is?", o:["55.5","18","100","1"], a:"55.5"},
    {s:"Chemistry", c:"Solutions", q:"pH of human blood is approx?", o:["7.4","6.0","8.0","7.0"], a:"7.4"},
    {s:"Chemistry", c:"Solutions", q:"Which is not a colligative property?", o:["Osmotic pressure","Vapour pressure","Elevation in BP","Depression in FP"], a:"Vapour pressure"},
    {s:"Chemistry", c:"Electrochemistry", q:"Standard reduction potential of H2 is?", o:["0.0 V","1.0 V","-1.0 V","0.5 V"], a:"0.0 V"},
    {s:"Chemistry", c:"Electrochemistry", q:"Rusting of iron is an example of?", o:["Corrosion","Reduction","Polymerization","None"], a:"Corrosion"},
    {s:"Chemistry", c:"Electrochemistry", q:"Unit of molar conductivity is?", o:["S cm² mol⁻¹","S cm⁻¹","Ohm cm","None"], a:"S cm² mol⁻¹"},
    {s:"Chemistry", c:"Kinetics", q:"Unit of rate constant for 1st order?", o:["s⁻¹","mol L⁻¹ s⁻¹","L mol⁻¹ s⁻¹","None"], a:"s⁻¹"},
    {s:"Chemistry", c:"Kinetics", q:"Half life of zero order reaction?", o:["[A]₀/2k","0.693/k","[A]₀/k","None"], a:"[A]₀/2k"},
    {s:"Chemistry", c:"Surface Chemistry", q:"Which enzyme converts glucose to ethanol?", o:["Zymase","Invertase","Maltase","None"], a:"Zymase"},
    {s:"Chemistry", c:"Surface Chemistry", q:"Fog is a colloidal solution of?", o:["Liquid in Gas","Gas in Liquid","Solid in Gas","None"], a:"Liquid in Gas"},
    {s:"Chemistry", c:"Metallurgy", q:"Which catalyst used in Haber's process?", o:["Iron","Nickel","Platinum","Copper"], a:"Iron"},
    {s:"Chemistry", c:"Metallurgy", q:"Main ore of Iron is?", o:["Haematite","Bauxite","Magnetite","Calamine"], a:"Haematite"},
    {s:"Chemistry", c:"Metallurgy", q:"Cinnabar is an ore of?", o:["Hg","Pb","Cu","Zn"], a:"Hg"},
    {s:"Chemistry", c:"p-Block", q:"Strongest acid among following is?", o:["HClO4","HClO3","HClO2","HClO"], a:"HClO4"},
    {s:"Chemistry", c:"p-Block", q:"Which noble gas is most reactive?", o:["Xenon","Helium","Neon","Argon"], a:"Xenon"},
    {s:"Chemistry", c:"p-Block", q:"Shape of XeF4 is?", o:["Square planar","Tetrahedral","Pyramidal","Linear"], a:"Square planar"},
    {s:"Chemistry", c:"d-Block", q:"Transition elements are?", o:["d-block","s-block","p-block","f-block"], a:"d-block"},
    {s:"Chemistry", c:"d-Block", q:"Which ion is diamagnetic?", o:["Zn²⁺","Cu²⁺","Fe³⁺","Ni²⁺"], a:"Zn²⁺"},
    {s:"Chemistry", c:"Coordination", q:"Oxidation state of Ni in [Ni(CO)4] is?", o:["0","+2","+4","-2"], a:"0"},
    {s:"Chemistry", c:"Haloalkanes", q:"PVC is used for making?", o:["Raincoats","Pipes","Both","None"], a:"Both"},
    {s:"Chemistry", c:"Alcohols", q:"IUPAC name of CH3CHO is?", o:["Ethanal","Methanal","Ethanol","Propanal"], a:"Ethanal"},
    {s:"Chemistry", c:"Aldehydes", q:"Fehling solution A is?", o:["Aq. CuSO4","Rochelle salt","NaOH","None"], a:"Aq. CuSO4"},
    {s:"Chemistry", c:"Amines", q:"Mustard oil reaction is given by?", o:["Primary amines","Secondary","Tertiary","None"], a:"Primary amines"},
    {s:"Chemistry", c:"Biomolecules", q:"Vitamin containing Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    {s:"Chemistry", c:"Biomolecules", q:"Zwitter ion is formed by?", o:["Amino acids","Fats","Ethers","None"], a:"Amino acids"},
    {s:"Chemistry", c:"Biomolecules", q:"Sugar present in DNA is?", o:["Deoxyribose","Ribose","Fructose","Glucose"], a:"Deoxyribose"},
    {s:"Chemistry", c:"Polymers", q:"Natural rubber is a polymer of?", o:["Isoprene","Ethylene","Styrene","Neoprene"], a:"Isoprene"},
    {s:"Chemistry", c:"Polymers", q:"Bakelite is an example of?", o:["Thermoplastic","Thermosetting","Fiber","Elastomer"], a:"Thermosetting"},
    {s:"Chemistry", c:"Polymers", q:"Nylon-66 is a?", o:["Polyamide","Polyester","Polythene","None"], a:"Polyamide"},
    {s:"Chemistry", c:"Everyday Life", q:"Antiseptic property of Dettol is due to?", o:["Chloroxylenol","Bithionol","Iodine","None"], a:"Chloroxylenol"},
    {s:"Chemistry", c:"Everyday Life", q:"Aspirin is an?", o:["Analgesic","Antipyretic","Both","None"], a:"Both"},
    {s:"Chemistry", c:"Everyday Life", q:"Bithional is added to soap to act as?", o:["Antiseptic","Softener","Dryer","None"], a:"Antiseptic"},

    // --- BIOLOGY (40 QUESTIONS) ---
    {s:"Biology", c:"Cell Biology", q:"Powerhouse of the cell?", o:["Mitochondria","Nucleus","Golgi","Ribosome"], a:"Mitochondria"},
    {s:"Biology", c:"Cell Biology", q:"Suicide bags of the cell are?", o:["Lysosomes","Ribosomes","Golgi","Nucleus"], a:"Lysosomes"},
    {s:"Biology", c:"Cell Biology", q:"The site of protein synthesis is?", o:["Ribosome","Vacuole","Mitochondria","None"], a:"Ribosome"},
    {s:"Biology", c:"Genetics", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", c:"Genetics", q:"DNA Double Helix model by?", o:["Watson & Crick","Mendel","Darwin","None"], a:"Watson & Crick"},
    {s:"Biology", c:"Genetics", q:"Father of Genetics?", o:["Gregor Mendel","Darwin","Morgan","Lamarck"], a:"Gregor Mendel"},
    {s:"Biology", c:"Genetics", q:"Unit of inheritance is?", o:["Gene","DNA","Chromosome","None"], a:"Gene"},
    {s:"Biology", c:"Human Physiology", q:"Insulin is secreted by?", o:["Pancreas","Liver","Kidney","Heart"], a:"Pancreas"},
    {s:"Biology", c:"Human Physiology", q:"Largest gland in human body?", o:["Liver","Pancreas","Thyroid","Pituitary"], a:"Liver"},
    {s:"Biology", c:"Human Physiology", q:"Universal Donor blood group?", o:["O-","AB+","A+","B-"], a:"O-"},
    {s:"Biology", c:"Human Physiology", q:"Blood pressure is measured by?", o:["Sphygmomanometer","Stethoscope","ECG","None"], a:"Sphygmomanometer"},
    {s:"Biology", c:"Human Physiology", q:"Total chambers in human heart?", o:["4","2","3","1"], a:"4"},
    {s:"Biology", c:"Plant Physiology", q:"Tissue transporting water in plants?", o:["Xylem","Phloem","Cortex","None"], a:"Xylem"},
    {s:"Biology", c:"Plant Physiology", q:"Gas released during photosynthesis?", o:["Oxygen","CO2","Nitrogen","None"], a:"Oxygen"},
    {s:"Biology", c:"Plant Physiology", q:"Phloem transports?", o:["Food","Water","Minerals","Gas"], a:"Food"},
    {s:"Biology", c:"Reproduction", q:"Pollen grains are produced in?", o:["Anther","Stigma","Ovary","Style"], a:"Anther"},
    {s:"Biology", c:"Reproduction", q:"Double fertilization is characteristic of?", o:["Angiosperms","Gymnosperms","Algae","Fungi"], a:"Angiosperms"},
    {s:"Biology", c:"Reproduction", q:"The male reproductive part of a flower is?", o:["Stamen","Carpel","Petal","Sepal"], a:"Stamen"},
    {s:"Biology", c:"Health & Disease", q:"Full form of AIDS?", o:["Acquired Immune Deficiency Syndrome","Active Immune","None","Both"], a:"Acquired Immune Deficiency Syndrome"},
    {s:"Biology", c:"Health & Disease", q:"Penicillin was discovered by?", o:["Alexander Fleming","Pasteur","Hooke","None"], a:"Alexander Fleming"},
    {s:"Biology", c:"Health & Disease", q:"Typhoid is caused by?", o:["Salmonella typhi","Virus","Fungi","None"], a:"Salmonella typhi"},
    {s:"Biology", c:"Evolution", q:"Scientific name of Humans?", o:["Homo sapiens","Felis catus","Canis","None"], a:"Homo sapiens"},
    {s:"Biology", c:"Evolution", q:"Theory of natural selection was given by?", o:["Darwin","Lamarck","Mendel","De Vries"], a:"Darwin"},
    {s:"Biology", c:"Ecology", q:"Main site of photosynthesis?", o:["Chloroplast","Mitochondria","Nucleus","None"], a:"Chloroplast"},
    {s:"Biology", c:"Ecology", q:"The primary source of energy in ecosystem is?", o:["Sunlight","Green plants","Sugar","None"], a:"Sunlight"}
];

let testSet = [], idx = 0, score = 0;
let userAnswers = [];

// Google-Style Live Search functionality
function liveSearch() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let matches = bank.filter(x => x.q.toLowerCase().includes(input) || x.c.toLowerCase().includes(input));
    let btn = document.getElementById('start-btn');
    if(input.length > 0) {
        btn.innerText = `🔍 Practice ${matches.length} Questions Found`;
    } else {
        btn.innerText = `🚀 Start Full Test (120 Qs)`;
    }
}

// Start Quiz logic
function start(mode) {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = mode === 'All' ? bank : bank.filter(x => x.s === mode);
    
    if (searchTerm) {
        filtered = filtered.filter(x => 
            x.q.toLowerCase().includes(searchTerm) || 
            x.c.toLowerCase().includes(searchTerm)
        );
    }

    if (filtered.length === 0) {
        alert("Oops! Is topic par koi sawal nahi mila.");
        return;
    }

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
        b.innerText = opt;
        b.onclick = () => {
            userAnswers.push({ q: q.q, sel: opt, ans: q.a, ok: (opt === q.a), chapter: q.c, subject: q.s });
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
    
    let reportHTML = "<h3>📊 Analysis by Chapter:</h3>";
    let mistakes = userAnswers.filter(ans => !ans.ok);
    let chapterStats = {};

    mistakes.forEach(m => {
        let key = `${m.subject}: ${m.chapter}`;
        chapterStats[key] = (chapterStats[key] || 0) + 1;
    });

    for (let ch in chapterStats) {
        reportHTML += `<div style="background:#fff3cd; padding:12px; border-radius:12px; margin-bottom:8px; border-left:5px solid #ffc107; text-align:left;">
            ⚠️ <b>${ch}</b>: ${chapterStats[ch]} galtiyan. Is chapter ko phir se padhein.
        </div>`;
    }

    if(mistakes.length === 0) {
        reportHTML = "<p style='color:green; font-weight:bold; font-size:18px;'>Shaabaash! Aapne saare sawal sahi kiye. 🎯</p>";
    } else {
        reportHTML += "<hr><h4>❌ Mistakes Review:</h4>";
        mistakes.forEach(m => {
            reportHTML += `<div style="text-align:left; padding:10px; border-bottom:1px solid #eee; font-size:14px;">
                <b>Q:</b> ${m.q}<br>
                <span style="color:red">Galti: ${m.sel}</span> | <span style="color:green">Sahi: ${m.ans}</span>
            </div>`;
        });
    }

    document.getElementById('review-box').innerHTML = reportHTML;
}



















    

