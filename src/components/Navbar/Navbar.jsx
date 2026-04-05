import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Raphael Leveque</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy smooth>Home</Link>
            </li>
            <li>
              <Link to="services" spy smooth>Expertise</Link>
            </li>
            <li>
              <Link to="about" spy smooth>About</Link>
            </li>
            <li>
              <Link to="portfolio" spy smooth>Engagements</Link>
            </li>
            <li>
              <Link to="career" spy smooth>Career</Link>
            </li>
            <li>
              <Link to="skills" spy smooth>Skills</Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy smooth>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
