import React, { Component } from 'react';
import {flowers} from '../../mock/mock.js';
import {Card,Image, KorzinkaIcon, HeartIcon, SearchIcon,Total} from '../section3/style'


export default class Section3 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:flowers,
            count:1,
        }
    }
    render() {
     const {value} = this.props;
    return (
     
             
                  <Card >
                    <Image src={value.src} />
                    <h3>{value.title}</h3>
                    <h3>${value.price}</h3>
                    <h3>
                    {' '} --Count:{this.state.count}{' '}
                    <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
                    <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                    </h3>
                 <Total className='total'>
                    <KorzinkaIcon className='icon' />
                    <HeartIcon className='icon' />
                    <SearchIcon className='icon' />
                  </Total>
                  </Card>
                  
            
              )
          
    
  }
}
