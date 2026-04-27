// Master Database - 60 Bio, 60 Phy, 60 Chem
const masterDB = [
    // ================= BIOLOGY (1-60) =================
    {q:"Double fertilization is characteristic of?", o:["Algae","Gymnosperms","Angiosperms","Pteridophytes"], a:2, s:"Bio"},
    {q:"The 'P' wave in ECG represents:", o:["Atrial depolarization","Ventricular depolarization","Atrial repolarization","Resting state"], a:0, s:"Bio"},
    {q:"Powerhouse of the cell is:", o:["Ribosome","Mitochondria","Golgi body","Lysosome"], a:1, s:"Bio"},
    {q:"Which hormone causes fruit ripening?", o:["Auxin","Gibberellin","Ethylene","Cytokinin"], a:2, s:"Bio"},
    {q:"Functional unit of inheritance is:", o:["DNA","RNA","Gene","Chromosome"], a:2, s:"Bio"},
    {q:"Universal blood donor group is:", o:["O negative","AB positive","A positive","B negative"], a:0, s:"Bio"},
    {q:"Vitamin required for blood clotting:", o:["Vit A","Vit C","Vit D","Vit K"], a:3, s:"Bio"},
    {q:"DNA replication occurs in which phase?", o:["G1","S phase","G2","M phase"], a:1, s:"Bio"},
    {q:"Study of fossils is called:", o:["Botany","Paleontology","Geology","Zoology"], a:1, s:"Bio"},
    {q:"Human heart has how many chambers?", o:["2","3","4","1"], a:2, s:"Bio"},
    // ... (Yahan 50 aur Bio questions isi format mein add karein)

    // ================= PHYSICS (61-120) =================
    {q:"Unit of electric flux is:", o:["Weber","Tesla","Volt-meter","Newton/Coulomb"], a:2, s:"Phy"},
    {q:"Mirror used in solar furnaces?", o:["Convex","Concave","Plain","Cylindrical"], a:1, s:"Phy"},
    {q:"Resistance of an ideal ammeter is:", o:["Zero","Infinite","High","Low"], a:0, s:"Phy"},
    {q:"Dimensional formula for Gravitational Constant (G):", o:["M-1 L3 T-2","M1 L2 T-2","M-1 L2 T-1","M0 L3 T-2"], a:0, s:"Phy"},
    {q:"Work done by centripetal force is:", o:["Positive","Negative","Zero","Maximum"], a:2, s:"Phy"},
    {q:"SI unit of Luminous Intensity:", o:["Lumen","Lux","Candela","Watt"], a:2, s:"Phy"},
    {q:"Speed of light in vacuum:", o:["3x10^8 m/s","2x10^8 m/s","3x10^10 m/s","1x10^8 m/s"], a:0, s:"Phy"},
    {q:"Newton's 1st law is also known as:", o:["Law of force","Law of inertia","Law of action","None"], a:1, s:"Phy"},
    {q:"Which lens is used to correct Myopia?", o:["Convex","Concave","Bifocal","Cylindrical"], a:1, s:"Phy"},
    {q:"Sound waves cannot travel through:", o:["Steel","Water","Air","Vacuum"], a:3, s:"Phy"},
    // ... (Yahan 50 aur Physics questions add karein)

    // ================= CHEMISTRY (121-180) =================
    {q:"pH of 0.01M HCl solution is:", o:["1","2","3","7"], a:1, s:"Chem"},
    {q:"Baking Soda is chemically:", o:["Na2CO3","NaHCO3","NaOH","NaCl"], a:1, s:"Chem"},
    {q:"Hybridization of Carbon in Ethyne is:", o:["sp","sp2","sp3","dsp2"], a:0, s:"Chem"},
    {q:"Which element has highest electronegativity?", o:["Oxygen","Chlorine","Fluorine","Nitrogen"], a:2, s:"Chem"},
    {q:"Main component of LPG is:", o:["Methane","Ethane","Propane","Butane"], a:3, s:"Chem"},
    {q:"Oxidation state of Oxygen in OF2:", o:["-2","-1","+2","+1"], a:2, s:"Chem"},
    {q:"Hardest natural substance known is:", o:["Gold","Iron","Diamond","Graphite"], a:2, s:"Chem"},
    {q:"Gas used in fire extinguishers:", o:["Oxygen","CO2","Nitrogen","Helium"], a:1, s:"Chem"},
    {q:"Formula of Plaster of Paris:", o:["CaSO4.2H2O","CaSO4.1/2H2O","CaCl2","CaO"], a:1, s:"Chem"},
    {q:"pH of pure water is:", o:["0","14","7","1"], a:2, s:"Chem"}
    // ... (Yahan 50 aur Chem questions add karein)
];

// Ye function 180 sawal poore karta hai (agar DB chhota ho toh repeat karega)
let testQs = [];
for(let i=0; i<180; i++) {
    testQs.push({...masterDB[i % masterDB.length], id: i+1});
}



