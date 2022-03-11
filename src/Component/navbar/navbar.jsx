
import vector from '../../assets/images/Vector.png';
import vector1 from '../../assets/images/Vector1.png';
import vector2 from '../../assets/images/Vector2.png';
import React, { Component } from 'react'
import './navbar.css';
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            active:'Home',
        }
    }
  render() {
    return (
      <div className='navbar-container'>

        <div className="greenshop">
            <img src={vector} alt='test' />
            <p>GREENSHOP</p>
        </div>

         <div className="navbar-menu">
             <p className={`${this.state.active==='Home' && 'active'}`} onClick={()=>this.setState({active:'Home'})}>Home</p>
             <p className={`${this.state.active==='Shop'&& 'active'}`} onClick={()=>this.setState({active:'Shop'})}>Shop</p>
             <p className={`${this.state.active==='Plant Care'&& 'active'}`} onClick={()=>this.setState({active:'Plant Care'})}>Plant Care</p>
             <p className={`${this.state.active==='Blogs'&& 'active'}`} onClick={()=>this.setState({active:'Blogs'})}>Blogs</p>
             
        </div>

         <div className='login'>
              <img className='img1'src={vector1} alt='test' />
              <img className='img2' src={vector2} alt='test' />
              <button>login</button>
        </div>
            
       
        
      </div>
    )
  }
}
