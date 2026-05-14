import React, { useEffect, useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import {
  profile, interests, education, researchExperience,
  projects, skills, publications, competitiveProgramming
} from './data/portfolio.js'

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-name">{profile.name}</span>
        <ul className="nav-links">
          <li><a href="#interests">Interests</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#competitive">CP</a></li>
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
      <h1>
        {profile.fullName.split(' ').slice(0, -1).join(' ')}{' '}
        <em>{profile.fullName.split(' ').slice(-1)}</em>
      </h1>
      <p className="hero-meta">
        {profile.degree} · {profile.institution} · {profile.graduationDate}
      </p>
      <p className="hero-statement">{profile.researchStatement}</p>
      <div className="hero-links">
  <a href={`mailto:${profile.email}`}>
    <FaEnvelope /> Email
  </a>
  <a href={profile.github} target="_blank" rel="noreferrer">
    <FaGithub /> GitHub
  </a>
  <a href={profile.linkedin} target="_blank" rel="noreferrer">
    <FaLinkedin /> LinkedIn
  </a>
  <a href={profile.google_scholar} target="_blank" rel="noreferrer">
    <SiGooglescholar /> Google Scholar
  </a>
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

function ResearchExperience() {
  return (
    <section id="research">
      <div className="section-header">
        <span className="section-number">§03</span>
        <span className="section-title">Research Experience</span>
      </div>
      {researchExperience.map((exp, i) => (
        <div key={i} className="research-entry">
          <div className="research-top">
            <div>
              <p className="research-role">{exp.role}</p>
              <p className="research-institution">{exp.institution}</p>
            </div>
            <span className="research-period">{exp.period}</span>
          </div>
          <div className="research-supervisor">
            <span className="supervisor-label">Supervisor —</span>
            <span className="supervisor-name">{exp.supervisor}</span>
            <span className="supervisor-title">{exp.supervisorTitle}</span>
            <a href={`mailto:${exp.supervisorEmail}`} className="supervisor-email">{exp.supervisorEmail}</a>
          </div>
          <p className="research-desc">{exp.description}</p>
          <ul className="project-highlights">
            {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

function Publications() {
  if (!publications || publications.length === 0) return null
  return (
    <section id="publications">
      <div className="section-header">
        <span className="section-number">§04</span>
        <span className="section-title">Publications</span>
      </div>
      <div className="pub-list">
        {publications.map((pub, i) => (
          <div key={i} className="pub-entry">
            <div className="pub-top">
              <p className="pub-title">
                {pub.link
                  ? <a href={pub.link} target="_blank" rel="noreferrer">{pub.title}</a>
                  : pub.title
                }
              </p>
              <span className={`pub-status ${pub.status === 'Published' ? 'published' : pub.status === 'Accepted' ? 'accepted' : 'progress'}`}>
                {pub.status}
              </span>
            </div>
            <p className="pub-venue">
              {pub.conference || pub.journal} · {pub.year}
            </p>
            {pub.description && (
              <p className="pub-desc">{pub.description}</p>
            )}
          </div>
        ))}
      </div>
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
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
              ↗ GitHub
            </a>
          )}
        </div>
      </div>
      <p className="project-desc">{project.description}</p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
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
        <span className="section-number">§05</span>
        <span className="section-title">Research & Technical Projects</span>
      </div>
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
    </section>
  )
}

function CompetitiveProgramming() {
  const cp = competitiveProgramming
  return (
    <section id="competitive">
      <div className="section-header">
        <span className="section-number">§06</span>
        <span className="section-title">Competitive Programming</span>
      </div>
      <div className="cp-wrapper">
        <div className="cp-profiles">
          {cp.profiles.map((p) => (
            <a key={p.platform} href={p.url} target="_blank" rel="noreferrer" className="cp-profile-link">
              <span className="cp-platform">{p.platform}</span>
              <span className="cp-handle">{p.handle}</span>
            </a>
          ))}
          <div className="cp-stat">
            <span className="cp-stat-number">{cp.totalSolved}</span>
            <span className="cp-stat-label">problems solved</span>
          </div>
        </div>
        <p className="cp-note">{cp.note}</p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-number">§07</span>
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
        <ResearchExperience />
        <Publications />
        <Projects />
        <CompetitiveProgramming />
        <Skills />
        <Footer />
      </div>
    </>
  )
}