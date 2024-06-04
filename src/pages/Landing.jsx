import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='w-100 d-flex align-items-center' style={{ height: "100vh", backgroundColor: 'rgb(239, 240, 223)' }}>
        <Row>
          <Col className='align-items-center d-flex'>
            <div className='ms-2'>
              <h1 className='display-4 mb-2 text-success'>PLANT NURSERY</h1>
              <p style={{ textAlign: 'justify' }}>Plants are essential to our natural ecosystems and crucial to any food chain. As they soak up energy from the sun, they grow and serve as food for humans and animals alike. Apart from that, they also provide shelter for a range of organisms.
                If you're a plant lover, you’ll love the plant quotes we’ve compiled here.</p>
              <Link to={'/auth'}>
                <button className='btn btn-success'>Start To Explore</button>
              </Link>
              {/* {
                token ?
                  <Link to={'/dash'}>
                    <button className='btn btn-success'>Manage Your Project..</button>
                  </Link>
                  :
                  <Link to={'/auth'}>
                    <button className='btn btn-success'>Start To Explore</button>
                  </Link>

              } */}


            </div>

          </Col>
          <Col>
            <img className='img-fluid' src="https://png.pngtree.com/background/20230527/original/pngtree-group-of-ten-different-plants-picture-image_2753798.jpg" alt="img" />
          </Col>
        </Row>
      </div>
      <div className='p-5 w-100 align-items-center me-5'>
        <h2 className='text-center mt-4 mb-5'>ABOUT <span className='text-success'>PLANT NURSERY</span></h2>

        {/* <marquee behavior="" direction="">
                    <div className='d-flex justify-content-evenly mt-2'>
                      
                        
                    </div>
                </marquee> */}
        <div>
          <Row>
            <Col sm={12} md={6}>
              <p style={{ textAlign: 'justify' }} >Plant nursery is one of the best place to shop for all kind of plants to make your surrounding green.
                This was started on 2 nd  May 2024 by Maneesha And Deepa who are co-partners of this firm
              </p> <br /> <br /> <br />
              <p style={{ textAlign: 'justify' }} >If you are looking for  more any kind of your home with best
                quality, this is the best place to shop.We design the Space & provide garden maintenance based on customer requirements</p>
            </Col>
            <Col sm={12} md={6}>
              <Row>
                <div className='d-flex justify-content-between'>
                  <Col sm={6} md={3}>
                    <div>
                      <Card style={{ width: '10rem', height:"10rem"}} className='ms-5'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                          <i className="fa-solid fa-person fa-2xl mb-5" style={{ color: '#4fd507' }}></i>
                          <Card.Text>
                            Certified Workers
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      <Card style={{ width: '10rem',height:"10rem" }} className='ms-5 mt-5'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <i className="fa-solid fa-hand-peace fa-flip fa-2xl mb-5" style={{ color: '#4fd507' }}></i>
                          <Card.Text>
                            Honest & Realiable
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>

                  </Col>
                  <Col sm={6} md={3}>
                    <div>
                      <Card style={{ width: '10rem',height:"10rem" }} className='ms-5 '>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <i className="fa-solid fa-trowel fa-beat-fade fa-2xl mb-5" style={{ color: '#4fd507' }}></i>
                          <Card.Text>
                            Maintenance Services
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      <Card style={{ width: '10rem',height:"10rem" }} className='ms-5 mt-5'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                        <i className="fa-solid fa-seedling fa-2xl mb-5" style={{ color: '#4fd507' }}></i>
                          <Card.Text>
                            Best Service
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>

                  </Col>

                </div>
              </Row>


            </Col>
          </Row>
        </div>

        <div className='d-flex align-items-center'>
          {/* <Link to={'/projects'}>Click for More...</Link> */}

        </div>

      </div>
    </>
  )
}

export default Landing