const appData = {
    notes: {
        'Physics': [{t: 'Electrostatics', c: 'Coulomb Law: F = k q1 q2 / r².'}],
        'Chemistry': [{t: 'Solutions', c: 'Molarity = Moles / Volume (L).'}],
        'Biology': [{t: 'Genetics', c: 'Mendel is the father of genetics.'}]
    },
    mcqs: [
        {s:"Physics", q:"Unit of Electric Flux?", o:["V-m","N/C","Watt","Tesla"], a:"V-m"},
        {s:"Chemistry", q:"Coordination number in BCC?", o:["8","12","6","4"], a:"8"},
        {s:"Biology", q:"Double fertilization occurs in?", o:["Angiosperms","Gymnosperms","Algae","Fungi"], a:"Angiosperms"},
        // ... (Baaki 117 sawal yahan purane wale paste karein)
    ]const bank = [
    // PHYSICS (40)
    {s:"Physics", q:"Two charges +1μC and +5μC are separated by a distance. Ratio of forces acting on them is?", o:["1:1","1:5","5:1","1:25"], a:"1:1"},
    {s:"Physics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", q:"If the distance between two plates of a capacitor is doubled, its capacitance?", o:["Doubles","Becomes half","Remains same","Quintuples"], a:"Becomes half"},
    {s:"Physics", q:"The resistivity of a wire depends on its?", o:["Length","Area","Material","Shape"], a:"Material"},
    {s:"Physics", q:"A wire of resistance R is stretched to double its length. New resistance is?", o:["2R","4R","R/2","R/4"], a:"4R"},
    {s:"Physics", q:"Magnetic field at the center of a circular current loop is?", o:["μ₀I/2r","μ₀I/r","2μ₀I/r","Zero"], a:"μ₀I/2r"},
    {s:"Physics", q:"Which has the shortest wavelength?", o:["Gamma rays","X-rays","UV rays","Microwaves"], a:"Gamma rays"},
    {s:"Physics", q:"The phase difference between current and voltage in a pure inductor is?", o:["0°","90°","180°","45°"], a:"90°"},
    {s:"Physics", q:"The working of a transformer is based on?", o:["Self Induction","Mutual Induction","Eddy Currents","None"], a:"Mutual Induction"},
    {s:"Physics", q:"A lens has power +2.0 D. Its focal length is?", o:["50 cm","20 cm","100 cm","25 cm"], a:"50 cm"},
    {s:"Physics", q:"The speed of light is minimum in?", o:["Air","Glass","Water","Diamond"], a:"Diamond"},
    {s:"Physics", q:"The sky appears blue due to?", o:["Refraction","Scattering","Interference","Diffraction"], a:"Scattering"},
    {s:"Physics", q:"According to Huygens, light is a?", o:["Wave","Particle","Ray","None"], a:"Wave"},
    {s:"Physics", q:"Photoelectric effect proves?", o:["Wave nature","Particle nature","Both","None"], a:"Particle nature"},
    {s:"Physics", q:"Energy of an electron in the nth orbit of Hydrogen is proportional to?", o:["n","n²","1/n²","1/n"], a:"1/n²"},
    {s:"Physics", q:"Mass-Energy equivalence relation is?", o:["E=mc²","E=mc","E=m²c","E=hν"], a:"E=mc²"},
    {s:"Physics", q:"In a P-type semiconductor, majority carriers are?", o:["Electrons","Holes","Neutrons","Protons"], a:"Holes"},
    {s:"Physics", q:"The gate that gives output 1 only when both inputs are 1?", o:["AND","OR","NOT","NAND"], a:"AND"},
    {s:"Physics", q:"Which of these is a Universal Gate?", o:["AND","OR","NOR","XOR"], a:"NOR"},
    {s:"Physics", q:"The ratio of Sin(i) to Sin(r) is constant. This is?", o:["Ohm's Law","Snell's Law","Boyle's Law","Lenz's Law"], a:"Snell's Law"},
    {s:"Physics", q:"Unit of Electric Flux is?", o:["Weber","Volt-metre","Tesla","Newton"], a:"Volt-metre"},
    {s:"Physics", q:"The resistance of an ideal voltmeter is?", o:["Zero","Infinite","1000 Ohm","None"], a:"Infinite"},
    {s:"Physics", q:"Eddy currents are used in?", o:["Induction furnace","Galvanometer damping","Both","None"], a:"Both"},
    {s:"Physics", q:"Self inductance of a coil is 2H. If current changes at 1A/s, EMF is?", o:["2V","1V","0.5V","4V"], a:"2V"},
    {s:"Physics", q:"The unit of Magnetic Moment is?", o:["A/m²","Am²","Tesla-m","Weber/m"], a:"Am²"},
    {s:"Physics", q:"Critical angle for total internal reflection depends on?", o:["Refractive index","Color of light","Both","None"], a:"Both"},
    {s:"Physics", q:"Power of a plane glass plate is?", o:["Zero","Infinite","1D","10D"], a:"Zero"},
    {s:"Physics", q:"Standard frequency of AC in India is?", o:["50 Hz","60 Hz","100 Hz","220 Hz"], a:"50 Hz"},
    {s:"Physics", q:"The core of a transformer is laminated to reduce?", o:["Copper loss","Eddy current loss","Hysteresis","None"], a:"Eddy current loss"},
    {s:"Physics", q:"Which mirror is used in solar furnaces?", o:["Concave","Convex","Plane","Cylindrical"], a:"Concave"},
    {s:"Physics", q:"The unit of power of a lens is?", o:["Watt","Dioptre","Candela","Metre"], a:"Dioptre"},
    {s:"Physics", q:"Which phenomenon shows light is transverse?", o:["Interference","Polarization","Reflection","Refraction"], a:"Polarization"},
    {s:"Physics", q:"Threshold frequency depends on?", o:["Intensity","Metal surface","Frequency","Voltage"], a:"Metal surface"},
    {s:"Physics", q:"Nuclear force is?", o:["Short range","Long range","Weak","Gravitational"], a:"Short range"},
    {s:"Physics", q:"Half-life of a substance depends on?", o:["Temperature","Pressure","Nature of substance","Mass"], a:"Nature of substance"},
    {s:"Physics", q:"De-Broglie wavelength formula?", o:["λ = h/p","λ = h/mv","Both","None"], a:"Both"},
    {s:"Physics", q:"Energy of a photon of wavelength λ is?", o:["hc/λ","hλ/c","mc²","hν/λ"], a:"hc/λ"},
    {s:"Physics", q:"In reverse bias, the width of depletion layer?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    {s:"Physics", q:"The device that converts AC to DC?", o:["Amplifier","Rectifier","Oscillator","None"], a:"Rectifier"},
    {s:"Physics", q:"Sky appears black to an astronaut because?", o:["No atmosphere","No scattering","Both","None"], a:"Both"},

    // CHEMISTRY (40)
    {s:"Chemistry", q:"Number of atoms in a simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", q:"Which defect decreases the density of a crystal?", o:["Schottky","Frenkel","Metal excess","None"], a:"Schottky"},
    {s:"Chemistry", q:"Unit of rate constant for a first order reaction is?", o:["s⁻¹","mol L⁻¹ s⁻¹","L mol⁻¹ s⁻¹","None"], a:"s⁻¹"},
    {s:"Chemistry", q:"Colligative properties depend on?", o:["Nature of solute","Number of solute particles","Nature of solvent","None"], a:"Number of solute particles"},
    {s:"Chemistry", q:"Molarity of pure water is?", o:["55.5","18","100","1"], a:"55.5"},
    {s:"Chemistry", q:"Standard reduction potential of Hydrogen is?", o:["0.0 V","1.0 V","-1.0 V","0.5 V"], a:"0.0 V"},
    {s:"Chemistry", q:"Rusting of iron is an example of?", o:["Corrosion","Reduction","Polymerization","None"], a:"Corrosion"},
    {s:"Chemistry", q:"Which catalyst is used in Haber's process?", o:["Iron","Nickel","Platinum","Copper"], a:"Iron"},
    {s:"Chemistry", q:"The most abundant metal in earth's crust is?", o:["Aluminium","Iron","Gold","Silver"], a:"Aluminium"},
    {s:"Chemistry", q:"Bauxite is an ore of?", o:["Al","Fe","Cu","Zn"], a:"Al"},
    {s:"Chemistry", q:"Strongest acid among following is?", o:["HClO4","HClO3","HClO2","HClO"], a:"HClO4"},
    {s:"Chemistry", q:"Which gas is used in advertising signs?", o:["Neon","Argon","Nitrogen","Helium"], a:"Neon"},
    {s:"Chemistry", q:"Hybridization of Carbon in Diamond is?", o:["sp³","sp²","sp","dsp²"], a:"sp³"},
    {s:"Chemistry", q:"The IUPAC name of CH3CHO is?", o:["Ethanal","Methanal","Ethanol","Propanal"], a:"Ethanal"},
    {s:"Chemistry", q:"Fehling solution B is?", o:["Aq. CuSO4","Rochelle salt","NaOH","None"], a:"Rochelle salt"},
    {s:"Chemistry", q:"Zwitter ion is formed by?", o:["Amino acids","Fats","Ethers","None"], a:"Amino acids"},
    {s:"Chemistry", q:"The vitamin that contains Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    {s:"Chemistry", q:"Natural rubber is a polymer of?", o:["Isoprene","Ethylene","Styrene","Neoprene"], a:"Isoprene"},
    {s:"Chemistry", q:"The monomer of Teflon is?", o:["Tetrafluoroethylene","Vinyl chloride","Styrene","None"], a:"Tetrafluoroethylene"},
    {s:"Chemistry", q:"Bakelite is an example of?", o:["Thermoplastic","Thermosetting","Fiber","Elastomer"], a:"Thermosetting"},
    {s:"Chemistry", q:"Example of an antidepressant drug is?", o:["Aspirin","Equanil","Penicillin","None"], a:"Equanil"},
    {s:"Chemistry", q:"The bond order in Oxygen (O2) is?", o:["1","2","3","0"], a:"2"},
    {s:"Chemistry", q:"The pH of human blood is approx?", o:["7.4","6.0","8.0","7.0"], a:"7.4"},
    {s:"Chemistry", q:"Dry ice is?", o:["Solid CO2","Solid H2O","Liquid N2","None"], a:"Solid CO2"},
    {s:"Chemistry", q:"Which noble gas is most reactive?", o:["Xenon","Helium","Neon","Argon"], a:"Xenon"},
    {s:"Chemistry", q:"Main constituent of LPG is?", o:["Methane","Butane","Propane","Ethane"], a:"Butane"},
    {s:"Chemistry", q:"PVC is used for making?", o:["Raincoats","Pipes","Both","None"], a:"Both"},
    {s:"Chemistry", q:"Hardness of water is due to salts of?", o:["Ca & Mg","Na & K","Cu & Fe","None"], a:"Ca & Mg"},
    {s:"Chemistry", q:"The element used in matchstick industry?", o:["Red Phosphorus","White P","Sulfur","Carbon"], a:"Red Phosphorus"},
    {s:"Chemistry", q:"Strongest reducing agent among Halogens?", o:["I⁻","F⁻","Cl⁻","Br⁻"], a:"I⁻"},
    {s:"Chemistry", q:"The order of reaction for radioactive decay is?", o:["First","Zero","Second","Third"], a:"First"},
    {s:"Chemistry", q:"Which enzyme converts glucose to ethanol?", o:["Zymase","Invertase","Maltase","None"], a:"Zymase"},
    {s:"Chemistry", q:"Oxidation state of Ni in [Ni(CO)4] is?", o:["0","+2","+4","-2"], a:"0"},
    {s:"Chemistry", q:"Which of following is not a greenhouse gas?", o:["CO2","CH4","O2","N2O"], a:"O2"},
    {s:"Chemistry", q:"Antiseptic property of Dettol is due to?", o:["Chloroxylenol","Bithionol","Iodine","None"], a:"Chloroxylenol"},
    {s:"Chemistry", q:"Main ore of Iron is?", o:["Haematite","Bauxite","Magnetite","Calamine"], a:"Haematite"},
    {s:"Chemistry", q:"Cinnabar is an ore of?", o:["Hg","Pb","Cu","Zn"], a:"Hg"},
    {s:"Chemistry", q:"Transition elements are?", o:["d-block","s-block","p-block","f-block"], a:"d-block"},
    {s:"Chemistry", q:"Half life of a zero order reaction is?", o:["[A]₀/2k","0.693/k","[A]₀/k","None"], a:"[A]₀/2k"},
    {s:"Chemistry", q:"Formula of washing soda is?", o:["Na2CO3.10H2O","NaHCO3","NaOH","Na2CO3"], a:"Na2CO3.10H2O"},

    // BIOLOGY (40)
    {s:"Biology", q:"Who is known as Father of Biology?", o:["Aristotle","Darwin","Lamarck","Mendel"], a:"Aristotle"},
    {s:"Biology", q:"Structural unit of life is?", o:["Cell","Tissue","Organ","Atom"], a:"Cell"},
    {s:"Biology", q:"Which organelle is called Powerhouse?", o:["Mitochondria","Nucleus","Golgi","Ribosome"], a:"Mitochondria"},
    {s:"Biology", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", q:"The largest gland in human body is?", o:["Liver","Pancreas","Thyroid","Pituitary"], a:"Liver"},
    {s:"Biology", q:"Master Gland of the body?", o:["Pituitary","Thyroid","Adrenal","None"], a:"Pituitary"},
    {s:"Biology", q:"Universal Donor blood group?", o:["O-","AB+","A+","B-"], a:"O-"},
    {s:"Biology", q:"Universal Acceptor blood group?", o:["AB+","O-","A-","B+"], a:"AB+"},
    {s:"Biology", q:"Insulin is secreted by?", o:["Pancreas","Liver","Kidney","Heart"], a:"Pancreas"},
    {s:"Biology", q:"Which vitamin helps in blood clotting?", o:["Vit K","Vit A","Vit C","Vit D"], a:"Vit K"},
    {s:"Biology", q:"Functional unit of Kidney?", o:["Nephron","Neuron","Alveoli","None"], a:"Nephron"},
    {s:"Biology", q:"Suicide bags of the cell are?", o:["Lysosomes","Ribosomes","Golgi","Nucleus"], a:"Lysosomes"},
    {s:"Biology", q:"DNA replication occurs in?", o:["S-phase","G1-phase","M-phase","G2-phase"], a:"S-phase"},
    {s:"Biology", q:"Double Helix model of DNA was given by?", o:["Watson & Crick","Mendel","Darwin","None"], a:"Watson & Crick"},
    {s:"Biology", q:"Which tissue transports water in plants?", o:["Xylem","Phloem","Cortex","Epidermis"], a:"Xylem"},
    {s:"Biology", q:"Phloem transports?", o:["Food","Water","Minerals","Gas"], a:"Food"},
    {s:"Biology", q:"Father of Genetics?", o:["Gregor Mendel","Darwin","Morgan","Lamarck"], a:"Gregor Mendel"},
    {s:"Biology", q:"Gas released during photosynthesis?", o:["Oxygen","CO2","Nitrogen","None"], a:"Oxygen"},
    {s:"Biology", q:"Smallest bone in human body?", o:["Stapes","Femur","Radius","Ulna"], a:"Stapes"},
    {s:"Biology", q:"Blood pressure is measured by?", o:["Sphygmomanometer","Stethoscope","Thermometer","None"], a:"Sphygmomanometer"},
    {s:"Biology", q:"Total chambers in human heart?", o:["4","2","3","1"], a:"4"},
    {s:"Biology", q:"The brain part that controls balance?", o:["Cerebellum","Cerebrum","Medulla","None"], a:"Cerebellum"},
    {s:"Biology", q:"Which hormone is 'Fight or Flight'?", o:["Adrenaline","Insulin","Thyroxine","None"], a:"Adrenaline"},
    {s:"Biology", q:"Study of fungi is?", o:["Mycology","Phycology","Virology","None"], a:"Mycology"},
    {s:"Biology", q:"Pollen grains are produced in?", o:["Anther","Stigma","Ovary","Style"], a:"Anther"},
    {s:"Biology", q:"Full form of AIDS?", o:["Acquired Immune Deficiency Syndrome","Active Immune","None","Both"], a:"Acquired Immune Deficiency Syndrome"},
    {s:"Biology", q:"Penicillin was discovered by?", o:["Alexander Fleming","Pasteur","Hooke","None"], a:"Alexander Fleming"},
    {s:"Biology", q:"Deficiency of Iodine causes?", o:["Goitre","Anemia","Scurvy","Rickets"], a:"Goitre"},
    {s:"Biology", q:"Which part of leaf performs gas exchange?", o:["Stomata","Veins","Petiole","Midrib"], a:"Stomata"},
    {s:"Biology", q:"Bile is stored in?", o:["Gall Bladder","Liver","Pancreas","Stomach"], a:"Gall Bladder"},
    {s:"Biology", q:"RBC lifespan is?", o:["120 days","60 days","10 days","None"], a:"120 days"},
    {s:"Biology", q:"Unit of nervous system?", o:["Neuron","Nephron","Cell","Tissue"], a:"Neuron"},
    {s:"Biology", q:"Hormone for milk secretion?", o:["Oxytocin","Prolactin","Both","None"], a:"Both"},
    {s:"Biology", q:"Night blindness is due to?", o:["Vit A","Vit B","Vit C","Vit D"], a:"Vit A"},
    {s:"Biology", q:"Turners syndrome karyotype?", o:["45, XO","47, XXY","47, XYY","None"], a:"45, XO"},
    {s:"Biology", q:"Downs syndrome is due to trisomy of?", o:["21st","18th","13th","None"], a:"21st"},
    {s:"Biology", q:"Scurvy is caused by?", o:["Vit C","Vit D","Vit A","Vit B"], a:"Vit C"},
    {s:"Biology", q:"Main site of photosynthesis?", o:["Chloroplast","Mitochondria","Nucleus","None"], a:"Chloroplast"},
    {s:"Biology", q:"The only floating bone in body?", o:["Hyoid","Stapes","Femur","Patella"], a:"Hyoid"},
    {s:"Biology", q:"Scientific name of Humans?", o:["Homo sapiens","Felis catus","Canis","None"], a:"Homo sapiens"}
];

let testSet = [], idx = 0, score = 0, useNeg = false;
let userAnswers = [];

function start(mode) {
    useNeg = document.getElementById('neg-toggle').checked;
    testSet = mode === 'All' ? bank : bank.filter(x => x.s === mode);
    testSet = testSet.sort(() => 0.5 - Math.random());
    
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    
    idx = 0; score = 0; userAnswers = [];
    showQ();
}

function showQ() {
    if(idx >= testSet.length) {
        showFinal();
        return;
    }
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
            userAnswers.push({ q: q.q, sel: opt, ans: q.a, ok: (opt === q.a) });
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
    
    let html = "<h3>Mistakes Report:</h3>";
    let bad = userAnswers.filter(a => !a.ok);
    if(bad.length === 0) html += "<p style='color:green'>Amazing! No mistakes.</p>";
    else {
        bad.forEach(m => {
            html += `<div class="mistake-card">
                <b>Q:</b> ${m.q}<br>
                <span style="color:red">❌ Yours: ${m.sel}</span><br>
                <span style="color:green">✅ Correct: ${m.ans}</span>
            </div>`;
        });
    }
    document.getElementById('review-box').innerHTML = html;
}
};

function openPage(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePage(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openNotes(sub) {
    openPage('notes-page');
    document.getElementById('notes-title').innerText = sub + " Notes";
    const cont = document.getElementById('notes-cont');
    cont.innerHTML = "";
    let data = (sub === 'All') ? [...appData.notes.Physics, ...appData.notes.Chemistry, ...appData.notes.Biology] : (appData.notes[sub] || []);
    data.forEach(n => {
        cont.innerHTML += `<div style="background:#f8faff; padding:18px; border-radius:20px; margin-bottom:15px; border:1px solid #eee;">
            <b style="color:var(--primary)">${n.t}</b><p style="margin:5px 0 0; font-size:14px; opacity:0.8;">${n.c}</p></div>`;
    });
}

let qIdx = 0, score = 0, quizSet = [];
function startTest(sub) {
    quizSet = (sub === 'All') ? appData.mcqs : appData.mcqs.filter(x => x.s === sub);
    quizSet = quizSet.sort(() => 0.5 - Math.random());
    qIdx = 0; score = 0;
    openPage('quiz-page');
    showQ();
}

function showQ() {
    if(qIdx >= quizSet.length) {
        alert("Bitiya ka Score: " + score + "/" + quizSet.length);
        closePage('quiz-page');
        return;
    }
    const q = quizSet[qIdx];
    document.getElementById('q-txt').innerText = `(${q.s}) ${q.q}`;
    const list = document.getElementById('opt-list');
    list.innerHTML = "";
    q.o.forEach(o => {
        const b = document.createElement('button');
        b.style = "width:100%; padding:18px; margin-bottom:12px; border-radius:18px; border:1.5px solid #eee; background:white; text-align:left; font-family:inherit; font-weight:600; font-size:15px;";
        b.innerText = o;
        b.onclick = () => { if(o === q.a) score++; qIdx++; showQ(); };
        list.appendChild(b);
    });
}

























    

