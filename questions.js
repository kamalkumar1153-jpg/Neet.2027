const realTest = [

  // ===== BIOLOGY (1–45) =====
  {q:"Bohr effect refers to:",options:["O2 binding","CO2 transport","pH effect on Hb","All"],answer:2},
  {q:"Progesterone function:",options:["Ovulation","Pregnancy maintain","Menstruation","None"],answer:1},
  {q:"DNA replication is:",options:["Conservative","Semi-conservative","Dispersive","None"],answer:1},
  {q:"PCR enzyme:",options:["DNA pol I","Taq polymerase","Ligase","RNA pol"],answer:1},
  {q:"C4 plants show:",options:["No Rubisco","Kranz anatomy","Low CO2","None"],answer:1},

  {q:"Osmosis involves:",options:["Solute","Water","Energy","None"],answer:1},
  {q:"Blood clotting requires:",options:["Ca2+","Na+","K+","Mg2+"],answer:0},
  {q:"Mendel law applies to:",options:["Linked","Unlinked","Mutated","None"],answer:1},
  {q:"ATP formed in:",options:["Golgi","Mitochondria","ER","Nucleus"],answer:1},
  {q:"Transpiration via:",options:["Cuticle","Stomata","Root","Stem"],answer:1},

  {q:"Insulin secreted by:",options:["Liver","Pancreas","Kidney","Heart"],answer:1},
  {q:"Gene located on:",options:["Protein","DNA","RNA","None"],answer:1},
  {q:"Photosynthesis occurs in:",options:["Root","Leaf","Stem","Flower"],answer:1},
  {q:"Cell discovered by:",options:["Hooke","Darwin","Mendel","Pasteur"],answer:0},
  {q:"RBC lifespan:",options:["60","90","120","150"],answer:2},

  {q:"Pacemaker of heart:",options:["SA node","AV node","Bundle","Purkinje"],answer:0},
  {q:"Phenotype ratio:",options:["3:1","1:2:1","2:1","1:1"],answer:0},
  {q:"Xylem transports:",options:["Food","Water","Gas","Hormone"],answer:1},
  {q:"Food chain starts:",options:["Carnivore","Producer","Herbivore","None"],answer:1},
  {q:"Cell membrane is:",options:["Permeable","Semi-permeable","Rigid","None"],answer:1},

  {q:"Homologous organs:",options:["Same function","Common origin","Different origin","None"],answer:1},
  {q:"Kidney filters:",options:["Blood","O2","Food","Hormone"],answer:0},
  {q:"Alleles are:",options:["Genes","Traits","Cells","Protein"],answer:0},
  {q:"Chlorophyll absorbs:",options:["Green","Red/Blue","UV","IR"],answer:1},
  {q:"Golgi function:",options:["Packaging","Energy","Digestion","None"],answer:0},

  {q:"Haemoglobin carries:",options:["O2","CO2","Both","None"],answer:2},
  {q:"Mutation is:",options:["Gene change","Growth","Division","None"],answer:0},
  {q:"Root absorbs:",options:["Water","Food","Gas","None"],answer:0},
  {q:"Biomass highest:",options:["Top","Middle","Bottom","None"],answer:2},
  {q:"Mitochondria has:",options:["DNA","RNA","Both","None"],answer:2},

  {q:"WBC function:",options:["Transport","Immunity","Clot","None"],answer:1},
  {q:"Carrier is:",options:["Affected","Normal","Heterozygous","None"],answer:2},
  {q:"Cell theory:",options:["Hooke","Schleiden","Both","None"],answer:2},
  {q:"Water moves by:",options:["Diffusion","Osmosis","Active","None"],answer:1},
  {q:"Platelets help:",options:["Transport","Clotting","Digestion","None"],answer:1},

  {q:"Prokaryotes lack:",options:["Nucleus","Membrane","Cytoplasm","Ribosome"],answer:0},
  {q:"Population means:",options:["Species group","Individual","None","Cell"],answer:0},
  {q:"Survival of fittest:",options:["Darwin","Lamarck","Mendel","None"],answer:0},
  {q:"Breathing control:",options:["Brain","Heart","Lungs","Kidney"],answer:0},
  {q:"Chromosomes carry:",options:["Genes","Cells","Proteins","None"],answer:0},

  {q:"Leaf pigments:",options:["Chlorophyll","Carotene","Xanthophyll","All"],answer:3},
  {q:"Biodiversity highest:",options:["Desert","Tropics","Poles","None"],answer:1},
  {q:"Liver stores:",options:["Protein","Glycogen","Fat","Water"],answer:1},
  {q:"Greenhouse gas:",options:["CO2","O2","N2","H2"],answer:0},
  {q:"Membrane lipid:",options:["Phospholipid","Protein","Carb","None"],answer:0},

  // ===== PHYSICS (46–67) =====
  {q:"Acceleration:",options:["v/t","dv/dt","s/t","None"],answer:1},
  {q:"Work zero angle:",options:["0","90","180","45"],answer:1},
  {q:"Electric field unit:",options:["N/C","Volt","Amp","Ohm"],answer:0},
  {q:"Mirror formula:",options:["1/f=1/v+1/u","V=IR","F=ma","None"],answer:0},
  {q:"Photon energy:",options:["hv","mc²","mv²","None"],answer:0},

  {q:"Speed of light:",options:["3e8","3e6","3e5","None"],answer:0},
  {q:"Force unit:",options:["Newton","Joule","Watt","Pascal"],answer:0},
  {q:"Ohm law:",options:["V=IR","F=ma","E=mc²","None"],answer:0},
  {q:"KE formula:",options:["mv","½mv²","ma","None"],answer:1},
  {q:"Voltage unit:",options:["Volt","Amp","Ohm","Watt"],answer:0},

  {q:"Concave mirror:",options:["Converge","Diverge","Both","None"],answer:0},
  {q:"Energy conserved:",options:["Yes","No","None","Sometimes"],answer:0},
  {q:"Frequency unit:",options:["Hz","m","s","kg"],answer:0},
  {q:"Series current:",options:["Same","Different","None","Both"],answer:0},
  {q:"Refraction due to:",options:["Speed change","Mass","Energy","None"],answer:0},

  {q:"Power unit:",options:["Watt","Joule","Volt","Amp"],answer:0},
  {q:"Scalar quantity:",options:["Speed","Force","Velocity","Accel"],answer:0},
  {q:"Wave speed:",options:["fλ","λ/f","f/λ","None"],answer:0},
  {q:"Temperature unit:",options:["K","C","F","All"],answer:3},
  {q:"Photon has:",options:["Mass","Energy","Charge","None"],answer:1},

  {q:"Battery gives:",options:["Current","Force","Heat","None"],answer:0},
  {q:"Distance/time:",options:["Speed","Force","Energy","None"],answer:0},

  // ===== CHEMISTRY (68–90) =====
  {q:"pH of acid:",options:["<7","7",">7","0"],answer:0},
  {q:"sp3 hybridization:",options:["4 bonds","3","2","None"],answer:0},
  {q:"Oxidation:",options:["Gain e","Loss e","Gain H","None"],answer:1},
  {q:"H2O angle:",options:["90","104.5","120","180"],answer:1},
  {q:"Most EN:",options:["O","F","Cl","N"],answer:1},

  {q:"Benzene:",options:["Alkane","Aromatic","Alkene","None"],answer:1},
  {q:"Group 17:",options:["Alkali","Halogen","Noble","None"],answer:1},
  {q:"Endothermic:",options:["Release","Absorb","None","Both"],answer:1},
  {q:"Electron charge:",options:["+1","-1","0","None"],answer:1},
  {q:"Covalent bond:",options:["Share","Transfer","None","Mix"],answer:0},

  {q:"Atomic number:",options:["Proton","Electron","Neutron","All"],answer:0},
  {q:"Molarity:",options:["mol/L","mol/kg","g/L","None"],answer:0},
  {q:"Anode:",options:["Oxidation","Reduction","None","Both"],answer:0},
  {q:"Methane:",options:["CH4","C2H6","C3H8","None"],answer:0},
  {q:"Noble gas:",options:["1","17","18","2"],answer:2},

  {q:"Salt bridge:",options:["Complete circuit","Break","None","Block"],answer:0},
  {q:"Polar bond:",options:["Unequal","Equal","None","Mix"],answer:0},
  {q:"Mass number:",options:["p+n","p","n","e"],answer:0},
  {q:"Heat unit:",options:["Joule","Watt","Volt","Amp"],answer:0},
  {q:"Alcohol group:",options:["OH","COOH","NH2","CHO"],answer:0},

  {q:"Metallic character:",options:["Down ↑","Up ↑","Same","None"],answer:0},
  {q:"Solute:",options:["Less","More","Equal","None"],answer:0},
  {q:"Redox:",options:["Both","Ox","Red","None"],answer:0}

];



