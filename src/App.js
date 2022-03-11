// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Section1 from './Component/section1/section1.jsx';
// import Navbar from './Component/navbar/navbar.jsx';
import Section2 from './Component/section2/section2.jsx';
import Section3 from './Component/section3/section3.jsx';
import {Section4} from './Component/section4/section4.jsx';
// import Section9 from './Component/section9/section9.jsx';
// import Section10 from './Component/section10/index.jsx';
// import {Section} from './Component/section11/index.jsx';
// import {Section12} from './Component/section12/index.jsx';







export default class App extends Component {
 
  render() {
    return (

      <div className='main'>
     
        <Section1/>
       <div style={{display:'flex', width:'100%',}}>
       <Section2/>
        <Section3/>
      </div>
      <Section4/>
      
      


      </div>
    )
  }
}
