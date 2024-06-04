import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
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
              <button className='btn btn-outline-danger'>
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