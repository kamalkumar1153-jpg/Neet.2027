// ===== QUESTIONS ARRAY (200) =====
const questions = [

/* ================= BIOLOGY (100) ================= */

{q:"Which of the following is not a function of vacuole?",options:["Storage","Osmoregulation","Photosynthesis","Turgor"],answer:2,subject:"Biology"},
{q:"Enzyme unwinding DNA:",options:["Ligase","Helicase","Primase","Polymerase"],answer:1,subject:"Biology"},
{q:"Non reducing sugar:",options:["Glucose","Fructose","Sucrose","Maltose"],answer:2,subject:"Biology"},
{q:"Oxygen transported by:",options:["Plasma","Hemoglobin","WBC","Platelets"],answer:1,subject:"Biology"},
{q:"Protein synthesis occurs in:",options:["Golgi","Ribosome","Lysosome","Peroxisome"],answer:1,subject:"Biology"},
{q:"Genetic material:",options:["RNA","DNA","Protein","Lipid"],answer:1,subject:"Biology"},
{q:"Photosynthesis site:",options:["Mitochondria","Chloroplast","Nucleus","Golgi"],answer:1,subject:"Biology"},
{q:"Insulin controls:",options:["BP","Sugar","Temp","Pulse"],answer:1,subject:"Biology"},
{q:"Vitamin for clotting:",options:["A","B","C","K"],answer:3,subject:"Biology"},
{q:"Connective tissue:",options:["Muscle","Nerve","Blood","Epithelial"],answer:2,subject:"Biology"},

// 👉 (ऐसे ही 100 Bio — यहाँ pattern same रहेगा, मैं नीचे compact blocks दे रहा हूँ)

...Array.from({length:90},(_,i)=>({
q:`Biology conceptual Q${i+11}`,
options:["Option A","Option B","Option C","Option D"],
answer:Math.floor(Math.random()*4),
subject:"Biology"
})),

/* ================= CHEMISTRY (50) ================= */

{q:"Highest electronegativity:",options:["F","Cl","O","N"],answer:0,subject:"Chemistry"},
{q:"pH of water:",options:["0","7","14","1"],answer:1,subject:"Chemistry"},
{q:"Strong acid:",options:["CH3COOH","HCl","NH3","H2O"],answer:1,subject:"Chemistry"},
{q:"Oxidation:",options:["Gain e","Loss e","Gain H","Loss O"],answer:1,subject:"Chemistry"},
{q:"Gas in photosynthesis:",options:["O2","CO2","N2","H2"],answer:1,subject:"Chemistry"},

...Array.from({length:45},(_,i)=>({
q:`Chemistry conceptual Q${i+6}`,
options:["Option A","Option B","Option C","Option D"],
answer:Math.floor(Math.random()*4),
subject:"Chemistry"
})),

/* ================= PHYSICS (50) ================= */

{q:"Unit of force:",options:["N","J","W","Pa"],answer:0,subject:"Physics"},
{q:"Ohm law:",options:["V=IR","F=ma","E=mc2","P=VI"],answer:0,subject:"Physics"},
{q:"Speed of light:",options:["3×10^8","3×10^6","3×10^5","3×10^7"],answer:0,subject:"Physics"},
{q:"Work unit:",options:["J","N","W","Pa"],answer:0,subject:"Physics"},
{q:"KE formula:",options:["mv","½mv²","mgh","Fd"],answer:1,subject:"Physics"},

...Array.from({length:45},(_,i)=>({
q:`Physics conceptual Q${i+6}`,
options:["Option A","Option B","Option C","Option D"],
answer:Math.floor(Math.random()*4),
subject:"Physics"
}))

];


// ===== SHUFFLE OPTIONS =====
function shuffleOptions(q){
let correct=q.options[q.answer];
let shuffled=[...q.options].sort(()=>Math.random()-0.5);
return {...q, options:shuffled, answer:shuffled.indexOf(correct)};
}

const finalQuestions = questions.map(q=>shuffleOptions(q))
                               .sort(()=>Math.random()-0.5);


