window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod06",
  questions: [
    {
      id: "M06-001",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which definition most accurately describes bulk <strong>heat treatment</strong> of metals and alloys?",
      options: [
        "Mechanically rolling a metal at room temperature to increase dislocation density and hardness",
        "Depositing a metallic ceramic coating onto a finished steel component by electroplating",
        "Melting an alloy completely and adding new alloying elements in the ladle before casting",
        "Controlled heating, soaking (holding), and cooling in the solid state to tailor microstructure and mechanical properties without altering bulk chemical composition"
      ],
      ans: 3,
      exp: "Bulk heat treatment consists of controlled heating, soaking (holding), and cooling strictly in the <em>solid state</em> to alter microstructure and properties without changing the bulk chemical composition of the alloy."
    },
    {
      id: "M06-002",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why is the intermediate <strong>soaking (holding)</strong> stage essential between heating and cooling during a heat-treatment cycle?",
      options: [
        "To ensure uniform temperature throughout the cross-section and allow complete solid-state phase transformation or homogenization",
        "To partially melt grain boundaries so impurities float to the surface",
        "To cool the interior core faster than the outer surface before quenching",
        "To allow atmospheric oxygen to oxidize the outer surface layer into a hard scale"
      ],
      ans: 0,
      exp: "Soaking holds the component at the target temperature long enough for heat to penetrate uniformly from surface to core and for required solid-state transformations (such as complete austenitization or stress relief) to reach completion."
    },
    {
      id: "M06-003",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which of the following is <strong>NOT</strong> one of the general engineering objectives of heat treatment?",
      options: [
        "Lowering the atomic number of iron atoms to reduce the metal's theoretical crystal density",
        "Relieving residual stresses induced by casting, forging, rolling, welding, or machining",
        "Overcoming strain hardening to restore ductility in cold-worked metals",
        "Refining coarse grain size and eliminating chemical inhomogeneity"
      ],
      ans: 0,
      exp: "Heat treatment improves mechanical properties, machinability, wear/corrosion resistance, magnetic/electrical properties, grain refinement/homogenization, surface hardness over a tough core, stress relief, and ductility restoration—it never alters nuclear identity or atomic number."
    },
    {
      id: "M06-004",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In the standard classification of heat-treatment processes, which group belongs exclusively to <strong>Advanced Heat Treatments</strong>?",
      options: [
        "Flame hardening, induction hardening, austempering, and martempering",
        "Ion nitriding, plasma carburising, electron-beam hardening, and laser hardening",
        "Full annealing, normalizing, hardening, and tempering",
        "Pack carburising, cyaniding, nitriding, and carbonitriding"
      ],
      ans: 1,
      exp: "Heat treatments are classified into I. Bulk/Full (annealing, normalizing, hardening, tempering, austempering, martempering), II. Surface (thermo-chemical case hardening + thermal flame/induction), and III. Advanced (ion nitriding, plasma carburising, electron-beam hardening, laser hardening)."
    },
    {
      id: "M06-005",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What is the fundamental difference between <strong>thermo-chemical case hardening</strong> (carburising, nitriding, cyaniding, carbonitriding) and <strong>thermal surface hardening</strong> (flame and induction hardening)?",
      options: [
        "Thermo-chemical processes diffuse carbon and/or nitrogen into the surface layer (changing surface chemistry), whereas flame and induction hardening heat and quench only the surface without altering chemical composition",
        "Flame and induction hardening are used exclusively on low-carbon steels (< 0.2% C), whereas carburising requires high-carbon tool steels",
        "Thermo-chemical case hardening melts the entire component, whereas thermal surface hardening stays in the solid state",
        "Thermal surface hardening produces a soft surface over a hard core, whereas thermo-chemical hardening does the reverse"
      ],
      ans: 0,
      exp: "Thermo-chemical case hardening alters surface chemistry by diffusing C and/or N into a low-carbon steel surface. Thermal surface hardening (flame/induction) relies on rapid localized heating and quenching of medium/high-carbon steels without changing composition."
    },
    {
      id: "M06-006",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "heat_treat",
      q: "Referring to the heat-treatment temperature schematic relative to the critical lines A<sub>1</sub> and A<sub>3</sub>, how is <strong>full annealing</strong> performed on a hypo-eutectoid steel, and what microstructure does it produce?",
      options: [
        "Heat 30–50°C above A<sub>3</sub> (e.g., 940–960°C), soak 30 min–1 hr, furnace cool (slowest) → coarse pearlite with maximum softness and ductility",
        "Heat 20–30°C below A<sub>1</sub>, soak 1 hr, air cool → fine martensite",
        "Heat 30–50°C above A<sub>3</sub>, soak 1 hr, water quench → hard brittle martensite",
        "Heat 40–50°C above A<sub>3</sub>, soak 30 min, cool in still air → fine pearlite with high hardness"
      ],
      ans: 0,
      exp: "Full annealing heats hypo-eutectoid steel 30–50°C above A<sub>3</sub> (or hyper-eutectoid steel 30–50°C above A<sub>1</sub>), soaks 30 min–1 hr, and cools very slowly inside the turned-off furnace (furnace cooling), producing coarse pearlite with maximum softness and ductility."
    },
    {
      id: "M06-007",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which heat-treatment cycle describes <strong>isothermal annealing</strong> of steel?",
      options: [
        "Hold at 1100–1200°C for 10–20 hours followed by slow furnace cooling",
        "Quench directly to room temperature and reheat to 200°C",
        "Heat 20–30°C below A<sub>1</sub> for 1 hour followed by water quenching",
        "Austenitize above A<sub>3</sub> (100% γ), rapidly cool to 600–700°C, hold isothermally in a second furnace until transformation completes, then air cool"
      ],
      ans: 3,
      exp: "In isothermal annealing, steel is fully austenitized (> A<sub>3</sub>), rapidly cooled to a constant sub-critical temperature of 600–700°C, held isothermally in a second furnace until austenite transforms uniformly to pearlite, and then air cooled—yielding uniform structure and improved machinability."
    },
    {
      id: "M06-008",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "What are the correct temperature range, holding time, and purpose of <strong>diffusion annealing (homogenizing)</strong> applied to cast steel ingots?",
      options: [
        "1100–1200°C for 10–20 hr (followed by furnace cooling) to eliminate chemical segregation and inhomogeneity",
        "600–700°C for 1–2 hr to form globular spheroidite",
        "100–1200°C for 30 min–1 hr to relieve machining stresses",
        "460–550°C for 2–4 hr to nucleate strain-free grains after cold rolling"
      ],
      ans: 0,
      exp: "Diffusion (homogenizing) annealing requires very high temperatures of <strong>1100–1200°C</strong> for prolonged holding times (10–20 hr) followed by furnace cooling to eliminate dendritic chemical segregation in ingots. (Watch out for the classic typo trap \"100–1200°C\"!)"
    },
    {
      id: "M06-009",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "A cold-drawn low-carbon steel wire requires economical stress relief without undergoing any austenitic phase transformation. Which annealing process is specified?",
      options: [
        "Normalizing 50°C above A<sub>cm</sub> followed by oil quenching",
        "Diffusion annealing at 1150°C for 15 hr followed by furnace cooling",
        "Full annealing 50°C above A<sub>3</sub> followed by furnace cooling",
        "Partial (sub-critical / process) annealing at 20–30°C below A<sub>1</sub>, soaked ~1 hr, and air cooled"
      ],
      ans: 3,
      exp: "Partial (sub-critical or process) annealing heats steel to 20–30°C <em>below</em> A<sub>1</sub>, soaks ~1 hr, and air cools. Because it stays below A<sub>1</sub>, no phase transformation occurs, making it an economical stress-relief treatment after cold working."
    },
    {
      id: "M06-010",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What microstructural change takes place during <strong>recrystallization annealing</strong> of a heavily cold-worked steel held above the recrystallization temperature (≈ 460°C for Fe) but below A<sub>1</sub>?",
      options: [
        "Lamellar cementite dissolves completely into liquid iron",
        "Dendritic segregation in cast ingots is eliminated by long-range liquid diffusion",
        "New, strain-free equiaxed grains nucleate and grow to replace distorted cold-worked grains, restoring ductility",
        "Austenite transforms into needle-like BCT martensite"
      ],
      ans: 2,
      exp: "Heating a cold-worked metal above its recrystallization temperature (0.3–0.5 T<sub>m</sub>, ≈ 460°C for Fe) while staying below A<sub>1</sub> causes new strain-free equiaxed grains to nucleate and consume the strained grains, overcoming strain hardening and restoring ductility."
    },
    {
      id: "M06-011",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "The recrystallization temperature of a pure metal typically lies between 0.3 T<sub>m</sub> and 0.5 T<sub>m</sub> (where T<sub>m</sub> is the absolute melting temperature in Kelvin). Using T<sub>m</sub> = 1539°C for pure iron, what is the corresponding temperature estimate at 0.4 T<sub>m</sub> in degrees Celsius?",
      options: [
        "342°C",
        "452°C",
        "616°C",
        "725°C"
      ],
      ans: 1,
      exp: "Always convert T<sub>m</sub> to Kelvin first! T<sub>m</sub> = 1539 + 273.15 = 1812.15 K. Then 0.4 T<sub>m</sub> = 0.4 × 1812.15 = 724.9 K. Converting back to Celsius: 724.9 − 273.15 = 451.7°C ≈ 452°C (matching the study-notes benchmark of ≈ 460°C for Fe). Multiplying 0.4 × 1539°C = 616°C without Kelvin conversion is a classic trap!"
    },
    {
      id: "M06-012",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What is the purpose and resulting microstructure of <strong>spheroidizing</strong> applied to high-carbon and tool steels?",
      options: [
        "Holding near or cycling around A<sub>1</sub> to convert hard lamellar cementite into globular (spherical) Fe<sub>3</sub>C particles in an α-ferrite matrix for maximum softness and machinability",
        "Heating to 1150°C to dissolve all cementite into a coarse Widmanstätten ferrite network",
        "Holding at 350°C in a salt bath to convert austenite completely into lower bainite",
        "Quenching from 900°C in brine to trap carbon in BCT martensite for peak hardness"
      ],
      ans: 0,
      exp: "Spheroidizing holds high-carbon or tool steels near or cycling just around A<sub>1</sub> (or > 910°C for certain stainless steels, soaking 1–2 hr with slow/air cooling) to transform lamellar cementite plates into rounded globular spheroidite, giving maximum softness and machinability."
    },
    {
      id: "M06-013",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Trap",
      diagram: "heat_treat",
      q: "Referring to the heat-treatment schematic, how is <strong>normalizing</strong> conducted on steel, and what is the primary transformation achieved during soaking?",
      options: [
        "Heat 20–30°C below A<sub>1</sub>, soak for <strong>austenitization</strong>, and water quench",
        "Heat 30–50°C above A<sub>1</sub> for all steels, soak for <strong>spheroidization</strong>, and oil quench",
        "Heat 40–50°C above the upper critical temperature (A<sub>3</sub> for hypo-, A<sub>cm</sub> for hyper-eutectoid), soak for complete <strong>austenitization</strong>, and cool in <strong>still air</strong> (~20°C/min)",
        "Heat 40–50°C above A<sub>3</sub>, soak for <strong>recrystallization</strong>, and furnace cool"
      ],
      ans: 2,
      exp: "Normalizing heats steel 40–50°C above the upper critical line (A<sub>3</sub> for hypo-eutectoid, A<sub>cm</sub> for hyper-eutectoid), holds for full <strong>austenitization</strong> (TRAP: NOT recrystallization!), and cools in <strong>still air</strong> (~20°C/min)."
    },
    {
      id: "M06-014",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Diagram",
      diagram: "heat_treat",
      q: "Looking at the heat-treatment temperature zones for a <strong>hyper-eutectoid steel (e.g., 1.2 wt% C)</strong>, how does the heating temperature for <strong>normalizing</strong> differ from that for <strong>full annealing</strong>?",
      options: [
        "Both processes heat to 1150°C regardless of carbon content",
        "Full annealing heats above A<sub>cm</sub>, whereas normalizing stays below A<sub>1</sub>",
        "Normalizing heats 40–50°C above A<sub>cm</sub> (to dissolve the brittle pro-eutectoid Fe<sub>3</sub>C grain-boundary network completely into γ), whereas full annealing heats 30–50°C above A<sub>1</sub>",
        "Both processes heat to 30–50°C below A<sub>1</sub>"
      ],
      ans: 2,
      exp: "For hyper-eutectoid steels, full annealing heats 30–50°C above A<sub>1</sub> (inside γ + Fe<sub>3</sub>C), whereas normalizing heats 40–50°C above the upper critical line A<sub>cm</sub> into 100% single-phase γ to dissolve continuous brittle cementite networks before still-air cooling."
    },
    {
      id: "M06-015",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Compared with full annealing of the same plain carbon steel, what microstructure and mechanical properties does <strong>normalizing</strong> produce?",
      options: [
        "Coarser pearlite, larger grains, lower strength, and higher ductility",
        "Finer pearlite, fine uniform grain size, higher hardness and strength, and slightly lower ductility",
        "100% martensite, extreme brittleness, and highest residual stress",
        "Globular spheroidite, minimum hardness, and zero tensile strength"
      ],
      ans: 1,
      exp: "Because still-air cooling (~20°C/min) in normalizing is faster than furnace cooling in full annealing, normalizing produces fine pearlite and fine uniform grains, making the steel harder, stronger, and less ductile than fully annealed steel."
    },
    {
      id: "M06-016",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which statement accurately contrasts the effect of <strong>normalizing</strong> versus <strong>annealing</strong> on the machinability of carbon steels?",
      options: [
        "Neither process affects machinability because carbon content is unchanged",
        "Normalizing improves machinability of low-carbon steels, while annealing improves machinability of high-carbon steels",
        "Normalizing improves machinability of <strong>high-carbon</strong> steels, whereas annealing improves machinability of <strong>low-carbon</strong> steels",
        "Both processes reduce machinability by forming hard BCT martensite"
      ],
      ans: 2,
      exp: "Among the seven textbook differences between normalizing and annealing: normalizing improves machinability of high-carbon steels, whereas annealing improves machinability of low-carbon steels (and normalizing is less expensive with less critical cooling rate control)."
    },
    {
      id: "M06-017",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why is <strong>normalizing</strong> generally less expensive than <strong>full annealing</strong> in industrial production?",
      options: [
        "Normalizing removes the part from the furnace for still-air cooling, shortening furnace occupancy time and eliminating costly controlled slow furnace cooling",
        "Normalizing requires liquid nitrogen quenching instead of water quenching",
        "Normalizing requires no heating furnace at all and is performed at room temperature",
        "Normalizing uses lower temperatures than sub-critical annealing"
      ],
      ans: 0,
      exp: "In normalizing, cooling takes place outside the furnace in still air (~20°C/min), so the cooling rate is less critical and furnace cycle time is much shorter than in full annealing (which ties up the furnace during slow cooling)."
    },
    {
      id: "M06-018",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A steel shaft is austenitized at 950°C and then normalized in still air at a typical cooling rate of 20°C/min. How long does it take to cool from 950°C down to 250°C?",
      options: [
        "12.5 minutes",
        "70.0 minutes",
        "35.0 minutes",
        "47.5 minutes"
      ],
      ans: 2,
      exp: "Temperature drop ΔT = 950°C − 250°C = 700°C. At a still-air cooling rate of 20°C/min, cooling time t = 700 / 20 = 35.0 minutes."
    },
    {
      id: "M06-019",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How is conventional <strong>hardening</strong> of a hypo-eutectoid steel carried out?",
      options: [
        "Heat to 1150°C for 15 hr and cool in still air",
        "Heat to 500°C, soak 2 hr, and furnace cool",
        "Heat 20–30°C below A<sub>1</sub>, soak 1 hr, and cool slowly in the furnace",
        "Heat 30–50°C above A<sub>3</sub> (or above A<sub>1</sub> for hyper-eutectoid steel), soak for austenitization, and rapidly quench in water, oil, or air (for alloy steels)"
      ],
      ans: 3,
      exp: "Hardening austenitizes steel at 30–50°C above A<sub>3</sub> (hypo-eutectoid) or above A<sub>1</sub> (hyper-eutectoid), soaks to ensure uniform austenite, and rapidly quenches in water, oil, or air (for high-hardenability alloy steels) to form martensite."
    },
    {
      id: "M06-020",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "As the cooling rate of austenitized steel increases from slow to very rapid, what is the sequence of transformation products and their correct ranking from <strong>lowest to highest hardness</strong>?",
      options: [
        "Bainite → Pearlite → Martensite; Hardness: Bainite < Pearlite < Martensite",
        "Pearlite → Martensite → Bainite; Hardness: Pearlite < Martensite < Bainite",
        "Pearlite → Bainite → Martensite; Hardness: Pearlite < Bainite < Martensite",
        "Martensite → Bainite → Pearlite; Hardness: Martensite < Bainite < Pearlite"
      ],
      ans: 2,
      exp: "With increasing cooling rate from austenite: slow cooling yields Pearlite, intermediate cooling yields Bainite, and rapid quenching yields Martensite. Their hardness increases in the exact same order: Pearlite < Bainite < Martensite."
    },
    {
      id: "M06-021",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why is as-quenched <strong>martensite</strong> extraordinarily hard and brittle?",
      options: [
        "Quenching creates large equiaxed BCC ferrite grains free of interstitial solutes",
        "Martensite consists of coarse alternating plates of soft FCC austenite and graphite",
        "Rapid quenching suppresses carbon diffusion, trapping supersaturated carbon atoms in a distorted Body-Centered Tetragonal (BCT) lattice that strongly impedes dislocation motion",
        "Martensite forms an orthorhombic compound with 6.67 wt% C throughout the entire steel"
      ],
      ans: 2,
      exp: "Rapid quenching prevents carbon atoms from diffusing out of FCC γ-austenite to form Fe<sub>3</sub>C; instead, the lattice shears diffusionlessly into a supersaturated Body-Centered Tetragonal (BCT) structure whose severe lattice distortion makes martensite extremely hard and brittle."
    },
    {
      id: "M06-022",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why is <strong>tempering</strong> almost always performed immediately after quench hardening of steel?",
      options: [
        "To re-austenitize the steel above A<sub>3</sub> and increase brittleness further",
        "To relieve severe internal quenching stresses, decompose retained austenite, and restore toughness at a controlled reduction in hardness by reheating below A<sub>1</sub> (150–700°C)",
        "To diffuse additional carbon into the surface from wood charcoal",
        "To convert α-ferrite back into high-temperature δ-ferrite"
      ],
      ans: 1,
      exp: "As-quenched martensite is too brittle and heavily stressed for service. Tempering reheats the quenched steel below A<sub>1</sub> (150–700°C) to relieve quenching stresses, decompose retained austenite, and restore toughness while retaining controlled hardness."
    },
    {
      id: "M06-023",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "A hardened high-carbon steel cutting tool requires stress relief with minimal loss of peak hardness. Which tempering temperature regime should be used?",
      options: [
        "750–800°C (above A<sub>1</sub>)",
        "350–450°C (forming troostite)",
        "500–550°C (forming sorbite)",
        "150–200°C (low-temperature tempering)"
      ],
      ans: 3,
      exp: "Low-temperature tempering at 150–200°C relieves internal quenching stresses with minimal drop in hardness, making it ideal for cutting tools and wear-resistant parts."
    },
    {
      id: "M06-024",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which tempering temperature range, microstructural product, and engineering application are correctly matched for <strong>medium-temperature tempering</strong>?",
      options: [
        "500–550°C → ledeburite → cutting tools",
        "150–200°C → coarse pearlite → cast ingots",
        "730–800°C → δ-ferrite → wire drawing dies",
        "200–450°C → troostite / tempered martensite (higher toughness, lower hardness) → springs"
      ],
      ans: 3,
      exp: "Medium-temperature tempering (200–450°C) increases toughness and elasticity at the expense of some hardness, forming troostite / tempered martensite—ideal for springs."
    },
    {
      id: "M06-025",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "High-temperature tempering of quenched steel in the 450–700°C range (typically 500–550°C) produces which microstructure and serves which typical components?",
      options: [
        "Untempered BCT martensite giving peak hardness → razor blades and files",
        "Sorbite (fine cementite dispersed in α-ferrite) giving high toughness → shafts and gears",
        "Primary ledeburite giving extreme wear resistance → cast iron brake drums",
        "Coarse lamellar pearlite giving maximum softness → sheet metal blanks"
      ],
      ans: 1,
      exp: "High-temperature tempering (450–700°C, typically 500–550°C) forms sorbite (fine Fe<sub>3</sub>C particles distributed in an α-ferrite matrix), imparting an excellent combination of high toughness and strength suited for shafts and gears."
    },
    {
      id: "M06-026",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "ttt",
      q: "What are the axes and physical meaning of a <strong>TTT (Time–Temperature–Transformation)</strong> diagram for eutectoid steel?",
      options: [
        "Cooling Rate vs Depth; maps hardness across the cross-section of a quenched bar",
        "Temperature (vertical) vs log(time) (horizontal); tracks the isothermal decomposition of unstable austenite held at a constant sub-critical temperature",
        "Stress vs Strain; tracks elastic modulus and fracture toughness during tensile loading",
        "Temperature vs Carbon wt%; maps equilibrium phases formed upon infinitely slow cooling"
      ],
      ans: 1,
      exp: "A TTT diagram plots temperature on the vertical axis against logarithmic time on the horizontal axis, tracking how unstable austenite decomposes isothermally when held at a fixed sub-critical temperature below A<sub>1</sub> (727°C)."
    },
    {
      id: "M06-027",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "During the experimental construction of a TTT diagram, austenitized steel specimens are transferred rapidly to a molten salt bath at a fixed sub-critical temperature T, removed sequentially at timed intervals, and immediately <strong>water-quenched</strong>. What is the exact purpose of the final water quench?",
      options: [
        "To raise the specimen temperature back above 727°C",
        "To temper the pearlite into sorbite before polishing",
        "To dissolve all previously formed pearlite back into austenite",
        "To freeze all remaining untransformed austenite into martensite so the exact percentage transformed at that holding time can be measured metallographically"
      ],
      ans: 3,
      exp: "Removing a sample from the salt bath at time t and immediately water-quenching freezes any <em>untransformed</em> austenite into distinct martensite. Measuring the fraction of pearlite/bainite vs martensite across timed intervals generates the S-shaped % transformed vs log(t) curve used to plot the 1% Start and 99% End C-curves."
    },
    {
      id: "M06-028",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "ttt",
      q: "Referring to the TTT diagram for eutectoid steel, which set of temperature regions and features is completely accurate?",
      options: [
        "Above 727°C: Pearlite; Nose ≈ 240°C; Above nose: Bainite; Below nose: Stable Austenite",
        "Above 727°C: Stable Austenite; Nose ≈ 550°C; Above nose (~550–727°C): Pearlite; Below nose (~240–550°C): Bainite",
        "Above 727°C: Stable Austenite; Nose ≈ 550°C; Above nose (~550–727°C): Bainite; Below nose (~240–550°C): Pearlite",
        "Above 727°C: Stable Austenite; Nose ≈ 727°C; Above nose: Martensite; Below nose: Pearlite"
      ],
      ans: 1,
      exp: "On the eutectoid TTT diagram: > 727°C (A<sub>1</sub>) is Stable Austenite; the C-curve nose lies near ≈ 550°C; isothermal transformation above the nose (~550–727°C) yields Pearlite; transformation below the nose (~240–550°C) yields Bainite; and M<sub>s</sub> ≈ 240°C to M<sub>f</sub> ≈ 25°C marks Martensite."
    },
    {
      id: "M06-029",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Why do the 1% Start and 99% End transformation curves on a TTT diagram form a C-shape with the shortest transformation time (the <em>nose</em>) around 550°C?",
      options: [
        "Near A<sub>1</sub> (727°C) diffusion is fast but thermodynamic undercooling/driving force is tiny; at low temperatures driving force is large but atomic diffusion is sluggish; around 550°C both factors balance to give the fastest transformation rate",
        "Steel melts temporarily near 550°C, allowing instantaneous liquid-state nucleation",
        "The molten salt bath freezes at 550°C, accelerating heat extraction artificially",
        "Carbon stops diffusing completely above 550°C and diffuses infinitely fast below 240°C"
      ],
      ans: 0,
      exp: "Pearlite and bainite are diffusion-controlled transformations governed by nucleation driving force (increases with undercooling below 727°C) and carbon diffusion rate (decreases exponentially as T drops). Their product peaks at the nose (~550°C), producing the minimum incubation time and C-shaped curves."
    },
    {
      id: "M06-030",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "ttt",
      q: "On the eutectoid steel TTT diagram, why are the martensite start (M<sub>s</sub> ≈ 240°C) and martensite finish (M<sub>f</sub> ≈ 25°C) boundaries drawn as <strong>horizontal straight lines</strong> rather than C-curves?",
      options: [
        "Because the martensitic transformation is diffusionless (time-independent / athermal), depending solely on temperature rather than holding time",
        "Because the horizontal axis switches from time to carbon content below 240°C",
        "Because martensite takes exactly 1000 seconds to form at every temperature",
        "Because martensite only forms during slow furnace cooling above 727°C"
      ],
      ans: 0,
      exp: "Martensite forms by an instantaneous, diffusionless shear of the lattice rather than thermally activated diffusion. Because the fraction of martensite depends only on the temperature reached between M<sub>s</sub> (≈ 240°C) and M<sub>f</sub> (≈ 25°C) and NOT on holding time, M<sub>s</sub> and M<sub>f</sub> are horizontal lines."
    },
    {
      id: "M06-031",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Using the eutectoid TTT diagram, an austenitized steel part is quenched rapidly past the 550°C nose to 350°C, held isothermally at 350°C until it crosses the 99% End curve, and then air cooled to room temperature. What process is this and what microstructure results?",
      options: [
        "Martempering → 100% untempered pearlite + retained austenite",
        "Austempering → 100% bainite",
        "Spheroidizing → 100% globular cementite",
        "Full annealing → 100% coarse pearlite"
      ],
      ans: 1,
      exp: "Rapidly cooling past the 550°C nose to hold isothermally in the bainite region (~240–550°C, such as 350°C) until transformation finishes across the 99% End curve is <strong>austempering</strong>, yielding 100% bainite (good toughness without requiring a separate tempering step)."
    },
    {
      id: "M06-032",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "In diffusion-controlled case hardening (such as carburising), which mathematical relation correctly expresses the approximate case depth <em>x</em> as a function of carbon diffusivity <em>D</em> and soaking time <em>t</em>?",
      options: [
        "x ≈ D √t",
        "x ≈ √(D · t)",
        "x ≈ D · t",
        "x ≈ √(D / t)"
      ],
      ans: 1,
      exp: "From Fick's diffusion solution, case depth scales with the square root of the product of diffusivity and time: <strong>x ≈ √(Dt)</strong>. Watch the classic exam trap \"x = D√t\" — D is inside the square root (since D has units m<sup>2</sup>/s and t has units s, so √(Dt) has units of length m!)."
    },
    {
      id: "M06-033",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A pack-carburising run at 925°C produces a case depth of 0.40 mm in 2.0 hours. If the holding time is quadrupled to 8.0 hours at the exact same temperature, what case depth is obtained?",
      options: [
        "0.57 mm",
        "1.20 mm",
        "0.80 mm",
        "1.60 mm"
      ],
      ans: 2,
      exp: "Since x ≈ √(Dt) and D is constant at fixed temperature, x<sub>2</sub>/x<sub>1</sub> = √(t<sub>2</sub>/t<sub>1</sub>) = √(8.0/2.0) = √4 = 2. Thus quadrupling the time doubles the case depth: x<sub>2</sub> = 2 × 0.40 mm = 0.80 mm."
    },
    {
      id: "M06-034",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Carbon diffuses into austenitic steel during carburising at 925°C with diffusivity D = 2.0 × 10<sup>−11</sup> m<sup>2</sup>/s. Estimate the case depth <em>x</em> ≈ √(Dt) achieved after soaking for 5.0 hours.",
      options: [
        "1.80 mm",
        "0.36 mm",
        "0.60 mm",
        "0.10 mm"
      ],
      ans: 2,
      exp: "Convert holding time to seconds: t = 5.0 × 3600 = 18,000 s. Then Dt = (2.0 × 10<sup>−11</sup> m<sup>2</sup>/s)(1.8 × 10<sup>4</sup> s) = 3.6 × 10<sup>−7</sup> m<sup>2</sup>. Taking the square root: x = √(3.6 × 10<sup>−7</sup>) = 6.0 × 10<sup>−4</sup> m = 0.60 mm."
    },
    {
      id: "M06-035",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "At a constant carburising temperature, a 2.0-hour soak produces a case depth of 0.50 mm. How many hours of soaking at the same temperature are required to triple the case depth to 1.50 mm?",
      options: [
        "6.0 hours",
        "12.0 hours",
        "9.0 hours",
        "18.0 hours"
      ],
      ans: 3,
      exp: "From x ∝ √t, we have t<sub>2</sub>/t<sub>1</sub> = (x<sub>2</sub>/x<sub>1</sub>)<sup>2</sup> = (1.50 / 0.50)<sup>2</sup> = 3<sup>2</sup> = 9. Therefore t<sub>2</sub> = 9 × 2.0 hr = 18.0 hours."
    },
    {
      id: "M06-036",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A gear shaft requires a carburised case depth of x = 1.2 mm at a temperature where carbon diffusivity in γ-Fe is D = 1.6 × 10<sup>−11</sup> m<sup>2</sup>/s. Using x ≈ √(Dt), calculate the required soaking time in hours.",
      options: [
        "12.5 hours",
        "15.0 hours",
        "20.0 hours",
        "25.0 hours"
      ],
      ans: 3,
      exp: "Rearranging x ≈ √(Dt) gives t = x<sup>2</sup> / D. With x = 1.2 × 10<sup>−3</sup> m: t = (1.2 × 10<sup>−3</sup>)<sup>2</sup> / (1.6 × 10<sup>−11</sup>) = (1.44 × 10<sup>−6</sup>) / (1.6 × 10<sup>−11</sup>) = 90,000 s. Dividing by 3600 s/hr yields t = 25.0 hours."
    },
    {
      id: "M06-037",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In <strong>pack carburising</strong>, what steel grade, carburising compound composition, box sealing material, and furnace temperature are used?",
      options: [
        "Low-carbon steel; 80–85% wood charcoal + 15–20% BaCO<sub>3</sub> energiser; sealed with fireclay/asbestos; heated at 900–950°C",
        "Low-carbon steel; 50% NaCl + 50% H<sub>2</sub>O; sealed with rubber; heated at 200–300°C",
        "Cast iron; 100% pure graphite powder; sealed with wax; heated at 1400–1450°C",
        "High-carbon steel; 80–85% BaCO<sub>3</sub> + 15–20% sand; open tray; heated at 500–550°C"
      ],
      ans: 0,
      exp: "In pack carburising, low-carbon steel parts are packed in an air-tight steel box with 80–85% wood charcoal and 15–20% BaCO<sub>3</sub> energiser, sealed with fireclay or asbestos, and heated to 900–950°C (in the γ-austenite range where C solubility is high)."
    },
    {
      id: "M06-038",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Why is 15–20% barium carbonate (BaCO<sub>3</sub>) added as an <strong>energiser</strong> to wood charcoal in pack carburising?",
      options: [
        "To melt the steel surface and form a Ba–Fe alloy layer",
        "To absorb oxygen and prevent CO gas from forming inside the sealed box",
        "It thermally decomposes (BaCO<sub>3</sub> → BaO + CO<sub>2</sub>) to supply CO<sub>2</sub>, which reacts with charcoal (CO<sub>2</sub> + C → 2 CO) to generate active carbon monoxide gas",
        "To act as a quenching medium when the box is opened at 950°C"
      ],
      ans: 2,
      exp: "Solid carbon diffuses too slowly directly into steel. The energiser BaCO<sub>3</sub> decomposes (BaCO<sub>3</sub> → BaO + CO<sub>2</sub>), and CO<sub>2</sub> reacts with incandescent charcoal (CO<sub>2</sub> + C → 2 CO) to produce abundant active CO gas that delivers carbon to the steel surface."
    },
    {
      id: "M06-039",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which balanced chemical equation accurately represents the final surface carburising reaction between carbon monoxide gas and iron during pack carburising?",
      options: [
        "2 CO + 3 Fe → Fe<sub>3</sub>C + CO<sub>2</sub>",
        "CO<sub>2</sub> + 3 Fe → Fe<sub>3</sub>C + O<sub>2</sub>",
        "3 CO + Fe → FeC<sub>3</sub> + CO<sub>2</sub>",
        "CO + Fe → FeC + CO<sub>2</sub>"
      ],
      ans: 0,
      exp: "The stoichiometrically balanced carburising reaction is <strong>2 CO + 3 Fe → Fe<sub>3</sub>C + CO<sub>2</sub></strong> (with CO<sub>2</sub> recycled by charcoal back into 2 CO). Watch the classic trap \"CO + Fe → FeC + CO<sub>2</sub>\", which is both chemically unbalanced and uses the nonexistent formula FeC!"
    },
    {
      id: "M06-040",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What treatment must follow pack carburising to develop the hard wear-resistant case, and what are two major limitations of the pack carburising process?",
      options: [
        "No post-treatment is needed; limitations are high vacuum cost and toxic ammonia fumes",
        "Followed by quenching and tempering; limitations include difficulty controlling uniform case depth, high labour/time & floor space demand, poor mechanizability, and carbon-dust health hazards",
        "Followed by full annealing; limitations are extreme electricity cost and requirement for ferromagnetic alloys",
        "Followed by diffusion annealing at 1200°C; limitations are extremely high heating speed and shallow 1 μm case"
      ],
      ans: 1,
      exp: "Carburising only enriches the surface in carbon; subsequent quenching and tempering are required to transform the high-C case into hardened martensite over a tough low-C core. While pack carburising is low-cost and needs no skilled labour, it demands large floor area, is slow/labour-intensive, hard to mechanize, creates carbon dust hazards, and gives poor case-depth uniformity."
    },
    {
      id: "M06-041",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What heat source is used in <strong>flame hardening</strong>, and what are its four standard operating modes?",
      options: [
        "Electron beam in vacuum; Continuous, Batch, Isothermal, and Step",
        "Wood charcoal + BaCO<sub>3</sub> furnace; Low, Medium, High, and Sub-critical",
        "Oxy-acetylene (O<sub>2</sub> + C<sub>2</sub>H<sub>2</sub>) flame with water quench; Stationary, Progressive, Spinning, and Progressive spinning",
        "High-frequency AC copper coil with oil quench; Pack, Liquid, Gas, and Plasma"
      ],
      ans: 2,
      exp: "Flame hardening rapidly austenitizes the steel surface using an oxy-acetylene (O<sub>2</sub> + C<sub>2</sub>H<sub>2</sub>) flame followed immediately by a water quench on a moving carriage. Its four modes are Stationary, Progressive, Spinning, and Progressive spinning."
    },
    {
      id: "M06-042",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What electrical frequency range and heating mechanism operate in <strong>induction hardening</strong> of steel components?",
      options: [
        "Mains power frequency (50–60 Hz) heating the entire furnace chamber uniformly for 12 hours",
        "Direct current (0 Hz) passing resistively through the core of the workpiece",
        "Infrared laser radiation (> 10<sup>14</sup> Hz) diffusing nitrogen into the surface",
        "High-frequency alternating current (10,000–500,000 Hz, i.e., 10–500 kHz) inducing eddy currents in the surface skin, followed by a water spray ring quench"
      ],
      ans: 3,
      exp: "Induction hardening passes high-frequency AC (10,000–500,000 Hz = 10–500 kHz) through an inductor coil surrounding the part, inducing localized eddy currents in the surface skin (skin effect) to austenitize it rapidly before quenching via a water spray ring."
    },
    {
      id: "M06-043",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Why is <strong>induction hardening</strong> NOT feasible for plain low-carbon steels (e.g., 0.15 wt% C) or non-ferromagnetic alloys, despite offering rapid heating, accurate frequency-controlled case depth, and easy automation?",
      options: [
        "Low-carbon steels cannot conduct electrical eddy currents",
        "Induction hardening does not add carbon to the surface (so low-C steels lack enough carbon to form hard martensite upon quenching) and relies on electromagnetic induction/hysteresis effective in ferromagnetic steels",
        "High-frequency AC causes BaCO<sub>3</sub> to explode inside low-carbon steel",
        "Low-carbon steels melt below 500°C when exposed to 10 kHz AC"
      ],
      ans: 1,
      exp: "Induction hardening is purely a <em>thermal</em> surface hardening process—it alters no chemistry, so it cannot harden low-carbon steels (which need carburising first). Moreover, its disadvantages include high equipment/maintenance cost, unsuitability for irregular shapes, and restriction to ferromagnetic steels."
    },
    {
      id: "M06-044",
      chapter: "Ch 9: Heat Treatment & TTT Diagrams",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which set of automotive and mechanical engineering components represents classic industrial applications of <strong>induction hardening</strong>?",
      options: [
        "Aluminum aircraft fuselage skins, brass radiators, and copper busbars",
        "Porcelain insulators, refractory furnace bricks, and optical glass lenses",
        "Cast steel ingots prior to rolling and cold-drawn mild steel fencing wire",
        "Piston rods, cams, pump shafts, and spur gears"
      ],
      ans: 3,
      exp: "Induction hardening is widely automated for symmetrical ferromagnetic medium/high-carbon steel parts requiring localized surface wear resistance over a tough core, notably piston rods, cams, pump shafts, and spur gears."
    }
  ]
});
