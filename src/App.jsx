import { useEffect, useState } from 'react'
import './styles/global.css'
import { translations } from './data/translations'
import { projectCategories } from './data/projects'
import ProjectCard from './components/ProjectCard'
import Cyclops from './components/Cyclops'
import Constellations from './components/Constellations'


function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'ru'
  )

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  const [scrollY, setScrollY] = useState(0)

  const t = translations[language]

  const [activeCategory, setActiveCategory] = useState(
    projectCategories[0].id
  )

  const activeProject = projectCategories.find(
    (category) => category.id === activeCategory
  )?.project

  // =========================
  // SCROLL
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // =========================
  // THEME
  // =========================

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'light' : 'dark'
    )

    localStorage.setItem('theme', theme)
  }, [theme])

  // =========================
  // LANGUAGE
  // =========================

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en'

    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  // =========================
  // THEME TOGGLE
  // =========================

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <div className="site" id="top">
      <header className="navbar">
        <a href="#top" className="logo" aria-label="Home">
          <Cyclops variant="logo" />
        </a>

        <nav className="nav-links">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="nav-actions">
          {/* LANGUAGE */}

          <button
            className="language-switch"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>

          {/* THEME */}

          <button
            className="theme-switch"
            onClick={toggleTheme}
            aria-label="Change theme"
            type="button"
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.42 1.42" />
                <path d="m17.65 17.65 1.42 1.42" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m4.93 19.07 1.42-1.42" />
                <path d="m17.65 6.35 1.42-1.42" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

        </div>
      </header>

      <main>

        {/* HERO */}

        <section className="hero">
          <Constellations />

          <p className="eyebrow">
            {t.hero.eyebrow}
          </p>

          <h1>
            {t.hero.titleStart}
            <span> {t.hero.titleAccent}</span>
          </h1>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              {t.hero.projects}
            </a>

            <a
              href="https://github.com/Anastasiia-A-Petrova"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              {t.hero.github}
            </a>
          </div>

          <div className="tech-line">
            Python <span>·</span> SQL <span>·</span> PostgreSQL
            <span>·</span> APIs <span>·</span> Power BI
            <span>·</span> Automation
          </div>
        </section>


        {/* PROJECTS */}

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">
              {t.sections.projectsEyebrow}
            </p>

            <h2>
              {t.sections.projectsTitle}
            </h2>
          </div>

          <div className="project-categories">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                className={`project-category-button ${
                  activeCategory === category.id
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  setActiveCategory(category.id)
                }
              >
                {category.label[language]}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {activeProject && (
              <ProjectCard
                project={activeProject}
                language={language}
              />
            )}
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="eyebrow">
              {t.sections.aboutEyebrow}
            </p>

            <h2>
              {t.sections.aboutTitle}
            </h2>
          </div>

          <p className="about-intro">
            {t.sections.aboutIntro}
          </p>

          <div className="about-direction">
            <div className="about-direction-block">
              <span className="about-direction-label">
                HINDSIGHT
              </span>

              <h3>
                {t.sections.hindsightTitle}
              </h3>

              <p>
                {t.sections.hindsightText}
              </p>
            </div>

            <div className="about-direction-center">
              <span className="about-now-dot" />
              <span className="about-now-label">
                NOW
              </span>
            </div>

            <div className="about-direction-block about-direction-right">
              <span className="about-direction-label">
                FORESIGHT
              </span>

              <h3>
                {t.sections.foresightTitle}
              </h3>

              <p>
                {t.sections.foresightText}
              </p>
            </div>
          </div>

          <div className="about-timeline">
            <div className="about-column">
              <div className="about-column-heading">
                <span className="eyebrow">
                  HINDSIGHT
                </span>

                <h3>
                  {t.sections.hindsightColumnTitle}
                </h3>
              </div>

              <div className="about-timeline-list">
                {t.sections.timeline.map((item) => (
                  <div
                    className="about-timeline-item"
                    key={`${item.period}-${item.title}`}
                  >
                    <div className="about-timeline-period">
                      {item.period}
                    </div>

                    <div className="about-timeline-content">
                      <h4>{item.title}</h4>

                      <p className="about-timeline-role">
                        {item.role}
                      </p>

                      {item.description && (
                        <p className="about-timeline-description">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-column about-foresight-column">
              <div className="about-column-heading">
                <span className="eyebrow">
                  FORESIGHT
                </span>

                <h3>
                  {t.sections.foresightColumnTitle}
                </h3>
              </div>

              <div className="foresight-content">
                <p className="foresight-statement">
                  {t.sections.foresightStatement}
                </p>

                <div className="foresight-stack">
                  {t.sections.foresightStack.map(
                    (item, index) => (

                      <div
                        className="foresight-stack-item"
                        key={item}
                      >
                        <strong>{item}</strong>
                      </div>                      

                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="about-certifications">
            <div className="about-column-heading">
              <span className="eyebrow">
                {t.sections.certificationsEyebrow}
              </span>

              <h3>
                {t.sections.certificationsTitle}
              </h3>
            </div>

            <div className="certifications-grid">
              {t.sections.certifications.map(
                (certificate) => (
                  <a
                    key={certificate.title}
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-card"
                  >
                    <div className="certificate-top">
                      <span>
                        {certificate.year}
                      </span>

                      <span>↗</span>
                    </div>

                    <h4>
                      {certificate.title}
                    </h4>

                    <p>
                      {certificate.issuer}
                    </p>
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section id="skills" className="section tools-section">
          <div className="section-heading">
            <p className="eyebrow">
              {t.sections.skillsEyebrow}
            </p>

            <h2>
              {t.sections.skillsTitle}
            </h2>
          </div>

          <div className="tools-grid">
            {t.sections.tools.map((group) => (
              <div
                className="tools-group"
                key={group.title}
              >
                <div className="tools-group-title">
                  {group.title}
                </div>

                <div className="tools-list">
                  {group.items.map((tool) => (
                    <span
                      className="tool-item"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="contact-inner">
            <p className="eyebrow">
              {t.sections.contactEyebrow}
            </p>

            <h2>
              {t.sections.contactTitle}
            </h2>

            <p className="contact-description">
              {t.sections.contactText}
            </p>

            <div className="contact-actions">
              <a
                href="mailto:anastasiiapetrovam1@gmail.com"
                className="button button-primary"
              >
                {t.sections.contactButton}
              </a>

              <a
                href="https://github.com/Anastasiia-A-Petrova"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/anastasiia-a-petrova"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://spb.hh.ru/resume/9a4a88cbff10f025ba0039ed1f504255545872"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                hh.ru ↗
              </a>
            </div>
          </div>


          <div className="contact-signal" aria-hidden="true">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <g
                className="constellation-star"
                transform="translate(18 24)"
              >
                <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
              </g>

              <g
                className="constellation-star"
                transform="translate(72 18)"
              >
                <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
              </g>

              <g
                className="constellation-star"
                transform="translate(52 50)"
              >
                <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
              </g>

              <g
                className="constellation-star"
                transform="translate(78 72)"
              >
                <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
              </g>

              <g
                className="constellation-star"
                transform="translate(25 68)"
              >
                <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
              </g>
            </svg>
          </div>

        </section>

      </main>


      {/* FLOATING CYCLOPS */}

      <Cyclops />

      {/* FOOTER */}

      <footer className="footer">
        <span>
          © 2026 Anastasiia Petrova
        </span>

        <span className="footer-role">
          {t.footer}
        </span>

        <a href="#top" className="footer-link">
          {t.footerLink} ↗
        </a>
      </footer>

    </div>
  )
}

export default App