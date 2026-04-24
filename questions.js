const questions = [];

// 🔥 150 NEET style questions auto generate
for(let i=1; i<=150; i++){
  questions.push({
    q: "NEET Advanced Question " + i,
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: Math.floor(Math.random()*4)
  });
}
