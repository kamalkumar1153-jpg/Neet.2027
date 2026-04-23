// Bulk Upload Function
async function bulkUpload(subjectName, questionsArray) {
    console.log(`Starting upload for ${subjectName}...`);
    
    const ref = db.ref("questions/" + subjectName);
    
    for (let q of questionsArray) {
        try {
            await ref.push(q);
            console.log("Uploaded: " + q.q.substring(0, 20) + "...");
        } catch (error) {
            console.error("Error uploading question:", error);
        }
    }
    
    alert(`✅ ${subjectName} के सभी सवाल सफलतापूर्वक अपलोड हो गए!`);
}

// इसे चलाने के लिए: bulkUpload("biology", biologyQuestions);
const biologyQuestions = [
  { q: "The functional unit of inheritance is?", options: ["Gene", "Allele", "DNA", "Chromosome"], answer: 1, level: "Easy", img: "" },
  { q: "Which organelle is known as the 'Powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], answer: 2, level: "Easy", img: "" },
  { q: "Who is known as the Father of Genetics?", options: ["Darwin", "Mendel", "Lamarck", "Morgan"], answer: 2, level: "Easy", img: "" },
  { q: "Double fertilization is a characteristic of?", options: ["Algae", "Gymnosperms", "Angiosperms", "Bryophytes"], answer: 3, level: "Medium", img: "" },
  { q: "The 'Master Gland' of the human body is?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], answer: 3, level: "Easy", img: "" },
  { q: "Which hormone is called the 'Emergency Hormone'?", options: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"], answer: 3, level: "Easy", img: "" },
  { q: "The term 'Cell' was coined by?", options: ["Robert Hooke", "Leeuwenhoek", "Schwann", "Virchow"], answer: 1, level: "Easy", img: "" },
  { q: "Which part of the brain controls body balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"], answer: 2, level: "Medium", img: "" },
  { q: "The oxygen-carrying pigment in blood is?", options: ["Albumin", "Hemoglobin", "Globulin", "Fibrinogen"], answer: 2, level: "Easy", img: "" },
  { q: "Which plant tissue is responsible for transporting water?", options: ["Phloem", "Parenchyma", "Xylem", "Collenchyma"], answer: 3, level: "Easy", img: "" },
  { q: "The site of protein synthesis is?", options: ["Lysosome", "Ribosome", "Vacuole", "Nucleus"], answer: 2, level: "Easy", img: "" },
  { q: "Which of the following is a vestigial organ?", options: ["Heart", "Lungs", "Vermiform Appendix", "Kidney"], answer: 3, level: "Easy", img: "" },
  { q: "Energy currency of the cell is?", options: ["AMP", "ADP", "ATP", "GTP"], answer: 3, level: "Easy", img: "" },
  { q: "Universal blood donor group is?", options: ["A", "B", "AB", "O"], answer: 4, level: "Easy", img: "" },
  { q: "Which vitamin is synthesized in the skin using sunlight?", options: ["Vit A", "Vit B", "Vit C", "Vit D"], answer: 4, level: "Easy", img: "" },
  { q: "Functional unit of the kidney is?", options: ["Neuron", "Nephron", "Alveoli", "Islet"], answer: 2, level: "Easy", img: "" },
  { q: "The study of fungi is known as?", options: ["Phycology", "Mycology", "Cytology", "Histology"], answer: 2, level: "Medium", img: "" },
  { q: "Which blood cells help in blood clotting?", options: ["RBCs", "WBCs", "Platelets", "Lymphocytes"], answer: 3, level: "Easy", img: "" },
  { q: "Bile is produced by which organ?", options: ["Stomach", "Pancreas", "Liver", "Gall Bladder"], answer: 3, level: "Medium", img: "" },
  { q: "The process of mRNA synthesis from DNA is?", options: ["Translation", "Transcription", "Replication", "Mutation"], answer: 2, level: "Hard", img: "" },
  { q: "Number of chromosomes in a normal human cell?", options: ["23", "44", "46", "48"], answer: 3, level: "Easy", img: "" },
  { q: "Which hormone regulates blood sugar levels?", options: ["Glucagon", "Insulin", "Thyroxine", "Both 1 & 2"], answer: 4, level: "Medium", img: "" },
  { q: "The main site of photosynthesis in plants is?", options: ["Stem", "Leaf", "Root", "Flower"], answer: 2, level: "Easy", img: "" },
  { q: "Which gas is released during photosynthesis?", options: ["CO2", "O2", "N2", "H2"], answer: 2, level: "Easy", img: "" },
  { q: "Hardest substance in the human body?", options: ["Bone", "Enamel", "Cartilage", "Muscle"], answer: 2, level: "Easy", img: "" },
  { q: "The 'Suicidal Bags' of the cell are?", options: ["Ribosomes", "Lysosomes", "Vacuoles", "Peroxisomes"], answer: 2, level: "Easy", img: "" },
  { q: "Blood pressure is measured by?", options: ["Stethoscope", "Sphygmomanometer", "Thermometer", "Barometer"], answer: 2, level: "Medium", img: "" },
  { q: "Which part of the flower becomes the fruit?", options: ["Ovule", "Ovary", "Stamen", "Petal"], answer: 2, level: "Medium", img: "" },
  { q: "The smallest unit of life is?", options: ["Tissue", "Organ", "Cell", "Atom"], answer: 3, level: "Easy", img: "" },
  { q: "Plants that grow in salty water are?", options: ["Mesophytes", "Xerophytes", "Halophytes", "Hydrophytes"], answer: 3, level: "Hard", img: "" },
  { q: "Which acid is present in the human stomach?", options: ["H2SO4", "HNO3", "HCl", "CH3COOH"], answer: 3, level: "Easy", img: "" },
  { q: "The structural unit of bone is?", options: ["Osteocyte", "Chondrocyte", "Nephron", "Neuron"], answer: 1, level: "Hard", img: "" },
  { q: "Which organism is known as 'Farmer's Friend'?", options: ["Honeybee", "Earthworm", "Snake", "Ant"], answer: 2, level: "Easy", img: "" },
  { q: "Total number of bones in an adult human?", options: ["200", "206", "300", "212"], answer: 2, level: "Easy", img: "" },
  { q: "The long extension of a neuron is?", options: ["Dendrite", "Axon", "Cyton", "Synapse"], answer: 2, level: "Medium", img: "" },
  { q: "Which mineral is required for thyroid function?", options: ["Iron", "Calcium", "Iodine", "Magnesium"], answer: 3, level: "Easy", img: "" },
  { q: "Deficiency of Vitamin A causes?", options: ["Scurvy", "Rickets", "Night Blindness", "Beriberi"], answer: 3, level: "Easy", img: "" },
  { q: "The gas exchange in lungs occurs in?", options: ["Bronchi", "Alveoli", "Trachea", "Larynx"], answer: 2, level: "Medium", img: "" },
  { q: "Which hormone promotes fruit ripening?", options: ["Auxin", "Gibberellin", "Ethylene", "Cytokinin"], answer: 3, level: "Hard", img: "" },
  { q: "Penicillin was discovered by?", options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Robert Koch"], answer: 2, level: "Easy", img: "" }
];
