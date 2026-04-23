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
const physicsQuestions = [
  { q: "The unit of electrical resistance is?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 3, level: "Easy", img: "" },
  { q: "Which of the following is a vector quantity?", options: ["Mass", "Distance", "Displacement", "Speed"], answer: 3, level: "Easy", img: "" },
  { q: "Light year is a unit of?", options: ["Time", "Distance", "Intensity", "Velocity"], answer: 2, level: "Easy", img: "" },
  { q: "The value of 'g' (acceleration due to gravity) is maximum at?", options: ["Equator", "Poles", "Center of Earth", "None"], answer: 2, level: "Medium", img: "" },
  { q: "Newton's First Law of Motion is also known as?", options: ["Law of Inertia", "Law of Momentum", "Law of Action-Reaction", "Law of Gravity"], answer: 1, level: "Easy", img: "" },
  { q: "The working principle of an optical fiber is?", options: ["Refraction", "Scattering", "Total Internal Reflection", "Interference"], answer: 3, level: "Medium", img: "" },
  { q: "The power of a lens is measured in?", options: ["Watts", "Dioptres", "Candela", "Lumen"], answer: 2, level: "Easy", img: "" },
  { q: "Which color of light deviates the most through a prism?", options: ["Red", "Yellow", "Green", "Violet"], answer: 4, level: "Medium", img: "" },
  { q: "The escape velocity from the Earth's surface is approximately?", options: ["9.8 km/s", "11.2 km/s", "7.0 km/s", "15.0 km/s"], answer: 2, level: "Hard", img: "" },
  { q: "A transformer works on the principle of?", options: ["Self Induction", "Mutual Induction", "Eddy Currents", "None"], answer: 2, level: "Medium", img: "" },
  { q: "The energy of a photon is given by E = ?", options: ["mc^2", "hf", "mv", "qV"], answer: 2, level: "Medium", img: "" },
  { q: "Which mirror is used as a rear-view mirror in vehicles?", options: ["Plane", "Concave", "Convex", "Cylindrical"], answer: 3, level: "Easy", img: "" },
  { q: "Dimensional formula for Force is?", options: ["MLT^-1", "MLT^-2", "ML^2T^-2", "M^2LT^-1"], answer: 2, level: "Hard", img: "" },
  { q: "The resistance of an ideal ammeter is?", options: ["Infinite", "Very high", "Zero", "One Ohm"], answer: 3, level: "Medium", img: "" },
  { q: "Which electromagnetic wave has the shortest wavelength?", options: ["Radio waves", "Microwaves", "Gamma rays", "X-rays"], answer: 3, level: "Medium", img: "" },
  { q: "Surface tension of a liquid _______ with increase in temperature.", options: ["Increases", "Decreases", "Remains same", "Becomes zero"], answer: 2, level: "Hard", img: "" },
  { q: "The SI unit of magnetic flux is?", options: ["Tesla", "Weber", "Gauss", "Henry"], answer: 2, level: "Medium", img: "" },
  { q: "A semiconductor has ________ temperature coefficient of resistance.", options: ["Positive", "Negative", "Zero", "Infinite"], answer: 2, level: "Hard", img: "" },
  { q: "Sound waves in air are?", options: ["Transverse", "Longitudinal", "Electromagnetic", "None"], answer: 2, level: "Easy", img: "" },
  { q: "The focal length of a plane mirror is?", options: ["Zero", "One", "Infinity", "Negative"], answer: 3, level: "Medium", img: "" },
  { q: "Pascal is the unit of?", options: ["Force", "Pressure", "Energy", "Power"], answer: 2, level: "Easy", img: "" },
  { q: "Work done by a centripetal force is?", options: ["Positive", "Negative", "Zero", "Variable"], answer: 3, level: "Hard", img: "" },
  { q: "Which type of lens is used to correct Myopia?", options: ["Convex", "Concave", "Bifocal", "Cylindrical"], answer: 2, level: "Medium", img: "" },
  { q: "Coulomb's Law is valid for?", options: ["Point charges", "Linear charges", "Spherical charges", "All charges"], answer: 1, level: "Medium", img: "" },
  { q: "The unit of radioactivity is?", options: ["Fermi", "Curie", "Candela", "Tesla"], answer: 2, level: "Easy", img: "" },
  { q: "Potential energy of a spring is given by?", options: ["mgh", "1/2 mv^2", "1/2 kx^2", "F.d"], answer: 3, level: "Medium", img: "" },
  { q: "Kirchhoff's First Law is based on conservation of?", options: ["Energy", "Mass", "Charge", "Momentum"], answer: 3, level: "Hard", img: "" },
  { q: "The velocity of light is maximum in?", options: ["Water", "Glass", "Diamond", "Vacuum"], answer: 4, level: "Easy", img: "" },
  { q: "Hydraulic lift works on?", options: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Boyle's Law"], answer: 2, level: "Medium", img: "" },
  { q: "The color of the sky is blue due to?", options: ["Reflection", "Refraction", "Scattering", "Dispersion"], answer: 3, level: "Easy", img: "" },
  { q: "Unit of Inductance is?", options: ["Farad", "Henry", "Tesla", "Ohm"], answer: 2, level: "Medium", img: "" },
  { q: "Which logic gate is known as a Universal Gate?", options: ["AND", "OR", "NAND", "NOT"], answer: 3, level: "Medium", img: "" },
  { q: "The core of a transformer is laminated to reduce?", options: ["Hysteresis loss", "Copper loss", "Eddy current loss", "Flux leakage"], answer: 3, level: "Hard", img: "" },
  { q: "Relation between Celsius and Fahrenheit scale is?", options: ["C/5 = (F-32)/9", "C/9 = (F-32)/5", "C/5 = F/9", "C = F+273"], answer: 1, level: "Medium", img: "" },
  { q: "Modulus of rigidity is defined for?", options: ["Solids only", "Liquids only", "Gases only", "All"], answer: 1, level: "Hard", img: "" },
  { q: "Magnetic susceptibility of a diamagnetic substance is?", options: ["Positive", "Negative", "Zero", "Infinity"], answer: 2, level: "Hard", img: "" },
  { q: "Maximum efficiency of a half-wave rectifier is?", options: ["40.6%", "81.2%", "50%", "100%"], answer: 1, level: "Hard", img: "" },
  { q: "What is the frequency of DC current?", options: ["50 Hz", "60 Hz", "Zero", "Infinite"], answer: 3, level: "Easy", img: "" },
  { q: "Electric field inside a hollow charged conductor is?", options: ["Uniform", "Zero", "Infinite", "Negative"], answer: 2, level: "Medium", img: "" },
  { q: "The particle nature of light is shown by?", options: ["Interference", "Diffraction", "Photoelectric effect", "Polarization"], answer: 3, level: "Medium", img: "" }
];
    const chemistryQuestions = [
  { q: "What is the pH of pure water at 25°C?", options: ["0", "7", "14", "1"], answer: 2, level: "Easy", img: "" },
  { q: "Which gas is known as 'Laughing Gas'?", options: ["NO2", "N2O", "NO", "N2O5"], answer: 2, level: "Easy", img: "" },
  { q: "The chemical formula of Baking Soda is?", options: ["Na2CO3", "NaHCO3", "NaOH", "NaCl"], answer: 2, level: "Medium", img: "" },
  { q: "Which element has the highest electronegativity?", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], answer: 3, level: "Easy", img: "" },
  { q: "The transition elements are present in which block?", options: ["s-block", "p-block", "d-block", "f-block"], answer: 3, level: "Medium", img: "" },
  { q: "Which law states that PV = nRT?", options: ["Boyle's Law", "Charles's Law", "Ideal Gas Law", "Avogadro's Law"], answer: 3, level: "Easy", img: "" },
  { q: "The process of loss of electrons is called?", options: ["Reduction", "Oxidation", "Hydrogenation", "Neutralization"], answer: 2, level: "Medium", img: "" },
  { q: "Which acid is present in Vinegar?", options: ["Citric acid", "Lactic acid", "Acetic acid", "Formic acid"], answer: 3, level: "Easy", img: "" },
  { q: "Hardness of water is due to the presence of salts of?", options: ["Na & K", "Ca & Mg", "Fe & Al", "Zn & Cu"], answer: 2, level: "Hard", img: "" },
  { q: "What is the hybridisation of Carbon in Methane (CH4)?", options: ["sp", "sp2", "sp3", "dsp2"], answer: 3, level: "Medium", img: "" },
  { q: "Which catalyst is used in the Haber process for Ammonia?", options: ["Iron", "Platinum", "Nickel", "Vanadium"], answer: 1, level: "Medium", img: "" },
  { q: "The bond angle in a water molecule is approximately?", options: ["180°", "120°", "104.5°", "109.5°"], answer: 3, level: "Hard", img: "" },
  { q: "Which isotope of Hydrogen is radioactive?", options: ["Protium", "Deuterium", "Tritium", "None"], answer: 3, level: "Medium", img: "" },
  { q: "Diamond is an allotrope of?", options: ["Sulphur", "Carbon", "Silicon", "Phosphorus"], answer: 2, level: "Easy", img: "" },
  { q: "The common name of Sodium Carbonate (Na2CO3) is?", options: ["Baking Soda", "Washing Soda", "Caustic Soda", "Bleaching Powder"], answer: 2, level: "Medium", img: "" },
  { q: "Which metal is liquid at room temperature?", options: ["Sodium", "Mercury", "Gallium", "Silver"], answer: 2, level: "Easy", img: "" },
  { q: "A solution with pH 2 is how many times more acidic than pH 3?", options: ["2 times", "10 times", "100 times", "1/10 times"], answer: 2, level: "Hard", img: "" },
  { q: "Which gas is used in fire extinguishers?", options: ["O2", "N2", "CO2", "He"], answer: 3, level: "Easy", img: "" },
  { q: "The main component of LPG is?", options: ["Methane", "Propane & Butane", "Ethane", "Pentane"], answer: 2, level: "Medium", img: "" },
  { q: "Brass is an alloy of?", options: ["Cu & Sn", "Cu & Zn", "Fe & Cr", "Pb & Sn"], answer: 2, level: "Medium", img: "" },
  { q: "Which fuel has the highest calorific value?", options: ["Petrol", "Coal", "Hydrogen", "LPG"], answer: 3, level: "Medium", img: "" },
  { q: "The most abundant gas in the atmosphere is?", options: ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"], answer: 2, level: "Easy", img: "" },
  { q: "Which functional group is present in Alcohols?", options: ["-CHO", "-COOH", "-OH", "-CO-"], answer: 3, level: "Easy", img: "" },
  { q: "Temporary hardness of water is removed by?", options: ["Filtration", "Boiling", "Chlorination", "Sedimentation"], answer: 2, level: "Medium", img: "" },
  { q: "Which law is related to the solubility of gas in liquid?", options: ["Raoult's Law", "Henry's Law", "Dalton's Law", "Gay-Lussac's Law"], answer: 2, level: "Hard", img: "" },
  { q: "The oxidation number of Oxygen in OF2 is?", options: ["-2", "-1", "+1", "+2"], answer: 4, level: "Hard", img: "" },
  { q: "A buffer solution maintains a constant ______?", options: ["Temperature", "Pressure", "pH", "Volume"], answer: 3, level: "Medium", img: "" },
  { q: "PVC is a polymer of?", options: ["Ethylene", "Vinyl chloride", "Styrene", "Propylene"], answer: 2, level: "Medium", img: "" },
  { q: "Which non-metal is a good conductor of electricity?", options: ["Sulphur", "Graphite", "Iodine", "Diamond"], answer: 2, level: "Easy", img: "" },
  { q: "Atomic number is the number of ______ in an atom.", options: ["Neutrons", "Protons", "Electrons", "Mass"], answer: 2, level: "Easy", img: "" },
  { q: "The shape of XeF4 molecule is?", options: ["Tetrahedral", "Square Planar", "Octahedral", "Pyramidal"], answer: 2, level: "Hard", img: "" },
  { q: "Which acid is called 'King of Chemicals'?", options: ["HCl", "HNO3", "H2SO4", "H3PO4"], answer: 3, level: "Easy", img: "" },
  { q: "The functional group -COOH is?", options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"], answer: 3, level: "Medium", img: "" },
  { q: "Which metal is extracted from Bauxite?", options: ["Iron", "Copper", "Aluminium", "Magnesium"], answer: 3, level: "Medium", img: "" },
  { q: "Zwitter ion is formed by?", options: ["Carbohydrates", "Amino acids", "Fats", "Vitamins"], answer: 2, level: "Hard", img: "" },
  { q: "What is the bond order of O2?", options: ["1", "2", "3", "2.5"], answer: 2, level: "Medium", img: "" },
  { q: "Which law states that mass is neither created nor destroyed?", options: ["Law of Definite Proportions", "Law of Multiple Proportions", "Law of Conservation of Mass", "None"], answer: 3, level: "Easy", img: "" },
  { q: "The monomer of Natural Rubber is?", options: ["Neoprene", "Isoprene", "Chloroprene", "Butadiene"], answer: 2, level: "Hard", img: "" },
  { q: "Which element is used in solar cells?", options: ["Silicon", "Carbon", "Silver", "Aluminium"], answer: 1, level: "Medium", img: "" },
  { q: "The pH of human blood is approximately?", options: ["6.4", "7.0", "7.4", "8.0"], answer: 3, level: "Medium", img: "" }
];
                                              
