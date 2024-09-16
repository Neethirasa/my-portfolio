import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons'; // Import icons
import emailjs from 'emailjs-com'; // Assuming you're using EmailJS
import './Home.css';

// Import images from assets
import shot1 from '../assets/images/shot1.png';
import shot2 from '../assets/images/shot2.png';
import shot3 from '../assets/images/shot3.png';
import shot4 from '../assets/images/shot4.png';
import shot5 from '../assets/images/shot5.png';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7mza3rb', 'template_sgg90wa', e.target, 'NR1gUyinW6lpCxKFX')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      <section id="hero" className="hero-like-section"> {/* Hero Section */}
        <h1>Hello, I'm Nivethikan Neethirasa</h1>
        <p>
          <FontAwesomeIcon icon={faLaptopCode} /> Software Engineer |{' '}
          <FontAwesomeIcon icon={faCode} /> Full-Stack Developer |{' '}
          <FontAwesomeIcon icon={faServer} /> Cloud Enthusiast
        </p>
        <div className="contact-links">
  <a
    href="http://linkedin.com/in/nivethikan"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button linkedin-button"
  >
    <i className="fab fa-linkedin"></i> LinkedIn
  </a>
  <a
    href="https://github.com/Neethirasa"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button github-button"
  >
    <i className="fab fa-github"></i> GitHub
  </a>
</div>
      </section>

      <section id="about" className="hero-like-section"> {/* About Section */}
        <h1>Welcome to My Portfolio!</h1>
        <p>Hello! I’m Nivethikan Neethirasa, a dedicated Software Engineer with expertise in building and optimizing interactive, user-centric applications. Currently, I am enhancing software solutions at Bank of Montreal with cutting-edge technology and agile methodologies. Dive into my portfolio to see my projects, the skills I've honed, and the technologies I master.</p>
      </section>

      <section id="projects" className="hero-like-section"> {/* Projects Section */}
        <h2>Projects</h2>
        <div className="projects-container">

          {/* Widget Wise Project */}
          <div className="project-card detailed">
            <h3>Widget Wise (iOS App)</h3>
            <p>Widget Wise allows users to display inspirational quotes on their iOS home screens. It features real-time synchronization with Firebase Cloud Firestore for seamless quote updates and customization, including sharing quotes with friends via Cloud Functions.</p>
            <p><strong>Technologies:</strong> SwiftUI, Firebase, Cloud Functions</p>
            
            <div className="project-images">
              <img src={shot1} alt="Widget Wise App Screenshot 1" onClick={() => openModal(shot1)} />
              <img src={shot2} alt="Widget Wise App Screenshot 2" onClick={() => openModal(shot2)} />
              <img src={shot3} alt="Widget Wise App Screenshot 3" onClick={() => openModal(shot3)} />
              <img src={shot4} alt="Widget Wise App Screenshot 4" onClick={() => openModal(shot4)} />
              <img src={shot5} alt="Widget Wise App Screenshot 5" onClick={() => openModal(shot5)} />
            </div>

            <div className="project-links">
              <a href="https://apps.apple.com/ca/app/widget-wise/id6479582377" target="_blank" rel="noopener noreferrer" className="app-store-button">Download on the App Store</a>
              <a href="https://github.com/Neethirasa/WidgetWise" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
            </div>
          </div>

          {/* Micro-Current Technology (MCT) Device Simulator Project */}
          <div className="project-card detailed">
            <h3> <br></br>Micro-Current Technology (MCT) Device Simulator</h3>
            <p>Developed a pain-alleviating device with micro-current technology for precise electrode application, ensuring 98% accuracy. Real-time feedback mechanisms and data logging integration enhanced the success rates by 25%.</p>
            <p><strong>Technologies:</strong> C++, Real-Time Feedback Systems</p>
            <div className="project-links">
              <a href="https://github.com/Neethirasa/Cerebral-Electricity-Simulator" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
            </div>
          </div>

          {/* TortoiseHareRace Project */}
          <div className="project-card detailed">
            <h3><br></br>TortoiseHareRace</h3>
            <p>A simulation where Tortoise and Hare race to retrieve an emerald while dodging the Dragon and its hitmen. The race features dynamic interactions between the entities, written in C++.</p>
            <p><strong>Technologies:</strong> C++</p>
            <div className="project-links">
              <a href="https://github.com/Neethirasa/TortoiseHareRace" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
            </div>
          </div>

          {/* GreenScreen-FX Project */}
          <div className="project-card detailed">
            <h3><br></br>GreenScreen-FX</h3>
            <p>Python application that merges two images by replacing the green screen in the main picture with the selected background image. Perfect for green screen effects using Python.</p>
            <p><strong>Technologies:</strong> Python</p>
            <div className="project-links">
              <a href="https://github.com/Neethirasa/GreenScreen-FX" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
            </div>
          </div>

        </div>
      </section>

      <section id="skills" className="hero-like-section"> {/* Skills Section */}
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li>Java</li><li>C++</li><li>Python</li><li>JavaScript</li><li>SQL</li><li>COBOL</li><li>HTML & CSS</li>
              <li>Node.js</li><li>React</li><li>Angular</li><li>SwiftUI</li><li>Firebase</li>
              <li>AWS (EC2, RDS, IAM, ECS)</li><li>Git & GitHub</li><li>Docker</li>
              <li>Jenkins & TravisCI</li><li>Terraform & AWS CDK</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              <li>Agile Methodology</li><li>Team Collaboration</li><li>Leadership</li><li>Problem-Solving</li>
              <li>Critical Thinking</li><li>Mentoring</li><li>Communication Skills</li>
              <li>Continuous Learning</li><li>Time Management</li><li>Creative and Analytical Thinking</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="hero-like-section"> {/* Contact Section */}
        <h2>Contact</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <div className="contact-links">
  <a
    href="http://linkedin.com/in/nivethikan"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button linkedin-button"
  >
    <i className="fab fa-linkedin"></i> LinkedIn
  </a>
  <a
    href="https://github.com/Neethirasa"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button github-button"
  >
    <i className="fab fa-github"></i> GitHub
  </a>
</div>
      </section>

      {/* Modal for displaying larger images */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged screenshot" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;