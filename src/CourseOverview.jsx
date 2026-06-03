import { useNavigate } from "react-router-dom";
function CourseOverview() {
    const navigate = useNavigate()
  return (
    <div className="course-page">

   <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>
      {/* HERO */}
      <section className="course-hero">

        <div className="course-hero-overlay"></div>

        <img
          src="/mernpic.jpg"
          alt="MERN Roadmap"
          className="course-banner"
        />

        <div className="course-hero-content">

          <span className="course-badge">
            🚀 MIO Full Stack Program
          </span>

          <h1>MERN STACK FULL STACK COURSE</h1>

          <p>
            Duration: <b>2.5 Months (75 Days)</b> | Commitment: <b>2 Hours / Day</b>
          </p>

          <div className="course-tags">
            <span>🔥 Project Based</span>
            <span>💻 Practical Learning</span>
            <span>🚀 Job Ready Skills</span>
          </div>

        </div>

      </section>

      {/* CONTENT */}
      <div className="course-container">

        {/* INTRO */}
        <div className="course-card">
          <h2>📘 Course Overview</h2>
          <p>
            This MERN Stack program takes you from beginner to advanced full stack developer.
            You will learn by building real-world projects with industry-level practices.
          </p>
        </div>

        {/* PHASES */}
        <div className="course-grid">

          <div className="course-card">
            <h2>📌 Phase 1: HTML & CSS</h2>
            <ul>
              <li>HTML5 Basics</li>
              <li>CSS Flexbox & Grid</li>
              <li>Responsive Design</li>
              <li>Netflix Clone Project</li>
              <li>Portfolio Website</li>
            </ul>
          </div>

          <div className="course-card">
            <h2>⚡ Phase 2: JavaScript</h2>
            <ul>
              <li>Variables, Functions, Objects</li>
              <li>DOM Manipulation</li>
              <li>Async JS & Fetch API</li>
              <li>To-Do App + Weather App</li>
            </ul>
          </div>

          <div className="course-card">
            <h2>⚛️ Phase 3: React.js</h2>
            <ul>
              <li>Components & JSX</li>
              <li>Hooks (useState, useEffect)</li>
              <li>React Router</li>
              <li>Context API</li>
            </ul>
          </div>

          <div className="course-card">
            <h2>🔥 Phase 4: Firebase & Hosting</h2>
            <ul>
              <li>Firebase Auth</li>
              <li>Firestore Database</li>
              <li>Git & GitHub</li>
              <li>Deploy on Netlify/Vercel</li>
            </ul>
          </div>

          <div className="course-card">
            <h2>🧠 Phase 5: Backend</h2>
            <ul>
              <li>Node.js & Express.js</li>
              <li>MongoDB & Mongoose</li>
              <li>JWT Authentication</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="course-card highlight">
            <h2>🚀 Phase 6: Final Project</h2>
            <ul>
              <li>MERN Integration</li>
              <li>Major Project Build</li>
              <li>Mini Hackathon</li>
              <li>Deployment</li>
            </ul>
          </div>

        </div>

        {/* REWARDS */}
      {/* REWARDS */}
<div className="course-card reward">
  <h2>🏆 Mini Hackathon Rewards</h2>
  <p>🥇 ₹3000 | 🥈 ₹2000 | 🥉 ₹1000</p>
</div>

{/* ROADMAP IMAGE */}
<div className="course-card roadmap-section">
  <h2>🗺️ Complete Course Roadmap</h2>

  <p>
    Below is the complete visual roadmap of the MERN Stack course.
    It shows the learning journey from HTML & CSS to Full Stack
    MERN Development and Final Hackathon Project.
  </p>

  <div className="roadmap-image-wrapper">
    <img
      src="/MernStackCourseRoadMap.png"
      alt="MERN Stack Course Roadmap"
      className="roadmap-image"
    />
  </div>
</div>


      </div>

    </div>
  );
}

export default CourseOverview;