window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod08",
  questions: [
    {
      id: "M08-001",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "When two atoms approach each other, how is the net interatomic force F<sub>N</sub> related to the attractive force F<sub>A</sub> and the short-range repulsive force F<sub>R</sub>?",
      options: [
        "F<sub>N</sub> = F<sub>A</sub> × F<sub>R</sub>",
        "F<sub>N</sub> = F<sub>A</sub> / F<sub>R</sub>",
        "F<sub>N</sub> = F<sub>A</sub> + F<sub>R</sub>",
        "F<sub>N</sub> = √(F<sub>A</sub><sup>2</sup> + F<sub>R</sub><sup>2</sup>)"
      ],
      ans: 2,
      exp: "The net interatomic force acting between two atoms is the algebraic sum of the attractive force and the short-range repulsive force: F<sub>N</sub> = F<sub>A</sub> + F<sub>R</sub>."
    },
    {
      id: "M08-002",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "bonding_curves",
      q: "Referring to the interatomic force and potential energy curves, what are the conditions at the equilibrium interatomic spacing r<sub>0</sub>?",
      options: [
        "F<sub>N</sub> = 0 and potential energy E(r) reaches its minimum value −E<sub>0</sub>",
        "F<sub>N</sub> reaches its maximum positive value and E(r) = 0",
        "F<sub>A</sub> = 0, F<sub>R</sub> = 0, and E(r) reaches +E<sub>0</sub>",
        "F<sub>N</sub> = −E<sub>0</sub> and dE/dr reaches its maximum slope"
      ],
      ans: 0,
      exp: "At the equilibrium spacing r<sub>0</sub>, attractive and repulsive forces balance so F<sub>N</sub> = 0, and the potential energy E(r) attains its minimum value −E<sub>0</sub>, where E<sub>0</sub> is the bond energy."
    },
    {
      id: "M08-003",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "bonding_curves",
      q: "From the interatomic force–distance curve, which force dominates when atoms are pushed closer than r<sub>0</sub> (r < r<sub>0</sub>) versus pulled farther apart than r<sub>0</sub> (r > r<sub>0</sub>)?",
      options: [
        "For r < r<sub>0</sub>, F<sub>A</sub> dominates (net attraction); for r > r<sub>0</sub>, F<sub>R</sub> dominates (net repulsion)",
        "For both r < r<sub>0</sub> and r > r<sub>0</sub>, F<sub>A</sub> dominates",
        "For both r < r<sub>0</sub> and r > r<sub>0</sub>, F<sub>R</sub> dominates",
        "For r < r<sub>0</sub>, F<sub>R</sub> dominates (net repulsion); for r > r<sub>0</sub>, F<sub>A</sub> dominates (net attraction)"
      ],
      ans: 3,
      exp: "When r < r<sub>0</sub>, overlapping electron shells produce a steep short-range repulsive force F<sub>R</sub> that dominates (net repulsion). When r > r<sub>0</sub>, F<sub>R</sub> falls off rapidly so attractive force F<sub>A</sub> dominates (net attraction)."
    },
    {
      id: "M08-004",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Formula",
      diagram: "bonding_curves",
      q: "Referring to the potential energy curve E(r) versus interatomic distance r, how is E(r) defined mathematically in terms of F<sub>N</sub>, and what does the well depth E<sub>0</sub> physically represent?",
      options: [
        "E(r) = dF<sub>N</sub>/dr; E<sub>0</sub> is the kinetic energy of valence electrons at 0 K",
        "E(r) = ∫<sub>r</sub><sup>∞</sup> F<sub>N</sub> dr; E<sub>0</sub> is the bond energy required to completely separate the bonded atoms from r = r<sub>0</sub> to r → ∞",
        "E(r) = F<sub>N</sub> · r<sub>0</sub>; E<sub>0</sub> is the ionisation potential of the cation",
        "E(r) = ∫<sub>0</sub><sup>r</sup> F<sub>N</sub> dr; E<sub>0</sub> is the activation energy for vacancy diffusion"
      ],
      ans: 1,
      exp: "Potential energy is given by E(r) = ∫<sub>r</sub><sup>∞</sup> F<sub>N</sub> dr, with minimum −E<sub>0</sub> at r<sub>0</sub>. The positive quantity E<sub>0</sub> is the bond energy—the energy needed to separate the atoms from r<sub>0</sub> to infinite separation (E = 0)."
    },
    {
      id: "M08-005",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "bonding_curves",
      q: "On the E(r) versus r diagram, Material X exhibits a much deeper potential energy well (larger E<sub>0</sub>) than Material Y. Which property comparison directly follows?",
      options: [
        "Material X has a higher melting point and greater bond strength/hardness than Material Y",
        "Material X has a lower melting point and weaker interatomic bonds than Material Y",
        "Material X must be held together by van der Waals bonds, whereas Material Y is covalently bonded",
        "Material X has a larger bond length (2–5 Å) than Material Y (1–2 Å)"
      ],
      ans: 0,
      exp: "A deeper potential energy well (higher bond energy E<sub>0</sub>) requires greater thermal energy to break interatomic bonds, resulting in a higher melting point T<sub>m</sub> and higher hardness/strength."
    },
    {
      id: "M08-006",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Diagram",
      diagram: "bonding_curves",
      q: "Inspecting the shape of the potential energy trough E(r) around r<sub>0</sub>, why does the curve rise far more steeply for r < r<sub>0</sub> than it rises toward zero for r > r<sub>0</sub>?",
      options: [
        "Because attractive electrostatic forces follow an inverse-tenth-power law while repulsive forces are constant",
        "Because potential energy becomes strictly linear for r > r<sub>0</sub>",
        "Because short-range repulsion F<sub>R</sub> increases much more rapidly with decreasing r than attraction F<sub>A</sub> decays with increasing r, making the energy well asymmetric",
        "Because bond energy E<sub>0</sub> vanishes for all distances smaller than r<sub>0</sub>"
      ],
      ans: 2,
      exp: "Short-range repulsive forces from electron-shell overlap escalate steeply as r decreases below r<sub>0</sub>, whereas attractive forces decay more gradually as r increases above r<sub>0</sub>. This produces the characteristic asymmetric potential well."
    },
    {
      id: "M08-007",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "What is the typical bond energy range of PRIMARY chemical bonds (ionic, covalent, and metallic)?",
      options: [
        "100–1000 eV/atom (≈ 1–10 kJ/mol)",
        "100–1000 kJ/mol (≈ 1–10 eV/atom)",
        "1–50 kJ/mol (≈ 0.01–0.5 eV/atom)",
        "10–100 eV/atom (≈ 1000–10000 kJ/mol)"
      ],
      ans: 1,
      exp: "Classic exam trap: Primary bonds have energies of 100–1000 kJ/mol, NOT 100–1000 eV/atom! Since 1 eV/atom ≈ 96.5 kJ/mol (≈ 100 kJ/mol), 100–1000 kJ/mol corresponds to ≈ 1–10 eV/atom."
    },
    {
      id: "M08-008",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which bond energy range and bond length range correctly characterize SECONDARY (weak) bonds (hydrogen and van der Waals)?",
      options: [
        "100–1000 kJ/mol and 1–2 Å",
        "100–1000 kJ/mol and 2–5 Å",
        "1–50 kJ/mol and 1–2 Å",
        "1–50 kJ/mol (≈ 0.01–0.5 eV/atom) and 2–5 Å"
      ],
      ans: 3,
      exp: "Secondary bonds (hydrogen and van der Waals) are much weaker and longer than primary bonds: their bond energy is 1–50 kJ/mol (≈ 0.01–0.5 eV/atom) and their bond length is 2–5 Å (versus 1–2 Å for primary bonds)."
    },
    {
      id: "M08-009",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which ranking accurately orders interatomic and intermolecular bonds from STRONGEST to WEAKEST?",
      options: [
        "Primary bonds (ionic, covalent, metallic) ≫ Hydrogen bond > van der Waals bond",
        "Hydrogen bond > Primary bonds ≫ van der Waals bond",
        "Primary bonds ≫ van der Waals bond > Hydrogen bond",
        "Ionic bond > van der Waals bond > Metallic bond > Hydrogen bond"
      ],
      ans: 0,
      exp: "Primary bonds (100–1000 kJ/mol) are far stronger than secondary bonds (1–50 kJ/mol), and within secondary bonds the hydrogen bond is stronger than the van der Waals bond: Primary ≫ Hydrogen > van der Waals."
    },
    {
      id: "M08-010",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A solid has a primary bond energy of 3.6 eV/atom. Using 1 eV/atom ≈ 96.5 kJ/mol, calculate its molar bond energy in kJ/mol.",
      options: [
        "26.8 kJ/mol",
        "347.4 kJ/mol",
        "36.0 kJ/mol",
        "965.0 kJ/mol"
      ],
      ans: 1,
      exp: "E<sub>0</sub> = 3.6 eV/atom × 96.5 (kJ/mol)/(eV/atom) = 347.4 kJ/mol, which lies squarely in the 100–1000 kJ/mol primary-bond range."
    },
    {
      id: "M08-011",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "An engineering material has a measured bond energy of 675.5 kJ/mol. Using 1 eV/atom ≈ 96.5 kJ/mol, what is this bond energy in eV/atom, and what bond class does it indicate?",
      options: [
        "0.70 eV/atom — secondary bond",
        "70.0 eV/atom — primary bond",
        "0.14 eV/atom — van der Waals bond",
        "7.00 eV/atom — primary bond"
      ],
      ans: 3,
      exp: "E<sub>0</sub> = 675.5 / 96.5 = 7.00 eV/atom. Since primary bonds span 100–1000 kJ/mol (≈ 1–10 eV/atom), this is a strong primary bond."
    },
    {
      id: "M08-012",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A primary chemical bond has a molar bond energy of 482.5 kJ/mol (≈ 5.0 eV/atom). Using Avogadro's number N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>, calculate the energy required to break a SINGLE bond in Joules.",
      options: [
        "8.01 × 10<sup>−22</sup> J",
        "1.25 × 10<sup>−18</sup> J",
        "8.01 × 10<sup>−19</sup> J",
        "4.83 × 10<sup>−19</sup> J"
      ],
      ans: 2,
      exp: "Convert 482.5 kJ/mol to J/mol: 482,500 J/mol.<br>Energy per single bond = 482,500 / (6.022 × 10<sup>23</sup>) = 8.012 × 10<sup>−19</sup> J ≈ 8.01 × 10<sup>−19</sup> J.<br>(Cross-check: 5.0 eV × 1.602 × 10<sup>−19</sup> J/eV = 8.01 × 10<sup>−19</sup> J.)"
    },
    {
      id: "M08-013",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "The net potential energy between an ion pair is modelled as E(r) = −A/r + B/r<sup>9</sup>, where A = 1.44 eV·nm and the equilibrium spacing is r<sub>0</sub> = 0.25 nm. Using the equilibrium condition dE/dr = 0 at r = r<sub>0</sub>, calculate the bond energy E<sub>0</sub> = −E(r<sub>0</sub>).",
      options: [
        "5.12 eV",
        "5.76 eV",
        "6.40 eV",
        "0.64 eV"
      ],
      ans: 0,
      exp: "At equilibrium r = r<sub>0</sub>, dE/dr = A/r<sub>0</sub><sup>2</sup> − 9B/r<sub>0</sub><sup>10</sup> = 0 ⇒ B/r<sub>0</sub><sup>9</sup> = A/(9r<sub>0</sub>).<br>Substituting into E(r<sub>0</sub>) = −A/r<sub>0</sub> + A/(9r<sub>0</sub>) = −(A/r<sub>0</sub>)(1 − 1/9) = −(8/9)(A/r<sub>0</sub>).<br>Therefore, E<sub>0</sub> = −E(r<sub>0</sub>) = (8/9) × (1.44 / 0.25) = (8/9) × 5.76 = 5.12 eV."
    },
    {
      id: "M08-014",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How is an ionic bond formed, and what is its directional character?",
      options: [
        "Mutual sharing of valence electrons between two non-metals; highly directional",
        "Complete electron transfer from an electropositive metal to an electronegative non-metal, held by non-directional electrostatic Coulomb attraction",
        "Delocalised valence electrons forming a free-electron cloud around positive cores; highly directional",
        "Fluctuating temporary dipoles between neutral inert-gas atoms; non-directional"
      ],
      ans: 1,
      exp: "Ionic bonding involves complete transfer of valence electron(s) from an electropositive metal to an electronegative non-metal, creating oppositely charged ions bound by non-directional electrostatic Coulomb forces."
    },
    {
      id: "M08-015",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In the formation of Na<sup>+</sup> and Cl<sup>−</sup> ions from neutral Na and Cl atoms, which statement correctly defines Ionisation Potential (IP) and Electron Affinity (EA) with their signs?",
      options: [
        "IP is energy released (−496 kJ/mol) to remove an electron from Na; EA is energy absorbed (+369 kJ/mol) when Cl gains an electron",
        "Both IP (+496 kJ/mol) and EA (+369 kJ/mol) are energies absorbed during electron transfer",
        "Both IP (−496 kJ/mol) and EA (−369 kJ/mol) are energies released during electron transfer",
        "IP is energy absorbed (+496 kJ/mol) in Na → Na<sup>+</sup> + e<sup>−</sup>; EA is energy released (−369 kJ/mol) in Cl + e<sup>−</sup> → Cl<sup>−</sup>"
      ],
      ans: 3,
      exp: "Ionisation potential (IP) is the positive energy absorbed to remove an electron (Na → Na<sup>+</sup> + e<sup>−</sup>, +496 kJ/mol). Electron affinity (EA) is the negative energy released when an atom gains an electron (Cl + e<sup>−</sup> → Cl<sup>−</sup>, −369 kJ/mol)."
    },
    {
      id: "M08-016",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Given IP(Na) = +496 kJ/mol and EA(Cl) = −369 kJ/mol, calculate the net energy required to form an isolated Na<sup>+</sup>/Cl<sup>−</sup> ion pair from neutral gaseous atoms, in kJ/mol and in eV/ion-pair (1 eV ≈ 96.5 kJ/mol).",
      options: [
        "+127 kJ/mol (≈ +1.32 eV)",
        "−127 kJ/mol (≈ −1.32 eV)",
        "+865 kJ/mol (≈ +8.96 eV)",
        "−865 kJ/mol (≈ −8.96 eV)"
      ],
      ans: 0,
      exp: "Net electron-transfer energy = IP + EA = +496 − 369 = +127 kJ/mol (endothermic).<br>In eV/ion-pair: 127 / 96.5 = +1.316 eV ≈ +1.32 eV."
    },
    {
      id: "M08-017",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Transferring an electron from Na to Cl absorbs a net +127 kJ/mol (endothermic). Why is solid crystalline NaCl nonetheless energetically very stable?",
      options: [
        "Because Cl spontaneously transfers a proton back to Na at room temperature",
        "Because van der Waals bonds between neutral Na and Cl atoms release more than 127 kJ/mol",
        "Because the electrostatic Coulombic lattice attraction between Na<sup>+</sup> and Cl<sup>−</sup> ions releases far more energy than +127 kJ/mol",
        "Because metallic free electrons neutralise the +127 kJ/mol energy cost"
      ],
      ans: 2,
      exp: "Although isolated electron transfer costs +127 kJ/mol, bringing the oppositely charged Na<sup>+</sup> and Cl<sup>−</sup> ions together into an ionic crystal lattice releases massive electrostatic Coulombic lattice energy, making solid NaCl strongly stable."
    },
    {
      id: "M08-018",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For an ionic solid MX, the metal's ionisation potential is +419 kJ/mol, the non-metal's electron affinity is −325 kJ/mol, and the Coulombic lattice energy released upon forming the crystal is −689 kJ/mol. What is the net energy change per mole of solid MX formed?",
      options: [
        "+94 kJ/mol",
        "−595 kJ/mol",
        "−783 kJ/mol",
        "+595 kJ/mol"
      ],
      ans: 1,
      exp: "Step 1: Net electron-transfer energy = +419 − 325 = +94 kJ/mol.<br>Step 2: Add Coulombic lattice attraction = +94 − 689 = −595 kJ/mol (strongly exothermic, hence stable)."
    },
    {
      id: "M08-019",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which statement accurately describes a covalent bond and gives typical examples?",
      options: [
        "Mutual sharing of valence electrons between atoms (typically non-metals like Cl<sub>2</sub>, Si, and C); highly directional",
        "Complete transfer of electrons between identical metal atoms (like Cu and Ag); non-directional",
        "Electrostatic attraction between temporary induced dipoles in inert gases; non-directional",
        "Delocalised sea of valence electrons shared across the entire crystal; non-directional"
      ],
      ans: 0,
      exp: "Covalent bonding arises from mutual sharing of valence electrons between atoms (typically non-metals such as Cl<sub>2</sub>, Si, and C/diamond) and is highly directional with specific bond angles."
    },
    {
      id: "M08-020",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which description best represents the \"electron sea\" model of metallic bonding?",
      options: [
        "Oppositely charged cations and anions arranged in an alternating checkerboard lattice",
        "Pairwise sharing of localised valence electrons strictly between nearest-neighbour atoms",
        "Permanent molecular dipoles attracting lone pairs on neighbouring molecules",
        "Delocalised valence electrons shared across the entire crystal as a mobile free-electron cloud surrounding positive metal ion cores"
      ],
      ans: 3,
      exp: "In metallic bonding, valence electrons detach from individual atoms and form a mobile delocalised \"electron sea\" shared throughout the crystal, holding the positive metal ion cores together non-directionally."
    },
    {
      id: "M08-021",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why do metals display high ductility and high electrical/thermal conductivity, whereas covalently bonded crystals such as Si and diamond are typically hard and brittle?",
      options: [
        "Metals have secondary van der Waals bonds, whereas Si and diamond have ionic bonds",
        "Metals have much smaller atomic radii than carbon and silicon",
        "Non-directional metallic bonding and mobile delocalised electrons allow ion cores to shear smoothly and transport charge/heat, whereas highly directional covalent bonds resist shear and fracture",
        "Covalent bonds have zero bond energy along crystallographic slip planes"
      ],
      ans: 2,
      exp: "Because metallic bonds are non-directional and valence electrons are delocalised, atomic planes can glide past each other plastically without fracturing and electrons conduct charge/heat freely. Directional covalent bonds lock atoms at rigid angles, causing hardness and brittleness."
    },
    {
      id: "M08-022",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which classification correctly groups the three PRIMARY chemical bonds by directionality?",
      options: [
        "Directional: ionic and covalent; Non-directional: metallic",
        "Directional: covalent; Non-directional: ionic and metallic",
        "Directional: metallic; Non-directional: ionic and covalent",
        "Directional: ionic; Non-directional: covalent and metallic"
      ],
      ans: 1,
      exp: "Among the three primary bonds, covalent bonds are highly directional (fixed orbital overlap angles), whereas both ionic bonds (spherically symmetric Coulomb forces) and metallic bonds (delocalised electron sea) are non-directional."
    },
    {
      id: "M08-023",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Consider the metallic bond energies (BE) and melting points of three metals: Ag (BE = 47, T<sub>m</sub> = 960–981°C), Cu (BE = 56, T<sub>m</sub> = 1084–1085°C), and Fe (BE = 104, T<sub>m</sub> = 1539°C). How do melting point and hardness vary with metallic bond energy?",
      options: [
        "Higher bond energy gives a higher melting point (BE ∝ T<sub>m</sub>) and higher hardness (Fe > Cu > Ag)",
        "Higher bond energy gives a lower melting point and lower hardness (Ag > Cu > Fe)",
        "Bond energy affects only electrical conductivity and has no relation to melting point",
        "Hardness increases with bond energy, but melting point decreases with bond energy"
      ],
      ans: 0,
      exp: "Stronger metallic bonds require more thermal energy to melt and greater stress to deform: BE ∝ T<sub>m</sub> and hardness increases with BE (Fe > Cu > Ag)."
    },
    {
      id: "M08-024",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Given the metallic bond energies Ag (BE = 47), Cu (BE = 56), and Fe (BE = 104), rank these three metals in DECREASING order of electrical conductivity and identify the physical reason.",
      options: [
        "Fe > Cu > Ag, because higher bond energy produces faster-moving valence electrons",
        "Cu > Fe > Ag, because FCC metals always have lower conductivity than BCC metals",
        "Fe > Ag > Cu, because higher melting point always maximizes electrical conductivity",
        "Ag > Cu > Fe, because lower metallic bond energy means valence electrons are more loosely held and move more freely"
      ],
      ans: 3,
      exp: "Classic exam trap: Electrical conductivity follows the INVERSE trend of metallic bond energy! Since Bond Energy increases as Ag (47) < Cu (56) < Fe (104), valence electrons are most loosely bound in Ag and most tightly bound in Fe, yielding electrical conductivity Ag > Cu > Fe."
    },
    {
      id: "M08-025",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Directly comparing iron (Fe: BE = 104, T<sub>m</sub> = 1539°C) with copper (Cu: BE = 56, T<sub>m</sub> = 1084–1085°C), which statement is completely TRUE?",
      options: [
        "Fe has higher electrical conductivity, higher hardness, and higher melting point than Cu",
        "Fe has higher hardness and higher melting point than Cu, whereas Cu has higher electrical conductivity than Fe",
        "Cu has higher hardness and higher electrical conductivity, whereas Fe has a higher melting point",
        "Cu has higher melting point and higher bond energy than Fe"
      ],
      ans: 1,
      exp: "Because Fe has nearly twice the metallic bond energy of Cu (104 vs 56), Fe is harder and melts at a much higher temperature (1539°C vs 1084–1085°C), whereas Cu's lower bond energy leaves its valence electrons freer, giving Cu far higher electrical conductivity."
    },
    {
      id: "M08-026",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Under which specific chemical condition does a hydrogen bond form between molecules?",
      options: [
        "Whenever any two hydrogen atoms share electrons in H<sub>2</sub> gas",
        "Whenever hydrogen transfers an electron completely to a transition metal",
        "When hydrogen is covalently bonded to a strongly electronegative atom (O, N, or F), forming a permanent dipole that attracts lone pairs on neighbouring molecules",
        "Whenever neutral noble-gas atoms experience temporary electron-cloud fluctuations"
      ],
      ans: 2,
      exp: "A hydrogen bond forms when H is covalently bonded to a highly electronegative atom (O, N, or F). The electron cloud shifts away from H toward O/N/F, producing a strong permanent dipole (e.g., H<sup>δ+</sup>–O<sup>δ−</sup>) that electrostatically attracts lone pairs on adjacent molecules."
    },
    {
      id: "M08-027",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a water molecule (H<sub>2</sub>O), the electronegativities are given as χ<sub>O</sub> = 3.2 and χ<sub>H</sub> = 2.1. What is the electronegativity difference Δχ, and what polarity develops across each O–H bond?",
      options: [
        "Δχ = 1.1; the electron cloud shifts toward oxygen, forming a permanent H<sup>δ+</sup>–O<sup>δ−</sup> dipole",
        "Δχ = 1.1; the electron cloud shifts toward hydrogen, forming a permanent H<sup>δ−</sup>–O<sup>δ+</sup> dipole",
        "Δχ = 5.3; complete ionic transfer forms O<sup>2+</sup> and H<sup>−</sup> ions",
        "Δχ = 0.0; the bond is completely non-polar and forms only van der Waals forces"
      ],
      ans: 0,
      exp: "Δχ = χ<sub>O</sub> − χ<sub>H</sub> = 3.2 − 2.1 = 1.1. Because oxygen is more electronegative than hydrogen (3.2 > 2.1), it pulls the shared electron cloud closer, generating partial charges H<sup>δ+</sup>–O<sup>δ−</sup> that drive intermolecular hydrogen bonding."
    },
    {
      id: "M08-028",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What is the physical origin of van der Waals bonding between adjacent atoms or molecules?",
      options: [
        "Complete valence-electron transfer between metals and halogens",
        "Direct overlap of half-filled p-orbitals along fixed axes",
        "Mobile free electrons screening positive nuclear cores",
        "Weak electrostatic attraction between permanent or fluctuating (temporary) dipoles of neighbouring atoms or molecules"
      ],
      ans: 3,
      exp: "van der Waals bonds arise from weak electrostatic attraction between permanent molecular dipoles or fluctuating (temporary) induced dipoles in adjacent atoms or molecules."
    },
    {
      id: "M08-029",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In which group of materials/structures do van der Waals bonds play the dominant role in holding adjacent chains, layers, or atoms together?",
      options: [
        "Between Na<sup>+</sup> and Cl<sup>−</sup> ions in rock salt and between Cu ions in copper wire",
        "Between adjacent polymer chains, between parallel layers of graphite, and in solidified inert gases",
        "Between carbon atoms within a diamond crystal and between Si atoms in a silicon wafer",
        "Between Fe atoms in steel and between Cu and Al atoms in CuAl<sub>2</sub>"
      ],
      ans: 1,
      exp: "Weak van der Waals bonds act between adjacent long polymer chains, between stacked planar sheets in graphite (giving graphite its lubricating feel), and between atoms in solidified inert gases (e.g., solid Ar, Ne)."
    },
    {
      id: "M08-030",
      chapter: "Ch 11: Chemical Bonding & Interatomic Forces",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Which material-to-bonding match is COMPLETELY CORRECT across all four entries?",
      options: [
        "NaCl: covalent; Si: ionic; Cu: hydrogen; Graphite inter-layer: metallic",
        "NaCl: ionic; Si: metallic; H<sub>2</sub>O intermolecular: van der Waals only; Polymer inter-chain: covalent",
        "NaCl: ionic; Si: covalent; Cu: metallic; Graphite inter-layer: van der Waals",
        "NaCl: metallic; Si: covalent; Cu: ionic; Solid inert gas: hydrogen"
      ],
      ans: 2,
      exp: "NaCl is a classic ionic crystal (non-directional Coulombic attraction), Si is covalently bonded (directional sharing), Cu is metallically bonded (delocalised electron sea), and the stacked sheets of graphite are held together by weak secondary van der Waals bonds."
    }
  ]
});
