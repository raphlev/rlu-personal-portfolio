import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Timeline.css";

const timelineData = [
  {
    period: "Sep 2022 – Present",
    company: "Transition Technologies PSC France",
    role: "Principal Architect PLM Product Engineering",
    location: "Remote",
    tags: ["PLM", "IoT", "Cloud", "Presales"],
    highlights: [
      "Led Windchill solution architecture for Fayat — 2 SOWs, 10 sites across 2 Windchill instances, 2-year delivery roadmap",
      "Technical architect for Safran: SAP & Agile PLM → Windchill data migration (ETL strategy, data mapping, configuration)",
      "Business Analyst for Safran SLM project — ATA/S1000D standards, readiness for Definition & Implementation phases",
      "ThingWorx IoT presales & dashboard architecture for Schneider and Famat (Aerospace & Defense)",
      "Defined presales best practices: ROM, SOW templates, Architecture Design Reviews",
    ],
  },
  {
    period: "Feb 2022 – Sep 2022 · 8 months",
    company: "Capgemini",
    role: "Managed Solution Architect Cloud AWS",
    location: "Toulouse",
    tags: ["AWS", "Cloud Migration", "Presales"],
    highlights: [
      "AWS Certified Solutions Architect – Associate (Feb 2022)",
      "Airbus: defined to-be AWS cloud architecture for PASS SSI Bundle — security hardening & disaster recovery",
      "Safran: pre-sales for full Data Center → AWS migration with Analytics Platform",
      "Schneider: Linux/Windows application migration strategy with modernisation assessment",
      "Built internal AWS training: FinOps, CI/CD Pipelines Automation, Application Monitoring",
    ],
  },
  {
    period: "2008 – Feb 2022 · 14 years",
    company: "PTC",
    role: "Senior Windchill PLM Architect",
    location: "Toulouse (Hybrid)",
    tags: ["PLM", "A&D", "Automotive", "Retail", "Luxury", "Shipbuilding"],
    highlights: [
      "PLM Technical Architect for Thales, Airbus, Safran, Volvo, Ferrari, SNCF, Richemont, Hasbro, MBDA, Navantia and 20+ others",
      "Subject-matter expert: CAD Integration — member of CATIA BOCA team with PTC R&D",
      "'Customer First' award on Thales delivery: quality, precision, reactivity & dev team management",
      "Architecture design (on-premise & cloud), LDAP/SSO, Windchill cluster, replica environments",
      "Development lead managing teams of 1–5 developers · Training sessions in Australia for Thales",
    ],
  },
  {
    period: "2005 – 2008 · 3 years",
    company: "IGE+XAO",
    role: "Electrical PLM Architect",
    location: "Toulouse",
    tags: ["Electrical CAD", "CATIA V5"],
    highlights: [
      "Led technical design of new CATIA V5 electrical application workbench — routing, cabling, wiring, connectors management",
      "R&D partnership with Dassault Systèmes to build new electrical framework within CATIA V5",
      "Architect for electrical schematic and Electrical Harness Design applications",
    ],
  },
  {
    period: "2000 – 2005 · 5 years",
    company: "Dassault Systèmes",
    role: "Solution Architect · Dassault Data Services",
    location: "Suresnes",
    tags: ["PLM", "A&D", "Automotive"],
    highlights: [
      "SmarTeam customisation as document management tool for Dassault Aviation Design Office — Mirage 2000-9 & Rafale programs",
      "CAA CATIA V5 & CAA ENOVIA RADE instructor (C++ customer development tools)",
      "Technical lead for BMW, Volvo, Bertrand, Homag — CAA CATIA V5 (CAD) & CAA ENOVIA LCA (PDM)",
    ],
  },
  {
    period: "1998 – 2000 · 2 years",
    company: "Aura Group",
    role: "Development Engineer",
    location: "Greater Paris",
    tags: ["Software Development"],
    highlights: ["Software development engineer in Greater Paris Metropolitan Region"],
  },
  {
    period: "1996 – 1998 · 2 years",
    company: "Heinrich Nickel",
    role: "HVAC System Engineer",
    location: "Berlin",
    tags: ["Engineering"],
    highlights: ["HVAC systems engineering in Berlin Metropolitan Area"],
  },
];

const Timeline = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="timeline-section" id="career">
      <div className="timeline-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Professional</span>
        <span>Career History</span>
      </div>

      <div className="timeline-wrapper">
        {timelineData.map((entry, index) => (
          <motion.div
            key={index}
            className="timeline-entry"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="timeline-dot"></div>

            <div
              className="timeline-card"
              style={{ background: darkMode ? "#1a1a1a" : "white" }}
            >
              <div className="timeline-meta">
                <span className="timeline-period">{entry.period}</span>
                <span className="timeline-location">📍 {entry.location}</span>
              </div>

              <span
                className="timeline-company"
                style={{ color: darkMode ? "white" : "" }}
              >
                {entry.company}
              </span>
              <span className="timeline-role">{entry.role}</span>

              <div className="timeline-tags">
                {entry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="timeline-tag"
                    style={{
                      background: darkMode ? "#2d2d2d" : "var(--blueCard)",
                      color: darkMode ? "#ccc" : "var(--black)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="timeline-highlights">
                {entry.highlights.map((h, i) => (
                  <li key={i} style={{ color: darkMode ? "#999" : "" }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
