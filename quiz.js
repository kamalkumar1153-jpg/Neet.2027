let questions = [];
let index = 0;
let answers = [];
let review = [];
let time = 10800; // 3 hours
let timer;

// ⏳ Timer
timer = setInterval(()=>{
  time--;
  document.getElementById("timer").innerText = "Time: " + time;

  if(time<=0){
    submitTest();
  }
},1000);

// 📥 Load from Firebase
db.ref("questions/full").once("value", snap=>{
  questions = Object.values(snap.val());
  answers = new Array(questions.length).fill(null);
  review = new Array(questions.length).fill(false);

  loadQuestion();
  loadPalette();
});

// 📄 Show Question
function loadQuestion(){
  let q = questions[index];

  document.getElementById("qno").innerText = 
    "Q " + (index+1) + "/" + questions.length;

  document.getElementById("question").innerText = q.q;

  let html="";
  q.options.forEach((opt,i)=>{
    let selected = answers[index]===i ? "style='background:lightgreen'" : "";
    html += `<button ${selected} onclick="select(${i})">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = html;
}

// ✅ Select answer
function select(i){
  answers[index]=i;
  loadPalette();
  loadQuestion();
}

// ⏭ Next / Prev
function next(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }
}

function prev(){
  if(index>0){
    index--;
    loadQuestion();
  }
}

// ⭐ Mark for review
function markReview(){
  review[index]=true;
  loadPalette();
}

// 🎯 Palette (important)
function loadPalette(){
  let html="";
  answers.forEach((a,i)=>{
    let color = "white";

    if(review[i]) color="orange";
    else if(a!==null) color="lightgreen";

    html += `<button style="background:${color}" onclick="go(${i})">${i+1}</button>`;
  });

  document.getElementById("palette").innerHTML = html;
}

function go(i){
  index=i;
  loadQuestion();
}

// 🏁 Submit + Result
function submitTest(){
  clearInterval(timer);

  let score=0;
  let correct=0;

  questions.forEach((q,i)=>{
    if(answers[i]===q.answer){
      score+=4;
      correct++;
    } else if(answers[i]!==null){
      score-=1;
    }
  });

  localStorage.setItem("score", score);
  localStorage.setItem("correct", correct);
  localStorage.setItem("total", questions.length);

  window.location="result.html";
}
