window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod01",
  questions: [
    {
      id: "M01-001",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which statement accurately distinguishes a <strong>crystal</strong> from a <strong>space lattice</strong>?",
      options: [
        "A crystal is a purely mathematical array of points, whereas a lattice possesses physical mass and density.",
        "A crystal is a physical 3D periodic arrangement of atoms with measurable properties, whereas a lattice is a purely geometrical 3D periodic array of points.",
        "A lattice exists only in metals at room temperature, whereas a crystal exists in both amorphous and periodic solids.",
        "A crystal requires zero periodicity over long distances, whereas a lattice exhibits periodicity only along one axis."
      ],
      ans: 1,
      exp: "A <strong>crystal</strong> is a real 3D periodic arrangement of atoms in space and therefore has physical quantities such as mass, weight, density, and electrical conductivity. A <strong>lattice</strong> is strictly a geometrical/mathematical 3D periodic arrangement of points in space."
    },
    {
      id: "M01-002",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "What is the fundamental crystallographic equation that defines how a crystal structure is constructed?",
      options: [
        "Crystal = Unit Cell + Interaxial Angles",
        "Crystal = Bravais Lattice + Coordination Number",
        "Crystal = Lattice + Motif (Basis)",
        "Crystal = Primitive Cell + Translation Vector"
      ],
      ans: 2,
      exp: "The fundamental relation of crystallography is <strong>Crystal = Lattice + Motif (Basis)</strong>. Combining the mathematical point array (lattice) with the physical atomic group (motif/basis) produces the actual crystal."
    },
    {
      id: "M01-003",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In the relation <em>Crystal = Lattice + Motif</em>, what are the distinct roles of the <strong>lattice</strong> and the <strong>motif (basis)</strong>?",
      options: [
        "The lattice specifies how points are arranged periodically in space, while the motif specifies what atom or group of atoms is placed at each lattice point.",
        "The lattice determines the atomic weight of each element, while the motif determines the external cleavage shape of the crystal.",
        "The lattice specifies which chemical elements are present, while the motif specifies the symmetry of the macroscopic specimen.",
        "The lattice defines the interatomic bond energy, while the motif defines the translation distances a, b, and c."
      ],
      ans: 0,
      exp: "Conceptually, the <strong>lattice</strong> tells you <em>how to arrange points in space</em> (pure geometry), whereas the <strong>motif (basis)</strong> tells you <em>what to place at each lattice point</em> (an atom or group of atoms)."
    },
    {
      id: "M01-004",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which statement about the <strong>motif (basis)</strong> of a crystal structure is always true?",
      options: [
        "A motif can contain only a single atom of a pure element.",
        "Different lattice points within the same crystal may carry chemically different motifs.",
        "A motif must sit exclusively at the body centre of a cubic unit cell.",
        "Every lattice point in the crystal is associated with an identical atom or identical group of atoms in the same orientation."
      ],
      ans: 3,
      exp: "A motif (basis) may consist of either a single atom (as in pure metals like Cu or Fe) or a group of atoms/ions (as in compounds like NaCl or Si), but the exact same motif in the same orientation must be attached to <strong>every</strong> lattice point to preserve translational periodicity."
    },
    {
      id: "M01-005",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "At room temperature, what are the crystal structures and atomic packing factors (APFs) of pure iron (Fe) and pure aluminium (Al)?",
      options: [
        "Fe is FCC (APF = 74%) and Al is BCC (APF = 68%).",
        "Both Fe and Al are BCC with APF = 68%.",
        "Fe is BCC (APF = 68%) and Al is FCC (APF = 74%).",
        "Fe is SC (APF = 52%) and Al is FCC (APF = 74%)."
      ],
      ans: 2,
      exp: "At room temperature, pure iron exists as α-Fe with a <strong>BCC</strong> structure (APF = 68%), whereas pure aluminium has an <strong>FCC</strong> structure (APF = 74%)."
    },
    {
      id: "M01-006",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Pure iron (APF = 68%) is noticeably harder than pure aluminium (APF = 74%) at room temperature despite having a <em>lower</em> atomic packing factor. What is the correct crystallographic explanation?",
      options: [
        "Higher atomic packing factor always reduces bond strength and lowers metal hardness.",
        "BCC iron lacks truly close-packed planes, so it requires a higher shear stress for dislocation glide than FCC aluminium.",
        "FCC aluminium has zero slip systems at room temperature, preventing strain hardening.",
        "BCC iron contains more atoms per unit cell than FCC aluminium, obstructing plastic flow."
      ],
      ans: 1,
      exp: "Although BCC iron has a lower APF (68%) than FCC aluminium (74%), the BCC lattice has <strong>no truly close-packed planes</strong>. Consequently, a higher shear stress is required to initiate dislocation glide (lower probability of plastic deformation), making pure Fe harder than pure Al."
    },
    {
      id: "M01-007",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "When pure iron is heated slowly from room temperature up to its melting point, what exact sequence of solid allotropic crystal structures does it exhibit?",
      options: [
        "BCC (α) → FCC (γ) → BCC (δ) → Liquid",
        "FCC (α) → BCC (γ) → FCC (δ) → Liquid",
        "BCC (α) → HCP (γ) → FCC (δ) → Liquid",
        "SC (α) → BCC (γ) → FCC (δ) → Liquid"
      ],
      ans: 0,
      exp: "Pure iron undergoes two solid-state allotropic transformations on heating: <strong>BCC (α-Fe)</strong> up to 910°C → <strong>FCC (γ-Fe)</strong> from 910°C to 1394°C → <strong>BCC (δ-Fe)</strong> from 1394°C to 1539°C, where it melts."
    },
    {
      id: "M01-008",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which set of temperatures correctly defines the allotropic phase transitions and melting point of pure iron?",
      options: [
        "α → γ at 727°C, γ → δ at 1147°C, melting at 1495°C",
        "α → γ at 850°C, γ → δ at 1300°C, melting at 1600°C",
        "α → γ at 910°C, γ → δ at 1495°C, melting at 1895°C",
        "α → γ at 910°C, γ → δ at 1394°C, melting at 1539°C"
      ],
      ans: 3,
      exp: "For pure iron: α-Fe (BCC) is stable up to <strong>910°C</strong>, γ-Fe (FCC) is stable from <strong>910°C to 1394°C</strong>, and δ-Fe (BCC) is stable from <strong>1394°C to 1539°C</strong> (melting point = 1539°C)."
    },
    {
      id: "M01-009",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A student claims that pure δ-iron (BCC) remains stable as a solid at temperatures above 1895°C. Why is this statement incorrect?",
      options: [
        "Above 1394°C, iron transforms into an HCP phase rather than BCC δ-iron.",
        "Pure iron sublimes directly from FCC γ-iron at 1394°C without forming δ-iron.",
        "δ-iron exists only between 1394°C and 1539°C; pure iron melts into a liquid at 1539°C.",
        "δ-iron is stable only up to 910°C, above which it becomes α-iron."
      ],
      ans: 2,
      exp: "Classic exam trap: δ-Fe (BCC) is stable strictly from <strong>1394°C to 1539°C</strong>, because pure iron <strong>melts at 1539°C</strong>. It is already completely liquid well below 1895°C."
    },
    {
      id: "M01-010",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "What are the exact temperature spans (widths) over which the FCC γ-Fe and high-temperature BCC δ-Fe allotropes of pure iron exist?",
      options: [
        "γ-Fe: 400°C; δ-Fe: 195°C",
        "γ-Fe: 484°C; δ-Fe: 145°C",
        "γ-Fe: 629°C; δ-Fe: 356°C",
        "γ-Fe: 484°C; δ-Fe: 501°C"
      ],
      ans: 1,
      exp: "γ-Fe (FCC) exists from 910°C to 1394°C, giving a span of 1394 − 910 = <strong>484°C</strong>. δ-Fe (BCC) exists from 1394°C to 1539°C, giving a span of 1539 − 1394 = <strong>145°C</strong>."
    },
    {
      id: "M01-011",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "If a pure iron bar is held at equilibrium at 1150°C and a second bar is held at 1450°C, what crystal structures do they possess respectively?",
      options: [
        "FCC (γ-Fe) at 1150°C and BCC (δ-Fe) at 1450°C",
        "BCC (α-Fe) at 1150°C and FCC (γ-Fe) at 1450°C",
        "FCC (γ-Fe) at both 1150°C and 1450°C",
        "BCC (δ-Fe) at 1150°C and Liquid at 1450°C"
      ],
      ans: 0,
      exp: "Since 1150°C lies within 910°C–1394°C, pure iron is <strong>FCC (γ-Fe)</strong>. Since 1450°C lies within 1394°C–1539°C, pure iron is <strong>BCC (δ-Fe)</strong>."
    },
    {
      id: "M01-012",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In a 3D space lattice, what do the fundamental translation (basis) vectors <strong>a⃗</strong>, <strong>b⃗</strong>, and <strong>c⃗</strong> represent?",
      options: [
        "The unit normals perpendicular to the three closest-packed atomic planes.",
        "The vectors linking the nucleus of an atom to its outermost valence electrons.",
        "The directions along which plastic slip always occurs in all crystal systems.",
        "Vectors connecting one lattice point to an equivalent neighbouring lattice point, whose magnitudes along the cell edges are the lattice parameters a, b, and c."
      ],
      ans: 3,
      exp: "Translation (basis) vectors <strong>a⃗, b⃗, c⃗</strong> connect a lattice point to equivalent neighbouring lattice points along the three crystallographic axes; their magnitudes along the unit cell edges are the lattice parameters <em>a, b, c</em>."
    },
    {
      id: "M01-013",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How is a <strong>primitive unit cell</strong> rigorously defined?",
      options: [
        "Any cubic unit cell with a = b = c and α = β = γ = 90°.",
        "A unit cell that contains lattice points at its corners only, yielding effectively 1 lattice point per cell.",
        "A unit cell that contains at least one interior body-centred lattice point in addition to corners.",
        "A unit cell whose volume equals exactly 4 atomic volumes."
      ],
      ans: 1,
      exp: "A <strong>primitive unit cell</strong> has lattice points at its corners <em>only</em>. Because each of the 8 corners is shared among 8 adjacent cells, it contains effectively 8 × (1/8) = <strong>1 lattice point per cell</strong>."
    },
    {
      id: "M01-014",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which group lists ONLY <strong>non-primitive</strong> conventional Bravais unit cells?",
      options: [
        "Simple Cubic (SC), BCC, and FCC",
        "Simple Tetragonal, Simple Hexagonal, and Simple Triclinic",
        "Body-Centred (BCC), Face-Centred (FCC), and End-Centred (Base-Centred)",
        "Simple Cubic (SC), End-Centred, and Simple Rhombohedral"
      ],
      ans: 2,
      exp: "A non-primitive unit cell contains additional lattice points at interior or face positions besides its corners, giving >1 lattice point per cell. Thus <strong>BCC (2), FCC (4), and End-centred (2)</strong> are all non-primitive, whereas Simple (SC/primitive) cells contain only 1 lattice point."
    },
    {
      id: "M01-015",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "An <strong>end-centred (base-centred)</strong> unit cell has lattice points at all 8 corners and at the centres of 2 opposite faces. How many effective lattice points does it contain, and how is it classified?",
      options: [
        "2 effective lattice points; non-primitive",
        "1 effective lattice point; primitive",
        "3 effective lattice points; non-primitive",
        "4 effective lattice points; non-primitive"
      ],
      ans: 0,
      exp: "Each corner contributes 1/8 and each face centre contributes 1/2: <em>n</em> = 8 × (1/8) + 2 × (1/2) = 1 + 1 = <strong>2 effective lattice points</strong>. Because <em>n</em> > 1, an end-centred cell is <strong>non-primitive</strong>."
    },
    {
      id: "M01-016",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "crystal_systems",
      q: "Referring to the standard crystallographic coordinate system shown in the diagram, which pairing of interaxial angles (α, β, γ) with coordinate axes (x, y, z) is correct?",
      options: [
        "α = ∠(x, y), β = ∠(y, z), γ = ∠(x, z)",
        "α = ∠(x, z), β = ∠(x, y), γ = ∠(y, z)",
        "α = ∠(x, y), β = ∠(x, z), γ = ∠(y, z)",
        "α = ∠(y, z), β = ∠(x, z), γ = ∠(x, y)"
      ],
      ans: 3,
      exp: "By standard crystallographic convention, each interaxial angle sits <em>opposite</em> its corresponding axis (a along x, b along y, c along z): <strong>α = ∠(y, z)</strong>, <strong>β = ∠(x, z)</strong>, and <strong>γ = ∠(x, y)</strong>."
    },
    {
      id: "M01-017",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Trap",
      diagram: "crystal_systems",
      q: "In the monoclinic crystal cell schematic, one interaxial angle deviates from 90° while the other two remain 90°. Between which pair of crystallographic axes does this non-90° angle (<strong>β</strong>) lie?",
      options: [
        "Between the x-axis (a) and the z-axis (c)",
        "Between the x-axis (a) and the y-axis (b)",
        "Between the y-axis (b) and the z-axis (c)",
        "Equally between all three axes x, y, and z"
      ],
      ans: 0,
      exp: "In the monoclinic system, α = γ = 90° ≠ β. Because <strong>β = ∠(x, z)</strong> (the angle between edge <em>a</em> and edge <em>c</em>), it is the angle between the <strong>x-axis and z-axis</strong> that differs from 90°."
    },
    {
      id: "M01-018",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How many distinct <strong>crystal systems</strong> and total <strong>Bravais lattices</strong> exist in three-dimensional space?",
      options: [
        "6 crystal systems and 12 Bravais lattices",
        "7 crystal systems and 12 Bravais lattices",
        "7 crystal systems and 14 Bravais lattices",
        "14 crystal systems and 7 Bravais lattices"
      ],
      ans: 2,
      exp: "All 3D periodic point arrays fall into exactly <strong>7 crystal systems</strong>, which expand into a total of <strong>14 Bravais lattices</strong> (3 + 2 + 4 + 1 + 1 + 2 + 1 = 14)."
    },
    {
      id: "M01-019",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "crystal_systems",
      q: "Referring to the crystal systems chart, which unit cell constraints and Bravais lattice types belong to the <strong>Cubic</strong> crystal system?",
      options: [
        "a = b ≠ c; α = β = γ = 90°; SC and BCC (2 lattices)",
        "a = b = c; α = β = γ = 90°; SC, BCC, and FCC (3 lattices)",
        "a = b = c; α = β = γ = 90°; SC, BCC, FCC, and End-centred (4 lattices)",
        "a = b = c; α = β = γ ≠ 90°; SC, BCC, and FCC (3 lattices)"
      ],
      ans: 1,
      exp: "The <strong>Cubic</strong> system has all edges equal (a = b = c) and all interaxial angles equal to 90° (α = β = γ = 90°), with <strong>3 Bravais lattices: SC, BCC, and FCC</strong>."
    },
    {
      id: "M01-020",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which crystal system is characterised by axial lengths <strong>a = b ≠ c</strong>, interaxial angles <strong>α = β = γ = 90°</strong>, and exactly <strong>2 Bravais lattices (SC and BCC)</strong>?",
      options: [
        "Hexagonal",
        "Orthorhombic",
        "Monoclinic",
        "Tetragonal"
      ],
      ans: 3,
      exp: "The <strong>Tetragonal</strong> crystal system has a square base (a = b ≠ c) with all right angles (α = β = γ = 90°), and admits exactly <strong>2 Bravais lattices: Simple (SC) and Body-Centred (BCC)</strong>."
    },
    {
      id: "M01-021",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Why are End-centred (base-centred) and Face-centred lattices NOT counted as separate Bravais lattices in the <strong>Tetragonal</strong> system?",
      options: [
        "A base-centred tetragonal cell can be re-indexed as a smaller Simple tetragonal cell, and a face-centred tetragonal cell reduces to a smaller Body-centred tetragonal cell.",
        "The condition a = b ≠ c geometrically forbids placing any lattice point on a rectangular face.",
        "Adding face-centred points changes α and β away from 90°, turning the cell into Monoclinic.",
        "Tetragonal cells can only ever be primitive because c ≠ a."
      ],
      ans: 0,
      exp: "Rotating the basal axes by 45° inside the square base (a = b) transforms a base-centred tetragonal lattice into a smaller primitive (Simple) tetragonal lattice (with edge a/√2), and transforms a face-centred tetragonal lattice into a smaller Body-centred tetragonal lattice. Hence only <strong>2</strong> unique tetragonal Bravais lattices (SC and BCC) exist."
    },
    {
      id: "M01-022",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which is the <strong>ONLY</strong> crystal system that possesses all four Bravais lattice types (SC, BCC, FCC, and End-centred)?",
      options: [
        "Cubic",
        "Orthorhombic",
        "Tetragonal",
        "Monoclinic"
      ],
      ans: 1,
      exp: "The <strong>Orthorhombic</strong> crystal system (a ≠ b ≠ c; α = β = γ = 90°) is the only system containing all <strong>4 Bravais lattices</strong>: Simple (SC), Body-centred (BCC), Face-centred (FCC), and End-centred (Base-centred)."
    },
    {
      id: "M01-023",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "crystal_systems",
      q: "In the crystal systems diagram, a rectangular prism unit cell has three unequal mutually perpendicular edges. What are its exact parameter conditions?",
      options: [
        "a = b ≠ c and α = β = γ = 90°",
        "a ≠ b ≠ c and α = γ = 90° ≠ β",
        "a ≠ b ≠ c and α = β = γ = 90°",
        "a ≠ b ≠ c and α ≠ β ≠ γ ≠ 90°"
      ],
      ans: 2,
      exp: "A rectangular prism with three unequal mutually perpendicular edges is the <strong>Orthorhombic</strong> unit cell, defined by <strong>a ≠ b ≠ c</strong> and <strong>α = β = γ = 90°</strong>."
    },
    {
      id: "M01-024",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which axial and angular constraints define the <strong>Rhombohedral (Trigonal)</strong> crystal system?",
      options: [
        "a = b ≠ c; α = β = 90°, γ = 120°; 1 Bravais lattice (Simple)",
        "a ≠ b ≠ c; α = β = γ ≠ 90°; 2 Bravais lattices (Simple, BCC)",
        "a = b = c; α = β = 90° ≠ γ; 1 Bravais lattice (Simple)",
        "a = b = c; α = β = γ ≠ 90°; 1 Bravais lattice (Simple)"
      ],
      ans: 3,
      exp: "The <strong>Rhombohedral (Trigonal)</strong> system can be visualised as a cube uniformly sheared along a body diagonal: all edges remain equal (<strong>a = b = c</strong>) and all angles remain equal but not 90° (<strong>α = β = γ ≠ 90°</strong>), with <strong>1 Simple Bravais lattice</strong>."
    },
    {
      id: "M01-025",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Which pair of crystal systems shares BOTH the axial condition <strong>a = b = c</strong> and the equality of all three interaxial angles (<strong>α = β = γ</strong>)?",
      options: [
        "Cubic and Tetragonal",
        "Cubic and Rhombohedral (Trigonal)",
        "Tetragonal and Hexagonal",
        "Rhombohedral (Trigonal) and Triclinic"
      ],
      ans: 1,
      exp: "Both <strong>Cubic</strong> (a = b = c; α = β = γ = 90°) and <strong>Rhombohedral/Trigonal</strong> (a = b = c; α = β = γ ≠ 90°) have all three edge lengths equal and all three interaxial angles equal to one another, differing solely in whether those angles equal 90°."
    },
    {
      id: "M01-026",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "crystal_systems",
      q: "Referring to the crystal systems diagram, which set of parameters uniquely specifies the <strong>Hexagonal</strong> crystal system?",
      options: [
        "a = b ≠ c; α = β = 90°, γ = 120°; 1 Bravais lattice (Simple)",
        "a = b = c; α = β = 90°, γ = 120°; 2 Bravais lattices (Simple, End-centred)",
        "a = b ≠ c; α = γ = 90°, β = 120°; 1 Bravais lattice (Simple)",
        "a ≠ b ≠ c; α = β = 90°, γ = 120°; 1 Bravais lattice (Simple)"
      ],
      ans: 0,
      exp: "The <strong>Hexagonal</strong> system has two equal basal edges separated by 120° and a perpendicular c-axis of different length: <strong>a = b ≠ c; α = β = 90°, γ = 120°</strong>, with <strong>1 Simple Bravais lattice</strong>."
    },
    {
      id: "M01-027",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which axial and interaxial angle conditions correspond to the <strong>Monoclinic</strong> crystal system?",
      options: [
        "a = b ≠ c; α = γ = 90° ≠ β",
        "a ≠ b ≠ c; α = β = γ ≠ 90°",
        "a ≠ b ≠ c; α = γ = 90° ≠ β",
        "a ≠ b ≠ c; α = β = 90°, γ = 120°"
      ],
      ans: 2,
      exp: "The <strong>Monoclinic</strong> crystal system has three unequal edges (<strong>a ≠ b ≠ c</strong>), two right interaxial angles, and one oblique angle (<strong>α = γ = 90° ≠ β</strong>)."
    },
    {
      id: "M01-028",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Which exact set of Bravais lattices belongs to the <strong>Monoclinic</strong> crystal system?",
      options: [
        "Simple and Body-Centred (BCC)",
        "Simple and Face-Centred (FCC)",
        "Simple, Body-Centred, and End-Centred",
        "Simple and End-Centred (Base-Centred)"
      ],
      ans: 3,
      exp: "High-yield exam trap: the Monoclinic system has 2 Bravais lattices — <strong>Simple</strong> and <strong>End-Centred (Base-Centred)</strong>. It does <em>NOT</em> have a Body-Centred Bravais lattice (which can be converted into a base-centred monoclinic cell by choosing an alternative edge vector)."
    },
    {
      id: "M01-029",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which crystal system possesses the <strong>lowest symmetry</strong>, with parameters <strong>a ≠ b ≠ c</strong> and <strong>α ≠ β ≠ γ ≠ 90°</strong>?",
      options: [
        "Triclinic (1 Simple Bravais lattice)",
        "Monoclinic (2 Bravais lattices)",
        "Rhombohedral (1 Simple Bravais lattice)",
        "Orthorhombic (4 Bravais lattices)"
      ],
      ans: 0,
      exp: "The <strong>Triclinic</strong> system has no equal edge constraints (a ≠ b ≠ c) and no right-angle or equal-angle constraints (α ≠ β ≠ γ ≠ 90°), making it the least symmetric crystal system with only <strong>1 Simple Bravais lattice</strong>."
    },
    {
      id: "M01-030",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Across all 7 crystal systems and 14 Bravais lattices, how many crystal systems possess a <strong>Face-Centred (FCC)</strong> Bravais lattice?",
      options: [
        "1 (Cubic only)",
        "2 (Cubic and Orthorhombic)",
        "3 (Cubic, Tetragonal, and Orthorhombic)",
        "4 (Cubic, Tetragonal, Orthorhombic, and Monoclinic)"
      ],
      ans: 1,
      exp: "Only <strong>2</strong> crystal systems include a Face-Centred Bravais lattice: <strong>Cubic</strong> (SC, BCC, FCC) and <strong>Orthorhombic</strong> (SC, BCC, FCC, End-centred)."
    },
    {
      id: "M01-031",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Which exact pair of crystal systems includes an <strong>End-Centred (Base-Centred)</strong> Bravais lattice?",
      options: [
        "Tetragonal and Orthorhombic",
        "Hexagonal and Monoclinic",
        "Orthorhombic and Monoclinic",
        "Cubic and Orthorhombic"
      ],
      ans: 2,
      exp: "Out of all 7 crystal systems, an End-Centred (Base-Centred) Bravais lattice occurs strictly in <strong>Orthorhombic</strong> (4 lattices) and <strong>Monoclinic</strong> (2 lattices: Simple and End-centred)."
    },
    {
      id: "M01-032",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "How many of the 7 crystal systems contain a <strong>Body-Centred (BCC)</strong> Bravais lattice?",
      options: [
        "1 (Cubic only)",
        "2 (Cubic and Tetragonal)",
        "4 (Cubic, Tetragonal, Orthorhombic, and Monoclinic)",
        "3 (Cubic, Tetragonal, and Orthorhombic)"
      ],
      ans: 3,
      exp: "A Body-Centred Bravais lattice appears in exactly <strong>3</strong> crystal systems: <strong>Cubic</strong>, <strong>Tetragonal</strong>, and <strong>Orthorhombic</strong>. (Monoclinic has Simple and End-centred, not Body-centred.)"
    },
    {
      id: "M01-033",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which three crystal systems each possess <strong>only one</strong> (Simple/Primitive) Bravais lattice?",
      options: [
        "Tetragonal, Hexagonal, and Triclinic",
        "Rhombohedral (Trigonal), Hexagonal, and Triclinic",
        "Rhombohedral (Trigonal), Monoclinic, and Triclinic",
        "Hexagonal, Monoclinic, and Orthorhombic"
      ],
      ans: 1,
      exp: "The counts of Bravais lattices per system are: Cubic (3), Tetragonal (2), Orthorhombic (4), Monoclinic (2), and <strong>1 each for Rhombohedral (Trigonal), Hexagonal, and Triclinic</strong>."
    },
    {
      id: "M01-034",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "X-ray analysis of a newly synthesised mineral gives unit cell dimensions <strong>a = 4.62 Å, b = 5.41 Å, c = 6.95 Å</strong> and angles <strong>α = 90°, β = 106.5°, γ = 90°</strong>. To which crystal system does it belong, and what Bravais lattices are permitted?",
      options: [
        "Monoclinic; Simple and End-centred",
        "Monoclinic; Simple and Body-centred",
        "Triclinic; Simple only",
        "Orthorhombic; Simple, BCC, FCC, and End-centred"
      ],
      ans: 0,
      exp: "Here a ≠ b ≠ c and α = γ = 90° ≠ β (106.5°), which matches the <strong>Monoclinic</strong> crystal system. Monoclinic admits exactly two Bravais lattices: <strong>Simple and End-centred (Base-centred)</strong>."
    },
    {
      id: "M01-035",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A metal crystal has measured lattice parameters <strong>a = 3.21 Å, b = 3.21 Å, c = 5.21 Å</strong> and interaxial angles <strong>α = 90°, β = 90°, γ = 120°</strong>. Identify its crystal system and number of Bravais lattices.",
      options: [
        "Tetragonal; 2 Bravais lattices",
        "Rhombohedral; 1 Bravais lattice",
        "Hexagonal; 1 Bravais lattice",
        "Orthorhombic; 4 Bravais lattices"
      ],
      ans: 2,
      exp: "Because a = b = 3.21 Å ≠ c (5.21 Å) and α = β = 90° while γ = 120°, the unit cell belongs to the <strong>Hexagonal</strong> crystal system, which has exactly <strong>1 Simple Bravais lattice</strong>."
    },
    {
      id: "M01-036",
      chapter: "Ch 1–2: Crystals & Bravais Lattices",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A crystalline compound adopts a <strong>BCC Bravais lattice</strong> with a <strong>2-atom motif</strong> associated with every lattice point. How many atoms are contained within one conventional unit cell?",
      options: [
        "1 atom",
        "2 atoms",
        "3 atoms",
        "4 atoms"
      ],
      ans: 3,
      exp: "Using <em>Crystal = Lattice + Motif</em>: a conventional BCC unit cell contains 8 × (1/8) + 1 = <strong>2 lattice points</strong>. Placing an identical 2-atom motif at each lattice point yields 2 × 2 = <strong>4 atoms per conventional unit cell</strong>."
    }
  ]
});
