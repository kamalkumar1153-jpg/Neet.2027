const questions = [

/* 🧬 BIOLOGY */
{q:"Site of Calvin cycle?",options:["Stroma","Thylakoid","Cytoplasm","Mitochondria"],answer:0,topic:"Plant Physiology"},
{q:"ATP produced in?",options:["Mitochondria","Nucleus","Golgi","Ribosome"],answer:0,topic:"Cell"},
{q:"Which organ detoxifies blood?",options:["Liver","Kidney","Heart","Lungs"],answer:0,topic:"Human Physiology"},

// Diagram Questions
{
q:"Identify the organ shown in diagram",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Heart_diagram-en.svg",
options:["Heart","Kidney","Brain","Liver"],
answer:0,
topic:"Human Physiology"
},
{
q:"Identify the cell structure",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Animal_cell_structure_en.svg",
options:["Cell","Tissue","Organ","System"],
answer:0,
topic:"Cell"
},
{
q:"Identify the neuron",
img:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Neuron.svg",
options:["Neuron","Muscle","Bone","Blood"],
answer:0,
topic:"Biology"
},

/* ⚗️ CHEMISTRY */
{q:"pH <7 means?",options:["Acidic","Basic","Neutral","Salt"],answer:0,topic:"Chemistry"},
{q:"Strong base?",options:["NaOH","NH3","HCl","CO2"],answer:0,topic:"Chemistry"},

/* ⚡ PHYSICS */
{q:"Unit of force?",options:["Newton","Joule","Watt","Pascal"],answer:0,topic:"Physics"},
{q:"Speed of light?",options:["3×10^8","1×10^6","9.8","5×10^7"],answer:0,topic:"Physics"},

];

// 🔥 AUTO GENERATE 150 QUESTIONS
while(questions.length < 150){
  let q = questions[questions.length % 10];
  questions.push({...q});
}
