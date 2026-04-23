// ➕ Add Question
function add() {
  let sub = document.getElementById("subject").value;
  let level = document.getElementById("level").value;
  let img = document.getElementById("imgUrl").value;
  let q = document.getElementById("q").value;
  let o1 = document.getElementById("o1").value;
  let o2 = document.getElementById("o2").value;
  let o3 = document.getElementById("o3").value;
  let o4 = document.getElementById("o4").value;
  let ans = document.getElementById("ans").value;

  if (!q || !o1 || !o2 || !o3 || !o4 || !ans) {
    alert("❌ कृपया सभी जानकारी भरें!");
    return;
  }

  // Firebase Realtime Database में डेटा भेजना
  db.ref("questions/" + sub).push({
    q: q,
    options: [o1, o2, o3, o4],
    answer: Number(ans),
    level: level,
    img: img || "" // अगर इमेज नहीं है तो खाली रहेगा
  }).then(() => {
    alert("✅ " + level + " सवाल सफलतापूर्वक जुड़ गया!");
    clearInputs();
  });
}

function clearInputs() {
  document.getElementById("q").value = "";
  document.getElementById("imgUrl").value = "";
  document.getElementById("o1").value = "";
  document.getElementById("o2").value = "";
  document.getElementById("o3").value = "";
  document.getElementById("o4").value = "";
  document.getElementById("ans").value = "";
}

// 📥 Load Questions
function loadQuestions() {
  let sub = document.getElementById("subject").value;
  let listDiv = document.getElementById("list");

  db.ref("questions/" + sub).on("value", snap => {
    let data = snap.val();
    let html = "";

    if (!data) {
      listDiv.innerHTML = "❌ इस विषय में कोई सवाल नहीं है।";
      return;
    }

    Object.keys(data).reverse().forEach((key) => {
      let q = data[key];
      let levelColor = q.level === "Easy" ? "#2ecc71" : q.level === "Medium" ? "#f39c12" : "#e74c3c";

      html += `
        <div class="card" style="border-left: 6px solid ${levelColor}">
          <div class="badge" style="background:${levelColor}">${q.level}</div>
          <p><b>Q:</b> ${q.q}</p>
          ${q.img ? `<img src="${q.img}" style="width:100%; border-radius:8px; margin:10px 0;">` : ""}
          <div class="options-box">
            1. ${q.options[0]} | 2. ${q.options[1]}<br>
            3. ${q.options[2]} | 4. ${q.options[3]}
          </div>
          <p>✅ Ans: <b>${q.answer}</b></p>
          <button class="del-btn" onclick="del('${sub}','${key}')">Delete</button>
        </div>
      `;
    });
    listDiv.innerHTML = html;
  });
}

function del(sub, key) {
  if (confirm("क्या आप इस सवाल को हटाना चाहते हैं?")) {
    db.ref("questions/" + sub + "/" + key).remove();
  }
}

document.getElementById("subject").addEventListener("change", loadQuestions);
loadQuestions();

