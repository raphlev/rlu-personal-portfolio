import { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const industries = [
  { label: "Aerospace & Defense", clients: "Airbus · Thales · Dassault · MBDA · Snecma · Turbomeca" },
  { label: "Automotive", clients: "Volvo · Ferrari · ZF · Araymond" },
  { label: "Energy & Industrial", clients: "Schneider · Saft · BASF · Fayat Group" },
  { label: "Luxury & Retail", clients: "Richemont · Kingfisher · Hasbro · Mars" },
  { label: "Transport & Marine", clients: "SNCF · Beneteau · Navantia · Hitachi" },
  { label: "High Tech", clients: "Safran · Eurocopter · Aerolia · Velux" },
];

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Trusted by Global</span>
          <span>Industry Leaders</span>
          <span>
            Delivering PLM excellence for Airbus, Thales, Safran, Volvo,
            Richemont, Ferrari, SNCF, Schneider, MBDA and many more —
            across Aerospace &amp; Defense, Automotive, Retail, Energy,
            Shipbuilding and beyond.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Work with Me</button>
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
