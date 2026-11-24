// ME 103 Engineering Materials — Interactive SVG Diagrams & Master Formula Sheet
window.ME103_DIAGRAMS = {
  crystal_systems: {
    title: "7 Crystal Systems & Interaxial Angles",
    caption: "α = ∠(y,z), β = ∠(x,z), γ = ∠(x,y) — Total 14 Bravais Lattices",
    svg: `<svg viewBox="0 0 640 215" class="cbt-svg" role="img" aria-label="Crystal coordinate system and Bravais summary">
      <defs>
        <marker id="arrC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1L10 5L0 9Z" fill="var(--cyan)"/></marker>
      </defs>
      <!-- Coordinate Axes -->
      <g transform="translate(88,125)">
        <line x1="0" y1="0" x2="0" y2="-82" stroke="var(--cyan)" stroke-width="2" marker-end="url(#arrC)"/>
        <line x1="0" y1="0" x2="82" y2="0" stroke="var(--cyan)" stroke-width="2" marker-end="url(#arrC)"/>
        <line x1="0" y1="0" x2="-46" y2="48" stroke="var(--cyan)" stroke-width="2" marker-end="url(#arrC)"/>
        <path d="M 0 -28 A 28 28 0 0 1 28 0" fill="none" stroke="var(--emerald)" stroke-width="2"/>
        <path d="M 0 -22 A 22 22 0 0 0 -15 16" fill="none" stroke="var(--rose)" stroke-width="2"/>
        <path d="M -20 21 A 29 29 0 0 0 24 0" fill="none" stroke="var(--amber)" stroke-width="2"/>
        <text x="-5" y="-90" fill="var(--text)" font-size="13" font-weight="700">z (c)</text>
        <text x="88" y="4" fill="var(--text)" font-size="13" font-weight="700">y (b)</text>
        <text x="-66" y="64" fill="var(--text)" font-size="13" font-weight="700">x (a)</text>
        <text x="19" y="-17" fill="var(--emerald)" font-size="13" font-weight="700">α</text>
        <text x="-26" y="-8" fill="var(--rose)" font-size="13" font-weight="700">β</text>
        <text x="-3" y="29" fill="var(--amber)" font-size="13" font-weight="700">γ</text>
      </g>
      <!-- Compact Bravais Table Visual -->
      <g transform="translate(215,16)" font-size="11.5" fill="var(--text)">
        <rect x="0" y="0" width="410" height="184" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="14" y="22" font-weight="700" fill="var(--cyan)">System</text>
        <text x="122" y="22" font-weight="700" fill="var(--cyan)">Axes &amp; Angles</text>
        <text x="308" y="22" font-weight="700" fill="var(--cyan)">Bravais (14)</text>
        <line x1="10" y1="30" x2="400" y2="30" stroke="var(--border)"/>
        <text x="14" y="49">1. Cubic</text><text x="122" y="49" fill="var(--muted)">a=b=c; α=β=γ=90°</text><text x="308" y="49" fill="var(--emerald)">SC, BCC, FCC (3)</text>
        <text x="14" y="70">2. Tetragonal</text><text x="122" y="70" fill="var(--muted)">a=b≠c; α=β=γ=90°</text><text x="308" y="70" fill="var(--emerald)">SC, BCC (2)</text>
        <text x="14" y="91">3. Orthorhombic</text><text x="122" y="91" fill="var(--muted)">a≠b≠c; α=β=γ=90°</text><text x="308" y="91" fill="var(--amber)">SC,BCC,FCC,EC (4)</text>
        <text x="14" y="112">4. Rhombohedral</text><text x="122" y="112" fill="var(--muted)">a=b=c; α=β=γ≠90°</text><text x="308" y="112" fill="var(--muted)">Simple (1)</text>
        <text x="14" y="133">5. Hexagonal</text><text x="122" y="133" fill="var(--muted)">a=b≠c; α=β=90°, γ=120°</text><text x="308" y="133" fill="var(--muted)">Simple (1)</text>
        <text x="14" y="154">6. Monoclinic</text><text x="122" y="154" fill="var(--muted)">a≠b≠c; α=γ=90°≠β</text><text x="308" y="154" fill="var(--rose)">Simple, End-C (2)</text>
        <text x="14" y="175">7. Triclinic</text><text x="122" y="175" fill="var(--muted)">a≠b≠c; α≠β≠γ≠90°</text><text x="308" y="175" fill="var(--muted)">Simple (1)</text>
      </g>
    </svg>`
  },

  cubic_cells: {
    title: "Cubic Unit Cells — SC, BCC & FCC Packing",
    caption: "Touch directions: SC edge (a=2r), BCC body diagonal (√3a=4r), FCC face diagonal (√2a=4r)",
    svg: `<svg viewBox="0 0 640 205" class="cbt-svg" role="img" aria-label="SC BCC FCC unit cells">
      <!-- SC -->
      <g transform="translate(38,24)">
        <rect x="20" y="25" width="90" height="90" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>
        <rect x="0" y="45" width="90" height="90" fill="none" stroke="var(--cyan)" stroke-width="1.8"/>
        <line x1="0" y1="45" x2="20" y2="25" stroke="var(--cyan)" stroke-width="1.4"/>
        <line x1="90" y1="45" x2="110" y2="25" stroke="var(--cyan)" stroke-width="1.4"/>
        <line x1="90" y1="135" x2="110" y2="115" stroke="var(--cyan)" stroke-width="1.4"/>
        <line x1="0" y1="135" x2="20" y2="115" stroke="var(--muted)" stroke-dasharray="3 3"/>
        <line x1="0" y1="135" x2="90" y2="135" stroke="var(--amber)" stroke-width="3.2"/>
        <circle cx="0" cy="45" r="5" fill="var(--cyan)"/><circle cx="90" cy="45" r="5" fill="var(--cyan)"/>
        <circle cx="0" cy="135" r="5" fill="var(--cyan)"/><circle cx="90" cy="135" r="5" fill="var(--cyan)"/>
        <circle cx="20" cy="25" r="4.5" fill="var(--cyan)" opacity="0.75"/><circle cx="110" cy="25" r="4.5" fill="var(--cyan)" opacity="0.75"/>
        <circle cx="110" cy="115" r="4.5" fill="var(--cyan)" opacity="0.75"/><circle cx="20" cy="115" r="4" fill="var(--cyan)" opacity="0.5"/>
        <text x="55" y="158" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="700">SC (n=1, CN=6)</text>
        <text x="55" y="174" text-anchor="middle" fill="var(--amber)" font-size="11.5">a = 2r | APF = 52%</text>
      </g>
      <!-- BCC -->
      <g transform="translate(248,24)">
        <rect x="20" y="25" width="90" height="90" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>
        <rect x="0" y="45" width="90" height="90" fill="none" stroke="var(--emerald)" stroke-width="1.8"/>
        <line x1="0" y1="45" x2="20" y2="25" stroke="var(--emerald)" stroke-width="1.4"/>
        <line x1="90" y1="45" x2="110" y2="25" stroke="var(--emerald)" stroke-width="1.4"/>
        <line x1="90" y1="135" x2="110" y2="115" stroke="var(--emerald)" stroke-width="1.4"/>
        <line x1="0" y1="135" x2="110" y2="25" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="5 3"/>
        <circle cx="55" cy="80" r="8" fill="var(--rose)"/>
        <circle cx="0" cy="45" r="5" fill="var(--emerald)"/><circle cx="90" cy="45" r="5" fill="var(--emerald)"/>
        <circle cx="0" cy="135" r="5" fill="var(--emerald)"/><circle cx="90" cy="135" r="5" fill="var(--emerald)"/>
        <circle cx="20" cy="25" r="4.5" fill="var(--emerald)" opacity="0.75"/><circle cx="110" cy="25" r="4.5" fill="var(--emerald)" opacity="0.75"/>
        <circle cx="110" cy="115" r="4.5" fill="var(--emerald)" opacity="0.75"/><circle cx="20" cy="115" r="4" fill="var(--emerald)" opacity="0.5"/>
        <text x="55" y="158" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="700">BCC (n=2, CN=8)</text>
        <text x="55" y="174" text-anchor="middle" fill="var(--amber)" font-size="11.5">a = 4r/√3 | APF = 68%</text>
      </g>
      <!-- FCC -->
      <g transform="translate(465,24)">
        <rect x="20" y="25" width="90" height="90" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>
        <rect x="0" y="45" width="90" height="90" fill="none" stroke="var(--violet)" stroke-width="1.8"/>
        <line x1="0" y1="45" x2="20" y2="25" stroke="var(--violet)" stroke-width="1.4"/>
        <line x1="90" y1="45" x2="110" y2="25" stroke="var(--violet)" stroke-width="1.4"/>
        <line x1="90" y1="135" x2="110" y2="115" stroke="var(--violet)" stroke-width="1.4"/>
        <line x1="0" y1="135" x2="90" y2="45" stroke="var(--amber)" stroke-width="2.6"/>
        <circle cx="45" cy="90" r="6.5" fill="var(--amber)"/>
        <circle cx="55" cy="35" r="5.5" fill="var(--amber)" opacity="0.8"/>
        <circle cx="100" cy="80" r="5.5" fill="var(--amber)" opacity="0.8"/>
        <circle cx="10" cy="80" r="5" fill="var(--amber)" opacity="0.55"/>
        <circle cx="55" cy="125" r="5" fill="var(--amber)" opacity="0.55"/>
        <circle cx="65" cy="70" r="5" fill="var(--amber)" opacity="0.55"/>
        <circle cx="0" cy="45" r="5" fill="var(--violet)"/><circle cx="90" cy="45" r="5" fill="var(--violet)"/>
        <circle cx="0" cy="135" r="5" fill="var(--violet)"/><circle cx="90" cy="135" r="5" fill="var(--violet)"/>
        <circle cx="110" cy="25" r="4.5" fill="var(--violet)" opacity="0.75"/><circle cx="110" cy="115" r="4.5" fill="var(--violet)" opacity="0.75"/>
        <text x="55" y="158" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="700">FCC (n=4, CN=12)</text>
        <text x="55" y="174" text-anchor="middle" fill="var(--amber)" font-size="11.5">a = 2√2r | APF = 74%</text>
      </g>
    </svg>`
  },

  miller_hex: {
    title: "Hexagonal 4-Axis System & Key Cubic Crystal Planes",
    caption: "Hexagonal: a₁+a₂+a₃=0 (120° apart), z ⊥ basal plane | Cubic planes: (111), (110), (002)",
    svg: `<svg viewBox="0 0 640 200" class="cbt-svg" role="img" aria-label="Hexagonal axes and cubic Miller planes">
      <!-- Hexagonal basal axes -->
      <g transform="translate(125,100)">
        <polygon points="62,0 31,-54 -31,-54 -62,0 -31,54 31,54" fill="var(--surface-2)" stroke="var(--muted)" stroke-width="1.4"/>
        <line x1="0" y1="0" x2="78" y2="0" stroke="var(--cyan)" stroke-width="2.2"/>
        <line x1="0" y1="0" x2="-39" y2="-67" stroke="var(--cyan)" stroke-width="2.2"/>
        <line x1="0" y1="0" x2="-39" y2="67" stroke="var(--cyan)" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="8" fill="var(--bg)" stroke="var(--amber)" stroke-width="2"/>
        <circle cx="0" cy="0" r="2.6" fill="var(--amber)"/>
        <path d="M 22 0 A 22 22 0 0 0 -11 -19" fill="none" stroke="var(--emerald)" stroke-width="1.8"/>
        <text x="10" y="-17" fill="var(--emerald)" font-size="11" font-weight="700">120°</text>
        <text x="82" y="4" fill="var(--cyan)" font-size="12" font-weight="700">a₁</text>
        <text x="-53" y="-68" fill="var(--cyan)" font-size="12" font-weight="700">a₂</text>
        <text x="-53" y="76" fill="var(--cyan)" font-size="12" font-weight="700">a₃</text>
        <text x="10" y="20" fill="var(--amber)" font-size="11">z (c-axis out)</text>
        <text x="0" y="92" text-anchor="middle" fill="var(--muted)" font-size="11">t = −(u+v) | i = −(h+k)</text>
      </g>
      <!-- (111) plane -->
      <g transform="translate(285,30)">
        <rect x="18" y="14" width="76" height="76" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/>
        <rect x="0" y="32" width="76" height="76" fill="none" stroke="var(--muted)"/>
        <line x1="0" y1="32" x2="18" y2="14" stroke="var(--muted)"/><line x1="76" y1="32" x2="94" y2="14" stroke="var(--muted)"/>
        <line x1="76" y1="108" x2="94" y2="90" stroke="var(--muted)"/>
        <polygon points="0,108 94,90 18,14" fill="rgba(52,211,153,0.28)" stroke="var(--emerald)" stroke-width="2.2"/>
        <text x="48" y="135" text-anchor="middle" fill="var(--emerald)" font-size="12.5" font-weight="700">(111)</text>
        <text x="48" y="151" text-anchor="middle" fill="var(--muted)" font-size="11">intercepts: 1, 1, 1</text>
      </g>
      <!-- (002) plane -->
      <g transform="translate(405,30)">
        <rect x="18" y="14" width="76" height="76" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/>
        <rect x="0" y="32" width="76" height="76" fill="none" stroke="var(--muted)"/>
        <line x1="0" y1="32" x2="18" y2="14" stroke="var(--muted)"/><line x1="76" y1="32" x2="94" y2="14" stroke="var(--muted)"/>
        <line x1="76" y1="108" x2="94" y2="90" stroke="var(--muted)"/>
        <polygon points="0,70 76,70 94,52 18,52" fill="rgba(56,189,248,0.28)" stroke="var(--cyan)" stroke-width="2.2"/>
        <text x="48" y="135" text-anchor="middle" fill="var(--cyan)" font-size="12.5" font-weight="700">(002)</text>
        <text x="48" y="151" text-anchor="middle" fill="var(--muted)" font-size="11">intercepts: ∞, ∞, ½</text>
      </g>
      <!-- (110) plane -->
      <g transform="translate(525,30)">
        <rect x="18" y="14" width="76" height="76" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/>
        <rect x="0" y="32" width="76" height="76" fill="none" stroke="var(--muted)"/>
        <line x1="0" y1="32" x2="18" y2="14" stroke="var(--muted)"/><line x1="76" y1="32" x2="94" y2="14" stroke="var(--muted)"/>
        <line x1="76" y1="108" x2="94" y2="90" stroke="var(--muted)"/>
        <polygon points="0,32 94,14 94,90 0,108" fill="rgba(244,114,182,0.26)" stroke="var(--rose)" stroke-width="2.2"/>
        <text x="48" y="135" text-anchor="middle" fill="var(--rose)" font-size="12.5" font-weight="700">(110)</text>
        <text x="48" y="151" text-anchor="middle" fill="var(--muted)" font-size="11">intercepts: 1, 1, ∞</text>
      </g>
    </svg>`
  },

  cu_ni: {
    title: "Cu–Ni Isomorphous Phase Diagram & Lever Rule Tie-Line",
    caption: "Complete solid & liquid solubility (both FCC) | Tie-line at 1250°C: C_L = 32%, C_0 = 40%, C_α = 43% Ni",
    svg: `<svg viewBox="0 0 600 220" class="cbt-svg" role="img" aria-label="Cu-Ni phase diagram">
      <line x1="70" y1="185" x2="540" y2="185" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="70" y1="185" x2="70" y2="20" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="520" y1="185" x2="520" y2="25" stroke="var(--muted)" stroke-dasharray="3 3"/>
      <!-- Liquidus & Solidus lens -->
      <path d="M 70 140 Q 250 65 520 38" fill="none" stroke="var(--rose)" stroke-width="2.6"/>
      <path d="M 70 140 Q 340 120 520 38" fill="none" stroke="var(--cyan)" stroke-width="2.6"/>
      <path d="M 70 140 Q 250 65 520 38 Q 340 120 70 140 Z" fill="rgba(251,191,36,0.16)"/>
      <!-- Tie line at 1250C -->
      <line x1="214" y1="92" x2="264" y2="92" stroke="var(--amber)" stroke-width="2.6"/>
      <line x1="70" y1="92" x2="214" y2="92" stroke="var(--muted)" stroke-dasharray="4 3"/>
      <line x1="214" y1="92" x2="214" y2="185" stroke="var(--muted)" stroke-dasharray="4 3"/>
      <line x1="250" y1="92" x2="250" y2="185" stroke="var(--emerald)" stroke-dasharray="4 3"/>
      <line x1="264" y1="92" x2="264" y2="185" stroke="var(--muted)" stroke-dasharray="4 3"/>
      <circle cx="214" cy="92" r="4.5" fill="var(--rose)"/>
      <circle cx="250" cy="92" r="5" fill="var(--amber)"/>
      <circle cx="264" cy="92" r="4.5" fill="var(--cyan)"/>
      <!-- Labels -->
      <text x="200" y="50" fill="var(--text)" font-size="14" font-weight="700">L (Liquid)</text>
      <text x="360" y="145" fill="var(--cyan)" font-size="14" font-weight="700">α (Solid Solution)</text>
      <text x="330" y="84" fill="var(--amber)" font-size="12" font-weight="700">L + α</text>
      <text x="165" y="79" fill="var(--rose)" font-size="11.5" font-weight="700">Liquidus</text>
      <text x="370" y="114" fill="var(--cyan)" font-size="11.5" font-weight="700">Solidus</text>
      <text x="64" y="144" text-anchor="end" fill="var(--muted)" font-size="11">1085°C</text>
      <text x="64" y="96" text-anchor="end" fill="var(--amber)" font-size="11" font-weight="700">1250°C</text>
      <text x="526" y="42" fill="var(--muted)" font-size="11">1453°C</text>
      <text x="70" y="203" text-anchor="middle" fill="var(--text)" font-size="11.5" font-weight="700">Cu (0)</text>
      <text x="214" y="203" text-anchor="middle" fill="var(--rose)" font-size="11">32</text>
      <text x="250" y="203" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">40</text>
      <text x="268" y="203" text-anchor="middle" fill="var(--cyan)" font-size="11">43</text>
      <text x="520" y="203" text-anchor="middle" fill="var(--text)" font-size="11.5" font-weight="700">Ni (100 wt%)</text>
    </svg>`
  },

  pb_sn: {
    title: "Pb–Sn Binary Eutectic Phase Diagram",
    caption: "Eutectic at 183°C, 62 wt% Sn: L(62) → α(18% Sn) + β(97% Sn) | Pb: 327°C, Sn: 232°C",
    svg: `<svg viewBox="0 0 600 225" class="cbt-svg" role="img" aria-label="Pb-Sn eutectic phase diagram">
      <line x1="68" y1="190" x2="545" y2="190" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="68" y1="190" x2="68" y2="20" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="528" y1="190" x2="528" y2="25" stroke="var(--text)" stroke-width="1.4"/>
      <!-- Regions -->
      <polygon points="68,48 151,118 68,190" fill="rgba(56,189,248,0.18)"/>
      <polygon points="528,88 514,118 522,190 528,190" fill="rgba(52,211,153,0.22)"/>
      <polygon points="151,118 514,118 522,190 90,190" fill="rgba(251,191,36,0.13)"/>
      <!-- Lines -->
      <polyline points="68,48 353,118 528,88" fill="none" stroke="var(--rose)" stroke-width="2.5"/>
      <line x1="151" y1="118" x2="514" y2="118" stroke="var(--amber)" stroke-width="2.6"/>
      <polyline points="68,48 151,118 90,190" fill="none" stroke="var(--cyan)" stroke-width="2.2"/>
      <polyline points="528,88 514,118 522,190" fill="none" stroke="var(--emerald)" stroke-width="2.2"/>
      <!-- Eutectic Point & Guides -->
      <circle cx="353" cy="118" r="5" fill="var(--amber)"/>
      <line x1="229" y1="40" x2="229" y2="190" stroke="var(--amber)" stroke-dasharray="4 3" opacity="0.7"/>
      <line x1="436" y1="40" x2="436" y2="190" stroke="var(--cyan)" stroke-dasharray="4 3" opacity="0.7"/>
      <!-- Text -->
      <text x="295" y="60" fill="var(--text)" font-size="14" font-weight="700">L (Liquid)</text>
      <text x="165" y="102" fill="var(--emerald)" font-size="12" font-weight="700">L + α</text>
      <text x="448" y="110" fill="var(--emerald)" font-size="12" font-weight="700">L + β</text>
      <text x="95" y="138" fill="var(--cyan)" font-size="13" font-weight="700">α</text>
      <text x="534" y="140" fill="var(--emerald)" font-size="13" font-weight="700">β</text>
      <text x="310" y="158" fill="var(--amber)" font-size="14" font-weight="700">α + β</text>
      <text x="353" y="108" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">E (62%, 183°C)</text>
      <text x="62" y="52" text-anchor="end" fill="var(--muted)" font-size="11">327°C</text>
      <text x="62" y="122" text-anchor="end" fill="var(--amber)" font-size="11" font-weight="700">183°C</text>
      <text x="534" y="91" fill="var(--muted)" font-size="11">232°C</text>
      <text x="68" y="208" text-anchor="middle" fill="var(--text)" font-size="11">Pb (0)</text>
      <text x="151" y="208" text-anchor="middle" fill="var(--cyan)" font-size="11" font-weight="700">18</text>
      <text x="229" y="208" text-anchor="middle" fill="var(--muted)" font-size="10.5">35</text>
      <text x="353" y="208" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">62</text>
      <text x="436" y="208" text-anchor="middle" fill="var(--muted)" font-size="10.5">80</text>
      <text x="514" y="208" text-anchor="middle" fill="var(--emerald)" font-size="11" font-weight="700">97</text>
      <text x="548" y="208" text-anchor="middle" fill="var(--text)" font-size="11">Sn</text>
    </svg>`
  },

  fe_c: {
    title: "Iron–Carbon (Fe–Fe₃C) Equilibrium Phase Diagram (Schematic)",
    caption: "Peritectic 1492°C (0.17% C) | Eutectic 1147°C (4.3% C, Ledeburite) | Eutectoid 727°C (0.8% C, Pearlite)",
    svg: `<svg viewBox="0 0 640 250" class="cbt-svg" role="img" aria-label="Iron-Carbon Fe-Fe3C phase diagram">
      <line x1="68" y1="205" x2="600" y2="205" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="68" y1="205" x2="68" y2="18" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="575" y1="205" x2="575" y2="22" stroke="var(--rose)" stroke-width="1.6"/>
      <!-- Austenite region -->
      <polygon points="68,120 120,45 310,92 225,158 80,158" fill="rgba(52,211,153,0.18)" stroke="var(--emerald)" stroke-width="2"/>
      <!-- Ferrite sliver -->
      <polygon points="68,120 80,158 72,205 68,205" fill="rgba(56,189,248,0.28)" stroke="var(--cyan)" stroke-width="1.8"/>
      <!-- Eutectic & Eutectoid horizontals -->
      <line x1="310" y1="92" x2="575" y2="92" stroke="var(--rose)" stroke-width="2.4"/>
      <line x1="80" y1="158" x2="575" y2="158" stroke="var(--amber)" stroke-width="2.4"/>
      <!-- Liquidus -->
      <polyline points="68,28 145,45 455,92 575,65" fill="none" stroke="var(--cyan)" stroke-width="2.2"/>
      <!-- Peritectic line -->
      <line x1="78" y1="45" x2="145" y2="45" stroke="var(--cyan)" stroke-width="2"/>
      <!-- Vertical dashed markers -->
      <line x1="225" y1="158" x2="225" y2="205" stroke="var(--amber)" stroke-dasharray="4 3"/>
      <line x1="310" y1="92" x2="310" y2="205" stroke="var(--emerald)" stroke-dasharray="4 3"/>
      <line x1="455" y1="92" x2="455" y2="205" stroke="var(--rose)" stroke-dasharray="4 3"/>
      <!-- Invariant dots -->
      <circle cx="118" cy="45" r="4.5" fill="var(--cyan)"/>
      <circle cx="455" cy="92" r="5" fill="var(--rose)"/>
      <circle cx="225" cy="158" r="5" fill="var(--amber)"/>
      <!-- Phase Labels -->
      <text x="360" y="48" fill="var(--text)" font-size="14" font-weight="700">L (Liquid)</text>
      <text x="175" y="102" fill="var(--emerald)" font-size="13" font-weight="700">γ (Austenite, FCC)</text>
      <text x="395" y="132" fill="var(--text)" font-size="12.5" font-weight="700">γ + Fe₃C</text>
      <text x="340" y="186" fill="var(--amber)" font-size="13" font-weight="700">α + Fe₃C</text>
      <text x="108" y="150" fill="var(--cyan)" font-size="11">α+γ</text>
      <text x="72" y="39" fill="var(--cyan)" font-size="10.5" font-weight="700">δ</text>
      <text x="152" y="34" fill="var(--cyan)" font-size="10.5">Peritectic: δ+L⇌γ (1492°C, 0.17%)</text>
      <text x="455" y="81" text-anchor="middle" fill="var(--rose)" font-size="11" font-weight="700">E (4.3%, 1147°C)</text>
      <text x="225" y="172" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">S (0.8%, 727°C)</text>
      <text x="160" y="135" fill="var(--emerald)" font-size="10.5">A₃</text>
      <text x="275" y="132" fill="var(--emerald)" font-size="10.5">Acm</text>
      <text x="530" y="152" fill="var(--amber)" font-size="10.5" font-weight="700">A₁ (727°C)</text>
      <!-- Temp Axis -->
      <text x="63" y="32" text-anchor="end" fill="var(--muted)" font-size="10.5">1539°C</text>
      <text x="63" y="48" text-anchor="end" fill="var(--cyan)" font-size="10.5">1492°C</text>
      <text x="63" y="65" text-anchor="end" fill="var(--muted)" font-size="10.5">1394°C</text>
      <text x="63" y="96" text-anchor="end" fill="var(--rose)" font-size="10.5" font-weight="700">1147°C</text>
      <text x="63" y="124" text-anchor="end" fill="var(--muted)" font-size="10.5">912°C</text>
      <text x="63" y="162" text-anchor="end" fill="var(--amber)" font-size="10.5" font-weight="700">727°C</text>
      <!-- Comp Axis -->
      <text x="68" y="220" text-anchor="middle" fill="var(--text)" font-size="10.5">0 (Fe)</text>
      <text x="225" y="220" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">0.8</text>
      <text x="310" y="220" text-anchor="middle" fill="var(--emerald)" font-size="11" font-weight="700">2.1</text>
      <text x="455" y="220" text-anchor="middle" fill="var(--rose)" font-size="11" font-weight="700">4.3</text>
      <text x="575" y="220" text-anchor="middle" fill="var(--rose)" font-size="11" font-weight="700">6.67% C (Fe₃C)</text>
      <!-- Brackets -->
      <text x="190" y="240" text-anchor="middle" fill="var(--emerald)" font-size="11" font-weight="700">← Steels (≤ 2.1% C) →</text>
      <text x="442" y="240" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">← Cast Irons (2.1–6.67% C) →</text>
    </svg>`
  },

  ttt: {
    title: "Isothermal Transformation (TTT) Diagram for Eutectoid Steel",
    caption: "A₁ = 727°C | Nose ≈ 550°C | Above Nose: Pearlite | Below Nose: Bainite | Ms ≈ 240°C → Mf ≈ 25°C",
    svg: `<svg viewBox="0 0 600 225" class="cbt-svg" role="img" aria-label="TTT diagram">
      <line x1="75" y1="190" x2="555" y2="190" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="75" y1="190" x2="75" y2="18" stroke="var(--text)" stroke-width="1.6"/>
      <!-- A1 line -->
      <line x1="75" y1="45" x2="545" y2="45" stroke="var(--amber)" stroke-width="2" stroke-dasharray="6 4"/>
      <!-- Martensite band -->
      <rect x="76" y="148" width="468" height="30" fill="rgba(244,114,182,0.16)"/>
      <line x1="75" y1="148" x2="545" y2="148" stroke="var(--rose)" stroke-width="2"/>
      <line x1="75" y1="178" x2="545" y2="178" stroke="var(--rose)" stroke-width="1.8" stroke-dasharray="5 3"/>
      <!-- C curves -->
      <path d="M 480 54 Q 200 72 200 100 Q 200 132 510 144" fill="none" stroke="var(--cyan)" stroke-width="2.6"/>
      <path d="M 525 56 Q 260 76 260 100 Q 260 128 535 140" fill="none" stroke="var(--emerald)" stroke-width="2.6"/>
      <circle cx="200" cy="100" r="4.5" fill="var(--amber)"/>
      <!-- Labels -->
      <text x="310" y="34" text-anchor="middle" fill="var(--amber)" font-size="13" font-weight="700">Stable Austenite (γ)</text>
      <text x="125" y="82" fill="var(--muted)" font-size="11.5">Unstable γ</text>
      <text x="135" y="104" fill="var(--amber)" font-size="12" font-weight="700">Nose →</text>
      <text x="255" y="61" fill="var(--cyan)" font-size="11" font-weight="700">Start (1%)</text>
      <text x="478" y="74" fill="var(--emerald)" font-size="11" font-weight="700">End (99%)</text>
      <text x="380" y="89" fill="var(--emerald)" font-size="13.5" font-weight="700">Pearlite</text>
      <text x="380" y="124" fill="var(--amber)" font-size="13.5" font-weight="700">Bainite</text>
      <text x="310" y="167" text-anchor="middle" fill="var(--rose)" font-size="12.5" font-weight="700">Martensite Transformation (Ms → Mf)</text>
      <!-- Axis ticks -->
      <text x="69" y="49" text-anchor="end" fill="var(--amber)" font-size="11" font-weight="700">727°C (A₁)</text>
      <text x="69" y="104" text-anchor="end" fill="var(--text)" font-size="11">550°C</text>
      <text x="69" y="152" text-anchor="end" fill="var(--rose)" font-size="11" font-weight="700">240°C (Ms)</text>
      <text x="69" y="182" text-anchor="end" fill="var(--rose)" font-size="11">25°C (Mf)</text>
      <text x="165" y="208" text-anchor="middle" fill="var(--muted)" font-size="11">Seconds</text>
      <text x="315" y="208" text-anchor="middle" fill="var(--muted)" font-size="11">Minutes</text>
      <text x="465" y="208" text-anchor="middle" fill="var(--muted)" font-size="11">Hours</text>
      <text x="552" y="208" text-anchor="end" fill="var(--text)" font-size="11.5" font-weight="700">log(Time)</text>
    </svg>`
  },

  heat_treat: {
    title: "Heat Treatment Temperature Ranges & Thermal Profiles",
    caption: "Full Annealing / Hardening: 30–50°C above A₃/A₁ | Normalizing: 40–50°C above A₃/Acm (still air) | Tempering: < A₁",
    svg: `<svg viewBox="0 0 640 205" class="cbt-svg" role="img" aria-label="Heat treatment temperature profiles">
      <!-- Box 1: Full Annealing -->
      <g transform="translate(18,16)">
        <rect x="0" y="0" width="190" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <polyline points="18,68 48,26 95,26 172,68" fill="none" stroke="var(--cyan)" stroke-width="2.4"/>
        <text x="72" y="19" text-anchor="middle" fill="var(--cyan)" font-size="10.5" font-weight="700">30–50°C &gt; A₃ (30m–1h)</text>
        <text x="148" y="48" text-anchor="middle" fill="var(--muted)" font-size="10">Furnace</text>
        <text x="95" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Full Annealing (Coarse Pearlite)</text>
      </g>
      <!-- Box 2: Normalizing -->
      <g transform="translate(224,16)">
        <rect x="0" y="0" width="190" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <polyline points="18,68 48,22 95,22 135,68" fill="none" stroke="var(--emerald)" stroke-width="2.4"/>
        <text x="76" y="16" text-anchor="middle" fill="var(--emerald)" font-size="10.5" font-weight="700">40–50°C &gt; A₃/Acm</text>
        <text x="148" y="48" text-anchor="middle" fill="var(--muted)" font-size="10">Still Air</text>
        <text x="95" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Normalizing (Fine Pearlite)</text>
      </g>
      <!-- Box 3: Hardening + Tempering -->
      <g transform="translate(430,16)">
        <rect x="0" y="0" width="192" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <polyline points="14,68 40,26 70,26 84,68 110,44 148,44 176,68" fill="none" stroke="var(--rose)" stroke-width="2.4"/>
        <text x="58" y="19" text-anchor="middle" fill="var(--rose)" font-size="10" font-weight="700">Quench → BCT</text>
        <text x="135" y="38" text-anchor="middle" fill="var(--amber)" font-size="10" font-weight="700">Temper &lt; A₁</text>
        <text x="96" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Hardening &amp; Tempering</text>
      </g>
      <!-- Box 4: Diffusion Annealing -->
      <g transform="translate(18,110)">
        <rect x="0" y="0" width="190" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <polyline points="18,68 42,20 112,20 172,68" fill="none" stroke="var(--amber)" stroke-width="2.4"/>
        <text x="80" y="15" text-anchor="middle" fill="var(--amber)" font-size="10.5" font-weight="700">1100–1200°C (10–20 hr)</text>
        <text x="95" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Diffusion (Homogenizing)</text>
      </g>
      <!-- Box 5: Isothermal Annealing -->
      <g transform="translate(224,110)">
        <rect x="0" y="0" width="190" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <polyline points="16,68 40,22 65,22 82,42 136,42 166,68" fill="none" stroke="var(--violet)" stroke-width="2.4"/>
        <text x="112" y="36" text-anchor="middle" fill="var(--violet)" font-size="10" font-weight="700">Hold 600–700°C</text>
        <text x="95" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Isothermal Annealing</text>
      </g>
      <!-- Box 6: Sub-critical / Recryst -->
      <g transform="translate(430,110)">
        <rect x="0" y="0" width="192" height="82" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
        <line x1="14" y1="26" x2="178" y2="26" stroke="var(--muted)" stroke-dasharray="4 3"/>
        <text x="166" y="22" text-anchor="end" fill="var(--muted)" font-size="9.5">A₁ (727°C)</text>
        <polyline points="16,68 48,40 124,40 168,68" fill="none" stroke="var(--emerald)" stroke-width="2.4"/>
        <text x="88" y="54" text-anchor="middle" fill="var(--emerald)" font-size="10">0.3–0.5 Tm (&lt; A₁)</text>
        <text x="96" y="77" text-anchor="middle" fill="var(--text)" font-size="11" font-weight="700">Partial / Recrystallization</text>
      </g>
    </svg>`
  },

  al_cu: {
    title: "Al–Cu Phase Diagram (Al-Rich) & Age Hardening Curve",
    caption: "Eutectic: 548°C, 33.2% Cu | Max solubility: 5.65% Cu | Sequence: α(ss) → GP-I → GP-II (θ″) → θ′ → θ (CuAl₂)",
    svg: `<svg viewBox="0 0 640 215" class="cbt-svg" role="img" aria-label="Al-Cu phase diagram and age hardening curve">
      <!-- Left: Al-Cu Phase Diagram -->
      <g transform="translate(45,16)">
        <line x1="15" y1="168" x2="275" y2="168" stroke="var(--text)" stroke-width="1.5"/>
        <line x1="15" y1="168" x2="15" y2="15" stroke="var(--text)" stroke-width="1.5"/>
        <polygon points="15,32 52,88 22,168 15,168" fill="rgba(56,189,248,0.22)" stroke="var(--cyan)" stroke-width="2"/>
        <line x1="52" y1="88" x2="250" y2="88" stroke="var(--amber)" stroke-width="2.4"/>
        <polyline points="15,32 175,88 250,70" fill="none" stroke="var(--rose)" stroke-width="2.2"/>
        <line x1="250" y1="70" x2="250" y2="168" stroke="var(--violet)" stroke-width="2.4"/>
        <circle cx="175" cy="88" r="4.5" fill="var(--amber)"/>
        <text x="145" y="42" fill="var(--text)" font-size="13" font-weight="700">L</text>
        <text x="23" y="96" fill="var(--cyan)" font-size="11.5" font-weight="700">α</text>
        <text x="145" y="135" fill="var(--amber)" font-size="13" font-weight="700">α + θ</text>
        <text x="175" y="77" text-anchor="middle" fill="var(--amber)" font-size="10.5" font-weight="700">E (548°C, 33.2%)</text>
        <text x="256" y="122" fill="var(--violet)" font-size="11" font-weight="700">θ (CuAl₂)</text>
        <text x="10" y="36" text-anchor="end" fill="var(--muted)" font-size="10">660°C</text>
        <text x="10" y="92" text-anchor="end" fill="var(--amber)" font-size="10" font-weight="700">548°C</text>
        <text x="10" y="168" text-anchor="end" fill="var(--muted)" font-size="10">300°C</text>
        <text x="15" y="183" text-anchor="middle" fill="var(--text)" font-size="10">Al</text>
        <text x="52" y="183" text-anchor="middle" fill="var(--cyan)" font-size="10" font-weight="700">5.65</text>
        <text x="175" y="183" text-anchor="middle" fill="var(--amber)" font-size="10" font-weight="700">33.2</text>
        <text x="250" y="183" text-anchor="middle" fill="var(--violet)" font-size="10" font-weight="700">52.5% Cu</text>
      </g>
      <!-- Right: Age Hardening Curve -->
      <g transform="translate(365,16)">
        <line x1="25" y1="168" x2="255" y2="168" stroke="var(--text)" stroke-width="1.5"/>
        <line x1="25" y1="168" x2="25" y2="18" stroke="var(--text)" stroke-width="1.5"/>
        <path d="M 32 145 Q 68 112 95 106 Q 130 98 158 42 Q 178 44 238 128" fill="none" stroke="var(--emerald)" stroke-width="2.8"/>
        <circle cx="80" cy="112" r="4" fill="var(--cyan)"/>
        <circle cx="158" cy="42" r="5" fill="var(--amber)"/>
        <circle cx="192" cy="72" r="4" fill="var(--violet)"/>
        <circle cx="232" cy="120" r="4" fill="var(--rose)"/>
        <text x="78" y="100" text-anchor="middle" fill="var(--cyan)" font-size="11" font-weight="700">GP-I</text>
        <text x="156" y="30" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">Peak: GP-II (θ″)/θ′</text>
        <text x="210" y="74" fill="var(--violet)" font-size="11">θ′</text>
        <text x="234" y="142" text-anchor="middle" fill="var(--rose)" font-size="10.5" font-weight="700">Over-aging (θ)</text>
        <text x="22" y="14" fill="var(--text)" font-size="11" font-weight="700">Hardness</text>
        <text x="145" y="186" text-anchor="middle" fill="var(--muted)" font-size="11">Aging Time (log scale) →</text>
      </g>
    </svg>`
  },

  cu_zn: {
    title: "Cu–Zn Brasses — Phases & Mechanical Properties vs wt% Zn",
    caption: "α-Brass (≤36% Zn, FCC): Max Elongation at 30% Zn (Cartridge) | α+β Brass (38–46% Zn): Peak TS near 42% Zn",
    svg: `<svg viewBox="0 0 620 210" class="cbt-svg" role="img" aria-label="Cu-Zn mechanical properties">
      <line x1="65" y1="175" x2="540" y2="175" stroke="var(--text)" stroke-width="1.6"/>
      <line x1="65" y1="175" x2="65" y2="20" stroke="var(--amber)" stroke-width="1.6"/>
      <line x1="540" y1="175" x2="540" y2="20" stroke="var(--cyan)" stroke-width="1.6"/>
      <!-- α vs α+β divider -->
      <rect x="66" y="22" width="342" height="152" fill="rgba(56,189,248,0.06)"/>
      <rect x="408" y="22" width="131" height="152" fill="rgba(251,191,36,0.08)"/>
      <line x1="408" y1="22" x2="408" y2="175" stroke="var(--muted)" stroke-dasharray="5 3"/>
      <!-- Elongation curve (peaks at 30% Zn -> x = 65 + 0.6*475 = 350) -->
      <path d="M 65 112 Q 240 60 350 48 Q 415 58 530 165" fill="none" stroke="var(--cyan)" stroke-width="2.8"/>
      <!-- Tensile Strength curve (peaks at 42% Zn -> x = 65 + 0.84*475 = 464) -->
      <path d="M 65 135 Q 280 124 385 95 Q 445 50 464 52 Q 495 85 535 162" fill="none" stroke="var(--amber)" stroke-width="2.8"/>
      <circle cx="350" cy="48" r="5" fill="var(--cyan)"/>
      <circle cx="464" cy="52" r="5" fill="var(--amber)"/>
      <text x="348" y="37" text-anchor="middle" fill="var(--cyan)" font-size="11.5" font-weight="700">Max Elongation (30% Zn)</text>
      <text x="466" y="40" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">Peak TS (42% Zn)</text>
      <text x="215" y="162" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">α-Brass (FCC, Cold-worked)</text>
      <text x="474" y="162" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">α + β (Hot)</text>
      <text x="15" y="28" fill="var(--amber)" font-size="11" font-weight="700">TS (MPa)</text>
      <text x="546" y="28" fill="var(--cyan)" font-size="11" font-weight="700">Elong. %</text>
      <text x="65" y="193" text-anchor="middle" fill="var(--text)" font-size="11">0% Zn</text>
      <text x="350" y="193" text-anchor="middle" fill="var(--cyan)" font-size="11" font-weight="700">30%</text>
      <text x="408" y="193" text-anchor="middle" fill="var(--muted)" font-size="10.5">36%</text>
      <text x="464" y="193" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">42%</text>
      <text x="540" y="193" text-anchor="middle" fill="var(--text)" font-size="11">50% Zn</text>
    </svg>`
  },

  bonding_curves: {
    title: "Interatomic Force & Potential Energy vs. Separation (r)",
    caption: "At equilibrium spacing r₀: Net Force F_N = F_A + F_R = 0 and Potential Energy E(r) is minimum (−E₀)",
    svg: `<svg viewBox="0 0 640 210" class="cbt-svg" role="img" aria-label="Interatomic force and potential energy curves">
      <!-- Force vs r -->
      <g transform="translate(36,16)">
        <line x1="20" y1="90" x2="265" y2="90" stroke="var(--text)" stroke-width="1.4"/>
        <line x1="20" y1="12" x2="20" y2="174" stroke="var(--text)" stroke-width="1.4"/>
        <!-- Repulsive -->
        <path d="M 48 16 Q 62 76 250 87" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Attractive -->
        <path d="M 48 170 Q 85 112 250 93" fill="none" stroke="var(--rose)" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Net Force -->
        <path d="M 60 22 Q 78 88 94 90 Q 124 126 250 92" fill="none" stroke="var(--amber)" stroke-width="2.8"/>
        <circle cx="94" cy="90" r="4.5" fill="var(--emerald)"/>
        <line x1="94" y1="90" x2="94" y2="165" stroke="var(--emerald)" stroke-dasharray="3 3"/>
        <text x="94" y="177" text-anchor="middle" fill="var(--emerald)" font-size="12" font-weight="700">r₀ (F_N = 0)</text>
        <text x="115" y="34" fill="var(--cyan)" font-size="11">F_R (repulsive +)</text>
        <text x="135" y="156" fill="var(--rose)" font-size="11">F_A (attractive −)</text>
        <text x="172" y="114" fill="var(--amber)" font-size="11.5" font-weight="700">F_N (net)</text>
        <text x="24" y="14" fill="var(--text)" font-size="11" font-weight="700">Force</text>
        <text x="260" y="84" fill="var(--text)" font-size="11" font-weight="700">r</text>
      </g>
      <!-- PE vs r -->
      <g transform="translate(345,16)">
        <line x1="20" y1="90" x2="265" y2="90" stroke="var(--text)" stroke-width="1.4"/>
        <line x1="20" y1="12" x2="20" y2="174" stroke="var(--text)" stroke-width="1.4"/>
        <path d="M 55 18 Q 75 78 250 88" fill="none" stroke="var(--cyan)" stroke-width="1.9" stroke-dasharray="4 3"/>
        <path d="M 55 170 Q 95 118 250 93" fill="none" stroke="var(--rose)" stroke-width="1.9" stroke-dasharray="4 3"/>
        <path d="M 65 24 Q 78 148 94 148 Q 130 146 250 94" fill="none" stroke="var(--amber)" stroke-width="2.8"/>
        <circle cx="94" cy="148" r="4.5" fill="var(--emerald)"/>
        <line x1="20" y1="148" x2="94" y2="148" stroke="var(--emerald)" stroke-dasharray="3 3"/>
        <line x1="94" y1="90" x2="94" y2="148" stroke="var(--emerald)" stroke-dasharray="3 3"/>
        <text x="15" y="151" text-anchor="end" fill="var(--emerald)" font-size="11" font-weight="700">−E₀</text>
        <text x="94" y="83" text-anchor="middle" fill="var(--emerald)" font-size="11.5" font-weight="700">r₀</text>
        <text x="165" y="132" fill="var(--amber)" font-size="11.5" font-weight="700">E_N (min at r₀)</text>
        <text x="24" y="14" fill="var(--text)" font-size="11" font-weight="700">PE (E)</text>
        <text x="260" y="84" fill="var(--text)" font-size="11" font-weight="700">r</text>
      </g>
    </svg>`
  },

  dislocations: {
    title: "Dislocations (Edge, Screw, Mixed) & FCC/BCC Slip Systems",
    caption: "Edge: t̂ ⊥ b⃗ | Screw: t̂ ∥ b⃗ | Mixed: 0° < ∠(t̂,b⃗) < 90° | FCC {111}⟨110⟩ = 12 | BCC {110}⟨111⟩ = 12",
    svg: `<svg viewBox="0 0 640 195" class="cbt-svg" role="img" aria-label="Dislocation geometries and slip systems">
      <!-- Edge -->
      <g transform="translate(26,20)">
        <rect x="0" y="0" width="180" height="156" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="90" y="22" text-anchor="middle" fill="var(--cyan)" font-size="12.5" font-weight="700">Edge Dislocation</text>
        <line x1="65" y1="120" x2="65" y2="48" stroke="var(--cyan)" stroke-width="2.6"/>
        <line x1="65" y1="120" x2="135" y2="120" stroke="var(--rose)" stroke-width="2.6"/>
        <rect x="65" y="108" width="12" height="12" fill="none" stroke="var(--amber)" stroke-width="1.5"/>
        <text x="53" y="55" fill="var(--cyan)" font-size="12" font-weight="700">t̂</text>
        <text x="139" y="124" fill="var(--rose)" font-size="12" font-weight="700">b⃗</text>
        <text x="90" y="144" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">t̂ ⊥ b⃗ (90°) | Extra ½-plane</text>
      </g>
      <!-- Screw -->
      <g transform="translate(230,20)">
        <rect x="0" y="0" width="180" height="156" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="90" y="22" text-anchor="middle" fill="var(--emerald)" font-size="12.5" font-weight="700">Screw Dislocation</text>
        <line x1="78" y1="122" x2="78" y2="46" stroke="var(--cyan)" stroke-width="2.6"/>
        <line x1="102" y1="122" x2="102" y2="56" stroke="var(--rose)" stroke-width="2.6"/>
        <text x="64" y="55" fill="var(--cyan)" font-size="12" font-weight="700">t̂</text>
        <text x="111" y="64" fill="var(--rose)" font-size="12" font-weight="700">b⃗</text>
        <text x="90" y="144" text-anchor="middle" fill="var(--emerald)" font-size="11.5" font-weight="700">t̂ ∥ b⃗ (0°) | Helical shear</text>
      </g>
      <!-- Mixed + Slip -->
      <g transform="translate(434,20)">
        <rect x="0" y="0" width="184" height="156" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="92" y="22" text-anchor="middle" fill="var(--violet)" font-size="12.5" font-weight="700">Mixed &amp; Slip Systems</text>
        <path d="M 38 42 Q 38 96 142 96" fill="none" stroke="var(--amber)" stroke-width="2.8"/>
        <text x="58" y="54" fill="var(--cyan)" font-size="10.5">Edge (90°)</text>
        <text x="115" y="88" fill="var(--emerald)" font-size="10.5">Screw (0°)</text>
        <line x1="14" y1="112" x2="170" y2="112" stroke="var(--border)"/>
        <text x="92" y="130" text-anchor="middle" fill="var(--text)" font-size="11">FCC: {111}⟨110⟩ = 4×3 = 12</text>
        <text x="92" y="146" text-anchor="middle" fill="var(--muted)" font-size="10.5">BCC: {110}⟨111⟩ = 12 (48 high T)</text>
      </g>
    </svg>`
  },

  stress_strain: {
    title: "Engineering vs. True Stress–Strain & Material Behavior",
    caption: "Resilience = elastic area | Toughness = total area to fracture | σ_T = σ(1+ε), ε_T = ln(1+ε)",
    svg: `<svg viewBox="0 0 640 210" class="cbt-svg" role="img" aria-label="Stress-strain curves">
      <!-- Left: Engg vs True -->
      <g transform="translate(36,16)">
        <line x1="20" y1="168" x2="275" y2="168" stroke="var(--text)" stroke-width="1.5"/>
        <line x1="20" y1="168" x2="20" y2="16" stroke="var(--text)" stroke-width="1.5"/>
        <!-- Resilience shaded triangle -->
        <polygon points="20,168 62,168 62,92" fill="rgba(52,211,153,0.22)"/>
        <!-- Engg curve -->
        <path d="M 20 168 L 62 92 L 72 104 Q 115 72 162 62 Q 202 68 232 98" fill="none" stroke="var(--cyan)" stroke-width="2.6"/>
        <!-- True curve -->
        <path d="M 162 62 Q 198 46 232 26" fill="none" stroke="var(--rose)" stroke-width="2.4" stroke-dasharray="5 3"/>
        <circle cx="62" cy="92" r="4" fill="var(--amber)"/>
        <circle cx="72" cy="104" r="4" fill="var(--emerald)"/>
        <circle cx="162" cy="62" r="4.5" fill="var(--amber)"/>
        <text x="158" y="51" text-anchor="middle" fill="var(--amber)" font-size="11.5" font-weight="700">UTS</text>
        <text x="234" y="24" text-anchor="end" fill="var(--rose)" font-size="11" font-weight="700">True σ_T–ε_T</text>
        <text x="236" y="114" text-anchor="end" fill="var(--cyan)" font-size="11">Engg. σ–ε (Fracture)</text>
        <text x="48" y="158" fill="var(--emerald)" font-size="10" font-weight="700">Resil.</text>
        <text x="148" y="142" text-anchor="middle" fill="var(--muted)" font-size="11">Total Area = Toughness</text>
        <text x="26" y="14" fill="var(--text)" font-size="11" font-weight="700">Stress (σ)</text>
        <text x="272" y="184" text-anchor="end" fill="var(--text)" font-size="11">Strain (ε)</text>
      </g>
      <!-- Right: Material Classes -->
      <g transform="translate(345,16)">
        <line x1="20" y1="168" x2="275" y2="168" stroke="var(--text)" stroke-width="1.5"/>
        <line x1="20" y1="168" x2="20" y2="16" stroke="var(--text)" stroke-width="1.5"/>
        <line x1="20" y1="168" x2="62" y2="34" stroke="var(--rose)" stroke-width="2.6"/>
        <path d="M 20 168 L 52 94 Q 115 74 188 80" fill="none" stroke="var(--cyan)" stroke-width="2.6"/>
        <path d="M 20 168 Q 115 148 258 122" fill="none" stroke="var(--amber)" stroke-width="2.6"/>
        <text x="68" y="38" fill="var(--rose)" font-size="11.5" font-weight="700">Brittle (Glass)</text>
        <text x="190" y="72" text-anchor="middle" fill="var(--cyan)" font-size="11.5" font-weight="700">Ductile (Cu, Al)</text>
        <text x="200" y="152" text-anchor="middle" fill="var(--amber)" font-size="11" font-weight="700">Elastomer (Non-Hookean)</text>
        <text x="26" y="14" fill="var(--text)" font-size="11" font-weight="700">Stress (σ)</text>
        <text x="272" y="184" text-anchor="end" fill="var(--text)" font-size="11">Strain (ε)</text>
      </g>
    </svg>`
  },

  composites_rom: {
    title: "Composite Rule of Mixtures (ROM) & Polymer Tacticity",
    caption: "Iso-Strain E∥ = EfVf + EmVm | Iso-Stress 1/E⊥ = Vf/Ef + Vm/Em | Isotactic/Syndiotactic (Crystalline) vs Atactic (Amorphous)",
    svg: `<svg viewBox="0 0 640 200" class="cbt-svg" role="img" aria-label="Composites ROM and Polymer Tacticity">
      <!-- Composite Iso-Strain -->
      <g transform="translate(20,18)">
        <rect x="0" y="0" width="148" height="164" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="74" y="21" text-anchor="middle" fill="var(--cyan)" font-size="11.5" font-weight="700">Longitudinal (Iso-Strain)</text>
        <rect x="34" y="42" width="80" height="72" fill="rgba(56,189,248,0.12)" stroke="var(--cyan)"/>
        <line x1="50" y1="42" x2="50" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <line x1="74" y1="42" x2="74" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <line x1="98" y1="42" x2="98" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <text x="74" y="36" text-anchor="middle" fill="var(--emerald)" font-size="10.5" font-weight="700">↑ Load ∥ Fibres</text>
        <text x="74" y="136" text-anchor="middle" fill="var(--text)" font-size="11.5" font-weight="700">E∥ = EfVf + EmVm</text>
        <text x="74" y="153" text-anchor="middle" fill="var(--muted)" font-size="10">Upper bound (εc=εf=εm)</text>
      </g>
      <!-- Composite Iso-Stress -->
      <g transform="translate(182,18)">
        <rect x="0" y="0" width="154" height="164" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="77" y="21" text-anchor="middle" fill="var(--rose)" font-size="11.5" font-weight="700">Transverse (Iso-Stress)</text>
        <rect x="37" y="42" width="80" height="72" fill="rgba(244,114,182,0.12)" stroke="var(--rose)"/>
        <line x1="53" y1="42" x2="53" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <line x1="77" y1="42" x2="77" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <line x1="101" y1="42" x2="101" y2="114" stroke="var(--amber)" stroke-width="4"/>
        <text x="16" y="82" fill="var(--emerald)" font-size="11" font-weight="700">←</text>
        <text x="124" y="82" fill="var(--emerald)" font-size="11" font-weight="700">→</text>
        <text x="77" y="136" text-anchor="middle" fill="var(--text)" font-size="11.5" font-weight="700">1/E⊥ = Vf/Ef + Vm/Em</text>
        <text x="77" y="153" text-anchor="middle" fill="var(--muted)" font-size="10">Lower bound (σc=σf=σm)</text>
      </g>
      <!-- Polymer Tacticity -->
      <g transform="translate(350,18)">
        <rect x="0" y="0" width="272" height="164" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="136" y="21" text-anchor="middle" fill="var(--emerald)" font-size="12" font-weight="700">Polymer Tacticity (Side Group R)</text>
        <!-- Isotactic -->
        <text x="14" y="56" fill="var(--cyan)" font-size="11" font-weight="700">Isotactic</text>
        <line x1="92" y1="53" x2="250" y2="53" stroke="var(--text)" stroke-width="2"/>
        <circle cx="115" cy="39" r="5" fill="var(--cyan)"/><circle cx="165" cy="39" r="5" fill="var(--cyan)"/><circle cx="215" cy="39" r="5" fill="var(--cyan)"/>
        <text x="256" y="56" fill="var(--muted)" font-size="9.5">Cryst.</text>
        <!-- Syndiotactic -->
        <text x="14" y="102" fill="var(--amber)" font-size="11" font-weight="700">Syndiotactic</text>
        <line x1="92" y1="99" x2="250" y2="99" stroke="var(--text)" stroke-width="2"/>
        <circle cx="115" cy="85" r="5" fill="var(--amber)"/><circle cx="165" cy="113" r="5" fill="var(--amber)"/><circle cx="215" cy="85" r="5" fill="var(--amber)"/>
        <text x="256" y="102" fill="var(--muted)" font-size="9.5">Cryst.</text>
        <!-- Atactic -->
        <text x="14" y="146" fill="var(--rose)" font-size="11" font-weight="700">Atactic</text>
        <line x1="92" y1="143" x2="250" y2="143" stroke="var(--text)" stroke-width="2"/>
        <circle cx="115" cy="129" r="5" fill="var(--rose)"/><circle cx="148" cy="129" r="5" fill="var(--rose)"/><circle cx="188" cy="156" r="5" fill="var(--rose)"/><circle cx="222" cy="156" r="5" fill="var(--rose)"/>
        <text x="256" y="146" fill="var(--rose)" font-size="9.5">Amorph</text>
      </g>
    </svg>`
  },

  energy_bands: {
    title: "Energy Band Diagrams (Conductor, Intrinsic, n-type, p-type)",
    caption: "Si Eg = 1.12 eV (300 K) | Ge Eg = 0.66–0.72 eV | n-type: Group V (P,As,Sb) | p-type: Group III (B,Al,Ga,In)",
    svg: `<svg viewBox="0 0 640 200" class="cbt-svg" role="img" aria-label="Energy band diagrams">
      <!-- Conductor -->
      <g transform="translate(26,20)">
        <rect x="20" y="55" width="90" height="44" fill="rgba(244,114,182,0.28)" stroke="var(--rose)" stroke-width="1.8"/>
        <rect x="20" y="85" width="90" height="44" fill="rgba(56,189,248,0.28)" stroke="var(--cyan)" stroke-width="1.8"/>
        <text x="65" y="76" text-anchor="middle" fill="var(--rose)" font-size="12" font-weight="700">CB</text>
        <text x="65" y="114" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">VB</text>
        <text x="65" y="150" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">Conductor</text>
        <text x="65" y="166" text-anchor="middle" fill="var(--muted)" font-size="10.5">Eg = 0 (Overlap)</text>
      </g>
      <!-- Intrinsic -->
      <g transform="translate(178,20)">
        <rect x="20" y="16" width="90" height="38" fill="rgba(244,114,182,0.22)" stroke="var(--rose)" stroke-width="1.8"/>
        <rect x="20" y="92" width="90" height="38" fill="rgba(56,189,248,0.22)" stroke="var(--cyan)" stroke-width="1.8"/>
        <line x1="16" y1="73" x2="114" y2="73" stroke="var(--emerald)" stroke-width="2" stroke-dasharray="5 3"/>
        <text x="65" y="40" text-anchor="middle" fill="var(--rose)" font-size="12" font-weight="700">CB</text>
        <text x="65" y="116" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">VB</text>
        <text x="12" y="77" text-anchor="end" fill="var(--emerald)" font-size="11" font-weight="700">EF</text>
        <text x="118" y="77" fill="var(--amber)" font-size="11" font-weight="700">Eg</text>
        <text x="65" y="150" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">Intrinsic SC</text>
        <text x="65" y="166" text-anchor="middle" fill="var(--muted)" font-size="10.5">n = p = ni (Mid-gap)</text>
      </g>
      <!-- n-type -->
      <g transform="translate(332,20)">
        <rect x="20" y="16" width="90" height="38" fill="rgba(244,114,182,0.22)" stroke="var(--rose)" stroke-width="1.8"/>
        <rect x="20" y="92" width="90" height="38" fill="rgba(56,189,248,0.22)" stroke="var(--cyan)" stroke-width="1.8"/>
        <line x1="20" y1="68" x2="110" y2="68" stroke="var(--amber)" stroke-width="1.8" stroke-dasharray="3 3"/>
        <line x1="16" y1="60" x2="114" y2="60" stroke="var(--emerald)" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="42" cy="46" r="3" fill="var(--amber)"/><circle cx="65" cy="46" r="3" fill="var(--amber)"/><circle cx="88" cy="46" r="3" fill="var(--amber)"/>
        <text x="65" y="34" text-anchor="middle" fill="var(--rose)" font-size="12" font-weight="700">CB</text>
        <text x="65" y="116" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">VB</text>
        <text x="12" y="64" text-anchor="end" fill="var(--emerald)" font-size="11" font-weight="700">EF</text>
        <text x="116" y="72" fill="var(--amber)" font-size="10.5" font-weight="700">ED</text>
        <text x="65" y="150" text-anchor="middle" fill="var(--amber)" font-size="12" font-weight="700">n-type (P, As, Sb)</text>
        <text x="65" y="166" text-anchor="middle" fill="var(--muted)" font-size="10.5">Majority: e⁻ | EF → CB</text>
      </g>
      <!-- p-type -->
      <g transform="translate(486,20)">
        <rect x="20" y="16" width="90" height="38" fill="rgba(244,114,182,0.22)" stroke="var(--rose)" stroke-width="1.8"/>
        <rect x="20" y="92" width="90" height="38" fill="rgba(56,189,248,0.22)" stroke="var(--cyan)" stroke-width="1.8"/>
        <line x1="20" y1="78" x2="110" y2="78" stroke="var(--violet)" stroke-width="1.8" stroke-dasharray="3 3"/>
        <line x1="16" y1="86" x2="114" y2="86" stroke="var(--emerald)" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="42" cy="101" r="3" fill="none" stroke="var(--emerald)" stroke-width="1.8"/>
        <circle cx="65" cy="101" r="3" fill="none" stroke="var(--emerald)" stroke-width="1.8"/>
        <circle cx="88" cy="101" r="3" fill="none" stroke="var(--emerald)" stroke-width="1.8"/>
        <text x="65" y="40" text-anchor="middle" fill="var(--rose)" font-size="12" font-weight="700">CB</text>
        <text x="65" y="122" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">VB</text>
        <text x="12" y="90" text-anchor="end" fill="var(--emerald)" font-size="11" font-weight="700">EF</text>
        <text x="116" y="81" fill="var(--violet)" font-size="10.5" font-weight="700">EA</text>
        <text x="65" y="150" text-anchor="middle" fill="var(--cyan)" font-size="12" font-weight="700">p-type (B, Al, Ga)</text>
        <text x="65" y="166" text-anchor="middle" fill="var(--muted)" font-size="10.5">Majority: holes | EF → VB</text>
      </g>
    </svg>`
  },

  ic_fab: {
    title: "Silicon Crystal Growth (CZ vs. FZ) & Ion Implantation Beamline",
    caption: "CZ uses Quartz crucible (O/C pick-up, ≤300 mm) | FZ is crucible-free (ultra-high purity) | Ion Implantation stages",
    svg: `<svg viewBox="0 0 640 205" class="cbt-svg" role="img" aria-label="CZ vs FZ growth and ion implanter">
      <!-- Top Flow: Ion Implantation -->
      <g transform="translate(16,14)">
        <text x="304" y="12" text-anchor="middle" fill="var(--cyan)" font-size="11.5" font-weight="700">Ion Implantation System Sequence (Post-Implant Anneal: 800–1000°C, ~30 min)</text>
        <rect x="6" y="22" width="106" height="44" rx="7" fill="var(--surface-2)" stroke="var(--cyan)"/>
        <text x="59" y="42" text-anchor="middle" fill="var(--text)" font-size="10.5" font-weight="700">Ion Source</text>
        <text x="59" y="56" text-anchor="middle" fill="var(--muted)" font-size="9.5">(Reservoir)</text>
        <text x="121" y="48" fill="var(--amber)" font-size="13" font-weight="700">→</text>
        <rect x="134" y="22" width="112" height="44" rx="7" fill="var(--surface-2)" stroke="var(--emerald)"/>
        <text x="190" y="42" text-anchor="middle" fill="var(--text)" font-size="10.5" font-weight="700">Mass Separator</text>
        <text x="190" y="56" text-anchor="middle" fill="var(--muted)" font-size="9.5">(Magnetic Coil)</text>
        <text x="255" y="48" fill="var(--amber)" font-size="13" font-weight="700">→</text>
        <rect x="268" y="22" width="114" height="44" rx="7" fill="var(--surface-2)" stroke="var(--amber)"/>
        <text x="325" y="42" text-anchor="middle" fill="var(--text)" font-size="10.5" font-weight="700">EM Accelerator</text>
        <text x="325" y="56" text-anchor="middle" fill="var(--muted)" font-size="9.5">(High Voltage)</text>
        <text x="391" y="48" fill="var(--amber)" font-size="13" font-weight="700">→</text>
        <rect x="404" y="22" width="108" height="44" rx="7" fill="var(--surface-2)" stroke="var(--violet)"/>
        <text x="458" y="42" text-anchor="middle" fill="var(--text)" font-size="10.5" font-weight="700">Beam Scanner</text>
        <text x="458" y="56" text-anchor="middle" fill="var(--muted)" font-size="9.5">(Electrostatic)</text>
        <text x="521" y="48" fill="var(--amber)" font-size="13" font-weight="700">→</text>
        <rect x="534" y="22" width="72" height="44" rx="7" fill="rgba(244,114,182,0.18)" stroke="var(--rose)"/>
        <text x="570" y="42" text-anchor="middle" fill="var(--rose)" font-size="10.5" font-weight="700">Si Wafer</text>
        <text x="570" y="56" text-anchor="middle" fill="var(--muted)" font-size="9.5">(Target)</text>
      </g>
      <!-- Bottom: CZ vs FZ comparison cards -->
      <g transform="translate(22,96)">
        <rect x="0" y="0" width="286" height="94" rx="9" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="143" y="21" text-anchor="middle" fill="var(--amber)" font-size="12" font-weight="700">Czochralski (CZ) Method</text>
        <text x="14" y="42" fill="var(--text)" font-size="10.8">• Quartz crucible (Ar gas); Seed CCW / Crucible CW</text>
        <text x="14" y="60" fill="var(--text)" font-size="10.8">• Dash neck (≈3 mm) removes seed dislocations</text>
        <text x="14" y="78" fill="var(--muted)" font-size="10.5">• Large wafers (≤300 mm); O &amp; C crucible pick-up</text>
      </g>
      <g transform="translate(332,96)">
        <rect x="0" y="0" width="286" height="94" rx="9" fill="var(--surface-2)" stroke="var(--border)"/>
        <text x="143" y="21" text-anchor="middle" fill="var(--emerald)" font-size="12" font-weight="700">Float-Zone (FZ) Method</text>
        <text x="14" y="42" fill="var(--text)" font-size="10.8">• Crucible-free (molten zone held by surface tension)</text>
        <text x="14" y="60" fill="var(--text)" font-size="10.8">• RF coil sweeps zone upward; k₀ = Cs/CL &lt; 1 refines</text>
        <text x="14" y="78" fill="var(--muted)" font-size="10.5">• Ultra-high purity/resistivity; ≤150–200 mm (HV)</text>
      </g>
    </svg>`
  },

  pbr: {
    title: "Pilling–Bedworth Ratio (PBR) Oxide Film Regimes",
    caption: "PBR = V_oxide / V_metal consumed | < 1 Porous (MgO, Na₂O) | 1–2 Protective (Al₂O₃, Cr₂O₃) | > 2 Flaking (Fe₂O₃)",
    svg: `<svg viewBox="0 0 640 190" class="cbt-svg" role="img" aria-label="Pilling-Bedworth Ratio regimes">
      <!-- PBR < 1 -->
      <g transform="translate(24,20)">
        <rect x="0" y="0" width="182" height="150" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <rect x="24" y="74" width="134" height="32" fill="rgba(148,163,184,0.35)" stroke="var(--muted)"/>
        <rect x="24" y="58" width="38" height="16" fill="var(--amber)"/>
        <rect x="72" y="58" width="38" height="16" fill="var(--amber)"/>
        <rect x="120" y="58" width="38" height="16" fill="var(--amber)"/>
        <text x="91" y="28" text-anchor="middle" fill="var(--amber)" font-size="13" font-weight="700">PBR &lt; 1 (Dangerous)</text>
        <text x="91" y="124" text-anchor="middle" fill="var(--text)" font-size="11">Porous / cracked (tensile)</text>
        <text x="91" y="140" text-anchor="middle" fill="var(--muted)" font-size="10.5">e.g. MgO, Na₂O</text>
      </g>
      <!-- 1 < PBR < 2 -->
      <g transform="translate(229,20)">
        <rect x="0" y="0" width="182" height="150" rx="10" fill="var(--surface-2)" stroke="var(--emerald)"/>
        <rect x="24" y="74" width="134" height="32" fill="rgba(148,163,184,0.35)" stroke="var(--muted)"/>
        <rect x="24" y="52" width="134" height="22" fill="var(--emerald)"/>
        <text x="91" y="28" text-anchor="middle" fill="var(--emerald)" font-size="13" font-weight="700">1 &lt; PBR &lt; 2 (Safe)</text>
        <text x="91" y="124" text-anchor="middle" fill="var(--text)" font-size="11">Compact, adherent, passivating</text>
        <text x="91" y="140" text-anchor="middle" fill="var(--emerald)" font-size="10.5">e.g. Al₂O₃, Cr₂O₃</text>
      </g>
      <!-- PBR > 2 -->
      <g transform="translate(434,20)">
        <rect x="0" y="0" width="182" height="150" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
        <rect x="24" y="74" width="134" height="32" fill="rgba(148,163,184,0.35)" stroke="var(--muted)"/>
        <path d="M 24 74 L 24 54 L 62 54 L 82 36 L 106 36 L 122 54 L 158 54 L 158 74 Z" fill="rgba(244,114,182,0.55)" stroke="var(--rose)" stroke-width="2"/>
        <text x="91" y="24" text-anchor="middle" fill="var(--rose)" font-size="13" font-weight="700">PBR &gt; 2 (Flaking)</text>
        <text x="91" y="124" text-anchor="middle" fill="var(--text)" font-size="11">Buckles &amp; spalls (compressive)</text>
        <text x="91" y="140" text-anchor="middle" fill="var(--muted)" font-size="10.5">e.g. Fe₂O₃ (rust)</text>
      </g>
    </svg>`
  }
};

