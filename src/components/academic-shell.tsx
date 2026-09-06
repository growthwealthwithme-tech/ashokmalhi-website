"use client";

import { useId, useState } from "react";

const navigation = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Research",
  "Publications",
  "Presentations",
  "Achievements",
  "Contact",
] as const;

type SectionName = (typeof navigation)[number];

const sectionCopy: Record<Exclude<SectionName, "Home">, { eyebrow: string; title: string; description: string }> = {
  About: {
    eyebrow: "Academic profile",
    title: "About Dr. Ashok Malhi",
    description: "A dedicated space for the academic biography, teaching philosophy, and professional identity.",
  },
  Education: {
    eyebrow: "Academic journey",
    title: "Education",
    description: "Academic qualifications and learning milestones will be presented here.",
  },
  Experience: {
    eyebrow: "Professional practice",
    title: "Experience",
    description: "Teaching, academic, and professional experience will be structured here.",
  },
  Research: {
    eyebrow: "Research practice",
    title: "Research",
    description: "Research themes, projects, methods, and collaborations will be introduced here.",
  },
  Publications: {
    eyebrow: "Scholarly record",
    title: "Publications",
    description: "A verified publication record will be curated here in a clear, searchable format.",
  },
  Presentations: {
    eyebrow: "Academic exchange",
    title: "Presentations",
    description: "Conference presentations, invited talks, and academic engagements will appear here.",
  },
  Achievements: {
    eyebrow: "Recognition",
    title: "Achievements",
    description: "Academic recognition, service, and milestones will be documented here.",
  },
  Contact: {
    eyebrow: "Professional connection",
    title: "Contact",
    description: "Verified contact channels and collaboration information will be shared here.",
  },
};

const researchAreas = [
  "Artificial Intelligence",
  "Digital Marketing",
  "Blockchain",
  "IoT",
  "Data Analytics",
  "Emerging Technologies",
];

export function AcademicShell() {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const tabListId = useId();

  const selectSection = (section: SectionName) => {
    setActiveSection(section);
  };

  return (
    <main className="site-shell">
      <a className="skip-link" href="#workspace">Skip to content</a>

      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Dr. Ashok Malhi home" onClick={() => selectSection("Home")}>
          <span className="wordmark-mark" aria-hidden="true">AM</span>
          <span>
            <strong>Dr. Ashok Malhi</strong>
            <small>Academic workspace</small>
          </span>
        </a>
        <p className="topbar-status"><span aria-hidden="true" />Assistant Professor · India</p>
      </header>

      <nav className="section-navigation" aria-label="Academic website sections">
        <div className="mobile-section-picker">
          <label htmlFor="section-picker">Current view</label>
          <select
            id="section-picker"
            value={activeSection}
            onChange={(event) => selectSection(event.target.value as SectionName)}
          >
            {navigation.map((section) => <option key={section} value={section}>{section}</option>)}
          </select>
        </div>
        <div className="tab-list" role="tablist" aria-label="Academic website sections" id={tabListId}>
          {navigation.map((section) => {
            const isActive = section === activeSection;
            return (
              <button
                key={section}
                className="tab"
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="workspace"
                id={`tab-${section.toLowerCase()}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectSection(section)}
              >
                {section}
              </button>
            );
          })}
        </div>
      </nav>

      <section
        className="workspace"
        id="workspace"
        role="tabpanel"
        aria-labelledby={`tab-${activeSection.toLowerCase()}`}
        tabIndex={-1}
      >
        {activeSection === "Home" ? (
          <HomeView onExploreResearch={() => selectSection("Research")} />
        ) : (
          <PlaceholderView section={activeSection} />
        )}
      </section>
    </main>
  );
}

function HomeView({ onExploreResearch }: { onExploreResearch: () => void }) {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true" />Academic researcher &amp; educator</p>
          <h1 id="hero-title">Dr. Ashok Malhi</h1>
          <p className="role">Assistant Professor</p>
          <p className="institution">Lovely Professional University, India</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={onExploreResearch}>Explore Research <span aria-hidden="true">→</span></button>
            <button className="button button-secondary" type="button" disabled aria-describedby="cv-note">View CV <span aria-hidden="true">↗</span></button>
          </div>
          <p className="action-note" id="cv-note">Curriculum vitae will be added in a future update.</p>
        </div>
        <div className="portrait-placeholder" role="img" aria-label="Reserved placement for Dr. Ashok Malhi's professional black-and-white photograph">
          <span className="portrait-frame" aria-hidden="true"><i /></span>
          <p>Professional portrait</p>
          <small>Black-and-white photograph reserved</small>
        </div>
      </section>

      <section className="overview-grid" aria-label="Academic overview">
        <article className="overview-card overview-introduction">
          <p className="eyebrow">Professional identity</p>
          <h2>Business and emerging technologies</h2>
          <p>Academic work spanning technology, management, and their evolving role in contemporary society.</p>
        </article>
        <article className="overview-card research-card">
          <div className="card-heading"><p className="eyebrow">Research areas</p><span className="card-label">Focus</span></div>
          <ul className="research-list">
            {researchAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
        </article>
      </section>

      <section className="overview-section" aria-labelledby="academic-record-title">
        <div className="section-heading">
          <div><p className="eyebrow">Academic record</p><h2 id="academic-record-title">Selected areas of activity</h2></div>
          <p>Detailed, verified information will be added to each dedicated workspace.</p>
        </div>
        <div className="activity-grid">
          <article><span className="activity-index">01</span><h3>Research Publications</h3><p>Scholarly work and publication records.</p></article>
          <article><span className="activity-index">02</span><h3>Presentations</h3><p>Academic talks and conference engagement.</p></article>
          <article><span className="activity-index">03</span><h3>Achievements</h3><p>Recognition and professional milestones.</p></article>
        </div>
      </section>
    </>
  );
}

function PlaceholderView({ section }: { section: Exclude<SectionName, "Home"> }) {
  const content = sectionCopy[section];
  return (
    <section className="placeholder-view" aria-labelledby="placeholder-title">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1 id="placeholder-title">{content.title}</h1>
      <p>{content.description}</p>
      <div className="placeholder-rule"><span aria-hidden="true" />Verified content in preparation</div>
    </section>
  );
}
