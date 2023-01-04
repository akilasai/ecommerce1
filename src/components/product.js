import React,{useState} from 'react'
import data from '../IMAGE/data';
import Products from './Products'
import './styles/product.css'
import{Row,Col,Container} from 'react-bootstrap'


const Product = () => {
    const [product,setProduct]=useState(data);// fetch data
    console.log(product);
  
   // console.log(product);
    const filter =(e)=>{
      const value = e.target.value;
      value==='All'?setProduct(data):setProduct( data.filter((item)=>item.category===value))
    }
const Search=(e)=>{
  const keyword=e.target.value;
  const array = data.filter((item)=> item.productName.toLowerCase().includes(keyword.toLowerCase()));
  setProduct(array);
}

return (
    <section>
      <Container className='mt-3'>

        
        <Row>
          
          <Col lg="4" md="4" sm="12">
            <select className='sel' onChange={filter}>
            <option  value='All' >All</option>
             <option value="apple">apple</option>
              <option value="samsung">samsung</option>
              <option value='Nokia'>Nokia</option>
              <option value="Realme">Realme</option> 
            </select>

          </Col>
          <Col lg="4" md="4" sm="12">
         <input className='sel' type="text" placeholder="Search Products" onChange={Search}></input>
          </Col>
        </Row>
      </Container>
  <section>   
      <div className='d-flex flex-wrap justify-content-evenly'>
        
        {
           product.map((item,index)=>(

               <Products item={item} key={index} />
           ))
       }
       
   </div>
    </section>
 </section>
    
  )
}

export default Product