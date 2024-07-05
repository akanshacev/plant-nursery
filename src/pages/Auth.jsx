import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { userRegister,userLogin } from '../services/allApis';
import { useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '../contextApi/AuthContext';
import { useContext } from 'react';

function Auth() {

  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)

  const [status, setStatus] = useState(true)
  const [data, setData] = useState({
    username: "", password: "", email: ""
  })
  const navigate=useNavigate()
  // console.log(data)

  const changeStatus = () => {
    setStatus(!status)
  }

  const handleRegister = async () => {
    console.log(data);
    const { username, password, email } = data
    if (!username || !password || !email) {
      toast.warning("Invalid Details ....!!Enter form details properly")
    }
    else {
      console.log(data);
      const result = await userRegister(data)
      console.log(result);
      if (result.status == 201) {
        toast.success("User Registration Successfu!!")
        setData({ username: "", password: "", email: "" })
        setStatus(true)
      }
      else {
        toast.error(result.response.data)
      }
    }
  }

  const handleLogin=async()=>{
    const {email,password}=data
    if(!email || ! password){
      toast.warning("Invalid Details ....!!Enter form details properly")
    }
    else{
      const result=await userLogin({email,password})
      console.log(result);
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("username",result.data.user)
      toast.success("Login Successfully!!")
      setAuthStatus(true)
      if(email=="admin@gmail.com" && password==="123"){
        navigate('/adash')
      }
      else{
        navigate('/udash')
      }
      
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
        <div className='shadow border w-50 p-4'>
          <Row>
            <Col sm={12} md={6}>
              <img src="https://e7.pngegg.com/pngimages/839/930/png-clipart-arecaceae-plant-leaf-palm-branch-potted-green-plants-green-leafed-plant-and-white-plant-pot-plant-stem-green-apple-thumbnail.png" className='img-fluid' alt="" />
            </Col>
            <Col sm={12} md={6}>
              {
                status ?
                  <h3>Login</h3>
                  :
                  <h3>Register</h3>
              }


              <div className='mt-4'>
                {
                  !status &&
                  <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
                    <Form.Control type="email" placeholder="username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                  </FloatingLabel>
                }


                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                </FloatingLabel>
              </div>
              <div className='mt-3 d-flex justify-content-between'>
                {
                  status ?
                    <button className='btn btn-success' onClick={handleLogin}>
                      <span>Login</span>
                    </button>
                    :
                    <button className='btn btn-success' onClick={handleRegister}>
                      <span>Register</span>
                    </button>
                }


                <button className='btn btn-link' onClick={changeStatus}>
                  {
                    status ?
                      <span>Are You New ?</span>
                      :
                      <span>Alreay A User ?</span>

                  }

                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Auth