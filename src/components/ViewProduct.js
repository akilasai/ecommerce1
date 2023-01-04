import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../IMAGE/data'
import { useDispatch } from 'react-redux';
import { cartActions } from './Redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const ViewProduct = () => {

  const {id}= useParams() ;
  console.log(id)
    const product = data.find((item)=> item.id===id);
    const{productName,price,category,imgUrl, description} = product;

const dispatch=useDispatch()

    const addToCart =()=>{
        dispatch(
          cartActions.addItem({
            id,
            imgUrl:imgUrl,
            productName,
            price
      })
        );
        alert('Product added SuccessFully')
        
      }
      const navigate=useNavigate();
      const cart =()=>{
        navigate('/cart');
      }
     
  return (
    <div>
        <Container>
            <Row>
                <Col lg="6"  md="6">
                    <div>
                        <img src={imgUrl} alt={productName} height="350" width="350"/>
                    </div>

                </Col>
                <Col lg="6"  md="6">
                    <div className='Pro_details'>
                    <span><h3>{productName}</h3></span>
                    <h4>{category}</h4>
                    <h6>{price}</h6>
                    <span>{description}</span>
                    <div className='pro_button'>
                    <button className='btn btn-sm btn-outline-warning' onClick={addToCart}>Add To Cart</button>
                    <button className='btn btn-sm btn-outline-info' onClick={cart}>Go to Cart</button>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>






    </div>
  )
}

export default ViewProduct