# Portfolio — Raphael Leveque

Single source of truth for all portfolio content.
Edit any section below — the app fetches this file on every page load.

**Format rules:**
- `**key:** value` for labelled fields
- `### Name` for named sub-items (cards, entries, etc.)
- `- bullet` for list items
- Plain paragraphs for free-form text
- JSON code blocks only where nesting is too deep for markdown (Timeline entries, Certifications)

---

## intro

**greeting:** Hello, I Am
**name:** Raphael Leveque
**title:** PLM Windchill Principal Architect with 25+ years driving digital transformation across Aerospace & Defense, Automotive, and Industrial sectors. Bridging PLM, Cloud, IoT — and now AI-driven development.
**badge:** Currently upskilling
**badgeDetail:** AWS Cloud Architecture · AI-driven dev with Claude Code, Kiro & Codex
**ctaLabel:** Get in Touch
**floatingBadge1:** Web · Developer
**floatingBadge2:** Best Design · Award

---

## navbar

**name:** Raphael Leveque
**contactLabel:** Contact

### links
- Home → Navbar
- Expertise → services
- About → about
- Engagements → portfolio
- Career → career
- Skills → skills

---

## services

**heading1:** My Core
**heading2:** Expertise
**description:** 25+ years architecting PLM, Cloud and IoT solutions for global industrial leaders — and continuously pushing into AI-driven development.
**cvButton:** Download CV

### PLM Architecture
**emojiKey:** heart
**detail:** Windchill PDMLink · MPMLink · ProjectLink · CAD Integration · Data Migration · Solution Design · Presales

### Cloud & IoT
**emojiKey:** glasses
**detail:** AWS Certified Solutions Architect · ThingWorx IIoT · Cloud Hosting · Azure IoT Hub · CI/CD · FinOps

### AI Development
**emojiKey:** humble
**detail:** Upskilling with Claude Code · Kiro · Codex · Prompt Engineering · AI-augmented delivery workflows
**color:** rgba(37, 99, 235, 0.15)

---

## experience

### 25+
**label1:** years
**label2:** Experience

### 50+
**label1:** projects
**label2:** Delivered

### 10+
**label1:** industries
**label2:** Served

---

## about

**heading1:** Who I Am
**heading2:** About Me

25+ years architecting PLM solutions across Aerospace & Defense, Automotive, Retail, Luxury and Shipbuilding. My journey spans Dassault Systèmes (SmarTeam, ENOVIA, CATIA), 14 years as a Senior Windchill Architect at PTC, a cloud architecture stint at Capgemini (AWS Certified), and my current role leading Windchill architecture and IIoT presales at Transition Technologies PSC.

I bridge deep PLM expertise with modern cloud and IoT practices — and am now actively investing in AI-driven development with Claude Code, Kiro and Codex, convinced that AI tooling will redefine how architects design, document and deliver solutions.

### languages
- 🇫🇷 French — Native
- 🇬🇧 English — Professional
- 🇩🇪 German

### education

Format: `flag | years | school | degree`

- 🇫🇷 | 1991–1995 | ESSTIN Nancy | Engineer · Fluids Mechanics & IT
- 🇬🇧 | 1993 | University of Strathclyde | Mechanical Engineering · Glasgow, UK

---

## works

**heading1:** Trusted by Global
**heading2:** Industry Leaders
**description:** Delivering PLM excellence for Airbus, Thales, Safran, Volvo, Richemont, Ferrari, SNCF, Schneider, MBDA and many more — across Aerospace & Defense, Automotive, Retail, Energy, Shipbuilding and beyond.
**ctaLabel:** Work with Me

### Aerospace & Defense
Airbus · Thales · Dassault · MBDA · Snecma · Turbomeca

### Automotive
Volvo · Ferrari · ZF · Araymond

### Energy & Industrial
Schneider · Saft · BASF · Fayat Group

### Luxury & Retail
Richemont · Kingfisher · Hasbro · Mars

### Transport & Marine
SNCF · Beneteau · Navantia · Hitachi

### High Tech
Safran · Eurocopter · Aerolia · Velux

---

## portfolio

**heading1:** Key
**heading2:** Engagements

### 🏭 Fayat Group
**context:** TTPSC · 2025 – Present
**type:** Windchill Multi-Site Architecture
**achievement:** Led full solution architecture across 10 industrial sites and 2 distinct Windchill instances — covering Multi-CAD integration, BOM Engineering, Variant Design, ERP integrations and data migrations over a 2-year delivery roadmap.
**tags:** Windchill, BOM, Multi-CAD, ERP Integration, Migration

