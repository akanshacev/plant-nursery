import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Row,Col } from 'react-bootstrap';

function WishCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src="https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg" />
                <Card.Body>
                    <Card.Title>Palnt title</Card.Title>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Plant title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className='img-fluid' src="https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg" alt="img" />
                        </Col>
                        <Col>
                            <h4>title of plats</h4>
                            {/* <p>{project?.overview}</p>
                            <h6>{project?.languages}</h6> */}
                            {/* <div className='mt-3 p-3 d-flex justify-content-between'>
                                <a href={project.github}>
                                    <i class="fa-brands fa-github fa-xl"></i>
                                </a>
                                <a href={project.demo}>
                                <i class="fa-solid fa-link fa-xl"></i>
                                </a>
                            </div> */}
                        </Col>
                        <Button variant="info" className='mt-2'>
                                Add to cart
                            </Button>
                    </Row>
                </Modal.Body>
              
            </Modal>
    </>
  )
}

export default WishCard