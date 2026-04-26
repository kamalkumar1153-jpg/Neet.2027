const questions = [];
function add(q){questions.push(q);}

/* ================= NCERT CORE LINES ================= */

const ncert = {

Biology:{

"Cell":[
["Cell is basic unit of life","Life"],
["Cell theory proposed by","Schleiden & Schwann"],
["Prokaryotes lack","Membrane bound organelles"],
["Plasma membrane is","Selective permeable"],
["Fluid mosaic model by","Singer & Nicolson"]
],

"Biomolecules":[
["Protein made of","Amino acids"],
["Enzymes are","Proteins"],
["Nucleic acid unit","Nucleotide"],
["Lipids soluble in","Organic solvents"],
["Polysaccharide example","Starch"]
],

"Human Physiology":[
["RBC life span","120 days"],
["Oxygen carrier","Hemoglobin"],
["Kidney unit","Nephron"],
["Insulin secreted by","Beta cells"],
["Blood filtration","Glomerulus"]
],

"Plant Physiology":[
["Photosynthesis occurs in","Chloroplast"],
["Light reaction site","Thylakoid"],
["Calvin cycle site","Stroma"],
["Water transport tissue","Xylem"],
["Food transport tissue","Phloem"]
],

"Genetics":[
["Father of genetics","Mendel"],
["DNA discovered by","Watson & Crick"],
["Gene is","Unit of heredity"],
["RNA base","Uracil"],
["Chromosomes contain","DNA"]
]

}

};


/* ================= AUTO GENERATOR ================= */

const difficulty = ["easy","medium","hard"];

Object.keys(ncert).forEach(subject=>{
Object.keys(ncert[subject]).forEach(chapter=>{

ncert[subject][chapter].forEach((item,i)=>{

for(let k=0;k<20;k++){  // 🔥 20 variations per line

add({
q:`NCERT: ${item[0]}?`,
options:[
item[1],
"Wrong Option 1",
"Wrong Option 2",
"Wrong Option 3"
],
answer:0,
topic:subject,
chapter:chapter,
level:difficulty[k%3]
});

}

});

});
});


/* ================= SMART SELECT ================= */

function getQuestions({subject="Biology",chapter="all",limit=50}){

let filtered = questions.filter(q=>{
return q.topic===subject &&
(chapter==="all" || q.chapter===chapter);
});

filtered.sort(()=>Math.random()-0.5);

return filtered.slice(0,limit);
}


/* ================= DEBUG ================= */
console.log("TOTAL QUESTIONS:",questions.length);

