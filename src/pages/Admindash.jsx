import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Addplant from '../components/Addplant'
import Table from 'react-bootstrap/Table';
import Viewmoread from '../components/Viewmoread';
import Edit from '../components/Edit';
import { allplantsAdmin, deletePlant } from '../services/allApis'
import server_url from '../services/server_url'
import { addPlantResponseContext } from '../contextApi/Contextapi';
import { editPlantResponseContext } from '../contextApi/Contextapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



function Admindash() {

  const { addPlantResponse, setAddPlantResponse } = useContext(addPlantResponseContext)
  const { editPlantResponse, setEditPlantResponse } = useContext(editPlantResponseContext)

  const [allPlants, setAllPlants] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
    }
    else {
      console.log("Login First");
    }
  }, [addPlantResponse, editPlantResponse])
  console.log(allPlants);
  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const result = await allplantsAdmin(header)
    if (result.status == 200) {
      setAllPlants(result.data)
    }
    else {
      console.log("error");
      // console.log(result.response.data);
    }
  }

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem('token')
    const header = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    const result=await deletePlant(id,header)
    if(result.status==200){
      toast.success("Plant Deleted!!")
      getData()
    }
    else{
      toast.error(result.response.data)
    }
  }
  return (
    <>
      <Header />
      <div>
        <h2 className='text-center text-warning'>Welcome </h2>
        <h3 className='text-success'>Plant List</h3>
        <div className='border border-3 p-4'>
          <div className='d-flex justify-content-between'>
            <Addplant />
            <Link to={'/orderlist'}>
            <button className='btn btn-success mb-4'>View Orders</button>
            </Link>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th> Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Price</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            {
              allPlants.length > 0 ?
                allPlants.map(item => (
                  <tbody>
                    <tr>
                      {/* <td>1</td> */}
                      <td>{item.plantName}</td>
                      <td><img src={item.image ? `${server_url}/upload/${item.image}` : "https://gardeningtips.in/wp-content/uploads/2020/07/Comp2-10.jpg"} style={{ width: "5rem" }} alt="" /></td>
                      <td>{item.plantType}</td>
                      <td>{item.plantMRP}</td>
                      <td>
                        <Viewmoread aplant={item} />

                      </td>
                      <td>
                        <Edit aplant={item} />
                      </td>
                      <td><button className='btn' onClick={()=>{handleDelete(item?._id)}}><i className="fa-solid fa-trash" style={{ color: "#df2707" }}></i></button></td>
                    </tr>

                  </tbody>


                ))
                :
                <h2>No plants</h2>
            }
          </Table>
          <div>

          </div>

        </div>
      </div>
    </>

  )
}

export default Admindash