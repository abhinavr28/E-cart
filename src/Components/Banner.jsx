import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <>
    <div className=''>
  <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.iphoneincanada.ca/wp-content/uploads/2023/01/iphone-15-Pro-Max.jpg"
          alt="First slide"
          height={'450px'}
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://en.letsgodigital.org/uploads/2021/07/vivo-mini-drone-camera-770x556.jpg"
          alt="Second slide"
          height={'450px'}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/EIb6jfzYXCo/maxresdefault.jpg"
          alt="Third slide"
          height={'450px'}
          
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        
    </>
  )
}

export default Banner