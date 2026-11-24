window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod10",
  questions: [
    {
      id: "M10-001",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which pair of mechanical properties correctly contrasts a material's ability to regain its original dimensions completely after load removal versus undergoing permanent non-reversible deformation without fracture?",
      options: [
        "Stiffness versus toughness",
        "Elasticity versus plasticity",
        "Resilience versus brittleness",
        "Hardness versus machinability"
      ],
      ans: 1,
      exp: "Elasticity is the property by which a deformed material regains its original dimensions completely upon removal of the external load. Plasticity is the ability to undergo permanent (non-reversible) deformation without fracturing."
    },
    {
      id: "M10-002",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "Which statement accurately distinguishes ductility from malleability in engineering materials?",
      options: [
        "Ductility is the ability to be drawn into thin wires under tensile stress, whereas malleability is the ability to be hammered or rolled into thin sheets under compressive stress",
        "Ductility is the ability to be hammered into thin sheets under compression, whereas malleability is drawing into thin wires under tension",
        "Ductility applies only to brittle ceramics at high temperature, whereas malleability applies exclusively to elastomers at room temperature",
        "Both ductility and malleability measure elastic energy absorption prior to permanent yielding under cyclic shear loading"
      ],
      ans: 0,
      exp: "Classic exam trap: do not swap the loading modes! Ductility describes large plastic elongation allowing a material to be drawn into thin wires under TENSILE stress, while malleability describes deformation into thin sheets by hammering or rolling under COMPRESSIVE stress."
    },
    {
      id: "M10-003",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "A component made of window glass or grey cast iron snaps abruptly under overload with virtually no prior visible permanent elongation. Which mechanical property governs this fracture behaviour?",
      options: [
        "Brittleness",
        "Creep resistance",
        "Malleability",
        "Plasticity"
      ],
      ans: 0,
      exp: "Brittleness is the tendency of a material (such as glass or cast iron) to fracture suddenly with little or no prior plastic deformation."
    },
    {
      id: "M10-004",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In mechanical design, stiffness specifically represents a material's resistance to which phenomenon, and by what parameter is it quantified?",
      options: [
        "Resistance to surface scratching, quantified by indentation depth",
        "Resistance to fracture under impact, quantified by fracture strain",
        "Resistance to slow thermal elongation, quantified by steady-state creep rate",
        "Resistance to elastic deformation, quantified by Young's modulus E = Δσ/Δε"
      ],
      ans: 3,
      exp: "Stiffness is the resistance of a material to elastic deformation under load. It is quantified by the elastic (Young's) modulus E = Δσ/Δε, the slope of the linear elastic region of the stress–strain curve."
    },
    {
      id: "M10-005",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "How does toughness differ fundamentally from resilience for an engineering metal subjected to tensile loading?",
      options: [
        "Toughness is the total energy absorbed per unit volume up to fracture, whereas resilience is the energy absorbed elastically per unit volume up to the elastic limit",
        "Toughness measures resistance to surface abrasion, whereas resilience measures maximum load capacity before necking",
        "Toughness is the energy absorbed elastically under sudden impact, whereas resilience is the total plastic energy absorbed up to fracture",
        "Toughness applies strictly to compressive loading, whereas resilience applies strictly to cyclic fatigue loading"
      ],
      ans: 0,
      exp: "Both are energies per unit volume (J/m³), but over different intervals: resilience is the elastic energy absorbed per unit volume up to the elastic limit (recoverable upon unloading), whereas toughness is the total energy (elastic + plastic) absorbed per unit volume up to fracture (full area under the σ–ε curve)."
    },
    {
      id: "M10-006",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "A gas-turbine blade operating at elevated temperature slowly elongates permanently over thousands of hours while carrying a steady centrifugal load below its yield strength. Which failure mechanism is occurring?",
      options: [
        "Brittle cleavage",
        "Fatigue fracture",
        "Creep",
        "Elastic buckling"
      ],
      ans: 2,
      exp: "Creep is slow, progressive, permanent (time-dependent) deformation occurring under a CONSTANT load sustained over a long period, especially pronounced at high temperatures."
    },
    {
      id: "M10-007",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A rotating steel drive shaft suddenly fractures after millions of revolutions even though the peak operating stress never exceeded half of the steel's static ultimate tensile strength (UTS). Which phenomenon caused this failure?",
      options: [
        "Creep under constant static load",
        "Loss of machinability due to surface oxidation",
        "Plastic necking beyond the lower yield point",
        "Fatigue under repeated cyclic fluctuating stresses"
      ],
      ans: 3,
      exp: "Fatigue is progressive localized damage and eventual fracture caused by REPEATED or cyclic fluctuating stresses whose peak values lie well below the material's static UTS. Unlike creep (which occurs under a constant load), fatigue is driven by stress cycling."
    },
    {
      id: "M10-008",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which mechanical property specifically describes a material's resistance to localized surface scratching, abrasion, or indentation?",
      options: [
        "Strength",
        "Toughness",
        "Hardness",
        "Resilience"
      ],
      ans: 2,
      exp: "Hardness is defined as a material's resistance to localized surface deformation such as scratching, abrasion, wear, or indentation."
    },
    {
      id: "M10-009",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What does the mechanical property 'machinability' quantify in manufacturing engineering?",
      options: [
        "The maximum tensile stress a workpiece can endure before fracture",
        "The capacity of a cutting tool to absorb shock energy without shattering",
        "The percentage reduction in cross-sectional area achievable during cold wire drawing",
        "The relative ease with which a material can be cut or shaped by machine tools to achieve a good surface finish"
      ],
      ans: 3,
      exp: "Machinability expresses the relative ease with which a material can be cut, turned, milled, or otherwise shaped by machine tools while producing a satisfactory surface finish."
    },
    {
      id: "M10-010",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Strength is defined as a material's capacity to sustain maximum load without fracture across modes such as tension, compression, shear, bending, and torsion. Why is a high-strength brittle glass NOT considered a tough material?",
      options: [
        "Because glass exhibits zero elastic modulus prior to fracture",
        "Because glass cannot support any compressive load without crumbling",
        "Because glass fractures at very small strain with negligible plastic deformation, making the total area under its σ–ε curve very small",
        "Because glass undergoes extensive necking that lowers its engineering stress immediately after loading begins"
      ],
      ans: 2,
      exp: "Toughness equals the total area under the complete stress–strain curve (energy per unit volume up to fracture). Even if a brittle material sustains a substantial fracture stress, its negligible plastic strain keeps the area under the curve very small."
    },
    {
      id: "M10-011",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Formula",
      diagram: null,
      q: "For a linear-elastic Hookean material with elastic limit σ<sub>E</sub> and Young's modulus E, what are the correct expression and SI unit for the maximum elastic energy absorbed per unit volume (modulus of resilience)?",
      options: [
        "σ<sub>E</sub><sup>2</sup> / (2E), with SI unit J/m<sup>3</sup>",
        "σ<sub>E</sub> · E / 2, with SI unit N/m",
        "2σ<sub>E</sub> / E, with SI unit dimensionless",
        "σ<sub>E</sub><sup>2</sup> / E, with SI unit N·m"
      ],
      ans: 0,
      exp: "Resilience is the triangular area under the linear elastic segment of the σ–ε curve up to the elastic limit: U<sub>r</sub> = ½ σ<sub>E</sub> ε<sub>E</sub>. Substituting Hooke's law ε<sub>E</sub> = σ<sub>E</sub>/E gives U<sub>r</sub> = σ<sub>E</sub><sup>2</sup>/(2E). Since stress has units N/m² and strain is dimensionless, (N/m²) = (N·m)/m³ = J/m³."
    },
    {
      id: "M10-012",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "stress_strain",
      q: "Referring to the engineering stress–strain curve for mild steel, in what exact chronological order do the landmark points appear as tensile elongation increases from zero to failure?",
      options: [
        "Proportionality/elastic limit → UTS → Upper yield → Lower yield → Fracture",
        "Proportionality/elastic limit → Upper yield → Lower yield (σ<sub>y</sub>) → UTS → Fracture",
        "Upper yield → Proportionality/elastic limit → Lower yield (σ<sub>y</sub>) → Fracture → UTS",
        "Lower yield (σ<sub>y</sub>) → Upper yield → Proportionality/elastic limit → UTS → Fracture"
      ],
      ans: 1,
      exp: "As shown on the mild steel stress–strain diagram, loading progresses linearly up to the proportionality/elastic limit, reaches the Upper Yield point, drops slightly to the Lower Yield point (σ<sub>y</sub>), strain-hardens to the Ultimate Tensile Strength (UTS), and then necks down to Fracture."
    },
    {
      id: "M10-013",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "stress_strain",
      q: "On the engineering stress–strain diagram of a ductile metal such as mild steel, at which exact stage does localized cross-sectional contraction (necking) begin?",
      options: [
        "Immediately at the proportionality limit",
        "At the transition from upper yield to lower yield",
        "Immediately after reaching the Ultimate Tensile Strength (UTS)",
        "Midway between the elastic limit and the upper yield point"
      ],
      ans: 2,
      exp: "Uniform plastic deformation continues all the way up to the peak load at the Ultimate Tensile Strength (UTS). Immediately after UTS is reached, plastic instability initiates localized necking, where deformation concentrates in a shrinking cross-section until fracture."
    },
    {
      id: "M10-014",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Diagram",
      diagram: "stress_strain",
      q: "Referring to the stress–strain diagram comparing engineering and true behaviour of mild steel, why does the engineering stress curve turn downward after UTS whereas the true stress curve continues to rise all the way to fracture?",
      options: [
        "Because engineering stress divides the falling load P by the constant original area A<sub>0</sub>, whereas true stress divides P by the rapidly shrinking instantaneous neck area A<sub>i</sub>",
        "Because the metal stops strain-hardening after UTS, causing true stress to increase artificially due to thermal expansion",
        "Because engineering strain uses ln(L/L<sub>0</sub>), which compresses the horizontal axis past the peak load",
        "Because true stress adds the compressive hydrostatic pressure inside the neck to the nominal engineering stress"
      ],
      ans: 0,
      exp: "Once necking starts past UTS, the load P required to keep deforming the shrinking neck decreases, so engineering stress σ = P/A<sub>0</sub> (computed using fixed original area A<sub>0</sub>) drops. Meanwhile, the actual instantaneous cross-sectional area A<sub>i</sub> shrinks faster than P falls, so true stress σ<sub>T</sub> = P/A<sub>i</sub> keeps rising until fracture."
    },
    {
      id: "M10-015",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "stress_strain",
      q: "On a comparative stress–strain diagram showing a brittle ceramic (glass), a ductile FCC metal (Cu, Ag, or Au), and an elastomer (rubber), which profile correctly describes the elastomer?",
      options: [
        "Steep linear slope followed by sudden fracture at tiny strain",
        "Moderate initial slope, pronounced upper/lower yield points, and high UTS",
        "Vertical straight line indicating infinite Young's modulus up to fracture",
        "Non-Hookean curve with a very low initial slope and huge reversible elastic strain"
      ],
      ans: 3,
      exp: "Comparing the three classes on the stress–strain diagram: brittle glass shows a steep linear slope and abrupt fracture at tiny ε; ductile metals (Cu, Ag, Au) show a moderate elastic slope followed by extensive plastic strain; elastomers (rubber) display non-Hookean behaviour with a very low initial slope and huge reversible elastic strain."
    },
    {
      id: "M10-016",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "stress_strain",
      q: "On a tensile engineering stress–strain diagram, what physical quantity is represented by the total shaded area enclosed beneath the curve from zero strain to the fracture point?",
      options: [
        "Toughness (total fracture energy per unit volume)",
        "Young's modulus (stiffness)",
        "Poisson's ratio",
        "Percent reduction in area"
      ],
      ans: 0,
      exp: "The total area under the complete stress–strain curve ∫σ dε up to fracture represents toughness—the total energy absorbed per unit volume (in J/m³) prior to failure. The smaller triangular area solely up to the elastic limit represents resilience."
    },
    {
      id: "M10-017",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "stress_strain",
      q: "Two alloys, Material X and Material Y, are plotted on the same engineering stress–strain diagram. Material X exhibits a markedly steeper initial linear slope than Material Y. Which conclusion is rigorously valid within the elastic region?",
      options: [
        "Material X has a higher Young's modulus E and therefore develops a smaller elastic strain than Material Y at the same applied stress",
        "Material X necessarily has a greater percent elongation at fracture than Material Y",
        "Material Y is stiffer than Material X because it stretches further per unit stress",
        "Material X has a lower yield load than Material Y regardless of alloy composition"
      ],
      ans: 0,
      exp: "The slope of the initial linear region is Young's modulus E = σ/ε. A steeper slope means higher E (greater stiffness), so at any equal elastic stress σ, ε = σ/E is smaller for Material X than for Material Y."
    },
    {
      id: "M10-018",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "A uniform prismatic bar of original length L<sub>0</sub>, original cross-sectional area A<sub>0</sub>, and Young's modulus E is loaded axially by a tensile force P within its elastic limit. Which formula gives its elastic elongation ΔL?",
      options: [
        "ΔL = (P · E) / (A<sub>0</sub> · L<sub>0</sub>)",
        "ΔL = (A<sub>0</sub> · E) / (P · L<sub>0</sub>)",
        "ΔL = (P · L<sub>0</sub>) / (A<sub>0</sub> · E)",
        "ΔL = (P · A<sub>0</sub>) / (E · L<sub>0</sub>)"
      ],
      ans: 2,
      exp: "From Hooke's law σ = Eε with engineering stress σ = P/A<sub>0</sub> and engineering strain ε = ΔL/L<sub>0</sub>, we obtain P/A<sub>0</sub> = E(ΔL/L<sub>0</sub>), which rearranges directly to ΔL = P L<sub>0</sub> / (A<sub>0</sub> E)."
    },
    {
      id: "M10-019",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Poisson's ratio is defined as ν = −ε<sub>lat</sub> / ε<sub>long</sub>. Why is the negative sign included in this definition?",
      options: [
        "Because under uniaxial tension, longitudinal strain is negative while lateral strain is positive",
        "Because under uniaxial tension, a bar elongates longitudinally (ε<sub>long</sub> > 0) while contracting laterally (ε<sub>lat</sub> < 0), so the minus sign ensures ν is a positive quantity for ordinary materials",
        "Because Poisson's ratio applies exclusively to compressive stresses where all strains are negative",
        "Because lateral strain is always numerically larger than longitudinal strain in engineering metals"
      ],
      ans: 1,
      exp: "When a typical solid is stretched axially, ε<sub>long</sub> > 0 while its width/diameter shrinks (ε<sub>lat</sub> < 0). Under axial compression, the signs flip (ε<sub>long</sub> < 0, ε<sub>lat</sub> > 0). In both cases ε<sub>lat</sub> and ε<sub>long</sub> have opposite signs, so ν = −ε<sub>lat</sub>/ε<sub>long</sub> yields a positive constant."
    },
    {
      id: "M10-020",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "For a cylindrical tensile test specimen of initial diameter d<sub>0</sub> that fractures with a minimum neck diameter d<sub>f</sub>, which expression correctly computes the percent reduction in area (% RA)?",
      options: [
        "[(d<sub>0</sub> − d<sub>f</sub>) / d<sub>0</sub>] × 100",
        "[(d<sub>0</sub><sup>2</sup> − d<sub>f</sub><sup>2</sup>) / d<sub>f</sub><sup>2</sup>] × 100",
        "[(d<sub>0</sub><sup>2</sup> − d<sub>f</sub><sup>2</sup>) / d<sub>0</sub><sup>2</sup>] × 100",
        "[(d<sub>f</sub><sup>2</sup> − d<sub>0</sub><sup>2</sup>) / d<sub>0</sub><sup>2</sup>] × 100"
      ],
      ans: 2,
      exp: "Since cross-sectional area A = (π/4)d², the constant π/4 cancels in % RA = [(A<sub>0</sub> − A<sub>f</sub>)/A<sub>0</sub>] × 100 = [(d<sub>0</sub><sup>2</sup> − d<sub>f</sub><sup>2</sup>)/d<sub>0</sub><sup>2</sup>] × 100. A frequent mistake is forgetting to square the diameters."
    },
    {
      id: "M10-021",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Which equation correctly defines true strain ε<sub>T</sub> during tensile stretching from initial gauge length L<sub>0</sub> to instantaneous length L (with engineering strain ε), and how does ε<sub>T</sub> compare with ε for positive tensile deformation (ε > 0)?",
      options: [
        "ε<sub>T</sub> = (L − L<sub>0</sub>)/L<sub>0</sub>, so ε<sub>T</sub> = ε at all strains",
        "ε<sub>T</sub> = ln(L/L<sub>0</sub>) = ln(1 + ε), so ε<sub>T</sub> < ε for all ε > 0",
        "ε<sub>T</sub> = (L − L<sub>0</sub>)/L, so ε<sub>T</sub> > ε for all ε > 0",
        "ε<sub>T</sub> = exp(ε) − 1, so ε<sub>T</sub> > ε for all ε > 0"
      ],
      ans: 1,
      exp: "Watch the classic trap: (L − L<sub>0</sub>)/L<sub>0</sub> is engineering strain ε, NOT true strain! True strain integrates instantaneous increments dL/L, giving ε<sub>T</sub> = ln(L/L<sub>0</sub>) = ln(1 + ε). Since ln(1 + ε) < ε for every positive ε > 0, true tensile strain is always smaller than engineering strain."
    },
    {
      id: "M10-022",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Assuming constant volume during uniform plastic deformation prior to necking, how is true stress σ<sub>T</sub> related to engineering stress σ and engineering strain ε?",
      options: [
        "σ<sub>T</sub> = σ / (1 + ε)",
        "σ<sub>T</sub> = σ (1 − ε)",
        "σ<sub>T</sub> = σ · ln(1 + ε)",
        "σ<sub>T</sub> = σ (1 + ε)"
      ],
      ans: 3,
      exp: "Constant volume gives A<sub>0</sub>L<sub>0</sub> = A<sub>i</sub>L ⇒ A<sub>0</sub>/A<sub>i</sub> = L/L<sub>0</sub> = 1 + ε. Therefore, true stress is σ<sub>T</sub> = P/A<sub>i</sub> = (P/A<sub>0</sub>)(A<sub>0</sub>/A<sub>i</sub>) = σ(1 + ε), which always exceeds engineering stress σ in tension."
    },
    {
      id: "M10-023",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "A student calculates the axial stress in a steel rod as σ = 198.94 N/mm<sup>2</sup> and is given Young's modulus E = 200 kN/mm<sup>2</sup>. Dividing 198.94 directly by 200 without converting kN to N, or mistakenly multiplying by 10<sup>3</sup>, is a notorious unit trap. What is the exact dimensionless elastic strain ε?",
      options: [
        "ε = 995",
        "ε = 0.995",
        "ε = 9.95 × 10<sup>−4</sup>",
        "ε = 9.95 × 10<sup>−7</sup>"
      ],
      ans: 2,
      exp: "Convert both quantities to identical force units first: E = 200 kN/mm² = 200 × 10³ N/mm² = 200,000 N/mm² (= 200 GPa). Then ε = σ/E = 198.94 / 200,000 = 9.947 × 10⁻⁴ ≈ 9.95 × 10⁻⁴. Dividing 198.94 by 0.2 or misplacing 10³ produces impossible values like 995 or 0.995."
    },
    {
      id: "M10-024",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "During uniform plastic elongation of a ductile rod (before necking occurs), volume conservation requires A<sub>0</sub>L<sub>0</sub> = A<sub>i</sub>L. What does the area ratio A<sub>0</sub>/A<sub>i</sub> equal in terms of engineering strain ε?",
      options: [
        "1 / (1 + ε)",
        "1 + ε",
        "1 + ε<sup>2</sup>",
        "ln(1 + ε)"
      ],
      ans: 1,
      exp: "From volume constancy A<sub>0</sub>L<sub>0</sub> = A<sub>i</sub>L, rearranging gives A<sub>0</sub>/A<sub>i</sub> = L/L<sub>0</sub>. Because ε = (L − L<sub>0</sub>)/L<sub>0</sub> = L/L<sub>0</sub> − 1, we have L/L<sub>0</sub> = 1 + ε, hence A<sub>0</sub>/A<sub>i</sub> = 1 + ε."
    },
    {
      id: "M10-025",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A circular steel rod of diameter d = 16 mm and length L = 500 mm carries an axial tensile load P = 40 kN. What is the engineering tensile stress σ developed in the rod?",
      options: [
        "49.74 N/mm<sup>2</sup>",
        "198.94 N/mm<sup>2</sup>",
        "397.89 N/mm<sup>2</sup>",
        "795.77 N/mm<sup>2</sup>"
      ],
      ans: 1,
      exp: "Radius r = d/2 = 8 mm, so cross-sectional area A<sub>0</sub> = πr² = π(8)² = 201.06 mm². With P = 40 kN = 40,000 N, engineering stress σ = P/A<sub>0</sub> = 40,000 / 201.06 = 198.94 N/mm² (≈ 199 MPa)."
    },
    {
      id: "M10-026",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "The circular steel rod (d = 16 mm, L<sub>0</sub> = 500 mm, P = 40 kN) has Young's modulus E = 200 kN/mm<sup>2</sup> (200 GPa). What are its axial elastic strain ε and total elongation ΔL?",
      options: [
        "ε = 9.95 × 10<sup>−4</sup> and ΔL = 0.497 mm",
        "ε = 9.95 × 10<sup>−3</sup> and ΔL = 4.974 mm",
        "ε = 4.97 × 10<sup>−4</sup> and ΔL = 0.249 mm",
        "ε = 1.99 × 10<sup>−3</sup> and ΔL = 0.995 mm"
      ],
      ans: 0,
      exp: "Area A<sub>0</sub> = π(8)² = 201.06 mm², giving σ = 40,000 / 201.06 = 198.94 N/mm². Converting E = 200 kN/mm² = 200,000 N/mm²: ε = σ/E = 198.94 / 200,000 = 9.947 × 10⁻⁴ ≈ 9.95 × 10⁻⁴. Elongation ΔL = ε L<sub>0</sub> = (9.947 × 10⁻⁴)(500 mm) = 0.497 mm."
    },
    {
      id: "M10-027",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A cylindrical steel tensile specimen has initial diameter d<sub>0</sub> = 20 mm and gauge length L<sub>0</sub> = 200 mm. Its elastic limit load is 102 kN and the maximum load sustained during the test is 130 kN. What are the stress at the elastic limit (σ<sub>E</sub>) and the Ultimate Tensile Strength (UTS)?",
      options: [
        "σ<sub>E</sub> = 254.65 MPa and UTS = 324.68 MPa",
        "σ<sub>E</sub> = 162.34 MPa and UTS = 206.90 MPa",
        "σ<sub>E</sub> = 324.68 MPa and UTS = 413.80 MPa",
        "σ<sub>E</sub> = 510.00 MPa and UTS = 650.00 MPa"
      ],
      ans: 2,
      exp: "Initial cross-sectional area A<sub>0</sub> = π(d<sub>0</sub>/2)² = π(10)² = 314.16 mm². Elastic limit stress σ<sub>E</sub> = (102 × 10³ N) / 314.16 mm² = 324.68 N/mm² (MPa). Ultimate tensile strength UTS = (130 × 10³ N) / 314.16 mm² = 413.80 N/mm² (MPa)."
    },
    {
      id: "M10-028",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a tensile test on a steel bar of diameter d<sub>0</sub> = 20 mm and gauge length L<sub>0</sub> = 200 mm, an axial load of 80 kN (within the elastic limit) produces an extension of 0.25 mm. Calculate Young's modulus E of the steel.",
      options: [
        "101.86 GPa",
        "162.97 GPa",
        "254.65 GPa",
        "203.72 GPa"
      ],
      ans: 3,
      exp: "Area A<sub>0</sub> = π(10)² = 314.16 mm². Stress σ = 80,000 / 314.16 = 254.65 N/mm². Strain ε = ΔL/L<sub>0</sub> = 0.25 / 200 = 1.25 × 10⁻³. Hence E = σ/ε = 254.65 / (1.25 × 10⁻³) = 203,718 N/mm² ≈ 203.72 GPa."
    },
    {
      id: "M10-029",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A steel tensile specimen of gauge length L<sub>0</sub> = 200 mm and initial diameter d<sub>0</sub> = 20 mm fractures with a total permanent extension of 56 mm and a final neck diameter d<sub>f</sub> = 15 mm. What are the % elongation and % reduction in area?",
      options: [
        "28.0% elongation and 25.00% reduction in area",
        "28.0% elongation and 43.75% reduction in area",
        "21.9% elongation and 43.75% reduction in area",
        "56.0% elongation and 75.00% reduction in area"
      ],
      ans: 1,
      exp: "% Elongation = (ΔL<sub>f</sub> / L<sub>0</sub>) × 100 = (56 / 200) × 100 = 28.0%. % Reduction in area = [(d<sub>0</sub>² − d<sub>f</sub>²) / d<sub>0</sub>²] × 100 = [(20² − 15²) / 20²] × 100 = (175 / 400) × 100 = 43.75%. (Notice 25% is the trap from forgetting to square d!)"
    },
    {
      id: "M10-030",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A cylindrical alloy rod of diameter d<sub>0</sub> = 12 mm and gauge length L<sub>0</sub> = 150 mm elongates elastically by 0.18 mm under axial tension while its diameter decreases by 0.00432 mm. What is the alloy's Poisson's ratio ν?",
      options: [
        "0.24",
        "0.30",
        "0.36",
        "0.42"
      ],
      ans: 1,
      exp: "Longitudinal strain ε<sub>long</sub> = ΔL/L<sub>0</sub> = 0.18 / 150 = 1.20 × 10⁻³. Lateral strain ε<sub>lat</sub> = Δd/d<sub>0</sub> = −0.00432 / 12 = −3.60 × 10⁻⁴. Therefore, ν = −ε<sub>lat</sub>/ε<sub>long</sub> = −(−3.60 × 10⁻⁴)/(1.20 × 10⁻³) = 0.30."
    },
    {
      id: "M10-031",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Before necking begins, a ductile copper tensile bar reaches an engineering stress σ = 250 MPa at an engineering strain ε = 0.20. Calculate its true stress σ<sub>T</sub> and true strain ε<sub>T</sub> at this instant.",
      options: [
        "σ<sub>T</sub> = 300 MPa and ε<sub>T</sub> = 0.182",
        "σ<sub>T</sub> = 208 MPa and ε<sub>T</sub> = 0.223",
        "σ<sub>T</sub> = 300 MPa and ε<sub>T</sub> = 0.223",
        "σ<sub>T</sub> = 250 MPa and ε<sub>T</sub> = 0.200"
      ],
      ans: 0,
      exp: "Prior to necking (uniform volume-conserving deformation): σ<sub>T</sub> = σ(1 + ε) = 250(1 + 0.20) = 300 MPa, and ε<sub>T</sub> = ln(1 + ε) = ln(1.20) = 0.1823 ≈ 0.182. Notice σ<sub>T</sub> > σ while ε<sub>T</sub> < ε."
    },
    {
      id: "M10-032",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A circular steel tie rod of length L<sub>0</sub> = 2.0 m and Young's modulus E = 210 GPa must carry an axial tensile load P = 60 kN without elongating by more than ΔL = 1.5 mm. What is the minimum required rod diameter d<sub>0</sub>?",
      options: [
        "15.57 mm",
        "19.52 mm",
        "27.64 mm",
        "22.02 mm"
      ],
      ans: 3,
      exp: "From ΔL = P L<sub>0</sub>/(A<sub>0</sub> E), the minimum area is A<sub>0</sub> = P L<sub>0</sub>/(E ΔL) = (60 × 10³ N × 2000 mm)/(210 × 10³ N/mm² × 1.5 mm) = 380.95 mm². Since A<sub>0</sub> = (π/4)d<sub>0</sub>², d<sub>0</sub> = √(4A<sub>0</sub>/π) = √(4 × 380.95 / π) = 22.02 mm."
    },
    {
      id: "M10-033",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A tensile specimen of initial diameter d<sub>0</sub> = 10 mm fractures at a breaking load of 22 kN when its minimum neck diameter has contracted to d<sub>f</sub> = 7.0 mm. What are the engineering fracture stress (σ<sub>f</sub>) and true fracture stress (σ<sub>Tf</sub>)?",
      options: [
        "σ<sub>f</sub> = 571.7 MPa and σ<sub>Tf</sub> = 280.1 MPa",
        "σ<sub>f</sub> = 280.1 MPa and σ<sub>Tf</sub> = 400.2 MPa",
        "σ<sub>f</sub> = 220.0 MPa and σ<sub>Tf</sub> = 449.0 MPa",
        "σ<sub>f</sub> = 280.1 MPa and σ<sub>Tf</sub> = 571.7 MPa"
      ],
      ans: 3,
      exp: "Original area A<sub>0</sub> = π(5)² = 78.54 mm² ⇒ engineering fracture stress σ<sub>f</sub> = 22,000 / 78.54 = 280.11 MPa. Final neck area A<sub>f</sub> = π(3.5)² = 38.48 mm² ⇒ true fracture stress σ<sub>Tf</sub> = 22,000 / 38.48 = 571.66 MPa (more than double σ<sub>f</sub> due to necking!)."
    },
    {
      id: "M10-034",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A spring steel exhibits a linear-elastic limit σ<sub>E</sub> = 400 MPa and Young's modulus E = 200 GPa. What is the maximum elastic energy per unit volume (modulus of resilience) it can absorb without permanent deformation?",
      options: [
        "200 kJ/m<sup>3</sup>",
        "400 kJ/m<sup>3</sup>",
        "800 kJ/m<sup>3</sup>",
        "1600 kJ/m<sup>3</sup>"
      ],
      ans: 1,
      exp: "Modulus of resilience U<sub>r</sub> = σ<sub>E</sub>²/(2E) = (400 × 10⁶ Pa)² / [2 × (200 × 10⁹ Pa)] = (1.6 × 10¹⁷) / (4.0 × 10¹¹) = 4.0 × 10⁵ J/m³ = 400 kJ/m³ (0.40 MJ/m³)."
    },
    {
      id: "M10-035",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An aluminum alloy rod of initial diameter d<sub>0</sub> = 25 mm, Young's modulus E = 70 GPa, and Poisson's ratio ν = 0.33 is subjected to an elastic axial tensile load P = 45 kN. By how much does its diameter decrease?",
      options: [
        "0.00432 mm",
        "0.02161 mm",
        "0.03274 mm",
        "0.01080 mm"
      ],
      ans: 3,
      exp: "Cross-sectional area A<sub>0</sub> = π(12.5)² = 490.87 mm². Axial stress σ = 45,000 / 490.87 = 91.67 MPa. Longitudinal strain ε<sub>long</sub> = σ/E = 91.67 / 70,000 = 1.310 × 10⁻³. Lateral strain ε<sub>lat</sub> = −ν ε<sub>long</sub> = −0.33(1.310 × 10⁻³) = −4.322 × 10⁻⁴. Diameter decrease |Δd| = |ε<sub>lat</sub>| d<sub>0</sub> = 4.322 × 10⁻⁴ × 25 = 0.01080 mm (10.8 μm)."
    },
    {
      id: "M10-036",
      chapter: "Ch 13: Mechanical Properties & Tensile Testing",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Bar A (steel, E = 200 GPa) and Bar B (titanium alloy, E = 100 GPa) have identical length L<sub>0</sub> and cross-sectional area A<sub>0</sub>. Both are pulled by the exact same axial tensile force P within their elastic limits. Which statement is strictly TRUE?",
      options: [
        "Bar A experiences twice the engineering stress of Bar B because its modulus is twice as large",
        "Both bars experience identical axial elongation ΔL because they carry the same load P",
        "Both bars experience the exact same engineering stress σ, while Bar B develops twice the axial strain and twice the elongation of Bar A",
        "Bar A stores twice as much elastic strain energy per unit volume as Bar B under the same load P"
      ],
      ans: 2,
      exp: "Engineering stress σ = P/A<sub>0</sub> depends ONLY on load and geometry—NOT on Young's modulus—so both bars have identical σ! Since ε = σ/E and ΔL = ε L<sub>0</sub>, Bar B (half the E) experiences twice the strain and twice the elongation. Moreover, elastic energy density U = σ²/(2E) is also twice as large in Bar B, not Bar A."
    }
  ]
});