window.ME103_FORMULAS = [
  { group: "Crystallography", name: "Crystal & APF", eq: "Crystal = Lattice + Motif | APF = (n · 4/3 πr³) / V<sub>cell</sub> (SC 52%, BCC 68%, FCC 74%, Diamond 34%)" },
  { group: "Crystallography", name: "Cubic a–r & CN", eq: "SC: a = 2r (n=1, CN=6) | BCC: a = 4r/√3 (n=2, CN=8) | FCC: a = 2√2r (n=4, CN=12)" },
  { group: "Crystallography", name: "Crystal Density", eq: "ρV = nM / N<sub>A</sub> (N<sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>, cubic V = a³)" },
  { group: "Crystallography", name: "Hexagonal 3→4 Dir.", eq: "u = ⅓(2u′−v′), v = ⅓(2v′−u′), t = −(u+v), w = w′" },
  { group: "Crystallography", name: "Hexagonal 3→4 Plane", eq: "h₂ = h₁, k₂ = k₁, i₂ = −(h₁+k₁), l₂ = l₁" },
  { group: "Crystallography", name: "Weiss Zone Law", eq: "hu + kv + lw = 0 (direction [uvw] lies in plane (hkl))" },
  { group: "Crystallography", name: "Interplanar Spacing", eq: "Orthorhombic: 1/d²<sub>hkl</sub> = h²/a² + k²/b² + l²/c² | Cubic: d<sub>hkl</sub> = a / √(h² + k² + l²)" },
  { group: "Crystallography", name: "Angle Between Planes", eq: "cos φ = (h₁h₂ + k₁k₂ + l₁l₂) / [√(h₁²+k₁²+l₁²) √(h₂²+k₂²+l₂²)] (⊥ iff dot product = 0)" },
  { group: "Phase & Heat", name: "Gibbs Phase Rule", eq: "F = C − P + 2 (general) | F = C − P + 1 (condensed, fixed P = 1 atm)" },
  { group: "Phase & Heat", name: "Lever Rule", eq: "f<sub>α</sub> = (C₀ − C<sub>L</sub>) / (C<sub>α</sub> − C<sub>L</sub>) = Opposite arm / Total tie-line length" },
  { group: "Phase & Heat", name: "Pb–Sn & Al–Cu Eutectics", eq: "Pb–Sn (183°C): L(62) → α(18) + β(97) | Al–Cu (548°C): L(33.2) → α(5.65) + θ(52.5)" },
  { group: "Phase & Heat", name: "Fe–Fe₃C Invariants", eq: "Peritectic 1492°C: δ(0.10)+L(0.53)⇌γ(0.17) | Eutectic 1147°C: L(4.3)⇌γ(2.1)+Fe₃C(6.67) | Eutectoid 727°C: γ(0.8)⇌α(0.025)+Fe₃C(6.67)" },
  { group: "Phase & Heat", name: "Al–Si & Cu–Al", eq: "Al–Si Eutectic: 577°C, 11.6–12.6% Si (LM6 = 12.5% Si) | Cu–Al Eutectoid: 565°C, 11.8% Al" },
  { group: "Phase & Heat", name: "Case / Oxide Depth", eq: "x ≈ √(Dt) (carburising & parabolic surface oxidation)" },
  { group: "Defects & Mech", name: "Vacancy & Surface Energy", eq: "n<sub>v</sub>/N = exp(−Q<sub>v</sub> / k<sub>B</sub>T) | Specific surface energy: γ = ½ n<sub>A</sub> n<sub>B</sub> E (J/m²)" },
  { group: "Defects & Mech", name: "Dislocations & Slip", eq: "Edge: t̂ ⊥ b⃗ | Screw: t̂ ∥ b⃗ | FCC {111}⟨110⟩ = 12 | BCC {110}⟨111⟩ = 12 (48 at high T)" },
  { group: "Defects & Mech", name: "Tensile Testing", eq: "σ = P/A₀, ε = ΔL/L₀, ΔL = PL₀/(A₀E), ν = −ε<sub>lat</sub>/ε<sub>long</sub>, σ<sub>T</sub> = σ(1+ε), ε<sub>T</sub> = ln(1+ε)" },
  { group: "Composites", name: "Rule of Mixtures (ROM)", eq: "E<sub>∥</sub> = E<sub>f</sub>V<sub>f</sub> + E<sub>m</sub>V<sub>m</sub> | 1/E<sub>⊥</sub> = V<sub>f</sub>/E<sub>f</sub> + V<sub>m</sub>/E<sub>m</sub> | P<sub>f</sub>/P<sub>c</sub> = E<sub>f</sub>V<sub>f</sub> / E<sub>∥</sub>" },
  { group: "Elec / Mag / Therm", name: "Electrical Conduction", eq: "v<sub>d</sub> = μE, μ = qτ/m, J = σE, σ<sub>metal</sub> = qnμ, σ<sub>i</sub> = qn<sub>i</sub>(μ<sub>e</sub> + μ<sub>h</sub>)" },
  { group: "Elec / Mag / Therm", name: "Magnetic Quantities", eq: "B = Φ/A, μ = μ₀μ<sub>r</sub>, H = B/μ, χ = M/H, μ<sub>r</sub> = 1 + χ (μ₀ = 4π×10<sup>−7</sup> H/m)" },
  { group: "Elec / Mag / Therm", name: "Thermal Properties", eq: "c = E / (mΔT) | Fourier's Law: dQ/dt = −kA (dT/dx)" },
  { group: "IC & Corrosion", name: "Fick's Laws & Arrhenius", eq: "J = −D (dC/dx) | ∂C/∂t = D (∂²C/∂x²) | D = D₀ exp(−Q/RT)" },
  { group: "IC & Corrosion", name: "Ion Implantation", eq: "−dE/dx = N[S<sub>n</sub>(E) + S<sub>e</sub>(E)] | R = ∫<sub>0</sub><sup>E₀</sup> dE / {N[S<sub>n</sub>(E)+S<sub>e</sub>(E)]} | R<sub>p</sub> &lt; R, Straggle ΔR<sub>p</sub>" },
  { group: "IC & Corrosion", name: "Si Purification & PBR", eq: "SiO₂+2C → Si+2CO; Si+3HCl → SiHCl₃+H₂; k₀=C<sub>s</sub>/C<sub>L</sub> | PBR = V<sub>oxide</sub>/V<sub>metal</sub> (1&lt;PBR&lt;2 protective)" }
];
