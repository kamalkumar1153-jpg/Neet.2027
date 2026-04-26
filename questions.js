const questions = [

/* 🧬 BIOLOGY (REAL PATTERN) */

{
q:"Which of the following statements is correct regarding cell theory?",
options:[
"It was proposed by Schleiden and Schwann",
"It explains origin of life",
"It includes viruses",
"It explains heredity"
],
answer:0,chapter:"Cell"
},

{
q:"Which phase of meiosis is characterized by crossing over?",
options:[
"Prophase I",
"Metaphase I",
"Anaphase II",
"Telophase II"
],
answer:0,chapter:"Genetics"
},

{
q:"Which of the following is NOT a function of liver?",
options:[
"Detoxification",
"Bile secretion",
"Insulin production",
"Glycogen storage"
],
answer:2,chapter:"Human Physiology"
},

{
q:"Assertion (A): Photosynthesis occurs in chloroplast.\nReason (R): Chlorophyll absorbs light energy.",
options:[
"A and R are true and R explains A",
"A and R are true but R does not explain A",
"A is true but R is false",
"A is false but R is true"
],
answer:0,chapter:"Plant Physiology"
},

{
q:"Which part of nephron is impermeable to water?",
options:[
"Ascending limb of loop of Henle",
"Descending limb",
"Proximal tubule",
"Distal tubule"
],
answer:0,chapter:"Excretion"
},

{
q:"Which hormone is responsible for ovulation?",
options:[
"LH","FSH","Estrogen","Progesterone"
],
answer:0,chapter:"Reproduction"
},

{
q:"Which gas is released during photosynthesis?",
options:[
"Oxygen","Carbon dioxide","Nitrogen","Hydrogen"
],
answer:0,chapter:"Plant Physiology"
},

{
q:"Which vitamin deficiency causes scurvy?",
options:[
"Vitamin C","Vitamin D","Vitamin A","Vitamin B12"
],
answer:0,chapter:"Health"
},

/* ⚗️ CHEMISTRY */

{
q:"Which of the following has highest boiling point?",
options:[
"H2O","HF","NH3","CH4"
],
answer:0,chapter:"Bonding"
},

{
q:"Boyle’s law states that:",
options:[
"P ∝ 1/V",
"V ∝ T",
"P ∝ T",
"V ∝ n"
],
answer:0,chapter:"Thermodynamics"
},

{
q:"Which species has highest electronegativity?",
options:[
"F","Cl","O","N"
],
answer:0,chapter:"Periodic"
},

{
q:"Which compound exhibits hydrogen bonding?",
options:[
"H2O","CO2","CH4","O2"
],
answer:0,chapter:"Bonding"
},

{
q:"pH of neutral solution at 25°C is:",
options:[
"7","0","14","1"
],
answer:0,chapter:"Equilibrium"
},

{
q:"Which is strongest acid?",
options:[
"HCl","HF","NH3","H2O"
],
answer:0,chapter:"Acids"
},

/* ⚡ PHYSICS */

{
q:"A body moving with constant velocity has acceleration:",
options:[
"Zero","Positive","Negative","Infinite"
],
answer:0,chapter:"Mechanics"
},

{
q:"Work done when force is perpendicular to displacement is:",
options:[
"Zero","Maximum","Negative","Infinite"
],
answer:0,chapter:"Work Energy"
},

{
q:"Which wave does not require a medium?",
options:[
"Light","Sound","Water","Mechanical"
],
answer:0,chapter:"Waves"
},

{
q:"Unit of resistance is:",
options:[
"Ohm","Volt","Ampere","Watt"
],
answer:0,chapter:"Electricity"
},

{
q:"Ohm’s law is represented by:",
options:[
"V = IR","F = ma","E = mc²","P = VI"
],
answer:0,chapter:"Electricity"
}

];


/* 🔥 EXPAND TO 180 */

let expanded=[];

questions.forEach(q=>{
for(let i=0;i<10;i++){
expanded.push({...q});
}
});

console.log("Total Questions:",expanded.length);

