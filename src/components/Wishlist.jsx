import React from 'react'
// import Card from 'react-bootstrap/Card';
import WishCard from './WishCard';

function Wishlist() {
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
                <WishCard/>
            {/* <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" width="100px" height="400px" src="https://www.axialent.com/wp-content/uploads/2018/03/AdobeStock_42639258.jpeg" />
          <Card.Body>
            <Card.Title>Title of plant</Card.Title>
            <Card.Text>₹
              things.......................
            </Card.Text>
            {/* <Userviewmore aplant={item}/> */}
          {/* </Card.Body> */}
        {/* </Card> */} 
            </div>
        </>
    )
}

export default Wishlist