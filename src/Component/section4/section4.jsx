import React, {useState} from 'react'
import {Button,Title1,Titel,Card,Cardleft,Cardright,Images,Imagi,Img, Left, Our, SectionContainer4, SummerCactus, Title3} from '../section4/style';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import {number} from '../../mock/number.js';
import {flower} from '../../mock/flower.js';
import {Section12} from '../../Component/section12/index.jsx';



const style ={
  color:'green',
  width:'50px'
}

export const Section4 = () => {

  const [numbers] = useState(number);
  const [flowers] = useState(flower);


  return (
    <SectionContainer4>
    <Button>
        {
          numbers.map((value)=>(
            <Img  src={value.src} alt='test'/>
          ))
        }
    </Button>

    <SummerCactus>
      <Cardleft>
    <Images src={img1} alt= 'test' />
    <Left>
    <h2>SUMMER CACTUS & SUCCULENTS</h2>
    <p>We are online plant shop offering a wide </p>
    <p> range of cheap and trendy plants</p>
    <button>Find more</button>
    </Left>
    </Cardleft>

    <Cardright>
    <Images src={img2} alt= 'test' />
    <Left>
    <h2>STYLING TRENDS & MUCH MORE</h2>
    <p>We are online plant shop offering a wide </p>
    <p> range of cheap and trendy plants</p>
    <button>Find more</button>
    </Left>
    
    </Cardright>
    </SummerCactus>
      
    <Titel>
    <h2>Our Blog Posts</h2>
    <h6>We are online plant shop offering a wide range of cheap and trendy plants</h6>
    </Titel>
<Our>

{
  flowers.map((value)=>{
    return(
      <Card>
   <Imagi src={value.src} />
   <Title1>
   <h3>{value.data}</h3>
   <p>{value.title}</p>
   <h6>{value.description}</h6>
   <h6>{value.read}</h6>
   </Title1>
   </Card>
  )})
  } 

</Our>
<Section12 />

    </SectionContainer4>
    
  )
}