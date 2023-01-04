import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgab from '../IMAGE/about.avif';
import '../components/styles/about.css'



const About = () => {
  return (
    <Container>
<Row  className='box'>
<Col lg="6" md="6" className='mt-3 '>
    <img src={imgab} alt="logo" height="400" width="400" className='mx-auto d-block'/>

</Col >
<Col lg="6" md="6" className='mt-3 d-flex justify-content-center flex-column'>
<p>
Mobile phones are considered an important human invention as it has been one of the most widely used and sold pieces of consumer technology.[7] The growth in popularity has been rapid in some places, for example in the UK the total number of mobile phones overtook the number of houses in 1999.[8] Today mobile phones are globally ubiquitous
</p>
<p>The first handheld mobile phone was demonstrated by Martin Cooper of Motorola in New York City in 1973, using a handset weighing c. 2 kilograms (4.4 lbs).[2] In 1979, Nippon Telegraph and Telephone (NTT) launched the world's first cellular network in Japan.[3] In 1983, the DynaTAC 8000x was the first commercially available handheld mobile phone. From 1983 to 2014, worldwide mobile phone subscriptions grew to over seven billion</p>


</Col>



</Row>


    </Container>
  )
}

export default About