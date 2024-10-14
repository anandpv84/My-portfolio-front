import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addprojectApi, allprojectApi, deleteprojectApi } from '../Services/allApi';
import { Navigate } from 'react-router-dom';


function Dashboard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [token, settoken] = useState("")

  const [projectDetails, setprojectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  })

  useEffect(() => {
    settoken(sessionStorage.getItem("token"))
  }, [])


  const handleAdd = async (e) => {
    e.preventDefault();
    console.log("==get==")
    const { title, language, github, website, overview, projectImage } = projectDetails;
    if (!title || !language || !github || !website || !overview || !projectImage) {
      alert("please fill the form completly")
    } else {
      const reqBody = new FormData();
      reqBody.append('title', title)
      reqBody.append('language', language)
      reqBody.append('github', github)
      reqBody.append('website', website)
      reqBody.append('overview', overview)
      reqBody.append('projectImage', projectImage)

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }

      const result = await addprojectApi(reqBody, reqHeader)
      if (result.status === 200) {
        alert("project added successfully")
        handleClose()
      } else (
        alert(result.data || "Failed to add project")
      )
    }
  }


  const [username, setusername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("existinguser")) {
      const existinguserData = JSON.parse(sessionStorage.getItem("existinguser"))
      setusername(existinguserData.username)
    }
  }, [])



  const [allproject, setallproject] = useState([])

  const getallproject = async () => {
    const result = await allprojectApi();
    console.log(result)
    setallproject(result.data)
  }
  useEffect(() => {
    getallproject();
  }, [])


  const handledelete = async (id) => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await deleteprojectApi(id, reqHeader)
    if (result.status === 200) {
      alert("project deleted successfully")
      getallproject()

    }
  }



  return (
    <>


      <div class="m-5 container">
     
        <div class="row d-flex justify-content-between">
          <div class="col-md-5">
            <div className='d-flex justify-content-around '>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {
                  allproject?.length > 0 ?
                    allproject.slice().reverse().map((item) => (
                      <tbody>
                        <tr>
                          <td>{item.title}</td>
                          <td>
                            <button onClick={() => handledelete(item._id)} className="btn btn-outline-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    )) :
                    <p>No items</p>
                }
              </table>
            </div>
          </div>
          <div class=" col-md-5">
            <div class="container">
              <h3 class="mb-4">Add Projects</h3>
              <form>
                <div class="mb-2 form-group">

                  <input
                    value={projectDetails.title}
                    onChange={((e) => setprojectDetails({ ...projectDetails, title: e.target.value }))} type="text" class="form-control" id="name" placeholder="Enter your Project name" />
                </div>
                <div class="mb-2 form-group">

                  <input
                    value={projectDetails.language}
                    onChange={((e) => setprojectDetails({ ...projectDetails, language: e.target.value }))} type="text" class="form-control" id="language" placeholder="Enter the language used" />
                </div>
                <div class="mb-2 form-group">

                  <input
                    value={projectDetails.github}
                    onChange={((e) => setprojectDetails({ ...projectDetails, github: e.target.value }))} type="text" class="form-control" id="github" placeholder="Enter the GitHub link" />
                </div>
                <div class="mb-2 form-group">

                  <input
                    value={projectDetails.websit}
                    onChange={((e) => setprojectDetails({ ...projectDetails, website: e.target.value }))} type="text" class="form-control" id="website" placeholder="Enter the project website link" />
                </div>
                <div class="mb-2 form-group">

                  <textarea
                    value={projectDetails.overview}
                    onChange={((e) => setprojectDetails({ ...projectDetails, overview: e.target.value }))} class="form-control" id="overview" rows="4" placeholder="Enter project overview"></textarea>
                </div>

                <div class="mb-5 form-group">
                  <label htmlFor="projectImageupload">
                    <input
                      onChange={((e) => setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] }))} type="file" id="projectImageupload" />
                  </label>
                </div>

                <button onClick={handleAdd} type="submit" class="btn btn-primary">Add Project</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
