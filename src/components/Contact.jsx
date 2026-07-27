import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Visit us or send us a message.</p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Visit Sip Stories</h3>

          <p><strong>📍 Address:</strong><br />
            MG Road, Vijayawada, Andhra Pradesh
          </p>

          <p><strong>📞 Phone:</strong><br />
            +91 98765 43210
          </p>

          <p><strong>✉ Email:</strong><br />
            sipstories@gmail.com
          </p>

          <p><strong>🕒 Opening Hours:</strong><br />
            Monday – Sunday<br />
            8:00 AM – 10:00 PM
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;