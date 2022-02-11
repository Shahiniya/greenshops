import React, { Component } from 'react';
import {flowers} from './mock';
import {Container,Card,Image} from './style'




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
                  <Card>
                    <Image src={value.src} />
                  </Card>
              ))
          }
    </Container>
    )
  }
}
