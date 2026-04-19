 // --- 1. DATA & CONFIG ---
const targetDate = new Date("April 15, 2027 00:00:00").getTime();

// AGLE 100 QUESTIONS (101-200)
const allQuestions = [
    { "subject": "Biology", "question": "Which hormone is known as the 'Emergency Hormone'?", "options": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"], "answer": "Adrenaline" },
    { "subject": "Physics", "question": "What is the unit of Luminous Intensity?", "options": ["Mole", "Ampere", "Candela", "Kelvin"], "answer": "Candela" },
    { "subject": "Chemistry", "question": "Which gas is filled in balloons for flying?", "options": ["Hydrogen", "Helium", "Nitrogen", "Argon"], "answer": "Helium" },
    { "subject": "Biology", "question": "Study of fruits is called?", "options": ["Pomology", "Mycology", "Phycology", "Anthology"], "answer": "Pomology" },
    { "subject": "Physics", "question": "Which lens is used to correct Myopia?", "options": ["Convex", "Concave", "Cylindrical", "Bifocal"], "answer": "Concave" },
    { "subject": "Chemistry", "question": "What is the chemical name of Vitamin C?", "options": ["Citric Acid", "Ascorbic Acid", "Oxalic Acid", "Nitric Acid"], "answer": "Ascorbic Acid" },
    { "subject": "Biology", "question": "Number of chromosomes in a normal human cell?", "options": ["23", "44", "46", "48"], "answer": "46" },
    { "subject": "Physics", "question": "The sky appears blue due to which phenomenon?", "options": ["Reflection", "Refraction", "Scattering", "Dispersion"], "answer": "Scattering" },
    { "subject": "Chemistry", "question": "Which is the purest form of Iron?", "options": ["Cast Iron", "Pig Iron", "Wrought Iron", "Steel"], "answer": "Wrought Iron" },
    { "subject": "Biology", "question": "Xylem in plants is responsible for transport of?", "options": ["Food", "Water", "Oxygen", "Amino acids"], "answer": "Water" },
    { "subject": "Physics", "question": "Resistance of an ideal ammeter is?", "options": ["Zero", "Infinite", "High", "Low"], "answer": "Zero" },
    { "subject": "Chemistry", "question": "Which gas is responsible for the swelling of bread?", "options": ["Oxygen", "CO2", "Nitrogen", "Ammonia"], "answer": "CO2" },
    { "subject": "Biology", "question": "Double fertilization is a unique feature of?", "options": ["Algae", "Bryophytes", "Angiosperms", "Gymnosperms"], "answer": "Angiosperms" },
    { "subject": "Physics", "question": "Energy of the Sun is produced by?", "options": ["Nuclear Fission", "Nuclear Fusion", "Oxidation", "Reduction"], "answer": "Nuclear Fusion" },
    { "subject": "Chemistry", "question": "Which metal is kept in Kerosene oil?", "options": ["Sodium", "Iron", "Gold", "Silver"], "answer": "Sodium" },
    { "subject": "Biology", "question": "Which vitamin deficiency causes Night Blindness?", "options": ["Vit B", "Vit C", "Vit A", "Vit K"], "answer": "Vit A" },
    { "subject": "Physics", "question": "What is the frequency of AC in India?", "options": ["50 Hz", "60 Hz", "100 Hz", "220 Hz"], "answer": "50 Hz" },
    { "subject": "Chemistry", "question": "Which is the king of chemicals?", "options": ["HCl", "HNO3", "H2SO4", "NaOH"], "answer": "H2SO4" },
    { "subject": "Biology", "question": "Penicillin was discovered by?", "options": ["Alexander Fleming", "Pasteur", "Koch", "Lister"], "answer": "Alexander Fleming" },
    { "subject": "Physics", "question": "Universal Law of Gravitation was given by?", "options": ["Einstein", "Newton", "Kepler", "Coulomb"], "answer": "Newton" },
    { "subject": "Chemistry", "question": "What is the pH of Milk?", "options": ["6.6", "7.4", "2.4", "10.0"], "answer": "6.6" },
    { "subject": "Biology", "question": "Smallest unit of life?", "options": ["Tissue", "Organ", "Cell", "DNA"], "answer": "Cell" },
    { "subject": "Physics", "question": "A transformer works on?", "options": ["DC only", "AC only", "Both AC/DC", "None"], "answer": "AC only" },
    { "subject": "Chemistry", "question": "Which gas is known as 'Stranger Gas'?", "options": ["Argon", "Xenon", "Neon", "Helium"], "answer": "Xenon" },
    { "subject": "Biology", "question": "How many bones are in a newborn baby?", "options": ["206", "270", "300", "250"], "answer": "300" },
    { "subject": "Physics", "question": "Unit of Viscosity?", "options": ["Poise", "Pascal", "Newton", "Watt"], "answer": "Poise" },
    { "subject": "Chemistry", "question": "Hardness of water is due to salts of?", "options": ["Na & K", "Ca & Mg", "Fe & Al", "Cu & Zn"], "answer": "Ca & Mg" },
    { "subject": "Biology", "question": "Which hormone controls blood sugar?", "options": ["Glucagon", "Insulin", "Thyroxine", "Oxytocin"], "answer": "Insulin" },
    { "subject": "Physics", "question": "Ohm's law is valid for?", "options": ["Diodes", "Metals", "Transistors", "Insulators"], "answer": "Metals" },
    { "subject": "Chemistry", "question": "What is the main component of Bio-gas?", "options": ["Ethane", "Methane", "Propane", "Butane"], "answer": "Methane" },
    { "subject": "Biology", "question": "Universal recipient blood group is?", "options": ["A", "B", "O", "AB"], "answer": "AB" },
    { "subject": "Physics", "question": "One light year is approximately?", "options": ["9.46 x 10^15 m", "3 x 10^8 m", "1.5 x 10^11 m", "10^12 m"], "answer": "9.46 x 10^15 m" },
    { "subject": "Chemistry", "question": "The chemical used in matchsticks is?", "options": ["Red Phosphorus", "White Phosphorus", "Sodium", "Potassium"], "answer": "Red Phosphorus" },
    { "subject": "Biology", "question": "Which part of human brain controls body balance?", "options": ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], "answer": "Cerebellum" },
    { "subject": "Physics", "question": "Weight of a body at the center of Earth is?", "options": ["Infinite", "Zero", "Same as surface", "Half"], "answer": "Zero" },
    { "subject": "Chemistry", "question": "Which fuel has the highest calorific value?", "options": ["LPG", "Hydrogen", "Petrol", "Coal"], "answer": "Hydrogen" },
    { "subject": "Biology", "question": "Total number of muscles in humans?", "options": ["206", "312", "639", "500"], "answer": "639" },
    { "subject": "Physics", "question": "Optical fiber works on the principle of?", "options": ["Refraction", "Interference", "TIR", "Diffraction"], "answer": "TIR" },
    { "subject": "Chemistry", "question": "Ozone layer protects us from?", "options": ["X-rays", "UV rays", "Gamma rays", "Infrared"], "answer": "UV rays" },
    { "subject": "Biology", "question": "Which acid is present in Ant sting?", "options": ["Citric", "Methanoic", "Acetic", "Oxalic"], "answer": "Methanoic" },
    { "subject": "Physics", "question": "Sound travels fastest in?", "options": ["Air", "Water", "Steel", "Vacuum"], "answer": "Steel" },
    { "subject": "Chemistry", "question": "What is the chemical formula of Quartz?", "options": ["SiO2", "Al2O3", "CaO", "MgO"], "answer": "SiO2" },
    { "subject": "Biology", "question": "Powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], "answer": "Mitochondria" },
    { "subject": "Physics", "question": "Unit of Radioactivity?", "options": ["Curie", "Becquerel", "Rutherford", "All of these"], "answer": "All of these" },
    { "subject": "Chemistry", "question": "Which non-metal is a good conductor of electricity?", "options": ["Sulphur", "Graphite", "Iodine", "Diamond"], "answer": "Graphite" },
    { "subject": "Biology", "question": "Who is the Father of Biology?", "options": ["Aristotle", "Darwin", "Theophrastus", "Linnaeus"], "answer": "Aristotle" },
    { "subject": "Physics", "question": "Kilowatt-hour is the unit of?", "options": ["Power", "Force", "Energy", "Momentum"], "answer": "Energy" },
    { "subject": "Chemistry", "question": "Percentage of Nitrogen in Urea?", "options": ["26%", "46%", "60%", "15%"], "answer": "46%" },
    { "subject": "Biology", "question": "Which plant hormone helps in fruit ripening?", "options": ["Auxin", "Ethylene", "Gibberellin", "Cytokinin"], "answer": "Ethylene" },
    { "subject": "Physics", "question": "What is the value of G (Universal Gravitational Constant)?", "options": ["6.67x10^-11", "9.8", "6.62x10^-34", "3x10^8"], "answer": "6.67x10^-11" },
    { "subject": "Chemistry", "question": "Which element is common to all acids?", "options": ["Oxygen", "Hydrogen", "Sulphur", "Chlorine"], "answer": "Hydrogen" },
    { "subject": "Biology", "question": "Bile juice is stored in?", "options": ["Liver", "Gall Bladder", "Pancreas", "Stomach"], "answer": "Gall Bladder" },
    { "subject": "Physics", "question": "Lens formula is?", "options": ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "f = v + u", "f = v/u"], "answer": "1/f = 1/v - 1/u" },
    { "subject": "Chemistry", "question": "Which is the strongest acid?", "options": ["HCl", "H2SO4", "HClO4", "HNO3"], "answer": "HClO4" },
    { "subject": "Biology", "question": "Study of tissues is called?", "options": ["Cytology", "Histology", "Ecology", "Genetics"], "answer": "Histology" },
    { "subject": "Physics", "question": "Escape velocity of Earth?", "options": ["11.2 km/s", "8.0 km/s", "9.8 km/s", "42 km/s"], "answer": "11.2 km/s" },
    { "subject": "Chemistry", "question": "What is the formula of Plaster of Paris?", "options": ["CaSO4.2H2O", "CaSO4.1/2H2O", "CaCO3", "CaO"], "answer": "CaSO4.1/2H2O" },
    { "subject": "Biology", "question": "Life span of WBC?", "options": ["120 days", "2-15 days", "1 year", "1 month"], "answer": "2-15 days" },
    { "subject": "Physics", "question": "The working of Rocket is based on?", "options": ["Newton's 1st Law", "Newton's 3rd Law", "Pascal's Law", "Bernoulli's Law"], "answer": "Newton's 3rd Law" },
    { "subject": "Chemistry", "question": "Common salt is?", "options": ["NaCl", "KCl", "MgCl2", "CaCl2"], "answer": "NaCl" },
    { "subject": "Biology", "question": "Which metal is present in Hemoglobin?", "options": ["Mg", "Fe", "Cu", "Zn"], "answer": "Fe" },
    { "subject": "Physics", "question": "Unit of Magnetic Field?", "options": ["Tesla", "Weber", "Henry", "Farad"], "answer": "Tesla" },
    { "subject": "Chemistry", "question": "Main constituent of natural gas?", "options": ["Ethane", "Methane", "Butane", "Propane"], "answer": "Methane" },
    { "subject": "Biology", "question": "Largest part of the human brain?", "options": ["Cerebellum", "Medulla", "Cerebrum", "Pons"], "answer": "Cerebrum" },
    { "subject": "Physics", "question": "Refractive index of diamond?", "options": ["1.33", "1.50", "2.42", "1.00"], "answer": "2.42" },
    { "subject": "Chemistry", "question": "Gas used in soda water?", "options": ["O2", "CO2", "N2", "H2"], "answer": "CO2" },
    { "subject": "Biology", "question": "Which vitamin is water soluble?", "options": ["Vit A", "Vit D", "Vit C", "Vit K"], "answer": "Vit C" },
    { "subject": "Physics", "question": "Faraday's Law is related to?", "options": ["Electrolysis", "Pressure", "Heat", "Momentum"], "answer": "Electrolysis" },
    { "subject": "Chemistry", "question": "Percentage of Oxygen in air?", "options": ["78%", "21%", "0.03%", "1%"], "answer": "21%" },
    { "subject": "Biology", "question": "Who discovered Blood Groups?", "options": ["Landsteiner", "Harvey", "Mendel", "Darwin"], "answer": "Landsteiner" },
    { "subject": "Physics", "question": "Nuclear reactor works on?", "options": ["Controlled Fission", "Uncontrolled Fission", "Fusion", "Spallation"], "answer": "Controlled Fission" },
    { "subject": "Chemistry", "question": "Solid Carbon dioxide is?", "options": ["Dry Ice", "Black Ice", "Soft Ice", "Cold Ice"], "answer": "Dry Ice" },
    { "subject": "Biology", "question": "Which gland is both Exocrine and Endocrine?", "options": ["Liver", "Pancreas", "Thyroid", "Adrenal"], "answer": "Pancreas" },
    { "subject": "Physics", "question": "Velocity of sound in air (approx)?", "options": ["332 m/s", "3x10^8 m/s", "1500 m/s", "5000 m/s"], "answer": "332 m/s" },
    { "subject": "Chemistry", "question": "Which coal has highest carbon content?", "options": ["Peat", "Lignite", "Bituminous", "Anthracite"], "answer": "Anthracite" },
    { "subject": "Biology", "question": "Scientific name of Humans?", "options": ["Homo erectus", "Homo sapiens", "Homo habilis", "Rana tigrina"], "answer": "Homo sapiens" },
    { "subject": "Physics", "question": "Which mirror is used in car headlights?", "options": ["Plane", "Convex", "Concave", "Cylindrical"], "answer": "Concave" },
    { "subject": "Chemistry", "question": "Rusting of iron is a?", "options": ["Physical change", "Chemical change", "No change", "Reversible change"], "answer": "Chemical change" },
    { "subject": "Biology", "question": "RBCs are formed in?", "options": ["Liver", "Spleen", "Bone Marrow", "Kidney"], "answer": "Bone Marrow" },
    { "subject": "Physics", "question": "Acceleration due to gravity (g) is?", "options": ["9.8 m/s^2", "6.67 m/s^2", "11.2 m/s^2", "1.6 m/s^2"], "answer": "9.8 m/s^2" },
    { "subject": "Chemistry", "question": "Symbol of Silver?", "options": ["Si", "Ag", "Au", "Pb"], "answer": "Ag" },
    { "subject": "Biology", "question": "The gas taken in by plants in photosynthesis?", "options": ["O2", "CO2", "N2", "CO"], "answer": "CO2" },
    { "subject": "Physics", "question": "Instrument to measure atmospheric pressure?", "options": ["Ammeter", "Barometer", "Thermometer", "Hydrometer"], "answer": "Barometer" },
    { "subject": "Chemistry", "question": "Which gas is used for artificial ripening of fruits?", "options": ["Ethane", "Acetylene", "Methane", "Propane"], "answer": "Acetylene" },
    { "subject": "Biology", "question": "Which is the longest cell in human body?", "options": ["RBC", "WBC", "Nerve Cell", "Muscle Cell"], "answer": "Nerve Cell" },
    { "subject": "Physics", "question": "Unit of work?", "options": ["Newton", "Joule", "Watt", "Pascal"], "answer": "Joule" },
    { "subject": "Chemistry", "question": "Brass is an alloy of?", "options": ["Cu & Zn", "Cu & Sn", "Fe & Cr", "Pb & Sn"], "answer": "Cu & Zn" },
    { "subject": "Biology", "question": "Largest bone in human body?", "options": ["Stapes", "Femur", "Humerus", "Tibia"], "answer": "Femur" },
    { "subject": "Physics", "question": "Power of a convex lens is?", "options": ["Positive", "Negative", "Zero", "Infinite"], "answer": "Positive" },
    { "subject": "Chemistry", "question": "Which gas is found in cigarette lighters?", "options": ["Butane", "Methane", "Propane", "Ethane"], "answer": "Butane" },
    { "subject": "Biology", "question": "Which organ secretes Insulin?", "options": ["Liver", "Pancreas", "Gall Bladder", "Spleen"], "answer": "Pancreas" },
    { "subject": "Physics", "question": "Unit of Frequency?", "options": ["Meter", "Second", "Hertz", "Watt"], "answer": "Hertz" },
    { "subject": "Chemistry", "question": "Laughing gas is?", "options": ["N2O", "NO2", "NO", "N2O5"], "answer": "N2O" },
    { "subject": "Biology", "question": "Father of Genetics?", "options": ["Mendel", "Darwin", "Morgan", "Lamarck"], "answer": "Mendel" },
    { "subject": "Physics", "question": "The color of danger signals is red because?", "options": ["Red scatters most", "Red scatters least", "Red is bright", "Eye likes red"], "answer": "Red scatters least" },
    { "subject": "Chemistry", "question": "pH of pure water?", "options": ["5", "6", "7", "8"], "answer": "7" },
    { "subject": "Biology", "question": "Total bones in adult human?", "options": ["206", "300", "208", "210"], "answer": "206" },
    { "subject": "Physics", "question": "Current is measured by?", "options": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], "answer": "Ammeter" },
    { "subject": "Chemistry", "question": "Pencil lead is made of?", "options": ["Graphite", "Charcoal", "Lead", "Coal"], "answer": "Graphite" },
    { "subject": "Biology", "question": "Which part of brain is center for thirst/hunger?", "options": ["Thalamus", "Hypothalamus", "Pons", "Medulla"], "answer": "Hypothalamus" }
];

