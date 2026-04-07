import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { usePortfolio } from "../../hooks/usePortfolio";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  // Each ### subsection name is the counter value; kv holds label1/label2
  const stats = Object.entries(portfolio?.experience?.subsections ?? {}).map(
    ([value, sub]) => ({ value, label1: sub.kv?.label1 ?? '', label2: sub.kv?.label2 ?? '' })
  );

  return (
    <div className="experience" id="experience">
      {stats.map((s, i) => (
        <div key={i} className="achievement">
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>{s.value}</div>
          <span style={{ color: darkMode ? 'white' : '' }}>{s.label1} </span>
          <span>{s.label2}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
