import { useEffect, useState } from "react";

const education = [
  {
    dates: "Apr 2023 - Dec 2025",
    school: "Maharishi International University",
    degree: "Master of Science in Computer Programming",
    location: "Fairfield, Iowa",
  },
  {
    dates: "Sep 2019 - Dec 2022",
    school: "Texas Wesleyan University",
    degree: "Bachelor of Science in Computer Science",
    location: "Fort Worth, Texas",
  },
];

const projects = [
  {
    year: "2023",
    title: "Resort Management System",
    description:
      "Spring Boot reservation platform with payment workflows and data validation for country and state records.",
    bullets: [
      "Designed and shipped 10+ RESTful APIs",
      "Improved data integrity and reduced inconsistency issues",
      "Used Postman testing to drive a 95%+ API success rate",
    ],
    stack: "Java / Spring Boot / MySQL / Postman",
    href: "https://github.com/HaiDuongHuynh?tab=repositories",
  },
  {
    year: "2024",
    title: "Library System",
    description:
      "Desktop application for role-based library operations with efficient record handling and an easier workflow for users.",
    bullets: [
      "Supported admin and user authentication flows",
      "Handled 100+ records for check-in and check-out operations",
      "Improved UI usability and interaction speed",
    ],
    stack: "Java / Javax Swing / Eclipse / Git",
    href: "https://github.com/HaiDuongHuynh?tab=repositories",
  },
  {
    year: "2024",
    title: "My Game Web Application",
    description:
      "Full-stack application with authentication and user-specific data management for a game-focused experience.",
    bullets: [
      "Supported 50+ concurrent test users",
      "Created 8-12 REST endpoints for user data flows",
      "Reduced data load time by 25% with tighter integration",
    ],
    stack: "Angular / Express / MongoDB / Mongoose",
    href: "https://github.com/HaiDuongHuynh?tab=repositories",
  },
  {
    year: "2025",
    title: "Shopping Application System",
    description:
      "Responsive shopping platform with CRUD management for users and products plus faster client-server communication.",
    bullets: [
      "Managed 100+ product records",
      "Improved navigation and engagement with responsive UI work",
      "Reduced API response time by around 30%",
    ],
    stack: "Node / JavaScript / JSON / Git",
    href: "https://github.com/HaiDuongHuynh?tab=repositories",
  },
];

const experience = [
  "Guided students in MATLAB usage to strengthen applied math understanding",
  "Built confidence through targeted problem-solving practice",
  "Helped improve outcomes in Algebra and Calculus through focused tutoring",
  "Supported students in reaching and exceeding their grade goals",
];

const skills = [
  { label: "Languages", value: "Java, Python, C, C++, C#, JavaScript, HTML, CSS, MySQL" },
  { label: "Frameworks", value: "React, Node.js, Express, Angular, Spring Boot, Javax Swing" },
  {
    label: "Developer Tools",
    value: "Git, Docker, Postman, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse, Unity Engine",
  },
  { label: "Libraries", value: "pandas, NumPy, Matplotlib" },
];

function WindowBar({ label }) {
  return (
    <div className="window-bar">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
      <p>{label}</p>
    </div>
  );
}

