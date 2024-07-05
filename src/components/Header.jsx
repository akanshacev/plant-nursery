import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '../contextApi/AuthContext';
import { useContext } from 'react';

function Header() {

  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)

  const navigate=useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    navigate('/')
    setAuthStatus(false)
  }
  return (
    <>
     <Navbar className="bg-body-tertiary">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-leaf" style={{color: "#157926"}}></i>
            {' '}
            PLANT NURSERY
          </Navbar.Brand>
          <div>
            {
              !status &&
              <button className='btn btn-outline-danger' onClick={handleLogout}>
                <i class="fa-solid fa-right-from-bracket me-2"></i>
                Logout
              </button>
            }

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header