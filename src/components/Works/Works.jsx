import { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { usePortfolio } from "../../hooks/usePortfolio";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const works = portfolio?.works ?? {};
  const { kv = {}, subsections = {} } = works;

  // Each ### subsection is an industry card; its first paragraph is the clients string
  const industries = Object.entries(subsections).map(([label, sub]) => ({
    label,
    clients: sub.paragraphs?.[0] ?? '',
  }));

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Trusted by Global'}</span>
          <span>{kv.heading2 ?? 'Industry Leaders'}</span>
          <span>{kv.description ?? ''}</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">{kv.ctaLabel ?? 'Work with Me'}</button>
          </Link>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      {/* right side — industries grid */}
      <div className="w-right w-industries">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            className="industry-card"
            style={{
              background: darkMode ? "#1e1e1e" : "white",
              borderTopColor: "var(--orange)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="industry-label" style={{ color: darkMode ? "white" : "" }}>
              {ind.label}
            </span>
            <span className="industry-clients" style={{ color: darkMode ? "#aaa" : "" }}>
              {ind.clients}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
