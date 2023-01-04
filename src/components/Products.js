import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartActions } from './Redux/slices/cartSlice';


 const Products = ({item}) => {
  console.log(item);

   const dispatch = useDispatch()
const addToCart =()=>{
  dispatch(cartActions.addItem({
    id:item.id,
    productName:item.productName,
    price:item.price,
    imgUrl:item.imgUrl
  }))
  alert("Product Added Successfully");
} 



  return (
    <div className='row'>
       {  <div className="col-lg-4 col-md-4 ">
                    <div className="card">
                     <img src={item.imgUrl} alt={item.productName} className="card-img-top" />
                          <span >{item.category}</span>
                          <h5 className="food-title">{item.productName}</h5>
                          <h5 className="food-price">{item.price}</h5>
                          <ion-icon name="cart" className="add-cart"></ion-icon>
                          <div className='d-flex '>
                          <button className="btn btn-info btn-sm" ><Link to={`/product/${item.id}`}>View </Link></button>  
                          <button className="btn btn-warning btn-sm " onClick={addToCart} >Add To Cart</button>
                        </div>
                      </div>
                </div>
     }</div>
  )
}
export default Products