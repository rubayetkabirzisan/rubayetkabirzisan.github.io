import React, { useEffect, useRef } from 'react'
import { profile, interests, education, projects, skills } from './data/portfolio.js'

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-name">{profile.name}</span>
        <ul className="nav-links">
          <li><a href="#interests">Interests</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-label">Academic Portfolio</div>
      <h1>{profile.fullName.split(' ')[0]} <em>{profile.fullName.split(' ').slice(1).join(' ')}</em></h1>
      <p className="hero-meta">
        {profile.degree} · {profile.institution} · {profile.graduationYear}
      </p>
      <p className="hero-statement">{profile.researchStatement}</p>
      <div className="hero-links">
        <a href={`mailto:${profile.email}`}>✉ Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">⌥ GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">↗ LinkedIn</a>
      </div>
    </div>
  )
}

function Interests() {
  return (
    <section id="interests">
      <div className="section-header">
        <span className="section-number">§01</span>
        <span className="section-title">Research Interests</span>
      </div>
      <div className="interests-grid">
        {interests.map((item) => (
          <span key={item} className="interest-tag">{item}</span>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <span className="section-number">§02</span>
        <span className="section-title">Education</span>
      </div>
      {education.map((edu, i) => (
        <div key={i} className="edu-entry">
          <span className="edu-degree">{edu.degree}</span>
          <span className="edu-period">{edu.period}</span>
          <span className="edu-institution">{edu.institution}, {edu.location}</span>
          <ul className="edu-highlights">
            {edu.gpa && <li>CGPA: {edu.gpa}</li>}
            {edu.highlights.map((h, j) => <li key={j}>{h}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

function ProjectCard({ project }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="project-entry" ref={ref}>
      <div className="project-top">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-course">{project.course}</p>
      <p className="project-desc">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="project-tags">
        {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-number">§03</span>
        <span className="section-title">Academic Projects</span>
      </div>
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-number">§04</span>
        <span className="section-title">Technical Skills</span>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p className="skill-group-label">{group}</p>
            <ul className="skill-list">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <span className="footer-note">© {year} {profile.fullName}</span>
      <span className="footer-note">{profile.institution}</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <Hero />
        <Interests />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  )
}
