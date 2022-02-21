import React, { Component } from 'react'
import Navbar from './navbar/navbar.jsx';
// import gul1 from './section9-images/gul1.png';
// import gul2 from './section9-images/gul2.png';
import {Container9,Mindiv, Container9left, Left9, Right9,Cover, Container9right, RightTitle,Description, Facebook, Twitter, Linkedin,Mail, Title1, Title2, Container11, Ellipse, Container12} from './style'
import {Gul1,Gul2,Icon,Size,Count,Buy,Contact,Share,Container10,Flower1,Card1,Card2,Rasm,Rasm1,Rasmcha,Join,Inputt} from './style';
import {flower, flower1, flowers,rasm} from './mock.js'
import gul1 from './section9-images/gul1.png';


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
           <Navbar/>
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

           <Container10>
           <Title1>
           <Title2>
           <h5>Product Description</h5>
           <h5>Reviews (19)</h5>
           </Title2>
           <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.

           Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
           <h6>Living Room:</h6>
           <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h6>Dining Room:</h6>
          <p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
          <h6>Office:</h6>
          <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </Title1>
           </Container10>

           <Container11>
           <h6 className='span1'>Releted Products</h6>
           <Card1>
           {
             this.state.list.map((value)=>(
             <Card2> <Flower1 src={value.src } alt='test'/>
              <h3>{value.title}</h3>
              <h4>${value.price}</h4>
              </Card2>
             ))
           }
           </Card1> 
             <Ellipse>
                <span></span>
                <span></span>
                <span></span>
              </Ellipse>
           </Container11>
          <Container12>
              <Rasm>
              {
                this.state.rasmm.map((value)=>(
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
      
      </div>
    )
  }
}
