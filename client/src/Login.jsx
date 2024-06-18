import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = () => {
    e.preventDefault()
    axios.post('http://localhost:400/login', { name, email, password })
      .then(result => {
        console.log(result)
        if (result.data === "success") {
          navigate('/home')
        }

      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header ">
                <h3 class="text-center">Login</h3>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div class="d-grid gap-2 d-md-flex justify-content-md-end ">

                    <button type="button" class="btn btn-secondary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Login
