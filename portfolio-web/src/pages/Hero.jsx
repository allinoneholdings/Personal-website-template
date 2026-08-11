import { useEffect, useState } from "react";
import "./hero.css";
import profileImage from "../assets/image.png";

function Hero() {
  const [content, setContent] = useState({ topic: "The Human Edge", name: "Janani" });

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.topic && data.name) {
          setContent({ topic: data.topic, name: data.name });
        }
      })
      .catch((err) => console.error("Failed to fetch hero content:", err));
  }, []);

  return (
    <main className="hero">
      <section className="hero-panel">
        <div className="hero-left">
          <p className="tag">Human-Centric Tech Leader for the AI Era</p>

          <h1>
            {content.topic}
            <br />
            with <span>{content.name}</span>
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
