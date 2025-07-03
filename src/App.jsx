
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

function App() {
  return (
    <>
  <nav className="navbar">
  <div className="container navbar-content">
    <a className="navbar-brand" href="#">
      <img src="Logo 2.png" alt="Logo" className="logo-img" />
    </a>
    <a href="#tech-stacks" className="nav-link">Tech Stacks</a>
  </div>
</nav>


      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>Hi all, I'm Avanthikha 👋</h1>
          <p>
            A passionate Full Stack Software Developer 🚀 with experience in
            building dynamic and responsive web applications. I love crafting
            clean, intuitive interfaces that make digital experiences feel
            effortless. From thoughtful design to smooth user flows, I enjoy
            turning ideas into engaging and user-friendly visuals.
          </p>

          {/* Social Links */}
          <div className="social-icons">
            <a href="mailto:avanthikha11204@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/avanthikha-bharanedharan-3b9395259/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://dribbble.com/Avanthikha">
              <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="https://github.com/avi11204">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          {/* Resume Button */}
          <div className="hero-buttons">
            <a
              href="Avanthikha_BS-Resume.pdf"
              download
              className="btn-secondary"
            >
              Download my One-page Resume
            </a>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-inline">
            <h4>Tech Stack:</h4>
            <div className="tech-icons">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9d7qFetwQgwGOFzxkF4nmHisxiv9NeV-VmA&s" alt="C" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvGShLAJbL5g1fezQUTHYX7zWX7XRXmNv8A&s" alt="Python" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8msSdkuY3G81WM_FIzMhJi66jj1bXmAgyw&s" alt="React" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhdFgKwWT0BD32WAPhBz04H7yjV1VMu7axw&s" alt="Node.js" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2H0HmtuBChXQoGJVyb0ONYCiEb3JcKSfw0A&s" alt="Postman" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfPeVpXBDNMY2Mio-NN9lZSb9jOaw2CBs4Q&s" alt="Figma" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8IaYl3q9jl6N1QWTNYIAHH9nCX64xrLTuQ&s" alt="HTML" />
              <img src="https://static.vecteezy.com/system/resources/previews/051/336/381/non_2x/css-programming-blue-logo-free-png.png" alt="CSS" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr43QMyQ-AUmNMHhZWFR0KYbXcVNPiyHXtZA&s" alt="Docker" />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-right">
          <img
            src="https://i.pinimg.com/736x/c7/58/ab/c758abdc213e6482b4570475421f1be2.jpg"
            alt="Hero"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Avanthikha. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