### ✈️ Airbus
**context:** Capgemini · 2022
**type:** AWS Cloud Architecture
**achievement:** Defined to-be AWS cloud architecture for the PASS SSI Bundle migration — addressing enterprise-scale security hardening, identity management and multi-region disaster recovery.
**tags:** AWS, Cloud Migration, Security, Disaster Recovery

### 🛡️ Thales
**context:** PTC · 2013 – 2022
**type:** PLM Platform Delivery
**achievement:** Multi-year Windchill architecture and delivery for Thales — recognised with PTC's 'Customer First' award for quality, precision and responsiveness. Included CAD integration, LSA and S1000D solution design.
**tags:** Windchill, CAD Integration, LSA, S1000D, A&D

### 🚀 Dassault Aviation
**context:** Dassault Systèmes · 2000 – 2005
**type:** PLM Document Management
**achievement:** Customised SmarTeam as the enterprise document management system for Dassault Aviation's Design Office — used on the Mirage 2000-9 and Rafale fighter aircraft programs.
**tags:** SmarTeam, VBA, Oracle, Rafale, Aerospace

### ⭐ PTC · Key Responsibilities & Achievements
**context:** 2008 – 2022 · 14 years
**type:** Senior Windchill PLM Architect — Cross-cutting highlights
**wide:** true
**tags:** Windchill, CAD Integration, LSA S3000L, SAP / REST, Team Lead, A&D

- Subject-matter expert CAD Integration (member of CATIA BOCA team with R&D), Architecture Design, PLM Solution Design, LSA (S3000L)
- Development Technical Lead managing teams of 1 to 5 developers on average
- Customer-facing workshops for requirement analysis and solution design review
- Trusted advisor for Kingfisher for Windchill interface (REST) with SAP
- Awarded Thales delivery with 'Customer First' mention: quality, precision, reactivity on bug fixing, dev team management
- Conducted training sessions for customers in Australia

---

## timeline

**heading1:** Professional
**heading2:** Career History

