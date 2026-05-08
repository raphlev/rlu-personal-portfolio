# Skill: Portfolio to CV (portfolio.md → Word Document)

## Purpose

Generate a professional Word document CV/resume from `public/portfolio.md`.
The output is ATS-friendly (parseable by job website engines) and follows the
project's formatting rules.

## Trigger phrases

- "generate my CV", "generate my resume"
- "create a Word CV from portfolio"
- "update my CV from portfolio.md"
- "export my CV"

## Source and output

| Item | Path |
|------|------|
| Source | `D:\ClaudeWS\rlu-portfolio\public\portfolio.md` |
| Generator script | `D:\ClaudeWS\rlu-portfolio\cv_generator\generate_cv_complete.py` |
| Output | `D:\ClaudeWS\rlu-portfolio\cv_generator\Raphael_Leveque_CV.docx` |

---

## Step-by-step workflow

### 1. Read portfolio.md

Always read `public/portfolio.md` before running. It is the single source of
truth. Check for changes since the script was last run.

### 2. Check if the generator script is up to date

Read `cv_generator/generate_cv_complete.py` and verify it reflects the current
content of `portfolio.md`. If the portfolio has changed, update the script first.

Key sections to cross-check:

| portfolio.md section | Script location |
|----------------------|----------------|
| `## timeline` JSON | Job entries in `PROFESSIONAL EXPERIENCE` |
| `## skills` groups | `create_skills_table(...)` call |
| `## skills` certs JSON | `CERTIFICATIONS` section |
| `## about` education | `EDUCATION` section |
| `## intro` / `## about` / `## services` / `## experience` | Professional Summary (3 paragraphs) |
| `## works` | `NOTABLE CLIENTS` section |
| `## testimonials` | `TESTIMONIALS` section |

### 3. Run the generator

```bash
cd D:\ClaudeWS\rlu-portfolio\cv_generator
conda activate <env>          # or: py -3.x
pip install python-docx       # if not already installed
python generate_cv_complete.py
```

Or double-click `RUN_CV_GENERATOR.bat` from Explorer.

The script prints the output path and file size on success.
Expect ~200–500 KB; must be under 5 MB.

### 4. Verify the output

- File exists at `D:\ClaudeWS\rlu-portfolio\cv_generator\Raphael_Leveque_CV.docx`
- File size is under 5,242,880 bytes (5 MB)
- No errors in the console output

---

## Formatting rules (ATS compliance)

| Rule | Implementation |
|------|----------------|
| Contact info first | Name, title, email, LinkedIn, location — before any section heading |
| Spelled-out months | "September 2022", never "Sep 22" or "09/22" |
| Current jobs | Use "Present" |
| Consistent job order | Role + date → Company + location → responsibilities |
| Company abbreviations | Always end with S.A.S., S.E., Inc., GmbH, S.A., Ltd., etc. |
| No symbol fonts | Bullets via `List Bullet` style, not unicode characters |
| No images | Plain text and tables only |
| Section headers | Common English words |
| Max file size | 5 MB |

---

## Document structure (`generate_cv_complete.py`)

```
CONTACT HEADER
  └─ Name (bold, 24pt, blue #2563EB)
  └─ Title (bold, 13pt)
  └─ Separator line (bottom border)
  └─ Email | LinkedIn | Location

PROFESSIONAL SUMMARY  ← 3 paragraphs merging:
  └─ Para 1: identity + stats (25+ yrs, 50+ projects, 10+ industries) + career span
  └─ Para 2: core expertise (PLM | Cloud & IoT | AI Development)
  └─ Para 3: notable clients by sector

PROFESSIONAL EXPERIENCE  ← per job:
  └─ create_job_header(role, date_range)       bold left, date right-aligned
  └─ create_company_line(company, location)    italic blue, location gray
  └─ create_subsection_heading(title)          optional sub-sections
  └─ create_bullet(text)                       standard responsibility bullet
  └─ create_project_bullet(text)               bold metadata + normal description
                                               (used for "Projects description list")

EDUCATION
  └─ job_header + company_line (no bullets)

CERTIFICATIONS
  └─ create_cert_row(name, issuer, date)

SKILLS
  └─ create_skills_table([ [label, "item | item | ..."], ... ])

LANGUAGES
  └─ create_skills_table([ [label, level], ... ])

NOTABLE CLIENTS
  └─ create_notable_clients_table([ [sector, "Client, Client, ..."], ... ])

TESTIMONIALS
  └─ create_testimonial(initials, role, company, quote, award=None)
```

---

## Adding a new job

Insert in chronological order (newest first) inside `generate_cv()`:

```python
# Job N: Company Name
create_job_header(doc, 'Role Title', 'Month YYYY – Month YYYY')
create_company_line(doc, 'Company Name Inc.', 'City, Country')
create_bullet(doc, 'Responsibility or achievement.')
```

For a project list entry (bold metadata header + normal description):

```python
create_subsection_heading(doc, 'Projects description list')
create_project_bullet(doc, '2020-2021 | Role | Client – Location (duration): Description.')
```

Date format: full month name — "September 2022", not "Sep 2022".
Current position: "September 2022 – Present".

---

## Color reference

| Variable | Hex | Used for |
|----------|-----|----------|
| `MIDBLUE` | `#2563EB` | Name, company lines |
| `DARKGRAY` | `#404040` | Body text, role titles |
| `MEDGRAY` | `#666666` | Dates, locations, secondary info |

Font is Arial throughout. No symbol fonts. No images.
