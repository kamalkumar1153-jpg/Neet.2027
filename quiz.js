let subject = localStorage.getItem("subject");

let questionsDB = {
  bio: [
    {q:"DNA kaha hota hai?", options:["Nucleus","Ribosome","Golgi","Cytoplasm"], answer:0}
  ],
  chem: [
    {q:"pH=7?", options:["Acid","Base","Neutral","Salt"], answer:2}
  ],
  phy: [
    {q:"F=ma kisne diya?", options:["Newton","Einstein","Tesla","Bohr"], answer:0}
  ]
};

let questions = questionsDB[subject];
let index = 0;
let score = 0;
let time = 180;

let timer = setInterval(()=>{
  time--;
  document.getElementById("timer").innerText = "Time: " + time;
  
  if(time<=0){
    finish();
  }
},1000);

function load(){
  let q = questions[index];
  document.getElementById("question").innerText = q.q;

  let html="";
  q.options.forEach((opt,i)=>{
    html += `<button onclick="check(${i})">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = html;
}

function check(i){
  if(i===questions[index].answer){
    score+=4;
  } else {
    score-=1; // ❌ negative marking
  }
}

function next(){
  index++;
  if(index<questions.length){
    load();
  } else {
    finish();
  }
}

function finish(){
  clearInterval(timer);
  localStorage.setItem("score", score);
  window.location="result.html";
}

load();
