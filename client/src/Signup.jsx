import React, { useState } from 'react' 
import axios from 'axios'  
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => { 

    const[name ,setName] = useState()
    const[email ,setEmail] = useState()
    const[password ,setPassword] = useState()  
    const navigate= useNavigate()

    const handleSubmit=()=>{
        e.preventDefault() 
        axios.post('http://localhost:400/register',{name,email,password}) 
        .then(result=>{console.log(result) 
            navigate('/login')
        }) 
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header ">
                                <h3 class="text-center">Register</h3>
                            </div>
                            <div class="card-body">
                                <form  onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter your password"onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                   
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                                        <button type="submit" class="btn btn-primary">Register</button>
                                        <button type="button" class="btn btn-secondary">Login</button>
                                    </div>
                                </form>  
                                <p>Already Have an Account</p>
                                <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0'>
                                 Login 
                                 </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
