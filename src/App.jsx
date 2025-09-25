import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const navContainerRef = useRef(null)
  const navLinksRef = useRef(null)
  const [navSlide, setNavSlide] = useState(0)

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const updateNavSlide = useCallback(() => {
    if (!navContainerRef.current || !navLinksRef.current) return

    const container = navContainerRef.current
    const links = navLinksRef.current
    const styles = getComputedStyle(container)
    const paddingLeft = parseFloat(styles.paddingLeft) || 0
    const paddingRight = parseFloat(styles.paddingRight) || 0
    const horizontalPadding = Math.max(paddingLeft, paddingRight)
    const containerWidth = container.clientWidth
    const linksWidth = links.clientWidth
    const slideDistance = containerWidth / 2 - horizontalPadding - linksWidth / 2

    setNavSlide(slideDistance > 0 ? slideDistance : 0)
  }, [])

  useEffect(() => {
    updateNavSlide()
    window.addEventListener('resize', updateNavSlide)

    return () => {
      window.removeEventListener('resize', updateNavSlide)
    }
  }, [updateNavSlide])

  useEffect(() => {
    updateNavSlide()
  }, [updateNavSlide, activeSection])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    // Don't manually set activeSection here - let the observer handle it
  }

  const isHeroActive = activeSection === 'hero'

  return (
    <>
      <nav className={`navbar ${isHeroActive ? 'navbar-hero' : 'navbar-scrolled'}`}>
        <div className="nav-container" ref={navContainerRef}>
          <div className={`nav-logo ${isHeroActive ? 'nav-logo-hidden' : ''}`}>Drake Bartolai</div>
          <div
            className={`nav-links ${isHeroActive ? 'nav-links-centered' : 'nav-links-right'}`}
            ref={navLinksRef}
            style={{ '--nav-slide': `${navSlide}px` }}
          >
            <button onClick={() => scrollToSection('hero')} className={activeSection === 'hero' ? 'active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="app">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className={`hero-name ${isHeroActive ? '' : 'hero-name-compact'}`}>Drake Bartolai</h1>
              <p className="hero-slogan">CompE @ UIUC; Hoeft Tech & Management <br/> Learning & Building Every Day</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/headshot.jpg" alt="Drake Bartolai" className="headshot" />
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Learn More</span>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">My Mission</h2>
            <div className="about-content">
              <div className="about-text">
                <p className="about-intro">
                  To create elegant software solutions to the problems I encounter every day. 
                </p>
                
                <div className="about-cards">
                  <div className="about-card">
                    <h3>Education</h3>
                    <p>There's a remarkable lack of software built to help students through the actual process of studying. ClassMate aims to fix that through it's unique learning flow.</p>
                  </div>
                  
                  <div className="about-card">
                    <h3>Sports</h3>
                    <p>A fascinating field that consumes millions of hours and billions of dollars each year, 
                    sports are only beginning to adapt to the digital age. I want to help shape that transition.</p>
                  </div>
                  
                  <div className="about-card">
                    <h3>Careers</h3>
                    <p>I've spent hours refining my Notion board to track dozens of job postings, cover letters, and candidate portals. There has to be a better way...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="sas-image">
                  <img src="/classmate.png" alt="classMate" width={"50%"}/>
                </div>
                <div className="project-content">
                  <h3>classMate</h3>
                  <p>Full-stack SaaS platform that personalizes study planning with AI-generated quizzes and spaced repetition.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React.TS</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">OpenAI API</span>
                  </div>
                  <div className="project-links">
                    <a href="http://classmate.dev" className="project-link">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="sas-image">
                  <img src="/sas.png" alt="Sports Analytics Society" width={"80%"} height={"60%"}  />
                </div>
                <div className="project-content">
                  <h3>Sports Analytics Society</h3>
                  <p>I serve as technical project director, leading a team of 12 developers to create this full stack sports analytics application. (Ongoing)</p>
                  <div className="project-tech">
                    <span className="tech-tag">FastAPI</span>
                    <span className="tech-tag">scikit-learn</span>
                    <span className="tech-tag">React.TS</span>
                    <span className="tech-tag">Vercel</span>
                    <span className="tech-tag">Railway</span>
                  </div>
                  <div className="project-links">
                    <a href="http://sports-analytics-uiuc.vercel.app" className="project-link">Project</a>
                    <a href="https://github.com/dbartolai/sports_analytics_uiuc" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="sas-image">
                  <img src="/logo.png" alt="Project Portfolio" height={"60%"} />
                </div>
                <div className="project-content">
                  <h3>Portfolio</h3>
                  <p>Welcome :)</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">Tailwind</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/dbartolai/portfoliio" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <h2 className="section-title">Experience & Leadership</h2>
            <div className="experience-content">
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>Lead Instructor</h3>
                    <h4>iD Tech Camps - Lake Forest, IL</h4>
                    <span className="timeline-date">June 2025 - August 2025</span>
                    <p>Coordinated daily camp operations for STEM programs serving 200+ students aged 10-17.</p>
                    <ul>
                      <li>Led a team of six instructors to deliver high-quality programming and robotics curriculum</li>
                      <li>Designed Python, C++, and robotics courses that strengthened students' engineering fundamentals</li>
                      <li>Partnered with regional leadership to improve parent satisfaction and the overall student experience</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>Learning Assistant, PHYS 212</h3>
                    <h4>University of Illinois Physics Dept. - Champaign, IL</h4>
                    <span className="timeline-date">August 2024 - December 2024</span>
                    <p>Facilitated electricity and magnetism labs and mentored students alongside graduate TAs.</p>
                    <ul>
                      <li>Ran weekly lab sessions supporting 40+ students through experimental setups and analysis</li>
                      <li>Provided one-on-one mentorship that bridged communication between students and faculty</li>
                      <li>Collected feedback and interviews adopted by the department to refine lab structure</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>Web Developer</h3>
                    <h4>Acannability - Chicago, IL</h4>
                    <span className="timeline-date">April 2024 - August 2024</span>
                    <p>Delivered product enhancements for a molecular data platform used by entrepreneurs and investors.</p>
                    <ul>
                      <li>Engineered an interactive "periodic table of molecules" consolidating insights from 50+ molecules</li>
                      <li>Designed features that increased engagement and readability, contributing to $10k in raised capital</li>
                      <li>Aligned technical deliverables with executive stakeholders to meet evolving business goals</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>Private Tutor</h3>
                    <h4>Bartolai Test Prep</h4>
                    <span className="timeline-date">August 2021 - Present</span>
                    <p>Manage a tutoring business focused on tailored academic coaching and client success.</p>
                    <ul>
                      <li>Built client management processes that track student progress end-to-end</li>
                      <li>Delivered customized study strategies resulting in 100% placement at top-choice schools</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-subtitle">
              I'm always interested in new opportunities and collaborations
            </p>
            
            <div className="contact-links">
              <a href="https://github.com/dbartolai" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className='link-info'>
                  <h3>GitHub</h3>
                  <p>Check out my code</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/drake-bartolai" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className='link-info'>
                  <h3>LinkedIn</h3>
                  <p>Let's connect</p>
                </div>
              </a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div className='link-info'>
                  <h3>Resume</h3>
                  <p>Download my resume</p>
                </div>
              </a>

              <a href="mailto:drakeab2@illinois.edu" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                </div>
                <div className='link-info'>
                  <h3>Email</h3>
                  <p>Reach out</p>
                </div>
              </a>
            </div>

            <div className="contact-footer">
              <p>&copy; 2025 Drake Bartolai. Built with React.TS</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
