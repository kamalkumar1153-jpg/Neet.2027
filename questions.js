// ===== BASE (you can replace with real PYQ later) =====
const BASE = [
{q:"Powerhouse of cell is:",options:["Mitochondria","Golgi","Lysosome","Nucleus"],answer:0,subject:"Biology",chapter:"Cell"},
{q:"Insulin secreted by:",options:["Beta cells","Alpha","Liver","Kidney"],answer:0,subject:"Biology",chapter:"Human Physiology"},
{q:"Photosynthesis site:",options:["Chloroplast","Mitochondria","Nucleus","Golgi"],answer:0,subject:"Biology",chapter:"Plant Physiology"},

{q:"Highest electronegativity:",options:["F","Cl","O","N"],answer:0,subject:"Chemistry",chapter:"Periodic"},
{q:"pH of neutral solution:",options:["7","0","14","1"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},
{q:"Strong electrolyte:",options:["HCl","NH3","H2O","CH3COOH"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},

{q:"Unit of force:",options:["Newton","Joule","Watt","Pascal"],answer:0,subject:"Physics",chapter:"Mechanics"},
{q:"Ohm law:",options:["V=IR","F=ma","E=mc2","P=VI"],answer:0,subject:"Physics",chapter:"Electricity"},
{q:"Speed of light:",options:["3×10^8","3×10^6","3×10^5","3×10^7"],answer:0,subject:"Physics",chapter:"Optics"}
];

// ===== helpers =====
function shuffle(a){ return a.sort(()=>Math.random()-0.5); }

function variant(q,i){
let correct=q.options[q.answer];
let opts=shuffle([...q.options]);
return {...q, options:opts, answer:opts.indexOf(correct)};
}

// ===== build 180 (Bio90/Chem45/Phy45) =====
function buildMock(){
let bio=[],chem=[],phy=[],i=0;

while(bio.length<90){
BASE.filter(x=>x.subject==="Biology").forEach(q=>{
if(bio.length<90) bio.push(variant(q,i++));
});
}
while(chem.length<45){
BASE.filter(x=>x.subject==="Chemistry").forEach(q=>{
if(chem.length<45) chem.push(variant(q,i++));
});
}
while(phy.length<45){
BASE.filter(x=>x.subject==="Physics").forEach(q=>{
if(phy.length<45) phy.push(variant(q,i++));
});
}

return shuffle([...bio,...chem,...phy]);
}

const questions = buildMock();


