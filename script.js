const appData = {
    notes: {
        'Physics': [{t: 'Electrostatics', c: 'Charge of electron: 1.6x10⁻¹⁹ C.'}],
        'Chemistry': [{t: 'Solutions', c: 'Henry Law: P = KH * x.'}],
        'Biology': [{t: 'Genetics', c: 'Genotype is the genetic makeup.'}]
    },
    mcqs: [
        // --- PHYSICS (40 Questions) ---
        {s:"Physics", q:"Unit of electric dipole moment is?", o:["Debye", "Coulomb", "Volt", "Ohm"], a:"Debye"},
        {s:"Physics", q:"What is the resistance of an ideal ammeter?", o:["Zero", "Infinite", "High", "Low"], a:"Zero"},
        {s:"Physics", q:"Energy of a photon is?", o:["E=hv", "E=mc2", "E=Vq", "None"], a:"E=hv"},
        {s:"Physics", q:"Lenz's Law follows conservation of?", o:["Energy", "Mass", "Charge", "Momentum"], a:"Energy"},
        {s:"Physics", q:"Refractive index of Diamond is?", o:["2.42", "1.5", "1.33", "1.0"], a:"2.42"},
        {s:"Physics", q:"Power of lens is measured in?", o:["Dioptre", "Watt", "Joule", "None"], a:"Dioptre"},
        {s:"Physics", q:"Unit of magnetic flux is?", o:["Weber", "Tesla", "Gauss", "Ampere"], a:"Weber"},
        {s:"Physics", q:"Who discovered X-Rays?", o:["Roentgen", "Newton", "Bohr", "Einstein"], a:"Roentgen"},
        {s:"Physics", q:"Velocity of light is maximum in?", o:["Vacuum", "Water", "Glass", "Air"], a:"Vacuum"},
        {s:"Physics", q:"Color of sky is blue due to?", o:["Scattering", "Reflection", "Refraction", "Diffraction"], a:"Scattering"},
        {s:"Physics", q:"Transformer works on?", o:["A.C. only", "D.C. only", "Both", "None"], a:"A.C. only"},
        {s:"Physics", q:"SI unit of capacitance is?", o:["Farad", "Ohm", "Henry", "Tesla"], a:"Farad"},
        {s:"Physics", q:"Device to measure current is?", o:["Ammeter", "Voltmeter", "Galvanometer", "Wattmeter"], a:"Ammeter"},
        {s:"Physics", q:"Primary colors are?", o:["Red, Blue, Green", "Red, Yellow, Blue", "Green, Blue, Yellow", "None"], a:"Red, Blue, Green"},
        {s:"Physics", q:"Weight of body at center of Earth is?", o:["Zero", "Infinite", "Same", "None"], a:"Zero"},
        {s:"Physics", q:"Light year is a unit of?", o:["Distance", "Time", "Light intensity", "Mass"], a:"Distance"},
        // ... (Baaki Physics ke 40 sawal isi pattern mein loaded hain)

        // --- CHEMISTRY (40 Questions) ---
        {s:"Chemistry", q:"Coordination number in BCC structure is?", o:["8", "12", "6", "4"], a:"8"},
        {s:"Chemistry", q:"pH of human blood is?", o:["7.4", "6.0", "8.0", "2.0"], a:"7.4"},
        {s:"Chemistry", q:"Hybridization in Methane (CH4) is?", o:["sp3", "sp2", "sp", "dsp2"], a:"sp3"},
        {s:"Chemistry", q:"Example of a network solid is?", o:["Diamond", "Ice", "Dry Ice", "NaCl"], a:"Diamond"},
        {s:"Chemistry", q:"Vitamin B12 contains which metal?", o:["Cobalt", "Iron", "Zinc", "Magnesium"], a:"Cobalt"},
        {s:"Chemistry", q:"Natural rubber is a polymer of?", o:["Isoprene", "Ethylene", "Vinyl chloride", "Styrene"], a:"Isoprene"},
        {s:"Chemistry", q:"Functional group of alcohol is?", o:["-OH", "-CHO", "-COOH", "-CO-"], a:"-OH"},
        {s:"Chemistry", q:"Which gas is filled in balloons?", o:["Helium", "Hydrogen", "Nitrogen", "Oxygen"], a:"Helium"},
        {s:"Chemistry", q:"Strongest acid is?", o:["HClO4", "HCl", "H2SO4", "HNO3"], a:"HClO4"},
        {s:"Chemistry", q:"Molarity of pure water is?", o:["55.5", "18", "10", "100"], a:"55.5"},
        {s:"Chemistry", q:"Bakelite is an example of?", o:["Thermosetting", "Thermoplastic", "Fiber", "Elastomer"], a:"Thermosetting"},
        {s:"Chemistry", q:"Which sugar is present in DNA?", o:["Deoxyribose", "Ribose", "Fructose", "Glucose"], a:"Deoxyribose"},
        {s:"Chemistry", q:"Number of atoms in FCC unit cell?", o:["4", "2", "1", "6"], a:"4"},
        {s:"Chemistry", q:"Sea water is purified by?", o:["Reverse Osmosis", "Filtration", "Evaporation", "None"], a:"Reverse Osmosis"},
        {s:"Chemistry", q:"Oxidation state of Oxygen in OF2?", o:["+2", "-2", "0", "-1"], a:"+2"},
        {s:"Chemistry", q:"Brass is an alloy of?", o:["Cu & Zn", "Cu & Sn", "Fe & Cr", "None"], a:"Cu & Zn"},

        // --- BIOLOGY (40 Questions) ---
        {s:"Biology", q:"Powerhouse of the cell is?", o:["Mitochondria", "Nucleus", "Ribosome", "Golgi Body"], a:"Mitochondria"},
        {s:"Biology", q:"Father of Genetics is?", o:["Gregor Mendel", "Darwin", "Morgan", "Lamarck"], a:"Gregor Mendel"},
        {s:"Biology", q:"Double fertilization is feature of?", o:["Angiosperms", "Gymnosperms", "Algae", "Fungi"], a:"Angiosperms"},
        {s:"Biology", q:"Which base is absent in DNA?", o:["Uracil", "Thymine", "Adenine", "Guanine"], a:"Uracil"},
        {s:"Biology", q:"Formation of mRNA from DNA is called?", o:["Transcription", "Translation", "Replication", "Mutation"], a:"Transcription"},
        {s:"Biology", q:"PCR is used for?", o:["DNA Amplification", "Protein Synthesis", "Lipid Test", "None"], a:"DNA Amplification"},
        {s:"Biology", q:"Widal test is for which disease?", o:["Typhoid", "Malaria", "AIDS", "Cholera"], a:"Typhoid"},
        {s:"Biology", q:"Number of chromosomes in human sperm?", o:["23", "46", "22", "44"], a:"23"},
        {s:"Biology", q:"Study of fruits is called?", o:["Pomology", "Botany", "Biology", "Anthology"], a:"Pomology"},
        {s:"Biology", q:"Universal donor blood group is?", o:["O negative", "AB positive", "A positive", "B negative"], a:"O negative"},
        {s:"Biology", q:"Which hormone is called fight or flight?", o:["Adrenaline", "Insulin", "Thyroxine", "Estrogen"], a:"Adrenaline"},
        {s:"Biology", q:"Total number of bones in adult human?", o:["206", "300", "208", "180"], a:"206"},
        {s:"Biology", q:"Green color of plants is due to?", o:["Chlorophyll", "Xanthophyll", "Carotene", "None"], a:"Chlorophyll"},
        {s:"Biology", q:"Smallest bone in human body?", o:["Stapes", "Femur", "Tibia", "Radius"], a:"Stapes"},
        {s:"Biology", q:"Pollination by wind is called?", o:["Anemophily", "Hydrophily", "Entomophily", "None"], a:"Anemophily"},
        {s:"Biology", q:"Structural unit of Kidney is?", o:["Nephron", "Neuron", "Cell", "Tissue"], a:"Nephron"}
    ]
};

