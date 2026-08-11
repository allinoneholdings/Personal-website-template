import { useState } from "react";
import "./controlPanel.css";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "content", label: "Content" },
  { id: "media", label: "Media" },
  { id: "pages", label: "Pages" },
  { id: "users", label: "Users" },
  { id: "settings", label: "Settings" },
];

function ControlPanel() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="control-shell">
      <aside className="cp-sidebar">
        <div className="cp-brand">Control Panel</div>
        <nav className="cp-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`cp-nav-btn ${active === item.id ? "active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="cp-main">
        <header className="cp-topbar">
          <h1 className="cp-title">{active}</h1>
          <input className="cp-search" type="text" placeholder="Search..." />
        </header>

        <div className="cp-content">
          {active === "content" ? (
            <ContentSection />
          ) : (
            <div className="cp-placeholder">
              <p>{active} section</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="cp-section">
      <div className="cp-stats">
        <div className="stat-card">
          <span className="stat-value">12</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">4</span>
          <span className="stat-label">Drafts</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">96</span>
          <span className="stat-label">Comments</span>
        </div>
      </div>

      <div className="cp-list">
        {[
          { title: "Hello World", type: "Post", status: "Published" },
          { title: "About Me", type: "Page", status: "Published" },
          { title: "Speaking Engagements", type: "Post", status: "Draft" },
          { title: "Contact", type: "Page", status: "Published" },
        ].map((item, i) => (
          <div className="cp-list-item" key={i}>
            <div>
              <strong>{item.title}</strong>
              <span className="cp-item-type">{item.type}</span>
            </div>
            <span className={`cp-status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <div className="cp-actions">
        <button className="cp-btn">Add Content</button>
        <button className="cp-btn secondary">Edit</button>
      </div>
    </div>
  );
}

export default ControlPanel;
