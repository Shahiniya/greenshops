import React, { Component } from 'react';
import {flowers} from '../mock';
import {Container,} from '../style'
import Item from '../Items';

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
              this.state.data.map((value)=>(
                 <Item value={value} />
              ))
          }
    </Container>
    )
  }
}
