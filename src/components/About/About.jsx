import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./About.css";
import { usePortfolio } from "../../hooks/usePortfolio";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const about = portfolio?.about ?? {};
  const { kv = {}, paragraphs = [], subsections = {} } = about;

  // Parse language bullets: "🇫🇷 French — Native" or "🇩🇪 German"
  const languages = (subsections.languages?.bullets ?? []).map(b => {
    const parts = b.split(' — ');
    const [flag, ...labelParts] = parts[0].split(' ');
    return { flag, label: labelParts.join(' '), level: parts[1] ?? '' };
  });

  // Parse education bullets: "🇫🇷 | 1991–1995 | ESSTIN Nancy | degree"
  const education = (subsections.education?.bullets ?? []).map(b => {
    const [flag, years, school, degree] = b.split(' | ');
    return { flag: flag?.trim(), years: years?.trim(), school: school?.trim(), degree: degree?.trim() };
  });

  return (
    <div className="about" id="about">
      {/* left */}
      <div className="about-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Who I Am'}</span>
          <span>{kv.heading2 ?? 'About Me'}</span>
        </div>

        {paragraphs.map((p, i) => (
          <p key={i} className="about-bio" style={{ color: darkMode ? "#aaa" : "" }}>{p}</p>
        ))}

        <div className="about-langs">
          {languages.map((l, i) => (
            <span
              key={i}
              className="lang-badge"
              style={{ background: darkMode ? "#2a2a2a" : "" }}
            >
              {l.flag}&nbsp;{l.label}
              {l.level && (
                <em style={{ color: "var(--orange)" }}>&nbsp;— {l.level}</em>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* right — education */}
      <div className="about-right">
        <span
          className="about-edu-label"
          style={{ color: darkMode ? "white" : "" }}
        >
          Education
        </span>
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-card"
            style={{ background: darkMode ? "#1a1a1a" : "white" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="edu-flag">{e.flag}</span>
            <div className="edu-body">
              <span className="edu-year">{e.years}</span>
              <span
                className="edu-school"
                style={{ color: darkMode ? "white" : "" }}
              >
                {e.school}
              </span>
              <span className="edu-degree">{e.degree}</span>
            </div>
          </motion.div>
        ))}
        <div
          className="blur about-blur"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
