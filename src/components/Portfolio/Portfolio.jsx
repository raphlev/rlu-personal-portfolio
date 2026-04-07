import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Portfolio.css";
import { usePortfolio } from "../../hooks/usePortfolio";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const port = portfolio?.portfolio ?? {};
  const { kv = {}, subsections = {} } = port;

  // Each ### subsection name is "ICON client name"; kv holds context/type/achievement/tags/wide
  const featured = Object.entries(subsections).map(([fullName, sub]) => {
    // Split icon (first non-space token) from client name
    const spaceIdx = fullName.indexOf(' ');
    const icon   = spaceIdx === -1 ? fullName : fullName.slice(0, spaceIdx);
    const client = spaceIdx === -1 ? fullName : fullName.slice(spaceIdx + 1);
    return {
      icon,
      client,
      context:     sub.kv?.context ?? '',
      type:        sub.kv?.type ?? '',
      achievement: sub.kv?.achievement,
      wide:        sub.kv?.wide === 'true',
      bullets:     sub.bullets,
      tags:        sub.kv?.tags ? sub.kv.tags.split(', ') : [],
    };
  });

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Key'}</span>
      <span>{kv.heading2 ?? 'Engagements'}</span>

      <div className="featured-grid">
        {featured.map((item, index) => (
          <motion.div
            key={index}
            className={`featured-card${item.wide ? " featured-card--wide" : ""}`}
            style={{ background: darkMode ? "#1a1a1a" : "white" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="featured-icon">{item.icon}</div>
            <div className="featured-header">
              <span
                className="featured-client"
                style={{ color: darkMode ? "var(--orange)" : "" }}
              >
                {item.client}
              </span>
              <span className="featured-context">{item.context}</span>
            </div>
            <span
              className="featured-type"
              style={{ color: darkMode ? "white" : "" }}
            >
              {item.type}
            </span>

            {item.achievement && (
              <p className="featured-achievement">{item.achievement}</p>
            )}

            {item.bullets && item.bullets.length > 0 && (
              <ul className="featured-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i} style={{ color: darkMode ? "#ccc" : "" }}>{b}</li>
                ))}
              </ul>
            )}

            <div className="featured-tags">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="featured-tag"
                  style={{
                    background: darkMode ? "#2d2d2d" : "var(--blueCard)",
                    color: darkMode ? "#ccc" : "var(--black)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
