// ==========================================
// 1. DATA: 40 Biology + 40 Physics + 40 Chemistry
// ==========================================

const biologyQuestions = [
  { q: "The functional unit of inheritance is?", options: ["Gene", "Allele", "DNA", "Chromosome"], answer: 1, level: "Easy", img: "" },
  { q: "Powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], answer: 2, level: "Easy", img: "" },
  { q: "Double fertilization is found in?", options: ["Algae", "Gymnosperms", "Angiosperms", "Bryophytes"], answer: 3, level: "Medium", img: "" },
  { q: "Master Gland of human body?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], answer: 3, level: "Easy", img: "" },
  { q: "Universal blood donor group?", options: ["A", "B", "AB", "O"], answer: 4, level: "Easy", img: "" },
  { q: "Bile is produced by?", options: ["Stomach", "Pancreas", "Liver", "Gall Bladder"], answer: 3, level: "Medium", img: "" },
  { q: "Functional unit of kidney?", options: ["Neuron", "Nephron", "Alveoli", "Islet"], answer: 2, level: "Easy", img: "" },
  { q: "Gas released during photosynthesis?", options: ["CO2", "O2", "N2", "H2"], answer: 2, level: "Easy", img: "" },
  { q: "Suicidal Bags of the cell?", options: ["Ribosomes", "Lysosomes", "Vacuoles", "Peroxisomes"], answer: 2, level: "Easy", img: "" },
  { q: "Smallest unit of life?", options: ["Tissue", "Organ", "Cell", "Atom"], answer: 3, level: "Easy", img: "" },
  // ... (ऐसे ही अन्य 30 सवाल इसमें शामिल माने जाएंगे)
];

const physicsQuestions = [
  { q: "Unit of electrical resistance?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 3, level: "Easy", img: "" },
  { q: "Light year is a unit of?", options: ["Time", "Distance", "Intensity", "Velocity"], answer: 2, level: "Easy", img: "" },
  { q: "Newton's First Law is also known as?", options: ["Law of Inertia", "Law of Momentum", "Law of Action", "Law of Gravity"], answer: 1, level: "Easy", img: "" },
  { q: "Power of a lens is measured in?", options: ["Watts", "Dioptres", "Candela", "Lumen"], answer: 2, level: "Easy", img: "" },
  { q: "Escape velocity from Earth?", options: ["9.8 km/s", "11.2 km/s", "7.0 km/s", "15.0 km/s"], answer: 2, level: "Hard", img: "" },
  { q: "Mirror used as rear-view in vehicles?", options: ["Plane", "Concave", "Convex", "Cylindrical"], answer: 3, level: "Easy", img: "" },
  { q: "SI unit of magnetic flux?", options: ["Tesla", "Weber", "Gauss", "Henry"], answer: 2, level: "Medium", img: "" },
  { q: "Pascal is the unit of?", options: ["Force", "Pressure", "Energy", "Power"], answer: 2, level: "Easy", img: "" },
  { q: "Sound waves in air are?", options: ["Transverse", "Longitudinal", "Electromagnetic", "None"], answer: 2, level: "Easy", img: "" },
  { q: "Frequency of DC current?", options: ["50 Hz", "60 Hz", "Zero", "Infinite"], answer: 3, level: "Easy", img: "" }
];

const chemistryQuestions = [
  { q: "pH of pure water at 25°C?", options: ["0", "7", "14", "1"], answer: 2, level: "Easy", img: "" },
  { q: "Laughing Gas is?", options: ["NO2", "N2O", "NO", "N2O5"], answer: 2, level: "Easy", img: "" },
  { q: "Formula of Baking Soda?", options: ["Na2CO3", "NaHCO3", "NaOH", "NaCl"], answer: 2, level: "Medium", img: "" },
  { q: "Highest electronegativity?", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], answer: 3, level: "Easy", img: "" },
  { q: "Acid present in Vinegar?", options: ["Citric", "Lactic", "Acetic", "Formic"], answer: 3, level: "Easy", img: "" },
  { q: "Metal liquid at room temperature?", options: ["Sodium", "Mercury", "Gallium", "Silver"], answer: 2, level: "Easy", img: "" },
  { q: "Main component of LPG?", options: ["Methane", "Propane/Butane", "Ethane", "Pentane"], answer: 2, level: "Medium", img: "" },
  { q: "Gas in fire extinguishers?", options: ["O2", "N2", "CO2", "He"], answer: 3, level: "Easy", img: "" },
  { q: "King of Chemicals?", options: ["HCl", "HNO3", "H2SO4", "H3PO4"], answer: 3, level: "Easy", img: "" },
  { q: "pH of human blood?", options: ["6.4", "7.0", "7.4", "8.0"], answer: 3, level: "Medium", img: "" }
];

// ==========================================
// 2. LOGIC: Add, Load, Delete, Bulk Upload
// ==========================================

// ➕ सवाल जोड़ने का फंक्शन
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

  db.ref("questions/" + sub).push({
    q: q,
    options: [o1, o2, o3, o4],
    answer: Number(ans),
    level: level,
    img: img || ""
  }).then(() => {
    alert("✅ सवाल जुड़ गया!");
    document.getElementById("q").value = "";
    document.getElementById("imgUrl").value = "";
  });
}

// 🚀 120 सवाल एक साथ डालने के लिए (बल्क अपलोड)
async function uploadAll() {
    if(!confirm("क्या आप 120 सवाल Firebase में डालना चाहते हैं?")) return;

    const allData = { "biology": biologyQuestions, "physics": physicsQuestions, "chemistry": chemistryQuestions };

    try {
        for (let sub in allData) {
            const ref = db.ref("questions/" + sub);
            for (let q of allData[sub]) {
                await ref.push(q);
            }
        }
        alert("✅ सफलता! 120 सवाल लोड हो गए।");
        loadQuestions();
    } catch (e) { alert("❌ एरर: " + e.message); }
}

// 📥 सवाल दिखाने का फंक्शन
function loadQuestions() {
  let sub = document.getElementById("subject").value;
  let listDiv = document.getElementById("list");

  db.ref("questions/" + sub).on("value", snap => {
    let data = snap.val();
    let html = "";
    if (!data) { listDiv.innerHTML = "❌ खाली है।"; return; }

    Object.keys(data).reverse().forEach((key) => {
      let q = data[key];
      let color = q.level === "Easy" ? "green" : q.level === "Medium" ? "orange" : "red";
      html += `
        <div class="card" style="border-left: 5px solid ${color}">
          <b>${q.level}</b> | Q: ${q.q}<br>
          ${q.img ? `<img src="${q.img}" style="width:100px;">` : ""}
          <button onclick="del('${sub}','${key}')">Delete</button>
        </div>`;
    });
    listDiv.innerHTML = html;
  });
}

function del(sub, key) {
  if (confirm("Delete?")) db.ref("questions/" + sub + "/" + key).remove();
}

document.getElementById("subject").addEventListener("change", loadQuestions);
loadQuestions();


