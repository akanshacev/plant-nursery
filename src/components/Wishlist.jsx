import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { adtocart, getwishlist, removeWishlist } from '../services/allApis';
import server_url from '../services/server_url'
import { toast } from 'react-toastify';

function Wishlist() {
    const [wishlistItems,setWishlistItems]=useState([])
    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            getData()
        }
        else{
            console.log("Login First");
        }
    },[])
    console.log(wishlistItems);
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }


    const getData = async()=>{
        try{
            const result= await getwishlist(header)
            if(result.status == 200){
                setWishlistItems(result.data.plants)
            }
            else{
                console.log(result.response.data);
            }
        }
        catch(error){
            console.log("Error in fetching wishlist items:",error);
        }
       
    }

    

    const addtoCart=(id)=>{
        adtocart(id,header).then((res)=>{
            console.log(res);
            toast.success(res.data)
            deleteFromWishlist(id)
        }).catch((error)=>{
            console.log(error);
            toast.error(error.message)
        })
    }
    const deleteFromWishlist=(id)=>{
        removeWishlist(id,header).then((res)=>{
            if(res.status==200){
                setWishlistItems((prevItems)=>prevItems.filter(item=>item.plantId._id !== id))
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    // const removeFromWishlist=(id)=>{
    //     setWishlistItems((prevItems)=>prevItems.filter(item=>item.plantId._id!==id))
    // }
    return (
        <>
            <header className="bg-success py-5 mb-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">PLANT NURSERY</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Grate Place To Make Green</p>
                        <h2>Welcome To Wishlist<span></span></h2>
                    </div>
                </div>
            </header>
            <div className='d-flex justify-content-evenly ms-3 mt-4 mb-5 me-3'>
                {
                    wishlistItems.length>0?
                    wishlistItems.map(item=>(
                        item.plantId && (
                                <Card style={{ width: '18rem' }} key={item.plantId._id}>
                                    <Card.Img variant="top" width="100px" height="230px" src={item.plantId.image ? `${server_url}/upload/${item.plantId.image}` : "https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg"} />
                                    <Card.Body>
                                        <Card.Title>{item.plantId.plantName}</Card.Title>
                                        <Card.Text>₹
                                            {item.plantId.plantMRP}
                                            <div className='d-flex justify-content-between mt-3'>
                                                <button className='btn' onClick={()=>{deleteFromWishlist(item.plantId._id)}}>
                                                <i className="fa-solid fa-heart-circle-minus" style={{color:"#ea3e60"}}></i>
                                                </button>
                                                <button className='btn' onClick={()=>{addtoCart(item.plantId._id)}}>
                                                <i className="fa-solid fa-cart-plus" style={{color:"#0dab44"}}></i>
                                                </button>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        ))
                        :
                        <h2>No Wishlist Items....</h2>
                }
          
            </div>
        </>
    )
}

export default Wishlist