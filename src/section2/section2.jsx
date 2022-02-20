import React, { Component } from 'react'
import './section2.css'
import gul3 from './section2-images/gul3.png';
import Super from './section2-images/Super.png';


export default class Section2 extends Component {
    constructor(props){
        super(props)
        this.state={
            active:'House Plants',
        }
    }
  render() {
    return (
      <div className="section21-container">
          <div className="section2-container">
          <h3>Categories</h3>

              <div className="category">
                  <div className='type'>
                      <p className={`${this.state.active === 'House Plants' && 'active'}`} onClick={()=>this.setState({active:'House Plants'})} >House Plants</p>
                      <p className={`${this.state.active === 'Potter Plants' && 'active'}`} onClick={()=>this.setState({active:'Potter Plants'})} >Potter Plants</p>
                      <p className={`${this.state.active === 'Seeds' && 'active'}`} onClick={()=>this.setState({active:'Seeds'})} >Seeds</p>
                      <p className={`${this.state.active === 'Small Plants' && 'active'}`} onClick={()=>this.setState({active:'Small Plants'})} >Small Plants</p>
                      <p className={`${this.state.active === 'Big Plants' && 'active'}`} onClick={()=>this.setState({active:'Big Plants'})} >Big Plants</p>
                      <p className={`${this.state.active === 'Succulents' && 'active'}`} onClick={()=>this.setState({active:'Succulents'})} >Succulents</p>
                      <p className={`${this.state.active === 'Trerrariums' && 'active'}`} onClick={()=>this.setState({active:'Trerrariums'})} >Trerrariums </p>
                      <p className={`${this.state.active === ' Gardening' && 'active'}`} onClick={()=>this.setState({active:' Gardening'})} > Gardening </p>
                      <p className={`${this.state.active === ' Accessories' && 'active'}`} onClick={()=>this.setState({active:' Accessories'})} > Accessories</p>

                  </div>
                  <div className="number">
                      <p>(33)</p>
                      <p>(12)</p>
                      <p>(65)</p>
                      <p>(39)</p>
                      <p>(23)</p>
                      <p>(17)</p>
                      <p>(19)</p>
                      <p>(13)</p>
                      <p>(18)</p>

                  </div>
          </div>
                    
              <div className="price">
                  <p>Price Range</p>
                  <input className='range' type='range'  />
                  <h5>Price: $39 - $1230</h5>
                  <button>Filter</button>
              </div>
              <h3>Size</h3>

              <div className="size1">

              <div className="size">
                  <p>Small</p>
                  <p>Medium</p>
                  <p>Large</p>
             </div>

              <div className="nums">
                      <p>(33)</p>
                      <p>(12)</p>
                      <p>(65)</p>
                     
              </div>
              </div>
</div>
 <div className="super">
              <img className='sale' src={Super} alt='test'/>
              <h2>UP TO 75% OFF</h2>              
              <img className='gul3' src={gul3} alt='test'/>
</div>


      </div>
    )
  }
}
