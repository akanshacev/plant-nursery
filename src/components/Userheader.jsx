import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Wishlist from './Wishlist';

// import Badge from 'react-bootstrap/Badge';

function Userheader() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-leaf" style={{ color: "#157926" }}></i>
            {' '}
            PLANT NURSERY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn border boder-darck me-3'>
                <Link className='text-decoration-none text-dark' to={'/wish'}>
                  <i className="fa-solid fa-heart me-2" style={{ color: '#ff0571' }}></i>
                  Wishlist
                  {/* <Badge bg="black" className='ms-3'>{wishlist?.length}</Badge> */}
                </Link>
              </Nav.Link>
              <Nav.Link className='btn border border-darck'>
                <Link className='text-decoration-none text-dark' to={'/cart'}>
                  <i className="fa-solid fa-cart-shopping me-2" style={{ color: '#63E6BE' }}></i>
                  Cart
                  {/* <Badge bg="black" className='ms-3'>{cart?.length}</Badge> */}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='ms-3'>
            {
              !status &&
              <button className='btn btn-outline-danger'>
                <i class="fa-solid fa-right-from-bracket ms-2"></i>
                Logout
              </button>
            }

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Userheader