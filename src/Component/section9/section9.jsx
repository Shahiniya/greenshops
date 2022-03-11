import React, { Component } from 'react'
import {Section10} from '../../Component/section10/index.jsx';
import {Section} from '../../Component/section11/index.jsx';
import {Section12} from '../../Component/section12/index.jsx';
import {Container9, Container9left, Left9, Right9,Cover, Container9right, RightTitle,Description, Facebook, Twitter, Linkedin,Mail} from '../section9/style'
import {Gul1,Gul2,Icon,Size,Count,Buy,Contact,Share} from '../section9/style';
import {flower, flower1, flowers,rasm} from '../../mock/mock.js'
import gul1 from '../../assets/images/gul1.png';


export default class Section9 extends Component {
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
      const {value} = this.props;
      
      // const getSelect = (selected)=>(this.setState({selected,count:1}))
    return (
      <div>
           
           <Container9>
               <Container9left>

                    <Left9>
                    {
                      this.state.data.map(({id,src})=>(
                        // <Mindiv key={id} onClick={()=>getSelect(value)} >
                        <Gul1 onClick={()=>this.setState({image1:src})}  key={id} src={src} alt='test'/> 
                        // </Mindiv>
                        ))
                    }
                    </Left9>

                    <Right9>
                    <Cover>
                    <Gul2 className='' src={this.state.image1 } alt='test'/> 
                    <Icon className='icons' />
                    </Cover>
                    </Right9>
               </Container9left>

               <Container9right>
               <h4 style={{}}>Barberton Daisy</h4>
               <RightTitle>
               <h5 style={{margin:'5px 20px' }}>$119.00</h5> <hr/>
               <h6 style={{margin:'10px 50px 0px 500px'}}>******  19 Customer Review</h6>
               </RightTitle>
               <Description>
               <h4>Short Description:</h4>
               <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
              <h6>Size:</h6>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
                <Count>
              <button className='btn' onClick={()=>this.setState({count:this.state.count-1})}>-</button>
              <h6>{this.state.count}</h6>
              <button className='btn' onClick={()=>this.setState({count:this.state.count+1})}>+</button>
             <Buy>
             <button className='buy buy1'>BUY NOW</button>
             <button className='buy'>ADD TO CARD</button>
             <button className='buy'></button>
             </Buy>
              </Count>
               </Description>
               <Contact>
               <h6>SKU: 1995751877966</h6>
               <h6>Categories: Potter Plants</h6>
               <h6>Tags: Home, Garden, Plants</h6>
               </Contact>
               <Share>
               <h6>Share this products:</h6>
               <Facebook/>
               <Twitter/>
               <Linkedin/>
               <Mail/>
               </Share>
               </Container9right>
           </Container9> 
           <Section10/>
           <Section/>
           <Section12/>
      </div>
    )
  }
}
