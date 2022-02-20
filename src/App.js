// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Section1 from './section1/section1.jsx';
import Navbar from './navbar/navbar.jsx';
import Section2 from './section2/section2.jsx';
import Section3 from './section3/section3.jsx';
import Section4 from './section4.jsx';
import Section9 from './section9.jsx';




export default class App extends Component {
 
  render() {
    return (

      <div className='main'>
      {

      }
        <Navbar/>
        <Section1/>
       <div style={{display:'flex', width:'100%',}}>
       <Section2/>
        <Section3/>
      </div>
      <Section4/>
      <Section9/>

      </div>
    )
  }
}
