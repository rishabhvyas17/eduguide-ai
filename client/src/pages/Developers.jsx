import React from 'react';
import { useNavigate } from 'react-router-dom';

const Developers = () => {
  const navigate = useNavigate();

  // REPLACE THIS DATA WITH YOUR ACTUAL DEVELOPER INFO
  const developers = [
    {
      name: "Snehal Kushwah",
      email: "Snehalkushwah822@gmail.com", 
      location: "Indore, India",
      photo: "/images/dev-1.jpeg", // Place your image in client/public/images/
      initials: "SK",
      links: {
        github: "https://github.com/http-snehal",
        linkedin: "https://www.linkedin.com/in/snehal-kushwah-492a70326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/kushwah_snehal?t=E81yuMpcQL-mcgfUJFT1LA&s=09",
        portfolio: "https://tenor.com/view/pig-wink-gif-11492850",

        
      }
    },
    {
      name: "Rishabh Malviya",
      email: "Malviyarishabh88@gmail.com",
      location: "Indore, India", 
      photo: "/images/dev-2.jpeg",
      initials: "RM",
      links: {
        github: "https://github.com/rishabhvyas17",
        linkedin: "https://www.linkedin.com/in/rishabh-vyas-/",
        twitter: "https://x.com/_rishabh_vyas_",
        portfolio: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2pjbXJmY2w3a242bHo5OTB6cWk4bTFrajQ4c2E4OGxibGE1Zjk5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dZ3nw7fLcJ47SS8f2J/giphy.gif",
        
      }
    },
    {
      name: "Naveshwar Pathak", 
      email: "krishna191105@gmail.com",
      location: "Indore, India",
      photo: "/images/dev-3.jpeg",
      initials: "KS", 
      links: {
        github: "https://github.com/KRISHNASON1",
        linkedin: "https://www.linkedin.com/in/krishna-soni-834284304/",
        twitter: "https://x.com/KrishnaSoni_191",
        
      }
    },
    {
      name: "Bhanu Teja", 
      email: "krishna191105@gmail.com",
      location: "Indore, India",
      photo: "/images/dev-4.jpeg",
      initials: "BH", 
      links: {
        github: "https://share.google/d42knwZ4JS9guBXXB",
        linkedin: "https://www.linkedin.com/in/bhanu-thota-2338a3331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "",
        
      }
    },
    {
      name: "Pavni", 
      email: "",
      location: "Indore, India",
      photo: "/images/dev-5.jpeg",
      initials: "BH", 
      links: {
        github: "https://github.com/KRISHNASON1",
        linkedin: "https://www.linkedin.com/in/krishna-soni-834284304/",
        twitter: "",
        
      }
    },
    {
      name: "Sameer Akthar", 
      email: "samirakhtar760@gmail.com",
      location: "Indore, India",
      photo: "/images/dev-6.jpeg",
      initials: "KS", 
      links: {
        github: "https://github.com/Sameergit23",
        linkedin: "https://www.linkedin.com/in/saim23?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "",
        
      }
    }
    
  ];

  // REPLACE WITH YOUR MENTOR INFO
  const mentor = {
    name: "Sudha Kore",
    role: "Technical Advisor & Guide", 
    location: "Indore, India",
    photo: "/images/mentor-1.jpeg",
    initials: "SK",
    links: {
      linkedin: "https://m.media-amazon.com/images/I/81ah3je0egL._SL1500_.jpg",
      email: ""
    }
  };

  // REPLACE WITH YOUR FACULTY INFO
  const faculty = [
    {
      name: "Prince Yadav",
      role: "",
      location: "Mumbai & Indore, India",
      photo: "/images/faculty-1.jpeg", 
      initials: "PY",
      links: {
        linkedin: "https://www.linkedin.com/in/prince-yadav-810-/",
        email: "Princeyadav810py@gmail.com"
      }
    },
    {
      name: "Krishna Soni",
      role: "", 
      location: "Harda & Indore, India",
      photo: "/images/faculty-2.jpeg",
      initials: "KS", 
      links: {
        linkedin: "https://www.linkedin.com/in/krishna-soni-834284304/",
        email: "krishna191105@gmail.com"
      }
    }
  ];

  const techStack = [
    "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", 
    "OpenAI API", "WhatsApp API", "JWT", "Mongoose", "GitHub", "AWS"
  ];

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #0a0a0a;
          color: #ffffff;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .gradient-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.25rem;
          color: #a1a1aa;
          font-weight: 300;
        }

        .developers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .developer-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .developer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .developer-card:hover::before {
          opacity: 1;
        }

        .developer-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.1);
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
        }

        .profile-info h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .profile-info .email {
          color: #a1a1aa;
          font-size: 1rem;
          word-break: break-word;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #a1a1aa;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .location svg {
          width: 16px;
          height: 16px;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .social-link:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
        }

        .social-link svg {
          width: 18px;
          height: 18px;
        }

        .about-project {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          margin-bottom: 5rem;
        }

        .about-project h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-project p {
          color: #d4d4d8;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .tech-badge {
          padding: 0.5rem 1rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          color: #c4b5fd;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .mentor-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .mentor-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 3rem;
          color: #ffffff;
        }

        .mentor-card {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .mentor-card:hover {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 15px 30px rgba(139, 92, 246, 0.1);
        }

        .mentor-profile {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .mentor-photo {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .mentor-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 16px;
        }

        .mentor-info h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #ffffff;
        }

        .mentor-info .role {
          color: #a1a1aa;
          font-size: 0.95rem;
        }

        .mentor-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .consulting-faculty-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .consulting-faculty-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 3rem;
          color: #ffffff;
        }

        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .faculty-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .faculty-card:hover {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 15px 30px rgba(139, 92, 246, 0.1);
        }

        .faculty-profile {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .faculty-photo {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .faculty-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 16px;
        }

        .faculty-info h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #ffffff;
        }

        .faculty-info .role {
          color: #a1a1aa;
          font-size: 0.9rem;
        }

        .faculty-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .back-section {
          text-align: center;
          margin-top: 4rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.2s ease;
          font-size: 1rem;
          border: none;
          cursor: pointer;
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .developers-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .developer-card {
            padding: 2rem;
          }

          .profile-section {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .about-project {
            padding: 2rem;
          }

          .mentor-profile, .faculty-profile {
            flex-direction: column;
            text-align: center;
          }

          .faculty-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .faculty-card {
            padding: 2rem;
          }
        }
      `}</style>

      <div className="gradient-bg"></div>
      
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Meet the Developers</h1>
          <p>The passionate minds behind EduGuide AI</p>
        </div>

        {/* Developer Cards */}
        <div className="developers-grid">
          {developers.map((developer, index) => (
            <div key={index} className="developer-card">
              <div className="profile-section">
                <div className="profile-photo">
                  <img 
                    src={developer.photo} 
                    alt={developer.initials}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
                    {developer.initials}
                  </div>
                </div>
                <div className="profile-info">
                  <h3>{developer.name}</h3>
                  <p className="email">{developer.email}</p>
                </div>
              </div>
              
              <div className="location">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {developer.location}
              </div>
              
              <div className="social-links">
                <a href={developer.links.github} className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href={developer.links.linkedin} className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href={developer.links.twitter} className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X.com
                </a>
                <a href={developer.links.portfolio} className="social-link">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  Portfolio
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* About Project Section */}
        <div className="about-project">
          <h2>About EduGuide AI</h2>
          <p>
            EduGuide AI is a revolutionary holistic student evaluation and career guidance platform designed to transform K-12 education. By combining AI-powered assessments with human expertise, we provide comprehensive insights into academic performance, aptitude development, and career pathways.
          </p>
          <p>
            Our platform leverages cutting-edge artificial intelligence to conduct monthly aptitude assessments while integrating seamlessly with traditional academic evaluation methods. The system generates detailed reports and career recommendations through WhatsApp, making educational insights accessible to all stakeholders.
          </p>
          <p>
            Beyond traditional grading, EduGuide AI focuses on holistic development by measuring logical reasoning, problem-solving abilities, communication skills, and personal interests through structured Personal Interview sessions conducted by trained counselors.
          </p>
          
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Mentor Section */}
        <div className="mentor-section">
          <h2>Our Mentor</h2>
          <div className="mentor-card">
            <div className="mentor-profile">
              <div className="mentor-photo">
                <img 
                  src={mentor.photo} 
                  alt={mentor.initials}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
                  {mentor.initials}
                </div>
              </div>
              <div className="mentor-info">
                <h3>{mentor.name}</h3>
                <p className="role">{mentor.role}</p>
              </div>
            </div>
            
            <div className="location" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {mentor.location}
            </div>
            
            <div className="mentor-links">
              <a href={mentor.links.linkedin} className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href={`mailto:${mentor.links.email}`} className="social-link">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Consulting Faculty Section */}
        <div className="consulting-faculty-section">
          <h2>Consulting Faculty</h2>
          <div className="faculty-grid">
            {faculty.map((member, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-profile">
                  <div className="faculty-photo">
                    <img 
                      src={member.photo} 
                      alt={member.initials}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
                      {member.initials}
                    </div>
                  </div>
                  <div className="faculty-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                  </div>
                </div>
                
                <div className="location" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {member.location}
                </div>
                
                <div className="faculty-links">
                  <a href={member.links.linkedin} className="social-link">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href={`mailto:${member.links.email}`} className="social-link">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="back-section">
          <button onClick={handleBackToHome} className="back-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Developers;