import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    label: "PLM & Architecture",
    color: "#DDF8FE",
    skills: [
      "Windchill PDMLink",
      "MPMLink",
      "ProjectLink",
      "SmarTeam",
      "ENOVIA",
      "CAD Integration",
      "CATIA",
      "Creo Parametric",
      "Data Migration",
      "Solution Architecture",
      "Codebeamer",
      "ALM",
    ],
  },
  {
    label: "Cloud & IoT",
    color: "#fff0d4",
    skills: [
      "AWS EC2 & S3",
      "AWS CLI",
      "ThingWorx",
      "PTC Vuforia Studio",
      "Azure IoT Hub",
      "IIoT",
      "Cloud Hosting",
      "CI/CD",
      "FinOps",
    ],
  },
  {
    label: "Development",
    color: "#f0e6ff",
    skills: [
      "Java JEE",
      "JavaScript ✓",
      "React",
      "Node.js",
      "REST APIs ✓",
      "Git ✓",
      "Docker",
      "Oracle",
      "SQL",
      "MongoDB",
      "HTML / CSS",
      "OAuth / SSL",
    ],
  },
  {
    label: "Industry Knowledge",
    color: "#e6f4ea",
    skills: [
      "Requirements Analysis",
      "Presales & SOW",
      "Systems Engineering",
      "Manufacturing Engineering",
      "Process Engineering",
      "Change Management",
      "Aerospace & Defense",
      "Harness Design",
      "Agile / Scrum",
    ],
  },
  {
    label: "AI Development (Learning)",
    color: "#fde8d8",
    skills: ["Claude Code", "Kiro", "Cidex", "Prompt Engineering", "AI-augmented workflows"],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Feb 2022",
    accent: "#FF9900",
  },
  {
    name: "ThingWorx Professional Certification",
    issuer: "PTC University",
    date: "Aug 2021",
    accent: "#0066CC",
  },
  {
    name: "Windchill Administration, Customization & Advanced Configuration",
    issuer: "PTC",
    date: "Ongoing",
    accent: "#00A9E0",
  },
  {
    name: "Scrum Development with Jira & JIRA Agile",
    issuer: "Pluralsight",
    date: "Jun 2022",
    accent: "#F15B2A",
  },
];

const assessed = ["JavaScript", "Java", "REST APIs", "Git"];

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills-section" id="skills">
      {/* heading */}
      <div className="skills-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Technical</span>
        <span>Skills &amp; Certifications</span>
      </div>

      <div className="skills-body">
        {/* left — skill groups */}
        <div className="skills-left">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <span
                className="skill-group-label"
                style={{ color: darkMode ? "white" : "" }}
              >
                {group.label}
              </span>
              <div className="skill-pills">
                {group.skills.map((s, si) => (
                  <span
                    key={si}
                    className="skill-pill"
                    style={{
                      background: darkMode ? "#2a2a2a" : group.color,
                      color: darkMode ? "#ddd" : "var(--black)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* LinkedIn assessed */}
          <div className="assessed-row">
            <span
              className="assessed-label"
              style={{ color: darkMode ? "#aaa" : "" }}
            >
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

        {/* right — certifications */}
        <div className="skills-right">
          <span
            className="certs-title"
            style={{ color: darkMode ? "white" : "" }}
          >
            Certifications
          </span>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: darkMode ? "#1e1e1e" : "white" }}
            >
              <div
                className="cert-accent"
                style={{ background: cert.accent }}
              ></div>
              <div className="cert-body">
                <span
                  className="cert-name"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  {cert.name}
                </span>
                <span className="cert-meta">
                  {cert.issuer} · {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
          <div
            className="blur skills-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
