import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'






function WishList() {

  const wishlistArray= useSelector((state=>state.wishListReducer))
  const dispatch=useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'50px'}} className='ms-5'>
      <Row>
         {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col className='mb-5 'sm={12} md={6} lg={4} xl={3} key={index}>
          <Card style={{ width: '20rem', height:'30rem' }} className='shadow rounded'>
        <Card.Img height={'200px'} variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title className='text-primary'>{product.title}</Card.Title>
          <Card.Text>
            <p>{product.description.slice(0,50)}...</p>
            <h5>${product.price}</h5>
          </Card.Text>
          <div className='d-flex justify-content-between'>
               <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'  variant="primary"><i className='fa-solid fa-trash text-danger'></i></Button>
               <Button className='btn btn-light' onClick={()=>handleWishlistCart(product)} variant="primary"><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
          </div>
         
        </Card.Body>
      </Card>
          </Col>
        )):<div style={{height:"70vh"}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
            
        <img height={"500px"} width={"500px"} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />

        <h3 className='text-center text-danger'>Whislist is empty</h3>

        <Link to={"/"} style={{textDecoration:"none"}}><button className='btn btn-primary rounded'>back to home</button></Link>

      </div>
      }
      </Row>
     
    </div>
  )
}

export default WishList