import { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { usePortfolio } from "../../hooks/usePortfolio";

const EMOJI_MAP = { heart: HeartEmoji, glasses: Glasses, humble: Humble };

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  const portfolio = usePortfolio();
  const s = portfolio?.services;
  const kv = s?.kv ?? {};

  const heading1   = kv.heading1   ?? 'My Core';
  const heading2   = kv.heading2   ?? 'Expertise';
  const description = kv.description ?? '';
  const cvButton   = kv.cvButton   ?? 'Download CV';

  // Cards are ### subsections in order of appearance
  const cards = Object.entries(s?.subsections ?? {}).map(([heading, sub]) => ({
    heading,
    emoji: EMOJI_MAP[sub.kv?.emojiKey] ?? HeartEmoji,
    detail: sub.kv?.detail ?? '',
    color: sub.kv?.color,
  }));

  // Animation positions matching original layout (3 fixed positions)
  const positions = [
    { initial: { left: "25rem" },            whileInView: { left: "14rem" } },
    { initial: { left: "-11rem", top: "12rem" }, whileInView: { left: "-4rem" } },
    { initial: { top: "19rem", left: "25rem" }, whileInView: { left: "12rem" } },
  ];

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>{heading1}</span>
        <span>{heading2}</span>
        <span>{description}</span>
        <a href={Resume} download>
          <button className="button s-button">{cvButton}</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={positions[i]?.initial ?? { left: "0" }}
            whileInView={positions[i]?.whileInView ?? { left: "0" }}
            transition={transition}
          >
            <Card
              emoji={card.emoji}
              heading={card.heading}
              detail={card.detail}
              color={card.color}
            />
          </motion.div>
        ))}
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
