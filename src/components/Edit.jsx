import React, { useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import base_url from '../services/server_url'
import { editPlant } from '../services/allApis';
import { toast } from 'react-toastify';
import { editPlantResponseContext } from '../contextApi/Contextapi';

function Edit({ aplant }) {
    // console.log(aplant,"From Edit")
    const {editPlantResponse,setEditPlantResponse}=useContext(editPlantResponseContext)

    const [show, setShow] = useState(false);
    const [plant, setPlant] = useState({
        id: aplant._id, plantName: aplant.plantName, plantType: aplant.plantType
        , plantWater: aplant.plantWater, plantMRP: aplant.plantMRP, plantMaintanance: aplant.plantMaintanance
        , description: aplant.description, quantity: aplant.quantity, plantimage: ""
    })

    const [imgStatua, setImgStatus] = useState(false)
    const [preview, setPreview] = useState("")

    useEffect(() => {
        if (plant.plantimage.type == "image/jpg" || plant.plantimage.type == "image/jpeg" || plant.plantimage.type == "image/png") {
            setImgStatus(false)
            setPreview(URL.createObjectURL(plant.plantimage))
        }
        else {
            setImgStatus(true)
            setPreview("")
        }
    }, [plant.plantimage])

    const handleUPdate = async () => {
        console.log(plant)
        const { plantName, plantType, plantWater, plantMRP, plantMaintanance, description, quantity,plantimage } = plant
        if (!plantName || !plantType || !plantWater || !plantMRP || !plantMaintanance || !description || !quantity || !plantimage) {
            toast.warning("Invalid inputs.. Enter Valid input data in every field!!")
        }
        else {

            const formData = new FormData()
            formData.append("plantName", plantName)
            formData.append("plantType", plantType)
            formData.append("plantWater", plantWater)
            formData.append("plantMRP", plantMRP)
            formData.append("plantMaintanance", plantMaintanance)
            formData.append("description", description)
            formData.append("quantity", quantity)
            preview ? formData.append("image", plant.plantimage) : formData.append("image", aplant.image)


            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editPlant(plant.id, formData, reqHeader)
                if (result.status == 200) {
                    toast.success(`Plant ${plant.plantName} Updated Successfully!!`)
                    handleClose()
                    setEditPlantResponse(result)
                }
                else {
                    toast.warning(result.response.data)
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editPlant(plant.id, formData, reqHeader)
                if (result.status == 200) {
                    toast.success(`Plant ${plant.plantName} Updated Successfully!!`)
                    handleClose()
                    setEditPlantResponse(result)
                }
                else {
                    toast.warning(result.response.data)
                }
            }

        }
    }

    const handleClose = () => {
        setShow(false);
        setPreview("")
        setPlant({
            id: aplant._id, plantName: aplant.plantName, plantType: aplant.plantType
            , plantWater: aplant.plantWater, plantMRP: aplant.plantMRP, plantMaintanance: aplant.plantMaintanance
            , description: aplant.description, quantity: aplant.quantity, plantimage: ""
        })
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <span className='btn' onClick={handleShow}><i className="fa-solid fa-pen-to-square" style={{ color: "#0b046c" }}></i></span>
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
                                    <img className='img-fluid' height={'200px'} src={preview ? preview : `${base_url}/upload/${aplant.image}`} alt="img" />
                                </label>
                                {
                                    imgStatua &&
                                    <p className='text-danger'>Image Extention Invalid! Image should be jpg/jpeg/png format </p>
                                }

                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel controlId="nameinp" label="Name" className="mb-3">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantName: e.target.value }) }} value={plant.plantName} placeholder="Plant Name" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="typeinp" label="Type">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantType: e.target.value }) }} value={plant.plantType} placeholder="Type of plant" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="priceinp" label="Price">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantMRP: e.target.value }) }} value={plant.plantMRP} placeholder="Price of Plant" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="maintanenceinp" label="Maintanace">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantMaintanance: e.target.value }) }} value={plant.plantMaintanance} placeholder="Maintanace" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="waterinp" label="Water Schedule">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, plantWater: e.target.value }) }} value={plant.plantWater} placeholder="Water Schedule" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="descriptioninp" label="Description">
                                        <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, description: e.target.value }) }} value={plant.description} placeholder="Description" />
                                    </FloatingLabel>
                                </div>
                            </Col>
                            <FloatingLabel controlId="quantityinp" label="Quantity">
                                <Form.Control type="text" onChange={(e) => { setPlant({ ...plant, quantity: e.target.value }) }} value={plant.quantity} placeholder="Quantity" />
                            </FloatingLabel>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUPdate}>Edit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit