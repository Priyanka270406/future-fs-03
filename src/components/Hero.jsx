import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('hero.png')" }}
    >
      <div className="overlay">
        <h1>Welcome to<br />Sip Stories</h1>

        <p className="tagline">
          Every Sip Has a Story.
        </p>

        <p className="hero-text">
  Freshly brewed coffee, artisan bakes, and warm conversations await at Sip Stories.
  Whether you're catching up with friends, working on your next idea, or simply
  enjoying a quiet moment, every visit becomes a story worth remembering.
</p>
        <div className="hero-buttons">
          <a href="#menu">
  <button>Explore Menu</button>
</a>

<a href="#contact">
  <button>Visit Us</button>
</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;