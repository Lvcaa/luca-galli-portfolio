import { useEffect, useState } from 'react'

const Arrow = ({ direction = 'up-right' }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    {direction === 'down' ? (
      <path d="M10 3v13m0 0 5-5m-5 5-5-5" />
    ) : (
      <path d="M5 15 15 5m0 0H7m8 0v8" />
    )}
  </svg>
)

const LinkedIn = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M6.5 8.5V18M6.5 5.75v.01M10.5 18v-5.4c0-2.1 3.5-2.3 3.5.2V18M10.5 9.5V18M18 18v-5.8c0-4.8-5.4-4.5-7.5-2.2" />
  </svg>
)

const tools = [
  { name: 'Docker', icons: ['/docker.svg'] },
  { name: 'Linux & Bash', icons: ['/linux.svg', '/bash.svg'] },
  { name: 'Python', icons: ['/python.svg'] },
  { name: 'Java', icons: ['/java.svg'] },
  { name: 'Web programming', icons: ['/html5.svg'] },
  { name: 'Git', icons: ['/git.svg'] },
]

const projects = [
  {
    index: '01',
    title: 'OASIS-3 Multimodal ETL & QC',
    label: 'Python · BIDS · Data engineering',
    description:
      'Built a deterministic, regenerable subject-level data foundation across heterogeneous OASIS-3 sources, covering structural MRI with partial resting-state fMRI and DWI integration.',
    result: '1,376 participants, explicit cohort rules and parameterised quality-control gates.',
    accent: 'lime',
  },
  {
    index: '02',
    title: 'Dynamic functional connectivity',
    label: 'Python · Network theory · Neuroimaging',
    description:
      'Built a four-stage, config-driven pipeline for motion-censored windows, connectivity estimation, temporal Leiden communities and modular-flexibility analysis.',
    result: 'Tens of thousands of valid connectivity graphs compared across cohorts and arousal states.',
    accent: 'blue',
  },
  {
    index: '03',
    title: 'Morphometric graph learning',
    label: 'Python · ANTs · Optimal transport',
    description:
      'Designed a nonlinear-registration and Jacobian-determinant pipeline that retains full deformation distributions across 60,395 anatomical parcels per subject.',
    result: 'A parallel, memory-mapped Wasserstein-distance graph engine for structure-to-function research.',
    accent: 'peach',
  },
  {
    index: '04',
    title: 'Causal-function brain network simulation',
    label: 'Python · Neuroinformatics · Interactive systems',
    description:
      'Helped refine a Python simulation for Focus Live that models cortical stimulation during a neurosurgical counting task, developed alongside researchers at FBK.',
    result: 'Connected the simulation to a physical interface and a 3D-printed brain for public exploration.',
    image: '/causal-function-brain.png',
    imageAlt: 'Four brain renderings showing stimulation points and activated cortical regions',
    accent: 'lime',
  },
  {
    index: '05',
    title: 'WebValley air-quality forecasting',
    label: 'Python · Time series · Environmental data',
    description:
      'Led a team of four to build an end-to-end pipeline from two deployment sites and 19 sensor streams, transforming more than 3.5 million environmental records into regression datasets.',
    result: 'Benchmarked Random Forest and Keras MLP models; the best training result reached an R² of approximately 0.963.',
    image: '/webvalley-pm10-prediction.png',
    imageAlt: 'Scatter plot comparing predicted and real PM10 measurements',
    accent: 'blue',
  },
]

