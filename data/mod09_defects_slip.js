window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod09",
  questions: [
    {
      id: "M09-001",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which classification correctly matches crystal defects to their spatial dimensionality (0-D, 1-D, and 2-D)?",
      options: [
        "0-D: Dislocations; 1-D: Vacancies; 2-D: Frenkel defects",
        "0-D: Point defects (vacancies, Schottky, Frenkel); 1-D: Line defects (dislocations); 2-D: Planar defects (grain boundaries, stacking faults)",
        "0-D: Grain boundaries; 1-D: Twin boundaries; 2-D: Substitutional impurities",
        "0-D: Interstitials; 1-D: Free surfaces; 2-D: Edge and screw dislocations"
      ],
      ans: 1,
      exp: "Crystal imperfections are grouped by dimensionality: 0-D point defects (vacancy, interstitial, substitutional, Schottky, Frenkel), 1-D line defects (edge, screw, and mixed dislocations), and 2-D planar/surface defects (free surface, grain boundary, twin boundary, stacking fault)."
    },
    {
      id: "M09-002",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which of the following crystal imperfections is classified as a 1-D (line) defect?",
      options: [
        "Schottky defect",
        "Stacking fault",
        "Twin boundary",
        "Screw dislocation"
      ],
      ans: 3,
      exp: "Dislocations (edge, screw, and mixed) are 1-D line defects. A Schottky defect is a 0-D point defect, while stacking faults and twin boundaries are 2-D planar defects."
    },
    {
      id: "M09-003",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which list contains ONLY 2-D (planar or surface) crystal defects?",
      options: [
        "Free surface, grain boundary, twin boundary, and stacking fault",
        "Vacancy, grain boundary, twin boundary, and edge dislocation",
        "Free surface, Schottky defect, Frenkel defect, and stacking fault",
        "Grain boundary, mixed dislocation, substitutional atom, and twin boundary"
      ],
      ans: 0,
      exp: "All four 2-D (planar/surface) defects are free surfaces, grain boundaries, twin boundaries, and stacking faults."
    },
    {
      id: "M09-004",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How do the three basic 0-D point defects—vacancy, interstitial, and substitutional—differ in a crystalline solid?",
      options: [
        "A vacancy is a foreign atom on a lattice site; an interstitial is a missing atom; a substitutional is an extra atom in a void",
        "A vacancy is an extra half-plane; an interstitial is a missing cation–anion pair; a substitutional is a mirror plane",
        "A vacancy is a missing atom from a regular lattice site; an interstitial is an extra atom squeezed into a void between sites; a substitutional defect replaces a host atom with a foreign atom",
        "A vacancy occurs only in ceramics; an interstitial occurs only in polymers; a substitutional occurs only in amorphous glasses"
      ],
      ans: 2,
      exp: "A vacancy is an unoccupied regular lattice site; an interstitial is a self- or foreign atom occupying an interstitial void between regular sites; a substitutional defect occurs when a foreign (solute/impurity) atom replaces a host atom at a regular lattice site."
    },
    {
      id: "M09-005",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "The equilibrium fraction of vacancies in a crystal is given by n<sub>v</sub> / N = exp(−Q<sub>v</sub> / k<sub>B</sub>T). How does n<sub>v</sub> / N respond to increasing absolute temperature T and increasing vacancy formation energy Q<sub>v</sub>?",
      options: [
        "Increases linearly with T and increases exponentially with Q<sub>v</sub>",
        "Increases exponentially with T and decreases exponentially with larger Q<sub>v</sub>",
        "Decreases exponentially with T and increases linearly with Q<sub>v</sub>",
        "Remains independent of T once the crystal reaches room temperature"
      ],
      ans: 1,
      exp: "Because (−Q<sub>v</sub> / k<sub>B</sub>T) is negative inside the exponential, raising T makes the exponent less negative so n<sub>v</sub> / N increases exponentially; a larger formation energy Q<sub>v</sub> makes the exponent more negative, lowering n<sub>v</sub> / N exponentially."
    },
    {
      id: "M09-006",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A metal has a vacancy formation energy Q<sub>v</sub> = 0.90 eV. Using k<sub>B</sub> = 8.617 × 10<sup>−5</sup> eV/K, calculate its equilibrium vacancy fraction n<sub>v</sub> / N at T = 1000 K.",
      options: [
        "2.91 × 10<sup>−5</sup>",
        "5.76 × 10<sup>−7</sup>",
        "9.57 × 10<sup>−2</sup>",
        "3.43 × 10<sup>4</sup>"
      ],
      ans: 0,
      exp: "n<sub>v</sub> / N = exp(−Q<sub>v</sub> / k<sub>B</sub>T) = exp[−0.90 / (8.617 × 10<sup>−5</sup> × 1000)] = exp(−10.444) = 2.91 × 10<sup>−5</sup>."
    },
    {
      id: "M09-007",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "A metal with Q<sub>v</sub> = 0.90 eV is heated to 727°C. Using k<sub>B</sub> = 8.617 × 10<sup>−5</sup> eV/K, what happens if a student mistakenly plugs T = 727 directly into exp(−Q<sub>v</sub> / k<sub>B</sub>T) instead of converting to Kelvin (T = 1000 K)?",
      options: [
        "The student gets the exact same answer because exponential ratios cancel temperature offsets",
        "The student overestimates the vacancy fraction by about 50×",
        "The student obtains a negative vacancy concentration",
        "The student calculates 5.76 × 10<sup>−7</sup> instead of the true 2.91 × 10<sup>−5</sup>, underestimating the vacancy fraction by roughly 50×"
      ],
      ans: 3,
      exp: "Classic exam trap: Temperature T in n<sub>v</sub> / N = exp(−Q<sub>v</sub> / k<sub>B</sub>T) MUST be absolute temperature in Kelvin! At 727°C = 1000 K, exp(−0.90 / 0.08617) = 2.91 × 10<sup>−5</sup>. Wrongly using T = 727 gives exp(−14.37) = 5.76 × 10<sup>−7</sup> (about 50 times too small)."
    },
    {
      id: "M09-008",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Copper at 1000°C (1273 K) has total atomic site density N = 8.0 × 10<sup>28</sup> atoms/m<sup>3</sup> and vacancy formation energy Q<sub>v</sub> = 0.90 eV. Taking k<sub>B</sub> = 8.617 × 10<sup>−5</sup> eV/K, calculate the equilibrium number of vacancies per cubic metre (n<sub>v</sub>).",
      options: [
        "2.73 × 10<sup>24</sup> m<sup>−3</sup>",
        "6.56 × 10<sup>23</sup> m<sup>−3</sup>",
        "2.19 × 10<sup>25</sup> m<sup>−3</sup>",
        "8.00 × 10<sup>25</sup> m<sup>−3</sup>"
      ],
      ans: 2,
      exp: "First compute the exponent: −Q<sub>v</sub> / (k<sub>B</sub>T) = −0.90 / (8.617 × 10<sup>−5</sup> × 1273) = −0.90 / 0.10969 = −8.2046.<br>Vacancy fraction: exp(−8.2046) = 2.734 × 10<sup>−4</sup>.<br>n<sub>v</sub> = N × (n<sub>v</sub>/N) = (8.0 × 10<sup>28</sup>) × (2.734 × 10<sup>−4</sup>) = 2.19 × 10<sup>25</sup> vacancies/m<sup>3</sup>."
    },
    {
      id: "M09-009",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "At T = 1000 K, a metal exhibits an equilibrium vacancy fraction of n<sub>v</sub> / N = 1.0 × 10<sup>−5</sup>. Using k<sub>B</sub> = 8.617 × 10<sup>−5</sup> eV/K, determine its vacancy formation energy Q<sub>v</sub>.",
      options: [
        "0.431 eV",
        "0.992 eV",
        "1.380 eV",
        "2.303 eV"
      ],
      ans: 1,
      exp: "Rearranging n<sub>v</sub> / N = exp(−Q<sub>v</sub> / k<sub>B</sub>T) gives Q<sub>v</sub> = −k<sub>B</sub>T ln(n<sub>v</sub> / N).<br>ln(1.0 × 10<sup>−5</sup>) = −5 ln(10) = −11.513.<br>Q<sub>v</sub> = −(8.617 × 10<sup>−5</sup> eV/K)(1000 K)(−11.513) = 0.992 eV."
    },
    {
      id: "M09-010",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A metal has vacancy formation energy Q<sub>v</sub> = 1.00 eV (k<sub>B</sub> = 8.617 × 10<sup>−5</sup> eV/K). By approximately what factor does its equilibrium vacancy concentration increase when heated from T<sub>1</sub> = 800 K to T<sub>2</sub> = 1000 K?",
      options: [
        "18.2×",
        "1.25×",
        "2.90×",
        "450×"
      ],
      ans: 0,
      exp: "n<sub>v2</sub> / n<sub>v1</sub> = exp[(−Q<sub>v</sub> / k<sub>B</sub>)(1/T<sub>2</sub> − 1/T<sub>1</sub>)].<br>1/T<sub>2</sub> − 1/T<sub>1</sub> = 1/1000 − 1/800 = −2.5 × 10<sup>−4</sup> K<sup>−1</sup>.<br>Exponent = −(1.00 / 8.617 × 10<sup>−5</sup>)(−2.5 × 10<sup>−4</sup>) = +2.901.<br>Ratio = exp(2.901) = 18.2."
    },
    {
      id: "M09-011",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why are self-interstitial point defects present in far lower equilibrium concentrations than vacancies in close-packed metals?",
      options: [
        "Self-interstitials violate electrical neutrality in metals",
        "Self-interstitials can form only at temperatures below 0 K",
        "Forcing a full-sized host atom into a small interstitial void creates severe compressive lattice distortion, making its formation energy much higher than that of a vacancy",
        "Vacancies release energy upon formation, whereas self-interstitials require zero energy"
      ],
      ans: 2,
      exp: "Interstitial voids in close-packed metals are significantly smaller than host atomic radii. Squeezing a host atom into an interstitial site induces large compressive strain, giving self-interstitials a much higher formation energy (and far lower equilibrium concentration) than vacancies."
    },
    {
      id: "M09-012",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What defines a Schottky defect in an ionic crystal?",
      options: [
        "An extra half-plane of cations inserted into the crystal",
        "A foreign metal atom substituting for a neutral host atom",
        "A single cation hopping from a regular site into an interstitial void",
        "An equal number of missing cations and anions (cation–anion vacancy pair) maintaining overall electrical neutrality"
      ],
      ans: 3,
      exp: "A Schottky defect in an ionic solid consists of paired cation and anion vacancies in stoichiometric proportion so that overall electrical charge neutrality is strictly preserved."
    },
    {
      id: "M09-013",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What defines a Frenkel defect in an ionic crystal?",
      options: [
        "Equal numbers of cations and anions completely missing from the crystal",
        "A smaller ion (usually a cation) leaving its regular lattice site and moving into an interstitial void, creating a vacancy–interstitial pair",
        "A mirror-symmetry stacking plane separating two oppositely oriented regions",
        "A missing layer of close-packed anions along a {111} plane"
      ],
      ans: 1,
      exp: "A Frenkel defect forms when a smaller ion—typically a cation—vacates its normal lattice site and relocates into a nearby interstitial void, producing a vacancy–interstitial pair."
    },
    {
      id: "M09-014",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "How do Schottky defects and Frenkel defects affect the macroscopic density of an ionic crystal?",
      options: [
        "Schottky defects DECREASE crystal density, whereas Frenkel defects leave crystal density UNCHANGED",
        "Both Schottky and Frenkel defects decrease crystal density equally",
        "Schottky defects leave crystal density unchanged, whereas Frenkel defects decrease crystal density",
        "Schottky defects increase crystal density, whereas Frenkel defects decrease crystal density"
      ],
      ans: 0,
      exp: "Classic exam trap: In a Schottky defect, cations and anions are removed from lattice sites (reducing mass per unit volume), so crystal density DECREASES. In a Frenkel defect, the displaced ion remains inside the crystal at an interstitial void (no mass is lost), so crystal density stays UNCHANGED."
    },
    {
      id: "M09-015",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In ionic crystals that exhibit Frenkel defects, why is it usually the CATION rather than the ANION that moves into an interstitial site?",
      options: [
        "Cations have no electrostatic charge and feel no repulsion",
        "Anions are always lighter and evaporate from the crystal surface",
        "Cations are generally much smaller than anions, allowing them to fit into interstitial voids with lower lattice-distortion energy",
        "Cations cannot form vacancies in ionic crystals"
      ],
      ans: 2,
      exp: "Because cations lose valence electrons and anions gain them, cations are typically considerably smaller than anions. A smaller cation fits into an interstitial void with much less strain energy than a bulky anion."
    },
    {
      id: "M09-016",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "dislocations",
      q: "Referring to the dislocation diagram, how is an EDGE dislocation structured, and what is the angle between its dislocation line vector t̂ and Burgers vector b⃗?",
      options: [
        "Atomic planes wind helically like a spiral ramp; t̂ ∥ b⃗ (0°)",
        "A row of missing atoms along a grain boundary; angle varies from 0° to 90°",
        "A mirror-reflection twin plane; t̂ ∥ b⃗ (180°)",
        "An extra half-plane of atoms inserted whose bottom edge is the dislocation line t̂; t̂ ⊥ b⃗ (90°)"
      ],
      ans: 3,
      exp: "An edge dislocation is formed by inserting an extra half-plane of atoms into the crystal; the bottom termination of this half-plane is the dislocation line t̂, which is perpendicular to the Burgers vector b⃗ (t̂ ⊥ b⃗, 90°)."
    },
    {
      id: "M09-017",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "dislocations",
      q: "Referring to the dislocation diagram, how is a SCREW dislocation formed, and what is the orientation between its dislocation line t̂ and Burgers vector b⃗?",
      options: [
        "Shearing one part of the crystal relative to another so atomic planes wind helically like a spiral ramp around t̂; t̂ ∥ b⃗ (0°)",
        "Inserting an extra half-plane of atoms above the slip plane; t̂ ⊥ b⃗ (90°)",
        "Removing a circular disc of vacancies inside a {111} plane; t̂ ⊥ b⃗ (90°)",
        "Rotating two adjacent grains by more than 15°; b⃗ = 0"
      ],
      ans: 0,
      exp: "A screw dislocation arises from shearing one region of a crystal relative to the other so that atomic planes transform into a continuous helical ramp around the dislocation line t̂, with t̂ ∥ b⃗ (0°)."
    },
    {
      id: "M09-018",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "dislocations",
      q: "Referring to the curved MIXED dislocation shown in the diagram, how do the angle between t̂ and b⃗ and the Burgers vector b⃗ itself behave along the curved dislocation line?",
      options: [
        "The angle stays fixed at 45° everywhere, while the magnitude of b⃗ changes continuously from zero to a full lattice spacing",
        "The angle between t̂ and b⃗ varies smoothly from 90° (pure edge) to 0° (pure screw) along the curve, while b⃗ remains constant in magnitude and direction everywhere along the line",
        "The angle jumps discontinuously between 90° and 0° with no intermediate mixed region",
        "Both t̂ and b⃗ remain mutually perpendicular at every point on the curve"
      ],
      ans: 1,
      exp: "Along a curved mixed dislocation line, the local line tangent t̂ changes direction so the angle between t̂ and b⃗ varies smoothly from 90° (pure edge) to 0° (pure screw), whereas the Burgers vector b⃗ is invariant along the entire dislocation line."
    },
    {
      id: "M09-019",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "dislocations",
      q: "Inspecting the edge dislocation diagram (where the extra half-plane terminates from above onto the slip plane), what types of lattice stress exist immediately ABOVE and BELOW the slip plane near the dislocation core?",
      options: [
        "Tensile stress above the slip plane and compressive stress below the slip plane",
        "Pure hydrostatic tension both above and below the slip plane",
        "Compressive stress above the slip plane (where extra atoms crowd in) and tensile stress below the slip plane (where bonds are stretched apart)",
        "Zero normal stress anywhere; only pure shear stress exists"
      ],
      ans: 2,
      exp: "Near an edge dislocation core, the extra half-plane wedges atoms closer together above the slip plane, creating a region of COMPRESSIVE stress, while atoms below the slip plane are pulled apart, creating a region of TENSILE stress."
    },
    {
      id: "M09-020",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "dislocations",
      q: "Referring to the Burgers circuit construction on the diagram (taking equal atom-to-atom steps right, down, left, and up), how is the Burgers vector b⃗ identified?",
      options: [
        "In an ideal crystal the circuit fails to close, whereas around a dislocation it always closes with Start = End",
        "The Burgers vector equals the total perimeter of the atom-to-atom loop",
        "The Burgers circuit can only be drawn around 0-D vacancies, never around 1-D dislocations",
        "In a perfect crystal the circuit closes (Start = End); around a dislocation it fails to close (Start ≠ End), and the closure vector connecting End to Start is b⃗"
      ],
      ans: 3,
      exp: "A Burgers circuit uses equal numbers of lattice steps in opposite directions. In an ideal crystal the loop closes (Start = End, b⃗ = 0); when enclosing a dislocation it fails to close, and the closure vector from End to Start defines the Burgers vector b⃗."
    },
    {
      id: "M09-021",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "How does a PERFECT (unit) dislocation differ from an IMPERFECT (partial) dislocation?",
      options: [
        "A perfect dislocation has b⃗ equal to a full lattice translation vector, whereas an imperfect (partial) dislocation has b⃗ equal to a fraction of a lattice vector and leaves a stacking fault behind",
        "A perfect dislocation has b⃗ = 0, whereas an imperfect dislocation has b⃗ ≠ 0",
        "A perfect dislocation is always pure edge, whereas an imperfect dislocation is always pure screw",
        "A perfect dislocation creates a grain boundary, whereas an imperfect dislocation eliminates all vacancies"
      ],
      ans: 0,
      exp: "When b⃗ equals a full crystal lattice translation vector, atoms shift into equivalent lattice sites (perfect dislocation). When b⃗ is only a fraction of a lattice vector (imperfect/partial dislocation), registry is disrupted and a 2-D stacking fault is left behind."
    },
    {
      id: "M09-022",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For FCC copper (lattice parameter a = 0.361 nm), the Burgers vector of a perfect dislocation lies along the close-packed ⟨110⟩ direction with magnitude |b⃗| = a / √2. Calculate |b⃗|.",
      options: [
        "0.361 nm",
        "0.313 nm",
        "0.255 nm",
        "0.511 nm"
      ],
      ans: 2,
      exp: "In FCC, the shortest full lattice translation vector is (a/2)⟨110⟩, so |b⃗| = (a/2)√(1<sup>2</sup> + 1<sup>2</sup> + 0<sup>2</sup>) = a/√2 = 0.361 / 1.4142 = 0.255 nm."
    },
    {
      id: "M09-023",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For BCC iron (lattice parameter a = 0.287 nm), a perfect dislocation has its Burgers vector along the close-packed ⟨111⟩ direction with magnitude |b⃗| = (√3 / 2) a. Calculate |b⃗|.",
      options: [
        "0.203 nm",
        "0.249 nm",
        "0.287 nm",
        "0.497 nm"
      ],
      ans: 1,
      exp: "In BCC, the shortest full lattice translation vector is (a/2)⟨111⟩, so |b⃗| = (√3 / 2) × 0.287 = 0.8660 × 0.287 = 0.2485 nm ≈ 0.249 nm."
    },
    {
      id: "M09-024",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Under an applied shear stress parallel to the Burgers vector b⃗, how does the direction of dislocation line motion compare for an EDGE dislocation versus a SCREW dislocation?",
      options: [
        "Both edge and screw dislocation lines move parallel to b⃗",
        "Both edge and screw dislocation lines move perpendicular to b⃗",
        "An edge dislocation line moves perpendicular to b⃗, whereas a screw dislocation line moves parallel to b⃗",
        "An edge dislocation line glides parallel to b⃗, whereas a screw dislocation line moves perpendicular to b⃗ (while both produce macroscopic slip along b⃗)"
      ],
      ans: 3,
      exp: "An edge dislocation line glides parallel to the shear stress and parallel to b⃗. A screw dislocation line advances perpendicular to b⃗, yet the resulting sheared displacement of the upper crystal half is still in the direction of b⃗."
    },
    {
      id: "M09-025",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why do atoms lying on a crystal's free surface (a 2-D defect) have higher potential energy than atoms deep inside the bulk?",
      options: [
        "Surface atoms have unsatisfied (broken) nearest-neighbour chemical bonds compared to fully coordinated bulk atoms",
        "Surface atoms possess smaller atomic masses than interior atoms",
        "Surface atoms always convert from metallic bonding to ionic bonding",
        "Surface atoms experience higher coordination numbers than bulk atoms"
      ],
      ans: 0,
      exp: "Bulk atoms are surrounded by a full complement of nearest neighbours, whereas surface atoms lack neighbours on one side and therefore have unsatisfied (broken) bonds, giving them excess potential energy."
    },
    {
      id: "M09-026",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "A crystal of cross-sectional area A is cleaved cleanly. If there are n<sub>A</sub> atoms per unit area, n<sub>B</sub> broken nearest-neighbour bonds per atom, and bond energy E per bond (total bond-breaking energy U = A n<sub>A</sub> n<sub>B</sub> E), what is the specific surface energy γ (in J/m<sup>2</sup>)?",
      options: [
        "γ = n<sub>A</sub> n<sub>B</sub> E",
        "γ = (1/2) n<sub>A</sub> n<sub>B</sub> E",
        "γ = 2 n<sub>A</sub> n<sub>B</sub> E",
        "γ = (n<sub>A</sub> E) / (2 n<sub>B</sub>)"
      ],
      ans: 1,
      exp: "Cleaving across cross-sectional area A creates TWO new free surfaces with total area 2A. Therefore, specific surface energy γ = U / (2A) = (A n<sub>A</sub> n<sub>B</sub> E) / (2A) = (1/2) n<sub>A</sub> n<sub>B</sub> E (J/m<sup>2</sup>)."
    },
    {
      id: "M09-027",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "In deriving the specific surface energy formula γ = (1/2) n<sub>A</sub> n<sub>B</sub> E from U = A n<sub>A</sub> n<sub>B</sub> E, why must the total cleavage energy U be divided by 2A rather than A?",
      options: [
        "Because only half of the atoms on a crystal plane participate in chemical bonding",
        "Because half of the cleavage energy is immediately converted into kinetic energy of dislocations",
        "Because bond energy E is always defined per two moles of bonds",
        "Because cleaving a crystal of cross-sectional area A creates TWO new free surfaces whose combined surface area is 2A"
      ],
      ans: 3,
      exp: "Cleaving a crystal across cross-section A exposes two matching fracture faces—one on each newly separated half—producing a total newly created surface area of 2A. Hence γ = U / (2A)."
    },
    {
      id: "M09-028",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "On a specific cleavage plane of a crystal, planar atomic density is n<sub>A</sub> = 1.5 × 10<sup>19</sup> atoms/m<sup>2</sup>, each atom loses n<sub>B</sub> = 4 nearest-neighbour bonds upon cleavage, and the bond energy is E = 5.0 × 10<sup>−20</sup> J/bond. Calculate the specific surface energy γ.",
      options: [
        "1.50 J/m<sup>2</sup>",
        "3.00 J/m<sup>2</sup>",
        "0.75 J/m<sup>2</sup>",
        "6.00 J/m<sup>2</sup>"
      ],
      ans: 0,
      exp: "Using γ = (1/2) n<sub>A</sub> n<sub>B</sub> E:<br>γ = 0.5 × (1.5 × 10<sup>19</sup> m<sup>−2</sup>) × 4 × (5.0 × 10<sup>−20</sup> J) = 0.5 × 3.00 = 1.50 J/m<sup>2</sup>.<br>(Trap: omitting the factor 1/2 wrongly yields 3.00 J/m<sup>2</sup>.)"
    },
    {
      id: "M09-029",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A brittle crystal with specific surface energy γ = 1.50 J/m<sup>2</sup> is cleaved cleanly across a cross-sectional area A = 2.0 cm<sup>2</sup> (2.0 × 10<sup>−4</sup> m<sup>2</sup>). What is the minimum total surface energy U required to form the new surfaces?",
      options: [
        "0.30 mJ",
        "0.15 mJ",
        "0.60 mJ",
        "3.00 mJ"
      ],
      ans: 2,
      exp: "Cleaving area A produces total new surface area 2A:<br>U = 2Aγ = 2 × (2.0 × 10<sup>−4</sup> m<sup>2</sup>) × 1.50 J/m<sup>2</sup> = 6.0 × 10<sup>−4</sup> J = 0.60 mJ.<br>(Trap: using Aγ instead of 2Aγ wrongly yields 0.30 mJ.)"
    },
    {
      id: "M09-030",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A crystal exhibits a specific surface energy γ = 1.80 J/m<sup>2</sup> on a cleavage plane with n<sub>A</sub> = 1.6 × 10<sup>19</sup> atoms/m<sup>2</sup> and n<sub>B</sub> = 3 broken bonds per surface atom. Calculate the nearest-neighbour bond energy E in Joules (and eV, with 1 eV = 1.602 × 10<sup>−19</sup> J).",
      options: [
        "3.75 × 10<sup>−20</sup> J (0.234 eV)",
        "7.50 × 10<sup>−20</sup> J (0.468 eV)",
        "1.50 × 10<sup>−19</sup> J (0.936 eV)",
        "2.25 × 10<sup>−19</sup> J (1.404 eV)"
      ],
      ans: 1,
      exp: "From γ = (1/2) n<sub>A</sub> n<sub>B</sub> E, solve for E:<br>E = 2γ / (n<sub>A</sub> n<sub>B</sub>) = (2 × 1.80) / (1.6 × 10<sup>19</sup> × 3) = 3.60 / (4.8 × 10<sup>19</sup>) = 7.50 × 10<sup>−20</sup> J.<br>In eV: (7.50 × 10<sup>−20</sup>) / (1.602 × 10<sup>−19</sup>) = 0.468 eV."
    },
    {
      id: "M09-031",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What is a grain boundary, and what misorientation angle θ distinguishes a low-angle grain boundary from a high-angle (large-angle) grain boundary?",
      options: [
        "An interface between different phases; low-angle θ < 1°, high-angle θ > 45°",
        "A row of missing ions; low-angle θ < 30°, high-angle θ > 60°",
        "A mirror-symmetry plane; low-angle θ = 0°, high-angle θ = 90°",
        "An interface between adjacent grains of different crystallographic orientation; low-angle has θ < 10°–15° (arrays of dislocations) and high-angle has θ > 15°"
      ],
      ans: 3,
      exp: "A grain boundary separates crystallites (grains) of differing orientation. Low-angle grain boundaries have misorientation θ < 10°–15° and can be modelled as orderly arrays of dislocations; high-angle grain boundaries have θ > 15°."
    },
    {
      id: "M09-032",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which description and atomic stacking sequence correctly represent a TWIN BOUNDARY?",
      options: [
        "A special mirror-symmetry plane across which the atomic stacking reflects itself, such as ...ABCBA...",
        "A disordered boundary separating two grains misoriented by > 15°, with no symmetry",
        "An interrupted close-packed sequence where a single C layer is omitted: ...ABCAB|ABC...",
        "A linear row of interstitial atoms inserted along a ⟨110⟩ direction"
      ],
      ans: 0,
      exp: "A twin boundary is a special 2-D planar defect acting as a mirror-symmetry plane across which the atomic lattice/stacking reflects itself (e.g., ...ABC|BA... or ...ABCBA...)."
    },
    {
      id: "M09-033",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which atomic stacking sequence illustrates an FCC STACKING FAULT?",
      options: [
        "...ABCABCABC... (uninterrupted regular FCC stacking)",
        "...ABABABAB... (perfect HCP stacking throughout the crystal)",
        "...ABCAB|ABC... (interruption of regular FCC stacking caused by a missing C layer)",
        "...ABCBA... (mirror-symmetric twin boundary across plane C)"
      ],
      ans: 2,
      exp: "A stacking fault is a 2-D planar interruption in the normal close-packed stacking sequence—for example, omitting a C layer in FCC gives ...ABCAB|ABC... (locally introducing a thin HCP-like ABAB region)."
    },
    {
      id: "M09-034",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "During plastic deformation of crystalline metals by SLIP, along which crystallographic planes and directions do dislocations preferentially glide?",
      options: [
        "Least densely packed planes along the longest interatomic directions",
        "Most densely packed planes along the most densely packed directions",
        "Randomly oriented grain boundaries independent of crystal structure",
        "Planes with the smallest interplanar spacing d<sub>hkl</sub> along directions with the largest Burgers vector"
      ],
      ans: 1,
      exp: "Dislocation glide (slip) requires the lowest shear stress on the MOST DENSELY PACKED planes (largest interplanar spacing d<sub>hkl</sub>) along the MOST DENSELY PACKED directions (shortest Burgers vector |b⃗|)."
    },
    {
      id: "M09-035",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Using standard slip-system family notation {hkl}⟨uvw⟩, what are the primary slip systems and total slip-system count for FCC metals (such as Al, Cu, and Au)?",
      options: [
        "{110}⟨111⟩: 6 planes × 2 directions = 12 slip systems",
        "{100}⟨100⟩: 3 planes × 2 directions = 6 slip systems",
        "{111}⟨111⟩: 4 planes × 4 directions = 16 slip systems",
        "{111}⟨110⟩: 4 planes × 3 directions = 12 slip systems"
      ],
      ans: 3,
      exp: "In FCC crystals, the most densely packed planes are the 4 independent {111} planes, and each contains 3 close-packed ⟨110⟩ directions: {111}⟨110⟩ → 4 × 3 = 12 slip systems."
    },
    {
      id: "M09-036",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "What are the primary room-temperature slip system family and number of slip systems in BCC metals?",
      options: [
        "{111}⟨110⟩: 4 × 3 = 12 slip systems",
        "{100}⟨110⟩: 3 × 2 = 6 slip systems",
        "{110}⟨111⟩: 6 × 2 = 12 slip systems",
        "{112}⟨110⟩: 12 × 2 = 24 slip systems"
      ],
      ans: 2,
      exp: "At room temperature, BCC metals slip primarily on the 6 {110} planes along the 2 close-packed ⟨111⟩ directions contained in each plane: {110}⟨111⟩ → 6 × 2 = 12 slip systems."
    },
    {
      id: "M09-037",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "How does slip behaviour in BCC metals change at elevated temperatures compared to room temperature?",
      options: [
        "Because BCC lacks truly close-packed planes, thermal activation enables additional slip on {112} and {123} planes along ⟨111⟩ (up to 48 total slip systems), increasing ductility with temperature",
        "Raising temperature freezes out {110} planes, reducing BCC slip systems from 12 to 3 and making BCC metals more brittle",
        "BCC metals switch their slip direction from ⟨111⟩ to ⟨100⟩ at elevated temperatures while keeping exactly 12 systems",
        "Elevated temperature eliminates dislocations entirely, causing BCC metals to deform only by cleavage"
      ],
      ans: 0,
      exp: "BCC lacks truly close-packed planes, so at room temperature slip occurs mainly on {110}⟨111⟩ (12 systems). At higher temperatures, thermal assistance activates {112}⟨111⟩ (12) and {123}⟨111⟩ (24) systems as well—up to 48 slip systems—causing BCC metals to gain ductility with temperature."
    },
    {
      id: "M09-038",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Both FCC and BCC metals possess 12 primary slip systems at room temperature. Why are FCC metals (Al, Cu, Au) significantly more ductile than BCC metals at room and sub-zero temperatures?",
      options: [
        "FCC metals have much higher melting points and stronger bonds than all BCC metals",
        "FCC {111} planes are truly close-packed and require very low shear stress for dislocation glide, whereas BCC lacks truly close-packed planes",
        "BCC metals cannot contain edge or screw dislocations at room temperature",
        "FCC metals deform exclusively by Schottky vacancy migration rather than slip"
      ],
      ans: 1,
      exp: "FCC {111} planes are truly close-packed (maximum planar atomic packing and interplanar spacing), so dislocations glide under low critical shear stress even at low temperatures. BCC {110} planes are not truly close-packed, requiring higher shear stress for glide."
    },
    {
      id: "M09-039",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "For an FCC crystal with slip system family {111}⟨110⟩, a valid slip direction [uvw] must LIE IN the slip plane (hkl) (satisfying hu + kv + lw = 0). Which specific direction actually lies in the (111) plane?",
      options: [
        "[110]",
        "[101]",
        "[011]",
        "[1<span class=\"bar\">1</span>0]"
      ],
      ans: 3,
      exp: "Check the Weiss Zone Law (hu + kv + lw = 0) for plane (111):<br>• [110]: 1(1) + 1(1) + 1(0) = 2 ≠ 0<br>• [101]: 1(1) + 1(0) + 1(1) = 2 ≠ 0<br>• [011]: 1(0) + 1(1) + 1(1) = 2 ≠ 0<br>• [1<span class=\"bar\">1</span>0]: 1(1) + 1(−1) + 1(0) = 0 ✓ (lies in (111), making (111)[1<span class=\"bar\">1</span>0] a valid FCC slip system)."
    },
    {
      id: "M09-040",
      chapter: "Ch 12: Crystal Defects & Slip Systems",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "In BCC iron (room-temperature slip family {110}⟨111⟩), which specific slip direction belongs to ⟨111⟩ AND lies in the (110) slip plane?",
      options: [
        "[111]",
        "[11<span class=\"bar\">1</span>]",
        "[1<span class=\"bar\">1</span>1]",
        "[1<span class=\"bar\">1</span>0]"
      ],
      ans: 2,
      exp: "A valid BCC room-temperature slip direction on (110) must be in the ⟨111⟩ family AND satisfy hu + kv + lw = 0:<br>• [111]: 1(1) + 1(1) + 0(1) = 2 ≠ 0<br>• [11<span class=\"bar\">1</span>]: 1(1) + 1(1) + 0(−1) = 2 ≠ 0<br>• [1<span class=\"bar\">1</span>0]: satisfies 1 − 1 + 0 = 0, but is in ⟨110⟩, NOT a close-packed ⟨111⟩ direction!<br>• [1<span class=\"bar\">1</span>1]: in ⟨111⟩ AND 1(1) + 1(−1) + 0(1) = 0 ✓."
    }
  ]
});
