import React, { useEffect, useState } from 'react'
import Userheader from '../components/Userheader';
import Card from 'react-bootstrap/Card';
import Userviewmore from '../components/Userviewmore';
import { allplantUser } from '../services/allApis';
import server_url from '../services/server_url'

function Userdash() {
  const [user,setUser]=useState("")
  const [allPlantsu,setAllPlantsu]=useState([])
  useEffect(()=>{
    setUser(sessionStorage.getItem("username"))
    if(sessionStorage.getItem('token')){
      getData()
    }
    else{
      console.log("Login first");
    }
  },[])
  console.log(allPlantsu)

  const getData = async ()=>{
    const header = {"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
    const result = await allplantUser(header)
    if(result.status == 200){
      setAllPlantsu(result.data)
    }
    else{
      console.log(result.response.data)
    }
  }
  return (
    <>
   <Userheader></Userheader>
      <header className="bg-success py-5 mb-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">PLANT NURSERY</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            <h2>Welcome <span>{user}</span></h2>
          </div>
        </div>
      </header>
      <div className='d-flex justify-content-evenly ms-3 mt-4 mb-5 me-3'>
      {
        allPlantsu.length>0?
        allPlantsu.map(item =>(
          
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" width="100px" height="400px" src={item.image?`${server_url}/upload/${item.image}`:"holder.js/100px180"} />
          <Card.Body>
            <Card.Title>{item.plantName}</Card.Title>
            <Card.Text>₹
              {item.plantMRP}
            </Card.Text>
            <Userviewmore aplant={item}/>
          </Card.Body>
        </Card>
          
        ))
        :
        <h2>No Plants...........</h2>
      }
      </div>
     
    </>
  )
}

export default Userdash