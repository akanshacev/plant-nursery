import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='p-5 w-100 bg-dark'>
        <Row>
          <Col>
            <h3 className='text-success'>PLANT NURSERY</h3>
            <p style={{ textAlign: 'justify' }} className='text-light'>Plant nursery is one of the best place to shop for all kind of plants to make your surrounding green.
                This was started on 2 nd  May 2024 by Maneesha And Deepa who are co-partners of this firm</p>
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h3 className='text-light'>Link</h3>
            <Link to={'/'}>Home</Link>
            <Link to={'/auth'}>Login</Link>
            {/* <Link to={'/reg'}>Register</Link> */}
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h3 className='text-light'>Contact Us</h3>
            <p className='text-light'><i className="fa-solid fa-phone" style={{color: "#14d279"}}></i>+912233445566</p>
            <p className='text-light'><i className="fa-solid fa-envelope" style={{color: "#14d279"}}></i>plantnursery@gmail.com</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer