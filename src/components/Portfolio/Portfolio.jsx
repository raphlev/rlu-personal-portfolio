import { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { themeContext } from "../../Context";

const careerData = [
  {
    period: "Sep 2022 – Present",
    company: "Transition Technologies PSC France",
    role: "Principal Architect PLM Product Engineering",
    tags: ["PLM", "IoT", "Cloud", "Presales"],
    highlights: [
      "Led Windchill solution architecture for Fayat — 2 SOWs covering 10 sites across 2 Windchill instances",
      "Technical architect for Safran: SAP & Agile PLM → Windchill data migration (ETL strategy, data mapping)",
      "Business analyst for Safran SLM project (ATA/S1000D standards)",
      "ThingWorx IoT presales & dashboard architecture for Schneider and Famat (A&D)",
      "Defined presales best practices: ROM, SOW, architecture design reviews",
    ],
  },
  {
    period: "Feb 2022 – Sep 2022",
    company: "Capgemini",
    role: "Managed Solution Architect Cloud AWS",
    tags: ["AWS", "Cloud Migration", "Presales"],
    highlights: [
      "AWS Certified Solutions Architect – Associate (Feb 2022)",
      "Airbus PASS SSI: defined to-be AWS cloud architecture for security & disaster recovery",
      "Safran: pre-sales for Data Center → AWS migration with Analytics Platform",
      "Schneider: Linux/Windows application migration strategy with modernisation assessment",
      "Built internal AWS training materials — FinOps, CI/CD Pipelines, App Monitoring",
    ],
  },
  {
    period: "2008 – Feb 2022 · 14 yrs",
    company: "PTC",
    role: "Senior Windchill PLM Architect",
    tags: ["PLM", "A&D", "Automotive", "Retail", "Luxury"],
    highlights: [
      "PLM Technical Architect for Thales, Airbus, Safran, Volvo, Ferrari, SNCF, Richemont, MBDA and 20+ more",
      "Subject-matter expert: CAD Integration — member of CATIA BOCA R&D team",
      "Development team lead (1–5 devs) · 'Customer First' award on Thales delivery",
      "Trusted advisor for Kingfisher SAP integration · Training in Australia for Thales",
      "Full stack: Windchill config/customisation, Java JEE, Oracle, architecture design (on-prem & cloud)",
    ],
  },
  {
    period: "2005 – 2008 · 3 yrs",
    company: "IGE+XAO",
    role: "Electrical PLM Architect",
    tags: ["Electrical CAD", "CATIA V5"],
    highlights: [
      "Led technical design of new CATIA V5 electrical workbench — routing, cabling, wiring, connectors",
      "Partnership with Dassault Systèmes R&D to build new electrical framework within CATIA V5",
      "Architect for electrical schematic and Electrical Harness Design applications",
    ],
  },
  {
    period: "2000 – 2005 · 5 yrs",
    company: "Dassault Systèmes",
    role: "Solution Architect · Dassault Data Services",
    tags: ["PLM", "A&D", "Automotive"],
    highlights: [
      "SmarTeam customisation for Dassault Aviation — Mirage 2000-9 & Rafale programs (VBA, Oracle, admin)",
      "CAA CATIA V5 & ENOVIA LCA instructor (C++ customer development tools)",
      "Tech lead for BMW, Volvo, Bertrand, Homag — CAA CATIA V5 (CAD) & CAA ENOVIA LCA (PDM)",
    ],
  },
  {
    period: "1998 – 2000 · 2 yrs",
    company: "Aura Group",
    role: "Development Engineer",
    tags: ["Software Development"],
    highlights: [
      "Software development engineer in Greater Paris Metropolitan Region",
    ],
  },
  {
    period: "1996 – 1998 · 2 yrs",
    company: "Heinrich Nickel",
    role: "HVAC System Engineer",
    tags: ["Engineering"],
    highlights: [
      "HVAC systems engineer based in Berlin Metropolitan Area",
    ],
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>28-Year</span>
      <span>Career Journey</span>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 1.6 } }}
        navigation
        pagination={{ clickable: true }}
        grabCursor
        className="career-slider"
      >
        {careerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="career-card"
              style={{ background: darkMode ? "#1e1e1e" : "white" }}
            >
              <div className="career-header">
                <span className="career-period">{item.period}</span>
                <div className="career-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="career-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="career-company"
                style={{ color: darkMode ? "white" : "" }}
              >
                {item.company}
              </span>
              <span className="career-role">{item.role}</span>
              <ul className="career-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i} style={{ color: darkMode ? "#aaa" : "" }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
