import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Table } from 'react-bootstrap'
import { getorder } from '../services/allApis'

function Orderlist() {

    const [oItems, setOItems] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            getData()
        }
        else {
            console.log("Login First");
        }
    }, [])
    console.log(oItems);
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const getData = async () => {
        try {

            const result = await getorder(header)
            if (result.status == 200) {
                setOItems(result.data)
                console.log("result", result.data);
            }
            else {
                console.log(result.response.data);
            }
        }
        catch (error) {
            console.log("Error fetching ordered items:", error);
        }
    }


    return (
        <>
            <Header />

            <div>
                <Table className='table table-borderd'>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Plant Details</th>
                            <th>Date And Time</th>
                        </tr>
                    </thead>
                    {
                        oItems.length > 0 ?
                            oItems.map((order, orderIndex)=> (
                                <tbody key={orderIndex}>
                                    <tr>
                                        <td>
                                        {order.address.userName}, {order.address.houseName}, {order.address.homeTown}, {order.address.post}, {order.address.pinCode}, {order.address.mobileNumber}
                                        </td>
                                        <td>
                                        {order.orderItems.map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                <p>Plant Name: {item.plantId.plantName}</p>
                                                <p>Type: {item.plantId.plantType}</p>
                                                <p>Watering: {item.plantId.plantWater}</p>
                                                <p>Maintenance: {item.plantId.plantMaintanance}</p>
                                                <p>Description: {item.plantId.description}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        ))}
                                        </td>
                                        <td>{order.createAt}</td>
                                    </tr>
                                </tbody>
                            ))
                            :
                            <h2>No orders</h2>
                    }

                </Table>
            </div>
        </>
    )
}

export default Orderlist