export default function App() {
  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".window, .project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  function handleEmailClick(event) {
    event.preventDefault();

    window.location.href = "mailto:haiduonghuynhcs@gmail.com";

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText("haiduonghuynhcs@gmail.com")
        .then(() => {
          setEmailStatus("If your mail app did not open, the email address has been copied.");
        })
        .catch(() => {
          setEmailStatus("If your mail app did not open, use haiduonghuynhcs@gmail.com.");
        });
      return;
    }

    setEmailStatus("If your mail app did not open, use haiduonghuynhcs@gmail.com.");
  }

  return (
    <>
      <div className="scanlines" aria-hidden="true"></div>
      <div className="page-shell">
        <header className="hero window">
          <WindowBar label="SYSTEM://HAI.PORTFOLIO" />
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Software Developer // Full-Stack Builder</p>
              <h1>Hai Duong Huynh</h1>
              <p className="hero-copy">
                Computer science graduate student building clean APIs, practical full-stack products,
                and tools that make everyday workflows easier.
              </p>
              <div className="cta-row">
                <a className="button primary" href="#projects">View Projects</a>
                <a className="button" href="./assets/Hai_Duong_Huynh_Resume.pdf" target="_blank" rel="noreferrer">
                  Open Resume
                </a>
              </div>
            </div>
            <aside className="status-card">
              <p className="status-label">Now Loading</p>
              <ul>
                <li>MS in Computer Programming at MIU</li>
                <li>Java, Spring Boot, React, Node.js</li>
                <li>Interested in software engineering roles</li>
              </ul>
              <div className="contact-list">
                <a href="mailto:haiduonghuynhcs@gmail.com">haiduonghuynhcs@gmail.com</a>
                <a href="tel:7348814323">734-881-4323</a>
                <a href="https://linkedin.com/in/hai-duong-huynh/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/HaiDuongHuynh" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </aside>
          </div>
        </header>

        <main>
          <section className="grid-two">
            <article className="window panel">
              <WindowBar label="PROFILE.SYS" />
              <div className="panel-content">
                <h2>About Me</h2>
                <p>
                  I'm a developer with a strong Java and web background who enjoys turning business
                  rules into reliable software. My recent work spans REST APIs, authentication,
                  CRUD-heavy applications, and responsive interfaces.
                </p>
                <p>
                  I like projects where architecture, usability, and debugging all matter, especially
                  when a product has to feel both practical and polished.
                </p>
              </div>
            </article>

            <article className="window panel">
              <WindowBar label="EDUCATION.LOG" />
              <div className="panel-content timeline">
                <h2>Education</h2>
                {education.map((item) => (
                  <div className="timeline-item" key={item.school}>
                    <p className="item-meta">{item.dates}</p>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                    <span>{item.location}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="window panel" id="projects">
            <WindowBar label="PROJECTS.EXE" />
            <div className="panel-content">
              <div className="section-heading">
                <h2>Selected Projects</h2>
                <p>Built across Java, Spring Boot, Angular, MongoDB, Node, and desktop tooling.</p>
              </div>
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <p className="project-year">{project.year}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <span className="stack">{project.stack}</span>
                    <div className="project-links">
                      <a href={project.href} target="_blank" rel="noreferrer">View Code</a>
                    </div>
                  </article>
                ))}
              </div>
              <p className="project-note">
                Project links currently point to your GitHub repositories page so the cards stay clickable even
                before each project has its own public repo.
              </p>
            </div>
          </section>

          <section className="grid-two">
            <article className="window panel">
              <WindowBar label="EXPERIENCE.DAT" />
              <div className="panel-content timeline">
                <h2>Experience</h2>
                <div className="timeline-item">
                  <p className="item-meta">Sep 2021 - Apr 2022</p>
                  <h3>Math Tutor</h3>
                  <p>Texas Wesleyan University, Fort Worth, Texas</p>
                  <ul className="clean-list">
                    {experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="window panel">
              <WindowBar label="SKILLS.INI" />
              <div className="panel-content">
                <h2>Technical Skills</h2>
                {skills.map((skill) => (
                  <div className="skill-group" key={skill.label}>
                    <h3>{skill.label}</h3>
                    <p>{skill.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="window panel contact-panel">
            <WindowBar label="CONNECT.BAT" />
            <div className="panel-content contact-content">
              <div>
                <h2>Let's Build Something Useful</h2>
                <p>
                  I'm looking for opportunities where I can contribute across backend logic, APIs,
                  user experience, and practical product development.
                </p>
              </div>
              <div className="cta-row">
                <a
                  className="button primary"
                  href="mailto:haiduonghuynhcs@gmail.com"
                  onClick={handleEmailClick}
                >
                  Email Me
                </a>
                <a className="button" href="https://github.com/HaiDuongHuynh" target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
              {emailStatus ? <p className="helper-text">{emailStatus}</p> : null}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
