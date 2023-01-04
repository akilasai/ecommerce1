import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import lo1 from '../IMAGE/lo1.jpeg';
import { BsFillFilePlayFill, BsFillTelephoneFill, BsFacebook, BsMessenger, BsWhatsapp, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../components/styles/footer.css'
import { BsEnvelope,BsFillGeoAltFill } from 'react-icons/bs';
import card1 from '../IMAGE/card.png'



export default function Footer() {
  return (
    <MDBFooter bgColor='primary' >
      <section >
        <MDBContainer >
          <MDBRow className='mt-3'>



            <MDBCol md='3' lg='4' className='mx-auto mb-4'>
              <div className='d-flex flex-column align-items-center foot_box mt-2'>
                <span><img src={lo1} alt="" height="75" width="75" top="20" className='rounded-circle' />
                </span>
                <p className='text-warning'>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className='d-flex justify-content-center '>
                <BsFillFilePlayFill className="pt-2" size="2rem" color='yellow' />
                <BsFillTelephoneFill className="pt-2" size="2rem" color='yellow' />
                <BsFacebook className="pt-2" size="2rem" color='yellow' />
                <BsMessenger className="pt-2" size="2rem" color='yellow' />
                <BsWhatsapp className="pt-2" size="2rem" color='yellow' />
                <BsTwitter className="pt-2" size="2rem" color='yellow' /></div>
            </MDBCol>


            <MDBCol md='4' lg='4'>
              <div className='d-flex flex-column align-items-center foot_box mt-2'>
                <h4>Useful links</h4>
                <h5 ><Link to='/home'  className='use_link' style={{ textDecoration: 'none' }}>Home</Link></h5>
                <h5 ><Link to='/product'  className='use_link' style={{ textDecoration: 'none' }}>Products</Link></h5>
                <h5 ><Link to='/contact'  className='use_link'  style={{ textDecoration: 'none' }}>Contact</Link></h5>
                <h5 ><Link to='/cart'   className='use_link' style={{ textDecoration: 'none' }}>Cart</Link></h5>
              </div>
            </MDBCol>



            <MDBCol md='4' lg='4'>
              <div className='d-flex flex-column align-items-center foot_box mt-2'>
              <h4>Contact</h4>
              <span><BsFillGeoAltFill/>Chennai</span>  
              <span><BsEnvelope/>info@gmail.com</span>  
              <span><BsFillTelephoneFill/>1800 2345 2343 234</span>  
              <span><BsFillTelephoneFill/>1800 1234 123 123</span>  
                </div>
                <div className='card'>
                  <img src={card1} alt='card' width="250" height="50"/>
                </div>
            </MDBCol>

          </MDBRow>

        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{backgroundColor: 'rgba(12,21,25,18)'}}>
        © Copyrights Reserved
      </div>
    </MDBFooter>
  );
}