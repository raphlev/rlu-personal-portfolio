import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Portfolio.css";

const featured = [
  {
    icon: "🏭",
    client: "Fayat Group",
    context: "TTPSC · 2025 – Present",
    type: "Windchill Multi-Site Architecture",
    achievement:
      "Led full solution architecture across 10 industrial sites and 2 distinct Windchill instances — covering Multi-CAD integration, BOM Engineering, Variant Design, ERP integrations and data migrations over a 2-year delivery roadmap.",
    tags: ["Windchill", "BOM", "Multi-CAD", "ERP Integration", "Migration"],
  },
  {
    icon: "✈️",
    client: "Airbus",
    context: "Capgemini · 2022",
    type: "AWS Cloud Architecture",
    achievement:
      "Defined to-be AWS cloud architecture for the PASS SSI Bundle migration — addressing enterprise-scale security hardening, identity management and multi-region disaster recovery.",
    tags: ["AWS", "Cloud Migration", "Security", "Disaster Recovery"],
  },
  {
    icon: "🛡️",
    client: "Thales",
    context: "PTC · 2013 – 2022",
    type: "PLM Platform Delivery",
    achievement:
      "Multi-year Windchill architecture and delivery for Thales — recognised with PTC's 'Customer First' award for quality, precision and responsiveness. Included CAD integration, LSA and S1000D solution design.",
    tags: ["Windchill", "CAD Integration", "LSA", "S1000D", "A&D"],
  },
  {
    icon: "🚀",
    client: "Dassault Aviation",
    context: "Dassault Systèmes · 2000 – 2005",
    type: "PLM Document Management",
    achievement:
      "Customised SmarTeam as the enterprise document management system for Dassault Aviation's Design Office — used on the Mirage 2000-9 and Rafale fighter aircraft programs.",
    tags: ["SmarTeam", "VBA", "Oracle", "Rafale", "Aerospace"],
  },
  {
    icon: "⭐",
    client: "PTC · Key Responsibilities & Achievements",
    context: "2008 – 2022 · 14 years",
    type: "Senior Windchill PLM Architect — Cross-cutting highlights",
    wide: true,
    bullets: [
      "Subject-matter expert CAD Integration (member of CATIA BOCA team with R&D), Architecture Design, PLM Solution Design, LSA (S3000L)",
      "Development Technical Lead managing teams of 1 to 5 developers on average",
      "Customer-facing workshops for requirement analysis and solution design review",
      "Trusted advisor for Kingfisher for Windchill interface (REST) with SAP",
      "Awarded Thales delivery with 'Customer First' mention: quality, precision, reactivity on bug fixing, dev team management",
      "Conducted training sessions for customers in Australia",
    ],
    tags: ["Windchill", "CAD Integration", "LSA S3000L", "SAP / REST", "Team Lead", "A&D"],
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Key</span>
      <span>Engagements</span>

      <div className="featured-grid">
        {featured.map((item, index) => (
          <motion.div
            key={index}
            className={`featured-card${item.wide ? " featured-card--wide" : ""}`}
            style={{ background: darkMode ? "#1a1a1a" : "white" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="featured-icon">{item.icon}</div>
            <div className="featured-header">
              <span
                className="featured-client"
                style={{ color: darkMode ? "var(--orange)" : "" }}
              >
                {item.client}
              </span>
              <span className="featured-context">{item.context}</span>
            </div>
            <span
              className="featured-type"
              style={{ color: darkMode ? "white" : "" }}
            >
              {item.type}
            </span>

            {item.achievement && (
              <p className="featured-achievement">{item.achievement}</p>
            )}

            {item.bullets && (
              <ul className="featured-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i} style={{ color: darkMode ? "#ccc" : "" }}>{b}</li>
                ))}
              </ul>
            )}

            <div className="featured-tags">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="featured-tag"
                  style={{
                    background: darkMode ? "#2d2d2d" : "var(--blueCard)",
                    color: darkMode ? "#ccc" : "var(--black)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
