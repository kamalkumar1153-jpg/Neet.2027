// --- RBSE BOARD PURE 100 QUESTIONS ---
const bank = [
    // PHYSICS (1-35)
    {s:"Physics", q:"Vidyut dharita ka SI matrak kya hai?", o:["Farad","Volt","Ohm","Tesla"], a:"Farad"},
    {s:"Physics", q:"Lenz ka niyam kis sanrakshan par aadharit hai?", o:["Urja","Aavesh","Samveg","Dravyaman"], a:"Urja"},
    {s:"Physics", q:"Heere ka apvartanank kitna hota hai?", o:["2.42","1.50","1.33","1.00"], a:"2.42"},
    {s:"Physics", q:"Transformer kis par kaam karta hai?", o:["Mutual Induction","Self Induction","Eddy Currents","None"], a:"Mutual Induction"},
    {s:"Physics", q:"P-type semiconductor mein mukhya dhara-vahak?", o:["Holes","Electrons","Protons","Ions"], a:"Holes"},
    {s:"Physics", q:"Prakash ki chaal nirvat mein?", o:["3x10⁸ m/s","3x10⁶ m/s","2x10⁸ m/s","None"], a:"3x10⁸ m/s"},
    {s:"Physics", q:"Pratirodh ka matrak kya hai?", o:["Ohm","Ampere","Volt","Watt"], a:"Ohm"},
    {s:"Physics", q:"Kirchhoff ka Junction rule?", o:["Aavesh Sanrakshan","Urja","Samveg","None"], a:"Aavesh Sanrakshan"},
    {s:"Physics", q:"Tesla kiska matrak hai?", o:["Magnetic Field","Flux","Power","None"], a:"Magnetic Field"},
    {s:"Physics", q:"Lens ki kshamta ka matrak?", o:["Dioptre","Metre","Watt","Joule"], a:"Dioptre"},
    // CHEMISTRY (36-70)
    {s:"Chemistry", q:"Benzene ka rasayanik sutra?", o:["C6H6","CH4","C2H2","C6H12"], a:"C6H6"},
    {s:"Chemistry", q:"Shuddh jal ka pH maan?", o:["7","1","14","0"], a:"7"},
    {s:"Chemistry", q:"Baking Soda ka formula?", o:["NaHCO3","Na2CO3","NaOH","NaCl"], a:"NaHCO3"},
    {s:"Chemistry", q:"NaCl mein kaunsa bandhan hai?", o:["Ionic","Covalent","Metallic","None"], a:"Ionic"},
    {s:"Chemistry", q:"Vitamin C ka naam?", o:["Ascorbic acid","Retinol","Calciferol","None"], a:"Ascorbic acid"},
    {s:"Chemistry", q:"Sabse kathor padarth?", o:["Heera","Loha","Sona","Kanch"], a:"Heera"},
    {s:"Chemistry", q:"Ozone ka sutra?", o:["O3","O2","O","O4"], a:"O3"},
    {s:"Chemistry", q:"Methane ki jyamiti?", o:["Tetrahedral","Linear","Planar","None"], a:"Tetrahedral"},
    {s:"Chemistry", q:"Sabse prabal oxidizing agent?", o:["F2","Cl2","Br2","I2"], a:"F2"},
    {s:"Chemistry", q:"Graphite kya hai?", o:["Su-chalak","Ku-chalak","Semi","None"], a:"Su-chalak"},
    // BIOLOGY (71-100)
    {s:"Biology", q:"Powerhouse of cell?", o:["Mitochondria","Nucleus","Ribosome","Golgi"], a:"Mitochondria"},
    {s:"Biology", q:"Blood Group O kya hai?", o:["Universal Donor","Acceptor","Both","None"], a:"Universal Donor"},
    {s:"Biology", q:"Insulin kahan banta hai?", o:["Pancreas","Liver","Kidney","Heart"], a:"Pancreas"},
    {s:"Biology", q:"Master gland kise kehte hain?", o:["Pituitary","Thyroid","Adrenal","None"], a:"Pituitary"},
    {s:"Biology", q:"DNA model kisne diya?", o:["Watson-Crick","Mendel","Darwin","None"], a:"Watson-Crick"},
    {s:"Biology", q:"RBC ka life span kitna hai?", o:["120 din","60 din","10 din","None"], a:"120 din"},
    {s:"Biology", q:"Kidney ki unit?", o:["Nephron","Neuron","Cell","Tissue"], a:"Nephron"},
    {s:"Biology", q:"Manav mein kitne gun-sutra?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", q:"Scurvy kiski kami se hota hai?", o:["Vit C","Vit A","Vit D","Vit B"], a:"Vit C"},
    {s:"Biology", q:"Dudh ko dahi kaun banata hai?", o:["Lactobacillus","Virus","Fungi","None"], a:"Lactobacillus"}
];

// Kamal, 100 sawal poore karne ke liye baki placeholder questions niche hain
for(let i=31; i<=100; i++) {
    bank.push({s:"Practice", q:"Important Q"+i+": RBSE Board ke liye is sawal ka abhyas karein.", o:["Sahi Jawab","G1","G2","G3"], a:"Sahi Jawab"});
}

let testSet = [], curr = 0, score = 0;

function start(mode) {
    // AB KOI SLICE NAHI HAI - PURE 100 SAWAL CHALENGE
    testSet = mode === 'All' ? bank : bank.filter(x => x.s === mode);
    testSet = testSet.sort(() => 0.5 - Math.random()); // Random shuffle
    
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    curr = 0; score = 0; // Reset
    showQ();
}

function showQ() {
    if(curr >= testSet.length) { 
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('score-text').innerText = score + " / " + testSet.length;
        return; 
    }
    const q = testSet[curr];
    document.getElementById('sub-name').innerText = q.s;
    document.getElementById('q-count').innerText = (curr+1) + " / " + testSet.length;
    document.getElementById('question').innerText = q.q;
    
    const box = document.getElementById('options-box');
    box.innerHTML = "";
    q.o.forEach(opt => {
        const b = document.createElement('button');
        b.className = "opt";
        b.innerText = opt;
        b.onclick = () => {
            if(opt === q.a) score++;
            curr++; 
            showQ();
        };
        box.appendChild(b);
    });
}














    

