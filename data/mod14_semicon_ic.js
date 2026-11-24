window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod14",
  questions: [
    {
      id: "M14-001",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In the first stage of converting quartz sand (SiO<sub>2</sub>) into electronic silicon, what product, purity level, furnace type, and operating temperature range are involved?",
      options: [
        "Electronic-grade silicon (99.9999% pure) in a bell-jar CVD reactor at 1100 °C",
        "Trichlorosilane vapour (95% pure) in a fluidised-bed chlorinator at 300 °C",
        "Single-crystal silicon (99.999% pure) in a Czochralski quartz crucible at 1420 °C",
        "Metallurgical-grade silicon (MGS, ≈98–99% pure) in a submerged electric arc furnace at 1800–1950 °C"
      ],
      ans: 3,
      exp: "Stage 1 reduces quartz sand (SiO<sub>2</sub>) with carbon in a submerged electric arc furnace at 1800–1950 °C to produce Metallurgical-Grade Silicon (MGS) at ≈98–99% purity."
    },
    {
      id: "M14-002",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which balanced chemical equation accurately represents the carbothermic reduction of quartz sand to Metallurgical-Grade Silicon (MGS)?",
      options: [
        "2 SiO<sub>2</sub> + 2 C → 2 Si + 2 CO<sub>2</sub>↑",
        "SiO<sub>2</sub> + C → Si + CO<sub>2</sub>↑",
        "SiO<sub>2</sub> + C ⇌ Si + CO↑",
        "SiO<sub>2</sub> + 2 C → Si + 2 CO↑"
      ],
      ans: 3,
      exp: "Each SiO<sub>2</sub> molecule carries two oxygen atoms, so complete carbon reduction requires 2 C and evolves 2 CO gas: SiO<sub>2</sub> + 2 C → Si + 2 CO↑. Writing the unbalanced SiO<sub>2</sub> + C ⇌ Si + CO is a frequent exam trap."
    },
    {
      id: "M14-003",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "During purification of MGS in a fluidised-bed reactor at ~300 °C to form volatile trichlorosilane (SiHCl<sub>3</sub>), which balanced chemical reaction occurs?",
      options: [
        "Si + 3 HCl → SiHCl<sub>3</sub> + H<sub>2</sub>",
        "SiO<sub>2</sub> + 3 HCl → SiHCl<sub>3</sub> + O<sub>2</sub>",
        "Si + 4 HCl → SiHCl<sub>3</sub> + H<sub>2</sub> + Cl",
        "Si + HCl → SiHCl<sub>3</sub> + H<sub>2</sub>"
      ],
      ans: 0,
      exp: "Pulverised MGS reacts with anhydrous HCl gas at ~300 °C according to the balanced reaction Si + 3 HCl → SiHCl<sub>3</sub> + H<sub>2</sub> (3 moles of HCl per mole of Si, NOT 1 HCl)."
    },
    {
      id: "M14-004",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In the Siemens Process for producing 99.9999% pure electronic-grade polycrystalline silicon, what reaction and reactor conditions are used?",
      options: [
        "SiHCl<sub>3</sub> → Si + 3 Cl<sub>2</sub> in an argon-filled Czochralski crucible at 1414 °C",
        "Si + 3 HCl → SiHCl<sub>3</sub> + H<sub>2</sub> in a fluidised bed at 300 °C",
        "SiO<sub>2</sub> + 2 C → Si + 2 CO in a submerged electric arc furnace at 1900 °C",
        "SiHCl<sub>3</sub> + H<sub>2</sub> → Si + 3 HCl in a bell-jar CVD reactor at ≈1100–1350 °C over heated Si rods"
      ],
      ans: 3,
      exp: "In the Siemens Process, purified volatile SiHCl<sub>3</sub> is reduced by H<sub>2</sub> in a bell-jar CVD reactor at 1100–1350 °C (≈1100 °C) over electrically heated high-purity Si rods: SiHCl<sub>3</sub> + H<sub>2</sub> → Si + 3 HCl, yielding 99.9999% pure electronic-grade polycrystalline Si."
    },
    {
      id: "M14-005",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why is Metallurgical-Grade Silicon first converted into trichlorosilane (SiHCl<sub>3</sub>) before final deposition via the Siemens Process?",
      options: [
        "Because SiHCl<sub>3</sub> automatically converts polycrystalline silicon directly into a 300 mm single crystal",
        "Because SiHCl<sub>3</sub> is a volatile liquid that can be purified to ultra-high purity by fractional distillation",
        "Because SiHCl<sub>3</sub> eliminates the need for heating above room temperature during CVD",
        "Because SiHCl<sub>3</sub> intentionally dopes silicon with chlorine to create an n-type wafer"
      ],
      ans: 1,
      exp: "Solid MGS (98–99% pure) is difficult to refine directly to semiconductor purity. Converting it into volatile SiHCl<sub>3</sub> enables fractional distillation to strip away metallic and dopant chloride impurities with differing boiling points prior to Siemens CVD."
    },
    {
      id: "M14-006",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "According to the balanced MGS furnace reaction SiO<sub>2</sub> + 2 C → Si + 2 CO↑, what stoichiometric mass of carbon (M<sub>C</sub> = 12 g/mol) is required to completely reduce 120 g of quartz sand (M<sub>SiO<sub>2</sub></sub> = 60 g/mol), and what mass of silicon (M<sub>Si</sub> = 28 g/mol) is produced?",
      options: [
        "48 g of C required; 56 g of Si produced",
        "24 g of C required; 56 g of Si produced",
        "48 g of C required; 28 g of Si produced",
        "24 g of C required; 28 g of Si produced"
      ],
      ans: 0,
      exp: "Moles of SiO<sub>2</sub> = 120 / 60 = 2.0 mol. From the 1 : 2 : 1 stoichiometry, 2.0 mol SiO<sub>2</sub> requires 2 × 2.0 = 4.0 mol C = 4.0 × 12 = 48 g of C, and produces 2.0 mol Si = 2.0 × 28 = 56 g of Si."
    },
    {
      id: "M14-007",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "ic_fab",
      q: "In the Czochralski (CZ) single-crystal pulling apparatus illustrated in IC silicon fabrication, how are the seed crystal and quartz crucible operated inside the argon ambient?",
      options: [
        "The seed crystal is rotated counter-clockwise (CCW) while the quartz crucible rotates clockwise (CW) as the seed is slowly pulled upward",
        "The quartz crucible is omitted entirely and the molten silicon is suspended by magnetic levitation",
        "The seed crystal is pushed downward into solid polycrystalline Si while oxygen gas is pumped through the melt",
        "Both the seed crystal and crucible remain completely stationary while an RF coil sweeps downward"
      ],
      ans: 0,
      exp: "In CZ crystal growth, molten Si is held in a quartz crucible under inert Ar ambient. Counter-rotation of the seed (CCW) and crucible (CW) promotes uniform thermal symmetry and dopant mixing while the seed is slowly pulled upward to form a single-crystal ingot (150–300 mm diameter, 1–2 m long)."
    },
    {
      id: "M14-008",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Why is a narrow 'Dash neck' (≈3 mm diameter) pulled first at the start of Czochralski single-crystal silicon growth before widening the ingot to its full 150–300 mm diameter?",
      options: [
        "To increase oxygen uptake from the quartz crucible for stronger wafers",
        "To prevent argon gas from reacting chemically with the silicon melt",
        "To slow down the solidification rate so polycrystalline grains can nucleate",
        "To let seed dislocations caused by thermal shock grow out and terminate at the crystal surface"
      ],
      ans: 3,
      exp: "When the cool seed touches the hot Si melt, thermal shock generates dislocations. Pulling a thin ~3 mm Dash neck forces those dislocations to glide out to the lateral free surface so that subsequent widening produces a virtually dislocation-free single-crystal ingot."
    },
    {
      id: "M14-009",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "How does the Float-Zone (FZ) single-crystal growth process achieve much higher purity and electrical resistivity than the Czochralski (CZ) process?",
      options: [
        "It operates at 300 °C using liquid HCl to dissolve metallic impurities during growth",
        "It pulls ingots wider than 450 mm so impurities dilute across a larger volume",
        "It uses a platinum crucible instead of a quartz crucible to trap oxygen impurities",
        "It is crucible-free — an RF coil moves a surface-tension-held molten zone upward, avoiding O and C pickup"
      ],
      ans: 3,
      exp: "FZ growth is crucible-free: an RF induction coil creates a narrow molten zone supported by surface tension as it traverses upward along a vertical polycrystalline Si rod. Eliminating the quartz crucible prevents O and C contamination, producing ultra-pure high-resistivity Si for high-voltage power devices and detectors."
    },
    {
      id: "M14-010",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which comparison correctly contrasts Czochralski (CZ) and Float-Zone (FZ) silicon ingots in industrial semiconductor manufacturing?",
      options: [
        "CZ yields smaller diameters (≤ 100 mm) for detectors; FZ yields 300 mm ingots for microprocessors and solar cells",
        "CZ yields 150–300 mm ingots for ICs and solar cells despite O/C pickup; FZ stays ≤ 150–200 mm for power devices and detectors",
        "Both CZ and FZ pick up identical levels of O and C from quartz crucibles, differing only in pulling speed",
        "FZ produces polycrystalline wafers for solar cells; CZ produces amorphous wafers for high-voltage rectifiers"
      ],
      ans: 1,
      exp: "CZ dominates mainstream ICs, microprocessors, and solar cells because it scales to large 150–300 mm diameters (1–2 m length), though it picks up O and C from the quartz crucible. FZ is limited by surface tension to ≤ 150–200 mm diameters but offers ultra-high purity for power devices and radiation detectors."
    },
    {
      id: "M14-011",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "In zone refining and Float-Zone crystal growth, the equilibrium segregation coefficient is defined as k<sub>0</sub> = C<sub>s</sub> / C<sub>L</sub>. What happens to an impurity with k<sub>0</sub> &lt; 1 as the molten zone travels along the silicon rod?",
      options: [
        "The impurity concentrates preferentially into the first-frozen solid end of the ingot",
        "The impurity evaporates instantaneously only when k<sub>0</sub> equals unity",
        "The impurity prefers the liquid phase and is progressively swept along with the melt toward the tail end of the ingot",
        "The impurity remains uniformly frozen in place regardless of how many zone passes are made"
      ],
      ans: 2,
      exp: "Since k<sub>0</sub> = C<sub>s</sub>/C<sub>L</sub> &lt; 1 implies C<sub>s</sub> &lt; C<sub>L</sub>, impurities have higher solubility in the molten silicon than in the solidifying crystal. As the molten zone advances, impurities are rejected into the liquid and swept to the end of the ingot."
    },
    {
      id: "M14-012",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A silicon melt contains a metallic impurity at concentration C<sub>L</sub> = 5.0×10<sup>17</sup> atoms/cm<sup>3</sup> with an equilibrium segregation coefficient k<sub>0</sub> = 0.08. What impurity concentration C<sub>s</sub> is initially incorporated into the solidifying silicon crystal?",
      options: [
        "4.0×10<sup>16</sup> atoms/cm<sup>3</sup>",
        "6.25×10<sup>18</sup> atoms/cm<sup>3</sup>",
        "4.0×10<sup>15</sup> atoms/cm<sup>3</sup>",
        "4.6×10<sup>17</sup> atoms/cm<sup>3</sup>"
      ],
      ans: 0,
      exp: "From the definition k<sub>0</sub> = C<sub>s</sub>/C<sub>L</sub>, we obtain C<sub>s</sub> = k<sub>0</sub>C<sub>L</sub> = 0.08 × (5.0×10<sup>17</sup>) = 4.0×10<sup>16</sup> atoms/cm<sup>3</sup> (92% of the impurity is rejected into the melt)."
    },
    {
      id: "M14-013",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "After a single-crystal silicon ingot is grown, what is the proper sequence of mechanical and fabrication steps converting the ingot into individual semiconductor chips?",
      options: [
        "Sliced into wafers (~0.2–0.5 mm thick) → lapped → polished → patterned → diced into individual dies (chips)",
        "Crushed into powder → sintered → diced → sliced into wafers (~0.2–0.5 mm thick)",
        "Polished as a whole ingot → diffused → sliced into 2 cm slabs → remelted",
        "Diced into dies → lapped → sliced into 5 mm bars → polished → patterned"
      ],
      ans: 0,
      exp: "Single-crystal Si ingots are sliced into thin wafers (~0.2–0.5 mm thick), lapped for flatness, mirror-polished, subjected to IC patterning/processing across the whole wafer, and finally diced into individual dies (chips)."
    },
    {
      id: "M14-014",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "ic_fab",
      q: "Referring to the standard integrated circuit (IC) fabrication flow diagram, which option lists the major process stages in the correct chronological order?",
      options: [
        "Si Substrate → Epitaxy → Doping → Crystal Growth → Lithography → Oxidation → Metallization",
        "Si Substrate → Crystal Growth → Oxidation → Metallization → Epitaxy → Doping → Lithography",
        "Si Substrate → Crystal Growth → Epitaxy → Oxidation → Lithography → Doping (Diffusion / Ion Implant) → Metallization",
        "Si Substrate → Metallization → Lithography → Oxidation → Crystal Growth → Epitaxy → Doping"
      ],
      ans: 2,
      exp: "The standard IC process flow progresses from Si Substrate → Crystal Growth → Epitaxy → Oxidation (growing SiO<sub>2</sub> barrier/dielectric) → Lithography (patterning) → Doping (Diffusion / Ion Implantation) → Metallization (interconnects)."
    },
    {
      id: "M14-015",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which solid-state diffusion mechanism dominates for common substitutional Group III and Group V dopants (such as B, P, and As) inside crystalline silicon?",
      options: [
        "Grain-boundary sliding diffusion",
        "Substitutional (Vacancy) diffusion",
        "Pure gas-phase convective diffusion",
        "Pure direct ring-exchange diffusion"
      ],
      ans: 1,
      exp: "Silicon solid-state diffusion operates via three mechanisms — Substitutional (Vacancy), Interstitial, and Interstitialcy. Substitutional (vacancy) diffusion is the dominant pathway for Group III and Group V dopants in Si."
    },
    {
      id: "M14-016",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why are small impurity atoms able to undergo rapid interstitial diffusion through crystalline silicon?",
      options: [
        "Because silicon adopts a close-packed FCC structure with an atomic packing factor of 74%",
        "Because diamond-cubic Si has a very open lattice (APF<sub>diamond</sub> = 34%) with wide interstitial voids",
        "Because silicon melts below 600 °C during interstitial diffusion",
        "Because interstitial atoms require zero activation energy and move at the speed of light"
      ],
      ans: 1,
      exp: "Crystalline Si has the diamond-cubic structure whose atomic packing factor is only 34% (APF<sub>diamond</sub> = 34%). The abundant open interstitial voids allow small foreign atoms to hop rapidly between interstitial sites."
    },
    {
      id: "M14-017",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which atomic movement correctly describes the 'interstitialcy' diffusion mechanism commonly observed in silicon?",
      options: [
        "A host lattice atom jumps directly into a pre-existing vacant lattice site without involving interstitial sites",
        "Two adjacent substitutional atoms swap positions simultaneously without creating any defects",
        "An interstitial atom pushes a neighbouring host lattice atom off its lattice site into an adjacent interstitial position and takes its lattice place",
        "A dopant atom travels strictly along the outer wafer surface without entering the crystal bulk"
      ],
      ans: 2,
      exp: "In the interstitialcy mechanism, an atom occupying an interstitial site displaces a host Si lattice atom into a neighbouring interstitial site and occupies the vacated substitutional lattice site itself."
    },
    {
      id: "M14-018",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "Which mathematical statement and SI units accurately express Fick's First Law of steady-state diffusion?",
      options: [
        "J = −(1/D)(dC/dx), with D in s/m<sup>2</sup> and J in kg/s",
        "J = D(dC/dx), with D in m/s<sup>2</sup> and J in kg/(m·s)",
        "J = −D(∂<sup>2</sup>C/∂x<sup>2</sup>), with D in m<sup>2</sup>/s and J in mol/m<sup>3</sup>",
        "J = −D(dC/dx), with D in m<sup>2</sup>/s and J in kg/(m<sup>2</sup>·s)"
      ],
      ans: 3,
      exp: "Fick's First Law for steady-state diffusion is J = −D(dC/dx). Diffusivity D has SI units m<sup>2</sup>/s, flux J has units kg/(m<sup>2</sup>·s) or mol/(m<sup>2</sup>·s), and the minus sign signifies net atomic migration from high to low concentration."
    },
    {
      id: "M14-019",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "Combining the mass continuity equation ∂C/∂t = −∂J/∂x with Fick's First Law (assuming constant diffusivity D) produces Fick's Second Law for non-steady-state diffusion. Which equation is obtained?",
      options: [
        "∂C/∂t = (1/D)(∂<sup>2</sup>C/∂x<sup>2</sup>)",
        "∂C/∂t = −D (∂C/∂x)",
        "∂C/∂t = D (∂<sup>2</sup>C/∂x<sup>2</sup>)",
        "∂<sup>2</sup>C/∂t<sup>2</sup> = D (∂C/∂x)"
      ],
      ans: 2,
      exp: "Substituting J = −D(∂C/∂x) into continuity ∂C/∂t = −∂J/∂x gives ∂C/∂t = −∂[−D(∂C/∂x)]/∂x = D(∂<sup>2</sup>C/∂x<sup>2</sup>) for constant D. This PDE governs time-varying (non-steady-state) dopant profiles."
    },
    {
      id: "M14-020",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "According to the Arrhenius equation for solid-state diffusivity, D = D<sub>0</sub> exp(−Q / RT), what are the slope and y-intercept when ln D is plotted against 1/T?",
      options: [
        "Slope = −Q/R and y-intercept = ln D<sub>0</sub>",
        "Slope = −R/Q and y-intercept = −ln D<sub>0</sub>",
        "Slope = −Q/(2.303R) and y-intercept = log<sub>10</sub> D<sub>0</sub>",
        "Slope = +Q/R and y-intercept = D<sub>0</sub>"
      ],
      ans: 0,
      exp: "Taking the natural logarithm of D = D<sub>0</sub> exp(−Q/RT) gives ln D = ln D<sub>0</sub> − (Q/R)(1/T). Plotting ln D (y-axis) vs 1/T (x-axis) yields a straight line with slope −Q/R and y-intercept ln D<sub>0</sub>."
    },
    {
      id: "M14-021",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Dopant atoms diffuse steadily across a 0.5 mm thick silicon sheet with diffusivity D = 2.0×10<sup>−12</sup> m<sup>2</sup>/s. If the dopant concentrations at the opposite faces are held constant at 4.0×10<sup>24</sup> atoms/m<sup>3</sup> and 1.0×10<sup>24</sup> atoms/m<sup>3</sup>, calculate the steady-state atomic flux J.",
      options: [
        "3.0×10<sup>15</sup> atoms/(m<sup>2</sup>·s)",
        "2.0×10<sup>16</sup> atoms/(m<sup>2</sup>·s)",
        "1.2×10<sup>13</sup> atoms/(m<sup>2</sup>·s)",
        "1.2×10<sup>16</sup> atoms/(m<sup>2</sup>·s)"
      ],
      ans: 3,
      exp: "Using Fick's First Law J = −D(ΔC/Δx) with ΔC = (1.0 − 4.0)×10<sup>24</sup> = −3.0×10<sup>24</sup> m<sup>−3</sup> and Δx = 0.5 mm = 5.0×10<sup>−4</sup> m: J = −(2.0×10<sup>−12</sup>)(−3.0×10<sup>24</sup> / 5.0×10<sup>−4</sup>) = 1.2×10<sup>16</sup> atoms/(m<sup>2</sup>·s)."
    },
    {
      id: "M14-022",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An Arrhenius plot of ln D versus 1/T (with T in Kelvin) for a substitutional dopant in silicon yields a straight line with slope −4.20×10<sup>4</sup> K. Given R = 8.314 J/(mol·K), calculate the activation energy Q for diffusion.",
      options: [
        "349.2 kJ/mol",
        "5.05 kJ/mol",
        "198.0 kJ/mol",
        "420.0 kJ/mol"
      ],
      ans: 0,
      exp: "From ln D = ln D<sub>0</sub> − (Q/R)(1/T), the slope equals −Q/R = −4.20×10<sup>4</sup> K. Therefore Q = (4.20×10<sup>4</sup> K)(8.314 J/(mol·K)) = 349,188 J/mol ≈ 349.2 kJ/mol."
    },
    {
      id: "M14-023",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A dopant in silicon has activation energy Q = 332.56 kJ/mol (so Q/R = 40,000 K) and diffusivity D<sub>1</sub> = 1.0×10<sup>−18</sup> m<sup>2</sup>/s at T<sub>1</sub> = 1000 K. Estimate its diffusivity D<sub>2</sub> at T<sub>2</sub> = 1250 K (use e<sup>8</sup> ≈ 2981).",
      options: [
        "2.98×10<sup>−12</sup> m<sup>2</sup>/s",
        "3.35×10<sup>−22</sup> m<sup>2</sup>/s",
        "2.98×10<sup>−15</sup> m<sup>2</sup>/s",
        "8.00×10<sup>−18</sup> m<sup>2</sup>/s"
      ],
      ans: 2,
      exp: "Using ln(D<sub>2</sub>/D<sub>1</sub>) = (Q/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>) = 40,000 × (1/1000 − 1/1250) = 40,000 × (0.001 − 0.0008) = 40,000 × 0.0002 = 8.0. Thus D<sub>2</sub> = D<sub>1</sub> e<sup>8</sup> = (1.0×10<sup>−18</sup>)(2981) = 2.98×10<sup>−15</sup> m<sup>2</sup>/s."
    },
    {
      id: "M14-024",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In a thermal diffusion furnace operating at 600–1000 °C for silicon wafer doping, how are solid, liquid, and gaseous dopant sources delivered into the quartz furnace tube?",
      options: [
        "Solid sources are melted in an iron crucible, liquid sources are poured directly on wafers, and CO<sub>2</sub> acts as carrier gas",
        "Dopants are always accelerated magnetically at 100 keV before entering the quartz tube",
        "Solid sources are held in a platinum boat inside the quartz tube, liquid sources use a bubbler vaporiser, and all sources are swept by O<sub>2</sub> or N<sub>2</sub> carrier gas",
        "Only gaseous sources can be introduced into a diffusion furnace because quartz cannot withstand 600 °C"
      ],
      ans: 2,
      exp: "Thermal diffusion furnaces (600–1000 °C) employ a quartz tube with O<sub>2</sub> or N<sub>2</sub> carrier gas to transport vapours from solid sources (placed in a platinum boat), liquid sources (via a bubbler vaporiser), or direct gas/vapour cylinders across the Si wafers."
    },
    {
      id: "M14-025",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which statement accurately captures the primary advantages and drawbacks of Ion Implantation compared with high-temperature thermal diffusion?",
      options: [
        "Advantages: completely eliminates photolithography masks; Drawback: cannot introduce Group III or Group V dopants",
        "Advantages: precise control of dopant depth and dose at low wafer temperature; Drawbacks: high equipment cost and lattice damage requiring post-implant annealing",
        "Advantages: ultra-low equipment cost and zero crystal damage; Drawback: requires temperatures above 1500 °C",
        "Advantages: heals existing dislocations automatically; Drawback: yields random uncontrolled dopant concentrations"
      ],
      ans: 1,
      exp: "Ion implantation fires energetic dopant ions directly into the Si wafer, giving superb precision over dose and junction depth at low wafer temperature. Its main disadvantages are expensive beamline equipment and collision-induced lattice damage/cracks that must be repaired by thermal annealing."
    },
    {
      id: "M14-026",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "ic_fab",
      q: "Tracing the ion-implantation beamline schematic from dopant generation to wafer insertion, which sequence of subsystems is strictly correct?",
      options: [
        "Ion Source → Mass Separator → EM Accelerator → Electrostatic Beam Scanner → Si Wafer",
        "Ion Source → EM Accelerator → Electrostatic Beam Scanner → Mass Separator → Si Wafer",
        "Ion Source → Electrostatic Beam Scanner → Mass Separator → EM Accelerator → Si Wafer",
        "Mass Separator → Ion Source → Electrostatic Beam Scanner → EM Accelerator → Si Wafer"
      ],
      ans: 0,
      exp: "An ion implanter follows: Ion Source (ionises dopant gas) → Mass Separator (magnetic coil selects the exact dopant isotope) → EM Accelerator (high voltage imparts kinetic energy) → Electrostatic Beam Scanner (rasters beam evenly) → Si Wafer target."
    },
    {
      id: "M14-027",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What are the distinct functions of the Mass Separator (magnetic coil) and the Electrostatic Beam Scanner inside an ion implantation system?",
      options: [
        "The Mass Separator heats the wafer to 900 °C for annealing, while the Electrostatic Beam Scanner generates the dopant ions",
        "The Mass Separator accelerates ions to MeV energies, while the Electrostatic Beam Scanner removes SiO<sub>2</sub> from the wafer",
        "The Mass Separator selects ions by charge-to-mass ratio, while the Beam Scanner rasters the beam uniformly across the wafer",
        "Both subsystems are exclusively used to neutralise ions before they strike the silicon lattice"
      ],
      ans: 2,
      exp: "The magnetic Mass Separator bends ions along radii proportional to their mass-to-charge ratio so only the desired pure dopant species passes through the resolving aperture. Downstream, the Electrostatic Beam Scanner sweeps (rasters) the beam in X–Y across the entire wafer for uniform doping."
    },
    {
      id: "M14-028",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "How do Nuclear Stopping S<sub>n</sub>(E) and Electronic Stopping S<sub>e</sub>(E) differ as an implanted dopant ion decelerates inside a silicon wafer?",
      options: [
        "Electronic stopping physically knocks Si nuclei out of lattice sites, while nuclear stopping only excites valence electrons",
        "Nuclear stopping (elastic, low E) causes lattice displacement damage; electronic stopping (inelastic, high E) causes negligible lattice damage",
        "Nuclear stopping dominates at high energy with negligible crystal damage; electronic stopping dominates at low energy and causes lattice cracks",
        "Both nuclear and electronic stopping are elastic collisions with Si nuclei that occur equally at all ion energies"
      ],
      ans: 1,
      exp: "S<sub>n</sub>(E) represents elastic binary collisions with target Si nuclei — dominant at low ion energy and responsible for atomic displacements, vacancies, and internal damage. S<sub>e</sub>(E) represents inelastic viscous drag against target electron clouds — dominant at high energy with negligible lattice displacement."
    },
    {
      id: "M14-029",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Given the differential energy-loss rate −dE/dx = N[S<sub>n</sub>(E) + S<sub>e</sub>(E)] for an ion entering silicon with initial kinetic energy E<sub>0</sub>, which definite integral correctly expresses the total path range R?",
      options: [
        "R = ∫<sub>E<sub>0</sub></sub><sup>∞</sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}",
        "R = ∫<sub>0</sub><sup>R</sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}",
        "R = ∫<sub>0</sub><sup>E<sub>0</sub></sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}",
        "R = ∫<sub>0</sub><sup>E<sub>0</sub></sup> N[S<sub>n</sub>(E) + S<sub>e</sub>(E)] dE"
      ],
      ans: 2,
      exp: "Separating variables gives dx = −dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}. Integrating x from 0 to R while energy falls from E<sub>0</sub> to 0 yields R = ∫<sub>0</sub><sup>E<sub>0</sub></sup> dE / {N[S<sub>n</sub>(E) + S<sub>e</sub>(E)]}. Writing R as the upper limit of the energy integral is a classic exam trap."
    },
    {
      id: "M14-030",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "In ion implantation depth profiles, how does the projected range R<sub>p</sub> compare with the total zig-zag path length R, and what is the correct technical term for the standard deviation ΔR<sub>p</sub> of the implanted depth distribution?",
      options: [
        "R<sub>p</sub> &lt; R, and ΔR<sub>p</sub> is called the 'struggle'",
        "R<sub>p</sub> &lt; R, and ΔR<sub>p</sub> is called the 'straggle'",
        "R<sub>p</sub> &gt; R, and ΔR<sub>p</sub> is called the 'struggle'",
        "R<sub>p</sub> = R always, and ΔR<sub>p</sub> is called the 'segregation length'"
      ],
      ans: 1,
      exp: "Because elastic nuclear collisions deflect ions laterally along a zig-zag trajectory, the mean perpendicular penetration depth (projected range R<sub>p</sub>) is strictly less than the total path length R (R<sub>p</sub> &lt; R). The statistical standard deviation ΔR<sub>p</sub> is called STRAGGLE (NOT 'struggle'!)."
    },
    {
      id: "M14-031",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "What are the correct temperature range, duration, and dual objectives of post-implantation thermal annealing for silicon wafers?",
      options: [
        "200–300 °C for ≈5 hours solely to strip off the photoresist coating",
        "1450–1600 °C for ≈30 min to volatilise trichlorosilane gas inside the wafer",
        "1800–1000 °C for ≈30 min to remelt the silicon wafer and recrystallise it from the liquid phase",
        "800–1000 °C for ≈30 min to repair crystal lattice damage and electrically activate dopant atoms onto substitutional lattice sites"
      ],
      ans: 3,
      exp: "Post-implant annealing is carried out at 800–1000 °C for ≈30 min — safely below Si's melting point (1414 °C) — to heal collision-induced lattice damage and shift implanted dopants onto electrically active substitutional sites. Watch out for the notebook typo '1800–1000 °C'!"
    },
    {
      id: "M14-032",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An ion with initial energy E<sub>0</sub> = 100 keV (1.0×10<sup>5</sup> eV) is implanted into silicon (atomic density N = 5.0×10<sup>22</sup> cm<sup>−3</sup>). Approximating the total stopping cross-section as a constant S<sub>n</sub> + S<sub>e</sub> = 1.0×10<sup>−13</sup> eV·cm<sup>2</sup>, estimate the total path range R.",
      options: [
        "0.02 μm (20 nm)",
        "2.0 μm (2.0×10<sup>−4</sup> cm)",
        "0.20 μm (200 nm)",
        "20.0 μm (2.0×10<sup>−3</sup> cm)"
      ],
      ans: 2,
      exp: "For constant S<sub>tot</sub> = S<sub>n</sub> + S<sub>e</sub>, the range integral simplifies to R = E<sub>0</sub> / (N·S<sub>tot</sub>). Substituting values: N·S<sub>tot</sub> = (5.0×10<sup>22</sup> cm<sup>−3</sup>)(1.0×10<sup>−13</sup> eV·cm<sup>2</sup>) = 5.0×10<sup>9</sup> eV/cm. Hence R = 1.0×10<sup>5</sup> / 5.0×10<sup>9</sup> = 2.0×10<sup>−5</sup> cm = 0.20 μm = 200 nm."
    },
    {
      id: "M14-033",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "ic_fab",
      q: "In the planar IC fabrication schematic, why is a thermal SiO<sub>2</sub> layer grown and selectively etched open before the doping step (diffusion or ion implantation)?",
      options: [
        "To lower the melting point of the silicon wafer so dopants can enter at room temperature",
        "To convert the entire silicon wafer into metallurgical-grade quartz sand",
        "To act as the primary electrical interconnect wire carrying current between finished transistors",
        "To act as a selective barrier mask blocking dopants everywhere except through lithographically opened windows"
      ],
      ans: 3,
      exp: "Thermally grown SiO<sub>2</sub> exhibits very low dopant diffusivity and stops implanted ions. After lithography opens windows in the oxide, dopants enter the exposed silicon selectively to form precisely localized p–n junctions."
    },
    {
      id: "M14-034",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Immediately after high-dose phosphorus ion implantation into a silicon wafer (prior to thermal annealing), why does the implanted layer still exhibit unexpectedly high electrical resistivity?",
      options: [
        "Because the implanted phosphorus ions immediately diffuse out of the wafer at room temperature",
        "Because collision lattice damage degrades mobility and most implanted ions sit in inactive interstitial sites",
        "Because electronic stopping permanently widens the band gap of silicon to 6 eV",
        "Because phosphorus is a trivalent Group III acceptor that cancels existing electrons"
      ],
      ans: 1,
      exp: "As-implanted wafers suffer heavy crystal disorder (even amorphisation) that destroys carrier mobility, and most dopant atoms stop at interstitial sites where they cannot donate/accept electrons. Annealing at 800–1000 °C restores crystallinity and moves dopants onto electrically active substitutional sites."
    },
    {
      id: "M14-035",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Before photoresist is coated onto a silicon wafer during photolithography, how is the wafer surface cleaned to remove organic residues and fine particulates?",
      options: [
        "Soaking the wafer in molten aluminium to dissolve surface contaminants",
        "Exposing the wafer directly to high-energy arsenic ion bombardment",
        "Abrasive sandblasting with coarse quartz sand at 1800 °C",
        "Ultrasonic bath cleaning using reagents such as H<sub>2</sub>O<sub>2</sub>, methanol, acetone, or propanol"
      ],
      ans: 3,
      exp: "Step 1 of photolithography is rigorous wafer cleaning — typically in an ultrasonic bath using chemical reagents such as H<sub>2</sub>O<sub>2</sub>, methanol, acetone, or propanol — to eliminate particles and organic films that would cause patterning defects."
    },
    {
      id: "M14-036",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "ic_fab",
      q: "During the photolithography (masking) sequence shown in IC processing, how is the circuit pattern transferred onto the silicon dioxide layer?",
      options: [
        "Dopant atoms are sprayed onto the wafer first and then coated with liquid glass",
        "UV-sensitive photoresist is spin-coated, exposed via a photomask, and developed to shield areas during etching",
        "SiO<sub>2</sub> is directly vaporised by ultrasonic vibrations without any photosensitive coating",
        "A thick metal sheet is glued permanently onto the wafer and hammered through a stencil"
      ],
      ans: 1,
      exp: "In photolithography, a thin, uniform layer of low-viscosity UV-sensitive photoresist is spin-coated onto the cleaned wafer, exposed through a patterned photomask, and chemically developed. The remaining hardened resist protects underlying regions while exposed oxide is selectively etched away."
    },
    {
      id: "M14-037",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In integrated circuit manufacturing, what is the exact distinction between Front-End-of-Line (FEOL) and Back-End-of-Line (BEOL) processing?",
      options: [
        "FEOL fabricates individual transistors, resistors, and diodes; BEOL builds the metal interconnect wiring",
        "FEOL performs metallization and packaging; BEOL performs thermal oxidation and ion implantation",
        "FEOL grows the raw single-crystal ingot from sand; BEOL slices and polishes the wafers",
        "FEOL applies only to Float-Zone wafers; BEOL applies only to Czochralski wafers"
      ],
      ans: 0,
      exp: "FEOL (Front-End-of-Line) encompasses fabricating individual active and passive devices (transistors, resistors, capacitors, diodes) directly in the Si substrate. BEOL (Back-End-of-Line) builds the multi-level metallization wiring that interconnects those devices into a complete IC."
    },
    {
      id: "M14-038",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which statement accurately describes the industrial deposition methods used for IC metallization?",
      options: [
        "Electroplating was historically the sole method used for aluminium interconnects, whereas PVD is never used",
        "Only electric arc furnaces and fluidised beds are used for depositing sub-micron interconnect tracks",
        "PVD and CVD are standard IC methods, while low-cost electroplating is used for modern Cu damascene (avoided historically for Al)",
        "PVD and CVD cannot deposit metals, so all IC interconnects are formed by solid-state diffusion from platinum boats"
      ],
      ans: 2,
      exp: "IC metallization relies heavily on PVD (sputtering) and CVD. Electroplating offers low cost and is the cornerstone of modern copper damascene interconnects, whereas simple wet electroplating was historically avoided for mass-produced aluminium interconnects."
    },
    {
      id: "M14-039",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Hard",
      type: "Conceptual",
      diagram: null,
      q: "Why is an Al–Si alloy (containing ≈1% Si) used instead of pure aluminium for forming ohmic contacts directly on silicon devices?",
      options: [
        "Adding 1% Si converts aluminium into a ferromagnetic alloy that shields transistors from magnetic flux",
        "Pure Al dissolves substrate Si during sintering causing junction spiking; ~1% Si suppresses Si dissolution",
        "Pure Al is an electrical insulator at room temperature until doped with 1% Si",
        "Pure Al cannot be deposited by PVD sputtering unless mixed with silicon dioxide"
      ],
      ans: 1,
      exp: "During thermal contact sintering, Si has finite solid solubility (~1%) in pure Al. Si atoms diffuse out of the substrate into pure Al, and Al fills the resulting pits, spiking right through shallow p–n junctions ('junction spiking'). Pre-saturating Al with ~1% Si removes the driving force for Si dissolution."
    },
    {
      id: "M14-040",
      chapter: "Ch 16: Semiconductor Fab & IC Processing",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why are small additions of copper alloyed into aluminium interconnect lines (Al–Cu alloy) in integrated circuits?",
      options: [
        "To resist electromigration, where high-density electron wind displaces atoms and forms open-circuit voids",
        "To eliminate the need for SiO<sub>2</sub> dielectric isolation between adjacent metal tracks",
        "To increase the solid solubility of silicon in aluminium and promote junction spiking",
        "To lower the melting point of the interconnect lines below 300 °C"
      ],
      ans: 0,
      exp: "Under very high current densities in narrow IC tracks, momentum transfer from flowing electrons ('electron wind') pushes Al atoms along grain boundaries, forming voids (open circuits) and hillocks (shorts) — a failure mode called electromigration. Adding small amounts of Cu segregates to grain boundaries and dramatically resists electromigration."
    }
  ]
});
