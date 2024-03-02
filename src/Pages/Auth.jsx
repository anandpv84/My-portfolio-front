import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../Services/allApi';

function Auth() {

  const [logged, setlogged] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setlogged(true)
    }
  }, [])

  const navigate = useNavigate();
  const [userData, setuserdata] = useState({
    username: "",
    password: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    const { username, password } = userData;
    if (!username || !password) {
      alert("please fill the form completely")
    } else {
      const result = await loginApi(userData)
      if (result.status === 200) {
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token", result.data.token)
        alert("Admin successfully Logged")
        setuserdata({
          username: "",
          password: ""
        })
        navigate('/dashboard')

      } else {
        alert(result.response.data)
      }

    }
  }

  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mt-5">
            <div className="card shadow" style={{ border: 'none', borderRadius: '10px' }}>
              <div className="card-body" style={{ padding: '40px' }}>
                <h3 className="text-center" style={{ color: '#333', fontSize: '24px', marginBottom: '30px' }}>Login</h3>
                <form>
                  <div className="mb-3 form-group">
                    <input value={userData.username} onChange={(e) => setuserdata({ ...userData, username: e.target.value })} type="text" className="form-control" id="username" placeholder="Username" style={{ borderRadius: '20px' }} />
                  </div>
                  <div className="mb-3 form-group">
                    <input value={userData.password} onChange={(e) => setuserdata({ ...userData, password: e.target.value })} type="password" className="form-control" id="password" placeholder="Password" style={{ borderRadius: '20px' }} />
                  </div>
                  <button onClick={handleLogin} type="submit" className="btn btn-outline-dark btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Auth