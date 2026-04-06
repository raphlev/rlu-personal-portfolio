import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { usePortfolio } from "../../hooks/usePortfolio";

const Navbar = () => {
  const portfolio = usePortfolio();
  const nav = portfolio?.navbar;
  const name = nav?.kv?.name ?? 'Raphael Leveque';
  const contactLabel = nav?.kv?.contactLabel ?? 'Contact';

  const links = (nav?.subsections?.links?.bullets ?? []).map(b => {
    const sep = b.indexOf(' → ');
    return sep === -1 ? { label: b, to: b } : { label: b.slice(0, sep), to: b.slice(sep + 3) };
  });

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">{name}</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {links.map((l, i) => (
              <li key={i}>
                <Link activeClass="active" to={l.to} spy smooth>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy smooth>
          <button className="button n-button">{contactLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
