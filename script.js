// --- 1. CONFIG & TARGET DATE ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();

// --- 2. THE 100 QUESTIONS DATA ---
const allQuestions = [
    { "subject": "Biology", "question": "Who proposed the Five-Kingdom Classification?", "options": ["Linnaeus", "Whittaker", "Aristotle", "Mendel"], "answer": "Whittaker" },
    { "subject": "Physics", "question": "Light year is a unit of which physical quantity?", "options": ["Time", "Distance", "Velocity", "Intensity"], "answer": "Distance" },
    { "subject": "Chemistry", "question": "Which is the most electronegative element?", "options": ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], "answer": "Fluorine" },
    { "subject": "Biology", "question": "Which organelle is known as the Power House of the cell?", "options": ["Ribosome", "Mitochondria", "Lysosome", "Golgi Body"], "answer": "Mitochondria" },
    { "subject": "Physics", "question": "What is the dimension of Surface Tension?", "options": ["M1 L1 T-2", "M1 L0 T-2", "M1 L2 T-1", "M0 L1 T-2"], "answer": "M1 L0 T-2" },
    { "subject": "Chemistry", "question": "What is the chemical formula of Heavy Water?", "options": ["H2O", "D2O", "T2O", "H2O2"], "answer": "D2O" },
    { "subject": "Biology", "question": "Who proposed the double helix model of DNA?", "options": ["Watson & Crick", "Mendel", "Morgan", "Darwin"], "answer": "Watson & Crick" },
    { "subject": "Physics", "question": "Where is the value of 'g' maximum?", "options": ["Equator", "Poles", "Center of Earth", "Space"], "answer": "Poles" },
    { "subject": "Chemistry", "question": "Dalton's Law is related to which of the following?", "options": ["Partial Pressure", "Volume", "Mass", "Temperature"], "answer": "Partial Pressure" },
    { "subject": "Biology", "question": "Who discovered the cell for the first time?", "options": ["Robert Hooke", "Robert Brown", "Leeuwenhoek", "Virchow"], "answer": "Robert Hooke" },
    { "subject": "Biology", "question": "Who is known as the Father of Genetics?", "options": ["Darwin", "Lamarck", "Gregor Mendel", "Morgan"], "answer": "Gregor Mendel" },
    { "subject": "Physics", "question": "What is the unit of Capacitance?", "options": ["Farad", "Coulomb", "Volt", "Ohm"], "answer": "Farad" },
    { "subject": "Chemistry", "question": "What is the Ideal Gas Equation?", "options": ["PV=nRT", "P=VRT", "V=nRT", "PV=kT"], "answer": "PV=nRT" },
    { "subject": "Biology", "question": "Which is the largest gland in the human body?", "options": ["Pancreas", "Thyroid", "Liver", "Pituitary"], "answer": "Liver" },
    { "subject": "Physics", "question": "According to Gauss Law, total electric flux is?", "options": ["q/e0", "q*e0", "e0/q", "Zero"], "answer": "q/e0" },
    { "subject": "Chemistry", "question": "What is the molarity of pure water?", "options": ["18", "50", "55.5", "100"], "answer": "55.5" },
    { "subject": "Biology", "question": "What happens during the S-phase of the cell cycle?", "options": ["Protein Synthesis", "DNA replication", "Cell Division", "Cell Growth"], "answer": "DNA replication" },
    { "subject": "Physics", "question": "What is the unit of Electric Field Intensity?", "options": ["N/C", "J/C", "V/m", "Both A & C"], "answer": "Both A & C" },
    { "subject": "Chemistry", "question": "What is the monomer of Teflon?", "options": ["Ethene", "Vinyl chloride", "Tetrafluoroethene", "Styrene"], "answer": "Tetrafluoroethene" },
    { "subject": "Biology", "question": "The process of making RNA from DNA is called?", "options": ["Replication", "Transcription", "Translation", "Mutation"], "answer": "Transcription" },
    { "subject": "Physics", "question": "What is the unit of Inductive Reactance (XL)?", "options": ["Henry", "Farad", "Ohm", "Tesla"], "answer": "Ohm" },
    { "subject": "Chemistry", "question": "Which is an example of an Ideal Solution?", "options": ["Ethanol+Water", "Benzene+Toluene", "HCl+Water", "None"], "answer": "Benzene+Toluene" },
    { "subject": "Biology", "question": "Blood Group AB shows which type of inheritance?", "options": ["Dominance", "Co-dominance", "Recessive", "Incomplete"], "answer": "Co-dominance" },
    { "subject": "Physics", "question": "Radius (r) of a circular path is proportional to?", "options": ["Mass", "Velocity", "Charge", "Field"], "answer": "Velocity" },
    { "subject": "Chemistry", "question": "Which is the lightest element in the periodic table?", "options": ["Helium", "Hydrogen", "Lithium", "Oxygen"], "answer": "Hydrogen" },
    { "subject": "Biology", "question": "Which cycle occurs in the Mitochondria?", "options": ["Calvin Cycle", "Krebs Cycle", "Glycolysis", "EMB Pathway"], "answer": "Krebs Cycle" },
    { "subject": "Physics", "question": "What is the SI unit of Resistance?", "options": ["Watt", "Ampere", "Ohm", "Volt"], "answer": "Ohm" },
    { "subject": "Chemistry", "question": "Who proposed the Modern Periodic Table?", "options": ["Mendeleev", "Henry Moseley", "Dobereiner", "Newland"], "answer": "Henry Moseley" },
    { "subject": "Biology", "question": "Which component helps in blood clotting?", "options": ["RBC", "WBC", "Platelets", "Plasma"], "answer": "Platelets" },
    { "subject": "Physics", "question": "Velocity of light is maximum in?", "options": ["Water", "Glass", "Vacuum", "Air"], "answer": "Vacuum" },
    { "subject": "Chemistry", "question": "Who discovered the pH scale?", "options": ["Sorenson", "Lewis", "Arrhenius", "Boyle"], "answer": "Sorenson" },
    { "subject": "Biology", "question": "Where is Insulin produced in the human body?", "options": ["Liver", "Pancreas", "Spleen", "Kidney"], "answer": "Pancreas" },
    { "subject": "Physics", "question": "Newton's first law of motion defines?", "options": ["Inertia", "Force", "Action-Reaction", "Energy"], "answer": "Inertia" },
    { "subject": "Chemistry", "question": "What is the formula for Laughing Gas?", "options": ["NO", "N2O", "NO2", "N2O5"], "answer": "N2O" },
    { "subject": "Biology", "question": "Which metal is present in Chlorophyll?", "options": ["Iron", "Magnesium", "Copper", "Zinc"], "answer": "Magnesium" },
    { "subject": "Physics", "question": "On which principle does a Transformer work?", "options": ["Mutual Induction", "Self Induction", "Eddy Current", "None"], "answer": "Mutual Induction" },
    { "subject": "Chemistry", "question": "What is the chemical name of Baking Soda?", "options": ["Sodium Carbonate", "Sodium Bicarbonate", "NaOH", "KOH"], "answer": "Sodium Bicarbonate" },
    { "subject": "Biology", "question": "Which blood group is the Universal Donor?", "options": ["A", "B", "AB", "O"], "answer": "O" },
    { "subject": "Physics", "question": "What is the unit of Sound Intensity?", "options": ["Hertz", "Decibel", "Watt", "Tesla"], "answer": "Decibel" },
    { "subject": "Chemistry", "question": "Which is the hardest natural substance?", "options": ["Gold", "Iron", "Diamond", "Platinum"], "answer": "Diamond" },
    { "subject": "Biology", "question": "Which organelle is called the Suicidal Bag?", "options": ["Ribosome", "Lysosome", "Centrosome", "Nucleus"], "answer": "Lysosome" },
    { "subject": "Physics", "question": "The filament of an electric bulb is made of?", "options": ["Copper", "Iron", "Tungsten", "Silver"], "answer": "Tungsten" },
    { "subject": "Chemistry", "question": "What is Dry Ice?", "options": ["Solid H2O", "Solid CO2", "Solid N2", "Solid O2"], "answer": "Solid CO2" },
    { "subject": "Biology", "question": "What is the functional unit of the Kidney?", "options": ["Neuron", "Nephron", "Alveoli", "Cell"], "answer": "Nephron" },
    { "subject": "Physics", "question": "What is the Escape Velocity for Earth?", "options": ["9.8 km/s", "11.2 km/s", "42 km/s", "1.1 km/s"], "answer": "11.2 km/s" },
    { "subject": "Chemistry", "question": "Which acid is found in Vinegar?", "options": ["Citric Acid", "Formic Acid", "Acetic Acid", "Lactic Acid"], "answer": "Acetic Acid" },
    { "subject": "Biology", "question": "Which is the largest flower in the world?", "options": ["Rose", "Rafflesia", "Wolfia", "Lotus"], "answer": "Rafflesia" },
    { "subject": "Physics", "question": "Sparkling of diamond is due to?", "options": ["Reflection", "Refraction", "TIR", "Scattering"], "answer": "TIR" },
    { "subject": "Chemistry", "question": "Methane is also known as?", "options": ["Marsh Gas", "Tear Gas", "Mustard Gas", "Noble Gas"], "answer": "Marsh Gas" },
    { "subject": "Biology", "question": "Where does protein synthesis occur?", "options": ["Golgi", "Ribosome", "Vacuole", "Nucleus"], "answer": "Ribosome" },
    { "subject": "Physics", "question": "What is the velocity of light?", "options": ["3x10^8 m/s", "2x10^8 m/s", "3x10^10 m/s", "1x10^8 m/s"], "answer": "3x10^8 m/s" },
    { "subject": "Chemistry", "question": "What is the main cause of Acid Rain?", "options": ["CO2", "SO2 & NO2", "CO", "CH4"], "answer": "SO2 & NO2" },
    { "subject": "Biology", "question": "What is the unit of Heredity?", "options": ["Chromosome", "DNA", "Gene", "Nucleus"], "answer": "Gene" },
    { "subject": "Physics", "question": "What is the unit of Power of Lens?", "options": ["Watt", "Diopter", "Candela", "Meter"], "answer": "Diopter" },
    { "subject": "Chemistry", "question": "Which is the lightest metal?", "options": ["Hydrogen", "Lithium", "Sodium", "Magnesium"], "answer": "Lithium" },
    { "subject": "Biology", "question": "Which Vitamin helps in blood clotting?", "options": ["Vit A", "Vit C", "Vit K", "Vit E"], "answer": "Vit K" },
    { "subject": "Physics", "question": "1 HP equals how many watts?", "options": ["500", "746", "1000", "700"], "answer": "746" },
    { "subject": "Chemistry", "question": "What is the geometry of CH4?", "options": ["Linear", "Planar", "Tetrahedral", "Circular"], "answer": "Tetrahedral" },
    { "subject": "Biology", "question": "Which sugar is present in DNA?", "options": ["Ribose", "Deoxyribose", "Glucose", "Fructose"], "answer": "Deoxyribose" },
    { "subject": "Physics", "question": "Water density is maximum at?", "options": ["0C", "4C", "100C", "-4C"], "answer": "4C" },
    { "subject": "Chemistry", "question": "Which non-metal is liquid at room temperature?", "options": ["Mercury", "Bromine", "Iodine", "Chlorine"], "answer": "Bromine" },
    { "subject": "Biology", "question": "How many chambers are in the human heart?", "options": ["2", "3", "4", "1"], "answer": "4" },
    { "subject": "Physics", "question": "Sound intensity is measured in?", "options": ["Hertz", "Decibel", "Watt", "Pascal"], "answer": "Decibel" },
    { "subject": "Chemistry", "question": "Which is the lightest gas?", "options": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], "answer": "Hydrogen" },
    { "subject": "Biology", "question": "Full form of DNA is?", "options": ["Deoxyribose Nucleic Acid", "Ribose Nucleic Acid", "Double Acid", "None"], "answer": "Deoxyribose Nucleic Acid" },
    { "subject": "Physics", "question": "Instrument to measure electric current?", "options": ["Voltmeter", "Ammeter", "Galvanometer", "Wattmeter"], "answer": "Ammeter" },
    { "subject": "Chemistry", "question": "Symbol of Gold?", "options": ["Ag", "Au", "Fe", "Cu"], "answer": "Au" },
    { "subject": "Biology", "question": "Lifespan of RBC?", "options": ["10 days", "50 days", "120 days", "200 days"], "answer": "120 days" },
    { "subject": "Physics", "question": "Unit of Magnetic Flux?", "options": ["Tesla", "Weber", "Ohm", "Faraday"], "answer": "Weber" },
    { "subject": "Chemistry", "question": "pH value of pure water?", "options": ["5", "6", "7", "8"], "answer": "7" }
    // ... isi tarah 100 tak sawal hain
];

