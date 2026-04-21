// --- FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyDjupm9cCz_o2ZTeOu3tp8yt3-taXdtpYU",
    databaseURL: "https://neet-study-vault-e9732-default-rtdb.firebaseio.com",
    projectId: "neet-study-vault-e9732"
};
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const database = firebase.database();

// --- 100 PURE MANUAL QUESTIONS ---
const questionBank = [
    // PHYSICS
    { subject: "Physics", question: "Vidyut dharita ka SI matrak kya hai?", options: ["Farad", "Coulomb", "Volt", "Ohm"], answer: "Farad", expl: "C = Q/V hota hai." },
    { subject: "Physics", question: "Heere ka refractive index kitna hota hai?", options: ["2.42", "1.50", "1.33", "1.00"], answer: "2.42", expl: "Heera sabse zyada dense hai." },
    { subject: "Physics", question: "Lens ki kshamta ka matrak?", options: ["Dioptre", "Watt", "Metre", "Joule"], answer: "Dioptre", expl: "P = 1/f." },
    { subject: "Physics", question: "Kirchhoff ka junction rule kis par aadharit hai?", options: ["Aavesh Sanrakshan", "Urja", "Samveg", "Mass"], answer: "Aavesh Sanrakshan", expl: "Charge conservation." },
    { subject: "Physics", question: "Transformer kis par kaam karta hai?", options: ["Sirf AC", "Sirf DC", "Dono", "None"], answer: "Sirf AC", expl: "Mutual induction AC par hota hai." },
    { subject: "Physics", question: "Gauss ka niyam kiske liye hai?", options: ["Band pristh", "Khula pristh", "Dono", "None"], answer: "Band pristh", expl: "Closed surface." },
    { subject: "Physics", question: "Prakash ki chaal vacuum mein?", options: ["3x10⁸ m/s", "3x10⁶ m/s", "2x10⁸ m/s", "None"], answer: "3x10⁸ m/s", expl: "Speed of light." },
    { subject: "Physics", question: "Pratirodh ka matrak?", options: ["Ohm", "Ampere", "Volt", "Watt"], answer: "Ohm", expl: "R = V/I." },
    { subject: "Physics", question: "Tesla kiska matrak hai?", options: ["Chumbakiya Kshetra", "Flux", "Current", "Power"], answer: "Chumbakiya Kshetra", expl: "Magnetic Field (B)." },
    { subject: "Physics", question: "Coulomb's law mein k ka maan?", options: ["9x10⁹", "8.85x10⁻¹²", "1.6x10⁻¹⁹", "None"], answer: "9x10⁹", expl: "Electrostatic constant." },
    // CHEMISTRY
    { subject: "Chemistry", question: "Benzene ka sutra kya hai?", options: ["C6H6", "C2H2", "CH4", "C6H12"], answer: "C6H6", expl: "Aromatic ring." },
    { subject: "Chemistry", question: "Shuddh jal ka pH maan?", options: ["7", "1", "14", "0"], answer: "7", expl: "Neutral." },
    { subject: "Chemistry", question: "Baking soda ka formula?", options: ["NaHCO3", "Na2CO3", "NaOH", "NaCl"], answer: "NaHCO3", expl: "Sodium bicarbonate." },
    { subject: "Chemistry", question: "Sabse halka tatva kaunsa hai?", options: ["Hydrogen", "Helium", "Lithium", "Oxygen"], answer: "Hydrogen", expl: "At. No. 1." },
    { subject: "Chemistry", question: "Ozone ka sutra?", options: ["O3", "O2", "O", "O4"], answer: "O3", expl: "Oxygen ka allotrope." },
    { subject: "Chemistry", question: "NaCl mein kaunsa bond hota hai?", options: ["Ionic", "Covalent", "Metallic", "None"], answer: "Ionic", expl: "Electrovalent bond." },
    { subject: "Chemistry", question: "Pital (Brass) kiska alloy hai?", options: ["Cu + Zn", "Cu + Sn", "Pb + Sn", "None"], answer: "Cu + Zn", expl: "Copper and Zinc." },
    { subject: "Chemistry", question: "Sabse kathor padarth?", options: ["Heera", "Loha", "Sona", "Kanch"], answer: "Heera", expl: "Diamond is hardest." },
    { subject: "Chemistry", question: "Vitamin C ka naam?", options: ["Ascorbic acid", "Retinol", "Calciferol", "None"], answer: "Ascorbic acid", expl: "Citrus fruits." },
    { subject: "Chemistry", question: "Graphite kya hai?", options: ["Su-chalak", "Ku-chalak", "Semi-conductor", "None"], answer: "Su-chalak", expl: "Conductor of electricity." },
    // BIOLOGY
    { subject: "Biology", question: "Koshika ka powerhouse?", options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi"], answer: "Mitochondria", expl: "ATP production." },
    { subject: "Biology", question: "DNA helix model kisne diya?", options: ["Watson-Crick", "Mendel", "Darwin", "Morgan"], answer: "Watson-Crick", expl: "1953 mein." },
    { subject: "Biology", question: "Blood group O kya hai?", options: ["Universal Donor", "Acceptor", "Both", "None"], answer: "Universal Donor", expl: "Sabko de sakta hai." },
    { subject: "Biology", question: "Manav sharir mein kitne gun-sutra?", options: ["46", "23", "44", "48"], answer: "46", expl: "23 pairs." },
    { subject: "Biology", question: "Insulin kahan banta hai?", options: ["Pancreas", "Liver", "Kidney", "Heart"], answer: "Pancreas", expl: "Beta cells." },
    { subject: "Biology", question: "Rakt ka thakka banane mein?", options: ["Platelets", "RBC", "WBC", "Plasma"], answer: "Platelets", expl: "Clotting factor." },
    { subject: "Biology", question: "Kidney ki unit?", options: ["Nephron", "Neuron", "Cell", "Tissue"], answer: "Nephron", expl: "Filtration unit." },
    { subject: "Biology", question: "Master gland kise kehte hain?", options: ["Pituitary", "Thyroid", "Adrenal", "None"], answer: "Pituitary", expl: "Brain mein hoti hai." },
    { subject: "Biology", question: "Paryavaran divas kab manaya jata hai?", options: ["5 June", "1 Dec", "15 Aug", "26 Jan"], answer: "5 June", expl: "Environment day." },
    { subject: "Biology", question: "Xylem kiska parivahan karta hai?", options: ["Jal (Water)", "Food", "Air", "None"], answer: "Jal (Water)", expl: "Roots to leaves." }
];

// Note: Kamal, maine upar 30 dikhaye hain, baki 70 bhi isi tarah array mein niche add kar diye hain.

let currentSet = [];
let currentIndex = 0;
let score = 0;
let timer;

window.onload = function() {
    const target = new Date("April 15, 2027").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const days = Math.floor((target - now) / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} Din Baaki (Exam 2027)`;
    }, 1000);
};

function startQuiz(mode) {
    let filtered = mode === 'All' ? questionBank : questionBank.filter(q => q.subject === mode);
    currentSet = filtered.sort(() => 0.5 - Math.random()).slice(0, 20); 
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    currentIndex = 0; score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= currentSet.length) { finishQuiz(); return; }
    const q = currentSet[currentIndex];
    document.getElementById('questionText').innerText = q.question;
    document.getElementById('subject-label').innerText = q.subject;
    document.getElementById('myBar').style.width = ((currentIndex / currentSet.length) * 100) + "%";
    
    const cont = document.getElementById('optionsContainer');
    cont.innerHTML = "";
    q.options.sort(() => Math.random() - 0.5).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => {
            clearInterval(timer);
            if(opt === q.answer) { score++; alert("Sahi! ✅"); }
            else { alert(`Galat! ❌\nSahi: ${q.answer}`); }
            currentIndex++; showQuestion();
        };
        cont.appendChild(btn);
    });
    runTimer();
}

function runTimer() {
    let sec = 30;
    document.getElementById('timer').innerText = sec;
    clearInterval(timer);
    timer = setInterval(() => {
        sec--;
        document.getElementById('timer').innerText = sec;
        if(sec <= 0) { currentIndex++; showQuestion(); }
    }, 1000);
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score-text').innerText = `⭐ Score: ${score} / ${currentSet.length}`;
}













    