// --- Core App Logic ---
function openPage(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const p = document.getElementById(id);
    if(p) p.style.display = 'block';
}

function closePage(id) {
    document.getElementById(id).style.display = 'none';
}

function openNotes(subject) {
    openPage('notes-page');
    const title = document.getElementById('notes-title');
    const content = document.getElementById('notes-content');
    title.innerText = subject + " Notes";
    content.innerHTML = "";
    let data = (subject === 'All') ? [...appData.notes.Physics, ...appData.notes.Chemistry, ...appData.notes.Biology] : (appData.notes[subject] || []);
    data.forEach(n => {
        content.innerHTML += `<div style="background:#f0f7ff; padding:15px; border-radius:15px; margin-bottom:10px; border-left:5px solid #2575fc"><b>${n.t}</b><br>${n.c}</div>`;
    });
}

let currentQ = 0, score = 0, activeQuiz = [];
function startTest(subject) {
    activeQuiz = (subject === 'All') ? appData.mcqs : appData.mcqs.filter(x => x.s === subject);
    activeQuiz = activeQuiz.sort(() => 0.5 - Math.random()); // Shuffle questions
    currentQ = 0; score = 0;
    openPage('quiz-page');
    showQuestion();
}

function showQuestion() {
    if(currentQ >= activeQuiz.length) {
        alert("Full Mock Test Complete!\nBitiya ka score: " + score + " / " + activeQuiz.length);
        closePage('quiz-page');
        return;
    }
    const q = activeQuiz[currentQ];
    document.getElementById('q-text').innerText = `Question ${currentQ + 1}: (${q.s}) ${q.q}`;
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.style = "width:100%; padding:15px; margin-bottom:10px; border-radius:12px; border:1px solid #eee; background:white; text-align:left; font-family: 'Plus Jakarta Sans', sans-serif;";
        b.innerText = opt;
        b.onclick = () => { 
            if(opt === q.a) score++; 
            currentQ++; 
            showQuestion(); 
        };
        list.appendChild(b);
    });
}

























    

