import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import server_url from '../services/server_url'
import { Row, Col } from 'react-bootstrap';

function WishCard({ aplant }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src={aplant.image ? `${server_url}/upload/${aplant.image}` : "https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg"} height="250px" />
                <Card.Body>
                    <Card.Title>{aplant.plantName}</Card.Title>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{aplant.plantName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className='img-fluid' src={aplant.image ? `${server_url}/upload/${aplant.image}` : "https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg"} heihnt="1800px" alt="img" />
                        </Col>
                        <Col>
                            <h4>{aplant.plantName}</h4>
                            <h4>{aplant.plantMRP}</h4>

                        </Col>
                        <Button variant="info" className='mt-2'>
                            Add to cart
                        </Button>
                        <div className='text-center'>
                            <span className='btn'>
                            <i className="fa-solid fa-heart-circle-minus" style={{color:" #e10914"}}></i>
                            </span>
                        </div>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default WishCard