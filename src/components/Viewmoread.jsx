import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import server_url from '../services/server_url'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

function Viewmoread({ aplant }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(aplant)
    return (
        <>
            <button className='btn btn-success' onClick={handleShow}>Viewmore</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{aplant?.plantName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col>
                                <img className='img-fluid' height={'200px'} src={aplant.image?`${server_url}/upload/${aplant.image}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMzktwJntgio0Y3J-YiJBowm4q33tZJ4kTY4d6P-IwQ&s"} alt="img" />
                            </Col>
                            <Col>
                                <div>
                                    <h4>{aplant.plantName}</h4>
                                    <h6>{aplant.plantType}</h6>
                                    <h6>{aplant.plantWater}</h6>
                                    <h6>{aplant.plantMRP}</h6>
                                    <h6>{aplant.plantMaintanance}</h6>
                                    <h6>{aplant.description}</h6>
                                    <h6>{aplant.quantity}</h6>
                                </div>
                            </Col>
                           
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Edit</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Viewmoread