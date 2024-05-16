import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector(state=>state.wishListReducer)
  const cart = useSelector(state=>state.cartReducer)
  return (
    <div>

        <Navbar expand="lg" className=" bg-primary">
      <Container>
        <Navbar.Brand href="#home">
            <Link to={'/'} style={{color:'white',fontWeight:"bold",textDecoration:"none"}}>
                        <i className='fa-solid fa-truck-fast fa-bounce'></i> E-Cart
                    </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link> <Link to={'/wishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge bg='success rounded ms-2'>{wishlist.length}</Badge> </Link> </Nav.Link>

            <Nav.Link> <Link to={'/cart'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i className="fa-solid fa-cart-shopping fa-bounce" style={{color:" #74C0FC"}}></i> Cart <Badge bg='warning rounded ms-2'>{cart.length}</Badge> </Link> </Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default Header