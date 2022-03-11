import React, { Component } from 'react'
import {Button,Images, Section4left, Section4right, SectionContainer4} from '../section4/style';
import img1 from '../../assets/images/img1.png'

export default class Section4 extends Component {
    constructor(props){
        super(props)
        this.state={
            active:'1',
        }
    }
  render() {
    return (
      <div>
    <Button>
      <button className={`${this.state.active === '1' && 'active'}`} onClick={()=>this.setState({active:'1'})} >1</button>
      <button className={`${this.state.active === '2' && 'active'}`} onClick={()=>this.setState({active:'2'})} >2</button>
      <button className={`${this.state.active === '3' && 'active'}`} onClick={()=>this.setState({active:'3'})} >3</button>
      <button className={`${this.state.active === '4' && 'active'}`} onClick={()=>this.setState({active:'4'})} >4</button>
      <button className={`${this.state.active === '5' && 'active'}`} onClick={()=>this.setState({active:'5'})} >5</button>
      </Button>
     <SectionContainer4>
        <Section4left>
          <Images src={img1}/>
        </Section4left>
        <Section4right></Section4right>
     
     </SectionContainer4>
      
      </div>
    )
  }
}
