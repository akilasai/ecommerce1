import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import{AiFillDelete} from 'react-icons/ai'
import { cartActions } from './Redux/slices/cartSlice';
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles/cart.css'
import spr  from '../IMAGE/sprite.png'


 const Cart = () => {

  const cartItems = useSelector(state =>state.cart.cartItems);
  console.log(cartItems);
  const total=useSelector(state => state.cart.totalAmount);
const navigation =useNavigate();
const CartRedirect=()=>{
  navigation('/product')
}

  
  return (
    <div> 

<Container>
  <Row>

    <Col lg="12" md="10" className='mx-2' >
      {cartItems.length===0 ? (
        
				<div>
				<h1>Your shopping cart is empty</h1>
        <img src={spr} alt='cart'/>
        </div>
				
      ):(
        <Table responsive size='sm' variant='secondary'>
      <thead>
        <tr>
          <td> image</td>
          <td>productname</td>
          <td>quantity</td>
          <td>price</td>
          <td>delete</td>
        </tr>
      </thead>

      <tbody>
        {
          cartItems.map((item,index)=>(
            <Remove item={item}/>
                     ))
        }
      </tbody>
    </Table>
      )
      
      
      }
    
    </Col>
  </Row>

  <Row >
    <div className='d-flex rearside'>
    <Col lg="4" className='mt-2'>
      <div>
        <h4>Total Quantity:<span>{cartItems.length}</span> </h4>
        <h4>Total Amount: <span>{total}</span></h4>
      </div>

    </Col>
    <Col lg="4" className='mt-2'>
      <button className='btn btn-sm btn-primary'>Checkout</button>
      <button className='btn btn-sm ' id="cart_icon" onClick={CartRedirect}>Continue Shoppping</button>

    </Col>
    </div>
  </Row>
</Container>
  

   
    </div>
  )
}


const Remove =({item})=>{

  const dispatch = useDispatch();
  const Delete = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
  <tr>
    <td font><img src={item.imgUrl} alt="pic" height="100" width='100' className="mx-auto d-block"/></td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.quantity}Nos</td>
    <td><AiFillDelete className="delete" onClick={Delete}/></td>
  </tr>)
  }
  

export default Cart