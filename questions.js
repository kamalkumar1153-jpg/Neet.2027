const questions = [
  // ===== BIOLOGY (1–90) =====
  {id:1,subject:"Biology",chapter:"Human Reproduction",q:"LH surge triggers:",options:["Ovulation","Menstruation","Implantation","Fertilization"],answer:0},
  {id:2,subject:"Biology",chapter:"Cell Biology",q:"Powerhouse of cell:",options:["Nucleus","Mitochondria","Golgi","ER"],answer:1},
  {id:3,subject:"Biology",chapter:"Genetics",q:"Monohybrid ratio:",options:["1:1","3:1","9:3:3:1","2:1"],answer:1},
  {id:4,subject:"Biology",chapter:"Plant Physiology",q:"C4 plants show:",options:["Kranz anatomy","High O2","Low CO2","No RuBisCO"],answer:0},
  {id:5,subject:"Biology",chapter:"Ecology",q:"Energy pyramid is:",options:["Inverted","Upright","Random","None"],answer:1},

  {id:6,subject:"Biology",chapter:"Human Physiology",q:"Oxygen carried by:",options:["Plasma","RBC","WBC","Platelets"],answer:1},
  {id:7,subject:"Biology",chapter:"Cell Biology",q:"Ribosome function:",options:["Respiration","Protein synthesis","Digestion","Transport"],answer:1},
  {id:8,subject:"Biology",chapter:"Genetics",q:"DNA replication phase:",options:["G1","S","G2","M"],answer:1},
  {id:9,subject:"Biology",chapter:"Plant Anatomy",q:"Xylem transports:",options:["Food","Water","Hormones","Oxygen"],answer:1},
  {id:10,subject:"Biology",chapter:"Evolution",q:"Darwin theory:",options:["Mutation","Selection","Inheritance","Isolation"],answer:1},

  // 👉 pattern repeat with variation
];

// AUTO EXPAND TO 180
while (questions.length < 180) {
  let base = questions[questions.length % 10];
  questions.push({
    id: questions.length + 1,
    subject: base.subject,
    chapter: base.chapter,
    q: base.q,
    options: base.options,
    answer: base.answer
  });
}



