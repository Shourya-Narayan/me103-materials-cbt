#!/usr/bin/env python3
"""Validate all ME 103 CBT question bank JS files for syntax, count, schema, uniqueness, and balance."""
import glob
import json
import os
import re
import subprocess
import sys
from collections import Counter

DATA_DIR = "/home/shour/.gemini/antigravity/scratch/me103-materials-cbt/data"
VALID_DIFFS = {"Easy", "Medium", "Hard"}
VALID_TYPES = {"Conceptual", "Numerical", "Formula", "Diagram", "Trap"}
VALID_DIAGRAMS = {
    None, "crystal_systems", "cubic_cells", "miller_hex", "cu_ni", "pb_sn",
    "fe_c", "ttt", "heat_treat", "al_cu", "cu_zn", "bonding_curves",
    "dislocations", "stress_strain", "composites_rom", "energy_bands",
    "ic_fab", "pbr"
}

def extract_module_via_node_or_py(filepath):
    # Try python regex->eval or node if available; actually quick python parser or JS runner
    text = open(filepath, "r", encoding="utf-8").read()
    # Strip leading window.ME103_BANK boilerplate
    m = re.search(r"window\.ME103_BANK\.push\s*\((\{[\s\S]*\})\s*\)\s*;?\s*$", text)
    if not m:
        raise ValueError("Missing window.ME103_BANK.push({...}) wrapper")
    obj_str = m.group(1)
    # Try parsing with python via simple JS-to-JSON conversion if keys are unquoted
    # Wait: let's check if node.exe is callable in WSL or write a tiny clean parser / use node
    try:
        # Check if node works (e.g. /mnt/c/Program Files/nodejs/node.exe)
        node_bin = "/mnt/c/Program Files/nodejs/node.exe"
        if os.path.exists(node_bin):
            js = f"const window = {{}};\n{text}\nconsole.log(JSON.stringify(window.ME103_BANK[0]));"
            res = subprocess.run([node_bin], input=js, capture_output=True, text=True)
            if res.returncode != 0:
                raise RuntimeError(res.stderr.strip() or f"exit {res.returncode}")
            return json.loads(res.stdout)
    except Exception as e:
        raise RuntimeError(f"Node parse error in {os.path.basename(filepath)}: {e}")
    raise RuntimeError("node.exe not found to validate JS")

def normalize_q(s):
    s = re.sub(r"<[^>]+>", "", s).lower()
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return s

def main():
    files = sorted(glob.glob(os.path.join(DATA_DIR, "mod*.js")))
    if not files:
        print("ERROR: No mod*.js files found!")
        sys.exit(1)

    total = 0
    all_ids = set()
    all_norms = {}
    ans_counter = Counter()
    diff_counter = Counter()
    type_counter = Counter()
    diag_counter = Counter()
    errors = []
    warnings = []

    print(f"Found {len(files)} module files:\n")
    for f in files:
        name = os.path.basename(f)
        try:
            mod = extract_module_via_node_or_py(f)
        except Exception as e:
            errors.append(str(e))
            print(f"  [FAIL] {name}: {e}")
            continue

        qs = mod.get("questions", [])
        mod_id = mod.get("moduleId")
        mod_ans = Counter()
        print(f"  [OK] {name:30s} | moduleId={mod_id:6s} | count={len(qs):3d}")
        total += len(qs)

        for idx, q in enumerate(qs):
            qid = q.get("id")
            if not qid:
                errors.append(f"{name}[{idx}]: missing id")
            elif qid in all_ids:
                errors.append(f"{name}[{idx}]: duplicate id {qid}")
            else:
                all_ids.add(qid)

            for field in ("chapter", "difficulty", "type", "q", "options", "ans", "exp"):
                if field not in q:
                    errors.append(f"{qid}: missing field {field}")

            if q.get("difficulty") not in VALID_DIFFS:
                errors.append(f"{qid}: invalid difficulty {q.get('difficulty')}")
            else:
                diff_counter[q["difficulty"]] += 1

            if q.get("type") not in VALID_TYPES:
                errors.append(f"{qid}: invalid type {q.get('type')}")
            else:
                type_counter[q["type"]] += 1

            diag = q.get("diagram", None)
            if diag not in VALID_DIAGRAMS:
                errors.append(f"{qid}: invalid diagram key '{diag}'")
            elif diag:
                diag_counter[diag] += 1

            opts = q.get("options", [])
            if not isinstance(opts, list) or len(opts) != 4:
                errors.append(f"{qid}: options must be list of 4")
            else:
                if len(set(o.strip() for o in opts)) < 4:
                    errors.append(f"{qid}: duplicate options {opts}")
                if any(not str(o).strip() for o in opts):
                    errors.append(f"{qid}: empty option")

            ans = q.get("ans")
            if not isinstance(ans, int) or ans not in (0, 1, 2, 3):
                errors.append(f"{qid}: invalid ans {ans}")
            else:
                ans_counter[ans] += 1
                mod_ans[ans] += 1

            qtext = str(q.get("q", ""))
            if len(qtext.strip()) < 10:
                errors.append(f"{qid}: question too short")
            norm = normalize_q(qtext)
            if norm in all_norms:
                warnings.append(f"Exact normalized duplicate: {qid} == {all_norms[norm]}")
            else:
                all_norms[norm] = qid

            if not str(q.get("exp", "")).strip():
                errors.append(f"{qid}: empty explanation")

        # Check per-module answer balance
        if qs:
            max_share = max(mod_ans.values()) / len(qs)
            if max_share > 0.42:
                warnings.append(f"{name}: skewed answer distribution {dict(mod_ans)}")

    print("\n=== SUMMARY ===")
    print(f"Total Questions: {total}")
    print(f"Answer Distribution (0/1/2/3): {dict(sorted(ans_counter.items()))}")
    print(f"Difficulty Distribution:       {dict(diff_counter)}")
    print(f"Type Distribution:             {dict(type_counter)}")
    print(f"Diagrams Used ({sum(diag_counter.values())} Qs): {len(diag_counter)}/17 unique diagrams")

    if warnings:
        print(f"\nWarnings ({len(warnings)}):")
        for w in warnings[:25]:
            print("  WARN:", w)

    if errors:
        print(f"\nERRORS ({len(errors)}):")
        for e in errors[:40]:
            print("  ERR:", e)
        sys.exit(1)
    else:
        print("\nALL VALIDATION CHECKS PASSED!")

if __name__ == "__main__":
    main()
