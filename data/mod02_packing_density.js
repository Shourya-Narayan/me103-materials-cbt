window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod02",
  questions: [
    {
      id: "M02-001",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In a cubic unit cell, what fractional share of an atom belongs to the cell when the atom sits at a <strong>corner</strong>, a <strong>face centre</strong>, and the <strong>body centre</strong> respectively?",
      options: [
        "1/8 at a corner, 1/2 at a face centre, and 1 at the body centre",
        "1/4 at a corner, 1/2 at a face centre, and 1 at the body centre",
        "1/8 at a corner, 1/4 at a face centre, and 1/2 at the body centre",
        "1/6 at a corner, 1/2 at a face centre, and 1 at the body centre"
      ],
      ans: 0,
      exp: "Each corner atom is shared by 8 adjacent unit cells (contribution = <strong>1/8</strong>), each face-centred atom is shared by 2 adjacent cells (contribution = <strong>1/2</strong>), and a body-centred atom lies completely inside a single cell (contribution = <strong>1</strong>)."
    },
    {
      id: "M02-002",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cubic_cells",
      q: "Referring to the SC, BCC, and FCC unit cells illustrated, what are the effective numbers of atoms per unit cell (<strong>n<sub>SC</sub>, n<sub>BCC</sub>, n<sub>FCC</sub></strong>) respectively?",
      options: [
        "1, 3, and 6",
        "2, 4, and 6",
        "1, 2, and 4",
        "1, 2, and 3"
      ],
      ans: 2,
      exp: "Using corner (1/8), body-centre (1), and face-centre (1/2) shares: <strong>n<sub>SC</sub></strong> = 8×(1/8) = <strong>1</strong>; <strong>n<sub>BCC</sub></strong> = 8×(1/8) + 1 = <strong>2</strong>; <strong>n<sub>FCC</sub></strong> = 8×(1/8) + 6×(1/2) = <strong>4</strong>."
    },
    {
      id: "M02-003",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "An ordered cubic intermetallic crystal has atoms of element <strong>A</strong> at all 8 cube corners and atoms of element <strong>B</strong> at all 6 face centres. What is the chemical formula of the compound?",
      options: [
        "AB",
        "AB<sub>3</sub>",
        "A<sub>3</sub>B",
        "AB<sub>2</sub>"
      ],
      ans: 1,
      exp: "Effective A atoms per unit cell = 8 corners × (1/8) = <strong>1</strong>. Effective B atoms per unit cell = 6 face centres × (1/2) = <strong>3</strong>. Therefore, the stoichiometric ratio is A:B = 1:3, giving the formula <strong>AB<sub>3</sub></strong>."
    },
    {
      id: "M02-004",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How is the <strong>Coordination Number (CN)</strong> of a crystal structure defined?",
      options: [
        "The total number of atoms contained inside one conventional unit cell.",
        "The number of crystallographic faces intersecting at a single corner of the unit cell.",
        "The ratio of occupied atomic volume to the total unit cell volume.",
        "The number of equidistant nearest-neighbour atoms directly surrounding any given atom."
      ],
      ans: 3,
      exp: "The <strong>Coordination Number (CN)</strong> is defined as the number of nearest-neighbour equidistant atoms touching (or immediately surrounding) any chosen reference atom in the crystal lattice."
    },
    {
      id: "M02-005",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cubic_cells",
      q: "Using the cubic unit cells shown, what are the <strong>Coordination Numbers (CN)</strong> of Simple Cubic (SC), Body-Centred Cubic (BCC), and Face-Centred Cubic (FCC) crystals respectively?",
      options: [
        "4, 8, and 12",
        "6, 8, and 12",
        "6, 12, and 14",
        "8, 12, and 16"
      ],
      ans: 1,
      exp: "In <strong>SC</strong>, each atom touches 6 neighbours along ±x, ±y, ±z (<strong>CN = 6</strong>). In <strong>BCC</strong>, the body-centred atom touches 8 corner atoms (<strong>CN = 8</strong>). In <strong>FCC</strong>, each atom touches 12 equidistant neighbours across three mutually perpendicular face diagonals (<strong>CN = 12</strong>)."
    },
    {
      id: "M02-006",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cubic_cells",
      q: "In the hard-sphere cubic crystal models shown, along which geometric lines do adjacent atoms make direct physical contact in <strong>SC</strong>, <strong>BCC</strong>, and <strong>FCC</strong> respectively?",
      options: [
        "Cube edge (SC), body diagonal (BCC), and face diagonal (FCC)",
        "Cube edge (SC), face diagonal (BCC), and body diagonal (FCC)",
        "Face diagonal (SC), body diagonal (BCC), and cube edge (FCC)",
        "Body diagonal (SC), cube edge (BCC), and face diagonal (FCC)"
      ],
      ans: 0,
      exp: "Hard-sphere contact occurs along the <strong>cube edge</strong> in SC (a = 2r), along the <strong>body diagonal</strong> in BCC (√3 a = 4r), and along the <strong>face diagonal</strong> in FCC (√2 a = 4r)."
    },
    {
      id: "M02-007",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cubic_cells",
      q: "Referring to the touching-sphere geometry of the cubic unit cells, which set gives the exact lattice parameter <strong>a</strong> in terms of atomic radius <strong>r</strong> for SC, BCC, and FCC?",
      options: [
        "SC: a = 2r; BCC: a = 2√2 r; FCC: a = 4r/√3",
        "SC: a = 4r; BCC: a = 4r/√3; FCC: a = 4r/√2",
        "SC: a = 2r; BCC: a = √3 r/2; FCC: a = √2 r",
        "SC: a = 2r; BCC: a = 4r/√3; FCC: a = 2√2 r"
      ],
      ans: 3,
      exp: "From direct contact: SC edge gives <strong>a = 2r</strong>; BCC body diagonal gives √3 a = 4r ⇒ <strong>a = 4r/√3</strong>; FCC face diagonal gives √2 a = 4r ⇒ <strong>a = 4r/√2 = 2√2 r</strong>."
    },
    {
      id: "M02-008",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "What is the centre-to-centre nearest-neighbour interatomic distance (<strong>2r</strong>) expressed in terms of the lattice constant <strong>a</strong> for BCC and FCC crystals respectively?",
      options: [
        "BCC: a/√2; FCC: √3 a/2",
        "BCC: √3 a; FCC: √2 a",
        "BCC: √3 a/2; FCC: a/√2",
        "BCC: a/2; FCC: a/√3"
      ],
      ans: 2,
      exp: "In BCC, √3 a = 4r ⇒ 2r = <strong>√3 a / 2</strong> (half the body diagonal). In FCC, √2 a = 4r ⇒ 2r = √2 a / 2 = <strong>a / √2</strong> (half the face diagonal)."
    },
    {
      id: "M02-009",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "Which expression defines the <strong>Atomic Packing Factor (APF)</strong> of a unit cell of volume V<sub>cell</sub> containing <em>n</em> identical spherical atoms of radius <em>r</em>?",
      options: [
        "APF = V<sub>cell</sub> / [n · (4/3)πr<sup>3</sup>]",
        "APF = [n · (4/3)πr<sup>3</sup>] / V<sub>cell</sub>",
        "APF = [n · 4πr<sup>2</sup>] / V<sub>cell</sub>",
        "APF = [n · (4/3)πr<sup>3</sup>] / (N<sub>A</sub> V<sub>cell</sub>)"
      ],
      ans: 1,
      exp: "By definition, <strong>APF</strong> = (Volume occupied by atoms inside the unit cell) / (Total volume of unit cell) = <strong>[n · (4/3)πr<sup>3</sup>] / V<sub>cell</sub></strong>."
    },
    {
      id: "M02-010",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Which set lists the exact analytical expressions and numerical values of the <strong>Atomic Packing Factor (APF)</strong> for SC, BCC, and FCC crystals?",
      options: [
        "SC: π/6 (0.52); BCC: √3π/8 (0.68); FCC: π/(3√2) (0.74)",
        "SC: π/4 (0.79); BCC: √2π/6 (0.74); FCC: √3π/8 (0.68)",
        "SC: π/6 (0.52); BCC: π/(3√2) (0.74); FCC: √3π/8 (0.68)",
        "SC: √3π/12 (0.45); BCC: π/4 (0.79); FCC: π/3 (1.05)"
      ],
      ans: 0,
      exp: "Substituting a(r) and n into APF = [n(4/3)πr<sup>3</sup>]/a<sup>3</sup>: SC gives <strong>π/6 ≈ 0.52</strong>; BCC gives <strong>√3π/8 ≈ 0.68</strong>; FCC gives <strong>π/(3√2) ≈ 0.74</strong>."
    },
    {
      id: "M02-011",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "What percentage of unit cell volume consists of <strong>empty (void) space</strong> in SC, BCC, and FCC crystal structures respectively?",
      options: [
        "52%, 68%, and 74%",
        "26%, 32%, and 48%",
        "48%, 26%, and 32%",
        "48%, 32%, and 26%"
      ],
      ans: 3,
      exp: "Void percentage = 100% − APF(%). Thus: SC = 100 − 52 = <strong>48%</strong>; BCC = 100 − 68 = <strong>32%</strong>; FCC = 100 − 74 = <strong>26%</strong>."
    },
    {
      id: "M02-012",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which ranking orders common crystal structures from <strong>lowest</strong> to <strong>highest</strong> Atomic Packing Factor (APF)?",
      options: [
        "SC (52%) < Diamond Cubic (60%) < BCC (68%) < FCC (74%) < ideal HCP (82%)",
        "Diamond Cubic (34%) < BCC (68%) < SC (52%) < FCC (74%) = ideal HCP (74%)",
        "Diamond Cubic (34%) < SC (52%) < BCC (68%) < FCC (74%) = ideal HCP (74%)",
        "SC (52%) < BCC (68%) < ideal HCP (70%) < FCC (74%)"
      ],
      ans: 2,
      exp: "Diamond cubic is very open due to directional tetrahedral covalent bonding (<strong>APF = 34%</strong>), followed by SC (<strong>52%</strong>), BCC (<strong>68%</strong>), and the maximally dense close-packed structures <strong>FCC and ideal HCP tied at 74%</strong>."
    },
    {
      id: "M02-013",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Copper (r = 1.28 Å) and Lead (r = 1.75 Å) both crystallise in the <strong>FCC</strong> structure. How does the Atomic Packing Factor of Lead compare with that of Copper?",
      options: [
        "Both have the exact same APF of 0.74 because r<sup>3</sup> cancels out identically in the APF expression.",
        "Lead has a higher APF because larger atoms fill a greater fraction of the unit cell.",
        "Copper has a higher APF because smaller atoms pack with less interstitial void space.",
        "Lead has a higher APF by the ratio (1.75/1.28)<sup>3</sup> ≈ 2.56."
      ],
      ans: 0,
      exp: "For any pure FCC crystal, a = 2√2 r so a<sup>3</sup> = 16√2 r<sup>3</sup>. Thus APF = [4·(4/3)πr<sup>3</sup>] / (16√2 r<sup>3</sup>) = <strong>π/(3√2) ≈ 0.74</strong>. Because r<sup>3</sup> cancels completely, APF depends <em>only</em> on crystal geometry, never on atomic size."
    },
    {
      id: "M02-014",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Pure iron transforms from <strong>BCC (α-Fe)</strong> to <strong>FCC (γ-Fe)</strong> upon heating past 910°C. Assuming the atomic radius <em>r</em> remains constant during the transformation, what is the approximate percentage change in volume per atom?",
      options: [
        "An expansion of +8.8%",
        "A contraction of −8.1%",
        "A contraction of −6.0%",
        "Zero volume change (0%)"
      ],
      ans: 1,
      exp: "Volume per atom = V<sub>cell</sub>/n. For BCC: V<sub>BCC</sub>/2 = (4r/√3)<sup>3</sup>/2 = 32r<sup>3</sup>/(3√3) ≈ <strong>6.158 r<sup>3</sup></strong>. For FCC: V<sub>FCC</sub>/4 = (2√2 r)<sup>3</sup>/4 = 4√2 r<sup>3</sup> ≈ <strong>5.657 r<sup>3</sup></strong>. Fractional change = (5.657 − 6.158)/6.158 = −0.0814 = <strong>−8.1% (contraction)</strong>, reflecting denser FCC packing (74% vs 68%)."
    },
    {
      id: "M02-015",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "For a cubic crystal with lattice parameter <em>a</em>, effective atoms per cell <em>n</em>, molar mass <em>M</em>, and Avogadro's number N<sub>A</sub>, which expressions give the <strong>mass of one unit cell</strong> and the <strong>theoretical volume density ρ</strong>?",
      options: [
        "Mass of cell = M / N<sub>A</sub>; ρ = M / (n N<sub>A</sub> a<sup>3</sup>)",
        "Mass of cell = n M N<sub>A</sub>; ρ = n M N<sub>A</sub> / a<sup>3</sup>",
        "Mass of cell = n M / N<sub>A</sub>; ρ = n M / (N<sub>A</sub> a<sup>3</sup>)",
        "Mass of cell = n M / a<sup>3</sup>; ρ = n M / (N<sub>A</sub> a<sup>2</sup>)"
      ],
      ans: 2,
      exp: "The mass of one atom is M/N<sub>A</sub>, so the mass of a unit cell containing <em>n</em> atoms is <strong>nM/N<sub>A</sub></strong>. Dividing by unit cell volume V = a<sup>3</sup> yields <strong>ρV = nM/N<sub>A</sub> ⇒ ρ = nM/(N<sub>A</sub> a<sup>3</sup>)</strong>."
    },
    {
      id: "M02-016",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Aluminium has a density ρ = <strong>2.7 g/cm<sup>3</sup></strong>, atomic weight M = <strong>27 g/mol</strong>, and cubic lattice parameter a = <strong>4.05 Å</strong> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>). Calculate the effective number of atoms per unit cell <em>n</em> and identify its crystal structure.",
      options: [
        "n = 1; Simple Cubic (SC)",
        "n = 2; Body-Centred Cubic (BCC)",
        "n = 6; Hexagonal Close-Packed (HCP)",
        "n = 4; Face-Centred Cubic (FCC)"
      ],
      ans: 3,
      exp: "Convert a = 4.05 Å = 4.05 × 10<sup>−8</sup> cm, so a<sup>3</sup> = 6.643 × 10<sup>−23</sup> cm<sup>3</sup>. Then n = (ρ a<sup>3</sup> N<sub>A</sub>)/M = (2.7 × 6.643 × 10<sup>−23</sup> × 6.022 × 10<sup>23</sup>) / 27 = <strong>4.00</strong>. Since n = 4, Al is <strong>FCC</strong>."
    },
    {
      id: "M02-017",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Nickel has an <strong>FCC</strong> crystal structure with atomic radius <strong>r = 1.243 Å</strong>. What are its exact lattice constant <em>a</em> and unit cell volume <strong>V<sub>cell</sub></strong>?",
      options: [
        "a = 2.871 Å; V<sub>cell</sub> = 2.366 × 10<sup>−29</sup> m<sup>3</sup>",
        "a = 3.5157 Å; V<sub>cell</sub> = 4.3456 × 10<sup>−29</sup> m<sup>3</sup>",
        "a = 3.132 Å; V<sub>cell</sub> = 30.73 × 10<sup>−30</sup> m<sup>3</sup>",
        "a = 2.486 Å; V<sub>cell</sub> = 1.536 × 10<sup>−29</sup> m<sup>3</sup>"
      ],
      ans: 1,
      exp: "For FCC, a = 2√2 r = 2√2 × 1.243 Å = <strong>3.5157 Å</strong> = 3.5157 × 10<sup>−10</sup> m. Thus V<sub>cell</sub> = a<sup>3</sup> = (3.5157 × 10<sup>−10</sup>)<sup>3</sup> = <strong>4.3456 × 10<sup>−29</sup> m<sup>3</sup></strong>. (Watch out for the common calculation trap 30.73 × 10<sup>−30</sup> m<sup>3</sup>!)"
    },
    {
      id: "M02-018",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For FCC Nickel with atomic radius <strong>r = 1.243 Å</strong> (unit cell volume V<sub>cell</sub> = 4.3456 × 10<sup>−29</sup> m<sup>3</sup>), how many unit cells are contained in <strong>1 m<sup>3</sup></strong> of the metal?",
      options: [
        "2.30 × 10<sup>28</sup> unit cells",
        "3.25 × 10<sup>28</sup> unit cells",
        "9.20 × 10<sup>28</sup> unit cells",
        "4.35 × 10<sup>29</sup> unit cells"
      ],
      ans: 0,
      exp: "Number of unit cells in 1 m<sup>3</sup> = 1 / V<sub>cell</sub> = 1 / (4.3456 × 10<sup>−29</sup> m<sup>3</sup>) = <strong>2.30 × 10<sup>28</sup> unit cells</strong>."
    },
    {
      id: "M02-019",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Aluminium (FCC) has a density ρ = <strong>2700 kg/m<sup>3</sup></strong> and molar mass M = <strong>27 g/mol</strong> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>). Determine its lattice parameter <em>a</em> and atomic diameter <strong>D = 2r</strong>.",
      options: [
        "a = 3.214 Å; D = 2.273 Å",
        "a = 4.050 Å; D = 3.507 Å",
        "a = 4.050 Å; D = 2.864 Å",
        "a = 4.050 Å; D = 1.432 Å"
      ],
      ans: 2,
      exp: "Convert M = 0.027 kg/mol and n = 4 (FCC): a<sup>3</sup> = nM/(ρN<sub>A</sub>) = (4 × 0.027)/(2700 × 6.022 × 10<sup>23</sup>) = 6.642 × 10<sup>−29</sup> m<sup>3</sup> ⇒ <strong>a = 4.050 × 10<sup>−10</sup> m = 4.050 Å</strong>. For FCC, √2 a = 4r ⇒ atomic diameter D = 2r = a/√2 = 4.050/1.4142 = <strong>2.864 Å</strong>."
    },
    {
      id: "M02-020",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Chromium crystallises in the <strong>BCC</strong> structure with atomic weight M = <strong>52.0 g/mol</strong> and atomic radius r = <strong>1.249 Å</strong> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>). What is its theoretical density ρ?",
      options: [
        "3.60 g/cm<sup>3</sup>",
        "5.82 g/cm<sup>3</sup>",
        "9.14 g/cm<sup>3</sup>",
        "7.20 g/cm<sup>3</sup>"
      ],
      ans: 3,
      exp: "For BCC, n = 2 and a = 4r/√3 = (4 × 1.249)/1.7321 = <strong>2.8844 Å</strong> = 2.8844 × 10<sup>−8</sup> cm. Then a<sup>3</sup> = 2.3998 × 10<sup>−23</sup> cm<sup>3</sup>, and ρ = nM/(N<sub>A</sub> a<sup>3</sup>) = (2 × 52.0)/(6.022 × 10<sup>23</sup> × 2.3998 × 10<sup>−23</sup>) = <strong>7.20 g/cm<sup>3</sup></strong>."
    },
    {
      id: "M02-021",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A pure cubic metal has molar mass M = <strong>55.85 g/mol</strong>, density ρ = <strong>7.87 g/cm<sup>3</sup></strong>, and lattice parameter a = <strong>2.866 Å</strong> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>). Determine <em>n</em> and identify its cubic crystal structure.",
      options: [
        "n = 2; Body-Centred Cubic (BCC)",
        "n = 1; Simple Cubic (SC)",
        "n = 4; Face-Centred Cubic (FCC)",
        "n = 3; End-Centred Cubic"
      ],
      ans: 0,
      exp: "With a = 2.866 × 10<sup>−8</sup> cm, a<sup>3</sup> = 2.3541 × 10<sup>−23</sup> cm<sup>3</sup>. Thus n = (ρ a<sup>3</sup> N<sub>A</sub>)/M = (7.87 × 2.3541 × 10<sup>−23</sup> × 6.022 × 10<sup>23</sup>)/55.85 = <strong>1.998 ≈ 2</strong>, identifying a <strong>BCC</strong> crystal (α-Fe)."
    },
    {
      id: "M02-022",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Copper has an <strong>FCC</strong> crystal structure, atomic weight M = <strong>63.55 g/mol</strong>, and density ρ = <strong>8.96 g/cm<sup>3</sup></strong> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>). Calculate the atomic radius <em>r</em> of copper.",
      options: [
        "1.045 Å",
        "1.277 Å",
        "1.564 Å",
        "1.806 Å"
      ],
      ans: 1,
      exp: "For FCC (n = 4), a<sup>3</sup> = nM/(ρN<sub>A</sub>) = (4 × 63.55)/(8.96 × 6.022 × 10<sup>23</sup>) = 4.711 × 10<sup>−23</sup> cm<sup>3</sup> ⇒ a = 3.6117 × 10<sup>−8</sup> cm = <strong>3.612 Å</strong>. Since a = 2√2 r, r = a/(2√2) = 3.6117 / 2.8284 = <strong>1.277 Å</strong>."
    },
    {
      id: "M02-023",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A student solves ρ = nM/(N<sub>A</sub> a<sup>3</sup>) for lattice constant <em>a</em> in metres using SI density ρ in <strong>kg/m<sup>3</sup></strong>, but forgets to convert molar mass M from <strong>g/mol</strong> to <strong>kg/mol</strong>. By what factor will the computed value of <em>a</em> be wrong?",
      options: [
        "Too small by a factor of 10",
        "Too large by a factor of 1000",
        "Too large by a factor of 10",
        "Too small by a factor of 1000"
      ],
      ans: 2,
      exp: "Using M in g/mol instead of kg/mol makes the numerator M too large by a factor of <strong>10<sup>3</sup></strong>, which makes a<sup>3</sup> too large by 10<sup>3</sup>. Taking the cube root makes <em>a</em> too large by (10<sup>3</sup>)<sup>1/3</sup> = <strong>10</strong>."
    },
    {
      id: "M02-024",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "How is the <strong>Linear (Direction) Density (LD)</strong> along a crystallographic direction defined?",
      options: [
        "(Total atoms in the unit cell) / (Length of the cube edge a)",
        "(Cross-sectional area of atoms on the line) / (Length of the direction line)",
        "(Length of the direction line) / (Number of atoms centred on the direction line)",
        "(Number of atoms centred on the direction line) / (Length of the direction line)"
      ],
      ans: 3,
      exp: "By definition, <strong>Linear Density = (Number of atoms centred on the direction vector) / (Length of the direction vector)</strong>, with SI units of m<sup>−1</sup> (atoms/m or atoms/nm)."
    },
    {
      id: "M02-025",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "cubic_cells",
      q: "Using the FCC unit cell schematic, what is the exact <strong>linear density</strong> along the close-packed <strong>[110]</strong> face-diagonal direction in terms of lattice parameter <em>a</em> and atomic radius <em>r</em>?",
      options: [
        "2 / (a√2) = √2 / a = 1 / (2r)",
        "1 / (a√2) = 1 / (4r)",
        "3 / (a√2) = 3 / (4r)",
        "2 / a = 1 / (√2 r)"
      ],
      ans: 0,
      exp: "Along the [110] face diagonal of length a√2 in FCC, the line passes through 2 corner atoms (contributing 1/2 each) plus 1 full face-centred atom ⇒ <strong>2 atoms</strong>. Hence LD<sub>[110]</sub> = <strong>2/(a√2) = √2/a</strong>. Since a√2 = 4r, this simplifies to 2/(4r) = <strong>1/(2r)</strong>."
    },
    {
      id: "M02-026",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "What is the exact <strong>linear density</strong> along the <strong>[111]</strong> body-diagonal direction of a <strong>BCC</strong> crystal in terms of <em>a</em> and <em>r</em>?",
      options: [
        "1 / (a√3) = 1 / (4r)",
        "2 / (a√3) = 1 / (2r)",
        "3 / (a√3) = 3 / (4r)",
        "2 / (a√2) = 1 / (2r)"
      ],
      ans: 1,
      exp: "Along the BCC [111] body diagonal of length a√3, there are 2 corner atoms (1/2 each) + 1 interior body-centred atom = <strong>2 atoms</strong>. Therefore LD<sub>[111]</sub> = <strong>2/(a√3)</strong>. Substituting √3 a = 4r gives 2/(4r) = <strong>1/(2r)</strong>."
    },
    {
      id: "M02-027",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Along the cube-edge direction <strong>[100]</strong>, the linear density equals <strong>1/a</strong> for SC, BCC, and FCC alike. In which of these cubic structures does <strong>1/a</strong> equal <strong>1/(2r)</strong> (representing touching atoms)?",
      options: [
        "FCC only",
        "BCC only",
        "All three (SC, BCC, and FCC)",
        "SC only"
      ],
      ans: 3,
      exp: "Along [100] (length a), 2 corners contribute 2×(1/2) = 1 atom ⇒ LD = 1/a in all three cubic lattices. However, atoms touch along the cube edge (a = 2r) <strong>only in SC</strong>; in BCC (a = 4r/√3 > 2r) and FCC (a = 2√2 r > 2r), corner atoms do not touch along [100]."
    },
    {
      id: "M02-028",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Which statement correctly orders the three principal directions <strong>[100], [110], and [111]</strong> from highest to lowest linear density in <strong>FCC</strong> and <strong>BCC</strong> crystals?",
      options: [
        "FCC: [111] > [110] > [100]; BCC: [110] > [100] > [111]",
        "FCC: [100] > [110] > [111]; BCC: [111] > [110] > [100]",
        "FCC: [110] > [100] > [111]; BCC: [111] > [100] > [110]",
        "FCC: [110] > [111] > [100]; BCC: [100] > [111] > [110]"
      ],
      ans: 2,
      exp: "In <strong>FCC</strong>: LD<sub>[110]</sub> = 1.414/a > LD<sub>[100]</sub> = 1.000/a > LD<sub>[111]</sub> = 0.577/a. In <strong>BCC</strong>: LD<sub>[111]</sub> = 2/(√3 a) = 1.155/a > LD<sub>[100]</sub> = 1.000/a > LD<sub>[110]</sub> = 0.707/a."
    },
    {
      id: "M02-029",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Copper (FCC) has a lattice constant <strong>a = 3.615 Å (0.3615 nm)</strong>. Calculate the linear atomic density along the <strong>[110]</strong> direction in atoms/nm.",
      options: [
        "3.91 atoms/nm",
        "2.77 atoms/nm",
        "1.96 atoms/nm",
        "5.53 atoms/nm"
      ],
      ans: 0,
      exp: "For FCC along [110], LD = 2/(a√2) = √2/a = 1.4142 / 0.3615 nm = <strong>3.91 atoms/nm</strong> (or 3.91 × 10<sup>9</sup> atoms/m)."
    },
    {
      id: "M02-030",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Pure α-Iron (BCC) has a lattice parameter <strong>a = 2.866 Å (0.2866 nm)</strong>. What is the linear atomic density along its closest-packed <strong>[111]</strong> direction?",
      options: [
        "2.01 atoms/nm",
        "4.03 atoms/nm",
        "3.49 atoms/nm",
        "2.47 atoms/nm"
      ],
      ans: 1,
      exp: "For BCC along [111], LD = 2/(a√3) = 2 / (0.2866 nm × 1.7321) = 2 / 0.4964 nm = <strong>4.03 atoms/nm</strong>. (By comparison, [100] gives only 1/0.2866 = 3.49 atoms/nm.)"
    },
    {
      id: "M02-031",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "How is the <strong>Planar Density (PD)</strong> on a specific crystallographic plane defined?",
      options: [
        "(Number of atoms inside the unit cell) / (Total surface area of the unit cell)",
        "(Area occupied by atom cross-sections) / (Volume of the unit cell)",
        "(Number of atoms centred on the plane) / (Area of the plane)",
        "(Area of the plane) / (Number of atoms centred on the plane)"
      ],
      ans: 2,
      exp: "By definition, <strong>Planar Density = (Number of atoms whose centres lie on the plane) / (Area of the plane)</strong>, with SI units of m<sup>−2</sup> (atoms/m<sup>2</sup>)."
    },
    {
      id: "M02-032",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "What are the planar densities on the <strong>(100)</strong> plane of an <strong>FCC</strong> crystal and a <strong>BCC</strong> crystal respectively, in terms of lattice parameter <em>a</em>?",
      options: [
        "FCC (100): 1/a<sup>2</sup>; BCC (100): 2/a<sup>2</sup>",
        "FCC (100): 4/a<sup>2</sup>; BCC (100): 2/a<sup>2</sup>",
        "FCC (100): √2/a<sup>2</sup>; BCC (100): 1/a<sup>2</sup>",
        "FCC (100): 2/a<sup>2</sup>; BCC (100): 1/a<sup>2</sup>"
      ],
      ans: 3,
      exp: "The (100) cube face has area A = a<sup>2</sup>. In <strong>FCC</strong>, N = 4×(1/4) corners + 1 face centre = 2 ⇒ PD = <strong>2/a<sup>2</sup></strong>. In <strong>BCC</strong>, no atom lies on the face centre, so N = 4×(1/4) = 1 ⇒ PD = <strong>1/a<sup>2</sup></strong>."
    },
    {
      id: "M02-033",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Formula",
      diagram: null,
      q: "Compare the <strong>(110)</strong> plane in <strong>FCC</strong> and <strong>BCC</strong> crystals (rectangular area A = √2 a<sup>2</sup>). What is the planar density in terms of <em>a</em> for both, and how are the 2 effective atoms counted in each?",
      options: [
        "Both give 1/(√2 a<sup>2</sup>): 4 corners only in FCC and 1 body centre in BCC.",
        "Both give √2 / a<sup>2</sup>: FCC has 4×(1/4) + 2×(1/2) = 2 atoms, while BCC has 4×(1/4) + 1 = 2 atoms.",
        "FCC gives 2/(√2 a<sup>2</sup>) while BCC gives 1/(√2 a<sup>2</sup>).",
        "FCC gives 3/(√2 a<sup>2</sup>) while BCC gives √2 / a<sup>2</sup>."
      ],
      ans: 1,
      exp: "The (110) diagonal rectangle has edges <em>a</em> and <em>a√2</em>, so A = √2 a<sup>2</sup>. In <strong>FCC</strong>, N = 4×(1/4) corners + 2×(1/2) face centres on opposite edges = 2. In <strong>BCC</strong>, N = 4×(1/4) corners + 1 interior body centre = 2. Both yield PD = 2/(√2 a<sup>2</sup>) = <strong>√2 / a<sup>2</sup></strong> (which is the densest plane in BCC)."
    },
    {
      id: "M02-034",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Formula",
      diagram: null,
      q: "For the close-packed <strong>(111)</strong> equilateral-triangle plane in an <strong>FCC</strong> crystal, what are the effective atom count N, plane area A, and planar density PD?",
      options: [
        "N = 2; A = (√3/2)a<sup>2</sup>; PD = 4 / (√3 a<sup>2</sup>)",
        "N = 3; A = (√3/2)a<sup>2</sup>; PD = 6 / (√3 a<sup>2</sup>)",
        "N = 2; A = (√3/4)a<sup>2</sup>; PD = 8 / (√3 a<sup>2</sup>)",
        "N = 1/2; A = (√3/2)a<sup>2</sup>; PD = 1 / (√3 a<sup>2</sup>)"
      ],
      ans: 0,
      exp: "The FCC (111) plane is an equilateral triangle of side a√2 containing 3 corner vertices (each 60°/360° = 1/6 share) and 3 face-centred midpoints (1/2 share each): N = 3×(1/6) + 3×(1/2) = <strong>2 atoms</strong>. Area A = (√3/4)(a√2)<sup>2</sup> = <strong>(√3/2)a<sup>2</sup></strong>. Thus PD = 2 / [(√3/2)a<sup>2</sup>] = <strong>4 / (√3 a<sup>2</sup>)</strong> = 1 / (2√3 r<sup>2</sup>)."
    },
    {
      id: "M02-035",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Nickel (FCC) has an atomic radius <strong>r = 1.245 Å</strong>. Calculate its planar atomic density on the <strong>(100)</strong> plane.",
      options: [
        "8.06 × 10<sup>18</sup> atoms/m<sup>2</sup>",
        "1.14 × 10<sup>19</sup> atoms/m<sup>2</sup>",
        "3.23 × 10<sup>19</sup> atoms/m<sup>2</sup>",
        "1.613 × 10<sup>19</sup> atoms/m<sup>2</sup>"
      ],
      ans: 3,
      exp: "For FCC, a = 2√2 r = 2√2 × 1.245 × 10<sup>−10</sup> m = <strong>3.5214 × 10<sup>−10</sup> m</strong>. Area of (100) plane: A = a<sup>2</sup> = <strong>1.2400 × 10<sup>−19</sup> m<sup>2</sup></strong>. With N<sub>(100)</sub> = 2 atoms, PD = 2 / (1.2400 × 10<sup>−19</sup> m<sup>2</sup>) = <strong>1.613 × 10<sup>19</sup> atoms/m<sup>2</sup></strong>."
    },
    {
      id: "M02-036",
      chapter: "Ch 3 & 5: APF, CN & Density",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Pure Aluminium (FCC) has a lattice parameter <strong>a = 4.05 Å</strong>. Calculate the planar atomic density on its closest-packed <strong>(111)</strong> plane.",
      options: [
        "1.22 × 10<sup>19</sup> atoms/m<sup>2</sup>",
        "8.62 × 10<sup>18</sup> atoms/m<sup>2</sup>",
        "1.41 × 10<sup>19</sup> atoms/m<sup>2</sup>",
        "2.44 × 10<sup>19</sup> atoms/m<sup>2</sup>"
      ],
      ans: 2,
      exp: "For FCC (111), PD = 4 / (√3 a<sup>2</sup>). Converting a = 4.05 × 10<sup>−10</sup> m gives a<sup>2</sup> = 1.64025 × 10<sup>−19</sup> m<sup>2</sup>. Thus PD = 4 / (1.7321 × 1.64025 × 10<sup>−19</sup>) = <strong>1.408 × 10<sup>19</sup> ≈ 1.41 × 10<sup>19</sup> atoms/m<sup>2</sup></strong> (or 14.1 atoms/nm<sup>2</sup>)."
    }
  ]
});
