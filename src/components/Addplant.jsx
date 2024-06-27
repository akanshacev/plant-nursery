import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import {addplants} from '../services/allApis';
import { addPlantResponseContext } from '../contextApi/Contextapi';

function Addplant() {

    const {addPlantResponse,setAddPlantResponse}=useContext(addPlantResponseContext)
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [plant, setPlant] = useState({
        plantName: "", plantType: "", plantWater: "", plantMRP: "", plantMaintanance: "", description: "", quantity: "", plantimage: ""
    })
    const [imageStatus, setImageStatus] = useState(false)

    useEffect(() => {
        console.log(plant);
        if (plant.plantimage.type == "image/jpg" || plant.plantimage.type == "image/jpeg" || plant.plantimage.type == "image/png") {
            console.log("Image is Correct format");
            setImageStatus(false)
            setPreview(URL.createObjectURL(plant.plantimage))
        }
        else {
            console.log("Invalid file format!.. image should be jpg,jpeg/png");
            setImageStatus(true)
            setPreview("")
        }
    }, [plant.plantimage])

    const handleAddPlant =async () => {
        const { plantName, plantType, plantWater, plantMRP, plantMaintanance, description, quantity, plantimage } = plant
        if (!plantName || !plantType || !plantWater || !plantMRP || !plantMaintanance || !description || !quantity || !plantimage) {
            toast.warning("Invalid inputs.. Enter Valid input data in every field!!")
        }
        else {
            const formData = new FormData()
            formData.append("plantName",plantName)
            formData.append("plantType",plantType)
            formData.append("plantWater",plantWater)
            formData.append("plantMRP",plantMRP)
            formData.append("plantMaintanance",plantMaintanance)
            formData.append("description",description)
            formData.append("quantity",quantity)
            formData.append("image",plantimage)


            const token=sessionStorage.getItem("token")
            const reqHeader={
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            const result=await addplants(formData,reqHeader)
            if(result.status==200){
                toast.success("Plant Added Successfully!!")
                setPlant({
                    plantName:"",plantType:"",plantWater:"",plantMRP:"",plantMaintanance:"",description:"",quantity:"",plantimage:""
                })
                handleClose()
                setAddPlantResponse(result)
            }
            else{
                toast.error(result.response.data)
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-success mb-4' onClick={handleShow}>Add Plant</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col>
                                <label >
                                    <input type="file" name='' onChange={(e) => { setPlant({ ...plant, plantimage: e.target.files[0] }) }} style={{ display: 'none' }} />
                                    <img className='img-fluid' height={'200px'} src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMzktwJntgio0Y3J-YiJBowm4q33tZJ4kTY4d6P-IwQ&s"} alt="img" />
                                </label>
                                {
                                    imageStatus &&
                                    <p className='text-danger'>Invalid File Format!! Image should jpg,jpeg,png format</p>
                                }

                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel controlId="nameinp" label="Name" className="mb-3">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantName: e.target.value }) }} placeholder="Plant Name" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="typeinp" label="Type">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantType: e.target.value }) }} placeholder="Type of plant" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="waterinp" label="Water Schedule">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantWater: e.target.value }) }}  placeholder="Water Schedule" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="priceinp" label="Price">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantMRP: e.target.value }) }} placeholder="Price of Plant" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="maintanenceinp" label="Maintanace">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantMaintanance: e.target.value }) }} placeholder="Maintanace" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="descriptioninp" label="Description">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, description: e.target.value }) }} placeholder="Description" />
                                    </FloatingLabel>
                                </div>
                            </Col>
                            <FloatingLabel controlId="quantityinp" label="Quantity">
                                <Form.Control type="number" onChange={(e) => { setPlant({ ...plant, quantity: e.target.value }) }} placeholder="Quantity" />
                            </FloatingLabel>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleAddPlant}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addplant