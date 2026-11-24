window.ME103_BANK = window.ME103_BANK || [];
window.ME103_BANK.push({
  moduleId: "mod03",
  questions: [
    {
      id: "M03-001",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Trap",
      diagram: null,
      q: "In standard crystallographic notation, which bracket convention correctly distinguishes a <strong>specific direction</strong>, a <strong>family of directions</strong>, a <strong>specific plane</strong>, and a <strong>family of planes</strong>?",
      options: [
        "(uvw), {uvw}, [hkl], ⟨hkl⟩",
        "⟨uvw⟩, [uvw], {hkl}, (hkl)",
        "[uvw], ⟨uvw⟩, (hkl), {hkl}",
        "[uvw], (uvw), ⟨hkl⟩, {hkl}"
      ],
      ans: 2,
      exp: "Never swap brackets! Square brackets <strong>[uvw]</strong> denote a specific direction, angle brackets <strong>⟨uvw⟩</strong> denote a family of crystallographically equivalent directions, parentheses <strong>(hkl)</strong> denote a specific plane, and curly braces <strong>{hkl}</strong> denote a family of equivalent planes."
    },
    {
      id: "M03-002",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What is the correct step-by-step procedure for finding the Miller indices <strong>[uvw]</strong> of a crystallographic direction vector?",
      options: [
        "Subtract tail coordinates from head coordinates (head − tail) in units of a, b, c; multiply/divide to obtain smallest integers; enclose in [uvw] with overbars for negatives and no commas.",
        "Subtract head coordinates from tail coordinates; take reciprocals of each component; clear fractions; enclose in (uvw).",
        "Take intercepts of the vector on the x, y, z axes; take reciprocals; multiply by LCM; enclose in [uvw].",
        "Divide head coordinates by tail coordinates; round to nearest integers; separate indices with commas inside [u, v, w]."
      ],
      ans: 0,
      exp: "Unlike planes, direction indices do <em>not</em> use reciprocals. Compute vector components as <strong>head − tail</strong> in units of lattice parameters (a, b, c), reduce/scale to the smallest integers, place an overbar over negative integers, and write inside square brackets <strong>[uvw]</strong> with no commas or spaces."
    },
    {
      id: "M03-003",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A crystallographic direction vector in a unit cell has its <strong>tail at (1, 1, 0)</strong> and its <strong>head at (0, 0, 1)</strong>. What are its Miller indices?",
      options: [
        "[11<span class=\"bar\">1</span>]",
        "[<span class=\"bar\">1</span><span class=\"bar\">1</span>1]",
        "[111]",
        "[<span class=\"bar\">1</span>11]"
      ],
      ans: 1,
      exp: "Vector components = head − tail = (0 − 1, 0 − 1, 1 − 0) = (−1, −1, 1). Converting negative signs to overbars gives <strong>[<span class=\"bar\">1</span><span class=\"bar\">1</span>1]</strong>."
    },
    {
      id: "M03-004",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "A vector originating at (0, 0, 0) terminates at fractional coordinates <strong>(1/2, 1, 1)</strong> inside a unit cell. What are its reduced Miller direction indices?",
      options: [
        "[211]",
        "[112]",
        "[1<span class=\"bar\">2</span>2]",
        "[122]"
      ],
      ans: 3,
      exp: "Head − tail = (1/2, 1, 1). Multiplying all three components by 2 to clear the fraction gives the smallest integer set (1, 2, 2), written as <strong>[122]</strong>."
    },
    {
      id: "M03-005",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "To sketch the crystallographic direction <strong>[12<span class=\"bar\">2</span>]</strong> entirely within a single unit cell, where should you shift the origin (tail) and where will the head terminate?",
      options: [
        "Origin (tail) at (0, 0, 1); head at (1/2, 1, 0)",
        "Origin (tail) at (0, 1, 0); head at (1/2, 0, 1)",
        "Origin (tail) at (1, 0, 0); head at (0, 1, 1/2)",
        "Origin (tail) at (0, 0, 1); head at (1, 1/2, 0)"
      ],
      ans: 0,
      exp: "Divide [12<span class=\"bar\">2</span>] by the largest magnitude (2) to get (1/2, 1, −1). Because only the z-component is negative, shift the origin along +z to <strong>(0, 0, 1)</strong>. Adding (1/2, 1, −1) puts the head at <strong>(1/2, 1, 0)</strong>. (Similarly, [12<span class=\"bar\">3</span>] uses origin (0, 0, 1) and head (1/3, 2/3, 0).)"
    },
    {
      id: "M03-006",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "To draw the direction <strong>[<span class=\"bar\">2</span>1<span class=\"bar\">3</span>]</strong> inside a single unit cell, the origin is shifted to <strong>(1, 0, 1)</strong>. What are the exact fractional coordinates of the vector's head?",
      options: [
        "(2/3, 1/3, 0)",
        "(1/3, 2/3, 0)",
        "(1/3, 1/3, 0)",
        "(0, 1/3, 1/3)"
      ],
      ans: 2,
      exp: "Divide [−2, 1, −3] by the largest magnitude (3) to get (−2/3, 1/3, −1). Adding this displacement to the shifted origin (1, 0, 1) gives head = (1 − 2/3, 0 + 1/3, 1 − 1) = <strong>(1/3, 1/3, 0)</strong>. Check: head − tail = (−2/3, 1/3, −1) × 3 = [<span class=\"bar\">2</span>1<span class=\"bar\">3</span>]."
    },
    {
      id: "M03-007",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Determine the Miller indices of the direction vector whose tail is at <strong>(1/2, 0, 1)</strong> and whose head is at <strong>(0, 1, 1/2)</strong>.",
      options: [
        "[1<span class=\"bar\">2</span>1]",
        "[<span class=\"bar\">1</span>2<span class=\"bar\">1</span>]",
        "[<span class=\"bar\">1</span>1<span class=\"bar\">1</span>]",
        "[<span class=\"bar\">2</span>1<span class=\"bar\">2</span>]"
      ],
      ans: 1,
      exp: "Vector = head − tail = (0 − 1/2, 1 − 0, 1/2 − 1) = (−1/2, 1, −1/2). Multiplying by 2 to obtain smallest integers yields (−1, 2, −1), written as <strong>[<span class=\"bar\">1</span>2<span class=\"bar\">1</span>]</strong>."
    },
    {
      id: "M03-008",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "miller_hex",
      q: "Referring to the hexagonal Miller–Bravais coordinate system shown, how are the four crystallographic axes <strong>a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, and c (z)</strong> oriented?",
      options: [
        "All four axes are mutually perpendicular at 90° to one another.",
        "a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub> lie in the basal plane at 60° intervals, with c at 120° to them.",
        "a<sub>1</sub>, a<sub>2</sub>, c lie in one plane at 120°, with a<sub>3</sub> perpendicular to that plane.",
        "a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub> are three coplanar basal axes separated by 120° (a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub> = 0), and c (z) is perpendicular to the basal plane."
      ],
      ans: 3,
      exp: "The 4-axis hexagonal Miller–Bravais system uses <strong>three coplanar basal axes a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub> at 120°</strong> to one another (satisfying a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub> = 0) plus a vertical <strong>c-axis (z) perpendicular to the basal plane</strong>."
    },
    {
      id: "M03-009",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "miller_hex",
      q: "In the 4-index hexagonal Miller–Bravais system shown for planes <strong>(hkil)</strong> and directions <strong>[uvtw]</strong>, what exact algebraic constraint governs the redundant third index (<em>i</em> or <em>t</em>)?",
      options: [
        "i = h + k and t = u + v",
        "i = −(h + k) and t = −(u + v)",
        "i = h − k and t = u − v",
        "i = −(h + k + l) and t = −(u + v + w)"
      ],
      ans: 1,
      exp: "Because a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub> = 0 in the basal plane, the first three indices must always sum to zero: <strong>h + k + i = 0 ⇒ i = −(h + k)</strong> for planes, and <strong>u + v + t = 0 ⇒ t = −(u + v)</strong> for directions."
    },
    {
      id: "M03-010",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Trap",
      diagram: "miller_hex",
      q: "Using the hexagonal Miller–Bravais constraint illustrated, which of the following 4-index plane notations is mathematically <strong>INVALID</strong>?",
      options: [
        "(11<span class=\"bar\">1</span>0)",
        "(10<span class=\"bar\">1</span>0)",
        "(11<span class=\"bar\">2</span>0)",
        "(1<span class=\"bar\">1</span>01)"
      ],
      ans: 0,
      exp: "A valid hexagonal Miller–Bravais plane (hkil) must satisfy h + k + i = 0. Checking each option: (10<span class=\"bar\">1</span>0) → 1+0−1 = 0 (valid); (11<span class=\"bar\">2</span>0) → 1+1−2 = 0 (valid); (1<span class=\"bar\">1</span>01) → 1−1+0 = 0 (valid); <strong>(11<span class=\"bar\">1</span>0) → 1+1−1 = +1 ≠ 0 (INVALID)</strong>."
    },
    {
      id: "M03-011",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "miller_hex",
      q: "Referring to the hexagonal coordinate axes, which set of formulas correctly converts a 3-index direction <strong>[u'v'w']</strong> into the 4-index Miller–Bravais direction <strong>[uvtw]</strong> (before clearing fractions)?",
      options: [
        "u = u', v = v', t = −(u' + v'), w = w'",
        "u = (1/3)(u' + 2v'), v = (1/3)(v' + 2u'), t = −(u + v), w = w'",
        "u = (1/2)(2u' − v'), v = (1/2)(2v' − u'), t = −(u + v), w = 2w'",
        "u = (1/3)(2u' − v'), v = (1/3)(2v' − u'), t = −(u + v), w = w'"
      ],
      ans: 3,
      exp: "The exact 3-index to 4-index hexagonal direction conversion formulas are <strong>u = (1/3)(2u' − v')</strong>, <strong>v = (1/3)(2v' − u')</strong>, <strong>t = −(u + v)</strong>, and <strong>w = w'</strong>, followed by multiplying all four components to clear fractions."
    },
    {
      id: "M03-012",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Diagram",
      diagram: "miller_hex",
      q: "Convert the 3-index hexagonal direction <strong>[100]</strong> (along the a<sub>1</sub>-axis in the diagram) into its 4-index Miller–Bravais representation <strong>[uvtw]</strong>.",
      options: [
        "[10<span class=\"bar\">1</span>0]",
        "[1<span class=\"bar\">1</span>00]",
        "[2<span class=\"bar\">1</span><span class=\"bar\">1</span>0]",
        "[2<span class=\"bar\">2</span>00]"
      ],
      ans: 2,
      exp: "With u' = 1, v' = 0, w' = 0: u = (1/3)(2×1 − 0) = 2/3, v = (1/3)(2×0 − 1) = −1/3, t = −(2/3 − 1/3) = −1/3, w = 0. Multiplying by 3 to clear fractions yields <strong>[2<span class=\"bar\">1</span><span class=\"bar\">1</span>0]</strong>."
    },
    {
      id: "M03-013",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Convert the 3-index hexagonal direction <strong>[110]</strong> into its 4-index Miller–Bravais direction <strong>[uvtw]</strong>.",
      options: [
        "[11<span class=\"bar\">2</span>0]",
        "[22<span class=\"bar\">4</span>0]",
        "[1<span class=\"bar\">1</span>00]",
        "[2<span class=\"bar\">1</span><span class=\"bar\">1</span>0]"
      ],
      ans: 0,
      exp: "With u' = 1, v' = 1, w' = 0: u = (1/3)(2 − 1) = 1/3, v = (1/3)(2 − 1) = 1/3, t = −(1/3 + 1/3) = −2/3, w = 0. Clearing thirds (×3) gives <strong>[11<span class=\"bar\">2</span>0]</strong>."
    },
    {
      id: "M03-014",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "What is the 4-index Miller–Bravais equivalent of the 3-index hexagonal direction <strong>[<span class=\"bar\">1</span>10]</strong>?",
      options: [
        "[<span class=\"bar\">2</span>110]",
        "[<span class=\"bar\">1</span>2<span class=\"bar\">1</span>0]",
        "[1<span class=\"bar\">1</span>00]",
        "[<span class=\"bar\">1</span>100]"
      ],
      ans: 3,
      exp: "With u' = −1, v' = 1, w' = 0: u = (1/3)(2(−1) − 1) = −3/3 = −1; v = (1/3)(2(1) − (−1)) = 3/3 = +1; t = −(−1 + 1) = 0; w = 0. Thus [<span class=\"bar\">1</span>10] → <strong>[<span class=\"bar\">1</span>100]</strong>."
    },
    {
      id: "M03-015",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Convert the 3-index hexagonal direction <strong>[010]</strong> (along the a<sub>2</sub>-axis) into 4-index Miller–Bravais notation <strong>[uvtw]</strong>.",
      options: [
        "[01<span class=\"bar\">1</span>0]",
        "[<span class=\"bar\">1</span>2<span class=\"bar\">1</span>0]",
        "[1<span class=\"bar\">2</span>10]",
        "[<span class=\"bar\">2</span>110]"
      ],
      ans: 1,
      exp: "With u' = 0, v' = 1, w' = 0: u = (1/3)(0 − 1) = −1/3; v = (1/3)(2 − 0) = 2/3; t = −(−1/3 + 2/3) = −1/3; w = 0. Multiplying by 3 yields <strong>[<span class=\"bar\">1</span>2<span class=\"bar\">1</span>0]</strong>."
    },
    {
      id: "M03-016",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Convert the 3-index hexagonal direction <strong>[111]</strong> into its 4-index Miller–Bravais direction <strong>[uvtw]</strong>.",
      options: [
        "[11<span class=\"bar\">2</span>1]",
        "[22<span class=\"bar\">4</span>3]",
        "[11<span class=\"bar\">2</span>3]",
        "[1101]"
      ],
      ans: 2,
      exp: "With u' = 1, v' = 1, w' = 1: u = (1/3)(2−1) = 1/3, v = (1/3)(2−1) = 1/3, t = −2/3, and w = w' = <strong>1</strong>. Classic trap: when multiplying by 3 to clear fractions, you MUST multiply <em>all four</em> indices including w! Thus (1/3, 1/3, −2/3, 1) × 3 = <strong>[11<span class=\"bar\">2</span>3]</strong> (NOT [11<span class=\"bar\">2</span>1])."
    },
    {
      id: "M03-017",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Diagram",
      diagram: "miller_hex",
      q: "Using the hexagonal Miller–Bravais plane conversion rule shown, convert the 3-index plane <strong>(1<span class=\"bar\">1</span>1)</strong> into its 4-index notation <strong>(hkil)</strong>.",
      options: [
        "(1<span class=\"bar\">1</span>01)",
        "(1<span class=\"bar\">1</span>21)",
        "(3<span class=\"bar\">3</span>01)",
        "(1<span class=\"bar\">1</span><span class=\"bar\">2</span>1)"
      ],
      ans: 0,
      exp: "For hexagonal planes, (h<sub>1</sub>k<sub>1</sub>l<sub>1</sub>) → (h<sub>2</sub>k<sub>2</sub>i<sub>2</sub>l<sub>2</sub>) simply keeps h<sub>2</sub> = h<sub>1</sub>, k<sub>2</sub> = k<sub>1</sub>, l<sub>2</sub> = l<sub>1</sub>, and inserts i<sub>2</sub> = −(h<sub>1</sub> + k<sub>1</sub>). Here i<sub>2</sub> = −(1 − 1) = 0, giving <strong>(1<span class=\"bar\">1</span>01)</strong>."
    },
    {
      id: "M03-018",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "What are the 4-index Miller–Bravais plane indices corresponding to the 3-index hexagonal prism planes <strong>(100)</strong> and <strong>(110)</strong> respectively?",
      options: [
        "(2<span class=\"bar\">1</span><span class=\"bar\">1</span>0) and (11<span class=\"bar\">2</span>0)",
        "(1010) and (1120)",
        "(10<span class=\"bar\">1</span>0) and (1100)",
        "(10<span class=\"bar\">1</span>0) and (11<span class=\"bar\">2</span>0)"
      ],
      ans: 3,
      exp: "Applying i = −(h + k) directly to planes: (100) has i = −(1 + 0) = −1 ⇒ <strong>(10<span class=\"bar\">1</span>0)</strong>; (110) has i = −(1 + 1) = −2 ⇒ <strong>(11<span class=\"bar\">2</span>0)</strong>. Note that unlike direction [100] → [2<span class=\"bar\">1</span><span class=\"bar\">1</span>0], plane (100) becomes (10<span class=\"bar\">1</span>0)."
    },
    {
      id: "M03-019",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "In hexagonal Miller–Bravais notation, what represent the <strong>basal plane</strong> (parallel to a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>) and the <strong>vertical c-axis direction</strong> respectively?",
      options: [
        "(11<span class=\"bar\">2</span>0) and [0001]",
        "(0001) and [0001]",
        "(0001) and [11<span class=\"bar\">2</span>0]",
        "(10<span class=\"bar\">1</span>0) and [2<span class=\"bar\">1</span><span class=\"bar\">1</span>0]"
      ],
      ans: 1,
      exp: "The basal plane has intercepts (∞, ∞, ∞, 1), whose reciprocals give <strong>(0001)</strong>. The vertical c-axis [001] converts via u = v = t = 0, w = 1 to <strong>[0001]</strong>."
    },
    {
      id: "M03-020",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "Why can you convert a hexagonal <strong>plane</strong> (h<sub>1</sub>k<sub>1</sub>l<sub>1</sub>) to (hkil) merely by inserting i = −(h<sub>1</sub> + k<sub>1</sub>), whereas converting a hexagonal <strong>direction</strong> [u'v'w'] to [uvtw] requires transforming u and v via (1/3)(2u' − v') and (1/3)(2v' − u')?",
      options: [
        "Because planes ignore the c-axis while directions depend on the c/a ratio.",
        "Because hexagonal planes never obey h + k + i = 0 unless l = 0.",
        "Because a plane's intercepts on a<sub>1</sub>, a<sub>2</sub>, c do not change when adding axis a<sub>3</sub>, whereas a direction vector's components along non-orthogonal 120° axes a<sub>1</sub>, a<sub>2</sub> must be redistributed onto a<sub>3</sub> to satisfy u + v + t = 0.",
        "Because Miller indices of directions use reciprocals of intercepts while planes use head minus tail."
      ],
      ans: 2,
      exp: "Adding the coplanar axis a<sub>3</sub> = −(a<sub>1</sub> + a<sub>2</sub>) does not alter where a plane cuts a<sub>1</sub>, a<sub>2</sub>, or c, so h, k, l stay unchanged. However, a vector u'<strong>a<sub>1</sub></strong> + v'<strong>a<sub>2</sub></strong> rewritten as u<strong>a<sub>1</sub></strong> + v<strong>a<sub>2</sub></strong> + t<strong>a<sub>3</sub></strong> with u + v + t = 0 must adjust u and v to (2u' − v')/3 and (2v' − u')/3."
    },
    {
      id: "M03-021",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Trap",
      diagram: null,
      q: "How many equivalent directions belong to the family <strong>⟨100⟩</strong> in a <strong>Tetragonal</strong> crystal (a = b ≠ c), and why?",
      options: [
        "6 members: [100], [<span class=\"bar\">1</span>00], [010], [0<span class=\"bar\">1</span>0], [001], [00<span class=\"bar\">1</span>]",
        "4 members: [100], [010], [<span class=\"bar\">1</span>00], [0<span class=\"bar\">1</span>0] — excluding [001] and [00<span class=\"bar\">1</span>] because c ≠ a",
        "2 members: [100] and [<span class=\"bar\">1</span>00] only",
        "8 members: all combinations of ±1 along the three axes"
      ],
      ans: 1,
      exp: "In a tetragonal unit cell, a = b ≠ c. Therefore atomic spacing along ±x and ±y is identical, but spacing along ±z is different! Hence tetragonal <strong>⟨100⟩ has only 4 members</strong> ([100], [010], [<span class=\"bar\">1</span>00], [0<span class=\"bar\">1</span>0]) and excludes [001] and [00<span class=\"bar\">1</span>]."
    },
    {
      id: "M03-022",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which statement accurately describes the crystallographic direction family <strong>⟨111⟩</strong> in the cubic crystal system?",
      options: [
        "It consists of 8 body-diagonal directions and exists in ANY cubic lattice (SC, BCC, or FCC), not only BCC.",
        "It consists of 4 body-diagonal directions and exists exclusively in BCC crystals.",
        "It consists of 12 face-diagonal directions and exists exclusively in FCC crystals.",
        "It consists of 6 cube-edge directions and exists only in SC crystals."
      ],
      ans: 0,
      exp: "In any cubic crystal, all three indices can independently take +1 or −1, yielding 2<sup>3</sup> = <strong>8 body-diagonal directions</strong> in ⟨111⟩. High-yield trap: ⟨111⟩ is a geometric family belonging to <strong>any cubic lattice (SC, BCC, FCC)</strong>, even though atoms touch along ⟨111⟩ specifically in BCC."
    },
    {
      id: "M03-023",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "In a <strong>Cubic</strong> crystal, how many crystallographically equivalent planes belong to the families <strong>{100}</strong>, <strong>{110}</strong>, and <strong>{111}</strong> respectively?",
      options: [
        "3, 6, and 4",
        "6, 8, and 12",
        "4, 12, and 8",
        "6, 12, and 8"
      ],
      ans: 3,
      exp: "In a cubic crystal: <strong>{100}</strong> consists of the <strong>6</strong> cube faces (±1,0,0 permutations); <strong>{110}</strong> has 3×2<sup>2</sup> = <strong>12</strong> planes; and <strong>{111}</strong> has 2<sup>3</sup> = <strong>8</strong> octahedral planes."
    },
    {
      id: "M03-024",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "How many crystallographically equivalent planes belong to the general family <strong>{123}</strong> in a <strong>Cubic</strong> crystal?",
      options: [
        "12",
        "24",
        "48",
        "36"
      ],
      ans: 2,
      exp: "Because all three indices (1, 2, 3) are distinct and non-zero, there are 3! = 6 permutations of positions and 2<sup>3</sup> = 8 sign combinations (±1, ±2, ±3), yielding 3! × 2<sup>3</sup> = 6 × 8 = <strong>48 equivalent planes</strong>."
    },
    {
      id: "M03-025",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Conceptual",
      diagram: null,
      q: "How many planes belong to the <strong>{001}</strong> family in a <strong>Tetragonal</strong> crystal (a = b ≠ c)?",
      options: [
        "2 planes: (001) and (00<span class=\"bar\">1</span>)",
        "4 planes: (100), (<span class=\"bar\">1</span>00), (010), and (0<span class=\"bar\">1</span>0)",
        "6 planes: all six faces of the prism",
        "1 plane: (001) only"
      ],
      ans: 0,
      exp: "Because c ≠ a = b in a tetragonal cell, the top and bottom square faces perpendicular to the c-axis are NOT equivalent to the four rectangular side faces {100}. Therefore tetragonal <strong>{001}</strong> contains only <strong>2 planes: (001) and (00<span class=\"bar\">1</span>)</strong>."
    },
    {
      id: "M03-026",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Conceptual",
      diagram: null,
      q: "What is the mandatory first check before calculating the Miller indices <strong>(hkl)</strong> of a crystal plane from its axis intercepts?",
      options: [
        "Ensure the plane passes directly through the origin (0, 0, 0).",
        "Ensure the origin does NOT lie on the plane; if it does, shift the origin to an equivalent lattice point off the plane.",
        "Ensure all three intercepts are strictly equal to 1.",
        "Ensure the plane is parallel to at least one coordinate axis."
      ],
      ans: 1,
      exp: "If the origin lies on the plane, all intercepts become (0, 0, 0) and their reciprocals are undefined (1/0). Therefore, the origin must <strong>NOT</strong> lie on the plane; shift it by one lattice translation if needed, then take intercepts (parallel = ∞), reciprocals (1/∞ = 0), and multiply by LCM."
    },
    {
      id: "M03-027",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A crystal plane intersects the x, y, and z axes at fractional coordinates <strong>1, 1/2, and 1</strong> respectively. What are its Miller indices?",
      options: [
        "(212)",
        "(112)",
        "(211)",
        "(121)"
      ],
      ans: 3,
      exp: "Intercepts = (1, 1/2, 1). Taking reciprocals gives (1/1, 1/(1/2), 1/1) = (1, 2, 1). Already integers, so the Miller indices are <strong>(121)</strong>."
    },
    {
      id: "M03-028",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "A plane is parallel to both the x- and y-axes and intercepts the z-axis at <strong>z = 1/2</strong>. What are its proper Miller indices, and should they be reduced to lowest integers?",
      options: [
        "(002); do NOT reduce to (001) because (002) denotes a specific sub-plane with half the spacing of (001).",
        "(001); always divide out common factors from plane indices just like direction indices.",
        "(220); reciprocals of parallel axes equal 2.",
        "(112); parallel axes are assigned intercepts of 1."
      ],
      ans: 0,
      exp: "Intercepts = (∞, ∞, 1/2) → reciprocals = (1/∞, 1/∞, 2) = <strong>(002)</strong>. Classic trap: unlike direction indices, plane indices for sub-planes like (002) or (220) are <strong>NOT</strong> reduced because (002) has d<sub>002</sub> = a/2, half the interplanar spacing of (001)."
    },
    {
      id: "M03-029",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Numerical",
      diagram: null,
      q: "A crystallographic plane makes intercepts of <strong>3a, 4b, and 6c</strong> along the x, y, and z axes respectively. Find its Miller indices.",
      options: [
        "(346)",
        "(234)",
        "(432)",
        "(643)"
      ],
      ans: 2,
      exp: "Fractional intercepts in units of a, b, c are (3, 4, 6). Reciprocals are (1/3, 1/4, 1/6). Multiplying by LCM(3, 4, 6) = 12 yields (4, 3, 2) ⇒ <strong>(432)</strong>."
    },
    {
      id: "M03-030",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Determine the ratio of intercepts made by the crystal plane <strong>(123)</strong> along the x, y, and z axes in a Simple Cubic crystal.",
      options: [
        "1 : 2 : 3",
        "6 : 3 : 2",
        "3 : 2 : 1",
        "2 : 3 : 6"
      ],
      ans: 1,
      exp: "Intercepts are proportional to the reciprocals of the Miller indices: x : y : z = 1/1 : 1/2 : 1/3. Multiplying through by LCM(1, 2, 3) = 6 gives the integer ratio <strong>6 : 3 : 2</strong>."
    },
    {
      id: "M03-031",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An orthorhombic crystal has axial ratio <strong>a : b : c = 3 : 2 : 1</strong>. A plane makes intercepts of <strong>1 Å, 2 Å, and 0.5 Å</strong> along the a, b, and c axes respectively. What are the Miller indices of this plane?",
      options: [
        "(124)",
        "(213)",
        "(614)",
        "(312)"
      ],
      ans: 3,
      exp: "Expressing intercepts in units of a = 3, b = 2, c = 1 gives fractional intercepts: x/a = 1/3, y/b = 2/2 = 1, z/c = 0.5/1 = 1/2. Taking reciprocals gives (3, 1, 2) ⇒ <strong>(312)</strong>."
    },
    {
      id: "M03-032",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Find the Miller indices of a plane that intercepts the x-axis at <strong>+1</strong>, intercepts the y-axis at <strong>−1/2</strong>, and runs <strong>parallel to the z-axis</strong>.",
      options: [
        "(1<span class=\"bar\">2</span>0)",
        "(2<span class=\"bar\">1</span>0)",
        "(1<span class=\"bar\">2</span>1)",
        "(<span class=\"bar\">1</span>20)"
      ],
      ans: 0,
      exp: "Intercepts are (1, −1/2, ∞). Taking reciprocals yields (1/1, −2, 1/∞) = (1, −2, 0), written with an overbar as <strong>(1<span class=\"bar\">2</span>0)</strong>."
    },
    {
      id: "M03-033",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "In which crystal system(s) is the crystallographic direction <strong>[hkl]</strong> guaranteed to be strictly <strong>perpendicular</strong> to the plane <strong>(hkl)</strong> for ALL values of h, k, and l?",
      options: [
        "All 7 crystal systems",
        "Cubic, Tetragonal, and Orthorhombic systems (all orthogonal systems)",
        "The Cubic crystal system ONLY",
        "Cubic and Hexagonal systems only"
      ],
      ans: 2,
      exp: "High-yield exam trap: the rule <strong>[hkl] ⊥ (hkl)</strong> for arbitrary (hkl) holds in the <strong>Cubic system ONLY</strong> (a = b = c, α = β = γ = 90°). Even in orthogonal systems like Tetragonal or Orthorhombic, [111] is NOT perpendicular to (111) because a, b, c are unequal!"
    },
    {
      id: "M03-034",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "In a cubic crystal, two planes (h<sub>1</sub>k<sub>1</sub>l<sub>1</sub>) and (h<sub>2</sub>k<sub>2</sub>l<sub>2</sub>) are mutually perpendicular if and only if h<sub>1</sub>h<sub>2</sub> + k<sub>1</sub>k<sub>2</sub> + l<sub>1</sub>l<sub>2</sub> = 0. Which plane is perpendicular to <strong>(12<span class=\"bar\">1</span>)</strong>?",
      options: [
        "(111)",
        "(101)",
        "(211)",
        "(12<span class=\"bar\">1</span>)"
      ],
      ans: 1,
      exp: "Check the dot product h<sub>1</sub>h<sub>2</sub> + k<sub>1</sub>k<sub>2</sub> + l<sub>1</sub>l<sub>2</sub> with (1, 2, −1): for <strong>(101)</strong>, 1(1) + 2(0) + (−1)(1) = 1 + 0 − 1 = <strong>0</strong> ⇒ perpendicular! All other choices give non-zero dot products (2, 3, and 6)."
    },
    {
      id: "M03-035",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Easy",
      type: "Formula",
      diagram: null,
      q: "According to the <strong>Weiss Zone Law</strong>, a crystallographic direction <strong>[uvw]</strong> lies in (or parallel to) a plane <strong>(hkl)</strong> if and only if which equation is satisfied?",
      options: [
        "h/u + k/v + l/w = 0",
        "hu + kv + lw = 1",
        "h<sup>2</sup>u + k<sup>2</sup>v + l<sup>2</sup>w = 0",
        "hu + kv + lw = 0"
      ],
      ans: 3,
      exp: "The <strong>Weiss Zone Law</strong> states that direction [uvw] lies within (or parallel to) plane (hkl) if and only if <strong>hu + kv + lw = 0</strong>. Notably, this law holds in <em>all</em> crystal systems, not just cubic!"
    },
    {
      id: "M03-036",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Using the Weiss Zone Law, which of the following crystallographic directions lies in the <strong>(111)</strong> plane?",
      options: [
        "[1<span class=\"bar\">1</span>0]",
        "[110]",
        "[111]",
        "[101]"
      ],
      ans: 0,
      exp: "Applying hu + kv + lw = 0 with (h, k, l) = (1, 1, 1): for <strong>[1<span class=\"bar\">1</span>0]</strong>, 1(1) + 1(−1) + 1(0) = <strong>0</strong>. The others yield 2, 3, and 2 respectively."
    },
    {
      id: "M03-037",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Determine the <strong>zone axis</strong> (common line of intersection) of the two crystal planes <strong>(111)</strong> and <strong>(11<span class=\"bar\">1</span>)</strong>.",
      options: [
        "[110] or [<span class=\"bar\">1</span><span class=\"bar\">1</span>0]",
        "[001] or [00<span class=\"bar\">1</span>]",
        "[1<span class=\"bar\">1</span>0] or [<span class=\"bar\">1</span>10]",
        "[10<span class=\"bar\">1</span>] or [<span class=\"bar\">1</span>01]"
      ],
      ans: 2,
      exp: "The zone axis [uvw] must satisfy both u + v + w = 0 and u + v − w = 0. Adding gives 2(u + v) = 0 ⇒ v = −u, and subtracting gives 2w = 0 ⇒ w = 0. Setting u = 1 gives <strong>[1<span class=\"bar\">1</span>0]</strong> (or antiparallel <strong>[<span class=\"bar\">1</span>10]</strong>)."
    },
    {
      id: "M03-038",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Find the zone axis (direction of intersection) common to the planes <strong>(101)</strong> and <strong>(111)</strong>.",
      options: [
        "[110] or [<span class=\"bar\">1</span><span class=\"bar\">1</span>0]",
        "[10<span class=\"bar\">1</span>] or [<span class=\"bar\">1</span>01]",
        "[01<span class=\"bar\">1</span>] or [0<span class=\"bar\">1</span>1]",
        "[1<span class=\"bar\">1</span>1] or [<span class=\"bar\">1</span>1<span class=\"bar\">1</span>]"
      ],
      ans: 1,
      exp: "Applying the Weiss Zone Law to both planes: (1) u + w = 0 ⇒ w = −u; (2) u + v + w = 0 ⇒ v = 0. Taking u = 1 yields <strong>[10<span class=\"bar\">1</span>]</strong> (or equivalently <strong>[<span class=\"bar\">1</span>01]</strong>)."
    },
    {
      id: "M03-039",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Find the crystallographic direction common to the intersecting planes <strong>(1<span class=\"bar\">1</span>0)</strong> and <strong>(1<span class=\"bar\">1</span>1)</strong>.",
      options: [
        "[1<span class=\"bar\">1</span>0] or [<span class=\"bar\">1</span>10]",
        "[001] or [00<span class=\"bar\">1</span>]",
        "[10<span class=\"bar\">1</span>] or [<span class=\"bar\">1</span>01]",
        "[110] or [<span class=\"bar\">1</span><span class=\"bar\">1</span>0]"
      ],
      ans: 3,
      exp: "By the Weiss Zone Law: (1) u − v = 0 ⇒ u = v; (2) u − v + w = 0 ⇒ w = 0. Choosing u = v = 1 gives <strong>[110]</strong> (and its opposite <strong>[<span class=\"bar\">1</span><span class=\"bar\">1</span>0]</strong>). Always check bracket type: directions use square brackets [uvw]!"
    },
    {
      id: "M03-040",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Trap",
      diagram: null,
      q: "Which pair of equations correctly expresses the <strong>interplanar spacing d<sub>hkl</sub></strong> for an <strong>Orthorhombic</strong> crystal (a ≠ b ≠ c) and a <strong>Cubic</strong> crystal (a = b = c)?",
      options: [
        "Orthorhombic: 1/d<sup>2</sup><sub>hkl</sub> = h<sup>2</sup>/a<sup>2</sup> + k<sup>2</sup>/b<sup>2</sup> + l<sup>2</sup>/c<sup>2</sup>; Cubic: d<sub>hkl</sub> = a / √(h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>)",
        "Orthorhombic: d<sub>hkl</sub> = h/a + k/b + l/c; Cubic: d<sub>hkl</sub> = a<sup>2</sup> / √(h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>)",
        "Orthorhombic: 1/d<sub>hkl</sub> = h<sup>2</sup>/a<sup>2</sup> + k<sup>2</sup>/b<sup>2</sup> + l<sup>2</sup>/c<sup>2</sup>; Cubic: d<sub>hkl</sub> = a / (h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>)",
        "Orthorhombic: d<sup>2</sup><sub>hkl</sub> = a<sup>2</sup>/h<sup>2</sup> + b<sup>2</sup>/k<sup>2</sup> + c<sup>2</sup>/l<sup>2</sup>; Cubic: d<sub>hkl</sub> = a √(h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>)"
      ],
      ans: 0,
      exp: "For an orthorhombic crystal, <strong>1/d<sup>2</sup><sub>hkl</sub> = h<sup>2</sup>/a<sup>2</sup> + k<sup>2</sup>/b<sup>2</sup> + l<sup>2</sup>/c<sup>2</sup></strong>. Setting a = b = c gives the cubic formula <strong>d<sub>hkl</sub> = a / √(h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>)</strong>. Watch out for the classic trap a<sup>2</sup>/√(h<sup>2</sup>+k<sup>2</sup>+l<sup>2</sup>) — dimensionally, d<sub>hkl</sub> must scale linearly with <em>a</em>!"
    },
    {
      id: "M03-041",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Formula",
      diagram: null,
      q: "In the standard geometric proof of the orthorhombic interplanar spacing formula, the normal of length d<sub>hkl</sub> from the origin to plane (hkl) makes angles θ<sub>1</sub>, θ<sub>2</sub>, θ<sub>3</sub> with the x, y, z axes. What are the three direction cosines used with cos<sup>2</sup>θ<sub>1</sub> + cos<sup>2</sup>θ<sub>2</sub> + cos<sup>2</sup>θ<sub>3</sub> = 1?",
      options: [
        "cos θ<sub>1</sub> = a / (h d<sub>hkl</sub>), cos θ<sub>2</sub> = b / (k d<sub>hkl</sub>), cos θ<sub>3</sub> = c / (l d<sub>hkl</sub>)",
        "cos θ<sub>1</sub> = d<sub>hkl</sub> / (h a), cos θ<sub>2</sub> = d<sub>hkl</sub> / (k b), cos θ<sub>3</sub> = d<sub>hkl</sub> / (l c)",
        "cos θ<sub>1</sub> = h d<sub>hkl</sub> / a, cos θ<sub>2</sub> = k d<sub>hkl</sub> / b, cos θ<sub>3</sub> = l d<sub>hkl</sub> / c",
        "cos θ<sub>1</sub> = h a / d<sub>hkl</sub>, cos θ<sub>2</sub> = k b / d<sub>hkl</sub>, cos θ<sub>3</sub> = l c / d<sub>hkl</sub>"
      ],
      ans: 2,
      exp: "The first plane from the origin has intercepts OA = a/h, OB = b/k, OC = c/l. Since the normal d<sub>hkl</sub> forms right triangles with each intercept, cos θ<sub>1</sub> = d<sub>hkl</sub>/(a/h) = <strong>h d<sub>hkl</sub>/a</strong>, cos θ<sub>2</sub> = <strong>k d<sub>hkl</sub>/b</strong>, and cos θ<sub>3</sub> = <strong>l d<sub>hkl</sub>/c</strong>. Squaring and summing to 1 immediately gives 1/d<sup>2</sup><sub>hkl</sub> = h<sup>2</sup>/a<sup>2</sup> + k<sup>2</sup>/b<sup>2</sup> + l<sup>2</sup>/c<sup>2</sup>."
    },
    {
      id: "M03-042",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Medium",
      type: "Numerical",
      diagram: null,
      q: "Calculate the interplanar spacing <strong>d<sub>220</sub></strong> for a cubic crystal having lattice parameter <strong>a = 2.14 nm</strong>.",
      options: [
        "1.513 nm",
        "0.757 nm",
        "0.535 nm",
        "1.070 nm"
      ],
      ans: 1,
      exp: "For a cubic crystal, d<sub>hkl</sub> = a / √(h<sup>2</sup> + k<sup>2</sup> + l<sup>2</sup>). For (220): d<sub>220</sub> = 2.14 / √(2<sup>2</sup> + 2<sup>2</sup> + 0<sup>2</sup>) = 2.14 / √8 = 2.14 / 2.8284 = <strong>0.757 nm</strong>."
    },
    {
      id: "M03-043",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "An orthorhombic crystal has lattice parameters <strong>a = 3.0 Å, b = 4.0 Å, and c = 6.0 Å</strong>. Calculate the interplanar spacing <strong>d<sub>122</sub></strong>.",
      options: [
        "1.000 Å",
        "2.118 Å",
        "0.472 Å",
        "1.455 Å"
      ],
      ans: 3,
      exp: "Using 1/d<sup>2</sup><sub>hkl</sub> = h<sup>2</sup>/a<sup>2</sup> + k<sup>2</sup>/b<sup>2</sup> + l<sup>2</sup>/c<sup>2</sup>: 1/d<sup>2</sup><sub>122</sub> = 1<sup>2</sup>/3<sup>2</sup> + 2<sup>2</sup>/4<sup>2</sup> + 2<sup>2</sup>/6<sup>2</sup> = 1/9 + 1/4 + 1/9 = 2/9 + 1/4 = 17/36 Å<sup>−2</sup>. Therefore d<sub>122</sub> = √(36/17) = 6/√17 = <strong>1.455 Å</strong>."
    },
    {
      id: "M03-044",
      chapter: "Ch 4 & 6: Miller Indices & Geometry",
      difficulty: "Hard",
      type: "Numerical",
      diagram: null,
      q: "Calculate the acute interplanar angle <strong>φ</strong> between the <strong>(111)</strong> and <strong>(121)</strong> planes in a cubic crystal.",
      options: [
        "35.26°",
        "54.74°",
        "19.47°",
        "29.50°"
      ],
      ans: 2,
      exp: "In a cubic crystal, cos φ = (h<sub>1</sub>h<sub>2</sub> + k<sub>1</sub>k<sub>2</sub> + l<sub>1</sub>l<sub>2</sub>) / [√(h<sub>1</sub><sup>2</sup> + k<sub>1</sub><sup>2</sup> + l<sub>1</sub><sup>2</sup>) √(h<sub>2</sub><sup>2</sup> + k<sub>2</sub><sup>2</sup> + l<sub>2</sub><sup>2</sup>)] = (1×1 + 1×2 + 1×1) / (√3 × √6) = 4 / √18 = 4 / (3√2) ≈ <strong>0.9428</strong>. Taking cos<sup>−1</sup>(0.9428) gives <strong>φ = 19.47°</strong>."
    }
  ]
});
