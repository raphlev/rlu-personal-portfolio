import { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { usePortfolio } from "../../hooks/usePortfolio";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const kv = portfolio?.intro?.kv ?? {};

  const greeting    = kv.greeting    ?? 'Hello, I Am';
  const name        = kv.name        ?? 'Raphael Leveque';
  const title       = kv.title       ?? '';
  const badge       = kv.badge       ?? 'Currently upskilling';
  const badgeDetail = kv.badgeDetail ?? '';
  const ctaLabel    = kv.ctaLabel    ?? 'Get in Touch';

  const [b1text1, b1text2] = (kv.floatingBadge1 ?? 'Web · Developer').split(' · ');
  const [b2text1, b2text2] = (kv.floatingBadge2 ?? 'Best Design · Award').split(' · ');

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>{greeting}</span>
          <span>{name}</span>
          <span>{title}</span>
        </div>
        <div className="i-current-focus" style={{ color: darkMode ? "white" : "var(--black)" }}>
          <span className="i-focus-badge">{badge}</span>
          &nbsp;{badgeDetail}
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">{ctaLabel}</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="GitHub" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" aria-hidden="true" />
        <img src={Vector2} alt="" aria-hidden="true" />
        <img src={boy} alt={name} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          aria-hidden="true"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1={b1text1} text2={b1text2} />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1={b2text1} text2={b2text2} />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