```json
[
  {
    "period": "Sep 2022 – Present · 3+ years",
    "company": "Transition Technologies PSC France",
    "role": "Principal Architect PLM Product Engineering",
    "location": "Remote",
    "tags": ["Windchill", "ThingWorx", "IoT", "Cloud", "Presales"],
    "subsections": [
      {
        "title": "PLM Windchill Principal Architect – Fayat (Construction & Industrial Equipment) | Mar 2025 – Present",
        "items": [
          "Led framing activities and authored 2 Technical Statements of Work (SOW) covering Multi-CAD Integration, BOM Engineering, Variant Design, Manufacturing, ERP integrations and Migrations — encompassing 10 sites across 2 distinct Windchill target instances",
          "Defined and documented full solution architecture for both Windchill environments",
          "Managed Proof of Concept, product demonstrations, and architecture design review activities",
          "Initiated Migration and New PDM Configuration Sprints over a 2-year roadmap for each of the 2 Windchill instances",
          "Managed and coordinated technical delivery teams",
          "Facilitated workshops and led project technical reviews with client stakeholders"
        ]
      },
      {
        "title": "PLM Business Analyst – Safran (Aerospace & Defense) | Oct 2024 – Mar 2025",
        "items": [
          "Managed framing activities for Service Lifecycle Management (SLM) projects adhering to ATA/S1000D standards, ensuring readiness for Definition and Implementation phases"
        ]
      },
      {
        "title": "Windchill & Data Migration Technical Architect – Safran (A&D) | Oct 2023 – Jul 2024",
        "items": [
          "Conduct migration project transitioning from SAP and Agile databases to Windchill",
          "Defined data mapping strategies, configured Windchill systems, and coordinated Extract, Transform, Load (ETL) specialists"
        ]
      },
      {
        "title": "ThingWorx Architect – Schneider, Famat (A&D) | 2022 – 2023",
        "items": [
          "Conducted demonstrations and developed presales materials showcasing ThingWorx IoT solutions",
          "Developed simplified PLM interfaces using Mashup and OData technologies",
          "Improved stability, security, scalability, and maintainability of IoT dashboards"
        ]
      },
      {
        "title": "Presales — A&D, Energy, Electrical, Transport",
        "items": [
          "Analyze client requirements for ThingWorx IoT, PLM Windchill, and cloud hosting solutions",
          "Develop technical qualifications, Rough Order of Magnitude (ROM), and Statement of Work (SOW) proposals",
          "Define and document best practices for Presales and Delivery teams",
          "Perform Architecture Design including Windchill architecture (monolithic, cluster, cloud-hosting, replica), LDAP/SSO, and IoT solutions"
        ]
      }
    ]
  },
  {
    "period": "Feb 2022 – Sep 2022 · 8 months",
    "company": "Capgemini",
    "role": "Managed Solution Architect Cloud AWS",
    "location": "Toulouse, Occitanie, France",
    "tags": ["AWS", "Cloud Migration", "Presales", "Architecture"],
    "highlights": [
      "Certification: AWS Solution Architect Associate 2022",
      "Schneider: pre-sales support — migrating several applications (Linux/Windows) to AWS with modernization (migration strategy, workload & assessment)",
      "Safran: pre-sales support — migrating Data Center to AWS with Analytics Platform (migration path, workload & cost)",
      "Internal: build training materials related to AWS cloud services for Application Monitoring, FinOps and CI/CD Pipelines Automation",
      "Airbus: define to-be AWS cloud architecture for the PASS SSI Bundle cloud migration addressing security and disaster recovery"
    ]
  },
  {
    "period": "2008 – Feb 2022 · 14 years 2 months",
    "company": "PTC",
    "role": "Senior Windchill PLM Architect",
    "location": "Greater Toulouse Metropolitan Area · Hybrid",
    "tags": ["Windchill", "PLM", "A&D", "Automotive", "Retail", "Luxury", "Shipbuilding"],
    "subsections": [
      {
        "title": "Roles",
        "items": [
          "2013 to 2022: PLM Technical Architect",
          "2008 to 2012: PLM Application Architect"
        ]
      },
      {
        "title": "Main Deliveries — based on PLM PTC Windchill products",
        "items": [
          "Requirements Analysis, Business Administration, Configuration or Java Customization, Functional Specifications, Technical Specifications, Installation",
          "Architecture design (On-premise / Cloud)",
          "Technical Lead for various projects (PLM, CAD integration, LSA for A&D)",
          "Training, mentoring to customers to leverage best practices"
        ]
      },
      {
        "title": "Main Customers",
        "text": "Thales, Volvo, Richemont, Kingfisher, Thales Australia, Airbus, Velux, Hitachi, Mars, SNCF, Ferrari, Hasbro, Snecma, Turbomeca, MBDA, Navantia, Saft, Aerolia, Araymond, Beneteau, Eurocopter, ZF, BASF, etc."
      },
      {
        "title": "Key Responsibilities & Achievements",
        "items": [
          "Subject-matter expert CAD Integration (member of CATIA BOCA team with R&D), Architecture Design, PLM Solution Design, LSA (S3000L)",
          "Development Technical Lead managing teams of 1 to 5 developers on average",
          "Customer-facing workshops for requirement analysis and solution design review",
          "Trusted advisor for Kingfisher for SAP Integration",
          "Awarded Thales delivery with 'Customer First' mention: quality, precision, reactivity on bug fixing, dev team management",
          "Conducted training sessions for customers in Australia"
        ]
      },
      {
        "title": "Common Feedbacks",
        "text": "Documentation and verbal communication · Attention to detail and reliability · Extra merits · Work efficiency · Team player"
      },
      {
        "title": "Tech Stack",
        "items": [
          "PTC: Windchill PDMLink, MPMLink, ProjectLink, CAD Integration",
          "Development: Java JEE, Eclipse, Git, SVN, Jira, Docker, bash, ksh",
          "Database: Oracle, SQLServer, SQL, MongoDB, NoSQL",
          "Web: Javascript, HTML, CSS, node.js, React, SSL, Security, OAuth",
          "Cloud: AWS EC2 & S3 & CLI, Azure IoT Hub"
        ]
      }
    ]
  },
  {
    "period": "2005 – 2008 · 3 years",
    "company": "IGE+XAO",
    "role": "Electrical PLM Architect",
    "location": "Greater Toulouse Metropolitan Area",
    "tags": ["Electrical CAD", "CATIA V5", "Harness Design"],
    "highlights": [
      "Architect for electrical schematic and Electrical Harness Design applications",
      "Led the technical design of a new electrical application workbench for CATIA V5 including routing process, cabling, wiring, connectors management",
      "Partnership with Dassault-Systèmes R&D to build new electrical framework within CATIA V5"
    ]
  },
  {
    "period": "2000 – 2005 · 5 years",
    "company": "Dassault Systèmes",
    "role": "Solution Architect at Dassault-Data-Services",
    "location": "Suresnes",
    "tags": ["CATIA V5", "SmarTeam", "ENOVIA", "A&D", "Automotive"],
    "highlights": [
      "Solution Architect for Dassault Aviation & Dassault Systèmes customers: CATIA V5, SmarTeam, ENOVIA LCA V5, CAA customer development",
      "Technical leader for customization of SmarTeam as a document management tool in Dassault Aviation Design Office — used for Mirage 2000-9 and Rafale programs (VBA scripts, administration & installation handbook — Oracle-based)",
      "Instructor for CAA CATIA V5 and CAA ENOVIA V5 RADE tools (C++ customer development tools)",
      "Technical leader for development customization projects: Bertrand, Homag, BMW, Volvo — CAA CATIA V5 (CAD) and CAA ENOVIA LCA (PDM). Managed a small development team for Bertrand project"
    ]
  },
  {
    "period": "1998 – 2000 · 2 years",
    "company": "Aura Group",
    "role": "Development Engineer",
    "location": "Greater Paris Metropolitan Region",
    "tags": ["Software Development"],
    "highlights": ["Development Engineer in Greater Paris Metropolitan Region"]
  },
  {
    "period": "1996 – 1998 · 2 years",
    "company": "Heinrich Nickel",
    "role": "HVAC System Engineer",
    "location": "Berlin Metropolitan Area",
    "tags": ["Engineering", "HVAC"],
    "highlights": ["HVAC System Engineer in Berlin Metropolitan Area"]
  }
]
```

