import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./About.css";

const education = [
  {
    years: "1991 – 1995",
    school: "ESSTIN Nancy",
    degree: "Engineer · Fluids Mechanics & IT",
    flag: "🇫🇷",
  },
  {
    years: "1993",
    school: "University of Strathclyde",
    degree: "Mechanical Engineering · Glasgow, UK",
    flag: "🇬🇧",
  },
];

const languages = [
  { flag: "🇫🇷", label: "French", level: "Native" },
  { flag: "🇬🇧", label: "English", level: "Professional" },
  { flag: "🇩🇪", label: "German", level: "" },
];

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="about">
      {/* left */}
      <div className="about-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Who I Am</span>
          <span>About Me</span>
        </div>

        <p className="about-bio" style={{ color: darkMode ? "#aaa" : "" }}>
          25+ years architecting PLM solutions across Aerospace &amp; Defense,
          Automotive, Retail, Luxury and Shipbuilding. My journey spans Dassault
          Systèmes (SmarTeam, ENOVIA, CATIA), 14 years as a Senior Windchill
          Architect at PTC, a cloud architecture stint at Capgemini (AWS
          Certified), and my current role leading Windchill architecture and
          IIoT presales at Transition Technologies PSC.
        </p>
        <p className="about-bio" style={{ color: darkMode ? "#aaa" : "" }}>
          I bridge deep PLM expertise with modern cloud and IoT practices —
          and am now actively investing in AI-driven development with Claude
          Code, Kiro and Codex, convinced that AI tooling will redefine how
          architects design, document and deliver solutions.
        </p>

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