let filteredQuestions = allQuestions;
let currentIndex = 0;
let score = 0;
let wrongQuestions = [];
let timeLeft = 30;
let timerInterval;

// --- 3. TIMER SYSTEM ---
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const q = filteredQuestions[currentIndex];
    wrongQuestions.push({ q: q.question, correct: q.answer, user: "Time Out" });
    moveToNext();
}

// --- 4. DISPLAY LOGIC ---
function displayQuestion() {
    const qText = document.getElementById('questionText');
    const optCont = document.getElementById('optionsContainer');
    const qCount = document.getElementById('q-counter');

    if (currentIndex >= filteredQuestions.length) {
        showResults();
        return;
    }

    const q = filteredQuestions[currentIndex];
    qText.innerText = q.question;
    qCount.innerText = `Q: ${currentIndex + 1} / ${filteredQuestions.length}`;
    document.getElementById('subject-label').innerText = q.subject;

    optCont.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(opt, q.answer, q.question);
        optCont.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(selected, correct, questionText) {
    clearInterval(timerInterval);
    if (selected === correct) {
        score++;
    } else {
        wrongQuestions.push({ q: questionText, correct: correct, user: selected });
    }
    document.getElementById('score-card').innerText = `⭐ Score: ${score}`;
    moveToNext();
}

function moveToNext() {
    currentIndex++;
    if (currentIndex < filteredQuestions.length) {
        setTimeout(displayQuestion, 500);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-box').style.display = "none";
    document.getElementById('nav-btns').style.display = "none";
    document.getElementById('timer-box').style.display = "none";
    document.getElementById('review-section').style.display = "block";
    
    const listCont = document.getElementById('wrong-questions-list');
    listCont.innerHTML = "";
    wrongQuestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `<b>Q:</b> ${item.q}<br><span style="color:red">Aapka: ${item.user}</span> | <span style="color:green">Sahi: ${item.correct}</span>`;
        listCont.appendChild(div);
    });
}

// --- 5. SEARCH & FILTER ---
window.searchQuestions = function() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    filteredQuestions = allQuestions.filter(q => q.question.toLowerCase().includes(input));
    currentIndex = 0; displayQuestion();
};

window.filterQuestions = function(subject, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    filteredQuestions = (subject === 'All') ? allQuestions : allQuestions.filter(q => q.subject === subject);
    currentIndex = 0; displayQuestion();
};

// Target countdown
setInterval(() => {
    const diff = targetDate - new Date().getTime();
    document.getElementById("countdown").innerText = `${Math.floor(diff / (1000 * 60 * 60 * 24))} Din Baaki`;
}, 60000);

displayQuestion();





