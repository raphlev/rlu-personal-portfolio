import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Skills.css";
import { usePortfolio } from "../../hooks/usePortfolio";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const section = portfolio?.skills ?? {};
  const { kv = {}, subsections = {}, json: certifications = [] } = section;

  // Skill groups come from ### subsections; bullets are the individual skills
  const skillGroups = Object.entries(subsections).map(([label, sub]) => ({
    label,
    accent:  sub.kv?.accent  ?? '#EEE',
    note:    sub.kv?.note,
    wide:    sub.kv?.wide === 'true',
    skills:  sub.bullets,
  }));

  // LinkedIn assessments are a comma-separated kv field
  const assessed = (kv.assessments ?? '').split(', ').filter(Boolean);

  return (
    <div className="skills-section" id="skills">
      <div className="skills-heading">
        <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Skills &'}</span>
        <span>{kv.heading2 ?? 'Certifications'}</span>
      </div>

      {/* skill category grid */}
      <div className="skill-grid">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className={`skill-category${group.wide ? " skill-category--wide" : ""}`}
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

      {/* certifications — from JSON block */}
      {certifications.length > 0 && (
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
      )}

      {/* LinkedIn assessments */}
      {assessed.length > 0 && (
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
      )}
    </div>
  );
};

export default Skills;