---

## skills

**heading1:** Skills &
**heading2:** Certifications
**assessments:** JavaScript, Java, REST APIs, Git

### PLM & Architecture
**accent:** #DDF8FE
- Windchill PDMLink
- MPMLink
- ProjectLink
- SmarTeam
- ENOVIA
- CAD Integration
- CATIA
- Creo Parametric
- Codebeamer
- Data Migration
- Solution Architecture
- ALM / PDM

### Cloud & IoT
**accent:** #fff3d4
- AWS EC2 & S3
- AWS CLI
- ThingWorx IIoT
- PTC Vuforia Studio
- Azure IoT Hub
- Cloud Hosting
- CI/CD Pipelines
- FinOps

### Development
**accent:** #f0e6ff
- Java JEE
- JavaScript ✓
- React
- Node.js
- REST APIs ✓
- Git ✓
- Docker
- SVN
- Oracle
- SQL
- MongoDB
- HTML / CSS
- OAuth / SSL
- Bash / KSH

### Industry Knowledge
**accent:** #e6f4ea
- Requirements Analysis
- Presales & SOW
- Systems Engineering
- Manufacturing Engineering
- Process Engineering
- Change Management
- Aerospace & Defense
- Harness Design
- Agile / Scrum
- Team Leadership

### AI Development
**accent:** #fde8d8
**note:** Actively upskilling
**wide:** true
- Claude Code
- Kiro
- Codex
- Prompt Engineering
- AI-augmented workflows

```json
[
  {
    "name": "AWS Certified Solutions Architect – Associate",
    "issuer": "Amazon Web Services",
    "date": "Feb 2022",
    "accent": "#FF9900",
    "icon": "☁️"
  },
  {
    "name": "ThingWorx Professional Certification",
    "issuer": "PTC University",
    "date": "Aug 2021",
    "accent": "#0066CC",
    "icon": "🔗"
  },
  {
    "name": "Windchill Administration, Customization & Advanced Configuration",
    "issuer": "PTC",
    "date": "Ongoing",
    "accent": "#00A9E0",
    "icon": "⚙️"
  },
  {
    "name": "Scrum Development with Jira & JIRA Agile",
    "issuer": "Pluralsight",
    "date": "Jun 2022",
    "accent": "#F15B2A",
    "icon": "🔄"
  }
]
```

---

## testimonials

**heading1:** Colleagues & clients
**heading2:** value precision,
**heading3:** reliability & partnership

Format for subsection names: `INITIALS | Role | Company`

### TH | Engineering Director | Thales
**award:** PTC 'Customer First' Award

Raphael's delivery on our Windchill PLM programme stood out for its precision, proactive communication and rigorous attention to quality. His responsiveness on bug-fixing and his ability to manage the development team under pressure earned him PTC's prestigious 'Customer First' recognition — a distinction we fully endorsed.

### KF | IT Architecture Lead | Kingfisher

Raphael was our trusted advisor for the Windchill–SAP integration via REST. He navigated a highly complex enterprise interface with the clarity and ownership of someone who genuinely understood both sides of the equation. A rare combination of technical depth and reliable delivery.

### PTC | Delivery Manager | PTC — 14 years

Over 14 years at PTC, Raphael consistently set the bar for documentation quality, verbal communication and attention to detail. He led development teams with calm authority and was always the person you could count on. Colleagues and clients alike described him as a true team player with extra merits.

### AU | Senior PLM Consultant | Thales Australia

Raphael flew to Australia to deliver hands-on Windchill training for our team. His ability to translate complex PLM architecture concepts into practical, actionable knowledge was impressive. Clear, structured, and genuinely engaged with our context — exactly what we needed.

---

## footer

**linkedin:** linkedin.com/in/raphael-leveque-ba68789
