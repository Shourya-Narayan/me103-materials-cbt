window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod15",
  questions: [
    {
      id: "M15-001",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How is metallic corrosion defined in engineering materials science, and where does the degradation process always initiate?",
      options: [
        "Reversible elastic deformation caused by cyclic loading, initiating at the geometric centre of the component",
        "Chemical or electrochemical material deterioration and mass loss with the environment, initiating at the metal surface",
        "Spontaneous magnetic demagnetisation above the Curie temperature, initiating uniformly throughout the bulk",
        "Deliberate grain refinement caused by slow furnace cooling, initiating strictly along internal twin boundaries"
      ],
      ans: 1,
      exp: "Corrosion is the gradual deterioration and mass loss of a material resulting from unavoidable chemical or electrochemical reaction with its environment. Because environmental reactants (O<sub>2</sub>, moisture, electrolytes) first contact the exterior, corrosion invariably initiates at the metal SURFACE."
    },
    {
      id: "M15-002",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Comparing atomic radii of structural metals (r<sub>Fe</sub> = 126 pm, r<sub>Cu</sub> = 128 pm, r<sub>Al</sub> = 143 pm) with oxygen (r<sub>O</sub> = 73 pm), why does atmospheric oxygen readily initiate surface oxide formation on these metals?",
      options: [
        "Oxygen atoms have zero atomic radius and pass through the metal without interacting chemically",
        "Oxygen atoms are larger than metal atoms and mechanically cleave the metal lattice in half",
        "Interstitial gaps between Fe, Cu, and Al surface atoms are strictly smaller than 30 pm, trapping oxygen outside the surface",
        "Surface metal atoms leave interstitial surface gaps of ≈90–100 pm, allowing small oxygen atoms (r<sub>O</sub> = 73 pm) to diffuse readily into interstitial sites"
      ],
      ans: 3,
      exp: "With metallic radii of 126–143 pm (Fe: 126 pm, Cu: 128 pm, Al: 143 pm), the interstitial openings between surface metal atoms measure roughly 90–100 pm. Because atomic oxygen is much smaller (r<sub>O</sub> = 73 pm), it readily penetrates these surface interstitial sites to react and nucleate an oxide."
    },
    {
      id: "M15-003",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why do dry neutral NaCl crystals sitting on dry iron fail to corrode it directly, whereas saline moisture aggressively accelerates rusting?",
      options: [
        "Dry neutral NaCl has a melting point below room temperature and evaporates before touching iron",
        "In dry air, Na<sup>+</sup> ions shrink to 15 pm and passivate the iron surface completely",
        "Moisture converts NaCl into chromium oxide that strips electrons directly from iron nuclei",
        "Dry neutral salt lacks mobile ions (r<sub>Na</sub> = 180 pm); in moisture it forms hydrated Na<sup>+</sup> (≈95 pm) and Cl<sup>−</sup> electrolyte ions"
      ],
      ans: 3,
      exp: "Dry neutral NaCl crystals do not corrode iron directly (neutral Na has r<sub>Na</sub> = 180 pm and no ionic mobility exists in the dry solid). Once moisture is present, NaCl dissociates into mobile hydrated Na<sup>+</sup> (r<sub>Na<sup>+</sup></sub> ≈ 95 pm) and Cl<sup>−</sup> ions, creating a highly conductive electrolyte that rapidly accelerates electrochemical corrosion."
    },
    {
      id: "M15-004",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "When an adherent surface oxide film grows under solid-state diffusion control, which kinetic law relates oxide thickness x, diffusivity D, and exposure time t?",
      options: [
        "Cubic law: x ∝ (Dt)<sup>3</sup>",
        "Parabolic growth law: x ∝ √(Dt)",
        "Inverse-square law: x ∝ 1/(Dt)<sup>2</sup>",
        "Linear law: x ∝ Dt"
      ],
      ans: 1,
      exp: "For a continuous, adherent oxide film where further reaction requires ions to diffuse through the existing oxide barrier, thickness follows the Parabolic Growth Law: x ∝ √(Dt). As x grows thicker, the diffusion path lengthens and the oxidation rate dx/dt slows down."
    },
    {
      id: "M15-005",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "An adherent passivating oxide layer grows on an alloy according to the parabolic growth law x ∝ √(Dt). At a constant temperature, the oxide thickness reaches 2.0 μm after 4 hours. How many total hours are required to grow the oxide layer to 6.0 μm?",
      options: [
        "18.0 hours",
        "24.0 hours",
        "12.0 hours",
        "36.0 hours"
      ],
      ans: 3,
      exp: "Since x ∝ √(Dt) at constant D, we have x<sub>2</sub>/x<sub>1</sub> = √(t<sub>2</sub>/t<sub>1</sub>) ⇒ t<sub>2</sub> = t<sub>1</sub>(x<sub>2</sub>/x<sub>1</sub>)<sup>2</sup> = 4 × (6.0 / 2.0)<sup>2</sup> = 4 × 9 = 36.0 hours."
    },
    {
      id: "M15-006",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "At temperature T<sub>1</sub> (diffusivity D<sub>1</sub>), a diffusion-controlled oxide film reaches thickness x<sub>1</sub> = 3.0 μm in 9 hours. If the temperature is increased so that diffusivity quadruples (D<sub>2</sub> = 4D<sub>1</sub>), what oxide thickness x<sub>2</sub> forms after 16 hours?",
      options: [
        "12.0 μm",
        "6.0 μm",
        "16.0 μm",
        "8.0 μm"
      ],
      ans: 3,
      exp: "From parabolic kinetics x ∝ √(Dt), the thickness ratio is x<sub>2</sub>/x<sub>1</sub> = √[(D<sub>2</sub>t<sub>2</sub>)/(D<sub>1</sub>t<sub>1</sub>)] = √[(4D<sub>1</sub> × 16)/(D<sub>1</sub> × 9)] = √(64/9) = 8/3. Therefore, x<sub>2</sub> = 3.0 × (8/3) = 8.0 μm."
    },
    {
      id: "M15-007",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How does Dry (Chemical) Corrosion fundamentally differ from Wet (Electrochemical) Corrosion?",
      options: [
        "Dry corrosion requires aqueous saltwater electrolytes, whereas wet corrosion occurs only in vacuum",
        "Dry corrosion attacks only non-metals, whereas wet corrosion attacks only ceramics",
        "Dry corrosion is direct oxidation by hot gases without moisture; wet corrosion involves an electrolyte (galvanic or cell corrosion)",
        "Dry corrosion never forms surface oxides, whereas wet corrosion always forms protective Al<sub>2</sub>O<sub>3</sub>"
      ],
      ans: 2,
      exp: "Dry (chemical) corrosion occurs by direct chemical attack of dry gases (such as hot O<sub>2</sub>, SO<sub>2</sub>, or Cl<sub>2</sub>) on a metal without any liquid electrolyte. Wet (electrochemical) corrosion involves an aqueous/liquid electrolyte supporting anodic and cathodic reactions, including galvanic corrosion and general electrochemical cells."
    },
    {
      id: "M15-008",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "When two dissimilar metals are electrically connected while immersed in a common conductive electrolyte, galvanic corrosion occurs. Which statement correctly describes the electrochemical behaviour?",
      options: [
        "Both metals corrode at identical rates regardless of their relative electrode potentials",
        "No current flows between the two metals unless an external high-voltage battery is connected",
        "The less noble (more anodic) metal undergoes accelerated oxidation/corrosion while the nobler (more cathodic) metal is protected",
        "The nobler (more cathodic) metal dissolves rapidly while the less noble metal is completely protected"
      ],
      ans: 2,
      exp: "In a galvanic couple inside an electrolyte, the potential difference drives electrons from the more anodic (less noble) metal to the more cathodic (nobler) metal. Consequently, the anodic metal oxidises and corrodes preferentially while the cathodic metal is protected."
    },
    {
      id: "M15-009",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Formula",
      diagram: "pbr",
      q: "Referring to the oxide-film stability schematic, which expression correctly defines the Pilling–Bedworth Ratio (PBR)?",
      options: [
        "PBR = (Density of metal oxide) / (Density of pure metal)",
        "PBR = (Volume of metal oxide formed) / (Volume of metal consumed to form the oxide)",
        "PBR = (Mass of oxygen absorbed) / (Surface area of the corroded plate)",
        "PBR = (Volume of metal consumed) / (Volume of metal oxide formed)"
      ],
      ans: 1,
      exp: "The Pilling–Bedworth Ratio (correctly spelled Pilling–Bedworth, NOT 'Pulling Bed Worth'!) is defined as PBR = (Volume of metal oxide formed) / (Volume of metal consumed to form the oxide)."
    },
    {
      id: "M15-010",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "pbr",
      q: "On the Pilling–Bedworth Ratio diagram, what film stress state, morphology, and representative oxide examples correspond to the regime PBR &lt; 1?",
      options: [
        "Excessive compressive stress → thick oxide buckles and spalls off (e.g., Fe<sub>2</sub>O<sub>3</sub>)",
        "Optimal mild compression → continuous, compact, passivating oxide film (e.g., Al<sub>2</sub>O<sub>3</sub>, Cr<sub>2</sub>O<sub>3</sub>)",
        "Oxide volume is too small → tensile stress → porous, cracked, non-protective film allowing ongoing oxygen penetration (e.g., MgO, Na<sub>2</sub>O)",
        "Zero mechanical stress → liquid oxide layer that instantly seals all surface cracks (e.g., Al<sub>2</sub>O<sub>3</sub>)"
      ],
      ans: 2,
      exp: "When PBR &lt; 1, the oxide occupies less volume than the consumed metal, putting the film in tension. It cracks and becomes porous and non-protective (e.g., MgO, Na<sub>2</sub>O), allowing oxygen to penetrate continuously to the bare metal."
    },
    {
      id: "M15-011",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "pbr",
      q: "According to the Pilling–Bedworth Ratio diagram, which PBR range produces a safe, continuous, compact, and adherent passivating oxide film, and which oxides exemplify this regime?",
      options: [
        "1 &lt; PBR &lt; 2; exemplified by Al<sub>2</sub>O<sub>3</sub> and Cr<sub>2</sub>O<sub>3</sub>",
        "PBR = 0; exemplified by gold and platinum",
        "PBR &gt; 2; exemplified by Fe<sub>2</sub>O<sub>3</sub> rust",
        "PBR &lt; 1; exemplified by MgO and Na<sub>2</sub>O"
      ],
      ans: 0,
      exp: "In the safe/protective range 1 &lt; PBR &lt; 2, the oxide volume slightly exceeds the consumed metal volume, yielding a continuous, compact, tightly adherent film under mild compression that passivates the underlying metal — notably Al<sub>2</sub>O<sub>3</sub> on aluminium and Cr<sub>2</sub>O<sub>3</sub> on chromium/stainless steel."
    },
    {
      id: "M15-012",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "pbr",
      q: "In the Pilling–Bedworth Ratio diagram, why does iron rust (Fe<sub>2</sub>O<sub>3</sub>, with PBR &gt; 2) fail to protect underlying steel from continued corrosion?",
      options: [
        "Because PBR &gt; 2 implies zero diffusivity of oxygen through air",
        "Fe<sub>2</sub>O<sub>3</sub> sublimes directly into gas at ambient temperature",
        "Its volume is smaller than the consumed iron, creating tensile pores",
        "Excessive compressive stress buckles, cracks, and flakes the oxide off, exposing fresh iron"
      ],
      ans: 3,
      exp: "For PBR &gt; 2 (such as Fe<sub>2</sub>O<sub>3</sub> rust), the oxide occupies more than twice the volume of consumed iron. The resulting excessive compressive stress causes the oxide scale to buckle, crack, and spall/flake away, exposing fresh iron to ongoing corrosion."
    },
    {
      id: "M15-013",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "pbr",
      q: "Using the three regimes of the Pilling–Bedworth Ratio diagram, which row accurately assigns MgO, Cr<sub>2</sub>O<sub>3</sub>, and Fe<sub>2</sub>O<sub>3</sub> to their PBR category and protective behaviour?",
      options: [
        "MgO: PBR &lt; 1 (porous/non-protective); Cr<sub>2</sub>O<sub>3</sub>: 1 &lt; PBR &lt; 2 (compact/protective); Fe<sub>2</sub>O<sub>3</sub>: PBR &gt; 2 (buckling/flaking)",
        "MgO: PBR &lt; 1 (compact/protective); Cr<sub>2</sub>O<sub>3</sub>: PBR &gt; 2 (compact/protective); Fe<sub>2</sub>O<sub>3</sub>: 1 &lt; PBR &lt; 2 (flaking)",
        "MgO: PBR &gt; 2 (flaking); Cr<sub>2</sub>O<sub>3</sub>: 1 &lt; PBR &lt; 2 (protective); Fe<sub>2</sub>O<sub>3</sub>: PBR &lt; 1 (porous)",
        "MgO: 1 &lt; PBR &lt; 2 (protective); Cr<sub>2</sub>O<sub>3</sub>: PBR &lt; 1 (porous); Fe<sub>2</sub>O<sub>3</sub>: PBR &gt; 2 (flaking)"
      ],
      ans: 0,
      exp: "MgO (and Na<sub>2</sub>O) fall in PBR &lt; 1 (tensile, porous/cracked, non-protective); Cr<sub>2</sub>O<sub>3</sub> (and Al<sub>2</sub>O<sub>3</sub>) lie in 1 &lt; PBR &lt; 2 (continuous, adherent, protective); Fe<sub>2</sub>O<sub>3</sub> lies in PBR &gt; 2 (high compressive stress, flaking/spalling)."
    },
    {
      id: "M15-014",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Numerical",
      diagram: "pbr",
      q: "Aluminium oxidises via 2 Al + (3/2) O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub>. Given M<sub>Al</sub> = 27 g/mol, ρ<sub>Al</sub> = 2.70 g/cm<sup>3</sup>, M<sub>Al<sub>2</sub>O<sub>3</sub></sub> = 102 g/mol, and ρ<sub>Al<sub>2</sub>O<sub>3</sub></sub> = 3.97 g/cm<sup>3</sup>, calculate the Pilling–Bedworth Ratio of Al<sub>2</sub>O<sub>3</sub> and classify the film.",
      options: [
        "PBR = 1.85 → unstable spalling oxide",
        "PBR = 2.57 → dangerous flaking oxide",
        "PBR = 1.29 → compact, protective oxide",
        "PBR = 0.78 → porous non-protective oxide"
      ],
      ans: 2,
      exp: "Each mole of Al<sub>2</sub>O<sub>3</sub> consumes n = 2 moles of Al. Volume of oxide per mole = M<sub>Al<sub>2</sub>O<sub>3</sub></sub>/ρ<sub>Al<sub>2</sub>O<sub>3</sub></sub> = 102/3.97 = 25.69 cm<sup>3</sup>. Volume of Al consumed = 2 × (27/2.70) = 20.0 cm<sup>3</sup>. Thus PBR = 25.69 / 20.0 = 1.285 ≈ 1.29, squarely inside 1 &lt; PBR &lt; 2 (safe, protective film)."
    },
    {
      id: "M15-015",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "During high-temperature dry oxidation of a light-metal coupon, 12.5 cm<sup>3</sup> of pure metal is consumed to generate 10.0 cm<sup>3</sup> of surface oxide. What is the PBR and what oxide behaviour is expected?",
      options: [
        "PBR = 0.40 → continuous passivating film with zero stress",
        "PBR = 2.25 → thick spalling film under compressive stress",
        "PBR = 0.80 → porous, cracked, non-protective film under tensile stress",
        "PBR = 1.25 → compact, adherent protective film"
      ],
      ans: 2,
      exp: "By definition, PBR = V<sub>oxide</sub> / V<sub>metal</sub> = 10.0 / 12.5 = 0.80. Since PBR &lt; 1, the oxide cannot completely cover the consumed metal area, generating tensile cracks and a porous, non-protective scale."
    },
    {
      id: "M15-016",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which trio lists the three primary engineering corrosion-prevention methods emphasised in ME 103?",
      options: [
        "Protective coatings (metallic, ceramic, polymer), painting, and alloying / designing with corrosion-resistant materials",
        "Cold rolling to increase dislocations, quenching in brine, and adding dry NaCl crystals",
        "Increasing surface roughness, raising operating temperature, and coupling dissimilar metals in seawater",
        "Applying pure unalloyed iron coatings, removing chromium from steels, and increasing humidity"
      ],
      ans: 0,
      exp: "The three primary corrosion-prevention strategies are (1) protective coatings (metallic, ceramic, or polymer barriers), (2) painting, and (3) alloying or designing components with inherently corrosion-resistant materials."
    },
    {
      id: "M15-017",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What is the nominal chemical composition of 18–8 stainless steel, and what gives it outstanding corrosion resistance?",
      options: [
        "18% Al + 8% Co + Fe (balance); resistance comes from a porous MgO layer",
        "80% Ni + 18% Cr + 2% C; resistance comes from Fe<sub>2</sub>O<sub>3</sub> flaking",
        "18% Cr + 8–12% Ni + Fe (bal.); Cr forms an adherent Cr<sub>2</sub>O<sub>3</sub> passive film",
        "18% Ni + 8–12% Cu + Fe (balance); resistance comes from a CuO film"
      ],
      ans: 2,
      exp: "18–8 stainless steel contains 18% Cr + 8–12% Ni + Fe (balance). Chromium reacts rapidly with oxygen to form a continuous, adherent Cr<sub>2</sub>O<sub>3</sub> passive layer (1 &lt; PBR &lt; 2) that shields corrosion-resistant structures."
    },
    {
      id: "M15-018",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which nominal composition and primary industrial application correctly correspond to Kanthal wire?",
      options: [
        "76% Ni + 16% Cr + 7% Fe; marine propeller shafts",
        "24% Cr + 5.5% Al + 2% Co + Fe (balance); high-temperature heating elements",
        "80% Ni + 20% Cr; low-temperature cryogenic wiring",
        "18% Cr + 8–12% Ni + Fe (balance); architectural decorative panels"
      ],
      ans: 1,
      exp: "Kanthal is an iron-based Fe–Cr–Al–Co alloy consisting of 24% Cr + 5.5% Al + 2% Co + Fe (balance), widely employed for high-temperature furnace heating elements because it forms highly protective Al<sub>2</sub>O<sub>3</sub>/Cr<sub>2</sub>O<sub>3</sub> oxide scales."
    },
    {
      id: "M15-019",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What is the standard chemical composition and engineering application of Nichrome wire?",
      options: [
        "80% Fe + 20% Ni; structural bridge cables",
        "76% Ni + 16% Cr + 7% Fe; cutting tool bits",
        "24% Cr + 5.5% Al + 2% Co + Fe (balance); turbine blades",
        "80% Ni + 20% Cr; electrical resistance heating coils"
      ],
      ans: 3,
      exp: "Nichrome consists of 80% Ni + 20% Cr. Its high electrical resistivity combined with a protective adherent Cr<sub>2</sub>O<sub>3</sub> scale makes it ideal for resistance heating coils in toasters, hair dryers, and furnaces."
    },
    {
      id: "M15-020",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which name, nominal composition, and classification accurately identify the famous nickel-based high-temperature superalloy covered in Ch 17?",
      options: [
        "'Inconel' — 76% Ni + 16% Cr + 7% Fe (+ traces), a very hard high-temperature corrosion-resistant superalloy",
        "'Niconal' — 24% Cr + 5.5% Al + 2% Co + Fe (balance), a magnetic transformer core",
        "'Niconal' — 76% Ni + 16% Cr + 7% Fe (+ traces), a soft low-temperature solder",
        "'Inconel' — 80% Fe + 16% Al + 4% Cu, a non-magnetic cryogenic bronze"
      ],
      ans: 0,
      exp: "The superalloy is spelled INCONEL (NOT the common notebook misspelling 'Niconal'!). Its composition is 76% Ni + 16% Cr + 7% Fe (+ traces), renowned as a very hard, oxidation- and corrosion-resistant high-temperature superalloy."
    },
    {
      id: "M15-021",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Grouping the four corrosion/oxidation-resistant alloys (18–8 stainless steel, Kanthal, Nichrome, Inconel) by their base (majority) element, which pairing is strictly correct?",
      options: [
        "Fe-based: Nichrome & Inconel; Ni-based: 18–8 stainless steel & Kanthal",
        "Fe-based: 18–8 stainless steel & Kanthal; Ni-based: Nichrome (80% Ni) & Inconel (76% Ni)",
        "Fe-based: 18–8 stainless steel & Inconel; Ni-based: Kanthal & Nichrome",
        "Cr-based: Kanthal & 18–8 stainless steel; Fe-based: Nichrome & Inconel"
      ],
      ans: 1,
      exp: "18–8 stainless steel (Fe bal., 18% Cr, 8–12% Ni) and Kanthal (Fe bal., 24% Cr, 5.5% Al, 2% Co) are iron-based alloys, whereas Nichrome (80% Ni, 20% Cr) and Inconel (76% Ni, 16% Cr, 7% Fe) are nickel-based alloys."
    },
    {
      id: "M15-022",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "From an oxidation-kinetics and PBR perspective, why does alloying 5.5% Al alongside 24% Cr in Kanthal enable reliable service as an extreme-temperature heating element?",
      options: [
        "Al reacts preferentially to produce Fe<sub>2</sub>O<sub>3</sub> (PBR &gt; 2) that flakes off and exposes fresh conductive iron",
        "Both Al and Cr form low-melting liquid oxides (PBR &lt; 1) that wash impurities off the wire",
        "Al completely stops oxygen from touching the wire by generating a diamagnetic repulsive field",
        "Both Al and Cr form dense adherent scales (1 &lt; PBR &lt; 2) enforcing slow parabolic diffusion growth x ∝ √(Dt)"
      ],
      ans: 3,
      exp: "Al<sub>2</sub>O<sub>3</sub> and Cr<sub>2</sub>O<sub>3</sub> both fall in the optimal 1 &lt; PBR &lt; 2 zone, forming continuous, adherent, high-melting protective barriers. Once established, further high-temperature oxidation is diffusion-limited and slows parabolically (x ∝ √(Dt))."
    },
    {
      id: "M15-023",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Bravais Lattices] Among the 14 Bravais lattices, the Monoclinic crystal system has exactly TWO Bravais lattice centerings. Which pair is correct?",
      options: [
        "Simple (Primitive, P) and Face-centred (F)",
        "Body-centred (I) and Face-centred (F)",
        "Simple (Primitive, P) and End-centred / Base-centred (C)",
        "Simple (Primitive, P) and Body-centred (I)"
      ],
      ans: 2,
      exp: "CLASSIC EXAM TRAP: Monoclinic has Simple (P) and END-CENTRED / Base-centred (C) — NOT Body-centred! (By contrast, Tetragonal has Simple + Body-centred, Cubic has P/I/F, and Orthorhombic has all four P/I/F/C.)"
    },
    {
      id: "M15-024",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Non-Ferrous Phase Reactions] Students frequently confuse the invariant phase transformations of the Al–Si (LM6) and Cu–Al (aluminium bronze) alloy systems. Which classification is accurate?",
      options: [
        "Al–Si is a Eutectic system (liquid → two solids), whereas Cu–Al exhibits a Eutectoid transformation (one solid → two solids)",
        "Both Al–Si and Cu–Al are strictly isomorphous solid-solution systems with no invariant reactions",
        "Al–Si is a Peritectic system, whereas Cu–Al is a Monotectic system",
        "Al–Si is a Eutectoid system, whereas Cu–Al is a Eutectic system"
      ],
      ans: 0,
      exp: "CLASSIC EXAM TRAP: Al–Si (casting alloy such as LM6) undergoes a EUTECTIC reaction (L → α + β), whereas Cu–Al (aluminium bronze) undergoes a solid-state EUTECTOID transformation (β → α + γ<sub>2</sub>). Never swap eutectic and eutectoid!"
    },
    {
      id: "M15-025",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Tensile Testing] In a tensile test with original gauge length L<sub>0</sub>, instantaneous length L, and engineering strain ε = ΔL/L<sub>0</sub>, which expression gives the exact True Strain ε<sub>T</sub> prior to necking?",
      options: [
        "ε<sub>T</sub> = ε(1 + ε)",
        "ε<sub>T</sub> = ln(1 + ε)",
        "ε<sub>T</sub> = (L − L<sub>0</sub>) / L",
        "ε<sub>T</sub> = ΔL / L<sub>0</sub>"
      ],
      ans: 1,
      exp: "CLASSIC EXAM TRAP: ΔL/L<sub>0</sub> is engineering strain ε, NOT true strain! Integrating incremental strain dε<sub>T</sub> = dL/L from L<sub>0</sub> to L gives True Strain ε<sub>T</sub> = ln(L/L<sub>0</sub>) = ln(1 + ε)."
    },
    {
      id: "M15-026",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Magnetism Formula Audit] A student wrote four formulas on a revision card for Ch 15 magnetism. Which single entry contains the classic formula error that must be corrected?",
      options: [
        "Relative permeability relation: μ<sub>r</sub> = 1 + χ (dimensionless)",
        "Magnetising field strength: H = B / (μ<sub>0</sub>μ<sub>r</sub>) (in A/m)",
        "Magnetic susceptibility: χ = M / B (in A/T)",
        "Magnetic flux density: B = Φ / A (in Tesla, T = Wb/m<sup>2</sup>)"
      ],
      ans: 2,
      exp: "CLASSIC EXAM TRAP: Magnetic susceptibility is χ = M/H (dimensionless, since both M and H are in A/m) — NOT M/B! All three other entries (B = Φ/A, μ<sub>r</sub> = 1 + χ, and H = B/(μ<sub>0</sub>μ<sub>r</sub>)) are strictly correct."
    },
    {
      id: "M15-027",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Diffusion & Carburising Case Depth] In both pack/gas carburising of steel and diffusion-controlled oxidation, how does the characteristic penetration / case depth x scale with diffusivity D and time t?",
      options: [
        "x ≈ √(Dt) (square-root in the product Dt)",
        "x ≈ D√t (linear in D, square-root in t)",
        "x ≈ t/√D (inversely proportional to √D)",
        "x ≈ D<sup>2</sup>t (quadratic in D, linear in t)"
      ],
      ans: 0,
      exp: "CLASSIC EXAM TRAP: Case depth / diffusion penetration distance scales as x ≈ √(Dt) (dimensionally √[(m<sup>2</sup>/s)·s] = m) — NOT D√t! Writing D outside the radical breaks both dimensional homogeneity and parabolic kinetics."
    },
    {
      id: "M15-028",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Polymer Structures] Students often mix up the chemical structures of Polystyrene and Polyester. Which statement accurately distinguishes their repeating molecular structures?",
      options: [
        "Polystyrene contains ester linkages (–COO–) inside its backbone, whereas Polyester has pendant benzene rings on an all-carbon chain",
        "Polystyrene has pendant phenyl rings (–C<sub>6</sub>H<sub>5</sub>) on a C–C chain, whereas Polyester has ester linkages (–COO–) in its main chain",
        "Both Polystyrene and Polyester are identical addition polymers differing only in molecular weight",
        "Polystyrene contains chlorine side groups (–Cl), whereas Polyester contains purely fluorine atoms (–F)"
      ],
      ans: 1,
      exp: "CLASSIC EXAM TRAP: Polystyrene (–[CH<sub>2</sub>–CH(C<sub>6</sub>H<sub>5</sub>)]<sub>n</sub>–) is an addition polymer with a bulky pendant phenyl (benzene) side group attached to a C–C backbone; Polyester (e.g., PET) is a step-growth/condensation polymer featuring –COO– ester functional groups within the main backbone."
    },
    {
      id: "M15-029",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Bonding Energy Units] Given that 1 eV/atom ≈ 96.5 kJ/mol, which numerical range correctly states the typical bond energy of primary chemical bonds (ionic, covalent, metallic) in both unit systems?",
      options: [
        "100–1000 eV/atom, equivalent to ~1–10 kJ/mol",
        "100–1000 kJ/mol, equivalent to ~100–1000 eV/atom",
        "0.01–0.1 kJ/mol, equivalent to ~10–100 eV/atom",
        "100–1000 kJ/mol, equivalent to ~1–10 eV/atom"
      ],
      ans: 3,
      exp: "CLASSIC EXAM TRAP: Primary bond energies span roughly 100–1000 kJ/mol, which equals ~1–10 eV per bond/atom (since 1 eV/atom ≈ 96.5 kJ/mol). Writing '100–1000 eV' confuses molar kJ/mol values with per-atom eV values — an error of nearly 100×!"
    },
    {
      id: "M15-030",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Allotropy of Pure Iron] Upon heating pure iron above the γ-Fe (FCC) stability range, at what exact temperature does it transform into high-temperature δ-Fe (BCC) before melting at 1538 °C?",
      options: [
        "1394 °C",
        "727 °C",
        "912 °C",
        "1895 °C"
      ],
      ans: 0,
      exp: "CLASSIC EXAM TRAP: Pure iron transforms α-Fe (BCC) → γ-Fe (FCC) at 912 °C, γ-Fe (FCC) → δ-Fe (BCC) at 1394 °C, and melts at 1538 °C. Watch out for the notorious typo '1895 °C', which is well above iron's melting point!"
    },
    {
      id: "M15-031",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Weiss Zone Law & Crystallographic Brackets] Applying the Weiss Zone Law with strict crystallographic bracket notation, which statement is completely valid?",
      options: [
        "The specific direction (1<span class=\"bar\">1</span>0) lies in the specific plane [111] because (1)(1) + (−1)(1) + (0)(1) = 0",
        "The plane family ⟨111⟩ lies parallel to direction family {1<span class=\"bar\">1</span>0} because their cross product equals zero",
        "The specific direction [1<span class=\"bar\">1</span>0] lies in the specific plane (111) because hu + kv + lw = (1)(1) + (1)(−1) + (1)(0) = 0",
        "The specific direction [111] lies in the specific plane (111) because (1)(1) + (1)(1) + (1)(1) = 3 ≠ 0"
      ],
      ans: 2,
      exp: "CLASSIC EXAM TRAP: Square brackets [u v w] ALWAYS denote a specific crystal direction and parentheses (h k l) ALWAYS denote a specific crystal plane (while ⟨u v w⟩ = direction family, {h k l} = plane family). By Weiss Zone Law, [1<span class=\"bar\">1</span>0] lies in (111) since hu + kv + lw = (1)(1) + (1)(−1) + (1)(0) = 0."
    },
    {
      id: "M15-032",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Ion Implantation Formula & Terminology Audit] A student's summary sheet states: 'Total ion range is R = ∫<sub>0</sub><sup>R</sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}, and the standard deviation ΔR<sub>p</sub> is called struggle.' Which option fixes BOTH errors simultaneously?",
      options: [
        "Replace upper limit R with E<sub>0</sub> (initial ion energy), and rename 'struggle' to 'straggle'",
        "Replace upper limit R with E<sub>0</sub>, and rename 'struggle' to 'segregation'",
        "Keep upper limit R unchanged, and rename 'struggle' to 'straggle'",
        "Replace upper limit R with ∞, and rename 'struggle' to 'spiking'"
      ],
      ans: 0,
      exp: "CLASSIC EXAM TRAP: The range integral integrates over ion energy from 0 to initial energy E<sub>0</sub> (NOT R): R = ∫<sub>0</sub><sup>E<sub>0</sub></sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}. Furthermore, the statistical standard deviation ΔR<sub>p</sub> of projected range is spelled STRAGGLE (NOT 'struggle'!)."
    },
    {
      id: "M15-033",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Semiconductor Constants Audit] Which row of room-temperature (300 K) silicon and germanium data is completely free of the classic ME 103 numerical traps?",
      options: [
        "E<sub>g</sub>(Si, 300 K) = 1.12 eV; E<sub>g</sub>(Si, 0 K) = 1.17 eV; E<sub>g</sub>(Ge, 300 K) = 0.66–0.72 eV; post-implant Si anneal = 800–1000 °C",
        "E<sub>g</sub>(Si, 300 K) = 0.72 eV; E<sub>g</sub>(Ge, 300 K) = 1.12 eV; MGS reduction = SiO<sub>2</sub> + C ⇌ Si + CO",
        "E<sub>g</sub>(Si, 300 K) = 1.12 eV; E<sub>g</sub>(Si, 0 K) = 1.16 eV; trichlorosilane synthesis = Si + HCl → SiHCl<sub>3</sub> + H<sub>2</sub>",
        "E<sub>g</sub>(Si, 300 K) = 1.16 eV; E<sub>g</sub>(Ge, 300 K) = 0.66–0.72 eV; post-implant Si anneal = 1800–1000 °C"
      ],
      ans: 0,
      exp: "CLASSIC EXAM TRAP: At 300 K, E<sub>g</sub>(Si) = 1.12 eV (NOT 1.16 eV!), E<sub>g</sub>(Si, 0 K) = 1.17 eV, E<sub>g</sub>(Ge) = 0.66–0.72 eV, and post-implant annealing is performed at 800–1000 °C for ~30 min (NOT 1800–1000 °C)."
    },
    {
      id: "M15-034",
      chapter: "Ch 17 & 19: Oxidation, Corrosion & Exam Traps",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "[Exam Trap — Steel Heat Treatment] During the normalizing heat treatment of carbon steel, the workpiece is heated 30–50 °C above the upper critical temperature (A<sub>3</sub> or A<sub>cm</sub>) and soaked briefly before cooling in still air. What is the true metallurgical purpose of holding at that temperature?",
      options: [
        "To temper pre-existing martensite into soft spheroidite below 400 °C",
        "To achieve complete austenitization (uniform austenite) before still-air cooling refines the steel",
        "To melt cementite completely into liquid ledeburite prior to water quenching",
        "Solely to complete cold-work recrystallization below A<sub>1</sub> without forming austenite"
      ],
      ans: 1,
      exp: "CLASSIC EXAM TRAP: Heating steel above A<sub>3</sub> / A<sub>cm</sub> during normalizing is held specifically for complete AUSTENITIZATION — NOT merely recrystallization! Still-air cooling from the homogeneous austenite field then produces a fine, uniform pearlitic microstructure with improved strength and toughness."
    }
  ]
});
