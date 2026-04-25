const questions = [

/* 🧬 BIOLOGY */
{
q:"Site of Calvin cycle?",
options:["Stroma","Thylakoid","Cytoplasm","Mitochondria"],
answer:0,
subject:"Biology",
chapter:"Photosynthesis",
difficulty:"easy",
type:"normal"
},
{
q:"Identify organ",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Heart_diagram-en.svg",
options:["Heart","Kidney","Brain","Liver"],
answer:0,
subject:"Biology",
chapter:"Human Physiology",
difficulty:"medium",
type:"normal"
},
{
q:"Which disease is caused by bacteria?",
options:["Tuberculosis","Malaria","Dengue","COVID"],
answer:0,
subject:"Biology",
chapter:"Human Health",
difficulty:"easy",
type:"pyq"
},

/* ⚗️ CHEMISTRY */
{
q:"pH <7 means?",
options:["Acidic","Basic","Neutral","Salt"],
answer:0,
subject:"Chemistry",
chapter:"pH",
difficulty:"easy",
type:"normal"
},
{
q:"Strong base?",
options:["NaOH","NH3","HCl","CO2"],
answer:0,
subject:"Chemistry",
chapter:"Acid Base",
difficulty:"medium",
type:"normal"
},
{
q:"NEET: strongest acid?",
options:["HCl","H2SO4","CH3COOH","NH3"],
answer:1,
subject:"Chemistry",
chapter:"Acids",
difficulty:"hard",
type:"pyq"
},

/* ⚡ PHYSICS */
{
q:"Unit of force?",
options:["Newton","Joule","Watt","Pascal"],
answer:0,
subject:"Physics",
chapter:"Mechanics",
difficulty:"easy",
type:"normal"
},
{
q:"Speed of light?",
options:["3×10^8","1×10^6","9.8","5×10^7"],
answer:0,
subject:"Physics",
chapter:"Modern Physics",
difficulty:"medium",
type:"normal"
},
{
q:"NEET: Work unit?",
options:["Joule","Watt","Newton","Pascal"],
answer:0,
subject:"Physics",
chapter:"Work Energy",
difficulty:"medium",
type:"pyq"
}

];

// 👉 AUTO FILL 150
while(questions.length < 150){
  let q = questions[questions.length % 9];
  questions.push({...q});
}
