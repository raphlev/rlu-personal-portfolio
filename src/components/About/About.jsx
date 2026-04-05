import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const education = [
    {
      years: "1991 – 1995",
      school: "ESSTIN Nancy",
      degree: "Engineer · Fluids Mechanics & IT",
    },
    {
      years: "1993",
      school: "University of Strathclyde, Glasgow",
      degree: "Mechanical Engineering (Exchange)",
    },
  ];

  const languages = [
    { flag: "🇫🇷", label: "French", level: "Native" },
    { flag: "🇬🇧", label: "English", level: "Professional" },
    { flag: "🇩🇪", label: "German", level: "" },
  ];

  return (
    <div className="about" id="about">
      {/* left — bio */}
      <div className="about-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Who I Am</span>
          <span>About Me</span>
        </div>

        <p
          className="about-bio"
          style={{ color: darkMode ? "var(--gray)" : "" }}
        >
          With over 25 years in the PLM industry I have built expertise across
          Aerospace &amp; Defense, Automotive, Retail, Luxury and Shipbuilding.
          Starting at Dassault Systèmes with SmarTeam, ENOVIA and CATIA, I then
          spent 14 years as a Senior Windchill Architect at PTC — delivering for
          Airbus, Thales, Ferrari, Volvo and 20+ other global leaders.
        </p>
        <p
          className="about-bio"
          style={{ color: darkMode ? "var(--gray)" : "" }}
        >
          In 2022 I added cloud architecture at Capgemini (AWS Certified
          Solutions Architect) before returning to PLM at Transition Technologies
          PSC, where I currently lead Windchill architecture, data migration
          and IIoT presales.
        </p>
        <p
          className="about-bio"
          style={{ color: darkMode ? "var(--gray)" : "" }}
        >
          I am actively investing in AI-driven development — exploring Claude
          Code, Kiro and Cidex — convinced that AI tooling will redefine how
          PLM architects design, document and deliver solutions.
        </p>

        <div className="about-langs">
          {languages.map((l, i) => (
            <span
              key={i}
              className="lang-badge"
              style={{ background: darkMode ? "#2d2d2d" : "" }}
            >
              {l.flag}&nbsp;{l.label}
              {l.level && <em>&nbsp;— {l.level}</em>}
            </span>
          ))}
        </div>
      </div>

      {/* right — education */}
      <div className="about-right">
        <span
          className="about-edu-title"
          style={{ color: darkMode ? "white" : "" }}
        >
          Education
        </span>
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ background: darkMode ? "#1e1e1e" : "" }}
          >
            <span className="edu-year">{e.years}</span>
            <span
              className="edu-school"
              style={{ color: darkMode ? "white" : "" }}
            >
              {e.school}
            </span>
            <span className="edu-degree">{e.degree}</span>
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
