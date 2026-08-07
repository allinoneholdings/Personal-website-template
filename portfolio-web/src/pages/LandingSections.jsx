import "./landingSections.css";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Globe,
  Linkedin,
  Layers,
  MessageCircle,
  Shield,
  Target,
  TrendingUp,
  Users,
  X,
} from "react-feather";
import portraitTwo from "../assets/2ndimg.png";
import oneImage from "../assets/01.png";
import twoImage from "../assets/02.png";
import threeImage from "../assets/03.png";
import globalAiSummit from "../assets/global ai summit 2025.png";
import futureWorkConference from "../assets/futire of work .png";

const speakingCards = [
  {
    title: "Global AI Summit 2025",
    text: "Shared practical implementation guidance for AI-ready leadership and human-centric teams.",
    image: globalAiSummit,
  },
  {
    title: "Future of Work Conference 2024",
    text: "Awarded for outstanding contribution to transformation strategy and organizational growth.",
    image: futureWorkConference,
  },
  {
    title: "Global AI Summit 2025",
    text: "Focused on systems-level transformation that balances people, process, and technology.",
    image: globalAiSummit,
  },
];

const insightCards = [
  {
    title: "Navigating Resistance During Enterprise AI Adoption",
    text: "Understanding the barriers to large-scale change and practical ways to unlock adoption.",
    date: "Oct 12, 2025",
    image: oneImage,
  },
  {
    title: "Navigating Resistance During Enterprise AI Adoption",
    text: "Frameworks for teams moving from pilots to enterprise-wide transformation outcomes.",
    date: "Oct 12, 2025",
    image: twoImage,
  },
  {
    title: "Navigating Resistance During Enterprise AI Adoption",
    text: "How leadership alignment and capability design accelerate long-term innovation.",
    date: "Oct 12, 2025",
    image: threeImage,
  },
];


const benefitCards = [
  {
    icon: <Users size={18} />,
    title: "Unique Perspective",
    text: "Combining deep technical understanding with leadership insight to bridge business and innovation.",
  },
  {
    icon: <Globe size={18} />,
    title: "Proven Track Record",
    text: "20+ years of transformation work across industries, cultures, and enterprise environments.",
  },
  {
    icon: <Layers size={18} />,
    title: "Proven Track Record",
    text: "Hands-on execution across systems, organizations, and operating models that scale.",
  },
  {
    icon: <Shield size={18} />,
    title: "Human-Centered Approach",
    text: "Helping teams evolve with clarity, trust, and a balanced view of change.",
  },
];

const storyCards = [
  {
    title: "Global Financial Services Firm",
    tag: "Financial Services",
    tone: "story-story-a",
    text: "A leadership transformation enabled stronger alignment and modernized delivery practices.",
    image: oneImage
  },
  {
    title: "Healthcare Technology Startup",
    tag: "HealthTech",
    tone: "story-story-b",
    text: "Scaled product and people practices in parallel while keeping adoption human-centered.",
    image: twoImage
  },
  {
    title: "Manufacturing Conglomerate",
    tag: "Manufacturing",
    tone: "story-story-c",
    text: "Built execution clarity across multi-site operations and cross-functional leadership teams.",
    image:threeImage
  },
];

