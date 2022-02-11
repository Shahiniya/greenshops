import React, { Component } from 'react'
import './section1.css'
import big from './section1-images/big.png'
import small from './section1-images/small.png'

export default class Section1 extends Component {
  render() {
    return (
      <div className='section1-container'>
          <div className="section1-left">
              <p className='text1' >WELLCOME TO GREENSHOP</p>
              <p className='text2' >LET'S MAKE A <br/> BETTER <span className='planet' >PLANET</span></p>
              <p className='text3' >We are an online plant shop offering a wide range of cheap and trendy plants. Use
             <br/> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
             <button>Shop now</button>
              
          </div>
          <div className="section1-right">
              <img className='gul1' src={big} alt='test' />
              <img className='gul2' src={small} alt='test' />

          </div>
      </div>
    )
  }
}
