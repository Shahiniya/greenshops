import React, { Component } from 'react'
import Section9 from './section9'
import { Btndiv } from '../style'

export default class Item9 extends Component {
    constructor(props){
        super(props)
        this.state={
          datas:flowers,
            data: flower,
            list:flower1,
            image1: gul1,
            count:1,
            selected:{},
           rasmm: rasm,
   
        }
    }
  render() {
    return (
      <div>
<Btndiv>
{
    this.state.data.map((value)=>(
        <Section9 key={value.id} value={value}/>
    ))
}
</Btndiv>
    </div>
    )
  }
}
