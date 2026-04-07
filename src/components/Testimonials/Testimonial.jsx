import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { usePortfolio } from "../../hooks/usePortfolio";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const portfolio = usePortfolio();
  const section = portfolio?.testimonials ?? {};
  const { kv = {}, subsections = {} } = section;

  // Each ### subsection name is "INITIALS | Role | Company"
  // The review text is in paragraphs[0]; award is in kv.award
  const testimonials = Object.entries(subsections).map(([header, sub]) => {
    const parts = header.split(' | ');
    return {
      initials: parts[0]?.trim() ?? '',
      name:     parts[1]?.trim() ?? '',
      company:  parts[2]?.trim() ?? '',
      award:    sub.kv?.award,
      review:   sub.paragraphs?.[0] ?? '',
    };
  });

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>{kv.heading1 ?? 'Colleagues & clients '}</span>
        <span>{kv.heading2 ?? 'value precision, '}</span>
        <span>{kv.heading3 ?? 'reliability & partnership'}</span>
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
