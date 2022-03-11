import React, {useState} from 'react';
import {Container12,Rasm,Rasm1,Rasmcha,Join} from './style'
import {rasm} from '../../mock.js'

export const Section12 = () => {

const [data] = useState(rasm);

  return (
    <Container12>
    <Rasm>
    {
      data.map((value)=>(
        <Rasmcha>
          <Rasm1 src={value.src} alt='test' /> 
      </Rasmcha>

      ))
    }
    </Rasm>
    <Join>
    <h4>Would you like to join newsletters?</h4>
    <input type='text' placeholder='enter your email address...'/>
    <button>Join</button>
    <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
    </Join>
</Container12>

  )
}
