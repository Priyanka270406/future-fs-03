import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          src={`${import.meta.env.BASE_URL}about.png`}
          alt="Cafe Interior"
        />
      </div>

      <div className="about-content">
        <h2>About Sip Stories</h2>

        <p>
          Welcome to Sip Stories, where every cup tells a story.
          We believe coffee is more than just a drink—it's a moment
          to pause, connect, and create memories.
        </p>

        <p>
          From freshly brewed coffee and handcrafted beverages to
          delicious desserts and warm conversations, our café is
          designed to make every visit feel special.
        </p>

        <button>Read More</button>
      </div>
    </section>
  );
}

export default About;