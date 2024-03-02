import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

function Header() {

  const about = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link onClick={() => scrollToSection(about)} style={{ textDecoration: "none" }}><a class="nav-link" href="#about">About</a></Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }}><a class="nav-link" href="#">Experience</a></Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }}> <a class="nav-link" href="#">Projects</a></Link>
              </li>
              <li class="nav-item">
                <Link style={{ textDecoration: "none" }}><a class="nav-link" href="#">Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  )
}

export default Header