function LandingSections() {
  return (
    <section className="landing-stack">
      <section className="about-section">
        <div className="about-visual">
          <img src={portraitTwo} alt="Janani standing with folded arms" />
          <div className="floating-card">
            <span className="floating-badge">KPI Certified</span>
            <span>Leadership Strategist</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">ABOUT / JANANI UMANAGE</p>
          <h2>Bridging Technical Depth with Human-Centric Leadership</h2>
          <p className="lead">
            With a rich foundation in engineering and leadership experience across
            coaching, innovation, and transformation, I help organizations create a
            future where people and technology move together.
          </p>

          <div className="mini-grid">
            <article>
              <Target size={16} />
              <div>
                <strong>Executive Confidence</strong>
                <span>Steady, strategic guidance</span>
              </div>
            </article>
            <article>
              <TrendingUp size={16} />
              <div>
                <strong>Tech Transformation</strong>
                <span>Leading AI and change programs</span>
              </div>
            </article>
            <article>
              <Shield size={16} />
              <div>
                <strong>Strategic Execution</strong>
                <span>Operational clarity that scales</span>
              </div>
            </article>
            <article>
              <Award size={16} />
              <div>
                <strong>Human Capital AI</strong>
                <span>Impacting leaders at every level</span>
              </div>
            </article>
          </div>

          <button className="primary-link">
            Explore Full Journey
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <section className="why-section">
        <p className="section-kicker">Why Work With Me?</p>
        <h2>Where Expertise Meets Execution</h2>

        <div className="benefit-grid">
          {benefitCards.map((card) => (
            <article className="benefit-card" key={card.title + card.text}>
              <div className="benefit-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <button className="small-link">View All</button>
      </section>

      <section className="stories-section">
        <p className="section-kicker">Client Success Stories</p>
        <h2>Real transformation, measurable impact, lasting change</h2>

        <div className="story-grid">
          {storyCards.map((card) => (
  <article className={`story-card ${card.tone}`} key={card.title}>

    <img 
      src={card.image} 
      alt={card.title}
      className="story-image"
    />

    <span className="story-tag">{card.tag}</span>

    <div className="story-copy">
      <h3>{card.title}</h3>
      <p>{card.text}</p>

      <button>
        See More
        <ArrowRight size={13} />
      </button>
    </div>

  </article>
))}
        </div>

        <button className="small-link">Read More</button>
      </section>

      <section className="testimonial-section">
        <p className="section-kicker">Trusted by Industry Leaders</p>
        <h2>What our clients appreciate about working with us</h2>

        <div className="testimonial-frame">
          <button className="carousel-nav" aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>

          <article className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>
              Janani’s systems-thinking approach completely transformed our leadership
              team’s execution and alignment. The clarity and alignment we achieved were
              unprecedented.
            </p>
            <div className="testimonial-author">
              {/* <img src={portraitTwo} alt="Testimonial author" /> */}
              <div>
                <strong>Naleen Edirisinghe</strong>
                <span>Director/ CEO Pan Asia Banking Corporation PLC</span>
              </div>
            </div>
          </article>

          <button className="carousel-nav" aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section className="speaking-section">
        <p className="section-kicker">Recent Speaking Engagements</p>
        <h2>Trusted by leading conferences and organizations worldwide</h2>

        <div className="speaking-grid">
          {speakingCards.map((card) => (
            <article className="speaking-card" key={card.title + card.text}>
              <img src={card.image} alt={card.title} className="speaking-image" />
              <div className="speaking-overlay">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <button className="small-link">View All Speaking</button>
      </section>

      <section className="insights-section">
        <p className="section-kicker">Latest Insights</p>
        <h2>Perspectives shaping human-centered transformation</h2>

        <div className="insight-grid">
          {insightCards.map((card) => (
            <article className="insight-card" key={card.title + card.date + card.image}>
              <img src={card.image} alt={card.title} className="insight-image" />
              <div className="insight-meta">
                <span>Agile Leadership</span>
                <span>{card.date}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button>
                Read More
                <ArrowRight size={12} />
              </button>
            </article>
          ))}
        </div>

        <button className="small-link">View All Articles</button>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to make a sustainable shift in your organization?</h2>
          <p>
            Let&apos;s connect to discuss how we can build a transformation blueprint
            tailored to your leadership and operational goals.
          </p>
          <div className="final-actions">
            <button className="cta-primary">Let&apos;s Connect</button>
            <button className="cta-secondary">Explore Coaching Programs</button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <h3>Janani.</h3>
          <p>
            Empowering leaders and organizations with strategy, innovation, and
            sustainable transformation.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">About Janani</a>
          <a href="/">Services</a>
          <a href="/">Speaking</a>
          <a href="/">Insights</a>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <a href="/">1:1 Executive Coaching</a>
          <a href="/">Organizational Consulting</a>
          <a href="/">Transformation Advisory</a>
          <a href="/">Leadership Development</a>
        </div>

        <div className="footer-social">
          <h4>Follow</h4>
          <div className="social-row">
            <a href="/" aria-label="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="/" aria-label="X">
              <X size={14} />
            </a>
            <a href="/" aria-label="Community">
              <MessageCircle size={14} />
            </a>
            <a href="/" aria-label="Facebook">
              <Facebook size={14} />
            </a>
          </div>
          <p>Stay updated with the latest insights, events, and opportunities.</p>
        </div>
      </footer>
    </section>
  );
}

export default LandingSections;
