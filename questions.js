const questions = [

  // ===== BIOLOGY (1–40) =====
  {id:1,subject:"Biology",chapter:"Human Reproduction",q:"LH surge triggers:",options:["Ovulation","Menstruation","Implantation","Fertilization"],answer:0},
  {id:2,subject:"Biology",chapter:"Cell Biology",q:"Powerhouse of cell:",options:["Nucleus","Mitochondria","Golgi","ER"],answer:1},
  {id:3,subject:"Biology",chapter:"Genetics",q:"Monohybrid ratio:",options:["1:2:1","3:1","1:1","2:1"],answer:0},
  {id:4,subject:"Biology",chapter:"Plant Physiology",q:"CO2 acceptor in C3:",options:["PEP","RuBP","OAA","PGA"],answer:1},
  {id:5,subject:"Biology",chapter:"Ecology",q:"Energy flow:",options:["Cyclic","Unidirectional","Random","None"],answer:1},

  {id:6,subject:"Biology",chapter:"Human Physiology",q:"Oxygen transported by:",options:["Plasma","RBC","WBC","Platelets"],answer:1},
  {id:7,subject:"Biology",chapter:"Cell Biology",q:"Ribosome function:",options:["Respiration","Protein synthesis","Digestion","Transport"],answer:1},
  {id:8,subject:"Biology",chapter:"Genetics",q:"DNA replication phase:",options:["G1","S","G2","M"],answer:1},
  {id:9,subject:"Biology",chapter:"Plant Anatomy",q:"Xylem transports:",options:["Food","Water","Hormones","Gas"],answer:1},
  {id:10,subject:"Biology",chapter:"Evolution",q:"Darwin proposed:",options:["Mutation","Selection","Inheritance","Isolation"],answer:1},

  {id:11,subject:"Biology",chapter:"Ecology",q:"Producers are:",options:["Carnivores","Plants","Herbivores","Decomposers"],answer:1},
  {id:12,subject:"Biology",chapter:"Human Physiology",q:"Pacemaker of heart:",options:["SA node","AV node","Bundle","Purkinje"],answer:0},
  {id:13,subject:"Biology",chapter:"Genetics",q:"Phenotype ratio:",options:["3:1","1:2:1","2:1","1:1"],answer:0},
  {id:14,subject:"Biology",chapter:"Plant Physiology",q:"C4 plants show:",options:["Kranz anatomy","Low CO2","No enzyme","None"],answer:0},
  {id:15,subject:"Biology",chapter:"Cell Biology",q:"Lysosome contains:",options:["DNA","Enzymes","RNA","Protein"],answer:1},

  {id:16,subject:"Biology",chapter:"Human Physiology",q:"Insulin secreted by:",options:["Liver","Pancreas","Kidney","Heart"],answer:1},
  {id:17,subject:"Biology",chapter:"Genetics",q:"DNA discovered by:",options:["Mendel","Darwin","Watson-Crick","Lamarck"],answer:2},
  {id:18,subject:"Biology",chapter:"Plant Anatomy",q:"Phloem transports:",options:["Water","Food","Minerals","Gas"],answer:1},
  {id:19,subject:"Biology",chapter:"Ecology",q:"Food chain starts with:",options:["Carnivore","Producer","Herbivore","None"],answer:1},
  {id:20,subject:"Biology",chapter:"Cell Biology",q:"Cell membrane is:",options:["Permeable","Semi-permeable","Rigid","Static"],answer:1},

  {id:21,subject:"Biology",chapter:"Evolution",q:"Homologous organs show:",options:["Same function","Common origin","Different origin","None"],answer:1},
  {id:22,subject:"Biology",chapter:"Human Physiology",q:"Kidney filters:",options:["Blood","Oxygen","Food","Hormones"],answer:0},
  {id:23,subject:"Biology",chapter:"Genetics",q:"Alleles are:",options:["Genes","Traits","Cells","Proteins"],answer:0},
  {id:24,subject:"Biology",chapter:"Plant Physiology",q:"Photosynthesis occurs in:",options:["Root","Stem","Leaf","Flower"],answer:2},
  {id:25,subject:"Biology",chapter:"Cell Biology",q:"Nucleus contains:",options:["DNA","RNA","Protein","Enzyme"],answer:0},

  {id:26,subject:"Biology",chapter:"Human Physiology",q:"RBC lifespan:",options:["60","90","120","150"],answer:2},
  {id:27,subject:"Biology",chapter:"Genetics",q:"Mendel used:",options:["Pea plant","Wheat","Rice","Maize"],answer:0},
  {id:28,subject:"Biology",chapter:"Plant Anatomy",q:"Stomata function:",options:["Respiration","Transpiration","Photosynthesis","All"],answer:3},
  {id:29,subject:"Biology",chapter:"Ecology",q:"Trophic level means:",options:["Energy level","Food level","Species","None"],answer:0},
  {id:30,subject:"Biology",chapter:"Cell Biology",q:"Golgi function:",options:["Packaging","Digestion","Energy","None"],answer:0},

  {id:31,subject:"Biology",chapter:"Human Physiology",q:"Haemoglobin carries:",options:["Oxygen","CO2","Nitrogen","All"],answer:3},
  {id:32,subject:"Biology",chapter:"Genetics",q:"Cross between heterozygous:",options:["Monohybrid","Dihybrid","Test","Back"],answer:0},
  {id:33,subject:"Biology",chapter:"Plant Physiology",q:"Chlorophyll absorbs:",options:["Green","Red & Blue","UV","IR"],answer:1},
  {id:34,subject:"Biology",chapter:"Ecology",q:"Decomposers are:",options:["Bacteria","Plants","Animals","None"],answer:0},
  {id:35,subject:"Biology",chapter:"Cell Biology",q:"Cell wall in:",options:["Animals","Plants","Both","None"],answer:1},

  {id:36,subject:"Biology",chapter:"Human Physiology",q:"Blood group discovered by:",options:["Landsteiner","Darwin","Mendel","Pasteur"],answer:0},
  {id:37,subject:"Biology",chapter:"Genetics",q:"Mutation is:",options:["Change in gene","Growth","Division","None"],answer:0},
  {id:38,subject:"Biology",chapter:"Plant Anatomy",q:"Root absorbs:",options:["Water","Food","Gas","None"],answer:0},
  {id:39,subject:"Biology",chapter:"Ecology",q:"Biomass highest at:",options:["Top","Middle","Bottom","None"],answer:2},
  {id:40,subject:"Biology",chapter:"Cell Biology",q:"Mitochondria has:",options:["DNA","RNA","Both","None"],answer:2},

  // ===== PHYSICS (41–80) =====
  {id:41,subject:"Physics",chapter:"Kinematics",q:"Slope of v-t graph:",options:["Speed","Acceleration","Distance","Force"],answer:1},
  {id:42,subject:"Physics",chapter:"Motion",q:"Unit of velocity:",options:["m/s","m","s","kg"],answer:0},
  {id:43,subject:"Physics",chapter:"Work Energy",q:"KE formula:",options:["mv","½mv²","ma","v²"],answer:1},
  {id:44,subject:"Physics",chapter:"Laws of Motion",q:"F=ma is:",options:["1st","2nd","3rd","None"],answer:1},
  {id:45,subject:"Physics",chapter:"Electricity",q:"Ohm law:",options:["V=IR","P=VI","F=ma","E=mc²"],answer:0},

  {id:46,subject:"Physics",chapter:"Optics",q:"Mirror image:",options:["Real","Virtual","Inverted","Magnified"],answer:1},
  {id:47,subject:"Physics",chapter:"Modern Physics",q:"Photoelectric effect:",options:["Wave","Particle","Both","None"],answer:1},
  {id:48,subject:"Physics",chapter:"Thermodynamics",q:"Heat flows:",options:["Cold→Hot","Hot→Cold","Same","None"],answer:1},
  {id:49,subject:"Physics",chapter:"Units",q:"SI unit force:",options:["Newton","Joule","Watt","Pascal"],answer:0},
  {id:50,subject:"Physics",chapter:"Waves",q:"v=fλ",options:["True","False","None","Both"],answer:0},

  {id:51,subject:"Physics",chapter:"Current",q:"Unit current:",options:["Volt","Ampere","Ohm","Watt"],answer:1},
  {id:52,subject:"Physics",chapter:"Work Energy",q:"Work zero at:",options:["0","90","180","45"],answer:1},
  {id:53,subject:"Physics",chapter:"Motion",q:"Acceleration unit:",options:["m/s²","m/s","m","s"],answer:0},
  {id:54,subject:"Physics",chapter:"Electricity",q:"Resistance unit:",options:["Ohm","Volt","Amp","Watt"],answer:0},
  {id:55,subject:"Physics",chapter:"Optics",q:"Lens forms:",options:["Image","Shadow","Heat","None"],answer:0},

  {id:56,subject:"Physics",chapter:"Modern Physics",q:"E=mc² by:",options:["Newton","Einstein","Bohr","Planck"],answer:1},
  {id:57,subject:"Physics",chapter:"Motion",q:"Distance/time:",options:["Speed","Force","Energy","Work"],answer:0},
  {id:58,subject:"Physics",chapter:"Thermo",q:"Energy unit:",options:["Joule","Watt","Volt","Amp"],answer:0},
  {id:59,subject:"Physics",chapter:"Waves",q:"Frequency unit:",options:["Hz","m","s","kg"],answer:0},
  {id:60,subject:"Physics",chapter:"Current",q:"Battery gives:",options:["Current","Force","Heat","Light"],answer:0},

  // ===== CHEMISTRY (81–120) =====
  {id:81,subject:"Chemistry",chapter:"Atomic",q:"Orbital shape:",options:["n","l","m","s"],answer:1},
  {id:82,subject:"Chemistry",chapter:"Bonding",q:"Sigma bond:",options:["Side","End","None","Random"],answer:1},
  {id:83,subject:"Chemistry",chapter:"Thermo",q:"Exothermic:",options:["Absorb","Release","None","Cold"],answer:1},
  {id:84,subject:"Chemistry",chapter:"Organic",q:"Alkane:",options:["CnH2n","CnH2n+2","CnH2n-2","None"],answer:1},
  {id:85,subject:"Chemistry",chapter:"Inorganic",q:"Most EN:",options:["O","F","Cl","N"],answer:1},

  {id:86,subject:"Chemistry",chapter:"Electrochem",q:"Oxidation:",options:["Gain e","Loss e","Gain H","Loss O"],answer:1},
  {id:87,subject:"Chemistry",chapter:"Solutions",q:"pH neutral:",options:["0","7","14","1"],answer:1},
  {id:88,subject:"Chemistry",chapter:"Periodic",q:"Group 1:",options:["Alkali","Halogen","Noble","None"],answer:0},
  {id:89,subject:"Chemistry",chapter:"Organic",q:"Benzene:",options:["Alkane","Aromatic","Alkene","None"],answer:1},
  {id:90,subject:"Chemistry",chapter:"Bonding",q:"Ionic bond:",options:["Share","Transfer","Mix","None"],answer:1},

  {id:91,subject:"Chemistry",chapter:"Atomic",q:"Electron charge:",options:["+1","-1","0","+2"],answer:1},
  {id:92,subject:"Chemistry",chapter:"Thermo",q:"Endothermic:",options:["Release","Absorb","None","Hot"],answer:1},
  {id:93,subject:"Chemistry",chapter:"Organic",q:"Functional group:",options:["OH","Na","Cl2","H2"],answer:0},
  {id:94,subject:"Chemistry",chapter:"Periodic",q:"Atomic size increases:",options:["L→R","R→L","Up→Down","None"],answer:2},
  {id:95,subject:"Chemistry",chapter:"Electrochem",q:"Cathode:",options:["Reduction","Oxidation","Neutral","None"],answer:0},

  {id:96,subject:"Chemistry",chapter:"Bonding",q:"Covalent bond:",options:["Transfer","Sharing","None","Mix"],answer:1},
  {id:97,subject:"Chemistry",chapter:"Atomic",q:"Proton charge:",options:["+1","-1","0","+2"],answer:0},
  {id:98,subject:"Chemistry",chapter:"Thermo",q:"ΔH negative:",options:["Endo","Exo","None","Neutral"],answer:1},
  {id:99,subject:"Chemistry",chapter:"Organic",q:"Alcohol contains:",options:["OH","COOH","NH2","CHO"],answer:0},
  {id:100,subject:"Chemistry",chapter:"Periodic",q:"Halogens group:",options:["1","17","18","2"],answer:1},

  {id:101,subject:"Chemistry",chapter:"Solutions",q:"Molarity:",options:["mol/L","mol/kg","g/L","None"],answer:0},
  {id:102,subject:"Chemistry",chapter:"Electrochem",q:"Anode:",options:["Oxidation","Reduction","None","Neutral"],answer:0},
  {id:103,subject:"Chemistry",chapter:"Bonding",q:"H2 bond:",options:["Ionic","Covalent","Metallic","None"],answer:1},
  {id:104,subject:"Chemistry",chapter:"Atomic",q:"Neutron charge:",options:["+1","-1","0","None"],answer:2},
  {id:105,subject:"Chemistry",chapter:"Thermo",q:"Heat unit:",options:["Joule","Watt","Volt","Amp"],answer:0},

  {id:106,subject:"Chemistry",chapter:"Organic",q:"Alkene:",options:["CnH2n","CnH2n+2","CnH2n-2","None"],answer:0},
  {id:107,subject:"Chemistry",chapter:"Periodic",q:"Noble gases:",options:["1","2","17","18"],answer:3},
  {id:108,subject:"Chemistry",chapter:"Solutions",q:"Solvent:",options:["More qty","Less qty","Equal","None"],answer:0},
  {id:109,subject:"Chemistry",chapter:"Electrochem",q:"Electron flow:",options:["Anode→Cathode","Cathode→Anode","None","Random"],answer:0},
  {id:110,subject:"Chemistry",chapter:"Bonding",q:"Metallic bond:",options:["Sea electrons","Ionic","Covalent","None"],answer:0},

  {id:111,subject:"Chemistry",chapter:"Atomic",q:"Atomic number:",options:["Proton","Electron","Neutron","All"],answer:0},
  {id:112,subject:"Chemistry",chapter:"Thermo",q:"System exchanges:",options:["Energy","Matter","Both","None"],answer:2},
  {id:113,subject:"Chemistry",chapter:"Organic",q:"Ketone:",options:["CO","OH","NH2","None"],answer:0},
  {id:114,subject:"Chemistry",chapter:"Periodic",q:"Period number:",options:["Shells","Electrons","Protons","None"],answer:0},
  {id:115,subject:"Chemistry",chapter:"Solutions",q:"Dilute means:",options:["Low solute","High solute","Equal","None"],answer:0},

  {id:116,subject:"Chemistry",chapter:"Electrochem",q:"Salt bridge:",options:["Complete circuit","Break","None","Block"],answer:0},
  {id:117,subject:"Chemistry",chapter:"Bonding",q:"Polar bond:",options:["Unequal share","Equal share","None","Mix"],answer:0},
  {id:118,subject:"Chemistry",chapter:"Atomic",q:"Mass number:",options:["p+n","p","n","e"],answer:0},
  {id:119,subject:"Chemistry",chapter:"Thermo",q:"Work unit:",options:["Joule","Watt","Volt","Amp"],answer:0},
  {id:120,subject:"Chemistry",chapter:"Organic",q:"Methane:",options:["CH4","C2H6","C3H8","None"],answer:0},

];



