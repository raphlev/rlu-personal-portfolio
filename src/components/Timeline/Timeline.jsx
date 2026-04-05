import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Timeline.css";

const timelineData = [
  {
    period: "Sep 2022 – Present · 3+ years",
    company: "Transition Technologies PSC France",
    role: "Principal Architect PLM Product Engineering",
    location: "Remote",
    tags: ["Windchill", "ThingWorx", "IoT", "Cloud", "Presales"],
    subsections: [
      {
        title: "PLM Windchill Principal Architect – Fayat (Construction & Industrial Equipment) | Mar 2025 – Present",
        items: [
          "Led framing activities and authored 2 Technical Statements of Work (SOW) covering Multi-CAD Integration, BOM Engineering, Variant Design, Manufacturing, ERP integrations and Migrations — encompassing 10 sites across 2 distinct Windchill target instances",
          "Defined and documented full solution architecture for both Windchill environments",
          "Managed Proof of Concept, product demonstrations, and architecture design review activities",
          "Initiated Migration and New PDM Configuration Sprints over a 2-year roadmap for each of the 2 Windchill instances",
          "Managed and coordinated technical delivery teams",
          "Facilitated workshops and led project technical reviews with client stakeholders",
        ],
      },
      {
        title: "PLM Business Analyst – Safran (Aerospace & Defense) | Oct 2024 – Mar 2025",
        items: [
          "Managed framing activities for Service Lifecycle Management (SLM) projects adhering to ATA/S1000D standards, ensuring readiness for Definition and Implementation phases",
        ],
      },
      {
        title: "Windchill & Data Migration Technical Architect – Safran (A&D) | Oct 2023 – Jul 2024",
        items: [
          "Conduct migration project transitioning from SAP and Agile databases to Windchill",
          "Defined data mapping strategies, configured Windchill systems, and coordinated Extract, Transform, Load (ETL) specialists",
        ],
      },
      {
        title: "ThingWorx Architect – Schneider, Famat (A&D) | 2022 – 2023",
        items: [
          "Conducted demonstrations and developed presales materials showcasing ThingWorx IoT solutions",
          "Developed simplified PLM interfaces using Mashup and OData technologies",
          "Improved stability, security, scalability, and maintainability of IoT dashboards",
        ],
      },
      {
        title: "Presales — A&D, Energy, Electrical, Transport",
        items: [
          "Analyze client requirements for ThingWorx IoT, PLM Windchill, and cloud hosting solutions",
          "Develop technical qualifications, Rough Order of Magnitude (ROM), and Statement of Work (SOW) proposals",
          "Define and document best practices for Presales and Delivery teams",
          "Perform Architecture Design including Windchill architecture (monolithic, cluster, cloud-hosting, replica), LDAP/SSO, and IoT solutions",
        ],
      },
    ],
  },
  {
    period: "Feb 2022 – Sep 2022 · 8 months",
    company: "Capgemini",
    role: "Managed Solution Architect Cloud AWS",
    location: "Toulouse, Occitanie, France",
    tags: ["AWS", "Cloud Migration", "Presales", "Architecture"],
    highlights: [
      "Certification: AWS Solution Architect Associate 2022",
      "Schneider: pre-sales support — migrating several applications (Linux/Windows) to AWS with modernization (migration strategy, workload & assessment)",
      "Safran: pre-sales support — migrating Data Center to AWS with Analytics Platform (migration path, workload & cost)",
      "Internal: build training materials related to AWS cloud services for Application Monitoring, FinOps and CI/CD Pipelines Automation",
      "Airbus: define to-be AWS cloud architecture for the PASS SSI Bundle cloud migration addressing security and disaster recovery",
    ],
  },
  {
    period: "2008 – Feb 2022 · 14 years 2 months",
    company: "PTC",
    role: "Senior Windchill PLM Architect",
    location: "Greater Toulouse Metropolitan Area · Hybrid",
    tags: ["Windchill", "PLM", "A&D", "Automotive", "Retail", "Luxury", "Shipbuilding"],
    subsections: [
      {
        title: "Roles",
        items: [
          "2013 to 2022: PLM Technical Architect",
          "2008 to 2012: PLM Application Architect",
        ],
      },
      {
        title: "Main Deliveries — based on PLM PTC Windchill products",
        items: [
          "Requirements Analysis, Business Administration, Configuration or Java Customization, Functional Specifications, Technical Specifications, Installation",
          "Architecture design (On-premise / Cloud)",
          "Technical Lead for various projects (PLM, CAD integration, LSA for A&D)",
          "Training, mentoring to customers to leverage best practices",
        ],
      },
      {
        title: "Main Customers",
        text: "Thales, Volvo, Richemont, Kingfisher, Thales Australia, Airbus, Velux, Hitachi, Mars, SNCF, Ferrari, Hasbro, Snecma, Turbomeca, MBDA, Navantia, Saft, Aerolia, Araymond, Beneteau, Eurocopter, ZF, BASF, etc.",
      },
      {
        title: "Key Responsibilities & Achievements",
        items: [
          "Subject-matter expert CAD Integration (member of CATIA BOCA team with R&D), Architecture Design, PLM Solution Design, LSA (S3000L)",
          "Development Technical Lead managing teams of 1 to 5 developers on average",
          "Customer-facing workshops for requirement analysis and solution design review",
          "Trusted advisor for Kingfisher for SAP Integration",
          "Awarded Thales delivery with 'Customer First' mention: quality, precision, reactivity on bug fixing, dev team management",
          "Conducted training sessions for customers in Australia",
        ],
      },
      {
        title: "Common Feedbacks",
        text: "Documentation and verbal communication · Attention to detail and reliability · Extra merits · Work efficiency · Team player",
      },
      {
        title: "Tech Stack",
        items: [
          "PTC: Windchill PDMLink, MPMLink, ProjectLink, CAD Integration",
          "Development: Java JEE, Eclipse, Git, SVN, Jira, Docker, bash, ksh",
          "Database: Oracle, SQLServer, SQL, MongoDB, NoSQL",
          "Web: Javascript, HTML, CSS, node.js, React, SSL, Security, OAuth",
          "Cloud: AWS EC2 & S3 & CLI, Azure IoT Hub",
        ],
      },
    ],
  },
  {
    period: "2005 – 2008 · 3 years",
    company: "IGE+XAO",
    role: "Electrical PLM Architect",
    location: "Greater Toulouse Metropolitan Area",
    tags: ["Electrical CAD", "CATIA V5", "Harness Design"],
    highlights: [
      "Architect for electrical schematic and Electrical Harness Design applications",
      "Led the technical design of a new electrical application workbench for CATIA V5 including routing process, cabling, wiring, connectors management",
      "Partnership with Dassault-Systèmes R&D to build new electrical framework within CATIA V5",
    ],
  },
  {
    period: "2000 – 2005 · 5 years",
    company: "Dassault Systèmes",
    role: "Solution Architect at Dassault-Data-Services",
    location: "Suresnes",
    tags: ["CATIA V5", "SmarTeam", "ENOVIA", "A&D", "Automotive"],
    highlights: [
      "Solution Architect for Dassault Aviation & Dassault Systèmes customers: CATIA V5, SmarTeam, ENOVIA LCA V5, CAA customer development",
      "Technical leader for customization of SmarTeam as a document management tool in Dassault Aviation Design Office — used for Mirage 2000-9 and Rafale programs (VBA scripts, administration & installation handbook — Oracle-based)",
      "Instructor for CAA CATIA V5 and CAA ENOVIA V5 RADE tools (C++ customer development tools)",
      "Technical leader for development customization projects: Bertrand, Homag, BMW, Volvo — CAA CATIA V5 (CAD) and CAA ENOVIA LCA (PDM). Managed a small development team for Bertrand project",
    ],
  },
  {
    period: "1998 – 2000 · 2 years",
    company: "Aura Group",
    role: "Development Engineer",
    location: "Greater Paris Metropolitan Region",
    tags: ["Software Development"],
    highlights: ["Development Engineer in Greater Paris Metropolitan Region"],
  },
  {
    period: "1996 – 1998 · 2 years",
    company: "Heinrich Nickel",
    role: "HVAC System Engineer",
    location: "Berlin Metropolitan Area",
    tags: ["Engineering", "HVAC"],
    highlights: ["HVAC System Engineer in Berlin Metropolitan Area"],
  },
];

