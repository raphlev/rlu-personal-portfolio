import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { usePortfolio } from "../../hooks/usePortfolio";

const Footer = () => {
  const portfolio = usePortfolio();
  const linkedin = portfolio?.footer?.kv?.linkedin ?? 'linkedin.com/in/raphael-leveque-ba68789';

  return (
    <div className="footer">
      <img src={Wave} alt="" aria-hidden="true" style={{ width: "100%" }} />
      <div className="f-content">
        <span>{linkedin}</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
