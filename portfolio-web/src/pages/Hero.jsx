import "./hero.css";
import profileImage from "../assets/image.png";

function Hero() {
  return (
    <main className="hero">
      <section className="hero-panel">
        <div className="hero-left">
          <p className="tag">Human-Centric Tech Leader for the AI Era</p>

          <h1>
            The Human Edge
            <br />
            with <span>Janani</span>
          </h1>

          <h3>Designing Human-Centric, AI-Enabled Organizations</h3>

          <p className="description">
            I help leaders and organizations navigate the AI era by placing humanity
            at the center of technology, transformation, and organizational design.
          </p>

          <div className="hero-buttons">
            <button className="primary">Let's Connect</button>
            <button className="secondary">Book a Conversation</button>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="circle" />
          <img src={profileImage} alt="Janani portrait" className="profile" />
        </div>
      </section>

      <section className="stats-bar" aria-label="Key statistics">
        <div className="stat-item">
          <strong>15+</strong>
          <span>Years Experience</span>
        </div>
        <div className="stat-item">
          <strong>100+</strong>
          <span>Organizations Impacted</span>
        </div>
        <div className="stat-item">
          <strong>50+</strong>
          <span>Speaking Engagements</span>
        </div>
        <div className="stat-item">
          <strong>1000+</strong>
          <span>Leaders Coached</span>
        </div>
      </section>
    </main>
  );
}

export default Hero;
