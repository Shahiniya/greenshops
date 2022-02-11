import React, { Component } from 'react';
import {flowers} from './mock';
import {Container,Card,Image, KorzinkaIcon, HeartIcon, SearchIcon,Total} from './style'


export default class Section3 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:flowers,
        }
    }
    render() {
     
    return (
     
      <Container>
          {
              flowers.map((value)=>(
                  <Card>
                    <Image src={value.src} />
                    <h3>{value.title}</h3>
                    <h3>${value.price}</h3>
                 <Total className='total'>
                    <KorzinkaIcon className='icon' />
                    <HeartIcon className='icon' />
                    <SearchIcon className='icon' />
                  </Total>
                  </Card>
              ))
          }
    </Container>
    )
  }
}
