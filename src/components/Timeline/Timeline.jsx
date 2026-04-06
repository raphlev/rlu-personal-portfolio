import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Timeline.css";
import { usePortfolio } from "../../hooks/usePortfolio";

const Timeline = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const section = portfolio?.timeline ?? {};
  // Headings come from markdown kv; career entries come from the JSON block
  const kv = section.kv ?? {};
  const timelineData = section.json ?? [];

  const cardBg = darkMode ? "#1e1e1e" : "white";
  const subBg  = darkMode ? "#2a2a2a" : "#f8f9fa";
  const textColor = darkMode ? "#d0d0d0" : "#444";
  const subTitleColor = darkMode ? "#fff" : "var(--black)";

  return (
    <div className="timeline-section" id="career">
      <div className="timeline-heading">
        <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Professional'}</span>
        <span>{kv.heading2 ?? 'Career History'}</span>
      </div>

      <div className="timeline-wrapper">
        {timelineData.map((entry, index) => (
          <motion.div
            key={index}
            className="timeline-entry"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card" style={{ background: cardBg }}>
              {/* header */}
              <div className="timeline-meta">
                <span className="timeline-period">{entry.period}</span>
                <span className="timeline-location" style={{ color: darkMode ? "#888" : "" }}>
                  📍 {entry.location}
                </span>
              </div>

              <span className="timeline-company" style={{ color: darkMode ? "white" : "" }}>
                {entry.company}
              </span>
              <span className="timeline-role" style={{ color: darkMode ? "#bbb" : "" }}>
                {entry.role}
              </span>

              <div className="timeline-tags">
                {entry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="timeline-tag"
                    style={{
                      background: darkMode ? "#333" : "var(--blueCard)",
                      color: darkMode ? "#ccc" : "var(--black)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* simple highlights */}
              {entry.highlights && (
                <ul className="timeline-highlights">
                  {entry.highlights.map((h, i) => (
                    <li key={i} style={{ color: textColor }}>{h}</li>
                  ))}
                </ul>
              )}

              {/* structured subsections */}
              {entry.subsections && entry.subsections.map((sub, si) => (
                <div
                  key={si}
                  className="timeline-subsection"
                  style={{ background: subBg }}
                >
                  <span className="timeline-sub-title" style={{ color: subTitleColor }}>
                    {sub.title}
                  </span>
                  {sub.text && (
                    <p className="timeline-sub-text" style={{ color: textColor }}>
                      {sub.text}
                    </p>
                  )}
                  {sub.items && (
                    <ul className="timeline-highlights">
                      {sub.items.map((item, ii) => (
                        <li key={ii} style={{ color: textColor }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
