import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiJavascript,
  SiFirebase,
  SiExpress,
  SiMongodb
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <div className="logo-wrapper">
            <img src="/miologo.png" alt="MIO Logo" />
          </div>

          <span className="badge">
            MIO - Modern Institute Of Computers
          </span>

       <h1>
  MERN Stack Course
  <span><br />Notes & Resources</span>
</h1>

          <p>
            Access daily class notes, assignments, practical examples,
            resources and complete learning materials in one place.
            Stay updated with every lecture and continue learning
            beyond the classroom.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={()=> navigate("/allnoteshere")}>
              View Notes
            </button>

            <button onClick={()=> navigate("/courseoverview")} className="secondary-btn">
              Course Overview
            </button>
          </div>
        </div>

        <div className="hero-card">

          <h3>Course Includes</h3>

          <div className="feature-item">
            <span>📘</span>
            <p>Daily Notes</p>
          </div>

          <div className="feature-item">
            <span>💻</span>
            <p>Code Examples</p>
          </div>

          <div className="feature-item">
            <span>📝</span>
            <p>Assignments</p>
          </div>

          <div className="feature-item">
            <span>🚀</span>
            <p>Projects & Practice</p>
          </div>

          <div className="feature-item">
            <span>🎯</span>
            <p>Industry Ready Skills</p>
          </div>

        </div>

      </section>

      {/* Technologies Section */}

      <section className="technologies">

        <h2>Technologies Covered</h2>

   <div className="tech-grid">

  <div className="tech-card">
    <FaHtml5 className="tech-icon" />
    <span>HTML5</span>
  </div>

  <div className="tech-card">
    <FaCss3Alt className="tech-icon" />
    <span>CSS3</span>
  </div>

  <div className="tech-card">
    <SiJavascript className="tech-icon" />
    <span>JavaScript</span>
  </div>

  <div className="tech-card">
    <FaReact className="tech-icon" />
    <span>React.js</span>
  </div>

  <div className="tech-card">
    <SiFirebase className="tech-icon" />
    <span>Firebase</span>
  </div>

  <div className="tech-card">
    <FaNodeJs className="tech-icon" />
    <span>Node.js</span>
  </div>

  <div className="tech-card">
    <SiExpress className="tech-icon" />
    <span>Express.js</span>
  </div>

  <div className="tech-card">
    <SiMongodb className="tech-icon" />
    <span>MongoDB</span>
  </div>

</div>

      </section>

      {/* About */}

      <section className="about-course">

        <h2>Why Learn MERN Stack?</h2>

        <p>
          MERN Stack is one of the most popular technologies for building
          modern full-stack web applications. This course helps students
          learn frontend, backend, databases and deployment through
          practical examples and real-world projects.
        </p>

      </section>

    </div>
  );
}

export default Home;