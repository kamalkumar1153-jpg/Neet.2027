const questions = [];

// Helper
function add(q){questions.push(q);}

// BIOLOGY 50
for(let i=1;i<=50;i++){
add({
q:"Biology Q"+i,
options:["A","B","C","D"],
answer:0,
topic:"Biology",
difficulty:i%3==0?"hard":"easy"
});
}

// CHEMISTRY 50
for(let i=1;i<=50;i++){
add({
q:"Chemistry Q"+i,
options:["A","B","C","D"],
answer:0,
topic:"Chemistry",
difficulty:i%3==0?"hard":"easy"
});
}

// PHYSICS 50
for(let i=1;i<=50;i++){
add({
q:"Physics Q"+i,
options:["A","B","C","D"],
answer:0,
topic:"Physics",
difficulty:i%3==0?"hard":"easy"
});
}

// DIAGRAM
add({
q:"Identify heart diagram",
options:["Heart","Kidney","Brain","Lungs"],
answer:0,
topic:"Biology",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Diagram_of_the_human_heart.png"
});

