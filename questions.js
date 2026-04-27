const questions = [

/* ================= 🧬 BIOLOGY (50) ================= */

{q:"Powerhouse of cell is:",options:["Mitochondria","Golgi","Lysosome","Nucleus"],answer:0,subject:"Biology",chapter:"Cell"},
{q:"Ribosomes are made of:",options:["rRNA+protein","DNA","Protein only","RNA only"],answer:0,subject:"Biology",chapter:"Cell"},
{q:"SER function:",options:["Lipid synthesis","Protein synthesis","ATP","DNA"],answer:0,subject:"Biology",chapter:"Cell"},
{q:"Lysosomes contain:",options:["Hydrolytic enzymes","DNA","ATP","Lipids"],answer:0,subject:"Biology",chapter:"Cell"},
{q:"DNA replication phase:",options:["S phase","G1","G2","M"],answer:0,subject:"Biology",chapter:"Cell Cycle"},
{q:"Chromosomes align at:",options:["Metaphase","Prophase","Anaphase","Telophase"],answer:0,subject:"Biology",chapter:"Cell Cycle"},
{q:"Crossing over in:",options:["Prophase I","Metaphase","Anaphase","Telophase"],answer:0,subject:"Biology",chapter:"Genetics"},
{q:"Genetic material:",options:["DNA","RNA","Protein","Lipid"],answer:0,subject:"Biology",chapter:"Genetics"},
{q:"Father of genetics:",options:["Mendel","Darwin","Morgan","Watson"],answer:0,subject:"Biology",chapter:"Genetics"},
{q:"Aa x Aa ratio:",options:["3:1","1:1","9:3:3:1","2:1"],answer:0,subject:"Biology",chapter:"Genetics"},

{q:"Insulin secreted by:",options:["Beta cells","Alpha cells","Liver","Kidney"],answer:0,subject:"Biology",chapter:"Human Physiology"},
{q:"Oxygen carried by:",options:["Hemoglobin","Plasma","WBC","Platelets"],answer:0,subject:"Biology",chapter:"Human Physiology"},
{q:"Blood pH:",options:["7.4","6","8","5"],answer:0,subject:"Biology",chapter:"Human Physiology"},
{q:"Clotting vitamin:",options:["K","A","C","D"],answer:0,subject:"Biology",chapter:"Human Physiology"},
{q:"Kidney unit:",options:["Nephron","Neuron","Alveoli","Glomerulus"],answer:0,subject:"Biology",chapter:"Excretion"},
{q:"Max reabsorption:",options:["PCT","DCT","Loop","CD"],answer:0,subject:"Biology",chapter:"Excretion"},
{q:"Water impermeable part:",options:["Ascending loop","Descending","PCT","DCT"],answer:0,subject:"Biology",chapter:"Excretion"},
{q:"LH causes:",options:["Ovulation","Menstruation","Fertilization","Implantation"],answer:0,subject:"Biology",chapter:"Reproduction"},
{q:"Fertilization site:",options:["Fallopian tube","Uterus","Ovary","Vagina"],answer:0,subject:"Biology",chapter:"Reproduction"},
{q:"Human sperm is:",options:["Haploid","Diploid","Triploid","Polyploid"],answer:0,subject:"Biology",chapter:"Reproduction"},

{q:"Photosynthesis site:",options:["Chloroplast","Mitochondria","Nucleus","Golgi"],answer:0,subject:"Biology",chapter:"Plant Physiology"},
{q:"Light reaction in:",options:["Grana","Stroma","Cytosol","Membrane"],answer:0,subject:"Biology",chapter:"Plant Physiology"},
{q:"CO2 fixation in:",options:["Stroma","Grana","Cytosol","Matrix"],answer:0,subject:"Biology",chapter:"Plant Physiology"},
{q:"Primary pigment:",options:["Chl a","Chl b","Carotene","Xanthophyll"],answer:0,subject:"Biology",chapter:"Plant Physiology"},
{q:"Respiration occurs in:",options:["Mitochondria","Chloroplast","Nucleus","Golgi"],answer:0,subject:"Biology",chapter:"Plant Physiology"},

{q:"Most abundant Ig:",options:["IgG","IgA","IgM","IgE"],answer:0,subject:"Biology",chapter:"Immunity"},
{q:"First antibody:",options:["IgM","IgG","IgA","IgE"],answer:0,subject:"Biology",chapter:"Immunity"},
{q:"WBC function:",options:["Defense","Transport","Clotting","Digestion"],answer:0,subject:"Biology",chapter:"Immunity"},
{q:"Vaccine provides:",options:["Active immunity","Passive","Natural","None"],answer:0,subject:"Biology",chapter:"Immunity"},
{q:"Allergen causes:",options:["Allergy","Infection","Cancer","Mutation"],answer:0,subject:"Biology",chapter:"Immunity"},

{q:"Evolution theory:",options:["Darwin","Lamarck","Mendel","Haeckel"],answer:0,subject:"Biology",chapter:"Evolution"},
{q:"Homologous organs:",options:["Common ancestry","Same function","Different origin","None"],answer:0,subject:"Biology",chapter:"Evolution"},
{q:"Analogous organs:",options:["Same function","Same origin","No function","None"],answer:0,subject:"Biology",chapter:"Evolution"},
{q:"Fossils show:",options:["Evolution","Extinction","Adaptation","All"],answer:3,subject:"Biology",chapter:"Evolution"},
{q:"Natural selection means:",options:["Survival of fittest","Mutation","Isolation","Speciation"],answer:0,subject:"Biology",chapter:"Evolution"},

{q:"Energy flow:",options:["Unidirectional","Cyclic","Bidirectional","Random"],answer:0,subject:"Biology",chapter:"Ecology"},
{q:"10% law:",options:["Lindeman","Odum","Darwin","Mendel"],answer:0,subject:"Biology",chapter:"Ecology"},
{q:"Producers are:",options:["Autotrophs","Consumers","Decomposers","Parasites"],answer:0,subject:"Biology",chapter:"Ecology"},
{q:"Primary consumer:",options:["Herbivore","Carnivore","Omnivore","Producer"],answer:0,subject:"Biology",chapter:"Ecology"},
{q:"Top consumer:",options:["Tertiary","Primary","Secondary","Producer"],answer:0,subject:"Biology",chapter:"Ecology"},

{q:"Vitamin C deficiency:",options:["Scurvy","Rickets","Night blindness","Anemia"],answer:0,subject:"Biology",chapter:"Health"},
{q:"Vitamin D deficiency:",options:["Rickets","Scurvy","Beriberi","Anemia"],answer:0,subject:"Biology",chapter:"Health"},
{q:"Vitamin A deficiency:",options:["Night blindness","Rickets","Scurvy","Anemia"],answer:0,subject:"Biology",chapter:"Health"},
{q:"Balanced diet includes:",options:["All nutrients","Protein only","Fat only","Carb only"],answer:0,subject:"Biology",chapter:"Health"},
{q:"BMI indicates:",options:["Body fitness","Height","Weight","Age"],answer:0,subject:"Biology",chapter:"Health"},

/* ================= ⚗️ CHEMISTRY (25) ================= */

{q:"Highest electronegativity:",options:["F","Cl","O","N"],answer:0,subject:"Chemistry",chapter:"Periodic"},
{q:"Highest IE:",options:["He","Ne","F","O"],answer:0,subject:"Chemistry",chapter:"Periodic"},
{q:"Atomic size increases:",options:["Down group","Across period","Up group","None"],answer:0,subject:"Chemistry",chapter:"Periodic"},
{q:"Zero dipole:",options:["CO2","NH3","H2O","SO2"],answer:0,subject:"Chemistry",chapter:"Bonding"},
{q:"Ionic bond in:",options:["NaCl","CH4","CO2","H2O"],answer:0,subject:"Chemistry",chapter:"Bonding"},

{q:"Strong electrolyte:",options:["HCl","NH3","H2O","CH3COOH"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},
{q:"pH neutral:",options:["7","0","14","1"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},
{q:"Acid gives:",options:["H+","OH-","e-","n"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},
{q:"Base gives:",options:["OH-","H+","e-","n"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},
{q:"Buffer resists:",options:["pH change","Temp change","Pressure","Volume"],answer:0,subject:"Chemistry",chapter:"Equilibrium"},

{q:"Exothermic:",options:["Combustion","Melting","Boiling","Sublimation"],answer:0,subject:"Chemistry",chapter:"Thermodynamics"},
{q:"Endothermic:",options:["Melting","Combustion","Freezing","Condensation"],answer:0,subject:"Chemistry",chapter:"Thermodynamics"},
{q:"V∝1/P:",options:["Boyle","Charles","Avogadro","Ohm"],answer:0,subject:"Chemistry",chapter:"Thermodynamics"},
{q:"V∝T:",options:["Charles","Boyle","Ohm","Faraday"],answer:0,subject:"Chemistry",chapter:"Thermodynamics"},
{q:"n∝V:",options:["Avogadro","Boyle","Charles","Ohm"],answer:0,subject:"Chemistry",chapter:"Thermodynamics"},

{q:"Oxidation:",options:["Loss e-","Gain e-","Gain H","Loss O"],answer:0,subject:"Chemistry",chapter:"Redox"},
{q:"Reduction:",options:["Gain e-","Loss e-","Loss H","Gain O"],answer:0,subject:"Chemistry",chapter:"Redox"},
{q:"Reducing agent:",options:["Donates e-","Accepts e-","Gives H+","None"],answer:0,subject:"Chemistry",chapter:"Redox"},
{q:"Oxidizing agent:",options:["Accepts e-","Donates e-","Gives H","None"],answer:0,subject:"Chemistry",chapter:"Redox"},
{q:"Catalyst does:",options:["Increase rate","Change eq","Change ΔH","None"],answer:0,subject:"Chemistry",chapter:"Kinetics"},

{q:"Diamond bond:",options:["Covalent","Ionic","Metallic","H-bond"],answer:0,subject:"Chemistry",chapter:"Bonding"},
{q:"Graphite conducts:",options:["Yes","No","Partial","None"],answer:0,subject:"Chemistry",chapter:"Bonding"},
{q:"Most stable gas:",options:["He","Ne","Ar","Kr"],answer:0,subject:"Chemistry",chapter:"Periodic"},
{q:"Mole =:",options:["6.022e23","3e8","1e23","None"],answer:0,subject:"Chemistry",chapter:"Basic"},
{q:"Molar mass unit:",options:["g/mol","kg","g","mol"],answer:0,subject:"Chemistry",chapter:"Basic"},

/* ================= ⚡ PHYSICS (25) ================= */

{q:"Unit force:",options:["Newton","Joule","Watt","Pascal"],answer:0,subject:"Physics",chapter:"Mechanics"},
{q:"Acceleration unit:",options:["m/s²","m/s","m","s"],answer:0,subject:"Physics",chapter:"Mechanics"},
{q:"Velocity is:",options:["Vector","Scalar","Constant","None"],answer:0,subject:"Physics",chapter:"Mechanics"},
{q:"Momentum:",options:["mv","ma","Fv","m/v"],answer:0,subject:"Physics",chapter:"Mechanics"},
{q:"F=ma law:",options:["Newton 2nd","1st","3rd","Gravitation"],answer:0,subject:"Physics",chapter:"Mechanics"},

{q:"Work unit:",options:["Joule","Newton","Watt","Pascal"],answer:0,subject:"Physics",chapter:"Work Energy"},
{q:"Work 90°:",options:["Zero","Max","Neg","Inf"],answer:0,subject:"Physics",chapter:"Work Energy"},
{q:"K.E:",options:["1/2mv²","mv","ma","Fd"],answer:0,subject:"Physics",chapter:"Work Energy"},
{q:"P.E:",options:["mgh","mv²","Fd","VIt"],answer:0,subject:"Physics",chapter:"Work Energy"},
{q:"Power unit:",options:["Watt","Joule","Volt","Amp"],answer:0,subject:"Physics",chapter:"Work Energy"},

{q:"Ohm law:",options:["V=IR","F=ma","E=mc²","P=VI"],answer:0,subject:"Physics",chapter:"Electricity"},
{q:"Resistance unit:",options:["Ohm","Volt","Amp","Watt"],answer:0,subject:"Physics",chapter:"Electricity"},
{q:"Current unit:",options:["Ampere","Volt","Ohm","Watt"],answer:0,subject:"Physics",chapter:"Electricity"},
{q:"Voltage unit:",options:["Volt","Amp","Ohm","Joule"],answer:0,subject:"Physics",chapter:"Electricity"},
{q:"Power formula:",options:["VI","IR","V/R","None"],answer:0,subject:"Physics",chapter:"Electricity"},

{q:"Light speed:",options:["3×10^8","3×10^6","3×10^5","3×10^7"],answer:0,subject:"Physics",chapter:"Optics"},
{q:"Mirror formula:",options:["1/f=1/v+1/u","v=IR","F=ma","None"],answer:0,subject:"Physics",chapter:"Optics"},
{q:"Lens unit:",options:["Dioptre","Watt","Volt","Ohm"],answer:0,subject:"Physics",chapter:"Optics"},
{q:"Wave needs medium:",options:["Sound","Light","X-ray","Gamma"],answer:0,subject:"Physics",chapter:"Waves"},
{q:"Frequency unit:",options:["Hz","J","W","N"],answer:0,subject:"Physics",chapter:"Waves"},

{q:"Charge unit:",options:["Coulomb","Amp","Volt","Ohm"],answer:0,subject:"Physics",chapter:"Electrostatics"},
{q:"E field unit:",options:["N/C","J/C","V/A","Ohm"],answer:0,subject:"Physics",chapter:"Electrostatics"},
{q:"Capacitor energy:",options:["1/2CV²","CV","V/C","C/V"],answer:0,subject:"Physics",chapter:"Electrostatics"},
{q:"Magnetic unit:",options:["Tesla","Newton","Volt","Amp"],answer:0,subject:"Physics",chapter:"Magnetism"},
{q:"Transformer works on:",options:["Mutual induction","Ohm law","Faraday","Lenz"],answer:0,subject:"Physics",chapter:"EMI"}

];

