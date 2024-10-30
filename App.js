import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './sita.png'; 


function Home() {
  return (
    <section className="home text-center bg-light py-5">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Sita Neupane Tamang</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Technical Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Relevant Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="profile">
              <img src={Profile} alt="profile" className="img-fluid rounded-circle mb-3" />
              <h2>Sita Neupane Tamang</h2>
              <p>Toronto, ON<br />
             linaneupane32@gmail.com<br />
              <a href="https://www.linkedin.com/in/sita-neupane">LinkedIn</a> | <a href="#">Portfolio</a></p>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="col-md-8">
            <div className="profile-details">
              <h2 id="profile">PROFILE</h2>
              <ul>
                <li>Passionate Computer Programming student with a focus on developing scalable, high-quality software solutions.</li>
                <li>Proficient in Java, JavaScript, React, and web development frameworks.</li>
                <li>Enthusiastic about collaborating across teams to deliver impactful projects and innovative solutions.</li>
                <li>Adept at quickly learning new technologies and adapting to evolving industry trends.</li>
              </ul>

              <h2 id="skills">TECHNICAL SKILLS</h2>
              <ul>
                <li>Programming Languages: Java, JavaScript, PHP, HTML, CSS</li>
                <li>Frameworks: React, Bootstrap, Spring Boot, Laravel</li>
                <li>Databases: MySQL, SQLite, SQL Server</li>
              </ul>

              <h2 id="projects">RELEVANT PROJECTS</h2>
              <ul>
                <li>Developed a responsive coffee shop web application with full CRUD operations for menu management.</li>
                <li>Implemented a weather forecast app using React and Bootstrap, fetching data from external APIs.</li>
              </ul>

              <h2 id="education">EDUCATION</h2>
              <p>Diploma in Computer Programming<br />
                Sault College of Applied Arts and Technology, Toronto, ON<br />
                Expected Graduation: December 2024<br />
                </p>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-light text-center py-3 mt-5">
        <p className="mb-0">&copy; 2024 Sita Neupane Tamang. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Home;
