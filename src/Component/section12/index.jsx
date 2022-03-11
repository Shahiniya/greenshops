import React, {useState} from 'react';
import {Container12,Navbarcha,Container,Rasm,Rasm1,Rasmcha,Join, NavContainer, Img5, Img4, Information, MyAccount} from './style'
import {rasm} from '../../mock/mock.js';
import {navbarcha} from '../../mock/navbarcha.js';
// import vector from '../../assets/images/Vector.png';



export const Section12 = () => {

const [data] = useState(rasm);
const [nav] = useState(navbarcha);


  return (
    <Container>
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

<Navbarcha>
{
  nav.map((value)=>(
    <NavContainer>
        <Img5 src = {value.src} />
        <h5>{value.title }</h5>
        <h6>{value.theme}</h6>
        <p>{value.titles}</p>
    </NavContainer>
  ))
}
</Navbarcha>

<Information>
    <MyAccount>
    
    </MyAccount>
</Information>

</Container>
  )
}
