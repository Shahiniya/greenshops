
import vector from '../../assets/images/Vector.png';
import vector1 from '../../assets/images/Vector1.png';
import vector2 from '../../assets/images/Vector2.png';
import React, { Component } from 'react';
import {Img1,NavbarContainer,NavbarMenu,Greenshop,Login,Title, Img2 } from './style';
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            active:'Home',
        }
    }
  render() {
    return (
      <NavbarContainer>

        <Greenshop>
            <img src={vector} alt='test' />
            <p>GREENSHOP</p>
        </Greenshop>

         <NavbarMenu>
             <Title to = {'/Home'} className={`${this.state.active==='Home' && 'active'}`} onClick={()=>this.setState({active:'Home'})}>Home</Title>
             <Title to = {'/Shop'}  className={`${this.state.active==='Shop'&& 'active'}`} onClick={()=>this.setState({active:'Shop'})}>Shop</Title>
             <Title to = {'/Plant Care'} className={`${this.state.active==='Plant Care'&& 'active'}`} onClick={()=>this.setState({active:'Plant Care'})}>Plant Care</Title>
             <Title to = {'/Blogs'} className={`${this.state.active==='Blogs'&& 'active'}`} onClick={()=>this.setState({active:'Blogs'})}>Blogs</Title>
             
        </NavbarMenu>

         <Login>
              <Img1 className='img1'src={vector1} alt='test' />
              <Img2 className='img2' src={vector2} alt='test' />
              <button>login</button>
        </Login>
            
       
        
      </NavbarContainer>
    )
  }
}
