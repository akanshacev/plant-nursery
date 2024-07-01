import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { placeOrder } from '../services/allApis';
function Order() {
    const [values,setValues] = useState({userName:'',houseName:'',homeTown:'',post:'',pinCode:'',mobileNumber:''})
    const [show, setShow] = useState(false);


    const onSubmit =()=>{
        console.log(values,"values");
        const header = { "Authorization":` Bearer ${sessionStorage.getItem('token')}` }
        placeOrder(values,header).then((res)=>{
            console.log(res.data,"result");
            handleClose()
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Continue
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                        <Form.Control type="text" name="userName" placeholder="Username" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="House Name" className="mb-3">
                        <Form.Control type="text" name="houseName" placeholder="House Name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Home Town" className="mb-3">
                        <Form.Control type="text" name="homeTown" placeholder="Home Town" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Post" className="mb-3">
                        <Form.Control type="text" name="post" placeholder="Post" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="pincode" className="mb-3">
                        <Form.Control type="text" name="pinCode" placeholder="Pincode" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                        <Form.Control type="text" name="mobileNumber" placeholder="Phone Number" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
                    </FloatingLabel>
                

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>)
}

export default Order