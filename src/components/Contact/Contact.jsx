import { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const { user_name, user_email, message } = form.current.elements;
    if (!user_name.value.trim()) return "Please enter your name.";
    if (!user_email.value.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email.value))
      return "Please enter a valid email address.";
    if (!message.value.trim()) return "Please enter a message.";
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(false);
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDone(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setError("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            aria-label="Your name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            aria-label="Your email address"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            aria-label="Your message"
          />
          <input
            type="submit"
            value={loading ? "Sending…" : "Send"}
            className="button"
            disabled={loading}
          />
          {done && (
            <span className="success-msg">Thanks for contacting me!</span>
          )}
          {error && <span className="error-msg">{error}</span>}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
