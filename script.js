const bank = [
    // --- PHYSICS (40 Questions) ---
    {s:"Physics", c:"Electrostatics", q:"Electric field inside a hollow spherical conductor is?", o:["Zero","Constant","Infinite","Variable"], a:"Zero"},
    {s:"Physics", c:"Electrostatics", q:"Two charges +1μC and +5μC are separated. Ratio of forces is?", o:["1:1","1:5","5:1","1:25"], a:"1:1"},
    {s:"Physics", c:"Electrostatics", q:"Unit of Electric Flux is?", o:["Weber","Volt-metre","Tesla","Newton"], a:"Volt-metre"},
    {s:"Physics", c:"Capacitance", q:"If distance between plates is doubled, capacitance?", o:["Doubles","Becomes half","Remains same","Quintuples"], a:"Becomes half"},
    {s:"Physics", c:"Capacitance", q:"Energy stored in a capacitor is given by?", o:["1/2 CV²","CV","1/2 C²V","QV"], a:"1/2 CV²"},
    {s:"Physics", c:"Current Electricity", q:"The resistivity of a wire depends on its?", o:["Length","Area","Material","Shape"], a:"Material"},
    {s:"Physics", c:"Current Electricity", q:"A wire of resistance R is stretched to 2L. New resistance is?", o:["2R","4R","R/2","R/4"], a:"4R"},
    {s:"Physics", c:"Current Electricity", q:"Ohm's law is valid for?", o:["Metals","Semiconductors","Vaccum tubes","Diodes"], a:"Metals"},
    {s:"Physics", c:"Magnetism", q:"Magnetic field at the center of circular loop is?", o:["μ₀I/2r","μ₀I/r","2μ₀I/r","Zero"], a:"μ₀I/2r"},
    {s:"Physics", c:"Magnetism", q:"The unit of Magnetic Moment is?", o:["A/m²","Am²","Tesla-m","Weber/m"], a:"Am²"},
    {s:"Physics", c:"Magnetism", q:"Resistance of an ideal ammeter is?", o:["Zero","Infinite","100 Ohm","1 Ohm"], a:"Zero"},
    {s:"Physics", c:"EMI", q:"Working of transformer is based on?", o:["Self Induction","Mutual Induction","Eddy Currents","None"], a:"Mutual Induction"},
    {s:"Physics", c:"EMI", q:"Self inductance of a coil is 2H. If current changes at 1A/s, EMF is?", o:["2V","1V","0.5V","4V"], a:"2V"},
    {s:"Physics", c:"AC Circuits", q:"Phase difference between I and V in pure inductor is?", o:["0°","90°","180°","45°"], a:"90°"},
    {s:"Physics", c:"AC Circuits", q:"Standard frequency of AC in India is?", o:["50 Hz","60 Hz","100 Hz","220 Hz"], a:"50 Hz"},
    {s:"Physics", c:"EM Waves", q:"Which has the shortest wavelength?", o:["Gamma rays","X-rays","UV rays","Microwaves"], a:"Gamma rays"},
    {s:"Physics", c:"Ray Optics", q:"A lens has power +2.0 D. Its focal length is?", o:["50 cm","20 cm","100 cm","25 cm"], a:"50 cm"},
    {s:"Physics", c:"Ray Optics", q:"Speed of light is minimum in?", o:["Air","Glass","Water","Diamond"], a:"Diamond"},
    {s:"Physics", c:"Ray Optics", q:"Critical angle for total internal reflection depends on?", o:["Refractive index","Color of light","Both","None"], a:"Both"},
    {s:"Physics", c:"Wave Optics", q:"Sky appears blue due to?", o:["Refraction","Scattering","Interference","Diffraction"], a:"Scattering"},
    {s:"Physics", c:"Wave Optics", q:"According to Huygens, light is a?", o:["Wave","Particle","Ray","None"], a:"Wave"},
    {s:"Physics", c:"Wave Optics", q:"Which phenomenon shows light is transverse?", o:["Interference","Polarization","Reflection","Refraction"], a:"Polarization"},
    {s:"Physics", c:"Dual Nature", q:"Photoelectric effect proves?", o:["Wave nature","Particle nature","Both","None"], a:"Particle nature"},
    {s:"Physics", c:"Dual Nature", q:"Threshold frequency depends on?", o:["Intensity","Metal surface","Frequency","Voltage"], a:"Metal surface"},
    {s:"Physics", c:"Atoms", q:"Energy of electron in nth orbit is proportional to?", o:["n","n²","1/n²","1/n"], a:"1/n²"},
    {s:"Physics", c:"Nuclei", q:"Mass-Energy equivalence relation is?", o:["E=mc²","E=mc","E=m²c","E=hν"], a:"E=mc²"},
    {s:"Physics", c:"Nuclei", q:"Nuclear force is?", o:["Short range","Long range","Weak","Gravitational"], a:"Short range"},
    {s:"Physics", c:"Semiconductors", q:"In P-type, majority carriers are?", o:["Electrons","Holes","Neutrons","Protons"], a:"Holes"},
    {s:"Physics", c:"Semiconductors", q:"Width of depletion layer in reverse bias?", o:["Increases","Decreases","Constant","None"], a:"Increases"},
    {s:"Physics", c:"Semiconductors", q:"Device that converts AC to DC?", o:["Amplifier","Rectifier","Oscillator","None"], a:"Rectifier"},
    {s:"Physics", c:"Logic Gates", q:"Gate that gives 1 only when both inputs are 1?", o:["AND","OR","NOT","NAND"], a:"AND"},
    {s:"Physics", c:"Logic Gates", q:"Which is a Universal Gate?", o:["AND","OR","NOR","XOR"], a:"NOR"},
    {s:"Physics", c:"Communication", q:"Sky waves are used for?", o:["Short wave","Long wave","Satellite","None"], a:"Short wave"},

    // --- CHEMISTRY (40 Questions) ---
    {s:"Chemistry", c:"Solid State", q:"Atoms in simple cubic unit cell?", o:["1","2","4","8"], a:"1"},
    {s:"Chemistry", c:"Solid State", q:"Defect that decreases crystal density?", o:["Schottky","Frenkel","Metal excess","None"], a:"Schottky"},
    {s:"Chemistry", c:"Solid State", q:"Hybridization of Carbon in Diamond is?", o:["sp³","sp²","sp","dsp²"], a:"sp³"},
    {s:"Chemistry", c:"Solutions", q:"Colligative properties depend on?", o:["Nature","Number of particles","Solvent","None"], a:"Number of particles"},
    {s:"Chemistry", c:"Solutions", q:"Molarity of pure water is?", o:["55.5","18","100","1"], a:"55.5"},
    {s:"Chemistry", c:"Solutions", q:"pH of human blood is approx?", o:["7.4","6.0","8.0","7.0"], a:"7.4"},
    {s:"Chemistry", c:"Electrochemistry", q:"Standard reduction potential of H2 is?", o:["0.0 V","1.0 V","-1.0 V","0.5 V"], a:"0.0 V"},
    {s:"Chemistry", c:"Electrochemistry", q:"Rusting of iron is an example of?", o:["Corrosion","Reduction","Polymerization","None"], a:"Corrosion"},
    {s:"Chemistry", c:"Kinetics", q:"Unit of rate constant for 1st order?", o:["s⁻¹","mol L⁻¹ s⁻¹","L mol⁻¹ s⁻¹","None"], a:"s⁻¹"},
    {s:"Chemistry", c:"Kinetics", q:"Half life of zero order reaction?", o:["[A]₀/2k","0.693/k","[A]₀/k","None"], a:"[A]₀/2k"},
    {s:"Chemistry", c:"Surface Chemistry", q:"Which enzyme converts glucose to ethanol?", o:["Zymase","Invertase","Maltase","None"], a:"Zymase"},
    {s:"Chemistry", c:"Metallurgy", q:"Which catalyst used in Haber's process?", o:["Iron","Nickel","Platinum","Copper"], a:"Iron"},
    {s:"Chemistry", c:"Metallurgy", q:"Main ore of Iron is?", o:["Haematite","Bauxite","Magnetite","Calamine"], a:"Haematite"},
    {s:"Chemistry", c:"p-Block", q:"Strongest acid among following is?", o:["HClO4","HClO3","HClO2","HClO"], a:"HClO4"},
    {s:"Chemistry", c:"p-Block", q:"Which noble gas is most reactive?", o:["Xenon","Helium","Neon","Argon"], a:"Xenon"},
    {s:"Chemistry", c:"d-Block", q:"Transition elements are?", o:["d-block","s-block","p-block","f-block"], a:"d-block"},
    {s:"Chemistry", c:"Coordination", q:"Oxidation state of Ni in [Ni(CO)4] is?", o:["0","+2","+4","-2"], a:"0"},
    {s:"Chemistry", c:"Haloalkanes", q:"PVC is used for making?", o:["Raincoats","Pipes","Both","None"], a:"Both"},
    {s:"Chemistry", c:"Alcohols", q:"IUPAC name of CH3CHO is?", o:["Ethanal","Methanal","Ethanol","Propanal"], a:"Ethanal"},
    {s:"Chemistry", c:"Biomolecules", q:"Vitamin containing Cobalt is?", o:["B12","B1","C","D"], a:"B12"},
    {s:"Chemistry", c:"Biomolecules", q:"Zwitter ion is formed by?", o:["Amino acids","Fats","Ethers","None"], a:"Amino acids"},
    {s:"Chemistry", c:"Polymers", q:"Natural rubber is a polymer of?", o:["Isoprene","Ethylene","Styrene","Neoprene"], a:"Isoprene"},
    {s:"Chemistry", c:"Polymers", q:"Bakelite is an example of?", o:["Thermoplastic","Thermosetting","Fiber","Elastomer"], a:"Thermosetting"},
    {s:"Chemistry", c:"Everyday Life", q:"Antiseptic property of Dettol is due to?", o:["Chloroxylenol","Bithionol","Iodine","None"], a:"Chloroxylenol"},

    // --- BIOLOGY (40 Questions) ---
    {s:"Biology", c:"Cell Biology", q:"Powerhouse of the cell?", o:["Mitochondria","Nucleus","Golgi","Ribosome"], a:"Mitochondria"},
    {s:"Biology", c:"Cell Biology", q:"Suicide bags of the cell are?", o:["Lysosomes","Ribosomes","Golgi","Nucleus"], a:"Lysosomes"},
    {s:"Biology", c:"Genetics", q:"Total chromosomes in humans?", o:["46","23","44","48"], a:"46"},
    {s:"Biology", c:"Genetics", q:"DNA Double Helix model by?", o:["Watson & Crick","Mendel","Darwin","None"], a:"Watson & Crick"},
    {s:"Biology", c:"Genetics", q:"Father of Genetics?", o:["Gregor Mendel","Darwin","Morgan","Lamarck"], a:"Gregor Mendel"},
    {s:"Biology", c:"Human Physiology", q:"Insulin is secreted by?", o:["Pancreas","Liver","Kidney","Heart"], a:"Pancreas"},
    {s:"Biology", c:"Human Physiology", q:"Largest gland in human body?", o:["Liver","Pancreas","Thyroid","Pituitary"], a:"Liver"},
    {s:"Biology", c:"Human Physiology", q:"Universal Donor blood group?", o:["O-","AB+","A+","B-"], a:"O-"},
    {s:"Biology", c:"Plant Physiology", q:"Tissue transporting water in plants?", o:["Xylem","Phloem","Cortex","None"], a:"Xylem"},
    {s:"Biology", c:"Plant Physiology", q:"Gas released during photosynthesis?", o:["Oxygen","CO2","Nitrogen","None"], a:"Oxygen"},
    {s:"Biology", c:"Reproduction", q:"Pollen grains are produced in?", o:["Anther","Stigma","Ovary","Style"], a:"Anther"},
    {s:"Biology", c:"Reproduction", q:"Double fertilization is characteristic of?", o:["Angiosperms","Gymnosperms","Algae","Fungi"], a:"Angiosperms"},
    {s:"Biology", c:"Health & Disease", q:"Full form of AIDS?", o:["Acquired Immune Deficiency Syndrome","Active Immune","None","Both"], a:"Acquired Immune Deficiency Syndrome"},
    {s:"Biology", c:"Health & Disease", q:"Penicillin was discovered by?", o:["Alexander Fleming","Pasteur","Hooke","None"], a:"Alexander Fleming"},
    {s:"Biology", c:"Evolution", q:"Scientific name of Humans?", o:["Homo sapiens","Felis catus","Canis","None"], a:"Homo sapiens"},
    {s:"Biology", c:"Ecology", q:"Main site of photosynthesis?", o:["Chloroplast","Mitochondria","Nucleus","None"], a:"Chloroplast"}
];


















    

