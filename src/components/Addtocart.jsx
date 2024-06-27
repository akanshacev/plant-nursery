import React from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'

import { adtocart } from '../services/allApis'

function Addtocart() {

    const getData = async () => {
        const header = {
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
        const result = await adtocart(plant)
    }
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
                    <tbody>
                        <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn">+</button>
                            <input type="text" className="form-control" />
                            <button className="btn">-</button>
                        </td>
                        <td></td>
                        <td>
                            <button className="btn">
                            <i className="fa-solid fa-trash" style={{color: "ed0c0c"}}></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table >
                
            </div >
        </>
    )
}

export default Addtocart