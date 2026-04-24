const questions = [

/* 🧬 BIOLOGY (20) */
{q:"Which of the following is not a function of cell membrane?",options:["Transport","Protection","Respiration","Cell recognition"],answer:2},
{q:"DNA replication occurs in which phase?",options:["G1","S","G2","M"],answer:1},
{q:"Which enzyme is used in DNA replication?",options:["Ligase","Amylase","Pepsin","Lipase"],answer:0},
{q:"Which organelle lacks membrane?",options:["Ribosome","Mitochondria","Nucleus","Golgi"],answer:0},
{q:"Which hormone increases blood glucose?",options:["Insulin","Glucagon","Thyroxine","Melatonin"],answer:1},

{q:"Which vitamin deficiency causes rickets?",options:["A","B","C","D"],answer:3},
{q:"Where does glycolysis occur?",options:["Mitochondria","Cytoplasm","Nucleus","Chloroplast"],answer:1},
{q:"Which gas is released in photosynthesis?",options:["CO2","O2","N2","H2"],answer:1},
{q:"Which structure controls cell activities?",options:["Nucleus","Ribosome","Golgi","Lysosome"],answer:0},
{q:"Which is the functional unit of kidney?",options:["Neuron","Nephron","Alveoli","Villus"],answer:1},

{q:"Which blood cells fight infection?",options:["RBC","WBC","Platelets","Plasma"],answer:1},
{q:"Which part of brain controls balance?",options:["Cerebrum","Cerebellum","Medulla","Thalamus"],answer:1},
{q:"Which pigment gives green color to plants?",options:["Carotene","Chlorophyll","Xanthophyll","Anthocyanin"],answer:1},
{q:"Which biomolecule stores energy?",options:["Protein","Carbohydrate","Vitamin","Mineral"],answer:1},
{q:"Which process forms ATP?",options:["Respiration","Digestion","Absorption","Circulation"],answer:0},

{q:"Which hormone regulates metabolism?",options:["Insulin","Thyroxine","Adrenaline","Estrogen"],answer:1},
{q:"Which structure is found only in plant cell?",options:["Cell wall","Mitochondria","Nucleus","Ribosome"],answer:0},
{q:"Which type of RNA carries amino acids?",options:["mRNA","tRNA","rRNA","DNA"],answer:1},
{q:"Which disease is caused by virus?",options:["Malaria","TB","COVID-19","Typhoid"],answer:2},
{q:"Which organ filters blood?",options:["Heart","Kidney","Liver","Lungs"],answer:1},

/* ⚗️ CHEMISTRY (15) */
{q:"Which law states PV=constant?",options:["Boyle's law","Charles law","Avogadro law","Ohm law"],answer:0},
{q:"Which has highest electronegativity?",options:["F","O","Cl","N"],answer:0},
{q:"Which is strongest acid?",options:["HCl","H2SO4","HNO3","HF"],answer:1},
{q:"Which element has atomic number 1?",options:["H","He","O","N"],answer:0},
{q:"Which bond is strongest?",options:["Single","Double","Triple","Hydrogen"],answer:2},

{q:"Which gas is used in photosynthesis?",options:["O2","CO2","N2","H2"],answer:1},
{q:"Which type of reaction is combustion?",options:["Exothermic","Endothermic","Neutral","Redox"],answer:0},
{q:"Which metal is liquid at room temp?",options:["Hg","Na","Fe","Cu"],answer:0},
{q:"Which pH is basic?",options:["<7","=7",">7","0"],answer:2},
{q:"Which element forms 4 bonds?",options:["C","O","H","N"],answer:0},

{q:"Which gas is inert?",options:["He","O2","CO2","H2"],answer:0},
{q:"Which compound is organic?",options:["CH4","NaCl","H2O","CO2"],answer:0},
{q:"Which has highest boiling point?",options:["Water","Methane","CO2","O2"],answer:0},
{q:"Which acid is present in stomach?",options:["HCl","H2SO4","HNO3","CH3COOH"],answer:0},
{q:"Which process is oxidation?",options:["Loss of e-","Gain of e-","Gain H","Loss O"],answer:0},

/* ⚡ PHYSICS (15) */
{q:"Unit of work?",options:["Joule","Watt","Newton","Pascal"],answer:0},
{q:"Which law relates V and I?",options:["Ohm","Newton","Hooke","Boyle"],answer:0},
{q:"Acceleration due to gravity?",options:["9.8","10","8","5"],answer:0},
{q:"Unit of power?",options:["Watt","Joule","Volt","Ampere"],answer:0},
{q:"Speed of light?",options:["3×10^8","1×10^6","9.8","5×10^7"],answer:0},

{q:"Unit of resistance?",options:["Ohm","Volt","Amp","Watt"],answer:0},
{q:"Energy formula?",options:["E=mc²","F=ma","V=IR","P=VI"],answer:0},
{q:"Force formula?",options:["F=ma","E=mc²","P=VI","V=IR"],answer:0},
{q:"Pressure formula?",options:["F/A","A/F","F×A","A×F"],answer:0},
{q:"Frequency unit?",options:["Hz","Watt","Volt","Amp"],answer:0},

{q:"Time unit?",options:["Second","Meter","Kg","Amp"],answer:0},
{q:"Velocity formula?",options:["d/t","t/d","d×t","t+d"],answer:0},
{q:"Current formula?",options:["I=Q/t","V=IR","P=VI","F=ma"],answer:0},
{q:"Density formula?",options:["m/v","v/m","m×t","t/m"],answer:0},
{q:"Work formula?",options:["F×d","m×a","V×I","P×t"],answer:0}


/* 🧬 BIOLOGY (20) */
{q:"Which cell organelle is called suicide bag?",options:["Lysosome","Ribosome","Nucleus","Golgi"],answer:0},
{q:"Which enzyme breaks starch?",options:["Amylase","Lipase","Protease","Ligase"],answer:0},
{q:"Which part of neuron receives impulses?",options:["Axon","Dendrite","Synapse","Node"],answer:1},
{q:"Which hormone is secreted in stress?",options:["Adrenaline","Insulin","Thyroxine","Melatonin"],answer:0},
{q:"Which blood component helps in clotting?",options:["Platelets","RBC","WBC","Plasma"],answer:0},

{q:"Which part of plant conducts photosynthesis?",options:["Leaf","Root","Stem","Flower"],answer:0},
{q:"Which process converts glucose to energy?",options:["Respiration","Photosynthesis","Digestion","Absorption"],answer:0},
{q:"Which gas is absorbed during respiration?",options:["O2","CO2","N2","H2"],answer:0},
{q:"Which disease affects lungs?",options:["Tuberculosis","Diabetes","Cancer","Malaria"],answer:0},
{q:"Which vitamin helps in blood clotting?",options:["A","B","C","K"],answer:3},

{q:"Which organ produces bile?",options:["Liver","Kidney","Heart","Pancreas"],answer:0},
{q:"Which cell lacks nucleus?",options:["RBC","WBC","Neuron","Muscle"],answer:0},
{q:"Which structure stores water in plant cell?",options:["Vacuole","Nucleus","Chloroplast","Golgi"],answer:0},
{q:"Which process forms gametes?",options:["Meiosis","Mitosis","Binary fission","Budding"],answer:0},
{q:"Which kingdom includes bacteria?",options:["Monera","Protista","Fungi","Plantae"],answer:0},

{q:"Which tissue connects bones?",options:["Ligament","Tendon","Cartilage","Muscle"],answer:0},
{q:"Which pigment absorbs light?",options:["Chlorophyll","Hemoglobin","Melanin","Keratin"],answer:0},
{q:"Which part controls breathing?",options:["Medulla","Cerebrum","Cerebellum","Spinal cord"],answer:0},
{q:"Which organ stores urine?",options:["Bladder","Kidney","Liver","Heart"],answer:0},
{q:"Which structure protects brain?",options:["Skull","Rib","Femur","Spine"],answer:0},

/* ⚗️ CHEMISTRY (15) */
{q:"Which particle has no charge?",options:["Neutron","Proton","Electron","Ion"],answer:0},
{q:"Which element is most reactive?",options:["Fluorine","Oxygen","Nitrogen","Chlorine"],answer:0},
{q:"Which compound is basic?",options:["NaOH","HCl","CO2","H2SO4"],answer:0},
{q:"Which reaction releases heat?",options:["Exothermic","Endothermic","Neutral","Redox"],answer:0},
{q:"Which gas is colorless and odorless?",options:["O2","CO2","N2","All"],answer:3},

{q:"Which metal is most reactive?",options:["K","Na","Fe","Cu"],answer:0},
{q:"Which acid is weak?",options:["CH3COOH","HCl","H2SO4","HNO3"],answer:0},
{q:"Which is noble gas?",options:["Ne","O2","CO2","H2"],answer:0},
{q:"Which element is liquid?",options:["Hg","Na","Fe","Cu"],answer:0},
{q:"Which process is reduction?",options:["Gain e-","Loss e-","Gain O","Loss H"],answer:0},

{q:"Which element has valency 1?",options:["H","O","C","N"],answer:0},
{q:"Which salt is neutral?",options:["NaCl","HCl","NaOH","H2SO4"],answer:0},
{q:"Which compound is covalent?",options:["CH4","NaCl","KCl","CaO"],answer:0},
{q:"Which gas supports combustion?",options:["O2","CO2","N2","H2"],answer:0},
{q:"Which process absorbs heat?",options:["Endothermic","Exothermic","Neutral","Redox"],answer:0},

/* ⚡ PHYSICS (15) */
{q:"Unit of momentum?",options:["kg m/s","Newton","Joule","Watt"],answer:0},
{q:"Momentum formula?",options:["mv","ma","v/t","d/t"],answer:0},
{q:"Unit of pressure?",options:["Pascal","Newton","Joule","Watt"],answer:0},
{q:"Which force pulls objects to Earth?",options:["Gravity","Magnetic","Electric","Friction"],answer:0},
{q:"Unit of energy?",options:["Joule","Watt","Volt","Amp"],answer:0},

{q:"Which instrument measures current?",options:["Ammeter","Voltmeter","Barometer","Thermometer"],answer:0},
{q:"Which measures voltage?",options:["Voltmeter","Ammeter","Barometer","Thermometer"],answer:0},
{q:"Which lens converges light?",options:["Convex","Concave","Plane","None"],answer:0},
{q:"Which mirror diverges light?",options:["Convex","Concave","Plane","None"],answer:0},
{q:"Unit of frequency?",options:["Hz","Watt","Volt","Amp"],answer:0},

{q:"Which energy is stored energy?",options:["Potential","Kinetic","Thermal","Light"],answer:0},
{q:"Which energy is motion?",options:["Kinetic","Potential","Thermal","Light"],answer:0},
{q:"Unit of time?",options:["Second","Meter","Kg","Amp"],answer:0},
{q:"Unit of speed?",options:["m/s","km","m","s"],answer:0},
{q:"Which wave needs medium?",options:["Sound","Light","X-ray","Gamma"],answer:0}

];
