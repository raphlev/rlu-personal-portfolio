import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { useContext } from "react";
import { themeContext } from "../../Context";

const testimonials = [
  {
    initials: "TH",
    name: "Engineering Director",
    company: "Thales",
    award: "PTC 'Customer First' Award",
    review:
      "Raphael's delivery on our Windchill PLM programme stood out for its precision, proactive communication and rigorous attention to quality. His responsiveness on bug-fixing and his ability to manage the development team under pressure earned him PTC's prestigious 'Customer First' recognition — a distinction we fully endorsed.",
  },
  {
    initials: "KF",
    name: "IT Architecture Lead",
    company: "Kingfisher",
    review:
      "Raphael was our trusted advisor for the Windchill–SAP integration via REST. He navigated a highly complex enterprise interface with the clarity and ownership of someone who genuinely understood both sides of the equation. A rare combination of technical depth and reliable delivery.",
  },
  {
    initials: "PTC",
    name: "Delivery Manager",
    company: "PTC — 14 years",
    review:
      "Over 14 years at PTC, Raphael consistently set the bar for documentation quality, verbal communication and attention to detail. He led development teams with calm authority and was always the person you could count on. Colleagues and clients alike described him as a true team player with extra merits.",
  },
  {
    initials: "AU",
    name: "Senior PLM Consultant",
    company: "Thales Australia",
    review:
      "Raphael flew to Australia to deliver hands-on Windchill training for our team. His ability to translate complex PLM architecture concepts into practical, actionable knowledge was impressive. Clear, structured, and genuinely engaged with our context — exactly what we needed.",
  },
];

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Colleagues &amp; clients </span>
        <span>value precision, </span>
        <span>reliability &amp; partnership</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className="testimonial"
              style={{
                background: darkMode ? "rgba(30,30,30,0.85)" : "rgba(255,255,255,0.85)",
                border: darkMode ? "5px solid #333" : "5px solid var(--blueCard)",
              }}
            >
              <div className="t-avatar" style={{ background: "var(--orange)" }}>
                {t.initials}
              </div>
              <p className="t-review" style={{ color: darkMode ? "#ccc" : "var(--gray)" }}>
                "{t.review}"
              </p>
              <div className="t-attribution">
                <span className="t-name" style={{ color: darkMode ? "white" : "var(--black)" }}>
                  {t.name}
                </span>
                <span className="t-company">{t.company}</span>
                {t.award && <span className="t-award">🏆 {t.award}</span>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
