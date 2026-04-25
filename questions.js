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

/* ⚗️ CHEMISTRY */
{
q:"pH <7 means?",
options:["Acidic","Basic","Neutral","Salt"],
answer:0,
subject:"Chemistry",
chapter:"Acid Base",
difficulty:"easy",
type:"normal"
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
}

];

// auto fill 150
while(questions.length < 150){
  let q = questions[questions.length % 4];
  questions.push({...q});
}

/* 🎥 VIDEOS */
const videos = {
Biology:{
"Photosynthesis":[
{title:"Photosynthesis Lecture",url:"https://www.youtube.com/embed/sQK3Yr4Sc_k"}
]
},
Physics:{
"Mechanics":[
{title:"Newton Laws",url:"https://www.youtube.com/embed/kKKM8Y-u7ds"}
]
}
};
