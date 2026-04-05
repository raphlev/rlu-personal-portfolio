import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Timeline from "./components/Timeline/Timeline";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#111" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <About />
      <Works />
      <Portfolio />
      <Timeline />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
