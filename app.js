(() => {
  "use strict";

  const STORAGE_KEY = "me103_cbt_state_v1";
  const OPT_LETTERS = ["A", "B", "C", "D"];
  const RING_CIRC = 314.16;

  const CHAPTERS = window.ME103_CHAPTERS || [];
  const DIAGRAMS = window.ME103_DIAGRAMS || {};
  const FORMULAS = window.ME103_FORMULAS || [];
  const ALL_QUESTIONS = [];
  const Q_BY_ID = {};

  (window.ME103_BANK || []).forEach(block => {
    const modId = block.moduleId;
    (block.questions || []).forEach(q => {
      const enriched = { ...q, moduleId: modId };
      ALL_QUESTIONS.push(enriched);
      Q_BY_ID[enriched.id] = enriched;
    });
  });

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        return {
          theme: p.theme || "dark",
          fontScale: p.fontScale || 1,
          showPalette: p.showPalette !== false,
          soundOn: Boolean(p.soundOn),
          stats: p.stats || {},
          bookmarks: Array.isArray(p.bookmarks) ? p.bookmarks : [],
          wrongQueue: Array.isArray(p.wrongQueue) ? p.wrongQueue : [],
          activeSession: p.activeSession || null
        };
      }
    } catch (_) {}
    return {
      theme: "dark", fontScale: 1, showPalette: true, soundOn: false,
      stats: {}, bookmarks: [], wrongQueue: [], activeSession: null
    };
  }

  const store = loadStore();
  function saveStore() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (_) {}
  }

  let selectedModules = new Set(CHAPTERS.map(c => c.id));
  let session = null;
  let timerInterval = null;
  let paletteFilter = "all";
  let reviewFilter = "all";
  let reviewLimit = 25;
  let activeFormulaGroup = "All";
  let lastResult = null;
  let confirmCallback = null;
  let lastRenderedIdx = -1;
  let toastTimer = null;
  let calcHistory = [];

  const $ = id => document.getElementById(id);

  // ==================== MICRO-TOAST ====================
  function showToast(msg) {
    const el = $("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 1650);
  }

  // ==================== OPTIONAL WEB AUDIO MICRO-SOUNDS ====================
  let audioCtx = null;
  function playTone(kind) {
    if (!store.soundOn) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      if (kind === "correct") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.3, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.09);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
        osc.start(now); osc.stop(now + 0.23);
      } else if (kind === "wrong") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(210, now);
        osc.frequency.exponentialRampToValueAtTime(145, now + 0.14);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
        osc.start(now); osc.stop(now + 0.21);
      } else {
        osc.type = "sine";
        osc.frequency.setValueAtTime(420, now);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.start(now); osc.stop(now + 0.06);
      }
    } catch (_) {}
  }

  // ==================== FULL-VIEWPORT ARCHITECTURAL ATOMIC FIELD ====================
  const bgField = (() => {
    let canvas, ctx, w = 0, h = 0, dpr = 1;
    let nodes = [];
    const pointer = { x: -9999, y: -9999 };

    function resize() {
      canvas = $("bg-field-canvas");
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.max(30, Math.min(58, Math.round((w * h) / 28000)));
      if (nodes.length !== targetCount) {
        nodes = Array.from({ length: targetCount }, (_, i) => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          r: 1.2 + Math.random() * 1.3,
          hue: i % 3 === 0 ? "cyan" : i % 3 === 1 ? "indigo" : "emerald"
        }));
      }
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const isLight = store.theme === "light";
      const linkDist = 152;
      const mouseDist = 200;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
      }

      // Interatomic bonds
      ctx.lineWidth = 0.85;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            let alpha = (1 - dist / linkDist) * (isLight ? 0.13 : 0.16);
            const mx = (a.x + b.x) * 0.5 - pointer.x;
            const my = (a.y + b.y) * 0.5 - pointer.y;
            const md = Math.hypot(mx, my);
            if (md < mouseDist) alpha += (1 - md / mouseDist) * 0.22;
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha.toFixed(3)})`
              : `rgba(96, 165, 250, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Lattice nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const md = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        const boost = md < mouseDist ? (1 - md / mouseDist) * 0.55 : 0;
        const alpha = (isLight ? 0.28 : 0.36) + boost;
        const radius = n.r + boost * 1.4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        if (n.hue === "indigo") ctx.fillStyle = `rgba(129, 140, 248, ${alpha.toFixed(3)})`;
        else if (n.hue === "emerald") ctx.fillStyle = `rgba(52, 211, 153, ${alpha.toFixed(3)})`;
        else ctx.fillStyle = isLight ? `rgba(2, 132, 199, ${alpha.toFixed(3)})` : `rgba(56, 189, 248, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    return {
      init() {
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", e => { pointer.x = e.clientX; pointer.y = e.clientY; });
        window.addEventListener("mouseleave", () => { pointer.x = -9999; pointer.y = -9999; });
        requestAnimationFrame(step);
      }
    };
  })();

  // ==================== REAL-TIME 3D FCC CRYSTAL LATTICE CANVAS ====================
  const crystalEngine = (() => {
    let rafId = null;
    let angleY = 0.45;
    let angleX = 0.32;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let curTiltX = 0;
    let curTiltY = 0;

    // Exact FCC Unit Cell vertices: 8 corners + 6 face centers
    const corners = [
      [-1,-1,-1], [1,-1,-1], [1,1,-1], [-1,1,-1],
      [-1,-1, 1], [1,-1, 1], [1,1, 1], [-1,1, 1]
    ];
    const faces = [
      [0,0,-1], [0,0,1], [0,-1,0], [0,1,0], [-1,0,0], [1,0,0]
    ];
    const edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7]
    ];
    const nodes = [
      ...corners.map(p => ({ p, type: "corner" })),
      ...faces.map(p => ({ p, type: "face" }))
    ];

    function project(pt, ax, ay, cx, cy, scale) {
      let [x, y, z] = pt;
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const fov = 4.6;
      const persp = fov / (fov - z2);
      return { x: cx + x1 * scale * persp, y: cy + y2 * scale * persp, z: z2, s: persp };
    }

    function draw() {
      const canvas = $("crystal-canvas");
      if (!canvas || $("view-home").classList.contains("hidden")) {
        rafId = null;
        return;
      }
      const ctx = canvas.getContext("2d");
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      angleY += 0.0042;
      curTiltX += (targetTiltX - curTiltX) * 0.06;
      curTiltY += (targetTiltY - curTiltY) * 0.06;

      const ax = angleX + curTiltX;
      const ay = angleY + curTiltY;
      const cx = w / 2, cy = h / 2, scale = 112;
      const isLight = store.theme === "light";

      const projCorners = corners.map(p => project(p, ax, ay, cx, cy, scale));
      const projNodes = nodes.map(n => ({ ...project(n.p, ax, ay, cx, cy, scale), type: n.type }));

      // Draw cube lattice edges with depth alpha
      ctx.lineWidth = 1.6;
      edges.forEach(([i, j]) => {
        const a = projCorners[i], b = projCorners[j];
        const depth = ((a.z + b.z) * 0.5 + 1.5) / 3;
        const alpha = Math.max(0.08, Math.min(0.42, 0.1 + depth * 0.3));
        ctx.strokeStyle = isLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(56, 189, 248, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // Depth-sort atoms back-to-front
      projNodes.sort((a, b) => a.z - b.z);
      projNodes.forEach(n => {
        const depth = (n.z + 1.5) / 3;
        const alpha = Math.max(0.18, Math.min(0.95, 0.22 + depth * 0.72));
        const r = (n.type === "face" ? 5.6 : 4.4) * n.s;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        if (n.type === "face") {
          ctx.fillStyle = isLight ? `rgba(99, 102, 241, ${alpha})` : `rgba(129, 140, 248, ${alpha})`;
        } else {
          ctx.fillStyle = isLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(56, 189, 248, ${alpha})`;
        }
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    return {
      start() { if (!rafId) rafId = requestAnimationFrame(draw); },
      stop() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } },
      setTilt(tx, ty) { targetTiltX = tx; targetTiltY = ty; }
    };
  })();

  // ==================== SLIDING TAB GLIDER ====================
  function moveTabGlider(tabsId, gliderId) {
    const container = $(tabsId);
    const glider = $(gliderId);
    if (!container || !glider) return;
    const active = container.querySelector(".tab-btn.active");
    if (!active) return;
    glider.style.width = `${active.offsetWidth}px`;
    glider.style.transform = `translateX(${active.offsetLeft - 4}px)`;
  }

  // ==================== CURSOR SPOTLIGHT & PARALLAX ====================
  function attachSpotlights() {
    document.querySelectorAll(".spotlight-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    });

    const hero = $("hero-studio");
    if (hero) {
      hero.addEventListener("mousemove", e => {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        crystalEngine.setTilt(ny * 0.55, nx * 0.7);
      });
      hero.addEventListener("mouseleave", () => crystalEngine.setTilt(0, 0));
    }
  }

  // ==================== CONFETTI CELEBRATION ====================
  function burstConfetti() {
    const canvas = $("confetti-canvas");
    if (!canvas) return;
    canvas.classList.remove("hidden");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const colors = ["#38bdf8", "#818cf8", "#34d399", "#fbbf24"];
    const parts = Array.from({ length: 44 }, () => ({
      x: canvas.width * (0.35 + Math.random() * 0.3),
      y: canvas.height * 0.25,
      vx: (Math.random() - 0.5) * 9,
      vy: -3 - Math.random() * 6,
      size: 4 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    }));

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      parts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.rot += p.vrot;
        p.life -= 0.015;
        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      });
      if (alive) requestAnimationFrame(frame);
      else canvas.classList.add("hidden");
    }
    requestAnimationFrame(frame);
  }

  function animateCount(el, target, suffix = "") {
    const start = performance.now();
    const dur = 520;
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ==================== THEME, FONT, PALETTE, SOUND ====================
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", store.theme);
    const icon = store.theme === "dark" ? "☀" : "☾";
    if ($("btn-theme-home")) $("btn-theme-home").textContent = icon;
    if ($("btn-theme-res")) $("btn-theme-res").textContent = icon;
    if ($("pop-theme-state")) $("pop-theme-state").textContent = store.theme === "dark" ? "Dark" : "Light";
  }

  function toggleTheme() {
    store.theme = store.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveStore();
  }

  function applyFontScale() { document.documentElement.style.setProperty("--q-scale", String(store.fontScale)); }

  function applyPaletteVisibility() {
    const shell = $("exam-shell");
    if (shell) shell.classList.toggle("palette-hidden", !store.showPalette);
    if ($("pop-pal-state")) $("pop-pal-state").textContent = store.showPalette ? "Shown" : "Hidden";
  }

  function applySoundLabel() {
    if ($("pop-sound-state")) $("pop-sound-state").textContent = store.soundOn ? "On" : "Off";
  }

  function showView(viewId) {
    ["view-home", "view-exam", "view-results"].forEach(id => {
      $(id).classList.toggle("hidden", id !== viewId);
    });
    document.body.classList.toggle("mode-focus", viewId === "view-exam");
    if (viewId === "view-home") {
      crystalEngine.start();
      requestAnimationFrame(() => moveTabGlider("home-tabs", "home-tab-glider"));
    } else {
      crystalEngine.stop();
    }
    if (viewId === "view-results") {
      requestAnimationFrame(() => moveTabGlider("res-tabs", "res-tab-glider"));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function setRingArc(elId, pct) {
    const el = $(elId);
    if (!el) return;
    const offset = RING_CIRC * (1 - Math.max(0, Math.min(100, pct)) / 100);
    requestAnimationFrame(() => { el.style.strokeDashoffset = String(offset); });
  }

  // ==================== HOME / LAUNCHPAD ====================
  function renderHome() {
    stopTimer();
    showView("view-home");

    const totalBank = ALL_QUESTIONS.length;
    $("kpi-total").textContent = totalBank;

    const attemptedIds = Object.keys(store.stats).filter(id => Q_BY_ID[id] && store.stats[id].attempts > 0);
    $("kpi-attempted").textContent = `${attemptedIds.length}/${totalBank}`;

    let totalAttempts = 0, totalCorrect = 0;
    attemptedIds.forEach(id => {
      totalAttempts += store.stats[id].attempts;
      totalCorrect += store.stats[id].correct;
    });

    if (totalAttempts > 0) {
      const acc = Math.round((totalCorrect / totalAttempts) * 100);
      $("kpi-accuracy").textContent = `${acc}%`;
      $("hero-ring-lbl").textContent = "Accuracy";
      setRingArc("hero-ring-arc", acc);
    } else {
      $("kpi-accuracy").textContent = String(totalBank);
      $("hero-ring-lbl").textContent = "Ready MCQs";
      setRingArc("hero-ring-arc", 100);
    }

    // Mid-Sem & End-Sem hairline progress bars
    const calcTermPct = term => {
      const modIds = new Set(CHAPTERS.filter(c => c.term === term).map(c => c.id));
      const qs = ALL_QUESTIONS.filter(q => modIds.has(q.moduleId));
      const mastered = qs.filter(q => store.stats[q.id]?.lastCorrect === true).length;
      return qs.length ? Math.round((mastered / qs.length) * 100) : 0;
    };
    $("bar-midsem").style.width = `${calcTermPct("midsem")}%`;
    $("bar-endsem").style.width = `${calcTermPct("endsem")}%`;

    const wrongCount = store.wrongQueue.filter(id => Q_BY_ID[id]).length;
    const bmCount = store.bookmarks.filter(id => Q_BY_ID[id]).length;
    $("kpi-wrong-mini").textContent = wrongCount;
    $("btn-reset-stats").classList.toggle("hidden", !(totalAttempts > 0 || bmCount > 0 || wrongCount > 0));

    const numCount = ALL_QUESTIONS.filter(q => q.type === "Numerical").length;
    const trapCount = ALL_QUESTIONS.filter(q => q.type === "Trap" || q.type === "Diagram" || q.diagram).length;
    const qLbl = n => `${n} ${n === 1 ? "Q" : "Qs"} ›`;
    $("preset-num-cnt").textContent = qLbl(numCount);
    $("preset-trap-cnt").textContent = qLbl(trapCount);
    $("preset-wrong-cnt").textContent = qLbl(wrongCount);
    $("preset-bm-cnt").textContent = qLbl(bmCount);

    if (store.activeSession && store.activeSession.items?.length) {
      const s = store.activeSession;
      const ans = s.items.filter(it => it.chosen !== null).length;
      $("resume-meta").textContent = `Resume ${s.title} · ${ans}/${s.items.length} answered`;
      $("resume-banner").classList.remove("hidden");
    } else {
      $("resume-banner").classList.add("hidden");
    }

    renderChapterGrid();
    updateMatchingCount();
  }

  function renderChapterGrid() {
    const grid = $("chapter-grid");
    grid.innerHTML = "";
    CHAPTERS.forEach(ch => {
      const modQs = ALL_QUESTIONS.filter(q => q.moduleId === ch.id);
      const mastered = modQs.filter(q => store.stats[q.id]?.lastCorrect === true).length;
      const pct = modQs.length ? Math.round((mastered / modQs.length) * 100) : 0;

      const row = document.createElement("div");
      row.className = `ch-item ${selectedModules.has(ch.id) ? "selected" : ""}`;
      row.innerHTML = `
        <div class="ch-left">
          <span class="ch-check">✓</span>
          <span class="ch-code mono">${ch.code}</span>
          <span class="ch-title" title="${ch.title}">${ch.title}</span>
        </div>
        <div class="ch-right">
          <span class="ch-meta mono">${modQs.length} Qs${pct > 0 ? ` · ${pct}%` : ""}</span>
          <button class="ch-play-btn" type="button" title="Practice ${ch.code} immediately">▶</button>
        </div>
        <span class="card-hairline-progress"><i style="width:${pct}%"></i></span>
      `;
      row.addEventListener("click", e => {
        if (e.target.closest(".ch-play-btn")) return;
        if (selectedModules.has(ch.id)) selectedModules.delete(ch.id);
        else selectedModules.add(ch.id);
        row.classList.toggle("selected");
        updateMatchingCount();
      });
      row.querySelector(".ch-play-btn").addEventListener("click", e => {
        e.stopPropagation();
        startSession({
          title: `${ch.code}: ${ch.title}`,
          mode: "practice",
          pool: modQs,
          count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
        });
      });
      grid.appendChild(row);
    });
    $("selected-mod-count").textContent = selectedModules.size;
  }

  function getFilteredPool(opts = {}) {
    const mods = opts.modules || selectedModules;
    const diff = opts.diff ?? $("cfg-diff").value;
    const type = opts.type ?? $("cfg-type").value;
    const unseenOnly = opts.unseenOnly ?? $("cfg-unseen-only").checked;
    const customIds = opts.ids || null;

    return ALL_QUESTIONS.filter(q => {
      if (customIds && !customIds.has(q.id)) return false;
      if (!customIds && !mods.has(q.moduleId)) return false;
      if (diff !== "All" && q.difficulty !== diff) return false;
      if (type !== "All") {
        if (type === "TrapOrDiagram") {
          if (q.type !== "Trap" && q.type !== "Diagram" && !q.diagram) return false;
        } else if (q.type !== type) return false;
      }
      if (unseenOnly && store.stats[q.id]?.attempts > 0) return false;
      return true;
    });
  }

  function updateMatchingCount() {
    $("selected-mod-count").textContent = selectedModules.size;
    const chTotal = ALL_QUESTIONS.filter(q => selectedModules.has(q.moduleId)).length;
    $("ch-matching-label").textContent = `${chTotal} questions in selected modules`;
    $("btn-ch-practice").disabled = chTotal === 0;
    $("btn-ch-mock").disabled = chTotal === 0;

    const pool = getFilteredPool();
    const req = $("cfg-count").value === "all" ? pool.length : Math.min(pool.length, Number($("cfg-count").value));
    $("matching-count-label").textContent = `${pool.length} matching (launches ${req} Qs)`;
    $("btn-launch-custom").disabled = pool.length === 0;
  }

  // ==================== SESSION LAUNCH ====================
  function shuffleArr(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startSession(cfg) {
    let pool = cfg.pool || [];
    if (!pool.length) { showToast("No questions match this selection"); return; }
    if (cfg.shuffleQ) pool = shuffleArr(pool);
    const limit = cfg.count === "all" ? pool.length : Math.min(pool.length, Number(cfg.count));
    const items = pool.slice(0, limit).map(q => ({
      qId: q.id,
      optOrder: cfg.shuffleOpt ? shuffleArr([0, 1, 2, 3]) : [0, 1, 2, 3],
      chosen: null, checked: false, marked: false, visited: false, struck: [], timeSpent: 0
    }));

    const totalSecs = cfg.secsPerQ > 0 ? items.length * cfg.secsPerQ : 0;
    session = {
      title: cfg.title || "Practice Session",
      mode: cfg.mode || "practice",
      negMark: Number(cfg.negMark || 0),
      isCountdown: totalSecs > 0,
      timeLeft: totalSecs,
      elapsed: 0,
      paused: false,
      streak: 0,
      currentIdx: 0,
      items
    };
    lastRenderedIdx = -1;

    paletteFilter = "all";
    document.querySelectorAll("#palette-filters .pal-tab").forEach(b => {
      b.classList.toggle("active", b.dataset.pfilter === "all");
    });

    store.activeSession = session;
    saveStore();
    openExamView();
  }

  function launchPreset(key) {
    const allMods = new Set(CHAPTERS.map(c => c.id));
    const midMods = new Set(CHAPTERS.filter(c => c.term === "midsem").map(c => c.id));
    const endMods = new Set(CHAPTERS.filter(c => c.term === "endsem").map(c => c.id));

    if (key === "mock60") {
      startSession({
        title: "Full Mock Exam", mode: "exam",
        pool: getFilteredPool({ modules: allMods, diff: "All", type: "All", unseenOnly: false }),
        count: 60, secsPerQ: 60, negMark: 0.25, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "sprint30") {
      startSession({
        title: "Quick Practice", mode: "practice",
        pool: getFilteredPool({ modules: allMods, diff: "All", type: "All", unseenOnly: false }),
        count: 30, secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "midsem") {
      startSession({
        title: "Mid-Sem Syllabus", mode: "practice",
        pool: getFilteredPool({ modules: midMods, diff: "All", type: "All", unseenOnly: false }),
        count: 60, secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "endsem") {
      startSession({
        title: "End-Sem Syllabus", mode: "practice",
        pool: getFilteredPool({ modules: endMods, diff: "All", type: "All", unseenOnly: false }),
        count: 60, secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "numericals") {
      startSession({
        title: "Numericals Bootcamp", mode: "practice",
        pool: getFilteredPool({ modules: allMods, diff: "All", type: "Numerical", unseenOnly: false }),
        count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "traps") {
      startSession({
        title: "Exam Traps & Diagrams", mode: "practice",
        pool: getFilteredPool({ modules: allMods, diff: "All", type: "TrapOrDiagram", unseenOnly: false }),
        count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "mistakes") {
      const ids = new Set(store.wrongQueue.filter(id => Q_BY_ID[id]));
      if (!ids.size) { showToast("Mistake queue is empty"); return; }
      startSession({
        title: "Wrong Answers Queue", mode: "practice",
        pool: getFilteredPool({ ids, diff: "All", type: "All", unseenOnly: false }),
        count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    } else if (key === "bookmarks") {
      const ids = new Set(store.bookmarks.filter(id => Q_BY_ID[id]));
      if (!ids.size) { showToast("No bookmarked questions yet"); return; }
      startSession({
        title: "Bookmarked Deck", mode: "practice",
        pool: getFilteredPool({ ids, diff: "All", type: "All", unseenOnly: false }),
        count: "all", secsPerQ: 0, negMark: 0, shuffleQ: false, shuffleOpt: false
      });
    }
  }

  // ==================== EXAM VIEW ====================
  function openExamView() {
    showView("view-exam");
    $("exam-popover").classList.add("hidden");
    const isExam = session.mode === "exam";
    $("hud-mode-label").textContent = isExam
      ? (session.negMark > 0 ? `Mock · −${session.negMark === 0.25 ? "0.25" : "0.33"}` : "Mock Exam")
      : "Practice";
    $("pal-jump").max = session.items.length;
    applyPaletteVisibility();
    applySoundLabel();
    updateStreakPill();
    renderQuestion();
    renderPalette();
    startTimer();
  }

  function updateStreakPill() {
    const el = $("hud-streak");
    if (!session || session.mode !== "practice" || (session.streak || 0) < 2) {
      el.classList.add("hidden");
    } else {
      el.textContent = `${session.streak} Streak`;
      el.classList.remove("hidden");
    }
  }

  function formatTime(secs) {
    const s = Math.max(0, Math.floor(secs));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    const p = n => String(n).padStart(2, "0");
    return h > 0 ? `${p(h)}:${p(m)}:${p(r)}` : `${p(m)}:${p(r)}`;
  }

  function updateTimerDisplay() {
    if (!session) return;
    const el = $("hud-timer");
    const secs = session.isCountdown ? session.timeLeft : session.elapsed;
    el.textContent = session.paused ? `Paused · ${formatTime(secs)}` : formatTime(secs);
    el.classList.toggle("warn", session.isCountdown && session.timeLeft <= 300 && session.timeLeft > 0);
  }

  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      if (!session || session.paused) return;
      session.elapsed += 1;
      const cur = session.items[session.currentIdx];
      if (cur) cur.timeSpent = (cur.timeSpent || 0) + 1;
      if (session.isCountdown) {
        session.timeLeft -= 1;
        if (session.timeLeft <= 0) {
          session.timeLeft = 0;
          updateTimerDisplay();
          submitSession(true);
          return;
        }
      }
      updateTimerDisplay();
      if (session.elapsed % 5 === 0) { store.activeSession = session; saveStore(); }
    }, 1000);
  }

  function stopTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }

  function recordStat(qId, isCorrect) {
    if (!store.stats[qId]) store.stats[qId] = { attempts: 0, correct: 0, lastCorrect: false };
    store.stats[qId].attempts += 1;
    if (isCorrect) store.stats[qId].correct += 1;
    store.stats[qId].lastCorrect = isCorrect;

    const wi = store.wrongQueue.indexOf(qId);
    if (!isCorrect && wi === -1) store.wrongQueue.push(qId);
    else if (isCorrect && wi !== -1) store.wrongQueue.splice(wi, 1);
    saveStore();
  }

  function openDiagramLightbox(diagKey) {
    const d = DIAGRAMS[diagKey];
    if (!d) return;
    $("lightbox-title").textContent = d.title;
    $("lightbox-body").innerHTML = `
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:12px;padding:18px">
        ${d.svg.replace('class="cbt-svg"', 'style="width:100%;height:auto;max-height:62vh;display:block"')}
      </div>
      <div class="diagram-caption" style="font-size:13px;margin-top:12px">${d.caption}</div>
    `;
    openModal("modal-diagram");
  }

  const ICON_CHECK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  const ICON_CROSS = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  function renderQuestion() {
    const idx = session.currentIdx;
    const item = session.items[idx];
    const q = Q_BY_ID[item.qId];
    item.visited = true;

    if (idx !== lastRenderedIdx) {
      const anim = $("q-anim-body");
      const dirCls = idx < lastRenderedIdx ? "q-slide-prev" : "q-slide-next";
      anim.classList.remove("q-slide-next", "q-slide-prev");
      void anim.offsetWidth;
      anim.classList.add(dirCls);
      lastRenderedIdx = idx;
    }

    $("hud-progress").textContent = `${idx + 1} / ${session.items.length}`;
    $("exam-progress-fill").style.width = `${Math.round(((idx + 1) / session.items.length) * 100)}%`;

    const diffCol = q.difficulty === "Easy" ? "var(--emerald)" : q.difficulty === "Hard" ? "var(--rose)" : "var(--amber)";
    $("q-meta-text").innerHTML = `
      <span>${q.chapter}</span>
      <span style="opacity:0.35">·</span>
      <span style="display:inline-flex;align-items:center;gap:5px"><i class="diff-dot" style="background:${diffCol}"></i>${q.difficulty}</span>
      <span style="opacity:0.35">·</span>
      <span>${q.type}</span>
    `;

    const isBm = store.bookmarks.includes(q.id);
    $("btn-bookmark").textContent = isBm ? "★ Saved" : "☆ Save";
    $("btn-bookmark").classList.toggle("active-bm", isBm);

    $("btn-mark-toggle").textContent = item.marked ? "⚑ Marked" : "⚑ Mark";
    $("btn-mark-toggle").classList.toggle("active-mark", item.marked);

    $("q-prompt").innerHTML = q.q;

    const diagSlot = $("q-diagram-slot");
    if (q.diagram && DIAGRAMS[q.diagram]) {
      const d = DIAGRAMS[q.diagram];
      diagSlot.innerHTML = `
        <button class="diagram-zoom-btn" type="button" id="btn-zoom-diag">Expand ⤢</button>
        ${d.svg}
        <div class="diagram-caption">${d.caption}</div>
      `;
      diagSlot.classList.remove("hidden");
      $("btn-zoom-diag").addEventListener("click", () => openDiagramLightbox(q.diagram));
    } else {
      diagSlot.classList.add("hidden");
      diagSlot.innerHTML = "";
    }

    const optList = $("options-list");
    optList.innerHTML = "";
    const reveal = session.mode === "practice" && item.checked;
    const correctDisp = item.optOrder.indexOf(q.ans);

    item.optOrder.forEach((origIdx, dispIdx) => {
      const row = document.createElement("div");
      let cls = "opt-row";
      let stateIcon = "";
      if (reveal) {
        cls += " locked";
        if (dispIdx === correctDisp) { cls += " correct"; stateIcon = `<span class="opt-state-icon">${ICON_CHECK}</span>`; }
        else if (dispIdx === item.chosen && dispIdx !== correctDisp) { cls += " wrong"; stateIcon = `<span class="opt-state-icon">${ICON_CROSS}</span>`; }
      } else if (item.chosen === dispIdx) {
        cls += " selected";
      }
      if (!reveal && item.struck.includes(dispIdx)) cls += " struck";

      row.className = cls;
      row.innerHTML = `
        <span class="opt-letter">${OPT_LETTERS[dispIdx]}</span>
        <span class="opt-body">${q.options[origIdx]}</span>
        ${stateIcon}
        ${!reveal ? `<button class="strike-x" title="Eliminate option (Right-click)" type="button">✕</button>` : ""}
      `;
      row.addEventListener("click", e => {
        if (e.target.closest(".strike-x")) return;
        selectOption(dispIdx);
      });
      row.addEventListener("contextmenu", e => {
        if (reveal) return;
        e.preventDefault();
        toggleStrike(dispIdx);
      });
      const sx = row.querySelector(".strike-x");
      if (sx) sx.addEventListener("click", e => { e.stopPropagation(); toggleStrike(dispIdx); });
      optList.appendChild(row);
    });

    const expSlot = $("exp-slot");
    if (reveal) {
      const isRight = item.chosen === correctDisp;
      expSlot.className = `exp-panel ${isRight ? "is-correct" : "is-wrong"}`;
      expSlot.innerHTML = `
        <div class="exp-title" style="color:${isRight ? "var(--emerald)" : "var(--rose)"}">
          ${isRight ? ICON_CHECK : ICON_CROSS}
          <span>${isRight ? "Correct" : `Incorrect — Answer is ${OPT_LETTERS[correctDisp]}`}</span>
        </div>
        <div>${q.exp}</div>
      `;
    } else {
      expSlot.className = "exp-panel hidden";
      expSlot.innerHTML = "";
    }

    $("btn-prev").disabled = idx === 0;
    $("btn-next").innerHTML = idx === session.items.length - 1
      ? `Submit <span class="kbd">↵</span>`
      : `Next <span class="kbd">→</span>`;
    $("btn-clear-resp").disabled = item.chosen === null || reveal;

    store.activeSession = session;
    saveStore();
  }

  function selectOption(dispIdx) {
    const item = session.items[session.currentIdx];
    const q = Q_BY_ID[item.qId];
    if (session.mode === "practice") {
      if (item.checked) return;
      item.chosen = dispIdx;
      item.checked = true;
      const isRight = item.optOrder[dispIdx] === q.ans;
      session.streak = isRight ? (session.streak || 0) + 1 : 0;
      playTone(isRight ? "correct" : "wrong");
      updateStreakPill();
      recordStat(q.id, isRight);
    } else {
      item.chosen = dispIdx;
      playTone("click");
    }
    item.struck = item.struck.filter(x => x !== dispIdx);
    renderQuestion();
    renderPalette();
  }

  function toggleStrike(dispIdx) {
    const item = session.items[session.currentIdx];
    const i = item.struck.indexOf(dispIdx);
    if (i === -1) item.struck.push(dispIdx);
    else item.struck.splice(i, 1);
    renderQuestion();
  }

  function clearResponse() {
    const item = session.items[session.currentIdx];
    if (session.mode === "practice" && item.checked) return;
    item.chosen = null;
    renderQuestion();
    renderPalette();
  }

  function toggleMark(advance = false) {
    const item = session.items[session.currentIdx];
    item.marked = !item.marked;
    showToast(item.marked ? "Marked for review" : "Removed mark");
    if (advance && session.currentIdx < session.items.length - 1) session.currentIdx += 1;
    renderQuestion();
    renderPalette();
  }

  function toggleBookmark() {
    const qId = session.items[session.currentIdx].qId;
    const i = store.bookmarks.indexOf(qId);
    if (i === -1) { store.bookmarks.push(qId); showToast("Saved to bookmarks"); }
    else { store.bookmarks.splice(i, 1); showToast("Removed bookmark"); }
    saveStore();
    renderQuestion();
    renderPalette();
  }

  function goToQuestion(idx) {
    if (idx < 0 || idx >= session.items.length) return;
    session.currentIdx = idx;
    renderQuestion();
    renderPalette();
  }

  function getStatus(item) {
    const has = item.chosen !== null;
    if (has && item.marked) return "ans-marked";
    if (has) return "answered";
    if (item.marked) return "marked";
    if (item.visited) return "not-answered";
    return "not-visited";
  }

  function renderPalette() {
    let ans = 0, skip = 0, mark = 0;
    const grid = $("palette-grid");
    grid.innerHTML = "";
    let activeTile = null;

    session.items.forEach((item, idx) => {
      const st = getStatus(item);
      if (st === "answered" || st === "ans-marked") ans++;
      if (st === "not-answered") skip++;
      if (st === "marked" || st === "ans-marked") mark++;

      const isBm = store.bookmarks.includes(item.qId);
      if (paletteFilter === "unanswered" && item.chosen !== null) return;
      if (paletteFilter === "marked" && !item.marked) return;
      if (paletteFilter === "bookmarked" && !isBm) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `pal-num st-${st} ${idx === session.currentIdx ? "current" : ""} ${isBm ? "has-bm" : ""}`;
      btn.textContent = idx + 1;
      btn.addEventListener("click", () => goToQuestion(idx));
      grid.appendChild(btn);
      if (idx === session.currentIdx) activeTile = btn;
    });

    if (activeTile) activeTile.scrollIntoView({ block: "nearest", behavior: "smooth" });

    $("cnt-ans").textContent = ans;
    $("cnt-skip").textContent = skip;
    $("cnt-mark").textContent = mark;
    $("pal-answered-ratio").textContent = `${ans}/${session.items.length}`;
    $("pal-mini-fill").style.width = `${session.items.length ? Math.round((ans / session.items.length) * 100) : 0}%`;
  }

  // ==================== SUBMIT & RESULTS ====================
  function promptSubmit() {
    const total = session.items.length;
    const answered = session.items.filter(it => it.chosen !== null).length;
    openConfirm(
      "Submit Session?",
      `<p style="margin:0 0 8px">Answered <strong>${answered} of ${total}</strong> questions.</p>
       <p style="margin:0;color:var(--muted);font-size:13px">Review your chapter-wise accuracy and full worked explanations.</p>`,
      () => submitSession(false),
      "Submit"
    );
  }

  function submitSession(auto = false) {
    stopTimer();
    closeModal("modal-confirm");

    let correct = 0, wrong = 0, skipped = 0;
    const wrongIds = [];
    const byModule = {};
    const byDiff = { Easy: { c: 0, t: 0 }, Medium: { c: 0, t: 0 }, Hard: { c: 0, t: 0 } };
    const byType = {};

    session.items.forEach(item => {
      const q = Q_BY_ID[item.qId];
      if (!byModule[q.moduleId]) byModule[q.moduleId] = { c: 0, t: 0 };
      byModule[q.moduleId].t++;
      byDiff[q.difficulty].t++;
      if (!byType[q.type]) byType[q.type] = { c: 0, t: 0 };
      byType[q.type].t++;

      if (item.chosen === null) {
        skipped++;
      } else {
        const isRight = item.optOrder[item.chosen] === q.ans;
        if (!item.checked) recordStat(q.id, isRight);
        if (isRight) {
          correct++;
          byModule[q.moduleId].c++;
          byDiff[q.difficulty].c++;
          byType[q.type].c++;
        } else {
          wrong++;
          wrongIds.push(q.id);
        }
      }
    });

    const total = session.items.length;
    const rawScore = correct - wrong * session.negMark;
    const pct = total ? Math.max(0, Math.round((rawScore / total) * 100)) : 0;
    const att = correct + wrong;
    const acc = att ? Math.round((correct / att) * 100) : 0;

    const weakMods = Object.entries(byModule)
      .map(([mId, st]) => ({ mId, acc: st.t ? st.c / st.t : 1 }))
      .sort((a, b) => a.acc - b.acc)
      .filter(x => x.acc < 0.75)
      .slice(0, 4)
      .map(x => x.mId);

    lastResult = {
      session: JSON.parse(JSON.stringify(session)),
      auto, correct, wrong, skipped, total,
      rawScore, pct, acc, wrongIds, weakMods,
      byModule, byDiff, byType
    };

    store.activeSession = null;
    saveStore();
    session = null;
    renderResults();
  }

  function renderResults() {
    showView("view-results");
    const r = lastResult;

    $("res-session-meta").textContent = `${r.session.title}${r.auto ? " (Auto-submitted)" : ""}`;
    const scoreStr = Number.isInteger(r.rawScore) ? r.rawScore : r.rawScore.toFixed(2);
    $("res-headline").textContent = `Score: ${scoreStr} / ${r.total}`;
    $("res-grade-label").textContent = r.pct >= 80 ? "Quiz Ready — Strong Mastery" : r.pct >= 55 ? "Solid Foundation" : "Focused Revision Recommended";

    // Animate score ring & number count-up
    $("res-ring-arc").style.strokeDashoffset = String(RING_CIRC);
    animateCount($("res-pct"), r.pct, "%");
    animateCount($("res-acc"), r.acc, "%");
    setTimeout(() => setRingArc("res-ring-arc", r.pct), 60);

    // Stacked outcome bar
    const cW = r.total ? (r.correct / r.total) * 100 : 0;
    const wW = r.total ? (r.wrong / r.total) * 100 : 0;
    const sW = r.total ? (r.skipped / r.total) * 100 : 100;
    $("sb-correct").style.width = `${cW}%`;
    $("sb-wrong").style.width = `${wW}%`;
    $("sb-skip").style.width = `${sW}%`;

    if (r.pct >= 75 && r.correct >= 3) burstConfetti();

    $("res-correct").textContent = r.correct;
    $("res-wrong").textContent = r.wrong;
    $("res-skipped").textContent = r.skipped;
    $("res-time").textContent = formatTime(r.session.elapsed);

    $("btn-retry-wrong").disabled = r.wrongIds.length === 0;
    $("btn-drill-weak").disabled = r.weakMods.length === 0;

    // Clickable chapter bars
    const chBox = $("res-chapter-bars");
    chBox.innerHTML = "";
    Object.entries(r.byModule)
      .map(([mId, st]) => ({
        mId,
        ch: CHAPTERS.find(c => c.id === mId) || { code: mId, title: mId },
        ...st,
        pct: st.t ? Math.round((st.c / st.t) * 100) : 0
      }))
      .sort((a, b) => a.pct - b.pct)
      .forEach(row => {
        const col = row.pct >= 75 ? "var(--emerald)" : row.pct >= 50 ? "var(--amber)" : "var(--rose)";
        const div = document.createElement("div");
        div.className = "bar-row clickable";
        div.title = `Click to drill ${row.ch.title}`;
        div.innerHTML = `
          <div class="bar-row-top">
            <span><span class="mono" style="color:var(--accent)">${row.ch.code}</span> ${row.ch.title}</span>
            <span style="display:inline-flex;align-items:center;gap:8px">
              <span class="bar-drill-hint">Drill →</span>
              <span class="mono" style="color:${col}">${row.c}/${row.t} (${row.pct}%)</span>
            </span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${row.pct}%;background:${col}"></div></div>
        `;
        div.addEventListener("click", () => {
          startSession({
            title: `${row.ch.code}: ${row.ch.title}`,
            mode: "practice",
            pool: ALL_QUESTIONS.filter(q => q.moduleId === row.mId),
            count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
          });
        });
        chBox.appendChild(div);
      });

    const dBox = $("res-diff-bars");
    dBox.innerHTML = "";
    ["Easy", "Medium", "Hard"].forEach(d => {
      const st = r.byDiff[d];
      if (!st || !st.t) return;
      const pct = Math.round((st.c / st.t) * 100);
      dBox.innerHTML += `
        <div class="bar-row">
          <div class="bar-row-top"><span>${d}</span><span class="mono">${st.c}/${st.t} (${pct}%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:var(--accent)"></div></div>
        </div>
      `;
    });

    const tBox = $("res-type-bars");
    tBox.innerHTML = "";
    Object.entries(r.byType).forEach(([tp, st]) => {
      const pct = Math.round((st.c / st.t) * 100);
      tBox.innerHTML += `
        <div class="bar-row">
          <div class="bar-row-top"><span>${tp}</span><span class="mono">${st.c}/${st.t} (${pct}%)</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:var(--violet)"></div></div>
        </div>
      `;
    });

    setResultsTab("overview");
    reviewFilter = "all";
    reviewLimit = 25;
    $("rev-search").value = "";
    document.querySelectorAll("[data-rfilter]").forEach(b => b.classList.toggle("active", b.dataset.rfilter === "all"));
    renderReviewList();
  }

  function setResultsTab(tab) {
    document.querySelectorAll("#res-tabs .tab-btn").forEach(b => b.classList.toggle("active", b.dataset.rtab === tab));
    $("rtab-overview").classList.toggle("hidden", tab !== "overview");
    $("rtab-solutions").classList.toggle("hidden", tab !== "solutions");
    requestAnimationFrame(() => moveTabGlider("res-tabs", "res-tab-glider"));
  }

  function renderReviewList() {
    const list = $("review-list");
    const query = ($("rev-search").value || "").trim().toLowerCase();
    list.innerHTML = "";

    const matched = [];
    lastResult.session.items.forEach((item, idx) => {
      const q = Q_BY_ID[item.qId];
      const origChosen = item.chosen !== null ? item.optOrder[item.chosen] : null;
      const status = origChosen === null ? "skipped" : origChosen === q.ans ? "correct" : "wrong";

      if (reviewFilter === "wrong" && status !== "wrong") return;
      if (reviewFilter === "skipped" && status !== "skipped") return;
      if (reviewFilter === "correct" && status !== "correct") return;
      if (reviewFilter === "marked" && !item.marked) return;
      if (query) {
        const hay = `${q.id} ${q.chapter} ${q.q} ${q.exp} ${q.options.join(" ")}`.toLowerCase();
        if (!hay.includes(query)) return;
      }
      matched.push({ item, idx, q, status });
    });

    if (!matched.length) {
      list.innerHTML = `<div style="text-align:center;padding:32px;color:var(--muted)">No questions match this filter.</div>`;
      return;
    }

    const slice = matched.slice(0, reviewLimit);
    slice.forEach(({ item, idx, q, status }) => {
      const correctDisp = item.optOrder.indexOf(q.ans);
      const stLabel = status === "correct" ? "Correct"
                    : status === "wrong" ? `Wrong (Picked ${OPT_LETTERS[item.chosen]})`
                    : "Skipped";
      const stColor = status === "correct" ? "var(--emerald)" : status === "wrong" ? "var(--rose)" : "var(--muted)";

      const optsHtml = item.optOrder.map((origI, dI) => {
        let cls = "rev-opt";
        if (origI === q.ans) cls += " is-ans";
        else if (dI === item.chosen) cls += " is-user-wrong";
        return `<div class="${cls}"><strong>${OPT_LETTERS[dI]}.</strong> ${q.options[origI]}</div>`;
      }).join("");

      const diagHtml = q.diagram && DIAGRAMS[q.diagram]
        ? `<div class="diagram-wrap" style="margin:10px 0">${DIAGRAMS[q.diagram].svg}</div>`
        : "";

      const card = document.createElement("div");
      card.className = `rev-card rev-${status}`;
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;gap:10px;font-size:12px;color:var(--muted);margin-bottom:8px;flex-wrap:wrap">
          <span><strong class="mono" style="color:var(--text)">Q${idx + 1}</strong> · ${q.chapter} · ${q.difficulty}</span>
          <strong style="color:${stColor}">${stLabel}</strong>
        </div>
        <div style="font-weight:600;margin-bottom:8px">${q.q}</div>
        ${diagHtml}
        <div class="rev-opts">${optsHtml}</div>
        <div style="font-size:13.5px;color:var(--text-soft);margin-top:8px">
          <strong style="color:var(--accent)">Answer (${OPT_LETTERS[correctDisp]}):</strong> ${q.exp}
        </div>
      `;
      list.appendChild(card);
    });

    if (matched.length > slice.length) {
      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex;justify-content:center;gap:10px;padding:12px 0";
      const bMore = document.createElement("button");
      bMore.className = "btn btn-primary btn-sm";
      bMore.textContent = `Load 25 more (${slice.length} / ${matched.length})`;
      bMore.addEventListener("click", () => { reviewLimit += 25; renderReviewList(); });
      wrap.appendChild(bMore);
      list.appendChild(wrap);
    }
  }

  // ==================== FORMULAS (WITH CHIPS) & CALCULATOR (WITH HISTORY) ====================
  function renderFormulaChips() {
    const groups = ["All", ...new Set(FORMULAS.map(f => f.group))];
    const box = $("formula-chips");
    box.innerHTML = "";
    groups.forEach(g => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `chip ${g === activeFormulaGroup ? "active" : ""}`;
      btn.textContent = g;
      btn.addEventListener("click", () => {
        activeFormulaGroup = g;
        renderFormulaChips();
        renderFormulaList($("formula-search").value);
      });
      box.appendChild(btn);
    });
  }

  function renderFormulaList(filter = "") {
    const q = filter.trim().toLowerCase();
    const list = FORMULAS.filter(f => {
      if (activeFormulaGroup !== "All" && f.group !== activeFormulaGroup) return false;
      return !q || `${f.group} ${f.name} ${f.eq}`.toLowerCase().includes(q);
    });
    $("formula-content").innerHTML = list.map(f => `
      <div class="formula-row">
        <div class="formula-name">${f.group} · ${f.name}</div>
        <div class="formula-eq">${f.eq}</div>
      </div>
    `).join("") || `<div style="padding:16px;color:var(--muted)">No matching formulas.</div>`;
  }

  function renderDiagramVault() {
    $("diagram-vault-content").innerHTML = Object.values(DIAGRAMS).map(d => `
      <div class="diagram-wrap">
        <div style="font-size:12.5px;font-weight:700;margin-bottom:8px">${d.title}</div>
        ${d.svg}
        <div class="diagram-caption">${d.caption}</div>
      </div>
    `).join("");
  }

  function renderCalcHistory() {
    const box = $("calc-hist");
    if (!calcHistory.length) { box.classList.add("hidden"); return; }
    box.classList.remove("hidden");
    box.innerHTML = "";
    calcHistory.slice(0, 3).forEach(entry => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "calc-hist-item";
      btn.textContent = `${entry.raw} = ${entry.out}`;
      btn.addEventListener("click", () => {
        $("calc-input").value = entry.out;
        $("calc-input").focus();
      });
      box.appendChild(btn);
    });
  }

  function evalCalc() {
    const raw = ($("calc-input").value || "").trim();
    if (!raw) { $("calc-output").textContent = "0"; return; }
    try {
      let expr = raw
        .replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\^/g, "**")
        .replace(/\bpi\b/gi, "Math.PI")
        .replace(/\bsqrt\(/g, "Math.sqrt(")
        .replace(/\bln\(/g, "Math.log(")
        .replace(/\blog\(/g, "Math.log10(")
        .replace(/\bexp\(/g, "Math.exp(")
        .replace(/\bsin\(/g, "((x)=>Math.sin(x*Math.PI/180))(")
        .replace(/\bcos\(/g, "((x)=>Math.cos(x*Math.PI/180))(")
        .replace(/\btan\(/g, "((x)=>Math.tan(x*Math.PI/180))(")
        .replace(/\bacos\(/g, "((x)=>Math.acos(x)*180/Math.PI)(")
        .replace(/\basin\(/g, "((x)=>Math.asin(x)*180/Math.PI)(")
        .replace(/\batan\(/g, "((x)=>Math.atan(x)*180/Math.PI)(");

      const stripped = expr.replace(/Math\.(PI|sqrt|log10|log|exp|sin|cos|tan|acos|asin|atan)/g, "").replace(/\bx\b/g, "");
      if (/[a-df-zA-DF-Z_$]/.test(stripped)) throw new Error();

      const val = Function(`"use strict"; return (${expr});`)();
      if (typeof val !== "number" || !Number.isFinite(val)) throw new Error();
      const out = (val !== 0 && (Math.abs(val) < 1e-4 || Math.abs(val) >= 1e7))
        ? val.toExponential(5)
        : Number(val.toPrecision(8)).toString();
      $("calc-output").textContent = out;
      if (!calcHistory.length || calcHistory[0].raw !== raw) {
        calcHistory.unshift({ raw, out });
        calcHistory = calcHistory.slice(0, 4);
        renderCalcHistory();
      }
    } catch (_) {
      $("calc-output").textContent = "Error";
    }
  }

  // ==================== MODALS ====================
  function openModal(id) {
    $(id).classList.remove("hidden");
    if (id === "modal-calc") setTimeout(() => $("calc-input").focus(), 30);
  }
  function closeModal(id) { $(id).classList.add("hidden"); }
  function openConfirm(title, html, onOk, okLabel = "Confirm") {
    $("confirm-title").textContent = title;
    $("confirm-body").innerHTML = html;
    $("confirm-ok").textContent = okLabel;
    confirmCallback = onOk;
    openModal("modal-confirm");
  }

  // ==================== EVENTS ====================
  function initEvents() {
    attachSpotlights();
    window.addEventListener("resize", () => {
      if (!$("view-home").classList.contains("hidden")) moveTabGlider("home-tabs", "home-tab-glider");
      if (!$("view-results").classList.contains("hidden")) moveTabGlider("res-tabs", "res-tab-glider");
    });

    [$("btn-theme-home"), $("btn-theme-exam"), $("btn-theme-res")].forEach(b => b.addEventListener("click", toggleTheme));

    document.querySelectorAll("#home-tabs .tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.htab;
        document.querySelectorAll("#home-tabs .tab-btn").forEach(b => b.classList.toggle("active", b === btn));
        ["quick", "chapters", "custom"].forEach(k => $(`htab-${k}`).classList.toggle("hidden", k !== target));
        moveTabGlider("home-tabs", "home-tab-glider");
      });
    });

    document.querySelectorAll("[data-preset]").forEach(btn => btn.addEventListener("click", () => launchPreset(btn.dataset.preset)));

    $("btn-sel-all").addEventListener("click", () => { selectedModules = new Set(CHAPTERS.map(c => c.id)); renderChapterGrid(); updateMatchingCount(); });
    $("btn-sel-mid").addEventListener("click", () => { selectedModules = new Set(CHAPTERS.filter(c => c.term === "midsem").map(c => c.id)); renderChapterGrid(); updateMatchingCount(); });
    $("btn-sel-end").addEventListener("click", () => { selectedModules = new Set(CHAPTERS.filter(c => c.term === "endsem").map(c => c.id)); renderChapterGrid(); updateMatchingCount(); });
    $("btn-sel-none").addEventListener("click", () => { selectedModules.clear(); renderChapterGrid(); updateMatchingCount(); });

    $("btn-ch-practice").addEventListener("click", () => {
      const pool = ALL_QUESTIONS.filter(q => selectedModules.has(q.moduleId));
      startSession({ title: `Selected Chapters (${selectedModules.size})`, mode: "practice", pool, count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true });
    });
    $("btn-ch-mock").addEventListener("click", () => {
      const pool = ALL_QUESTIONS.filter(q => selectedModules.has(q.moduleId));
      startSession({ title: `Chapters Mock (${selectedModules.size})`, mode: "exam", pool, count: 40, secsPerQ: 60, negMark: 0.25, shuffleQ: true, shuffleOpt: true });
    });

    $("cfg-mode").addEventListener("change", () => { $("cfg-timer").value = $("cfg-mode").value === "exam" ? "60" : "0"; });
    ["cfg-count", "cfg-diff", "cfg-type", "cfg-unseen-only"].forEach(id => $(id).addEventListener("change", updateMatchingCount));
    $("btn-launch-custom").addEventListener("click", () => {
      const mode = $("cfg-mode").value;
      startSession({
        title: mode === "exam" ? "Custom Mock Exam" : "Custom Practice",
        mode, pool: getFilteredPool(), count: $("cfg-count").value,
        secsPerQ: Number($("cfg-timer").value), negMark: Number($("cfg-neg").value),
        shuffleQ: $("cfg-shuffle-q").checked, shuffleOpt: $("cfg-shuffle-opt").checked
      });
    });

    $("btn-resume-session").addEventListener("click", () => { if (store.activeSession) { session = store.activeSession; openExamView(); } });
    $("btn-discard-session").addEventListener("click", () => { store.activeSession = null; saveStore(); renderHome(); showToast("Discarded saved session"); });
    $("btn-reset-stats").addEventListener("click", () => {
      openConfirm("Reset Saved Progress?", "<p style='margin:0'>Clears attempted stats, mistakes queue, and bookmarks.</p>", () => {
        store.stats = {}; store.bookmarks = []; store.wrongQueue = []; store.activeSession = null;
        saveStore(); closeModal("modal-confirm"); renderHome(); showToast("Progress reset");
      }, "Reset");
    });

    $("btn-exit-exam").addEventListener("click", () => { store.activeSession = session; saveStore(); renderHome(); showToast("Session saved"); });
    $("hud-timer").addEventListener("click", () => {
      if (!session || (session.mode === "exam" && session.isCountdown)) return;
      session.paused = !session.paused;
      updateTimerDisplay();
      showToast(session.paused ? "Timer paused" : "Timer resumed");
    });
    $("btn-exam-menu").addEventListener("click", e => { e.stopPropagation(); $("exam-popover").classList.toggle("hidden"); });
    document.addEventListener("click", e => { if (!e.target.closest(".pop-wrap")) $("exam-popover").classList.add("hidden"); });
    $("pop-palette-toggle").addEventListener("click", () => { store.showPalette = !store.showPalette; applyPaletteVisibility(); saveStore(); });
    $("pop-sound-toggle").addEventListener("click", () => { store.soundOn = !store.soundOn; applySoundLabel(); saveStore(); if (store.soundOn) playTone("correct"); });
    $("btn-font-inc").addEventListener("click", e => { e.stopPropagation(); store.fontScale = Math.min(1.25, +(store.fontScale + 0.08).toFixed(2)); applyFontScale(); saveStore(); });
    $("btn-font-dec").addEventListener("click", e => { e.stopPropagation(); store.fontScale = Math.max(0.85, +(store.fontScale - 0.08).toFixed(2)); applyFontScale(); saveStore(); });

    $("btn-bookmark").addEventListener("click", toggleBookmark);
    $("btn-mark-toggle").addEventListener("click", () => toggleMark(false));
    $("btn-mark-next").addEventListener("click", () => toggleMark(true));
    $("btn-clear-resp").addEventListener("click", clearResponse);
    $("btn-prev").addEventListener("click", () => goToQuestion(session.currentIdx - 1));
    $("btn-next").addEventListener("click", () => {
      if (session.currentIdx === session.items.length - 1) promptSubmit();
      else goToQuestion(session.currentIdx + 1);
    });
    $("btn-submit-top").addEventListener("click", promptSubmit);

    $("pal-jump").addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const n = parseInt(e.target.value, 10);
        if (n >= 1 && n <= session.items.length) { goToQuestion(n - 1); e.target.value = ""; e.target.blur(); }
      }
    });

    document.querySelectorAll("#palette-filters .pal-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        paletteFilter = btn.dataset.pfilter;
        document.querySelectorAll("#palette-filters .pal-tab").forEach(b => b.classList.toggle("active", b === btn));
        renderPalette();
      });
    });

    $("btn-back-home").addEventListener("click", renderHome);
    $("brand-results").addEventListener("click", renderHome);
    $("btn-new-test").addEventListener("click", renderHome);
    document.querySelectorAll("#res-tabs .tab-btn").forEach(btn => btn.addEventListener("click", () => setResultsTab(btn.dataset.rtab)));
    $("btn-retry-wrong").addEventListener("click", () => {
      if (!lastResult?.wrongIds.length) return;
      startSession({
        title: "Retry Wrong", mode: "practice",
        pool: getFilteredPool({ ids: new Set(lastResult.wrongIds), diff: "All", type: "All", unseenOnly: false }),
        count: "all", secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    });
    $("btn-drill-weak").addEventListener("click", () => {
      if (!lastResult?.weakMods.length) return;
      startSession({
        title: "Weak Chapters Drill", mode: "practice",
        pool: getFilteredPool({ modules: new Set(lastResult.weakMods), diff: "All", type: "All", unseenOnly: false }),
        count: 40, secsPerQ: 0, negMark: 0, shuffleQ: true, shuffleOpt: true
      });
    });
    document.querySelectorAll("[data-rfilter]").forEach(btn => {
      btn.addEventListener("click", () => {
        reviewFilter = btn.dataset.rfilter;
        reviewLimit = 25;
        document.querySelectorAll("[data-rfilter]").forEach(b => b.classList.toggle("active", b === btn));
        renderReviewList();
      });
    });
    $("rev-search").addEventListener("input", () => { reviewLimit = 25; renderReviewList(); });

    [$("btn-open-formulas-home"), $("btn-open-formulas-exam"), $("btn-open-formulas-res")].forEach(b => b.addEventListener("click", () => openModal("modal-formulas")));
    $("formula-search").addEventListener("input", e => renderFormulaList(e.target.value));
    $("btn-tab-formulas").addEventListener("click", () => {
      $("formula-content").classList.remove("hidden");
      $("formula-chips").classList.remove("hidden");
      $("diagram-vault-content").classList.add("hidden");
      $("btn-tab-formulas").classList.add("btn-primary");
      $("btn-tab-diagrams").classList.remove("btn-primary");
    });
    $("btn-tab-diagrams").addEventListener("click", () => {
      $("formula-content").classList.add("hidden");
      $("formula-chips").classList.add("hidden");
      $("diagram-vault-content").classList.remove("hidden");
      $("btn-tab-diagrams").classList.add("btn-primary");
      $("btn-tab-formulas").classList.remove("btn-primary");
    });

    [$("btn-open-calc-home"), $("btn-open-calc-exam")].forEach(b => b.addEventListener("click", () => openModal("modal-calc")));
    document.querySelectorAll("[data-cins]").forEach(btn => {
      btn.addEventListener("click", () => { const i = $("calc-input"); i.value += btn.dataset.cins; i.focus(); });
    });
    $("calc-clr").addEventListener("click", () => { $("calc-input").value = ""; $("calc-output").textContent = "0"; });
    $("calc-bksp").addEventListener("click", () => { $("calc-input").value = $("calc-input").value.slice(0, -1); });
    $("calc-eval").addEventListener("click", evalCalc);
    $("calc-input").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); evalCalc(); } });

    $("btn-shortcuts").addEventListener("click", () => {
      $("exam-popover").classList.add("hidden");
      openConfirm(
        "Keyboard Shortcuts",
        `<div style="display:grid;grid-template-columns:92px 1fr;gap:9px 14px;font-size:13.5px;align-items:center">
          <span><span class="kbd">A</span>–<span class="kbd">D</span> / <span class="kbd">1</span>–<span class="kbd">4</span></span><span>Select option</span>
          <span><span class="kbd">Right-click</span></span><span>Strike out an option</span>
          <span><span class="kbd">→</span> / <span class="kbd">↵</span></span><span>Next question</span>
          <span><span class="kbd">←</span></span><span>Previous question</span>
          <span><span class="kbd">M</span></span><span>Mark for review</span>
          <span><span class="kbd">S</span></span><span>Save / Bookmark</span>
          <span><span class="kbd">X</span></span><span>Clear response</span>
          <span><span class="kbd">K</span> / <span class="kbd">F</span></span><span>Calculator / Formulas</span>
        </div>`,
        () => closeModal("modal-confirm"),
        "Close"
      );
    });

    $("confirm-ok").addEventListener("click", () => { if (confirmCallback) confirmCallback(); });
    document.querySelectorAll("[data-close-modal]").forEach(b => b.addEventListener("click", () => closeModal(b.dataset.closeModal)));
    document.querySelectorAll(".modal-backdrop").forEach(bd => bd.addEventListener("click", e => { if (e.target === bd) bd.classList.add("hidden"); }));

    document.addEventListener("keydown", e => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "Escape") { ["modal-formulas", "modal-calc", "modal-confirm", "modal-diagram"].forEach(closeModal); return; }
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      const key = e.key.toLowerCase();
      if (key === "k") { e.preventDefault(); $("modal-calc").classList.contains("hidden") ? openModal("modal-calc") : closeModal("modal-calc"); return; }
      if (key === "f") { e.preventDefault(); $("modal-formulas").classList.contains("hidden") ? openModal("modal-formulas") : closeModal("modal-formulas"); return; }

      if (!session || $("view-exam").classList.contains("hidden")) return;
      if (!$("modal-formulas").classList.contains("hidden") || !$("modal-calc").classList.contains("hidden") || !$("modal-confirm").classList.contains("hidden") || !$("modal-diagram").classList.contains("hidden")) return;

      const optMap = { a: 0, "1": 0, b: 1, "2": 1, c: 2, "3": 2, d: 3, "4": 3 };
      if (key in optMap) selectOption(optMap[key]);
      else if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault();
        if (session.currentIdx < session.items.length - 1) goToQuestion(session.currentIdx + 1);
        else if (e.key === "Enter") promptSubmit();
      }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goToQuestion(session.currentIdx - 1); }
      else if (key === "m") toggleMark(false);
      else if (key === "s") toggleBookmark();
      else if (key === "x") clearResponse();
      else if (key === "?") $("btn-shortcuts").click();
    });
  }

  applyTheme();
  applyFontScale();
  bgField.init();
  renderFormulaChips();
  renderFormulaList("");
  renderDiagramVault();
  initEvents();
  renderHome();
})();
