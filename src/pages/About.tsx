import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <h1>About Me</h1>
          <p className="about-intro">
            I'm a UX designer passionate about creating meaningful digital experiences
            that bridge the gap between user needs and business goals.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>My Approach</h2>
            <p>
              I believe great design starts with understanding people. Through research,
              empathy, and iteration, I craft solutions that are not only beautiful but
              functional and accessible. My process is collaborative, data-driven, and
              always focused on the end user.
            </p>
          </div>

          <div className="about-section">
            <h2>Experience</h2>
            <div className="experience-list">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Senior UX Designer</h3>
                  <span className="experience-period">2021 - Present</span>
                </div>
                <p className="experience-company">Tech Company Inc.</p>
                <p className="experience-description">
                  Leading design initiatives for enterprise products, conducting user research,
                  and collaborating with cross-functional teams to deliver exceptional experiences.
                </p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>UX Designer</h3>
                  <span className="experience-period">2018 - 2021</span>
                </div>
                <p className="experience-company">Design Studio</p>
                <p className="experience-description">
                  Worked on diverse projects for clients across industries, from startups to
                  Fortune 500 companies, focusing on mobile and web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Design</h3>
                <ul>
                  <li>User Research</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Visual Design</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Sketch</li>
                  <li>Miro</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Methods</h3>
                <ul>
                  <li>User Testing</li>
                  <li>A/B Testing</li>
                  <li>Journey Mapping</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
