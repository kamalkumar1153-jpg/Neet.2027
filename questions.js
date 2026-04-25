const questions = [

/* 🧬 BIOLOGY (DIAGRAM + PYQ) */
{
q:"Identify the labeled part in human heart diagram",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Diagram_of_the_human_heart.svg",
options:["Aorta","Ventricle","Atrium","Valve"],
answer:0,
topic:"Biology",
pyq:true,
difficulty:"medium"
},
{
q:"Which organelle is shown in diagram?",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Animal_cell_structure_en.svg",
options:["Cell","Nucleus","Golgi","Mitochondria"],
answer:0,
topic:"Biology",
difficulty:"easy"
},
{
q:"Neuron diagram represents?",
img:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Neuron.svg",
options:["Axon","Dendrite","Neuron","Synapse"],
answer:2,
topic:"Biology",
difficulty:"medium"
},

{q:"NEET PYQ: DNA replication occurs in?",options:["S phase","G1","G2","M"],answer:0,topic:"Biology",pyq:true,difficulty:"easy"},
{q:"Photosynthesis occurs in?",options:["Chloroplast","Nucleus","Golgi","Ribosome"],answer:0,topic:"Biology",difficulty:"easy"},
{q:"Hormone for growth?",options:["GH","Insulin","Adrenaline","Estrogen"],answer:0,topic:"Biology",difficulty:"medium"},

/* ⚗️ CHEMISTRY (PYQ STYLE) */
{q:"NEET PYQ: PV = constant law?",options:["Boyle","Charles","Avogadro","Ohm"],answer:0,topic:"Chemistry",pyq:true,difficulty:"easy"},
{q:"Strongest bond?",options:["Triple","Double","Single","Hydrogen"],answer:0,topic:"Chemistry",difficulty:"medium"},
{q:"pH < 7 means?",options:["Acidic","Basic","Neutral","Salt"],answer:0,topic:"Chemistry",difficulty:"easy"},
{q:"Which is organic?",options:["CH4","NaCl","H2O","CO2"],answer:0,topic:"Chemistry",difficulty:"easy"},

/* ⚡ PHYSICS (PYQ STYLE) */
{q:"NEET PYQ: Unit of force?",options:["Newton","Joule","Watt","Pascal"],answer:0,topic:"Physics",pyq:true,difficulty:"easy"},
{q:"F=ma law?",options:["Newton","Ohm","Hooke","Boyle"],answer:0,topic:"Physics",difficulty:"easy"},
{q:"Speed of light?",options:["3×10^8","1×10^6","9.8","5×10^7"],answer:0,topic:"Physics",difficulty:"medium"},
{q:"Ohm law?",options:["V=IR","F=ma","E=mc2","P=VI"],answer:0,topic:"Physics",difficulty:"easy"},

];

// 🔥 AUTO EXPAND TO 150
while(questions.length < 150){
  let base = questions[Math.floor(Math.random()*questions.length)];

  questions.push({
    q: base.q + " (Practice)",
    options: [...base.options],
    answer: base.answer,
    topic: base.topic,
    pyq: Math.random() > 0.6,
    difficulty: ["easy","medium","hard"][Math.floor(Math.random()*3)],
    img: base.img || null
  });
}
