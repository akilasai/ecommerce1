//import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Carousel } from 'react-bootstrap';
//import "./styles/body.css";
import delivery from '../IMAGE/fast-delivery.jpg';



function Home() {
  return (
    <section className="Feature" id="Features">
    <Carousel variant="dark">
      <Carousel.Item >
       <img
          className="d-block w-100"
          src="https://www.trailblaze.marketing/hubfs/tb_blog-eCommerce_DX-02.jpg"
          alt="First slide" height="500"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg"
          alt="Second slide" height="500"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://previews.123rf.com/images/tassev/tassev1912/tassev191200273/135268204-showcase-with-smartphones-in-the-modern-electronics-store-.jpg"
          alt="Third slide" height="500"
        />
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c0.wallpaperflare.com/preview/697/898/445/cloud-computing-illustration-technology.jpg"
          alt="Second slide" height="500"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className="m-4 p-5 bg-secondary text-white rounded" id="feature-header">
      <h1 className='text-center'>Our Features</h1>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="box-cont d-flex justify-content-between">
          <div className="box d-flex flex-column align-items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="pic" height="120" width="120"  alt=" pic"/>
            <h3>Mobile the world</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            
          </div>

          <div className="box d-flex flex-column align-items-center">
            <img src={delivery} className="pic" height="120" width="120" alt=""/>
            <h3>Free delivery</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            
          </div>

          <div className="box d-flex flex-column align-items-center">
            <img src="https://img.freepik.com/free-photo/easy-wireless-yechnology-payment_23-2149105185.jpg?w=2000" className="pic"  height="120" width="120" alt="pic"/>
            <h3>Easy payments</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            {/* <a href="/" className="btn btn-outline-primary">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  </section>


  );
}

export default Home;