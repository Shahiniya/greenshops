import React, { Component } from 'react';
import {flowers} from '../../mock/mock.js';
import {Container,} from '../section3/style'
import Item from './Items';

export default class Section3 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:flowers,
        }
    }
    render() {
     
    return (
     
      <Container >
          {
              this.state.data.map((value)=>(
                 <Item key={value.id} value={value} />
              ))
          }
    </Container>
    )
  }
}
