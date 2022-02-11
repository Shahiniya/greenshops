// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Section1 from './section1.jsx';
import Navbar from './navbar.jsx';
import Section2 from './section2.jsx';
import Section3 from './section3';


export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>

      </div>
    )
  }
}
