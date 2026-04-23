function add() {
  let sub = document.getElementById("subject").value;
  let q = document.getElementById("q").value;
  let o1 = document.getElementById("o1").value;
  let o2 = document.getElementById("o2").value;
  let o3 = document.getElementById("o3").value;
  let o4 = document.getElementById("o4").value;
  let ans = Number(document.getElementById("ans").value);

  if (!q || !o1 || !o2 || !o3 || !o4) {
    alert("❌ Fill all fields");
    return;
  }

  db.ref("questions/" + sub).push({
    q: q,
    options: [o1, o2, o3, o4],
    answer: ans
  });

  alert("✅ Question Added!");
  loadQuestions();
}

function loadQuestions() {
  let sub = document.getElementById("subject").value;

  db.ref("questions/" + sub).on("value", snap => {
    let data = snap.val();
    let html = "";

    if (!data) {
      document.getElementById("list").innerHTML = "No Questions";
      return;
    }

    Object.keys(data).forEach((key, i) => {
      let q = data[key];

      html += `
        <div style="border:1px solid #ccc; padding:10px; margin:5px;">
          <b>Q${i+1}:</b> ${q.q}<br>
          1. ${q.options[0]}<br>
          2. ${q.options[1]}<br>
          3. ${q.options[2]}<br>
          4. ${q.options[3]}<br>
          ✅ Answer: ${q.answer}<br>
          <button onclick="del('${sub}','${key}')">❌ Delete</button>
        </div>
      `;
    });

    document.getElementById("list").innerHTML = html;
  });
}

function del(sub, key) {
  if (confirm("Delete this question?")) {
    db.ref("questions/" + sub + "/" + key).remove();
  }
}

// 🔄 subject change par reload
document.getElementById("subject").addEventListener("change", loadQuestions);

// 🚀 start
loadQuestions();
