window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod04",
  questions: [
    {
      id: "M04-001",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In materials science, what does an equilibrium phase diagram graphically map?",
      options: [
        "Atomic packing factor and lattice parameter variations across the seven crystal systems",
        "Non-equilibrium cooling transformation kinetics as a function of logarithmic time and temperature",
        "Stable equilibrium phases as a function of thermodynamic variables such as temperature, pressure, and composition",
        "Dislocation density and grain boundary area as a function of applied tensile stress"
      ],
      ans: 2,
      exp: "A phase diagram is a graphical map in thermodynamic variable space (temperature T, pressure P, and chemical composition) showing which phases exist in thermodynamic equilibrium under given conditions."
    },
    {
      id: "M04-002",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How are phase diagrams classified according to the number of independent chemical components present in the system?",
      options: [
        "Primary (1 component), Secondary (2 components), and Eutectoid (3 components)",
        "Isomorphous (1), Eutectic (2), and Peritectic (3)",
        "Monolithic (1 component), Dual-phase (2 components), and Composite (3 components)",
        "Unary (1 component), Binary (2 components), and Ternary (3 components)"
      ],
      ans: 3,
      exp: "Phase diagrams are classified by the number of components C: Unary (1 component, e.g., pure H<sub>2</sub>O), Binary (2 components, e.g., Cu–Ni or Pb–Sn), and Ternary (3 components)."
    },
    {
      id: "M04-003",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which statement best defines a <em>phase</em> in a material system?",
      options: [
        "A chemically homogeneous, physically distinct, and mechanically separable region of a system",
        "Any pure element listed on the periodic table that enters an alloy",
        "A mixture of two distinct crystal structures arranged in alternating lamellae",
        "The external geometric shape of a cast ingot after solidification"
      ],
      ans: 0,
      exp: "A phase is a region of matter that is chemically homogeneous, physically distinct (uniform structure and properties), and mechanically separable from other regions—for example, liquid water, solid ice, or α-ferrite."
    },
    {
      id: "M04-004",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Consider an unsaturated aqueous brine solution (NaCl completely dissolved in H<sub>2</sub>O) at room temperature. How many components (C) and phases (P) are present?",
      options: [
        "C = 2, P = 2",
        "C = 1, P = 1",
        "C = 1, P = 2",
        "C = 2, P = 1"
      ],
      ans: 3,
      exp: "Brine requires two independent chemical species (NaCl and H<sub>2</sub>O) to specify its composition, so C = 2. Because the salt is completely dissolved into a single uniform liquid solution, there is only one phase (P = 1). A classic exam trap is confusing 2 components with 2 phases."
    },
    {
      id: "M04-005",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which pair correctly identifies the number of components (C) and equilibrium phases (P) for a mixture of liquid water + solid ice, and for plain carbon steel at room temperature?",
      options: [
        "Water + ice: C = 2, P = 2 (L + S); Steel: C = 2, P = 1 (α only)",
        "Water + ice: C = 1, P = 2 (L + S); Steel: C = 2, P = 2 (α + Fe<sub>3</sub>C)",
        "Water + ice: C = 1, P = 1 (L only); Steel: C = 3, P = 2 (α + Fe<sub>3</sub>C)",
        "Water + ice: C = 2, P = 1 (L + S); Steel: C = 1, P = 2 (α + Fe<sub>3</sub>C)"
      ],
      ans: 1,
      exp: "Water + ice contains a single chemical component H<sub>2</sub>O (C = 1) coexisting as two distinct phases—liquid and solid (P = 2). Equilibrium steel has two components (Fe and C, C = 2) and two phases at room temperature (α-ferrite and Fe<sub>3</sub>C cementite, P = 2)."
    },
    {
      id: "M04-006",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "What are the general and condensed (constant atmospheric pressure, P = 1 atm) forms of the Gibbs Phase Rule, where F is degrees of freedom, C is components, and P is phases?",
      options: [
        "General: F = P − C + 2; Condensed: F = P − C + 1",
        "General: F = C − P + 2; Condensed: F = C − P + 1",
        "General: F = C − P + 1; Condensed: F = C − P",
        "General: F = C + P − 2; Condensed: F = C + P − 1"
      ],
      ans: 1,
      exp: "The general Gibbs Phase Rule (both T and P variable) is F = C − P + 2. For condensed alloy systems examined at fixed atmospheric pressure (P = 1 atm), one degree of freedom is consumed, yielding F = C − P + 1."
    },
    {
      id: "M04-007",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a condensed binary alloy system (fixed P = 1 atm), how many degrees of freedom F exist inside a two-phase (L + α) region, and what does this imply physically?",
      options: [
        "F = 0; neither temperature nor phase compositions can be varied",
        "F = 2; both temperature and the composition of liquid L can be chosen independently",
        "F = 1; choosing the temperature uniquely fixes the equilibrium compositions of both L and α",
        "F = 3; temperature, pressure, and overall alloy composition can all vary independently"
      ],
      ans: 2,
      exp: "Using the condensed Gibbs Phase Rule F = C − P + 1 with C = 2 and P = 2 gives F = 2 − 2 + 1 = 1. Thus, specifying one intensive variable (such as temperature T) immediately fixes the equilibrium compositions of both coexisting phases along the tie-line."
    },
    {
      id: "M04-008",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "At a binary eutectic point (fixed P = 1 atm), three phases (L, α, and β) coexist in equilibrium. What is the number of degrees of freedom F?",
      options: [
        "F = 2",
        "F = 0",
        "F = 1",
        "F = 3"
      ],
      ans: 1,
      exp: "For a condensed binary system at a three-phase invariant point (C = 2, P = 3): F = C − P + 1 = 2 − 3 + 1 = 0. Because F = 0, the reaction is invariant—neither temperature nor the compositions of L, α, and β can vary while all three phases coexist."
    },
    {
      id: "M04-009",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a condensed binary phase diagram (P = 1 atm), what is the maximum number of phases P that can coexist in equilibrium, and what is F inside a single-phase liquid region?",
      options: [
        "Maximum P = 3 (at F = 1); inside single-phase liquid, F = 3",
        "Maximum P = 4 (at F = 0); inside single-phase liquid, F = 1",
        "Maximum P = 2 (at F = 0); inside single-phase liquid, F = 2",
        "Maximum P = 3 (at F = 0); inside single-phase liquid, F = 2"
      ],
      ans: 3,
      exp: "Setting F = 0 in F = C − P + 1 for C = 2 gives P<sub>max</sub> = C + 1 = 3 phases. Inside a single-phase region (P = 1), F = 2 − 1 + 1 = 2, meaning both temperature and composition can be varied independently without changing the number of phases."
    },
    {
      id: "M04-010",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why do copper (Cu) and nickel (Ni) form a binary isomorphous system with complete solid solubility across all compositions?",
      options: [
        "Cu and Ni satisfy the Hume–Rothery conditions: both are FCC with nearly identical atomic radii and electronegativities",
        "Cu and Ni have a very large electronegativity difference, favoring an ordered intermetallic compound",
        "Cu and Ni are completely immiscible in the liquid state, forcing uniform solid mixing",
        "Cu is BCC and Ni is FCC, creating large interstitial voids that accommodate solute atoms"
      ],
      ans: 0,
      exp: "Cu and Ni form a single substitutional solid solution α across 0–100% composition because they satisfy the Hume–Rothery rules for complete solid solubility: identical crystal structure (both FCC), nearly identical atomic radii, similar electronegativities, and compatible valences."
    },
    {
      id: "M04-011",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cu_ni",
      q: "Referring to the Cu–Ni isomorphous phase diagram, what are the approximate melting points of pure Cu and pure Ni, and what single solid phase exists below the solidus line?",
      options: [
        "Cu ≈ 327°C, Ni ≈ 1085°C; intermetallic compound CuNi",
        "Cu ≈ 1453°C, Ni ≈ 1085°C; interstitial solid solution β",
        "Cu ≈ 912°C, Ni ≈ 1539°C; lamellar eutectic (α + β)",
        "Cu ≈ 1085°C, Ni ≈ 1453°C; substitutional solid solution α"
      ],
      ans: 3,
      exp: "On the Cu–Ni phase diagram, pure Cu melts at ≈ 1085°C and pure Ni melts at ≈ 1453°C. Below the solidus curve, only a single substitutional solid solution phase α exists across the entire composition range."
    },
    {
      id: "M04-012",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "cu_ni",
      q: "On the Cu–Ni isomorphous phase diagram, what do the upper boundary (liquidus) and lower boundary (solidus) of the two-phase lens represent during equilibrium cooling?",
      options: [
        "Liquidus is the temperature where solidification begins on cooling; solidus is where solidification finishes",
        "Liquidus is a horizontal isotherm at 1250°C; solidus is a vertical line at 50 wt% Ni",
        "Liquidus separates α from α + β; solidus separates L from α + β",
        "Liquidus is where solidification finishes; solidus is where melting finishes"
      ],
      ans: 0,
      exp: "Above the liquidus the alloy is 100% liquid; below the solidus it is 100% solid α. Therefore, on cooling, solidification begins upon crossing the liquidus and finishes upon crossing the solidus."
    },
    {
      id: "M04-013",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "For an alloy of overall composition C<sub>0</sub> located inside a two-phase (L + α) region where the horizontal tie-line intersects the liquidus at C<sub>L</sub> and the solidus at C<sub>α</sub> (with C<sub>L</sub> < C<sub>0</sub> < C<sub>α</sub>), what is the Lever Rule expression for the weight fraction of solid α (f<sub>α</sub>)?",
      options: [
        "f<sub>α</sub> = (C<sub>α</sub> − C<sub>L</sub>) / (C<sub>0</sub> − C<sub>L</sub>)",
        "f<sub>α</sub> = (C<sub>0</sub> − C<sub>L</sub>) / (C<sub>α</sub> − C<sub>L</sub>)",
        "f<sub>α</sub> = (C<sub>α</sub> − C<sub>0</sub>) / (C<sub>α</sub> − C<sub>L</sub>)",
        "f<sub>α</sub> = (C<sub>0</sub> − C<sub>L</sub>) / (C<sub>α</sub> − C<sub>0</sub>)"
      ],
      ans: 1,
      exp: "By the Lever Rule, the mass fraction of a phase equals the <em>opposite</em> lever arm divided by the total tie-line length. For solid α (located at C<sub>α</sub>), the opposite arm runs from C<sub>L</sub> to C<sub>0</sub>, so f<sub>α</sub> = (C<sub>0</sub> − C<sub>L</sub>) / (C<sub>α</sub> − C<sub>L</sub>)."
    },
    {
      id: "M04-014",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "cu_ni",
      q: "Using the Cu–Ni phase diagram, Alloy B (C<sub>0</sub> = 40 wt% Ni) is held at 1250°C, where the tie-line intersects the liquidus at C<sub>L</sub> = 32 wt% Ni and the solidus at C<sub>α</sub> = 43 wt% Ni. What are the weight percentages of solid α and liquid L?",
      options: [
        "72.7% solid α and 27.3% liquid L",
        "57.0% solid α and 43.0% liquid L",
        "27.3% solid α and 72.7% liquid L",
        "60.0% solid α and 40.0% liquid L"
      ],
      ans: 0,
      exp: "Total tie-line length = C<sub>α</sub> − C<sub>L</sub> = 43 − 32 = 11 wt% Ni. By the Lever Rule (opposite arm / total length): f<sub>α</sub> = (40 − 32)/11 = 8/11 = 72.7%, and f<sub>L</sub> = (43 − 40)/11 = 3/11 = 27.3%."
    },
    {
      id: "M04-015",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A Cu–40 wt% Ni alloy is equilibrated at 1250°C (where the liquidus is at 32 wt% Ni and the solidus is at 43 wt% Ni). If a second alloy of Cu–35 wt% Ni is equilibrated at the exact same temperature of 1250°C, how do the <em>compositions</em> and <em>amounts</em> of the α and L phases compare?",
      options: [
        "Both the phase compositions and the phase amounts change because C<sub>0</sub> changed",
        "The phase compositions remain identical (L = 32% Ni, α = 43% Ni), while the fraction of α drops from 72.7% to 27.3%",
        "The Cu–35 wt% Ni alloy becomes 100% solid α at 1250°C because it has less nickel",
        "The phase amounts stay identical (72.7% α, 27.3% L), but the phase compositions shift toward 35 wt% Ni"
      ],
      ans: 1,
      exp: "At a fixed temperature inside a two-phase binary region (F = 1), all alloys on the tie-line share the exact same equilibrium phase compositions: C<sub>L</sub> = 32 wt% Ni and C<sub>α</sub> = 43 wt% Ni. Only the phase fractions change: for C<sub>0</sub> = 35 wt% Ni, f<sub>α</sub> = (35 − 32)/(43 − 32) = 3/11 = 27.3% and f<sub>L</sub> = 8/11 = 72.7%."
    },
    {
      id: "M04-016",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "At 1250°C on the Cu–Ni phase diagram, the equilibrium tie-line endpoints are C<sub>L</sub> = 32 wt% Ni and C<sub>α</sub> = 43 wt% Ni. What overall alloy composition C<sub>0</sub> yields exactly 60.0 wt% solid α and 40.0 wt% liquid L at 1250°C?",
      options: [
        "38.6 wt% Ni",
        "36.4 wt% Ni",
        "39.6 wt% Ni",
        "37.5 wt% Ni"
      ],
      ans: 0,
      exp: "Rearranging the Lever Rule f<sub>α</sub> = (C<sub>0</sub> − C<sub>L</sub>)/(C<sub>α</sub> − C<sub>L</sub>) gives C<sub>0</sub> = C<sub>L</sub> + f<sub>α</sub>(C<sub>α</sub> − C<sub>L</sub>) = 32 + 0.60 × (43 − 32) = 32 + 6.6 = 38.6 wt% Ni."
    },
    {
      id: "M04-017",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "During slow equilibrium cooling of a Cu–40 wt% Ni alloy from the liquidus down to the solidus inside the (L + α) region, how do the equilibrium Ni concentrations of the liquid (C<sub>L</sub>) and solid (C<sub>α</sub>) change?",
      options: [
        "Both C<sub>L</sub> and C<sub>α</sub> remain fixed at 32 wt% Ni and 43 wt% Ni throughout freezing",
        "Both C<sub>L</sub> and C<sub>α</sub> decrease (become richer in Cu) as temperature drops along the liquidus and solidus curves",
        "C<sub>L</sub> increases while C<sub>α</sub> stays constant at 40 wt% Ni",
        "Both C<sub>L</sub> and C<sub>α</sub> increase (become richer in Ni) as temperature drops"
      ],
      ans: 1,
      exp: "Because pure Cu has the lower melting point (1085°C vs 1453°C for Ni), both the liquidus and solidus curves slope downward toward the Cu-rich side. As temperature falls during equilibrium solidification, both C<sub>L</sub> and C<sub>α</sub> shift continuously to lower wt% Ni (higher Cu)."
    },
    {
      id: "M04-018",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What does the Greek-derived term <em>eutectic</em> literally mean, and what is the defining thermal property of a eutectic alloy?",
      options: [
        "\"Easy melting\"; it melts and freezes isothermally at the lowest melting temperature in the entire alloy system",
        "\"High strength\"; it exhibits the highest melting point in the binary system",
        "\"Slow cooling\"; it decomposes only in the solid state upon reheating",
        "\"Uniform solid\"; it forms a single solid solution across all compositions"
      ],
      ans: 0,
      exp: "Eutectic means \"easy melting.\" A eutectic composition melts (and freezes) completely at a single invariant temperature T<sub>E</sub> that is lower than the melting point of either pure component (e.g., 183°C for Pb–62 wt% Sn vs 327°C for Pb and 232°C for Sn)."
    },
    {
      id: "M04-019",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "pb_sn",
      q: "From the Pb–Sn eutectic phase diagram, what are the melting points of pure Pb and pure Sn, and the coordinates of the eutectic point?",
      options: [
        "Pb = 450°C, Sn = 300°C; eutectic at 183°C and 62 wt% Sn",
        "Pb = 232°C, Sn = 327°C; eutectic at 183°C and 38 wt% Sn",
        "Pb = 327°C, Sn = 232°C; eutectic at 200°C and 50 wt% Sn",
        "Pb = 327°C, Sn = 232°C; eutectic at 183°C and 62 wt% Sn"
      ],
      ans: 3,
      exp: "In the Pb–Sn system, pure Pb melts at 327°C, pure Sn melts at 232°C, and the eutectic point lies at T<sub>E</sub> = 183°C and C<sub>E</sub> = 62 wt% Sn."
    },
    {
      id: "M04-020",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "In the standard Pb–Sn eutectic phase diagram, what is the correct designation and maximum tin content of the Sn-rich terminal solid solution at the 183°C eutectic temperature?",
      options: [
        "γ phase, with maximum composition 97 wt% Sn",
        "γ phase, with maximum composition 62 wt% Sn",
        "β phase, with maximum composition 97 wt% Sn",
        "α phase, with maximum composition 97 wt% Sn"
      ],
      ans: 2,
      exp: "In the Pb–Sn phase diagram, the Pb-rich solid solution is α (max 18 wt% Sn at 183°C) and the Sn-rich solid solution is <strong>β</strong> (97 wt% Sn, i.e., max 3 wt% Pb dissolved in Sn at 183°C). A common exam trap is mislabeling the Sn-rich phase as γ."
    },
    {
      id: "M04-021",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Easy",
      type: "Formula",
      diagram: "pb_sn",
      q: "Which invariant reaction accurately describes the eutectic transformation upon cooling in the Pb–Sn phase diagram at 183°C?",
      options: [
        "L (62% Sn) + α (18% Sn) → β (97% Sn)",
        "α (62% Sn) → L (18% Sn) + β (97% Sn)",
        "L (18% Sn) → α (62% Sn) + β (97% Sn)",
        "L (62% Sn) → α (18% Sn) + β (97% Sn)"
      ],
      ans: 3,
      exp: "At the Pb–Sn eutectic isotherm (183°C), liquid of eutectic composition (62 wt% Sn) simultaneously solidifies into two solid solutions: Pb-rich α (18 wt% Sn) and Sn-rich β (97 wt% Sn), written as L(62% Sn) → α(18% Sn) + β(97% Sn)."
    },
    {
      id: "M04-022",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "On a binary eutectic phase diagram with partial solid solubility, what boundary separates a single-phase terminal solid solution (such as α) from the two-phase solid region (α + β)?",
      options: [
        "The eutectic horizontal isotherm",
        "The peritectic boundary",
        "The solvus line",
        "The liquidus line"
      ],
      ans: 2,
      exp: "The solvus line indicates the temperature-dependent solid solubility limit of one element in another, separating a single solid solution phase (α or β) from the two-phase solid mixture (α + β)."
    },
    {
      id: "M04-023",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "pb_sn",
      q: "How do the room-temperature microstructures of a hypo-eutectic Pb–Sn alloy (e.g., 35 wt% Sn) and a hyper-eutectic Pb–Sn alloy (e.g., 80 wt% Sn) differ?",
      options: [
        "Both consist exclusively of alternating lamellar (α + β) with no primary crystals",
        "Hypo-eutectic is 100% single-phase α; hyper-eutectic is 100% single-phase β",
        "Hypo-eutectic contains pro-eutectic (primary) α + lamellar eutectic (α + β); hyper-eutectic contains pro-eutectic (primary) β + lamellar eutectic (α + β)",
        "Hypo-eutectic contains primary β + eutectic (α + β); hyper-eutectic contains primary α + eutectic (α + β)"
      ],
      ans: 2,
      exp: "Alloys to the left of the eutectic point (< 62% Sn, hypo-eutectic) solidify primary (pro-eutectic) α dendrites before reaching 183°C, where the remaining liquid forms fine lamellar eutectic (α + β). Alloys to the right (> 62% Sn, hyper-eutectic) form pro-eutectic β first, surrounded by eutectic (α + β)."
    },
    {
      id: "M04-024",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A Pb–10 wt% Sn alloy is slowly cooled from 350°C to 183°C. How much eutectic microconstituent forms at 183°C?",
      options: [
        "10.0% eutectic microconstituent",
        "16.1% eutectic microconstituent",
        "83.9% eutectic microconstituent",
        "0% — the alloy finishes solidifying completely as single-phase α above 183°C and never undergoes the eutectic reaction"
      ],
      ans: 3,
      exp: "Because maximum solubility of Sn in α at 183°C is 18 wt% Sn, any Pb–Sn alloy containing less than 18 wt% Sn (such as 10 wt% Sn) crosses the solidus above 183°C and solidifies completely as single-phase α without ever crossing the eutectic isotherm. (On further cooling below the solvus, secondary β precipitates, not eutectic.)"
    },
    {
      id: "M04-025",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What is the key distinction between a <em>phase</em> and a <em>microconstituent</em> in a hypo-eutectic Pb–Sn alloy just below 183°C?",
      options: [
        "The alloy has three phases (pro-eutectic α, eutectic α, and β) and one microconstituent",
        "A microconstituent must always be chemically homogeneous, whereas a phase can be lamellar",
        "Phases exist only above the eutectic temperature, whereas microconstituents exist only below it",
        "The alloy has two phases (α and β) and two microconstituents (pro-eutectic α and the lamellar eutectic α + β)"
      ],
      ans: 3,
      exp: "A microconstituent is a recognizable morphological feature under the microscope. Just below 183°C, a hypo-eutectic Pb–Sn alloy has two thermodynamic phases (α and β), organized into two microconstituents: primary (pro-eutectic) α islands and the lamellar eutectic (α + β) matrix."
    },
    {
      id: "M04-026",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For a Pb–35 wt% Sn alloy equilibrated just below the 183°C eutectic temperature (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn), what are the weight percentages of <strong>total α</strong> and <strong>total β</strong> phases?",
      options: [
        "Total α = 78.5%, Total β = 21.5%",
        "Total α = 61.4%, Total β = 38.6%",
        "Total α = 63.9%, Total β = 36.1%",
        "Total α = 21.5%, Total β = 78.5%"
      ],
      ans: 0,
      exp: "For total phases just below 183°C, apply the Lever Rule across the full (α + β) tie-line from 18% to 97% Sn: Total α = (97 − 35)/(97 − 18) = 62/79 = 78.5%; Total β = (35 − 18)/(97 − 18) = 17/79 = 21.5%."
    },
    {
      id: "M04-027",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For a Pb–35 wt% Sn alloy equilibrated just below 183°C (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn), what are the weight percentages of the <strong>pro-eutectic α</strong> and <strong>eutectic</strong> microconstituents?",
      options: [
        "Pro-eutectic α = 56.5%, Eutectic = 43.5%",
        "Pro-eutectic α = 61.4%, Eutectic = 38.6%",
        "Pro-eutectic α = 38.6%, Eutectic = 61.4%",
        "Pro-eutectic α = 78.5%, Eutectic = 21.5%"
      ],
      ans: 1,
      exp: "Microconstituent amounts are fixed just above 183°C on the tie-line between α (18% Sn) and eutectic liquid L (62% Sn): Pro-eutectic α = (62 − 35)/(62 − 18) = 27/44 = 61.4%, and Eutectic microconstituent = (35 − 18)/(62 − 18) = 17/44 = 38.6%."
    },
    {
      id: "M04-028",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "In a Pb–35 wt% Sn alloy just below 183°C (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn), what weight percentage of the entire alloy consists specifically of <strong>eutectic α</strong> (the α lamellae residing inside the eutectic microconstituent)?",
      options: [
        "61.4%",
        "21.5%",
        "17.1%",
        "38.6%"
      ],
      ans: 2,
      exp: "Total α = Pro-eutectic α + Eutectic α. From the Lever Rule just below 183°C: Total α = (97 − 35)/(97 − 18) = 78.5%, and Pro-eutectic α = (62 − 35)/(62 − 18) = 61.4%. Therefore, Eutectic α = 78.5% − 61.4% = 17.1%. (Check: Eutectic α 17.1% + Eutectic β 21.5% = 38.6% total eutectic!)"
    },
    {
      id: "M04-029",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A hyper-eutectic Pb–80 wt% Sn alloy is slowly cooled to just below 183°C (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn). What are the weight percentages of <strong>pro-eutectic β</strong> and <strong>eutectic microconstituent</strong>?",
      options: [
        "Pro-eutectic β = 48.6%, Eutectic = 51.4%",
        "Pro-eutectic β = 78.5%, Eutectic = 21.5%",
        "Pro-eutectic β = 27.1%, Eutectic = 72.9%",
        "Pro-eutectic β = 51.4%, Eutectic = 48.6%"
      ],
      ans: 3,
      exp: "For hyper-eutectic 80% Sn, apply the Lever Rule just above 183°C between L (62% Sn) and β (97% Sn): Pro-eutectic β = (80 − 62)/(97 − 62) = 18/35 = 51.4%, and Eutectic microconstituent = (97 − 80)/(97 − 62) = 17/35 = 48.6%."
    },
    {
      id: "M04-030",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "For a Pb–80 wt% Sn alloy just below 183°C (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn), calculate the weight percentages of <strong>total β</strong> and <strong>eutectic β</strong>.",
      options: [
        "Total β = 78.5%, Eutectic β = 27.1%",
        "Total β = 78.5%, Eutectic β = 48.6%",
        "Total β = 62.0%, Eutectic β = 10.6%",
        "Total β = 51.4%, Eutectic β = 21.5%"
      ],
      ans: 0,
      exp: "Total β across the full (18% to 97% Sn) tie-line is (80 − 18)/(97 − 18) = 62/79 = 78.5%. Pro-eutectic β = (80 − 62)/(97 − 62) = 18/35 = 51.4%. Hence Eutectic β = Total β − Pro-eutectic β = 78.5% − 51.4% = 27.1%."
    },
    {
      id: "M04-031",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A Pb–50 wt% Sn solder alloy is cooled under equilibrium conditions to just below 183°C (α = 18% Sn, eutectic = 62% Sn, β = 97% Sn). What fraction of the microstructure is the lamellar eutectic microconstituent?",
      options: [
        "59.5%",
        "72.7%",
        "27.3%",
        "40.5%"
      ],
      ans: 1,
      exp: "Because 50% Sn < 62% Sn, the alloy is hypo-eutectic. Using the tie-line between α (18% Sn) and L (62% Sn) just above 183°C: f<sub>eutectic</sub> = (50 − 18)/(62 − 18) = 32/44 = 72.7% (and pro-eutectic α = 12/44 = 27.3%)."
    },
    {
      id: "M04-032",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In a binary A–B eutectic system, pure A melts at 1450°C, pure B melts at 1900°C, and the eutectic reaction at 1250°C is L (30% B) → β (12% B, A-rich) + α (85% B, B-rich). How is an alloy containing 65 wt% B classified, and which phase solidifies first?",
      options: [
        "Hypo-eutectic; primary α (B-rich) solidifies first",
        "Hyper-eutectic; primary β (A-rich) solidifies first",
        "Hyper-eutectic; primary α (B-rich) solidifies first",
        "Hypo-eutectic; primary β (A-rich) solidifies first"
      ],
      ans: 2,
      exp: "Since the eutectic is at 30% B and the alloy contains 65% B (> 30% B), it lies on the B-rich (hyper-eutectic) side. Notice the phase labeling in this diagram: α is the B-rich phase (85% B), so pro-eutectic (primary) α precipitates first on cooling."
    },
    {
      id: "M04-033",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "For the A–B eutectic system with L (30% B) → β (12% B) + α (85% B) at 1250°C, compute the exact weight percentages of <strong>total α</strong> and <strong>total β</strong> in a 65 wt% B alloy just below 1250°C.",
      options: [
        "Total α = 72.6%, Total β = 27.4%",
        "Total α = 72.2%, Total β = 27.8%",
        "Total α = 27.4%, Total β = 72.6%",
        "Total α = 63.6%, Total β = 36.4%"
      ],
      ans: 0,
      exp: "Using the full solid tie-line from β (12% B) to α (85% B), total length = 85 − 12 = 73%. Thus Total α = (65 − 12)/73 = 53/73 = 72.60%, and Total β = (85 − 65)/73 = 20/73 = 27.40%. (Watch the classic arithmetic trap: 20/73 = 27.4%, NOT 27.8%!)"
    },
    {
      id: "M04-034",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "In a binary A–B eutectic system with L (30% B) → β (12% B, A-rich) + α (85% B, B-rich) at 1250°C, what are the weight percentages of <strong>pro-eutectic α</strong>, <strong>eutectic microconstituent</strong>, and <strong>eutectic α</strong> in a 65 wt% B alloy just below 1250°C?",
      options: [
        "Pro-eutectic α = 53.0%, Eutectic = 47.0%, Eutectic α = 19.6%",
        "Pro-eutectic α = 36.4%, Eutectic = 63.6%, Eutectic α = 27.4%",
        "Pro-eutectic α = 63.6%, Eutectic = 36.4%, Eutectic α = 9.0%",
        "Pro-eutectic α = 72.6%, Eutectic = 27.4%, Eutectic α = 18.4%"
      ],
      ans: 2,
      exp: "Just above 1250°C on the L (30% B) to α (85% B) tie-line (length 55): Pro-eutectic α = (65 − 30)/(85 − 30) = 35/55 = 63.6%, and Eutectic = (85 − 65)/55 = 20/55 = 36.4%. Since Total α = 72.6%, Eutectic α = 72.6% − 63.6% = 9.0%."
    },
    {
      id: "M04-035",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "In a binary A–B eutectic system (A-rich β, B-rich α), a 65 wt% B alloy cools to room temperature where the equilibrium phase compositions are β = 4% B and α = 92% B. What are the room-temperature weight percentages of total α and total β?",
      options: [
        "Total α = 63.6%, Total β = 36.4%",
        "Total α = 72.6%, Total β = 27.4%",
        "Total α = 69.3%, Total β = 30.7%",
        "Total α = 70.7%, Total β = 29.3%"
      ],
      ans: 2,
      exp: "At room temperature, the tie-line runs from β = 4% B to α = 92% B (total length = 92 − 4 = 88%). Applying the Lever Rule for C<sub>0</sub> = 65% B: Total α = (65 − 4)/88 = 61/88 = 69.3%, and Total β = (92 − 65)/88 = 27/88 = 30.7%."
    },
    {
      id: "M04-036",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Metals A (T<sub>m</sub> = 650°C) and B (T<sub>m</sub> = 450°C) have negligible solid solubility and form a eutectic at 40% A + 60% B at 300°C, with straight liquidus lines. For an alloy of 75% A + 25% B, at what temperatures do solidification start and finish?",
      options: [
        "Starts at 504.2°C, finishes at 300.0°C",
        "Starts at 541.7°C, finishes at 300.0°C",
        "Starts at 450.0°C, finishes at 300.0°C",
        "Starts at 650.0°C, finishes at 450.0°C"
      ],
      ans: 0,
      exp: "The A-rich straight liquidus connects (0% B, 650°C) to (60% B, 300°C): slope = −(650 − 300)/60 = −5.833°C per %B. Thus T(C<sub>B</sub>) = 650 − 5.833 C<sub>B</sub>. At C<sub>B</sub> = 25% B: T<sub>start</sub> = 650 − 5.833(25) = 504.2°C. Solidification finishes isothermally at the eutectic temperature T<sub>end</sub> = 300.0°C."
    },
    {
      id: "M04-037",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For the negligible-solubility A–B alloy (75% A + 25% B; eutectic at 60% B and 300°C), what are the weight percentages of eutectic microconstituent and primary pure A at room temperature?",
      options: [
        "58.33% eutectic and 41.67% primary pure A",
        "25.00% eutectic and 75.00% primary pure A",
        "62.50% eutectic and 37.50% primary pure A",
        "41.67% eutectic and 58.33% primary pure A"
      ],
      ans: 3,
      exp: "With negligible solid solubility (0% B in primary A), the tie-line just above 300°C spans from 0% B (pure A) to 60% B (eutectic L). By the Lever Rule: % Eutectic = (25 − 0)/(60 − 0) × 100 = 41.67%, and % Primary pure A = (60 − 25)/60 × 100 = 58.33%."
    },
    {
      id: "M04-038",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "In a negligible-solubility A–B eutectic system [A melts at 650°C, B melts at 450°C, straight liquidus lines meeting at eutectic 60% B, 300°C], what are the liquid composition C<sub>L</sub> and weight percentage of liquid present in a 75% A + 25% B alloy at 390°C?",
      options: [
        "C<sub>L</sub> = 44.57% B (55.43% A); Liquid = 56.09%",
        "C<sub>L</sub> = 44.57% B (55.43% A); Liquid = 43.91%",
        "C<sub>L</sub> = 35.00% B (65.00% A); Liquid = 71.43%",
        "C<sub>L</sub> = 55.43% B; Liquid = 45.10%"
      ],
      ans: 0,
      exp: "From the straight liquidus T = 650 − (350/60)C<sub>L</sub>, setting T = 390°C gives 390 = 650 − 5.8333 C<sub>L</sub> ⇒ C<sub>L</sub> = 260 / 5.8333 = 44.57% B (55.43% A). Since the solid is pure A (0% B), % Liquid = (25 − 0)/(44.57 − 0) × 100 = 56.09%."
    },
    {
      id: "M04-039",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Metals A (specific gravity SG<sub>A</sub> = 2) and B (SG<sub>B</sub> = 7) form a mechanical mixture of 75 wt% A + 25 wt% B with negligible solid solubility. What is the specific gravity (SG) of the solid alloy?",
      options: [
        "4.500",
        "2.800",
        "3.250",
        "2.435"
      ],
      ans: 3,
      exp: "Because weight fractions (not volume fractions) are given, total volume = V<sub>A</sub> + V<sub>B</sub> gives the harmonic (reciprocal) rule: 100 / SG<sub>alloy</sub> = 75/2 + 25/7 = 37.5 + 3.571 = 41.071 ⇒ SG<sub>alloy</sub> = 100 / 41.071 = 2.435. A classic exam trap is taking the arithmetic weighted average (0.75×2 + 0.25×7 = 3.25), which is valid only for volume fractions."
    },
    {
      id: "M04-040",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a negligible-solubility A–B eutectic diagram [A melts at 650°C, B melts at 450°C, straight liquidus lines meeting at eutectic 60% B, 300°C], at what temperature does solidification begin for a hyper-eutectic alloy of 20% A + 80% B?",
      options: [
        "337.5°C",
        "375.0°C",
        "400.0°C",
        "350.0°C"
      ],
      ans: 1,
      exp: "The B-rich straight liquidus connects (60% B, 300°C) to (100% B, 450°C), with slope = (450 − 300)/(100 − 60) = 150/40 = 3.75°C per %B. At 80% B, T<sub>start</sub> = 300 + 3.75 × (80 − 60) = 300 + 75 = 375.0°C."
    },
    {
      id: "M04-041",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Metals A (900°C) and B (800°C) form a eutectic at 600°C and 60% B. Maximum solubility of B in A is 10% B at 600°C falling linearly to 5% B at 0°C; maximum solubility of A in B is 8% A at 600°C falling linearly to 4% A at 0°C. What are the equilibrium phase compositions C<sub>α</sub> and C<sub>β</sub> (in wt% B) at 25°C?",
      options: [
        "C<sub>α</sub> = 4.79% B, C<sub>β</sub> = 92.17% B",
        "C<sub>α</sub> = 9.79% B, C<sub>β</sub> = 92.17% B",
        "C<sub>α</sub> = 5.21% B, C<sub>β</sub> = 95.83% B",
        "C<sub>α</sub> = 5.21% B, C<sub>β</sub> = 4.17% B"
      ],
      ans: 2,
      exp: "For α, solubility increases linearly from 5% B at 0°C to 10% B at 600°C: C<sub>α</sub>(25°C) = 5 + (5/600)(25) = 5.21% B. For β, 8% A at 600°C = 92% B and 4% A at 0°C = 96% B, so C<sub>β</sub>(25°C) = 96 − (4/600)(25) = 95.83% B."
    },
    {
      id: "M04-042",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "For a partial-solubility A–B alloy of 60% A + 40% B equilibrated at 25°C, where the terminal solid solutions have compositions C<sub>α</sub> = 5.21% B and C<sub>β</sub> = 95.83% B, what are the equilibrium weight percentages of solid phases α and β?",
      options: [
        "65.8% α and 34.2% β",
        "40.0% α and 60.0% β",
        "61.6% α and 38.4% β",
        "38.4% α and 61.6% β"
      ],
      ans: 2,
      exp: "At 25°C, C<sub>0</sub> = 40% B lies inside the two-phase (α + β) region with tie-line endpoints 5.21% B and 95.83% B (length = 90.62%). By the Lever Rule: %α = (95.83 − 40)/(95.83 − 5.21) × 100 = 55.83/90.62 × 100 = 61.6%, and %β = 38.4%."
    },
    {
      id: "M04-043",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "For a partial-solubility A–B alloy of 60% A + 40% B (eutectic at 600°C and 60% B, with maximum solubility in α equal to 10% B at 600°C), what are the weight percentages of <strong>pro-eutectic α</strong> and <strong>eutectic microconstituent</strong> just below 600°C?",
      options: [
        "Pro-eutectic α = 61.6%, Eutectic = 38.4%",
        "Pro-eutectic α = 40.0%, Eutectic = 60.0%",
        "Pro-eutectic α = 33.3%, Eutectic = 66.7%",
        "Pro-eutectic α = 60.0%, Eutectic = 40.0%"
      ],
      ans: 1,
      exp: "Just above 600°C, the tie-line connects α (10% B) and eutectic L (60% B), total length = 50%. For C<sub>0</sub> = 40% B: Pro-eutectic α = (60 − 40)/(60 − 10) = 20/50 = 40.0%, and Eutectic = (40 − 10)/(60 − 10) = 30/50 = 60.0%."
    },
    {
      id: "M04-044",
      chapter: "Ch 7: Phase Diagrams & Binary Alloys",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "In a partial-solubility A–B eutectic system where the solid solubility of B in α drops linearly along the solvus from 10% B at 600°C to 5% B at 0°C, what equilibrium phase state does an alloy containing 8 wt% B experience at 600°C versus at 25°C?",
      options: [
        "Two-phase (α + β) at 600°C, transforming into single-phase α at 25°C",
        "Single-phase α at 600°C (8% < 10%), then crosses the solvus during cooling to become two-phase (α + β) at 25°C (8% > 5.21%)",
        "Single-phase liquid at 600°C, transforming into lamellar eutectic at 25°C",
        "Single-phase α at both 600°C and 25°C with no precipitation"
      ],
      ans: 1,
      exp: "At 600°C, 8% B is below the 10% B solubility limit, so the alloy is 100% single-phase α. Upon cooling to 25°C, the solubility limit drops to 5.21% B, so the alloy crosses the sloping solvus line and precipitates secondary β to enter the two-phase (α + β) field."
    }
  ]
});
