// ➕ Add Question
function add() {
  let sub = document.getElementById("subject").value;
  let q = document.getElementById("q").value;
  let o1 = document.getElementById("o1").value;
  let o2 = document.getElementById("o2").value;
  let o3 = document.getElementById("o3").value;
  let o4 = document.getElementById("o4").value;
  let ans = Number(document.getElementById("ans").value);

  if (!q || !o1 || !o2 || !o3 || !o4 || isNaN(ans)) {
    alert("❌ Please fill all fields correctly");
    return;
  }

  db.ref("questions/" + sub).push({
    q: q,
    options: [o1, o2, o3, o4],
    answer: ans
  });

  alert("✅ Question Added!");

  // clear inputs
  document.getElementById("q").value = "";
  document.getElementById("o1").value = "";
  document.getElementById("o2").value = "";
  document.getElementById("o3").value = "";
  document.getElementById("o4").value = "";
  document.getElementById("ans").value = "";

  loadQuestions();
}

// 📥 Load Questions
function loadQuestions() {
  let sub = document.getElementById("subject").value;

  db.ref("questions/" + sub).on("value", snap => {
    let data = snap.val();
    let html = "";

    if (!data) {
      document.getElementById("list").innerHTML = "❌ No Questions Found";
      return;
    }

    Object.keys(data).forEach((key, i) => {
      let q = data[key];

      html += `
        <div class="card">
          <b>Q${i + 1}:</b> ${q.q}<br><br>

          <b>Options:</b><br>
          1. ${q.options[0]}<br>
          2. ${q.options[1]}<br>
          3. ${q.options[2]}<br>
          4. ${q.options[3]}<br><br>

          ✅ <b>Answer:</b> ${q.answer}<br><br>

          <button class="delete-btn" onclick="del('${sub}','${key}')">❌ Delete</button>
        </div>
      `;
    });

    document.getElementById("list").innerHTML = html;
  });
}

// ❌ Delete Question
function del(sub, key) {
  if (confirm("Are you sure to delete this question?")) {
    db.ref("questions/" + sub + "/" + key).remove();
  }
}

// 🔄 Subject change
document.getElementById("subject").addEventListener("change", loadQuestions);

// 🚀 Start
loadQuestions();
