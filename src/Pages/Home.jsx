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

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(about)} style={{ textDecoration: "none" }}><a class="nav-link" href="#about">About</a></Link>
                </li>
                <li class="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(experience)} style={{ textDecoration: "none" }}><a class="nav-link" href="#">Experience</a></Link>
                </li>
                <li class="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(project)} style={{ textDecoration: "none" }}> <a class="nav-link" href="#">Projects</a></Link>
                </li>
                <li class="fw-bold p-1 nav-item">
                  <Link onClick={() => scrollToSection(contact)} style={{ textDecoration: "none" }}><a class="nav-link" href="#">Contact</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </div>


      <div className='mt-5 mb-5'>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-end col-md-6">
              <div class=" p-3">
                <img style={{ borderRadius: '50%' }} width={"350px"} class="img-fluid" src="Assets/main.jpg" alt="" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-start  col-md-6">
              <div class=" p-3">
                <p>Hello, I'm</p>
                <h2>Anand pv</h2>
                <p>Web Developer</p>
              </div>
            </div>
            <div className='text-center'><button className='m-2 p-2' style={{ backgroundColor: "transparent" }}><a style={{textDecoration:"none", color:"black"}} href="https://drive.google.com/file/d/1ekSzO8_X4SvR21It0YxHQnVBOks1QGmy/view?usp=sharing">Download CV</a></button></div>
          </div>
        </div>
      </div>

      <div ref={about} className=' mb-5 mt-5'>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class=" p-3">
                <img width={"450px"} style={{ borderRadius: '90px' }} class="img-fluid" src="Assets/b&w.jpg" alt="" />
              </div>
            </div>
            <div class="d-flex col-md-6">
              <div class="d-flex align-items-center p-3">
                <p>I AM A DEVELOPER AND UX/UI DESIGNER BASED IN KERALA.AND HARD WORKING, HONEST INDIVIDUAL AND A GOOD TIMEKEEPER, ALWAYS WILLING TO LEARN NEW SKILLS.ALSO FRIENDLY,
                  HELPFUL AND POLITE AND HAVE A GOOD SENSE OF HUMOUR. I AM ABLE TO WORK INDEPENDENTLY IN BUSY ENVIRONMENTS AND ALSO WITHIN A TEAM SETTING.
                  AND ABLE TO LISTEN EFFECTIVELY WHEN SOLVING PROBLEMS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='mb-2 pb-5 mt-5 pt-5' ref={experience}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="text-center p-3">
                <h2>Frontend Development</h2>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-4">
                          <div class="mt-3 p-3 mb-3">HTML</div>
                        </div>
                        <div class="col-4">
                          <div class="mt-3 p-3 mb-3">CSS</div>
                        </div>
                        <div class="col-4">
                          <div class="mt-3 p-3 mb-3">JAVASCRIPT</div>
                        </div>
                      </div>
                      <div class="row">

                        <div class="col-4">
                          <div class=" p-3 mb-3">REACT JS</div>
                        </div>
                        <div class="col-4">
                          <div class=" p-3 mb-3">ANGULAR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="text-center p-3">
                <h2>Backend Development</h2>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <div class="mt-3 p-3 mb-3"><img src="" alt="" />MONGO DB</div>
                        </div>
                        <div class="col-6">
                          <div class="mt-3 p-3 mb-3">NODE JS</div>
                        </div>
                      </div>
                      <div class="row">

                        <div class="col-4">
                          <div class=" p-3 mb-3"></div>
                        </div>
                        <div class="col-4">
                          <div class=" p-3 mb-3">EXPRESS</div>
                        </div>
                        <div class="col-4">
                          <div class=" p-3 mb-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //------------------------------------// */}

      <div className='p-3 mt-3 mb-4' ref={project}>

        <div class="mb-4 d-flex justify-content-center container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="fs-4 fw-bold custom-div">My all Projects</div>
            </div>
          </div>
        </div>

        <div className='scrollbg p-1 row'>
          <div className='posters' style={{height:"auto"}}>
            {
              allproject.length > 0 ?
                allproject.map((item) => (
                  <div className=' m-2 pt-3 mb-1 me-4 ms-5 col-md-3 col-6  col-sm-5 col-xs-6 poster'>
                    <img src={`${BASE_URL}/uploads/${item.projectImage}`} height={'190px'} width={'100%'} alt="" />
                    <div className=' ms-1 me-2 mt-2'>
                      <h6 class="">Project name: {item.title}</h6>
                      <p className='p-0 m-0'>Used Technologies: {item.language}</p>
                      <p className='p-0 m-0'>Github link: <a style={{textDecoration:"none"}} href={item.github}>{item.github}</a></p>
                      <p className='p-0 m-0'>Websit link: <a style={{textDecoration:"none"}} href={item.website}>{item.website}</a></p>
                      <p className='p-0 m-0'>Description: {item.overview}</p>
                    </div>
                  </div>


                )) :
                <p>No projects</p>
            }
          </div>
        </div>
      </div>
      {/* //------------------------------------// */}

      {/* //------------------------------------// */}

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


      {/* =============== */}

      <Footer />

    </>

  )
}

export default Home