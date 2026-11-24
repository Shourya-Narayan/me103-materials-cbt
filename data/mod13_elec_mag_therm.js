window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod13",
  questions: [
    {
      id: "M13-001",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "How do continuous energy bands originate in crystalline silicon (Z = 14, configuration 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup>) as isolated atoms are brought together to the equilibrium interatomic spacing r<sub>0</sub>?",
      options: [
        "The 3p electrons are completely ionised from every Si atom, leaving only discrete core states",
        "The discrete 3s and 3p valence orbitals hybridise and broaden into continuous VB and CB bands separated by E<sub>g</sub>",
        "Only the inner 1s and 2s core orbitals overlap and merge into a single continuous conduction band",
        "All atomic shells collapse into a single degenerate energy level with zero band gap at r<sub>0</sub>"
      ],
      ans: 1,
      exp: "As isolated Si atoms approach equilibrium spacing r<sub>0</sub>, Pauli exclusion and interatomic orbital overlap cause the discrete 3s and 3p valence states to hybridise and split into vast numbers of closely spaced levels, forming continuous Valence (VB) and Conduction (CB) bands separated by the forbidden gap E<sub>g</sub>."
    },
    {
      id: "M13-002",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "What are the accurate forbidden energy band gap values E<sub>g</sub> of pure crystalline silicon at room temperature (300 K) and at absolute zero (0 K), respectively?",
      options: [
        "1.12 eV at 300 K and 1.17 eV at 0 K",
        "1.17 eV at 300 K and 1.12 eV at 0 K",
        "0.72 eV at 300 K and 0.78 eV at 0 K",
        "1.16 eV at 300 K and 1.21 eV at 0 K"
      ],
      ans: 0,
      exp: "Pure Si has E<sub>g</sub> = 1.12 eV at 300 K and 1.17 eV at 0 K (lattice thermal expansion slightly narrows E<sub>g</sub> as temperature rises). A common exam trap is writing 1.16 eV for room-temperature silicon or reversing the 0 K and 300 K values."
    },
    {
      id: "M13-003",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "energy_bands",
      q: "Referring to the energy band classification diagram for solids, which set of band-gap criteria correctly distinguishes a conductor (metal), a semiconductor, and an insulator?",
      options: [
        "Conductor: small E<sub>g</sub> ≈ 1 eV; Semiconductor: E<sub>g</sub> = 0; Insulator: E<sub>g</sub> ≈ 2 eV",
        "Conductor: E<sub>g</sub> = 0; Semiconductor: E<sub>g</sub> &gt; 6 eV; Insulator: 0.7 eV &lt; E<sub>g</sub> &lt; 1.1 eV",
        "Conductor: E<sub>g</sub> = 0 (CB & VB overlap); Semiconductor: small E<sub>g</sub> &lt; 3 eV; Insulator: large E<sub>g</sub> &gt; 3 eV",
        "Conductor: E<sub>g</sub> &gt; 3 eV; Semiconductor: 1 eV &lt; E<sub>g</sub> &lt; 3 eV; Insulator: E<sub>g</sub> = 0"
      ],
      ans: 2,
      exp: "Metals have overlapping Conduction and Valence bands (E<sub>g</sub> = 0). Semiconductors have a small forbidden gap (E<sub>g</sub> &lt; 3 eV, typically 0.7–1.1 eV for Ge and Si), whereas insulators have a wide forbidden gap (E<sub>g</sub> &gt; 3 eV, e.g., ~6 eV for diamond or Al<sub>2</sub>O<sub>3</sub>)."
    },
    {
      id: "M13-004",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Which row correctly matches the typical room-temperature electrical resistivity range ρ (in Ω·cm) and representative materials for conductors, semiconductors, and insulators?",
      options: [
        "Conductors: 10<sup>−6</sup>–10<sup>−3</sup> (Ag, Cu, Al, Fe); Semiconductors: 10<sup>−3</sup>–10<sup>3</sup> (Si, Ge, GaAs); Insulators: 10<sup>3</sup>–10<sup>9</sup> or higher (Diamond, glass, Al<sub>2</sub>O<sub>3</sub>)",
        "Conductors: 10<sup>−6</sup>–10<sup>−3</sup> (Si, GaAs); Semiconductors: 10<sup>−3</sup>–10<sup>3</sup> (Cu, Fe); Insulators: 10<sup>3</sup>–10<sup>9</sup> (Diamond)",
        "Conductors: 10<sup>−3</sup>–10<sup>3</sup> (Ag, Cu); Semiconductors: 10<sup>−6</sup>–10<sup>−3</sup> (Si, Ge); Insulators: 10<sup>3</sup>–10<sup>9</sup> (Al<sub>2</sub>O<sub>3</sub>)",
        "Conductors: 10<sup>−9</sup>–10<sup>−6</sup> (Cu, Al); Semiconductors: 10<sup>6</sup>–10<sup>9</sup> (Si, Ge); Insulators: 10<sup>−3</sup>–10<sup>3</sup> (Glass)"
      ],
      ans: 0,
      exp: "Typical resistivity spans are: metals/conductors ρ = 10<sup>−6</sup>–10<sup>−3</sup> Ω·cm (Ag, Cu, Al, Fe); semiconductors ρ = 10<sup>−3</sup>–10<sup>3</sup> Ω·cm (Si, Ge, GaAs, with E<sub>g</sub>(Ge) = 0.66–0.72 eV and E<sub>g</sub>(Si) = 1.12 eV); insulators ρ = 10<sup>3</sup>–10<sup>9</sup> Ω·cm or higher (diamond, glass, Al<sub>2</sub>O<sub>3</sub>)."
    },
    {
      id: "M13-005",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which pair of electrical responses represents the two hallmark characteristic properties of semiconductors compared with ordinary metals?",
      options: [
        "Positive temperature coefficient of resistivity and complete insensitivity to incident light",
        "Zero resistivity at room temperature and spontaneous ferromagnetic domain alignment",
        "Resistivity remains strictly constant with temperature and doubles under visible light",
        "Resistivity decreases with increasing temperature and resistivity changes upon illumination (photoconductivity)"
      ],
      ans: 3,
      exp: "Semiconductors exhibit (1) a negative temperature coefficient of resistivity — ρ decreases as temperature rises because more charge carriers are thermally excited across E<sub>g</sub> — and (2) photoconductivity, where absorbed photons generate electron–hole pairs and alter resistivity."
    },
    {
      id: "M13-006",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "energy_bands",
      q: "On the semiconductor energy band diagram, how do the Fermi level E<sub>F</sub> and dopant energy levels behave across intrinsic, n-type, and p-type silicon?",
      options: [
        "Intrinsic: E<sub>F</sub> lies inside VB; n-type: E<sub>D</sub> lies at mid-gap; p-type: E<sub>A</sub> lies at mid-gap",
        "Intrinsic: E<sub>F</sub> lies near mid-gap; n-type: donor level E<sub>D</sub> lies near CB and E<sub>F</sub> shifts toward CB; p-type: acceptor level E<sub>A</sub> lies near VB and E<sub>F</sub> shifts toward VB",
        "Intrinsic: E<sub>F</sub> lies near mid-gap; n-type: donor level E<sub>D</sub> lies near VB and E<sub>F</sub> shifts toward VB; p-type: E<sub>A</sub> lies near CB",
        "Intrinsic: E<sub>F</sub> lies inside CB; n-type: E<sub>F</sub> shifts toward VB; p-type: E<sub>F</sub> shifts toward CB"
      ],
      ans: 1,
      exp: "In intrinsic Si (n = p = n<sub>i</sub>), E<sub>F</sub> sits near the middle of the band gap. In n-type Si, pentavalent donors introduce level E<sub>D</sub> just below the CB and shift E<sub>F</sub> toward the CB. In p-type Si, trivalent acceptors introduce level E<sub>A</sub> just above the VB and shift E<sub>F</sub> toward the VB."
    },
    {
      id: "M13-007",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "To fabricate an extrinsic n-type silicon semiconductor in which electrons are the majority charge carriers, which group of dopant elements should be added?",
      options: [
        "Tetravalent (Group IV) isovalent elements such as C, Ge, or Sn",
        "Divalent (Group II) alkaline-earth elements such as Mg or Ca",
        "Trivalent (Group III) acceptor elements such as B, Al, Ga, or In",
        "Pentavalent (Group V) donor elements such as P, As, or Sb"
      ],
      ans: 3,
      exp: "Pure Si forms 4 covalent bonds per atom. Substituting a pentavalent Group V donor atom (P, As, Sb) supplies 4 bonding electrons plus a 5th loosely bound electron at donor level E<sub>D</sub> near the CB, which easily ionises to make electrons the majority carriers."
    },
    {
      id: "M13-008",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Doping pure silicon with boron (B), aluminium (Al), gallium (Ga), or indium (In) produces which type of extrinsic semiconductor and majority carrier?",
      options: [
        "n-type semiconductor with free electrons as majority carriers and donor level E<sub>D</sub> near CB",
        "p-type semiconductor with holes as majority carriers and acceptor level E<sub>A</sub> near VB",
        "Intrinsic semiconductor with strictly equal concentrations n = p = n<sub>i</sub>",
        "Degenerate metal with completely overlapping valence and conduction bands"
      ],
      ans: 1,
      exp: "B, Al, Ga, and In are trivalent (Group III) acceptor impurities with only 3 valence electrons. Each substitutional atom leaves an electron-deficient covalent bond (a hole), creating an acceptor level E<sub>A</sub> near the VB and making holes the majority carriers (p-type)."
    },
    {
      id: "M13-009",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "energy_bands",
      q: "Using the energy band diagram of a metal, why do conductors like Cu and Al exhibit very high electrical conductivity even at low temperatures?",
      options: [
        "Because overlapping CB and VB (E<sub>g</sub> = 0) provide abundant unfilled states right next to filled states with no gap to cross",
        "Because trivalent acceptor impurities inside metals automatically supply holes near the valence band edge",
        "Because the Fermi level lies deep below the valence band, preventing electrons from scattering off phonons",
        "Because their band gap E<sub>g</sub> ≈ 1.12 eV shrinks to zero only when an external electric field is applied"
      ],
      ans: 0,
      exp: "In metals, the CB and VB overlap (E<sub>g</sub> = 0). Electrons near the Fermi level can move freely into adjacent empty states under an infinitesimally small electric field with no energy gap to overcome, giving high conductivity even near 0 K."
    },
    {
      id: "M13-010",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "energy_bands",
      q: "Comparing diamond (E<sub>g</sub> ≈ 6 eV), silicon (E<sub>g</sub> = 1.12 eV), and germanium (E<sub>g</sub> = 0.66–0.72 eV) on the energy band diagram at 300 K, which statement is physically accurate?",
      options: [
        "Si has a higher intrinsic carrier concentration n<sub>i</sub> than Ge at 300 K because 1.12 eV is larger than 0.72 eV",
        "All three solids possess identical intrinsic carrier concentrations at 300 K because thermal energy k<sub>B</sub>T is identical",
        "Diamond has a higher intrinsic carrier concentration n<sub>i</sub> than Si because its wider gap stores more thermal energy",
        "Ge has a much higher intrinsic carrier concentration n<sub>i</sub> than Si at 300 K due to its narrower E<sub>g</sub>, while thermal excitation across diamond's ~6 eV gap is negligible"
      ],
      ans: 3,
      exp: "Thermal excitation across the band gap decreases exponentially with E<sub>g</sub>. At 300 K, Ge (E<sub>g</sub> = 0.66–0.72 eV) has n<sub>i</sub> ≈ 2.5×10<sup>19</sup> m<sup>−3</sup>, roughly 10<sup>3</sup> times higher than Si (E<sub>g</sub> = 1.12 eV, n<sub>i</sub> ≈ 1.5×10<sup>16</sup> m<sup>−3</sup>), whereas diamond (E<sub>g</sub> ≈ 6 eV &gt; 3 eV) behaves as an insulator with virtually zero thermally excited carriers."
    },
    {
      id: "M13-011",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Formula",
      diagram: null,
      q: "From classical free-electron conduction theory (F = qE, acceleration a = qE/m, mean free time τ), which expressions correctly give the drift velocity v<sub>d</sub> and charge-carrier mobility μ?",
      options: [
        "v<sub>d</sub> = μE with μ = qτ/m (SI unit: m<sup>2</sup>/(V·s))",
        "v<sub>d</sub> = μ/E with μ = qEτ/m (SI unit: m/s)",
        "v<sub>d</sub> = μE<sup>2</sup> with μ = qm/τ (SI unit: m<sup>2</sup>·V/s)",
        "v<sub>d</sub> = E/μ with μ = m/(qτ) (SI unit: V·s/m<sup>2</sup>)"
      ],
      ans: 0,
      exp: "An electric field E exerts force F = qE, giving acceleration a = qE/m. Over mean collision time τ, the average drift velocity is v<sub>d</sub> = aτ = (qτ/m)E = μE, defining carrier mobility μ = qτ/m in m<sup>2</sup>/(V·s)."
    },
    {
      id: "M13-012",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "For a conductor of cross-sectional area A containing free-carrier concentration n (charge q) drifting at average speed v<sub>d</sub> = μE, which pair of equations correctly expresses electric current I and current density J?",
      options: [
        "I = qAv<sub>d</sub>/n and J = qμE/n = ρE",
        "I = qnA/v<sub>d</sub> and J = qn/(Av<sub>d</sub>) = σ/E",
        "I = qnAv<sub>d</sub> and J = I/A = qnv<sub>d</sub> = qnμE = σE",
        "I = qnv<sub>d</sub>/A and J = qnAv<sub>d</sub> = E/σ"
      ],
      ans: 2,
      exp: "In time t, charges within length l = v<sub>d</sub>t (volume Av<sub>d</sub>t) cross a section, so N = nAv<sub>d</sub>t and I = qN/t = qnAv<sub>d</sub>. Dividing by A yields J = I/A = qnv<sub>d</sub> = qnμE = σE, giving σ = qnμ."
    },
    {
      id: "M13-013",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which statement correctly identifies the SI units of electrical conductivity σ = qnμ and electrical resistivity ρ = 1/σ?",
      options: [
        "σ is expressed in S/m (equivalently Ω<sup>−1</sup>·m<sup>−1</sup>), whereas ρ is expressed in Ω·m",
        "Both σ and ρ are expressed in Ω·m because they describe the same Ohm's law constant",
        "σ is expressed in Ω·m, whereas ρ is expressed in S/m (or Ω<sup>−1</sup>·m<sup>−1</sup>)",
        "σ is expressed in A/(V·m<sup>2</sup>), whereas ρ is expressed in V·m<sup>2</sup>/A"
      ],
      ans: 0,
      exp: "From J = σE, σ = J/E has units (A/m<sup>2</sup>)/(V/m) = A/(V·m) = Ω<sup>−1</sup>·m<sup>−1</sup> = S/m. Resistivity ρ = 1/σ has units Ω·m. Writing Ω·m as the unit of conductivity is a classic exam trap."
    },
    {
      id: "M13-014",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "In a semiconductor where both electrons (concentration n, mobility μ<sub>e</sub>) and holes (concentration p, mobility μ<sub>h</sub>) carry current, what are the general conductivity σ and intrinsic conductivity σ<sub>i</sub>?",
      options: [
        "General: σ = q(n/μ<sub>e</sub> + p/μ<sub>h</sub>); Intrinsic: σ<sub>i</sub> = qn<sub>i</sub>/(μ<sub>e</sub> + μ<sub>h</sub>)",
        "General: σ = q(nμ<sub>e</sub> − pμ<sub>h</sub>); Intrinsic: σ<sub>i</sub> = qn<sub>i</sub>(μ<sub>e</sub> − μ<sub>h</sub>)",
        "General: σ = q(nμ<sub>e</sub> + pμ<sub>h</sub>); Intrinsic: σ<sub>i</sub> = qn<sub>i</sub>(μ<sub>e</sub> + μ<sub>h</sub>)",
        "General: σ = q(n + p)μ<sub>e</sub>μ<sub>h</sub>; Intrinsic: σ<sub>i</sub> = 2qn<sub>i</sub>μ<sub>e</sub>μ<sub>h</sub>"
      ],
      ans: 2,
      exp: "Electrons and holes carry opposite charges and drift in opposite directions under E, so their conventional currents ADD constructively: σ = q(nμ<sub>e</sub> + pμ<sub>h</sub>). For an intrinsic semiconductor, n = p = n<sub>i</sub>, simplifying to σ<sub>i</sub> = qn<sub>i</sub>(μ<sub>e</sub> + μ<sub>h</sub>)."
    },
    {
      id: "M13-015",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "In pure intrinsic silicon and germanium at room temperature, electron and hole concentrations are strictly equal (n = p = n<sub>i</sub>). Why does the electron component σ<sub>e</sub> nevertheless contribute a substantially larger fraction of total conductivity than the hole component σ<sub>h</sub>?",
      options: [
        "Because conduction-band electrons have a higher mobility than valence-band holes (μ<sub>e</sub> &gt; μ<sub>h</sub>)",
        "Because intrinsic silicon automatically contains residual phosphorus donors",
        "Because electrons carry a larger magnitude of electric charge than holes (|q<sub>e</sub>| &gt; |q<sub>h</sub>|)",
        "Because holes move in the opposite direction to the electric field and cancel part of the current"
      ],
      ans: 0,
      exp: "Since σ<sub>e</sub> = qn<sub>i</sub>μ<sub>e</sub> and σ<sub>h</sub> = qn<sub>i</sub>μ<sub>h</sub> with identical q and n<sub>i</sub>, the ratio σ<sub>e</sub>/σ<sub>h</sub> = μ<sub>e</sub>/μ<sub>h</sub>. Because μ<sub>e</sub> &gt; μ<sub>h</sub> (e.g., 0.13 vs 0.05 m<sup>2</sup>/(V·s) in Si; 0.38 vs 0.18 m<sup>2</sup>/(V·s) in Ge), electrons carry the larger share of current."
    },
    {
      id: "M13-016",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Diagram",
      diagram: "energy_bands",
      q: "When an intrinsic semiconductor is heated from 300 K to 450 K, how does the occupancy of the energy bands change and what net effect does this produce on electrical resistivity ρ?",
      options: [
        "Electrons drop from CB into VB, decreasing n<sub>i</sub> and causing ρ to increase sharply",
        "Carrier concentration n<sub>i</sub> stays fixed while lattice scattering reduces τ, so ρ increases linearly",
        "The band gap E<sub>g</sub> expands to exceed 3 eV, converting the semiconductor into an insulator",
        "Thermal excitation across E<sub>g</sub> sharply increases electron–hole pairs (n<sub>i</sub>), dominating mobility loss and lowering ρ"
      ],
      ans: 3,
      exp: "Raising temperature supplies thermal energy to break covalent bonds and excite electrons from the VB across E<sub>g</sub> into the CB, generating equal numbers of electrons and holes. The steep exponential increase in n<sub>i</sub> overwhelms the modest decrease in mobility μ, causing σ to surge and ρ = 1/σ to drop."
    },
    {
      id: "M13-017",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Why does the electrical resistivity of a pure metal (like Cu) increase with rising temperature, in direct contrast to an intrinsic semiconductor (like Si)?",
      options: [
        "In metals, positive holes recombine with free electrons at elevated temperatures",
        "In metals, the forbidden band gap widens rapidly with temperature and traps conduction electrons",
        "In metals, carrier density n is fixed, while stronger thermal lattice vibrations shorten τ and reduce mobility μ",
        "In metals, heating decreases the free-electron concentration n exponentially while mobility increases"
      ],
      ans: 2,
      exp: "Because CB and VB overlap in metals, free-electron density n is already huge (~10<sup>29</sup> m<sup>−3</sup>) and nearly independent of temperature. Heating increases atomic thermal vibrations (phonons), which scatter electrons more frequently, lowering τ and μ = qτ/m, thereby lowering σ = qnμ and raising ρ."
    },
    {
      id: "M13-018",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A round copper wire of diameter d = 1 mm has electrical conductivity σ = 5.8×10<sup>7</sup> S/m. What length l of this wire is required to provide a total electrical resistance of R = 1 kΩ?",
      options: [
        "45.55 km",
        "4.56 km",
        "182.2 km",
        "11.39 km"
      ],
      ans: 0,
      exp: "Using R = l/(σA) ⇒ l = RσA = Rσπr<sup>2</sup>. With r = d/2 = 0.5×10<sup>−3</sup> m, R = 10<sup>3</sup> Ω, and σ = 5.8×10<sup>7</sup> S/m: l = 10<sup>3</sup> × 5.8×10<sup>7</sup> × π × (0.5×10<sup>−3</sup>)<sup>2</sup> = 45,553 m = 45.55 km."
    },
    {
      id: "M13-019",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A copper wire with electrical conductivity σ = 5.8×10<sup>7</sup> S/m carries current under an applied uniform electric field E = 10 mV/m. Calculate the resulting current density J.",
      options: [
        "5.80×10<sup>5</sup> A/m<sup>2</sup>",
        "5.80×10<sup>8</sup> A/m<sup>2</sup>",
        "5.80×10<sup>9</sup> A/m<sup>2</sup>",
        "5.80×10<sup>4</sup> A/m<sup>2</sup>"
      ],
      ans: 0,
      exp: "By the microscopic Ohm's law, J = σE. Converting E = 10 mV/m = 10×10<sup>−3</sup> V/m = 0.01 V/m gives J = (5.8×10<sup>7</sup> S/m)(0.01 V/m) = 5.80×10<sup>5</sup> A/m<sup>2</sup>."
    },
    {
      id: "M13-020",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Copper has electrical conductivity σ = 5.8×10<sup>7</sup> S/m and free-electron mobility μ = 0.0032 m<sup>2</sup>/(V·s). Taking q = 1.6×10<sup>−19</sup> C, determine the free-electron concentration n in copper.",
      options: [
        "2.97×10<sup>23</sup> m<sup>−3</sup>",
        "1.133×10<sup>29</sup> m<sup>−3</sup>",
        "1.133×10<sup>26</sup> m<sup>−3</sup>",
        "3.63×10<sup>26</sup> m<sup>−3</sup>"
      ],
      ans: 1,
      exp: "From σ = qnμ, we solve for n = σ/(qμ) = (5.8×10<sup>7</sup>) / (1.6×10<sup>−19</sup> × 0.0032) = 5.8×10<sup>7</sup> / 5.12×10<sup>−22</sup> = 1.133×10<sup>29</sup> m<sup>−3</sup>."
    },
    {
      id: "M13-021",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A cylindrical copper wire of diameter d = 2 mm (σ = 5.8×10<sup>7</sup> S/m, μ = 0.0032 m<sup>2</sup>/(V·s)) experiences an electric field E = 20 mV/m. Find the total current I flowing in the wire and the electron drift velocity v<sub>d</sub>.",
      options: [
        "I = 14.58 A, v<sub>d</sub> = 6.40×10<sup>−2</sup> m/s",
        "I = 0.91 A, v<sub>d</sub> = 3.20×10<sup>−5</sup> m/s",
        "I = 1.82 A, v<sub>d</sub> = 1.60×10<sup>−4</sup> m/s",
        "I = 3.64 A, v<sub>d</sub> = 6.40×10<sup>−5</sup> m/s"
      ],
      ans: 3,
      exp: "First, J = σE = (5.8×10<sup>7</sup>)(20×10<sup>−3</sup>) = 1.16×10<sup>6</sup> A/m<sup>2</sup>. Wire radius r = d/2 = 1.0×10<sup>−3</sup> m, so A = πr<sup>2</sup> = 3.1416×10<sup>−6</sup> m<sup>2</sup> and I = JA = (1.16×10<sup>6</sup>)(3.1416×10<sup>−6</sup>) = 3.64 A. Drift velocity v<sub>d</sub> = μE = (0.0032)(0.020) = 6.40×10<sup>−5</sup> m/s."
    },
    {
      id: "M13-022",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Intrinsic germanium at room temperature has μ<sub>e</sub> = 0.38 m<sup>2</sup>/(V·s), μ<sub>h</sub> = 0.18 m<sup>2</sup>/(V·s), and n<sub>i</sub> = 2.5×10<sup>19</sup> m<sup>−3</sup>. Calculate its electrical conductivity σ<sub>Ge</sub> (take q = 1.6×10<sup>−19</sup> C).",
      options: [
        "0.80 S/m",
        "1.52 S/m",
        "2.24 S/m",
        "4.48 S/m"
      ],
      ans: 2,
      exp: "For an intrinsic semiconductor, σ<sub>Ge</sub> = qn<sub>i</sub>(μ<sub>e</sub> + μ<sub>h</sub>) = (1.6×10<sup>−19</sup>)(2.5×10<sup>19</sup>)(0.38 + 0.18) = 4.0 × 0.56 = 2.24 S/m."
    },
    {
      id: "M13-023",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Intrinsic silicon at room temperature has μ<sub>e</sub> = 0.13 m<sup>2</sup>/(V·s), μ<sub>h</sub> = 0.05 m<sup>2</sup>/(V·s), and n<sub>i</sub> = 1.5×10<sup>16</sup> m<sup>−3</sup>. What is its electrical conductivity σ<sub>Si</sub> (take q = 1.6×10<sup>−19</sup> C)?",
      options: [
        "4.32×10<sup>−2</sup> S/m",
        "1.92×10<sup>−4</sup> S/m",
        "4.32×10<sup>−4</sup> S/m",
        "3.12×10<sup>−4</sup> S/m"
      ],
      ans: 2,
      exp: "Using σ<sub>Si</sub> = qn<sub>i</sub>(μ<sub>e</sub> + μ<sub>h</sub>) = (1.6×10<sup>−19</sup>)(1.5×10<sup>16</sup>)(0.13 + 0.05) = (2.4×10<sup>−3</sup>)(0.18) = 4.32×10<sup>−4</sup> S/m (corresponding to ρ<sub>Si</sub> = 1/σ<sub>Si</sub> ≈ 2315 Ω·m)."
    },
    {
      id: "M13-024",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An intrinsic silicon sample has n<sub>i</sub> = 1.41×10<sup>16</sup> m<sup>−3</sup>, μ<sub>e</sub> = 0.145 m<sup>2</sup>/(V·s), and μ<sub>h</sub> = 0.05 m<sup>2</sup>/(V·s). Compute the total conductivity σ<sub>Si</sub> and the percentage contribution of electrons to total conductivity.",
      options: [
        "σ<sub>Si</sub> = 3.27×10<sup>−4</sup> S/m; electrons contribute 50.0%",
        "σ<sub>Si</sub> = 4.40×10<sup>−4</sup> S/m; electrons contribute 74.4%",
        "σ<sub>Si</sub> = 4.40×10<sup>−4</sup> S/m; electrons contribute 25.6%",
        "σ<sub>Si</sub> = 2.14×10<sup>−4</sup> S/m; electrons contribute 74.4%"
      ],
      ans: 1,
      exp: "Electron conductivity σ<sub>e</sub> = qn<sub>i</sub>μ<sub>e</sub> = (1.6×10<sup>−19</sup>)(1.41×10<sup>16</sup>)(0.145) = 3.27×10<sup>−4</sup> S/m. Hole conductivity σ<sub>h</sub> = qn<sub>i</sub>μ<sub>h</sub> = (1.6×10<sup>−19</sup>)(1.41×10<sup>16</sup>)(0.05) = 1.13×10<sup>−4</sup> S/m. Total σ<sub>Si</sub> = 4.40×10<sup>−4</sup> S/m. Electron share = μ<sub>e</sub>/(μ<sub>e</sub> + μ<sub>h</sub>) = 0.145/0.195 = 74.4% (holes: 25.6%)."
    },
    {
      id: "M13-025",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An n-type silicon bar of length L = 0.2 mm and cross-section 0.2 × 0.2 mm<sup>2</sup> has a voltage V = 1 V applied across its length. Given electron mobility μ<sub>n</sub> = 1300 cm<sup>2</sup>/(V·s), calculate the electric field E and electron drift velocity v<sub>d</sub>.",
      options: [
        "E = 500 V/m and v<sub>d</sub> = 65 m/s",
        "E = 5000 V/m and v<sub>d</sub> = 650 m/s",
        "E = 200 V/m and v<sub>d</sub> = 26 m/s",
        "E = 5000 V/m and v<sub>d</sub> = 6.5×10<sup>6</sup> m/s"
      ],
      ans: 1,
      exp: "Convert to SI units: L = 0.2 mm = 2.0×10<sup>−4</sup> m, so E = V/L = 1 / (2.0×10<sup>−4</sup>) = 5000 V/m. Convert mobility: μ<sub>n</sub> = 1300 cm<sup>2</sup>/(V·s) = 1300×10<sup>−4</sup> = 0.13 m<sup>2</sup>/(V·s). Therefore, v<sub>d</sub> = μ<sub>n</sub>E = 0.13 × 5000 = 650 m/s."
    },
    {
      id: "M13-026",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "The same n-type silicon bar (cross-section 0.2 × 0.2 mm<sup>2</sup>, electron drift velocity v<sub>d</sub> = 650 m/s) carries a steady current I = 8 mA. Calculate the current density J and the free-electron concentration n (take q = 1.6×10<sup>−19</sup> C).",
      options: [
        "J = 2.0×10<sup>2</sup> A/m<sup>2</sup>; n = 1.92×10<sup>18</sup> m<sup>−3</sup>",
        "J = 2.0×10<sup>5</sup> A/m<sup>2</sup>; n = 1.92×10<sup>15</sup> m<sup>−3</sup>",
        "J = 2.0×10<sup>5</sup> A/m<sup>2</sup>; n = 1.92×10<sup>21</sup> m<sup>−3</sup>",
        "J = 4.0×10<sup>4</sup> A/m<sup>2</sup>; n = 3.85×10<sup>20</sup> m<sup>−3</sup>"
      ],
      ans: 2,
      exp: "Cross-sectional area A = (0.2×10<sup>−3</sup> m)<sup>2</sup> = 4.0×10<sup>−8</sup> m<sup>2</sup>. Current density J = I/A = (8×10<sup>−3</sup>)/(4.0×10<sup>−8</sup>) = 2.0×10<sup>5</sup> A/m<sup>2</sup>. Since J = qnv<sub>d</sub>, n = J/(qv<sub>d</sub>) = (2.0×10<sup>5</sup>) / (1.6×10<sup>−19</sup> × 650) = 1.923×10<sup>21</sup> m<sup>−3</sup> = 1.92×10<sup>15</sup> cm<sup>−3</sup>."
    },
    {
      id: "M13-027",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A silicon wafer is doped with phosphorus to a free-electron concentration n = 4.0×10<sup>22</sup> m<sup>−3</sup> (n ≫ p). If the electron mobility is μ<sub>e</sub> = 0.12 m<sup>2</sup>/(V·s), what are its electrical conductivity σ and resistivity ρ?",
      options: [
        "σ = 76.8 S/m; ρ = 1.30×10<sup>−2</sup> Ω·m",
        "σ = 768 S/m; ρ = 1.30×10<sup>−3</sup> Ω·m (0.130 Ω·cm)",
        "σ = 7.68×10<sup>4</sup> S/m; ρ = 1.30×10<sup>−5</sup> Ω·m",
        "σ = 640 S/m; ρ = 1.56×10<sup>−3</sup> Ω·m"
      ],
      ans: 1,
      exp: "Because n ≫ p, hole conduction is negligible: σ ≈ qnμ<sub>e</sub> = (1.6×10<sup>−19</sup>)(4.0×10<sup>22</sup>)(0.12) = 768 S/m. Resistivity ρ = 1/σ = 1/768 = 1.302×10<sup>−3</sup> Ω·m = 0.130 Ω·cm."
    },
    {
      id: "M13-028",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Pure silver has a free-electron density n = 5.86×10<sup>28</sup> m<sup>−3</sup> and electron mobility μ = 0.0056 m<sup>2</sup>/(V·s). Calculate its room-temperature electrical conductivity σ and resistivity ρ (q = 1.6×10<sup>−19</sup> C).",
      options: [
        "σ = 5.25×10<sup>5</sup> S/m; ρ = 1.90×10<sup>−6</sup> Ω·m",
        "σ = 5.25×10<sup>7</sup> S/m; ρ = 1.90×10<sup>−8</sup> Ω·m",
        "σ = 3.28×10<sup>7</sup> S/m; ρ = 3.05×10<sup>−8</sup> Ω·m",
        "σ = 1.67×10<sup>8</sup> S/m; ρ = 5.98×10<sup>−9</sup> Ω·m"
      ],
      ans: 1,
      exp: "Using σ = qnμ = (1.6×10<sup>−19</sup>)(5.86×10<sup>28</sup>)(0.0056) = 5.251×10<sup>7</sup> S/m. Therefore, ρ = 1/σ = 1/(5.251×10<sup>7</sup>) = 1.905×10<sup>−8</sup> Ω·m (≈ 1.90×10<sup>−8</sup> Ω·m)."
    },
    {
      id: "M13-029",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "Which pairing correctly gives the definitions and SI units of magnetic flux Φ and magnetic flux density B?",
      options: [
        "Φ in Weber (Wb); B = Φ/A in Tesla (T = Wb/m<sup>2</sup>)",
        "Φ in Tesla (T); B = ΦA in Weber (Wb)",
        "Φ in Wb/m<sup>2</sup>; B = A/Φ in Tesla (T)",
        "Φ in A/m; B = Φ/A in H/m"
      ],
      ans: 0,
      exp: "Magnetic flux Φ is measured in Weber (Wb), representing the total magnetic field lines crossing a surface. Magnetic flux density B = Φ/A is the flux per unit area, measured in Tesla (T = Wb/m<sup>2</sup>)."
    },
    {
      id: "M13-030",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "How is the magnetising field strength H (in A/m) related to magnetic flux density B and magnetic permeability μ = μ<sub>0</sub>μ<sub>r</sub>?",
      options: [
        "H = B/μ = B/(μ<sub>0</sub>μ<sub>r</sub>), where μ<sub>0</sub> = 4π×10<sup>−7</sup> H/m",
        "H = μ<sub>0</sub>B/μ<sub>r</sub>, where μ<sub>0</sub> = 4π×10<sup>7</sup> H/m",
        "H = μB, where μ<sub>0</sub> = 4π×10<sup>−7</sup> T/A",
        "H = B/μ<sub>r</sub>, where μ<sub>0</sub> = 8.85×10<sup>−12</sup> H/m"
      ],
      ans: 0,
      exp: "Magnetic flux density obeys B = μH = μ<sub>0</sub>μ<sub>r</sub>H, so magnetising force H = B/μ = B/(μ<sub>0</sub>μ<sub>r</sub>) in A/m, where permeability of free space is μ<sub>0</sub> = 4π×10<sup>−7</sup> H/m."
    },
    {
      id: "M13-031",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which pair of equations accurately defines magnetic susceptibility χ and its connection to relative permeability μ<sub>r</sub>?",
      options: [
        "χ = H/M (dimensionless) and μ<sub>r</sub> = 1/χ",
        "χ = B/H (in H/m) and μ<sub>r</sub> = χ − 1",
        "χ = M/B (in A/T) and μ<sub>r</sub> = 1 + χ",
        "χ = M/H (dimensionless) and μ<sub>r</sub> = 1 + χ"
      ],
      ans: 3,
      exp: "Magnetic susceptibility is defined as the dimensionless ratio of magnetisation M (A/m) to applied field strength H (A/m): χ = M/H (NOT M/B!). Substituting M = χH into B = μ<sub>0</sub>(H + M) yields B = μ<sub>0</sub>(1 + χ)H, hence μ<sub>r</sub> = 1 + χ."
    },
    {
      id: "M13-032",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which set of magnetic properties and representative materials accurately describes a diamagnetic solid?",
      options: [
        "Permanent atomic dipoles aligned in domains; χ ≫ 0, μ<sub>r</sub> ≫ 1; examples: Fe, Co, Ni",
        "Zero permanent net dipole moment when H = 0; small negative χ &lt; 0, μ<sub>r</sub> &lt; 1; induced dipoles oppose B and expel flux; examples: Bi, Cu, Au",
        "Zero permanent dipole moment when H = 0; large positive χ &gt; 100, μ<sub>r</sub> &gt; 100; strongly concentrates flux; examples: Bi, Al, Fe",
        "Randomly oriented permanent dipoles when H = 0; small positive χ &gt; 0, μ<sub>r</sub> &gt; 1; weakly attracted; examples: Al, Pt, O<sub>2</sub>"
      ],
      ans: 1,
      exp: "Diamagnetic materials (Bi, Cu, Au) possess no permanent atomic dipole moment in zero field. An applied field induces weak opposing dipoles (Lenz-like response), giving small negative χ (&lt; 0), μ<sub>r</sub> = 1 + χ &lt; 1, slight flux expulsion, and weak repulsion."
    },
    {
      id: "M13-033",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Which combination correctly characterises paramagnetic materials?",
      options: [
        "Permanent dipoles permanently aligned antiparallel even at H = 0; χ = −1 and μ<sub>r</sub> = 0; examples: Al, Cu, O<sub>2</sub>",
        "Zero permanent dipoles at H = 0; χ &lt; 0 and μ<sub>r</sub> &lt; 1; flux lines expelled; examples: Bi, Cu, Au",
        "Permanent dipoles randomly oriented at H = 0 (net M = 0); small positive χ &gt; 0 and μ<sub>r</sub> &gt; 1; weakly aligned and attracted; examples: Al, Pt, O<sub>2</sub>",
        "Permanent dipoles locked in macroscopic domains; χ ≫ 0 and μ<sub>r</sub> ≫ 1; permanent magnetisation; examples: Fe, Co, Ni"
      ],
      ans: 2,
      exp: "Paramagnetic substances (Al, Pt, O<sub>2</sub>) contain permanent atomic/molecular magnetic dipoles that are thermally randomised at H = 0 (M = 0). In an external field, partial alignment gives small positive χ &gt; 0, μ<sub>r</sub> &gt; 1, weak attraction, and slight flux concentration."
    },
    {
      id: "M13-034",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "Why do ferromagnetic materials such as Fe, Co, and Ni exhibit enormous magnetic susceptibility (χ ≫ 0, μ<sub>r</sub> ≫ 1) and retain permanent magnetisation?",
      options: [
        "Because thermal agitation aligns individual atoms completely only above 1000 °C",
        "Because orbital electrons induce opposing currents that lock magnetic flux outside the crystal",
        "Because their valence and conduction bands are separated by a wide forbidden energy gap",
        "Because permanent atomic dipoles are spontaneously coupled in magnetic domains that grow strongly along the applied field B"
      ],
      ans: 3,
      exp: "In ferromagnetic materials (Fe, Co, Ni), exchange interactions group permanent atomic dipoles into magnetic domains. Under an applied field B, favourably oriented domains grow rapidly and align with B, producing χ ≫ 0, μ<sub>r</sub> ≫ 1, intense attraction, and permanent magnetisation."
    },
    {
      id: "M13-035",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "Three rods made of bismuth (Bi), platinum (Pt), and cobalt (Co) are placed individually inside a uniform external magnetic field. How do the magnetic flux lines behave inside the three rods?",
      options: [
        "Pt expels flux lines (μ<sub>r</sub> &lt; 1); Bi slightly concentrates them (μ<sub>r</sub> &gt; 1); Co expels flux completely",
        "Bi and Pt both expel flux lines equally, while Co slightly concentrates them",
        "Bi strongly concentrates flux lines; Pt expels flux lines; Co has no effect on flux lines",
        "Bi slightly expels flux lines (μ<sub>r</sub> &lt; 1); Pt slightly concentrates flux lines (μ<sub>r</sub> &gt; 1); Co strongly concentrates flux lines (μ<sub>r</sub> ≫ 1)"
      ],
      ans: 3,
      exp: "Bi is diamagnetic (χ &lt; 0, μ<sub>r</sub> &lt; 1 → weakly expels magnetic flux), Pt is paramagnetic (small χ &gt; 0, μ<sub>r</sub> &gt; 1 → slightly concentrates flux), and Co is ferromagnetic (χ ≫ 0, μ<sub>r</sub> ≫ 1 → intensely concentrates magnetic flux)."
    },
    {
      id: "M13-036",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A paramagnetic aluminium rod with magnetic susceptibility χ = 2.2×10<sup>−5</sup> is placed in a magnetising field H = 5.0×10<sup>5</sup> A/m. Calculate the magnetisation M and magnetic flux density B inside the rod (μ<sub>0</sub> = 4π×10<sup>−7</sup> H/m).",
      options: [
        "M = 2.27×10<sup>10</sup> A/m; B = 0.6283 T",
        "M = 0.11 A/m; B = 6.283 T",
        "M = 11.0 A/m; B = 0.6283 T",
        "M = 11.0 A/m; B = 1.38×10<sup>−5</sup> T"
      ],
      ans: 2,
      exp: "Magnetisation M = χH = (2.2×10<sup>−5</sup>)(5.0×10<sup>5</sup>) = 11.0 A/m. Relative permeability μ<sub>r</sub> = 1 + χ = 1.000022. Thus B = μ<sub>0</sub>μ<sub>r</sub>H = (4π×10<sup>−7</sup>)(1.000022)(5.0×10<sup>5</sup>) = 0.6283 T."
    },
    {
      id: "M13-037",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A ferromagnetic soft-iron core (μ<sub>r</sub> = 1200) of cross-sectional area A = 4.0 cm<sup>2</sup> is subjected to a magnetising field H = 250 A/m. Find its magnetic susceptibility χ, flux density B, and total magnetic flux Φ.",
      options: [
        "χ = 1199; B = 3.14×10<sup>−4</sup> T; Φ = 1.26×10<sup>−7</sup> Wb",
        "χ = 1200; B = 3.77 T; Φ = 1.51×10<sup>−3</sup> Wb",
        "χ = 1201; B = 0.377 T; Φ = 1.51×10<sup>−2</sup> Wb",
        "χ = 1199; B = 0.377 T; Φ = 1.51×10<sup>−4</sup> Wb"
      ],
      ans: 3,
      exp: "Susceptibility χ = μ<sub>r</sub> − 1 = 1200 − 1 = 1199. Flux density B = μ<sub>0</sub>μ<sub>r</sub>H = (4π×10<sup>−7</sup>)(1200)(250) = 0.3770 T. Converting A = 4.0 cm<sup>2</sup> = 4.0×10<sup>−4</sup> m<sup>2</sup>, total flux Φ = BA = (0.3770)(4.0×10<sup>−4</sup>) = 1.508×10<sup>−4</sup> Wb ≈ 1.51×10<sup>−4</sup> Wb."
    },
    {
      id: "M13-038",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "Which expression correctly defines specific heat capacity c and its SI unit?",
      options: [
        "c = E/(mΔT) with SI unit J/(kg·K) or J/(kg·°C)",
        "c = E/(A·ΔT) with SI unit W/(m·K)",
        "c = E·m/ΔT with SI unit J·kg/K",
        "c = mΔT/E with SI unit kg·K/J"
      ],
      ans: 0,
      exp: "Specific heat capacity c = E/(mΔT) is the thermal energy E required to raise the temperature of unit mass (1 kg) of a material by 1 K (or 1 °C), expressed in J/(kg·K) or J/(kg·°C)."
    },
    {
      id: "M13-039",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "According to Fourier's Law of steady-state one-dimensional heat conduction, how are the heat transfer rate dQ/dt and thermal conductivity k formulated?",
      options: [
        "dQ/dt = −(k/A)(dT/dx) ⇒ k = −A(dQ/dt)/(dT/dx), with k in W·m/K",
        "dQ/dt = −kA(dx/dT) ⇒ k = −(dQ/dt)(dT/dx)/A, with k in W/(m<sup>2</sup>·K)",
        "dQ/dt = kA(dT/dx) ⇒ k = (dQ/dt)/[A(dT/dx)], with k in J/(kg·K)",
        "dQ/dt = −kA(dT/dx) ⇒ k = −(dQ/dt) / [A(dT/dx)], with k in W/(m·K)"
      ],
      ans: 3,
      exp: "Fourier's Law states dQ/dt = −kA(dT/dx), so thermal conductivity k = −(dQ/dt) / [A(dT/dx)]. Since dQ/dt is in W, A in m<sup>2</sup>, and dT/dx in K/m, k has SI units W/(m·K)."
    },
    {
      id: "M13-040",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "What is the physical meaning of the negative sign in Fourier's Law of thermal conduction, dQ/dt = −kA(dT/dx)?",
      options: [
        "The cross-sectional area A decreases as temperature rises along the x-axis",
        "Heat flows spontaneously from higher to lower temperature (dT/dx &lt; 0), giving positive dQ/dt along +x",
        "Heat is always absorbed rather than conducted whenever a solid possesses a non-zero temperature gradient",
        "Thermal conductivity k is inherently a negative constant for all crystalline metals"
      ],
      ans: 1,
      exp: "In accordance with the Second Law of Thermodynamics, heat flows down the temperature gradient from high T to low T. When temperature decreases along +x, dT/dx &lt; 0; the minus sign ensures positive k and positive heat flow dQ/dt &gt; 0 in the +x direction."
    },
    {
      id: "M13-041",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "How much thermal energy E is required to heat a 2.5 kg aluminium block (specific heat capacity c = 900 J/(kg·K)) from 25 °C to 145 °C?",
      options: [
        "56.3 kJ",
        "108.0 kJ",
        "270.0 kJ",
        "326.3 kJ"
      ],
      ans: 2,
      exp: "Temperature change ΔT = 145 − 25 = 120 °C = 120 K. Using E = mcΔT = (2.5 kg)(900 J/(kg·K))(120 K) = 270,000 J = 270.0 kJ."
    },
    {
      id: "M13-042",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "A 1.5 kg metal specimen absorbs 41.4 kJ of thermal energy, causing its temperature to increase by 60 K. What is the specific heat capacity c of the metal?",
      options: [
        "276 J/(kg·K)",
        "460 J/(kg·K)",
        "1035 J/(kg·K)",
        "690 J/(kg·K)"
      ],
      ans: 1,
      exp: "Rearranging E = mcΔT gives c = E/(mΔT) = 41,400 J / (1.5 kg × 60 K) = 41,400 / 90 = 460 J/(kg·K)."
    },
    {
      id: "M13-043",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A flat copper plate (k = 385 W/(m·K)) has a cross-sectional area A = 0.04 m<sup>2</sup> and thickness Δx = 20 mm. If its opposite faces are maintained at 150 °C and 50 °C under steady state, determine the rate of heat conduction dQ/dt.",
      options: [
        "77.0 W",
        "154.0 kW",
        "7.70 kW",
        "77.0 kW"
      ],
      ans: 3,
      exp: "Convert thickness Δx = 20 mm = 0.020 m, and temperature gradient dT/dx = (50 − 150)/0.020 = −5000 K/m. By Fourier's Law, dQ/dt = −kA(dT/dx) = −(385)(0.04)(−5000) = 77,000 W = 77.0 kW."
    },
    {
      id: "M13-044",
      chapter: "Ch 15: Electrical, Magnetic & Thermal Properties",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "A 15 mm thick ceramic thermal barrier of cross-sectional area 0.05 m<sup>2</sup> conducts heat steadily at a rate of 120 W when a temperature difference of 180 K is maintained across its faces. Calculate the thermal conductivity k of the ceramic.",
      options: [
        "2.00 W/(m·K)",
        "0.02 W/(m·K)",
        "0.20 W/(m·K)",
        "1.33 W/(m·K)"
      ],
      ans: 2,
      exp: "From Fourier's Law, k = (dQ/dt)·Δx / (A·ΔT). Converting Δx = 15 mm = 0.015 m: k = (120 W × 0.015 m) / (0.05 m<sup>2</sup> × 180 K) = 1.80 / 9.0 = 0.20 W/(m·K)."
    }
  ]
});
