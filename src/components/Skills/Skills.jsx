import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    label: "PLM & Architecture",
    accent: "#DDF8FE",
    accentDark: "#0e3a4a",
    skills: [
      "Windchill PDMLink", "MPMLink", "ProjectLink",
      "SmarTeam", "ENOVIA", "CAD Integration",
      "CATIA", "Creo Parametric", "Codebeamer",
      "Data Migration", "Solution Architecture", "ALM / PDM",
    ],
  },
  {
    label: "Cloud & IoT",
    accent: "#fff3d4",
    accentDark: "#3d2d00",
    skills: [
      "AWS EC2 & S3", "AWS CLI", "ThingWorx IIoT",
      "PTC Vuforia Studio", "Azure IoT Hub",
      "Cloud Hosting", "CI/CD Pipelines", "FinOps",
    ],
  },
  {
    label: "Development",
    accent: "#f0e6ff",
    accentDark: "#1e0038",
    skills: [
      "Java JEE", "JavaScript ✓", "React", "Node.js",
      "REST APIs ✓", "Git ✓", "Docker", "SVN",
      "Oracle", "SQL", "MongoDB", "HTML / CSS",
      "OAuth / SSL", "Bash / KSH",
    ],
  },
  {
    label: "Industry Knowledge",
    accent: "#e6f4ea",
    accentDark: "#0a2e11",
    skills: [
      "Requirements Analysis", "Presales & SOW",
      "Systems Engineering", "Manufacturing Engineering",
      "Process Engineering", "Change Management",
      "Aerospace & Defense", "Harness Design",
      "Agile / Scrum", "Team Leadership",
    ],
  },
  {
    label: "AI Development",
    accent: "#fde8d8",
    accentDark: "#3d1200",
    note: "Actively upskilling",
    skills: [
      "Claude Code", "Kiro", "Codex",
      "Prompt Engineering", "AI-augmented workflows",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Feb 2022",
    accent: "#FF9900",
    icon: "☁️",
  },
  {
    name: "ThingWorx Professional Certification",
    issuer: "PTC University",
    date: "Aug 2021",
    accent: "#0066CC",
    icon: "🔗",
  },
  {
    name: "Windchill Administration, Customization & Advanced Configuration",
    issuer: "PTC",
    date: "Ongoing",
    accent: "#00A9E0",
    icon: "⚙️",
  },
  {
    name: "Scrum Development with Jira & JIRA Agile",
    issuer: "Pluralsight",
    date: "Jun 2022",
    accent: "#F15B2A",
    icon: "🔄",
  },
];

const assessed = ["JavaScript", "Java", "REST APIs", "Git"];

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills-section" id="skills">
      <div className="skills-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Skills &amp;</span>
        <span>Certifications</span>
      </div>

      {/* skill category grid */}
      <div className="skill-grid">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className={`skill-category${group.label === "AI Development" ? " skill-category--wide" : ""}`}
            style={{
              background: darkMode ? "#1a1a1a" : "white",
              borderTopColor: group.accent === "#fde8d8" ? "var(--orange)" : group.accent,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.07 }}
          >
            <div className="skill-category-header">
              <span
                className="skill-category-title"
                style={{ color: darkMode ? "#eee" : "var(--black)" }}
              >
                {group.label}
              </span>
              {group.note && (
                <span className="skill-note">{group.note}</span>
              )}
            </div>
            <div className="skill-pills">
              {group.skills.map((s, si) => (
                <span
                  key={si}
                  className="skill-pill"
                  style={{
                    background: darkMode ? "#2d2d2d" : group.accent,
                    color: darkMode ? "#ccc" : "var(--black)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* certifications */}
      <div className="certs-section">
        <span
          className="certs-title"
          style={{ color: darkMode ? "white" : "" }}
        >
          Certifications
        </span>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              style={{ background: darkMode ? "#1a1a1a" : "white" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-body">
                <span
                  className="cert-name"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  {cert.name}
                </span>
                <span className="cert-meta">
                  <span style={{ color: cert.accent, fontWeight: 600 }}>
                    {cert.issuer}
                  </span>{" "}
                  · {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LinkedIn assessments */}
      <div className="assessed-section">
        <span style={{ color: darkMode ? "#aaa" : "var(--gray)" }}>
          LinkedIn Skill Assessments Passed:
        </span>
        <div className="skill-pills">
          {assessed.map((a, i) => (
            <span key={i} className="skill-pill assessed-pill">
              ✓ {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
