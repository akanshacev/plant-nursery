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
    })
    const getData = async () => {
        try {
            const result = await getorder(Header)
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
                <Table className='table'>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Plant Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Orderlist