// --- 2. LOGIC STATE ---
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
    const timerElement = document.getElementById('timer');
    if (timerElement) timerElement.innerText = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerElement) timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const q = filteredQuestions[currentIndex];
    wrongQuestions.push({ q: q.question, correct: q.answer, user: "Time Out ⏰" });
    moveToNext();
}

// --- 4. DISPLAY FUNCTIONS ---
function displayQuestion() {
    const qText = document.getElementById('questionText');
    const optCont = document.getElementById('optionsContainer');
    const qCount = document.getElementById('q-counter');
    const subjectLabel = document.getElementById('subject-label');

    if (currentIndex >= filteredQuestions.length) {
        showResults();
        return;
    }

    const q = filteredQuestions[currentIndex];
    if (qText) qText.innerText = q.question;
    if (qCount) qCount.innerText = `Q: ${currentIndex + 1} / ${filteredQuestions.length}`;
    if (subjectLabel) subjectLabel.innerText = q.subject;

    if (optCont) {
        optCont.innerHTML = "";
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.className = "option-btn";
            btn.onclick = () => checkAnswer(opt, q.answer, q.question);
            optCont.appendChild(btn);
        });
    }
    startTimer();
}

function checkAnswer(selected, correct, questionText) {
    clearInterval(timerInterval);
    if (selected === correct) {
        score++;
    } else {
        wrongQuestions.push({ q: questionText, correct: correct, user: selected });
    }
    const scoreCard = document.getElementById('score-card');
    if (scoreCard) scoreCard.innerText = `⭐ Score: ${score}`;
    moveToNext();
}

