import React, { useEffect, useState } from 'react'
import Header from './Header'
import server_url from '../services/server_url'
import { Table } from 'react-bootstrap'
import { getcartitems } from '../services/allApis'
import { removeCartitem } from '../services/allApis'
import Order from './Order'


function Addtocart() {

    const [cartItem, setcartItem] = useState([])
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            getData()
        }
        else {
            console.log("Login First");
        }
    }, [])
    console.log(cartItem);
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const getData = async () => {
        try {
            const result = await getcartitems(header)
            if (result.status == 200) {
                setcartItem(result.data.plants)
                console.log(result.data,"result")
            }
            else {
                console.log(result.response.data)
            }
        }
        catch (error) {
            console.log("Error fetching cart items:", error);
        }

    }

    const deleteFromCart = (id)=>{
        removeCartitem(id,header).then((res)=>{
            if(res.status == 200){
                setcartItem((prevItems) => prevItems.filter(item => item.plantId._id !== id));
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    // const getData = async () => {
    //     const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    //     const result = await allplantsAdmin(header)
    //     if (result.status == 200) {
    //       setAllPlants(result.data)
    //     }
    //     else {
    //       console.log("error");
    //       // console.log(result.response.data);
    //     }
    //   }
    return (
        <>
            <Header></Header>
            <header className="bg-success py-5 mb-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">PLANT NURSERY</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Grate Place To Make Green</p>
                        <h2>Welcome To Wishlist<span></span></h2>
                    </div>
                </div>
            </header>
            <div className='ms-3 mt-4 mb-5 me-3'>

                <Table>
                    <thead>
                        <tr>

                            <th>Plant Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        cartItem.length > 0 ?
                            cartItem.map(item => (
                                <tbody>
                                    <tr key={item.plantId._id}>
                                        <td>{item.plantId.plantName}</td>
                                        <td>{item.plantId.plantMRP}</td>
                                        <td><img src={item.plantId.image ? `${server_url}/upload/${item.plantId.image}` : "https://gardeningtips.in/wp-content/uploads/2020/07/Comp2-10.jpg"} style={{ width: "5rem" }} alt="" /></td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>{item.plantId.plantMRP * item.quantity}</td>
                                        <td>
                                            <button className="btn" onClick={()=>{deleteFromCart(item.plantId._id)}}>
                                                <i className="fa-solid fa-trash" style={{ color: "ed0c0c" }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                            :
                            <tr>
                                <td colSpan="6" className='text-danger'>No Cart Items...</td>
                            </tr>
                    }

                </Table >

            </div >
            <div className='mt-3'>
                <Order />
            </div>
        </>
    )
}

export default Addtocart