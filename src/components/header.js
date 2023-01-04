import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Routes,Route } from 'react-router-dom';
import Product from './product';
import Cart from './cart';
import Home from './body';
import About from './About';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ViewProduct from './ViewProduct';
import{BsCart4} from 'react-icons/bs'
import lo1 from '../IMAGE/lo1.jpeg';
import {FaUserCircle} from 'react-icons/fa'
import './styles/header.css';

function Header() {
  const Quantity = useSelector(state => state.cart.totalQuantity);
  const navigate=useNavigate();
  const CartRedirect=()=>{
    navigate('/cart')
  }
  return (
    <>
    <Navbar bg="primary" expand="lg" variant='white'>
      <Container>
      <h3>ONE WORLD</h3>
        <Navbar.Brand ><img src={lo1} alt="" height="50" width="70" className='rounded-circle'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto contain">
            <Nav.Link  className="contain" as = {Link} to="/home">Home</Nav.Link>
            <Nav.Link  className="contain" as = {Link} to="/product">Product</Nav.Link>
            <Nav.Link className="contain" as = {Link} to="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
       <Nav.Link ><BsCart4 onClick={CartRedirect}/>{Quantity}</Nav.Link>
       <Nav.Link ><FaUserCircle/></Nav.Link>
      </Container>
    </Navbar>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path='/home' element ={<Home/>}/>
     <Route path='/product' element ={<Product/>}/>
     <Route path='/product/:id' element ={<ViewProduct/>}/>
     <Route path='/cart' element ={<Cart/>}/>
     <Route path='/About' element ={<About/>}/>
   </Routes>
   </>
   
  );
}

export default Header