const secondaryProjects = [
  {
    title: 'Forgis',
    type: 'Hackathon prototype · Robotics',
    description:
      'Explored natural-language task planning for an ABB YuMi robot: a short prompt becomes a symbolic action plan, then calibrated motions with grip verification.',
    stack: 'LLM planning · Python · Robotics',
    href: 'https://github.com/Lvcaa/Forgis_Hackathon',
  },
  {
    title: 'EcoSignal',
    type: 'Hackathon prototype · Sustainability',
    description:
      'Explored a waste-operations platform combining fleet telemetry, geolocated public reports and a map-first interface for more visible local operations.',
    stack: 'React · FastAPI · PostgreSQL',
    href: 'https://github.com/Lvcaa/EcoSignal-HackNation',
  },
  {
    title: 'CommuteSync',
    type: 'Hackathon prototype · Urban mobility',
    description:
      'Explored a city-mobility planner that coordinates parking, shared vehicles and transit into one clear, bookable journey instead of a passive map.',
    stack: 'Python · React Native · Geospatial data',
    href: 'https://github.com/Lvcaa/hackathon_rove',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <div className="site-card">
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
          <a className="brand" href="#top" aria-label="Luca Galli, back to top" onClick={closeMenu}>
            <span className="brand-mark">LG</span>
            <span className="brand-name">Luca Galli</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a
            className="header-cta"
            href="https://www.linkedin.com/in/lucaagalli/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </header>

        <main>
          <section className="hero" id="top">
            <div className="hero-layout">
              <div className="hero-copy">
                <h1 className="reveal reveal-two">
                  From complex data
                  <span>to clear insight.</span>
                </h1>
                <p className="hero-intro reveal reveal-three">
                  I’m Luca — a Computer Science student and researcher building AI and machine-learning
                  systems that turn complex, high-dimensional data into useful insight.
                </p>
                <div className="hero-actions reveal reveal-four">
                  <a className="button button-dark" href="#work">
                    See selected work <Arrow direction="down" />
                  </a>
                  <a
                    className="button button-light"
                    href="https://www.linkedin.com/in/lucaagalli/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View profile <Arrow />
                  </a>
                </div>
              </div>
              <figure className="hero-portrait reveal reveal-three">
                <img
                  src="/luca-galli-profile.png"
                  alt="Portrait of Luca Galli"
                  width="896"
                  height="1195"
                />
              </figure>
            </div>

            <div className="affiliation-lockup reveal reveal-four" aria-label="Current affiliations">
              <a className="affiliation-item university" href="https://www.unitn.it/" target="_blank" rel="noreferrer">
                <span>Studying at</span>
                <img className="unitn-logo" src="/unitn-logo.svg" alt="University of Trento" />
                <small>B.S. in Computer Science · Expected March 2028</small>
              </a>
              <a className="affiliation-item fbk" href="https://www.fbk.eu/" target="_blank" rel="noreferrer">
                <span>Working at</span>
                <img className="fbk-logo" src="/fbk-logo.png" alt="Fondazione Bruno Kessler" />
                <small>Research Assistant · NILab · Since August 2025</small>
                <div className="fbk-research">
                  <div>
                    <span>Research focus</span>
                    <strong>Data Science for Neuroinformatics</strong>
                  </div>
                  <div>
                    <span>Research interest</span>
                    <strong>Data Science for Biomedicine</strong>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="signal-strip" aria-label="Areas of focus">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
          </section>

          <section className="work-section section-pad" id="work">
            <div className="section-heading">
              <div>
                <p className="kicker">Selected work</p>
                <h2>Ideas become useful<br />when they leave the page.</h2>
              </div>
              <p>
                Selected research and applied work across machine learning,
                data engineering and predictive modelling.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card ${project.accent} ${project.image ? 'has-media' : ''}`} key={project.index}>
                  <div className="project-topline">
                    <span>{project.index}</span>
                    <span>{project.label}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-side">
                    {project.image && (
                      <figure className="project-media">
                        <img src={project.image} alt={project.imageAlt} loading="lazy" />
                      </figure>
                    )}
                    <div className="project-result">
                      <span className="result-icon">↳</span>
                      <p>{project.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="secondary-section section-pad" aria-labelledby="secondary-projects-title">
            <div className="secondary-heading">
              <div>
                <p className="kicker">Secondary projects</p>
                <h2 id="secondary-projects-title">Hackathon builds<br />and rapid experiments.</h2>
              </div>
              <p>Smaller collaborative prototypes exploring ideas at speed.</p>
            </div>
            <div className="secondary-grid">
              {secondaryProjects.map((project) => (
                <a
                  className="secondary-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  <div className="secondary-card-topline">
                    <span>{project.type}</span>
                    <Arrow />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <small>{project.stack}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="about-section section-pad" id="about">
            <div className="about-copy">
              <p className="kicker">About</p>
              <h2>I build learning systems from complex data.</h2>
              <p className="about-lead">
                My interests span artificial intelligence, machine learning and deep learning, with an
                emphasis on reliable methods for high-dimensional scientific and real-world data.
              </p>
              <p>
                At FBK–NILab, I currently work on deformation-based modelling of brain morphology.
                More broadly, I’m interested in the full machine-learning process—from building robust
                datasets and selecting meaningful representations to training, evaluating and deploying models.
              </p>
            </div>

            <div className="about-panel">
              <div className="toolkit-card">
                <span className="toolkit-label">Tools I work with</span>
                <div className="toolkit-grid">
                  {tools.map((tool) => (
                    <div className="toolkit-item" key={tool.name}>
                      <span className={`toolkit-icons ${tool.icons.length > 1 ? 'is-pair' : ''}`} aria-hidden="true">
                        {tool.icons.map((icon) => (
                          <img src={icon} alt="" key={icon} />
                        ))}
                      </span>
                      <strong>{tool.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="principles section-pad">
            <div className="section-heading compact">
              <div>
                <p className="kicker">Technical foundation</p>
                <h2>Machine learning built to hold up.</h2>
              </div>
            </div>
            <div className="principle-grid">
              <article>
                <span>Machine learning</span>
                <h3>Models shaped around the problem.</h3>
                <p>Classical machine learning, deep neural networks, representation learning and model evaluation.</p>
              </article>
              <article>
                <span>Data engineering</span>
                <h3>Pipelines that can be trusted.</h3>
                <p>Deterministic ETL, explicit quality gates, statistical analysis and reproducible workflows.</p>
              </article>
              <article>
                <span>Core toolkit</span>
                <h3>From research code to working systems.</h3>
                <p>Python, PyTorch, TensorFlow/Keras, scikit-learn, Docker, Git, Linux and web technologies.</p>
              </article>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <p className="kicker">Let’s connect</p>
            <h2>Working on a machine-learning idea?</h2>
            <p>I’m always interested in research collaborations, applied problems and good technical conversations.</p>
            <a
              className="button button-accent"
              href="https://www.linkedin.com/in/lucaagalli/"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <LinkedIn />
            </a>
            <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          </section>
        </main>

        <footer>
          <div className="brand footer-brand">
            <span className="brand-mark">LG</span>
            <span className="brand-name">Luca Galli</span>
          </div>
          <p>Learning, building, sharing.</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </div>
  )
}

export default App
