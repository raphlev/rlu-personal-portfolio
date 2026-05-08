# CV Generator

Tools for converting between `public/portfolio.md` and `Raphael_Leveque_CV.docx`.

## Files

| File | Purpose |
|------|---------|
| `generate_cv_complete.py` | **Forward** — reads portfolio.md, writes `Raphael_Leveque_CV.docx` to repo root |
| `cv_to_portfolio.py` | **Reverse** — reads the Word CV, syncs changes back into `public/portfolio.md` |
| `RUN_CV_GENERATOR.bat` | Windows double-click launcher for `generate_cv_complete.py` |

The output file `Raphael_Leveque_CV.docx` is generated inside this `cv_generator/` folder.

---

## Prerequisites

```
pip install python-docx
```

Python 3.6 or later required. Works in any conda environment.

---

## generate_cv_complete.py — portfolio.md → Word CV

### What it does

Reads the content hard-coded from `public/portfolio.md` and generates a
formatted ATS-friendly Word document with the following sections in order:

1. Contact header (name, title, email, LinkedIn, location)
2. Professional Summary (merges intro bio, core expertise, stats, notable clients)
3. Professional Experience — 7 positions, newest first, each with:
   - Role + right-aligned date range
   - Company (italic, blue) + location
   - Sub-sections: responsibilities, project list, customers, tech stack
4. Education
5. Certifications + LinkedIn assessed skills
6. Skills (5 groups in a compact table)
7. Languages
8. Notable Clients (by industry sector)
9. Testimonials (4 quotes from clients and colleagues)

Formatting rules applied automatically:
- Months spelled out in full ("September 2022", not "Sep 22")
- Current position ends with "Present"
- Company names include legal suffix (S.A.S., S.E., Inc., GmbH, S.A. …)
- Arial font throughout — no symbol fonts, no images
- File size well under 5 MB

### How to run

```bash
cd D:\ClaudeWS\rlu-portfolio\cv_generator
python generate_cv_complete.py
```

Or use the batch file (double-click `RUN_CV_GENERATOR.bat`).

Output: `D:\ClaudeWS\rlu-portfolio\Raphael_Leveque_CV.docx`

---

## cv_to_portfolio.py — Word CV → portfolio.md

### What it does

Parses `Raphael_Leveque_CV.docx` and syncs changes back into
`public/portfolio.md`. Use this after editing the CV in Word to keep
the portfolio source in sync.

Sections updated automatically:

| CV section | portfolio.md section |
|------------|---------------------|
| Professional Experience | `## timeline` (full JSON block) |
| Skills table + Certifications | `## skills` |
| Education | `## about` (education list only; bio left untouched) |
| Notable Clients table | `## works` |
| Testimonials | `## testimonials` |

Sections **not** touched (no equivalent in the CV):
`## intro`, `## navbar`, `## services`, `## experience` (stats),
`## portfolio` (engagement cards), `## footer`

### How to run

Always dry-run first to preview what would change:

```bash
cd D:\ClaudeWS\rlu-portfolio\cv_generator
python cv_to_portfolio.py --dry-run
```

Then apply:

```bash
python cv_to_portfolio.py
```

Custom paths (optional):

```bash
python cv_to_portfolio.py --cv "C:\path\to\MyCV.docx" --portfolio "D:\path\to\portfolio.md"
```

---

## Round-trip workflow

```
public/portfolio.md
      │
      │  python generate_cv_complete.py
      ▼
Raphael_Leveque_CV.docx   ← edit in Word
      │
      │  python cv_to_portfolio.py
      ▼
public/portfolio.md  (updated)
```

After a reverse sync, re-run `generate_cv_complete.py` to confirm the
output CV is clean.

---

## Skill files (for Claude / Cowork)

The `skills/` folder at the repo root contains skill definitions that document
this workflow for Claude (the Cowork AI assistant):

| File | Purpose |
|------|---------|
| `skills/portfolio-to-cv/SKILL.md` | Forward conversion — documents how to run `generate_cv_complete.py`, the expected document structure, formatting rules, and how to add new jobs |
| `skills/cv-to-portfolio/SKILL.md` | Reverse conversion — documents how to run `cv_to_portfolio.py`, which sections are synced, parsing signals, and troubleshooting tips |

These skill files are **not needed to run the scripts** — the Python scripts work
entirely on their own. Their role is to give Claude enough context to invoke
and maintain the workflow correctly when you say things like "generate my CV"
or "sync my CV back to portfolio.md" in a Cowork session.
