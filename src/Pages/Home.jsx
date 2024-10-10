/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import '../Pages/allcss.css'
import { allprojectApi } from '../Services/allApi';
import { BASE_URL } from '../Services/baseurl';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const project = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [allproject, setallproject] = useState([])

  const getallproject = async () => {
    const result = await allprojectApi();
    console.log(result)
    setallproject(result.data)
  }
  useEffect(() => {
    getallproject();
  }, [])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(about)} style={{ textDecoration: "none" }}><a className="nav-link" href="#about">About</a></Link>
                </li>
                <li className="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(experience)} style={{ textDecoration: "none" }}><a className="nav-link" href="#">Experience</a></Link>
                </li>
                <li className="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(project)} style={{ textDecoration: "none" }}> <a className="nav-link" href="#">Projects</a></Link>
                </li>
                <li className="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(contact)} style={{ textDecoration: "none" }}><a className="nav-link" href="#">Contact</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </div>


      <div className='mt-5 mb-5'>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-end col-md-6">
              <div className=" p-3">
                <img style={{ borderRadius: '50%' }} width={"350px"} className="img-fluid" src="Assets/main.jpg" alt="" />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start  col-md-6">
              <div className=" p-3">
                <p>Hello, I'm</p>
                <h2>Anand pv</h2>
                <p>Web Developer</p>
              </div>
            </div>
            <div className='text-center'><button className='m-2 p-2' style={{ backgroundColor: "transparent" }}><a style={{ textDecoration: "none", color: "black" }} href="https://drive.google.com/file/d/1ekSzO8_X4SvR21It0YxHQnVBOks1QGmy/view?usp=sharing">Download CV</a></button></div>
          </div>
        </div>
      </div>

      <div ref={about} className=' mb-5 mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className=" p-3">
                <img width={"450px"} style={{ borderRadius: '90px' }} className="img-fluid" src="Assets/b&w.jpg" alt="" />
              </div>
            </div>
            <div className="d-flex col-md-6">
              <div className="d-flex align-items-center p-3">
                <p>I AM A DEVELOPER AND UX/UI DESIGNER BASED IN KERALA.AND HARD WORKING, HONEST INDIVIDUAL AND A GOOD TIMEKEEPER, ALWAYS WILLING TO LEARN NEW SKILLS.ALSO FRIENDLY,
                  HELPFUL AND POLITE AND HAVE A GOOD SENSE OF HUMOUR. I AM ABLE TO WORK INDEPENDENTLY IN BUSY ENVIRONMENTS AND ALSO WITHIN A TEAM SETTING.
                  AND ABLE TO LISTEN EFFECTIVELY WHEN SOLVING PROBLEMS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='mb-2 pb-5 mt-5 pt-5' ref={experience}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <h2 className="mb-4">Frontend Development</h2>
              <div className="d-flex flex-wrap justify-content-around">
                <div className="skill-card">
                  <p className="skill-name">HTML</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">CSS</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">Bootstrap</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">Tailwind</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">JavaScript</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">React JS</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">Angular</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <h2 className="mb-4">Backend Development</h2>
              <div className="d-flex flex-wrap justify-content-around">
                <div className="skill-card d-flex align-items-center">
                  <p className="skill-name">MongoDB</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">Node JS</p>
                </div>
                <div className="skill-card">
                  <p className="skill-name">Express</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='mb-4' ref={project}>
        <div className="scrollbg pt-4 pb-4 row m-0">
          <div className="mb-4 d-flex justify-content-center container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="fs-4 fw-bold custom-div">My Projects</div>
              </div>
            </div>
          </div>
          <div className="posters d-flex flex-wrap justify-content-center">
            {allproject.length > 0 ? (
              allproject.slice().reverse().map((item) => (
                <div
                  className="project-card"
                  style={{ maxWidth: "300px", margin: "15px" }}
                  key={item._id}
                >
                  <img
                    src={`${BASE_URL}/uploads/${item.projectImage}`}
                    alt={item.title}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                  <div className="project-info ms-1 me-2 mt-2">
                    <h6>Project name: {item.title}</h6>
                    <p className="p-0 m-0">Used Technologies: {item.language}</p>
                    <p className="p-0 m-0">
                      Github link: <a href={item.github}>{item.github}</a>
                    </p>
                    <p className="p-0 mb-2">
                      Website link: <a href={item.website}>{item.website}</a>
                    </p>
                    <p className="p-0 m-0 description">Description: {item.overview}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects</p>
            )}
          </div>
        </div>
      </div>

      <div ref={contact} className='mt-5 mb-5'>
        <div class="container">
          <div class="d-flex justify-content-center row text-center">
            <div class=" col-md-2 col-2 col-lg-1">
              <div class="custom-div"><a href="https://github.com/anandpv84"><img src="Assets/github.png" alt="" /></a></div>
            </div>
            <div class="col-md-2 col-2 col-lg-1">
              <div class="custom-div"><a href="https://www.linkedin.com/in/pvanand84"><img src="Assets/likdin.png" alt="" /></a></div>
            </div>
            <div class="col-md-2 col-2 col-lg-1">
              <div class="custom-div"><a href="https://anandpv84.github.io/anandpersonal/"><img src="Assets/web.png" alt="" /></a></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>

  )
}

export default Home
