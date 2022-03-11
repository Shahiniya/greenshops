import React, {useState} from 'react';
import { Container11,Flower1,Card1,Card2,Ellipse } from './style';
import {flower1} from '../../mock.js'

export const Section = (value) => {

    const [list,setList] = useState(flower1);


  return (
    <Container11>
           <h6 className='span1'>Releted Products</h6>
           <Card1 key={value.id}>
           {
             list.map((value)=>(
             <Card2> <Flower1 src={value.src } alt='test'/>
              <h3>{value.title}</h3>
              <h4>${value.price}</h4>
              </Card2>
             ))
           }
           </Card1> 
             <Ellipse>
                <span></span>
                <span></span>
                <span></span>
              </Ellipse>
           </Container11>
  )
}

// export default Section;