const Timeline = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const cardBg = darkMode ? "#1e1e1e" : "white";
  const subBg  = darkMode ? "#2a2a2a" : "#f8f9fa";
  const textColor = darkMode ? "#d0d0d0" : "#444";
  const subTitleColor = darkMode ? "#fff" : "var(--black)";

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

            <div className="timeline-card" style={{ background: cardBg }}>
              {/* header */}
              <div className="timeline-meta">
                <span className="timeline-period">{entry.period}</span>
                <span className="timeline-location" style={{ color: darkMode ? "#888" : "" }}>
                  📍 {entry.location}
                </span>
              </div>

              <span className="timeline-company" style={{ color: darkMode ? "white" : "" }}>
                {entry.company}
              </span>
              <span className="timeline-role" style={{ color: darkMode ? "#bbb" : "" }}>
                {entry.role}
              </span>

              <div className="timeline-tags">
                {entry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="timeline-tag"
                    style={{
                      background: darkMode ? "#333" : "var(--blueCard)",
                      color: darkMode ? "#ccc" : "var(--black)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* simple highlights */}
              {entry.highlights && (
                <ul className="timeline-highlights">
                  {entry.highlights.map((h, i) => (
                    <li key={i} style={{ color: textColor }}>{h}</li>
                  ))}
                </ul>
              )}

              {/* structured subsections */}
              {entry.subsections && entry.subsections.map((sub, si) => (
                <div
                  key={si}
                  className="timeline-subsection"
                  style={{ background: subBg }}
                >
                  <span className="timeline-sub-title" style={{ color: subTitleColor }}>
                    {sub.title}
                  </span>
                  {sub.text && (
                    <p className="timeline-sub-text" style={{ color: textColor }}>
                      {sub.text}
                    </p>
                  )}
                  {sub.items && (
                    <ul className="timeline-highlights">
                      {sub.items.map((item, ii) => (
                        <li key={ii} style={{ color: textColor }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