function moveToNext() {
    currentIndex++;
    if (currentIndex < filteredQuestions.length) {
        setTimeout(displayQuestion, 400); 
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    const quizBox = document.getElementById('quiz-box');
    const navBtns = document.getElementById('nav-btns');
    const timerBox = document.getElementById('timer-box');
    const reviewSec = document.getElementById('review-section');
    
    if (quizBox) quizBox.style.display = "none";
    if (navBtns) navBtns.style.display = "none";
    if (timerBox) timerBox.style.display = "none";
    if (reviewSec) {
        reviewSec.style.display = "block";
        const listCont = document.getElementById('wrong-questions-list');
        listCont.innerHTML = "";
        
        if(wrongQuestions.length === 0) {
            listCont.innerHTML = "<h2 style='color:green; text-align:center;'>Excellent! Bitiya ne kamaal kar diya! 🎉</h2>";
        } else {
            wrongQuestions.forEach(item => {
                const div = document.createElement('div');
                div.className = 'wrong-item';
                div.innerHTML = `<b>Q:</b> ${item.q}<br><span style="color:red">Aapka: ${item.user}</span> | <span style="color:green">Sahi: ${item.correct}</span>`;
                listCont.appendChild(div);
            });
        }
    }
}

// --- 5. SEARCH & FILTER ---
window.searchQuestions = function() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    filteredQuestions = allQuestions.filter(q => q.question.toLowerCase().includes(input));
    currentIndex = 0; 
    displayQuestion();
};

window.filterQuestions = function(subject, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    filteredQuestions = (subject === 'All') ? allQuestions : allQuestions.filter(q => q.subject === subject);
    currentIndex = 0; 
    displayQuestion();
};

// Countdown Timer
setInterval(() => {
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        const diff = targetDate - new Date().getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        countdownEl.innerText = `${days} Din Baaki`;
    }
}, 60000);

// START APP
window.onload = displayQuestion;




    

